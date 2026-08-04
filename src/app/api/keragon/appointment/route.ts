import { NextRequest, NextResponse } from "next/server";
import { sendConversionEvent } from "@/lib/meta-conversions";
import { uploadBookingCompletedConversion } from "@/lib/google-ads-conversions";
import { findRecentUnusedGclid, markGclidUsed } from "@/lib/gclid-lookup";

const POSTHOG_API_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = "https://us.i.posthog.com";

async function capturePostHogEvent(event: string, properties: Record<string, unknown>) {
  if (!POSTHOG_API_KEY) return;
  try {
    await fetch(`${POSTHOG_HOST}/capture/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: POSTHOG_API_KEY,
        event,
        distinct_id: (properties.appointment_id as string) || "server",
        properties,
      }),
    });
  } catch (err) {
    console.error("PostHog capture failed:", err);
  }
}

const KERAGON_SECRET = process.env.KERAGON_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  // Validate shared secret
  const secret = req.headers.get("x-keragon-secret");
  if (!KERAGON_SECRET || secret !== KERAGON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();

    // Healthie webhook sends resource_id as appointment_id
    const appointmentId: string | undefined =
      body.appointment_id?.toString() || body.resource_id?.toString() || body.id?.toString();

    // Email is optional — Healthie webhook doesn't include it
    // Without email, Meta still counts the conversion but can't match to ad click
    const email: string | undefined = body.email || body.patient_email;

    if (!appointmentId) {
      return NextResponse.json(
        { error: "Missing appointment_id" },
        { status: 400 }
      );
    }

    const forwardedFor = req.headers.get("x-forwarded-for");
    // Meta requires user_data with at least IP + user-agent for event matching
    // Fallback to placeholder values if not present (Keragon webhook won't have patient's real IP)
    const ipAddress = forwardedFor?.split(",")[0]?.trim() || "0.0.0.0";
    const userAgent = req.headers.get("user-agent") || "Keragon-Webhook/1.0";

    const eventData: Parameters<typeof sendConversionEvent>[0] = {
      eventName: "Schedule",
      sourceUrl: "https://agnihealth.co/book",
      ipAddress,
      userAgent,
      customData: {
        content_name: "Appointment",
        content_ids: [appointmentId],
        content_type: "appointment",
      },
    };

    // Include email if available (improves attribution)
    if (email) {
      eventData.email = email;
    }

    const result = await sendConversionEvent(eventData);

    if (!result.success) {
      console.error("Meta Schedule event failed:", result.error);
      // Still return 200 — don't make Keragon retry on Meta failures
    }

    console.log(`Schedule event fired for appointment ${appointmentId}`, {
      hasEmail: !!email,
      metaSuccess: result.success,
    });

    await capturePostHogEvent("booking_completed", {
      appointment_id: appointmentId,
      has_email: !!email,
      source: "keragon_webhook",
    });

    // Real, verified "Booking Completed" conversion for Google Ads — only
    // fires here, on a genuine Healthie booking event, not on /book page load.
    // Healthie's webhook doesn't pass through gclid, so we best-effort
    // correlate against the most recent gclid captured on /book (see
    // src/lib/gclid-lookup.ts). If no gclid is found (e.g. organic/direct
    // traffic, or outside the lookback window), we skip the upload —
    // no gclid means Google Ads has nothing to attribute the conversion to.
    const gclidRecord = await findRecentUnusedGclid();
    if (gclidRecord) {
      const uploadResult = await uploadBookingCompletedConversion({
        gclid: gclidRecord.gclid,
        orderId: appointmentId,
      });
      if (uploadResult.success) {
        await markGclidUsed(gclidRecord.id);
      } else {
        console.error("Google Ads conversion upload failed for appointment", appointmentId, uploadResult.error);
      }
    } else {
      console.log(`No recent gclid found for appointment ${appointmentId} — skipping Google Ads conversion upload`);
    }

    return NextResponse.json({ success: true, appointmentId });
  } catch (err) {
    console.error("Keragon appointment webhook error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
