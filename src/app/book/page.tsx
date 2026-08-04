'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { trackEvent, trackMetaEvent, trackGoogleConversion, getAnonId, getHeroVariant } from "../components/Analytics";

function BookContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track booking page view with anon ID + hero variant for correlation
    const anonId = getAnonId();
    trackEvent('booking_page_viewed', {
      anon_id: anonId,
      hero_variant: getHeroVariant() || 'unknown',
    });
    trackMetaEvent('InitiateCheckout', { content_name: 'consultation_booking' });
    // Google Ads conversion: "Booking Started" action, fired on reaching the
    // booking page. This is a proxy for intent, NOT a real completed booking —
    // the Healthie iframe has no redirect/postMessage back to us, so we can't
    // detect actual completion client-side. The real "Booking Completed"
    // conversion is uploaded server-side from /api/keragon/appointment once
    // Healthie confirms a booking actually happened (see gclid correlation below).
    trackGoogleConversion('AW-10887208227/18_tCJyLodUcEKO6tsco');

    // Capture gclid (if present on this visit) and stash it keyed by anon_id
    // so the Keragon webhook can later correlate a real Healthie booking back
    // to the ad click for accurate server-side conversion upload.
    const gclid = searchParams.get('gclid');
    if (gclid) {
      fetch('/api/track-gclid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gclid, anonId }),
      }).catch(() => {});
    }
  }, [searchParams]);


  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-[family-name:var(--font-jakarta)]">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo-transparent.png" 
            alt="Agni Health" 
            width={400} 
            height={100} 
            className="h-[75px] sm:h-[113px] md:h-[138px] w-auto"
          />
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/#about" className="text-zinc-400 hover:text-white transition-colors text-sm">
            About
          </Link>
          <Link href="/#approach" className="text-zinc-400 hover:text-white transition-colors text-sm">
            Our Approach
          </Link>
        </div>
      </nav>

      {/* Booking section */}
      <main className="max-w-4xl mx-auto px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Schedule Your Consultation</h1>

        </div>
        
        <div className="bg-white rounded-xl overflow-hidden">
          <iframe
            src="https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=15592590"
            width="100%"
            height="800"
            frameBorder="0"
            title="Book Appointment"
            className="w-full"
          />
        </div>

        <p className="text-center text-zinc-500 text-sm mt-8">
          Currently accepting patients in California and Massachusetts.
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-8 text-center text-sm text-zinc-500">
          © 2026 Agni Health. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default function Book() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <BookContent />
    </Suspense>
  );
}
