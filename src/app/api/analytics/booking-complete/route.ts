import { NextRequest, NextResponse } from 'next/server';

// Webhook endpoint for booking completions
// Can be called by Healthie webhook or client-side after booking success

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Extract relevant data
    const {
      appointment_id,
      client_email,
      appointment_type,
      hero_variant, // passed from client if available
      source,
    } = body;

    // Send to PostHog server-side
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      await fetch(`${process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'}/capture/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: process.env.NEXT_PUBLIC_POSTHOG_KEY,
          event: 'booking_completed',
          distinct_id: client_email || 'anonymous',
          properties: {
            appointment_id,
            appointment_type,
            hero_variant,
            source: source || 'healthie_webhook',
            $current_url: 'https://agnihealth.co/book',
          },
        }),
      });
    }

    // Log for debugging
    console.log('[Analytics] Booking completed:', {
      appointment_id,
      appointment_type,
      hero_variant,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Analytics] Error processing booking:', error);
    return NextResponse.json(
      { error: 'Failed to process booking event' },
      { status: 500 }
    );
  }
}

// Also support GET for health checks
export async function GET() {
  return NextResponse.json({ status: 'ok', endpoint: 'booking-complete' });
}
