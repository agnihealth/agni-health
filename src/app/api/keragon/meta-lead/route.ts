import { NextRequest, NextResponse } from "next/server";
import { trackServerEvent } from "@/lib/posthog-server";
import { sendConversionEvent } from "@/lib/meta-conversions";

const KERAGON_SECRET = process.env.KERAGON_WEBHOOK_SECRET;
const AIRTABLE_PAT = process.env.AIRTABLE_PAT!;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID!;

const TABLE_IDS = {
  executive: "tbljkeFXBbWOB921a",
  general: "tblBNabD75eELxnYA",
  out_of_state: "tblwUrHSkEMgjIKHx",
};

export async function POST(req: NextRequest) {
  // Validate shared secret
  const secret = req.headers.get("x-keragon-secret");
  if (!KERAGON_SECRET || secret !== KERAGON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();

    // Keragon Facebook Lead Ads payload typically includes:
    // email, full_name, phone_number, and any custom form fields
    const email: string | undefined = body.email || body.Email;
    const name: string | undefined = body.full_name || body.name || body.Name || "";

    if (!email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 });
    }

    // Save to Airtable (general waitlist table — Meta lead ads are untargeted)
    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_IDS.general}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_PAT}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Email: email,
            Name: name,
            "Created At": new Date().toISOString(),
            Notes: "Source: Meta Lead Ad",
          },
        }),
      }
    );

    if (!airtableRes.ok) {
      const err = await airtableRes.json();
      console.error("Airtable error:", err);
      // Don't block — still fire analytics
    }

    // Track in PostHog (server-side)
    await trackServerEvent(email, "Lead", {
      waitlist_type: "general",
      source: "meta_lead_ad",
      name,
    });

    // Fire Meta Conversions API event for deduplication
    // (Meta already knows about this lead, but the CAPI call helps with attribution)
    await sendConversionEvent({
      eventName: "Lead",
      email,
      sourceUrl: "https://www.facebook.com/lead_ad",
      ipAddress: "0.0.0.0", // Not available from lead ad form
      userAgent: "Keragon-Webhook/1.0",
      customData: {
        content_name: "meta_lead_ad",
      },
    });

    console.log(`Meta lead captured: ${email}`);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Meta lead webhook error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
