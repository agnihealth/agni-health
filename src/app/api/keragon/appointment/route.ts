import { NextRequest, NextResponse } from "next/server";
import { sendConversionEvent } from "@/lib/meta-conversions";

const KERAGON_SECRET = process.env.KERAGON_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  // Validate shared secret
  const secret = req.headers.get("x-keragon-secret");
  if (!KERAGON_SECRET || secret !== KERAGON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();

    // Keragon passes through Healthie fields — map them here
    const email: string | undefined = body.email || body.patient_email;
    const appointmentId: string | undefined =
      body.appointment_id || body.id;
    const appointmentType: string | undefined =
      body.appointment_type || body.appointment_type_name;

    if (!email) {
      return NextResponse.json(
        { error: "Missing email — cannot fire conversion event" },
        { status: 400 }
      );
    }

    const forwardedFor = req.headers.get("x-forwarded-for");
    const ipAddress = forwardedFor?.split(",")[0]?.trim();
    const userAgent = req.headers.get("user-agent") || undefined;

    const result = await sendConversionEvent({
      eventName: "Schedule",
      email,
      sourceUrl: "https://agnihealth.co/book",
      ipAddress,
      userAgent,
      customData: {
        content_name: appointmentType || "Initial Consultation",
        content_ids: appointmentId ? [appointmentId] : undefined,
        content_type: "appointment",
      },
    });

    if (!result.success) {
      console.error("Meta Schedule event failed:", result.error);
      // Still return 200 — don't make Keragon retry on Meta failures
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Keragon appointment webhook error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
