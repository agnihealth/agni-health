import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import HeroImage from "./components/HeroImage";
import HeroHeadline from "./components/HeroHeadline";
import TrackedLink from "./components/TrackedLink";
import NavBar from "./components/NavBar";
import EmailCapture from "./components/EmailCapture";
import SocialProof from "./components/SocialProof";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a1628] text-white font-[family-name:var(--font-jakarta)]">
      {/* Nav */}
      <NavBar />

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 sm:pt-8 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Credential badge */}
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <svg className="w-4 h-4 text-[#d4a088] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span>Stanford &amp; Harvard-trained physician care</span>
            </div>

            <Suspense fallback={
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Your doctor's normal
                <br />
                <span className="text-[#d4a088]">isn't your normal</span>
              </h1>
            }>
              <HeroHeadline />
            </Suspense>

            <div className="space-y-4 pt-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <TrackedLink 
                  href="/start"
                  eventName="cta_click"
                  eventProperties={{ location: 'hero', button: 'book_discovery' }}
                  className="bg-[#d4a088] text-[#0a1628] px-8 py-4 rounded text-base font-medium hover:bg-[#c4906c] transition-colors"
                >
                  Book Your Discovery Call
                </TrackedLink>
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

      {/* Email capture — high on page for bouncy paid traffic */}
      <section className="py-10 sm:py-14 bg-[#0a1628] border-t border-zinc-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <EmailCapture compact />
        </div>
      </section>

      {/* The Problem section */}
      <section className="bg-[#0d1c30] py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              The risk starts <span className="text-[#d4a088]">earlier than you think</span>
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              South Asians accumulate cardiovascular risk by their mid-40s—even with healthier diets and exercise habits than peers.<sup className="text-[10px]">1</sup>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#0a1628] border border-zinc-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-[#d4a088] mb-2">~8×</div>
              <div className="text-white font-medium mb-1">Prediabetes prevalence at 45</div>
              <div className="text-zinc-500 text-sm">South Asian men vs. White peers<sup className="text-[10px]">1</sup></div>
              <div className="text-zinc-600 text-xs mt-2">30.7% vs. 3.9%</div>
            </div>
            <div className="bg-[#0a1628] border border-zinc-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-[#d4a088] mb-2">~3×</div>
              <div className="text-white font-medium mb-1">Prediabetes prevalence at 45</div>
              <div className="text-zinc-500 text-sm">South Asian women vs. White peers<sup className="text-[10px]">1</sup></div>
              <div className="text-zinc-600 text-xs mt-2">17.6% vs. 5.7%</div>
            </div>
            <div className="bg-[#0a1628] border border-zinc-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-[#d4a088] mb-2">2×</div>
              <div className="text-white font-medium mb-1">Higher risk of diabetes by 55</div>
              <div className="text-zinc-500 text-sm">vs. White peers<sup className="text-[10px]">1</sup></div>
              <div className="text-zinc-600 text-xs mt-2">despite healthier behaviors</div>
            </div>
          </div>


        </div>
      </section>

      {/* Consolidated Section: Precision Metabolic Care */}
      <section id="approach" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Metabolic care <span className="text-[#d4a088]">built for South Asians</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Physician-led. Research-backed.
            </p>
          </div>
          
          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 sm:mb-20">
            <div className="p-8 rounded-xl bg-[#0d1c30] border border-zinc-800 text-center">
              <div className="w-12 h-12 rounded-lg bg-[#d4a088]/10 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-6 h-6 text-[#d4a088]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">South Asian Calibrated</h3>
              <p className="text-zinc-400 leading-relaxed">
                Different biology needs different benchmarks. Built on the MASALA Study, the largest U.S. cardiovascular research on South Asians.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#0d1c30] border border-zinc-800 text-center">
              <div className="w-12 h-12 rounded-lg bg-[#d4a088]/10 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-6 h-6 text-[#d4a088]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Beyond A1c</h3>
              <p className="text-zinc-400 leading-relaxed">
                We track fasting insulin, HOMA-IR, ApoB, visceral fat—markers that predict risk 
                years before standard tests show problems.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#0d1c30] border border-zinc-800 text-center">
              <div className="w-12 h-12 rounded-lg bg-[#d4a088]/10 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-6 h-6 text-[#d4a088]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Direct Physician Access</h3>
              <p className="text-zinc-400 leading-relaxed">
                No PAs. No handoffs. Your physician handles everything.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl font-bold mb-10 sm:mb-12 text-center">
              How it <span className="text-[#d4a088]">works</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting line on desktop */}
              <div className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-zinc-800" />

              <div className="text-center relative">
                <div className="w-16 h-16 rounded-full border-2 border-[#d4a088]/40 bg-[#0a1628] flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-[#d4a088] font-mono text-2xl font-bold">01</span>
                </div>
                <h4 className="text-lg font-semibold mb-3">Discovery Call</h4>
                <p className="text-zinc-400 text-base">
                  15-minute video call to understand your history, goals, and concerns.
                </p>
              </div>

              <div className="text-center relative">
                <div className="w-16 h-16 rounded-full border-2 border-[#d4a088]/40 bg-[#0a1628] flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-[#d4a088] font-mono text-2xl font-bold">02</span>
                </div>
                <h4 className="text-lg font-semibold mb-3">Personalized Protocol</h4>
                <p className="text-zinc-400 text-base">
                  Based on lab results, we create a protocol covering nutrition, movement, 
                  sleep, and medication if appropriate.
                </p>
              </div>

              <div className="text-center relative">
                <div className="w-16 h-16 rounded-full border-2 border-[#d4a088]/40 bg-[#0a1628] flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-[#d4a088] font-mono text-2xl font-bold">03</span>
                </div>
                <h4 className="text-lg font-semibold mb-3">Ongoing Support</h4>
                <p className="text-zinc-400 text-base">
                  Async messaging, regular check-ins, and adjustments as your body responds.
                </p>
              </div>
            </div>
            
            <p className="text-[#d4a088] text-lg text-center mt-10 max-w-2xl mx-auto font-medium">
              Most plans run 1–3 years, then transition back to primary care. <u>We&apos;re not here forever — we&apos;re here to fix the problem.</u>
            </p>
          </div>

          {/* Physician Quote */}
          <div className="max-w-2xl mx-auto">
            <div className="border border-zinc-800 rounded-xl p-8 bg-[#0d1c30]">
              <blockquote className="relative text-center">
                <p className="text-zinc-300 text-base leading-relaxed italic mb-4">
                  &ldquo;I lived it too. Despite being a physician, I found myself at 26% body fat—&lsquo;healthy&rsquo; by 
                  standard charts, but I knew better. I dropped to 12% through protocols calibrated for South Asian 
                  metabolism. That&apos;s why I built Agni.&rdquo;
                </p>
                <footer className="text-zinc-500 text-sm">
                  — Dr. Sohan Japa · Founder
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-24 bg-[#0d1c30]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-72 sm:w-96 rounded-2xl overflow-hidden ring-1 ring-zinc-700">
                <Image
                  src="/dr-japa.png"
                  alt="Dr. Sohan Japa"
                  width={384}
                  height={480}
                  unoptimized
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Dr. Sohan Japa
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  I earned my MD at Stanford and trained in internal medicine at Brigham and
                  Women&apos;s Hospital. Over the past decade, I&apos;ve practiced at some of the country&apos;s
                  top academic medical centers—Mount Sinai, UCSF—caring for thousands of patients
                  across New York and the Bay Area.
                </p>
                <p>
                  Throughout my clinical career as well as in my personal life, I kept noticing the
                  same pattern: South Asian patients doing everything &ldquo;right&rdquo; and still developing
                  diabetes. &ldquo;Normal&rdquo; BMIs hiding dangerous metabolic profiles. Standard guidelines
                  missing the mark by years. Our biology is different, and the research is
                  clear—but mainstream medicine hasn&apos;t caught up.
                </p>
                <p>
                  That&apos;s why I started Agni Health.
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

      {/* Social Proof */}
      {/* <SocialProof /> */}

      {/* Pricing */}
      <section id="pricing" className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Simple, <span className="text-[#d4a088]">transparent</span> pricing
          </h2>
          <p className="text-zinc-400 text-lg text-center mb-4 max-w-2xl mx-auto">
          </p>

          {/* Discovery Call */}
          <div className="bg-[#0d1c30] border border-zinc-700 rounded-2xl px-8 py-6 max-w-2xl mx-auto mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="text-[#d4a088] text-xs font-medium tracking-wider uppercase mb-1">Step 1</div>
              <div className="text-white font-semibold text-lg">Discovery Call</div>
              <div className="text-zinc-400 text-sm mt-1">15-minute video call · No commitment required</div>
              <div className="text-[#d4a088] text-xs mt-1">Fee credited toward your 1st month.</div>
            </div>
            <div className="flex items-baseline gap-1 sm:text-right shrink-0">
              <span className="text-4xl font-bold text-white">$50</span>
              <span className="text-zinc-400 text-sm">one-time</span>
            </div>
          </div>

          {/* Membership Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">

            {/* Essential */}
            <div className="bg-[#0a1628] border border-zinc-800 rounded-2xl p-8 flex flex-col relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-zinc-700 text-zinc-200 text-xs font-semibold px-3 py-1 rounded-full">Founding Member Pricing</span>
              </div>
              <div className="text-zinc-400 text-xs font-medium tracking-wider uppercase mb-2 mt-2">Essential</div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-bold">$300</span>
                <span className="text-zinc-400">/mo</span>
              </div>
              <div className="text-[#d4a088] text-xs mb-6">First 25 members lock in this rate permanently.</div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Quarterly 15-min video visits (board-certified MD)",
                  "Quarterly labs included (CBC, CMP, lipids, ApoB, fasting insulin)",
                  "Medication management incl. GLP-1 if appropriate",
                  "Async physician messaging (48-hr response)",
                  "Ongoing labs review & care plan updates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-zinc-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <TrackedLink
                href="/start"
                eventName="cta_click"
                eventProperties={{ location: 'pricing', button: 'essential' }}
                className="block w-full border border-zinc-600 text-white px-6 py-3 rounded text-sm font-medium hover:border-zinc-400 transition-colors text-center"
              >
                Get Started
              </TrackedLink>
            </div>

            {/* Intensive — featured */}
            <div className="bg-[#0a1628] border-2 border-[#d4a088] rounded-2xl p-8 relative flex flex-col">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-2 whitespace-nowrap">
                <span className="bg-zinc-700 text-zinc-200 text-xs font-semibold px-3 py-1 rounded-full">Founding Member Pricing</span>
                <span className="bg-[#d4a088] text-[#0a1628] text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <div className="text-[#d4a088] text-xs font-medium tracking-wider uppercase mb-2">Intensive</div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-bold">$600</span>
                <span className="text-zinc-400">/mo</span>
              </div>
              <div className="text-[#d4a088] text-xs mb-6">First 25 members lock in this rate permanently.</div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Monthly 15-min video visits (board-certified MD)",
                  "Quarterly labs included (CBC, CMP, lipids, ApoB, fasting insulin)",
                  "Medication management incl. GLP-1 if appropriate",
                  "Async physician messaging (24-hr response)",
                  "CGM data review & clinical interpretation",
                  "Annual 45-min metabolic deep-dive",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#d4a088] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <TrackedLink
                href="/start"
                eventName="cta_click"
                eventProperties={{ location: 'pricing', button: 'intensive' }}
                className="block w-full bg-[#d4a088] text-[#0a1628] px-6 py-3 rounded text-sm font-medium hover:bg-[#c4906c] transition-colors text-center"
              >
                Get Started
              </TrackedLink>
            </div>

            {/* Executive — waitlist */}
            <div className="bg-[#0a1628] border border-zinc-800 rounded-2xl p-8 relative flex flex-col">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#d4a088]/20 text-[#d4a088] text-xs font-semibold px-3 py-1 rounded-full">Waitlist Open</span>
              </div>
              <div className="text-[#d4a088] text-xs font-medium tracking-wider uppercase mb-2">Executive</div>
              <div className="text-zinc-400 text-sm mb-6">White-glove metabolic care</div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Everything in Intensive",
                  "Bi-weekly check-ins",
                  "In-person visits",
                  "Executive health panel coordination",
                  "Direct physician access",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#d4a088]/50 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <TrackedLink
                href="/start?tier=executive"
                eventName="cta_click"
                eventProperties={{ location: 'pricing', button: 'executive_waitlist' }}
                className="block w-full border border-[#d4a088]/40 text-[#d4a088] px-6 py-3 rounded text-sm font-medium text-center hover:bg-[#d4a088]/10 transition-colors"
              >
                Join Waitlist
              </TrackedLink>
            </div>

          </div>

          <p className="text-zinc-500 text-sm text-center max-w-xl mx-auto">
            Medications (including GLP-1s) are billed separately through your pharmacy if prescribed. FSA/HSA eligible.
          </p>


        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-24 bg-[#0d1c30]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
            Frequently asked <span className="text-[#d4a088]">questions</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do you prescribe GLP-1 medications like semaglutide?",
                a: "Yes—when clinically appropriate. We prescribe FDA-approved GLP-1s and manage them as part of your care plan. Dr. Japa will review your history and labs to determine fit."
              },
              {
                q: "Do you accept insurance?",
                a: "We are a self-pay practice and do not bill insurance directly. Upon request, we can provide a superbill for potential reimbursement through your FSA or HSA."
              },
              {
                q: "Are the labs included in my membership?",
                a: "Yes — labs are included in your membership. Every quarter we order a comprehensive panel (CBC, CMP, lipid panel, ApoB, and fasting insulin) drawn at Quest or LabCorp. The lab cost is covered as part of your plan — no surprise bills."
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. Your membership is billed monthly and you can cancel anytime, effective at the end of your current billing period. No long-term commitment, no penalties."
              },
              {
                q: "How quickly can I get an appointment?",
                a: "Most new patients are seen within 2–4 weeks of signing up. After your initial visit, follow-up cadence depends on your plan — quarterly for Essential, monthly for Intensive. Async messaging is available between all appointments."
              },
              {
                q: "What if I need a prescription?",
                a: "Dr. Japa can prescribe medications as clinically appropriate. Prescriptions are sent directly to your pharmacy and are not included in the membership fee — they're billed separately through your pharmacy, just like any other prescription."
              },
              {
                q: "What states are you licensed in?",
                a: "We're currently accepting patients in California, Louisiana, and Massachusetts. We're expanding to additional states — join the waitlist if you're outside these states."
              },
              {
                q: "Is this covered under my FSA or HSA?",
                a: "Medical consultations and lab fees may be FSA/HSA-reimbursable. We provide a detailed superbill upon request — consult your plan administrator or tax advisor for your specific plan's eligibility rules."
              },
            ].map(({ q, a }, i) => (
              <details key={i} className="group border border-zinc-700 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 cursor-pointer list-none hover:bg-zinc-800/40 transition-colors">
                  <span className="font-medium text-white pr-4">{q}</span>
                  <svg className="w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 text-zinc-400 leading-relaxed">{a}</div>
              </details>
            ))}

            {/* What's included comparison table */}
            <details className="group border border-zinc-700 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 cursor-pointer list-none hover:bg-zinc-800/40 transition-colors">
                <span className="font-medium text-white pr-4">What&apos;s included in each tier?</span>
                <svg className="w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-zinc-800 overflow-x-auto">
                <div className="grid grid-cols-4 bg-[#0d1c30] border-b border-zinc-800 min-w-[540px]">
                  <div className="px-4 py-3 text-zinc-500 text-xs font-medium tracking-wider uppercase">Feature</div>
                  <div className="px-4 py-3 text-center"><span className="text-white text-sm font-semibold">Essential</span><div className="text-zinc-500 text-xs">$300/mo</div></div>
                  <div className="px-4 py-3 text-center"><span className="text-[#d4a088] text-sm font-semibold">Intensive</span><div className="text-zinc-500 text-xs">$600/mo</div></div>
                  <div className="px-4 py-3 text-center"><span className="text-white text-sm font-semibold">Executive</span><div className="text-zinc-500 text-xs">Waitlist</div></div>
                </div>
                {[
                  { category: "Physician Visits", rows: [
                    { label: "15-min discovery call", essential: true, intensive: true, executive: true },
                    { label: "Follow-up visits", essential: "Quarterly", intensive: "Monthly", executive: "Bi-weekly" },
                    { label: "Annual metabolic deep-dive", essential: false, intensive: "45 min", executive: "90 min" },
                  ]},
                  { category: "Lab Work & Monitoring", rows: [
                    { label: "Quarterly labs included (CBC, CMP, lipids, ApoB, fasting insulin)", essential: true, intensive: true, executive: true },
                    { label: "SA-specific markers (HOMA-IR, ApoB, fasting insulin)", essential: true, intensive: true, executive: true },
                    { label: "CGM integration & interpretation", essential: false, intensive: true, executive: true },
                  ]},
                  { category: "Physician Access", rows: [
                    { label: "Async physician messaging", essential: "48-hr", intensive: "24-hr", executive: "Priority" },
                    { label: "Medication management", essential: true, intensive: true, executive: true },
                    { label: "Direct physician line", essential: false, intensive: false, executive: true },
                  ]},
                  { category: "Executive Only", rows: [
                    { label: "In-person visits", essential: false, intensive: false, executive: true },
                    { label: "Executive health panel coordination", essential: false, intensive: false, executive: true },
                  ]},
                ].map(({ category, rows }) => (
                  <div key={category} className="min-w-[540px]">
                    <div className="grid grid-cols-4 bg-[#0a1628] border-t border-zinc-800/60 px-4 py-2">
                      <div className="col-span-4 text-[#d4a088] text-xs font-semibold tracking-wider uppercase">{category}</div>
                    </div>
                    {rows.map(({ label, essential, intensive, executive }) => (
                      <div key={label} className="grid grid-cols-4 border-t border-zinc-800/40">
                        <div className="px-4 py-3 text-zinc-400 text-xs">{label}</div>
                        {[essential, intensive, executive].map((val, i) => (
                          <div key={i} className={`px-4 py-3 text-center ${i === 1 ? 'bg-[#d4a088]/5' : ''}`}>
                            {val === true ? (
                              <svg className={`w-4 h-4 mx-auto ${i === 1 ? 'text-[#d4a088]' : 'text-zinc-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            ) : val === false ? (
                              <span className="text-zinc-700">—</span>
                            ) : (
                              <span className={`text-xs ${i === 1 ? 'text-[#d4a088]' : 'text-zinc-300'}`}>{val}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="py-16 sm:py-24 bg-gradient-to-b from-[#0a1628] to-[#0d1c30]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready for care that gets your biology?
          </h2>
          <TrackedLink 
            href="/start"
            eventName="cta_click"
            eventProperties={{ location: 'bottom_cta', button: 'book_discovery' }}
            className="inline-block bg-[#d4a088] text-[#0a1628] px-10 py-4 rounded text-lg font-medium hover:bg-[#c4906c] transition-colors"
          >
            Book Your Discovery Call
          </TrackedLink>
          <p className="text-zinc-500 text-sm mt-6">
            Currently accepting patients in California, Louisiana, and Massachusetts
          </p>
          <p className="text-zinc-500 text-sm mt-3">
            Not ready yet?{" "}
            <Link href="/start?waitlist=true" className="text-zinc-400 hover:text-white underline underline-offset-2 transition-colors">
              Stay in the loop →
            </Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
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
            <div className="sm:text-right text-sm text-zinc-500 space-y-1">
              <p>Board-certified Internal Medicine</p>
              <p>Telehealth practice</p>
              <p>
                <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800 text-xs text-zinc-600 leading-relaxed">
            <p>
              The information provided on this website is for educational purposes only and is not intended as medical advice. 
              Always consult with a qualified healthcare provider before making any health decisions.
              Population statistics do not predict individual health outcomes. All care is individualized. Individual outcomes depend on clinical factors, adherence, and starting point.
            </p>
            <p className="mt-2">
              <sup>1</sup> Pedamallu H, et al. <em>J Am Heart Assoc.</em> 2026. <a href="https://doi.org/10.1161/JAHA.124.041221" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-400 transition-colors">doi:10.1161/JAHA.124.041221</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
