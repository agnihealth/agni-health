import { NextRequest, NextResponse } from "next/server";

const PAT = process.env.AIRTABLE_PAT!;
const BASE_ID = process.env.AIRTABLE_BASE_ID!;

const TABLE_IDS = {
  executive: "tbljkeFXBbWOB921a",
  state: "tblwUrHSkEMgjIKHx",
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

    if (!["executive", "state"].includes(type)) {
      return NextResponse.json(
        { error: 'Invalid type. Must be "executive" or "state"' },
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

    if (!res.ok) {
      const err = await res.json();
      console.error("Airtable error:", err);
      return NextResponse.json(
        { error: "Failed to save to waitlist" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
