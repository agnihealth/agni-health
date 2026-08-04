import { NextRequest, NextResponse } from "next/server";

const PAT = process.env.AIRTABLE_PAT!;
const BASE_ID = process.env.AIRTABLE_BASE_ID!;
const GCLID_TABLE_ID = "tblB5byOkiAHv8ikW"; // GclidTracking

// Captures a Google Ads click ID (gclid) the moment a visitor reaches /book,
// keyed by their anon_id + a timestamp. This lets the Keragon webhook later
// correlate a genuine completed Healthie booking back to the ad click that
// drove it, since the Healthie iframe has no way to pass custom data through
// to its own booking-confirmation webhook.
export async function POST(req: NextRequest) {
  try {
    const { gclid, anonId } = await req.json();

    if (!gclid) {
      return NextResponse.json({ error: "Missing gclid" }, { status: 400 });
    }

    const res = await fetch(
      `https://api.airtable.com/v0/${BASE_ID}/${GCLID_TABLE_ID}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${PAT}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Gclid: gclid,
            AnonId: anonId || "",
            CapturedAt: new Date().toISOString(),
            Used: false,
          },
        }),
      }
    );

    if (!res.ok) {
      const err = await res.json();
      console.error("Airtable gclid save error:", err);
      return NextResponse.json({ error: "Failed to save gclid" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("track-gclid route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
