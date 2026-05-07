import crypto from "crypto";

const PIXEL_ID = "1713148253376763";
const ACCESS_TOKEN = process.env.META_CONVERSIONS_API_TOKEN;
const API_VERSION = "v19.0";

interface EventData {
  event_name: string;
  event_time: number;
  event_source_url?: string;
  user_data: {
    em?: string; // hashed email
    client_ip_address?: string;
    client_user_agent?: string;
    fbc?: string; // click ID
    fbp?: string; // browser ID
  };
  custom_data?: Record<string, unknown>;
  action_source: "website";
}

function hashSHA256(value: string): string {
  return crypto.createHash("sha256").update(value.toLowerCase().trim()).digest("hex");
}

export async function sendConversionEvent({
  eventName,
  email,
  sourceUrl,
  ipAddress,
  userAgent,
  customData,
}: {
  eventName: string;
  email?: string;
  sourceUrl?: string;
  ipAddress?: string;
  userAgent?: string;
  customData?: Record<string, unknown>;
}): Promise<{ success: boolean; error?: string }> {
  if (!ACCESS_TOKEN) {
    console.warn("META_CONVERSIONS_API_TOKEN not set, skipping server event");
    return { success: false, error: "No access token" };
  }

  const eventData: EventData = {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_source_url: sourceUrl,
    user_data: {
      em: email ? hashSHA256(email) : undefined,
      client_ip_address: ipAddress,
      client_user_agent: userAgent,
    },
    custom_data: customData,
    action_source: "website",
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [eventData],
          access_token: ACCESS_TOKEN,

        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("Meta Conversions API error:", error);
      return { success: false, error: JSON.stringify(error) };
    }

    const result = await response.json();
    console.log("Meta Conversions API success:", result);
    return { success: true };
  } catch (err) {
    console.error("Meta Conversions API exception:", err);
    return { success: false, error: String(err) };
  }
}
