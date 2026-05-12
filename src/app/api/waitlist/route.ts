import { NextRequest, NextResponse } from "next/server";
import { sendConversionEvent } from "@/lib/meta-conversions";

const PAT = process.env.AIRTABLE_PAT!;
const BASE_ID = process.env.AIRTABLE_BASE_ID!;

const TABLE_IDS = {
  executive: "tbljkeFXBbWOB921a",
  general: "tblBNabD75eELxnYA",
  out_of_state: "tblwUrHSkEMgjIKHx",
};

export async function POST(req: NextRequest) {
  try {
    const { email, name, type } = await req.json();

    if (!email || !type) {
      return NextResponse.json(
        { error: "Missing required fields: email, type" },
        { status: 400 }
      );
    }

    if (!["executive", "general", "out_of_state"].includes(type)) {
      return NextResponse.json(
        { error: 'Invalid type. Must be "executive", "general", or "out_of_state"' },
        { status: 400 }
      );
    }

    const tableId = TABLE_IDS[type as keyof typeof TABLE_IDS];

    const res = await fetch(
      `https://api.airtable.com/v0/${BASE_ID}/${tableId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${PAT}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Email: email,
            Name: name || "",
            "Created At": new Date().toISOString(),
          },
        }),
      }
    );

    const body = await res.json();
    console.log("[waitlist] Airtable status:", res.status, JSON.stringify(body).slice(0, 200));
    if (!res.ok) {
      console.error("[waitlist] Airtable error:", body);
      return NextResponse.json(
        { error: "Failed to save to waitlist" },
        { status: 500 }
      );
    }

    // Send server-side conversion event to Meta
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ipAddress = forwardedFor?.split(",")[0]?.trim();
    const userAgent = req.headers.get("user-agent") || undefined;
    const referer = req.headers.get("referer") || undefined;

    await sendConversionEvent({
      eventName: "Lead",
      email,
      sourceUrl: referer,
      ipAddress,
      userAgent,
      customData: {
        content_name: `waitlist_${type}`,
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
