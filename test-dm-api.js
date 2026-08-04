#!/usr/bin/env node
// Test Data Manager API conversion upload flow

const BOOKING_COMPLETED_CONVERSION_ACTION_ID = "7708889681";
const DATA_MANAGER_INGEST_URL = "https://datamanager.googleapis.com/v1/events:ingest";

async function getAccessToken() {
  // In production, use the refresh token from env vars
  // For this test, we'll need valid credentials
  const clientId = process.env.GOOGLE_ADS_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_ADS_OAUTH_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_ADS_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    console.error("Missing OAuth credentials in env vars");
    process.exit(1);
  }

  const params = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  });

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  const json = await res.json();
  if (!res.ok) {
    console.error("Token refresh failed:", json);
    process.exit(1);
  }

  return json.access_token;
}

async function uploadConversion(gclid, orderId) {
  try {
    const accessToken = await getAccessToken();
    const customerId = (process.env.GOOGLE_ADS_CUSTOMER_ID || "").replace(/-/g, "");
    const managerCustomerId = (process.env.GOOGLE_ADS_MANAGER_CUSTOMER_ID || "").replace(/-/g, "");

    const body = {
      destinations: [
        {
          operatingAccount: {
            accountType: "GOOGLE_ADS",
            accountId: customerId,
          },
          loginAccount: {
            accountType: "GOOGLE_ADS",
            accountId: managerCustomerId,
          },
          productDestinationId: BOOKING_COMPLETED_CONVERSION_ACTION_ID,
        },
      ],
      events: [
        {
          ...(orderId ? { transactionId: orderId } : {}),
          eventTimestamp: new Date().toISOString(),
          adIdentifiers: {
            gclid: gclid,
          },
          currency: "USD",
          conversionValue: 1,
        },
      ],
    };

    console.log("Request body:", JSON.stringify(body, null, 2));
    console.log("\nSending to:", DATA_MANAGER_INGEST_URL);

    const res = await fetch(DATA_MANAGER_INGEST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    const responseJson = await res.json();

    console.log("\nResponse status:", res.status);
    console.log("Response body:", JSON.stringify(responseJson, null, 2));

    if (!res.ok) {
      console.error("\n❌ FAILED");
      process.exit(1);
    }

    if (responseJson.fieldWarnings && responseJson.fieldWarnings.length > 0) {
      console.warn("\n⚠️ Warnings:", responseJson.fieldWarnings);
    }

    console.log("\n✅ SUCCESS");
    process.exit(0);
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
}

const gclid = process.argv[2] || `TEST_GCLID_DM_${Date.now()}`;
const orderId = process.argv[3] || `order-${Date.now()}`;

console.log("Testing Data Manager API conversion upload");
console.log(`gclid: ${gclid}`);
console.log(`orderId: ${orderId}`);
console.log("");

uploadConversion(gclid, orderId);
