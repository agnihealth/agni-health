'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { trackEvent } from "../components/Analytics";

export default function Book() {
  useEffect(() => {
    // Track booking page view with hero variant for correlation
    const heroVariant = localStorage.getItem('agni-hero-variant');
    trackEvent('booking_page_viewed', {
      hero_variant: heroVariant ? `v${parseInt(heroVariant) + 1}` : 'unknown',
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-[family-name:var(--font-jakarta)]">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo-v2.png" 
            alt="Agni Health" 
            width={160} 
            height={40} 
            className="h-10 w-auto"
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
          <p className="text-zinc-400">
            Select a time that works for you. Initial consultations are 30 minutes via video.
          </p>
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
          Currently accepting patients in California, Louisiana, and Massachusetts.
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
