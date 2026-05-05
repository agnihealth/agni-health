import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import HeroImage from "./components/HeroImage";
import TrackedLink from "./components/TrackedLink";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-[family-name:var(--font-jakarta)]">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo-transparent.png" 
            alt="Agni Health" 
            width={320} 
            height={80} 
            className="h-12 sm:h-16 md:h-20 w-auto"
          />
        </Link>
        <div className="flex items-center gap-8">
          <Link href="#about" className="text-zinc-400 hover:text-white transition-colors text-sm">
            About
          </Link>
          <Link href="#approach" className="text-zinc-400 hover:text-white transition-colors text-sm">
            Our Approach
          </Link>
          <TrackedLink 
            href="/start" 
            eventName="cta_click"
            eventProperties={{ location: 'nav', button: 'book_consultation' }}
            className="bg-[#d4a088] text-[#0a1628] px-5 py-2.5 rounded text-sm font-medium hover:bg-[#e0b098] transition-colors"
          >
            Book Consultation
          </TrackedLink>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-8 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-[#d4a088] text-sm font-medium tracking-wider uppercase">
                Board-Certified Physician Care
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Metabolic care built for
              <br />
              <span className="text-[#d4a088]">South Asian biology.</span>
            </h1>
            
            <p className="text-xl text-zinc-400 leading-relaxed max-w-lg">
              Your biology works differently. Your healthcare should too.
              Evidence-based protocols calibrated for the metabolic patterns 
              that affect South Asians—not generic guidelines built for someone else.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <TrackedLink 
                href="/start"
                eventName="cta_click"
                eventProperties={{ location: 'hero', button: 'start_consultation' }}
                className="bg-[#d4a088] text-[#0a1628] px-8 py-4 rounded text-base font-medium hover:bg-[#e0b098] transition-colors"
              >
                Start Your Consultation
              </TrackedLink>
              <Link 
                href="#approach"
                className="text-zinc-400 hover:text-white transition-colors text-base flex items-center gap-2"
              >
                How it works
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-8 pt-8 border-t border-zinc-800">
              <div>
                <div className="text-xl font-semibold text-white">Physician-led</div>
                <div className="text-sm text-zinc-500">Direct MD care</div>
              </div>
              <div className="w-px h-12 bg-zinc-800" />
              <div>
                <div className="text-xl font-semibold text-white">Board Certified</div>
                <div className="text-sm text-zinc-500">Internal Medicine</div>
              </div>
              <div className="w-px h-12 bg-zinc-800" />
              <div>
                <div className="text-xl font-semibold text-white">Telehealth</div>
                <div className="text-sm text-zinc-500">CA · LA · MA</div>
              </div>
            </div>
          </div>

          {/* Right side - A/B tested hero image */}
          <div className="hidden lg:block">
            <Suspense fallback={<div className="aspect-[4/3] rounded-2xl bg-[#1a2d4a] animate-pulse" />}>
              <HeroImage />
            </Suspense>
          </div>
        </div>
      </main>

      {/* The Problem section */}
      <section className="bg-[#0d1c30] py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            South Asians face <span className="text-[#d4a088]">2x the risk</span> of metabolic disease
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Yet standard medical guidelines were built on studies that largely excluded us. 
            Different insulin sensitivity. Different fat distribution. Different thresholds for risk. 
            You deserve care that accounts for these differences—not generic advice that misses the mark.
          </p>
        </div>
      </section>

      {/* Features section */}
      <section id="approach" className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              A different approach to <span className="text-[#d4a088]">metabolic health</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Physician-led care. South Asian-calibrated protocols. Results that last.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-[#0d1c30] border border-zinc-800">
              <div className="w-12 h-12 rounded-lg bg-[#d4a088]/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#d4a088]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">South Asian Calibrated</h3>
              <p className="text-zinc-400 leading-relaxed">
                We use South Asian-specific thresholds for BMI, waist circumference, and metabolic markers. 
                What's "normal" for others may already be risky for you.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#0d1c30] border border-zinc-800">
              <div className="w-12 h-12 rounded-lg bg-[#d4a088]/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#d4a088]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Beyond A1c</h3>
              <p className="text-zinc-400 leading-relaxed">
                We track fasting insulin, HOMA-IR, ApoB, visceral fat, and metabolic markers 
                that predict risk years before standard tests show problems.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#0d1c30] border border-zinc-800">
              <div className="w-12 h-12 rounded-lg bg-[#d4a088]/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#d4a088]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Physician-Led Care</h3>
              <p className="text-zinc-400 leading-relaxed">
                Direct access to a board-certified internal medicine physician. 
                No rushed follow-ups, no handoffs. Continuity matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-16 text-center">
            How it <span className="text-[#d4a088]">works</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#d4a088]/10 flex items-center justify-center mx-auto mb-6 text-2xl font-semibold text-[#d4a088]">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Initial Consultation</h3>
              <p className="text-zinc-400">
                30-minute video visit to understand your history, goals, and concerns. 
                We'll order comprehensive labs tailored to South Asian metabolic risk.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#d4a088]/10 flex items-center justify-center mx-auto mb-6 text-2xl font-semibold text-[#d4a088]">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Protocol</h3>
              <p className="text-zinc-400">
                Based on your results, we create a protocol covering nutrition, movement, 
                sleep, and medication if appropriate—all calibrated to your biology.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#d4a088]/10 flex items-center justify-center mx-auto mb-6 text-2xl font-semibold text-[#d4a088]">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
              <p className="text-zinc-400">
                Async messaging, regular check-ins, and adjustments as your body responds. 
                This isn't a one-time visit—it's continuous care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-[#0d1c30]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#1a2d4a]">
                <Image
                  src="/dr-japa.jpg"
                  alt="Dr. Sohan Japa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div>
              <span className="text-[#d4a088] text-sm font-medium tracking-wider uppercase">
                Your Physician
              </span>
              <h2 className="text-4xl font-bold mt-4 mb-6">
                Dr. Sohan Japa, MD
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  I earned my MD at Stanford and trained in internal medicine at Brigham and 
                  Women's Hospital. Over the past decade, I've practiced at some of the country's 
                  top academic medical centers—Mount Sinai, UCSF—caring for 
                  thousands of patients across New York and the Bay Area.
                </p>
                <p>
                  But I kept noticing the same pattern: South Asian patients doing everything 
                  "right" and still developing diabetes. "Normal" BMIs hiding dangerous metabolic 
                  profiles. Standard guidelines missing the mark by years. Our biology is different, 
                  and the research is clear—but mainstream medicine hasn't caught up.
                </p>
                <p>
                  I lived it too. Despite being a physician, I found myself at 27% body fat—"healthy" 
                  by standard charts, but I knew better. I dropped to 12% through diet and exercise 
                  alone, using protocols calibrated for South Asian metabolism.
                </p>
                <p>
                  That's why I started Agni Health: to bring the same evidence-based, South Asian-specific 
                  approach to patients who deserve care that actually understands their biology.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm">
                  <div>
                    <div className="text-white font-medium">Stanford</div>
                    <div className="text-zinc-500">MD</div>
                  </div>
                  <div className="w-px h-10 bg-zinc-800 hidden sm:block" />
                  <div>
                    <div className="text-white font-medium">Harvard / Brigham</div>
                    <div className="text-zinc-500">Residency</div>
                  </div>
                  <div className="w-px h-10 bg-zinc-800 hidden sm:block" />
                  <div>
                    <div className="text-white font-medium">10+ Years</div>
                    <div className="text-zinc-500">Clinical Experience</div>
                  </div>
                  <div className="w-px h-10 bg-zinc-800 hidden sm:block" />
                  <div>
                    <div className="text-white font-medium">Board Certified</div>
                    <div className="text-zinc-500">Internal Medicine</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Simple, <span className="text-[#d4a088]">transparent</span> pricing
          </h2>
          <p className="text-zinc-400 text-lg text-center mb-12 max-w-2xl mx-auto">
            One membership. Complete metabolic care. No surprise bills.
          </p>
          
          <div className="bg-[#0a1628] border border-zinc-800 rounded-2xl p-8 md:p-12 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-[#d4a088] text-sm font-medium tracking-wider uppercase mb-4">
                12-Month Membership
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-bold">$299</span>
                <span className="text-zinc-400">/first month</span>
              </div>
              <div className="text-xl text-zinc-400 mb-6">
                then <span className="text-white font-semibold">$199</span>/month
              </div>
              
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#d4a088] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Initial consultation + comprehensive labs</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#d4a088] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Personalized metabolic protocol</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#d4a088] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Unlimited async messaging with your physician</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#d4a088] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Monthly follow-up visits</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#d4a088] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Ongoing protocol adjustments</span>
                </li>
              </ul>
              
              <p className="text-zinc-500 text-sm mb-8">
                Medications (including GLP-1s) not included and billed separately if prescribed.
              </p>
              
              <TrackedLink 
                href="/start"
                eventName="cta_click"
                eventProperties={{ location: 'pricing', button: 'get_started' }}
                className="block w-full bg-[#d4a088] text-[#0a1628] px-8 py-4 rounded text-base font-medium hover:bg-[#e0b098] transition-colors text-center"
              >
                Get Started
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="py-24 bg-gradient-to-b from-[#0a1628] to-[#0d1c30]">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for care that gets your biology?
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            Schedule a consultation to discuss your metabolic health goals.
          </p>
          <TrackedLink 
            href="/start"
            eventName="cta_click"
            eventProperties={{ location: 'bottom_cta', button: 'start_consultation' }}
            className="inline-block bg-[#d4a088] text-[#0a1628] px-10 py-4 rounded text-lg font-medium hover:bg-[#e0b098] transition-colors"
          >
            Start Your Consultation
          </TrackedLink>
          <p className="text-zinc-500 text-sm mt-6">
            Currently accepting patients in California, Louisiana, and Massachusetts
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between">
            <div>
              <Image 
                src="/logo-transparent.png" 
                alt="Agni Health" 
                width={240} 
                height={60} 
                className="h-10 sm:h-14 md:h-16 w-auto mb-2"
              />
              <div className="text-sm text-zinc-500">
                © 2026 Agni Health. All rights reserved.
              </div>
            </div>
            <div className="text-right text-sm text-zinc-500">
              <p>Board-certified internal medicine</p>
              <p>Telehealth practice</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
