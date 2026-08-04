// Server-side Google Ads click-conversion upload.
// Uploads a real "Booking Completed (Verified)" conversion, tied to a gclid,
// only when we have actual confirmation from Healthie that a booking happened.
// This is distinct from the client-side "Booking Started" pageload conversion
// on /book, which just measures intent to book.
//
// NOTE: Uses the Data Manager API (datamanager.googleapis.com), not the legacy
// Google Ads API ConversionUploadService.UploadClickConversions endpoint.
// New adopters of offline/click conversion upload are gated by Google
// (CUSTOMER_NOT_ALLOWLISTED_FOR_THIS_FEATURE) and required to use Data Manager
// API instead. Requires OAuth scope https://www.googleapis.com/auth/datamanager
// on the refresh token in addition to https://www.googleapis.com/auth/adwords.

const BOOKING_COMPLETED_CONVERSION_ACTION_ID = "7708889681"; // "Booking Completed (Verified)", type UPLOAD_CLICKS
const DATA_MANAGER_INGEST_URL = "https://datamanager.googleapis.com/v1/events:ingest";

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

// eventTimestamp must be RFC 3339, e.g. "2026-08-04T19:12:38Z"
function formatEventTimestamp(date: Date): string {
  return date.toISOString();
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
    const managerCustomerId = creds.manager_customer_id.replace(/-/g, "");

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
          ...(params.orderId ? { transactionId: params.orderId } : {}),
          eventTimestamp: formatEventTimestamp(params.conversionDateTime || new Date()),
          adIdentifiers: {
            gclid: params.gclid,
          },
          currency: "USD",
          conversionValue: 1,
        },
      ],
    };

    const res = await fetch(DATA_MANAGER_INGEST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    const json = await res.json();

    if (!res.ok) {
      console.error("Google Ads (Data Manager API) conversion upload failed:", JSON.stringify(json));
      return { success: false, error: JSON.stringify(json) };
    }

    if (json.fieldWarnings && json.fieldWarnings.length > 0) {
      console.warn("Google Ads (Data Manager API) conversion upload warnings:", JSON.stringify(json.fieldWarnings));
    }

    return { success: true };
  } catch (err) {
    console.error("Google Ads (Data Manager API) conversion upload error:", err);
    return { success: false, error: err instanceof Error ? err.message : String(err) };
  }
}
