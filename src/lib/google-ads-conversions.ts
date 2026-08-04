// Server-side Google Ads click-conversion upload.
// Uploads a real "Booking Completed (Verified)" conversion, tied to a gclid,
// only when we have actual confirmation from Healthie that a booking happened.
// This is distinct from the client-side "Booking Started" pageload conversion
// on /book, which just measures intent to book.

const GOOGLE_ADS_API_VERSION = "v25";
const BOOKING_COMPLETED_CONVERSION_ACTION_ID = "7708889681"; // "Booking Completed (Verified)", type UPLOAD_CLICKS

interface GoogleAdsCreds {
  developer_token: string;
  manager_customer_id: string;
  agni_health_customer_id: string;
  oauth_client_id: string;
  oauth_client_secret: string;
  refresh_token: string;
}

function getCreds(): GoogleAdsCreds | null {
  const developer_token = process.env.GOOGLE_ADS_DEVELOPER_TOKEN;
  const manager_customer_id = process.env.GOOGLE_ADS_MANAGER_CUSTOMER_ID;
  const agni_health_customer_id = process.env.GOOGLE_ADS_CUSTOMER_ID;
  const oauth_client_id = process.env.GOOGLE_ADS_OAUTH_CLIENT_ID;
  const oauth_client_secret = process.env.GOOGLE_ADS_OAUTH_CLIENT_SECRET;
  const refresh_token = process.env.GOOGLE_ADS_REFRESH_TOKEN;

  if (
    !developer_token ||
    !manager_customer_id ||
    !agni_health_customer_id ||
    !oauth_client_id ||
    !oauth_client_secret ||
    !refresh_token
  ) {
    return null;
  }

  return {
    developer_token,
    manager_customer_id,
    agni_health_customer_id,
    oauth_client_id,
    oauth_client_secret,
    refresh_token,
  };
}

async function getAccessToken(creds: GoogleAdsCreds): Promise<string> {
  const params = new URLSearchParams({
    client_id: creds.oauth_client_id,
    client_secret: creds.oauth_client_secret,
    refresh_token: creds.refresh_token,
    grant_type: "refresh_token",
  });
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(`Google Ads token refresh failed: ${JSON.stringify(json)}`);
  }
  return json.access_token;
}

// conversionDateTime must be "yyyy-MM-dd HH:mm:ss+HH:mm"
function formatConversionDateTime(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  const y = date.getUTCFullYear();
  const mo = pad(date.getUTCMonth() + 1);
  const d = pad(date.getUTCDate());
  const h = pad(date.getUTCHours());
  const mi = pad(date.getUTCMinutes());
  const s = pad(date.getUTCSeconds());
  return `${y}-${mo}-${d} ${h}:${mi}:${s}+00:00`;
}

export async function uploadBookingCompletedConversion(params: {
  gclid: string;
  conversionDateTime?: Date;
  orderId?: string;
}): Promise<{ success: boolean; error?: string }> {
  const creds = getCreds();
  if (!creds) {
    console.warn("Google Ads conversion upload skipped — credentials not configured");
    return { success: false, error: "Google Ads credentials not configured" };
  }

  try {
    const accessToken = await getAccessToken(creds);
    const customerId = creds.agni_health_customer_id.replace(/-/g, "");
    const loginCustomerId = creds.manager_customer_id.replace(/-/g, "");

    const url = `https://googleads.googleapis.com/${GOOGLE_ADS_API_VERSION}/customers/${customerId}:uploadClickConversions`;

    const body = {
      conversions: [
        {
          gclid: params.gclid,
          conversionAction: `customers/${customerId}/conversionActions/${BOOKING_COMPLETED_CONVERSION_ACTION_ID}`,
          conversionDateTime: formatConversionDateTime(params.conversionDateTime || new Date()),
          conversionValue: 1,
          currencyCode: "USD",
          ...(params.orderId ? { orderId: params.orderId } : {}),
        },
      ],
      partialFailure: true,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        "developer-token": creds.developer_token,
        "login-customer-id": loginCustomerId,
      },
      body: JSON.stringify(body),
    });

    const json = await res.json();

    if (!res.ok) {
      console.error("Google Ads conversion upload failed:", JSON.stringify(json));
      return { success: false, error: JSON.stringify(json) };
    }

    if (json.partialFailureError) {
      console.error("Google Ads conversion upload partial failure:", JSON.stringify(json.partialFailureError));
      return { success: false, error: JSON.stringify(json.partialFailureError) };
    }

    return { success: true };
  } catch (err) {
    console.error("Google Ads conversion upload error:", err);
    return { success: false, error: err instanceof Error ? err.message : String(err) };
  }
}
