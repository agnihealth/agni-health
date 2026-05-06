import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import HeroImage from "./components/HeroImage";
import TrackedLink from "./components/TrackedLink";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-[family-name:var(--font-jakarta)]">
      {/* Nav */}
      <NavBar />

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-8 pt-8 pb-24">
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
              <span className="text-[#d4a088]">South Asian</span> biology.
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
                className="bg-[#d4a088] text-[#0a1628] px-8 py-4 rounded text-base font-medium hover:bg-[#c4906c] transition-colors"
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
      <section className="bg-[#0d1c30] py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              The risk is real — and it starts <span className="text-[#d4a088]">earlier than you think</span>
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
              A 2026 study of 2,700 U.S. adults found that South Asians accumulate cardiovascular risk factors
              by their mid-40s — despite having healthier diets, lower alcohol use, and comparable exercise
              habits than White, Black, Hispanic, and Chinese adults. The biology is different. The care needs to be too.
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
              <div className="text-white font-medium mb-1">Type 2 Diabetes hazard ratio by 55</div>
              <div className="text-zinc-500 text-sm">vs. White peers<sup className="text-[10px]">1</sup></div>
              <div className="text-zinc-600 text-xs mt-2">despite healthier behaviors</div>
            </div>
          </div>

          <p className="text-zinc-500 text-sm text-center leading-relaxed max-w-3xl mx-auto">
            Yet standard medical guidelines were built on studies that largely excluded South Asian populations.
            Different insulin sensitivity. Different fat distribution. Different risk thresholds.
            You deserve care calibrated to your biology — not generic advice built for someone else.
          </p>
          <p className="text-zinc-600 text-xs text-center mt-4">
            <sup>1</sup> MASALA Study Investigators. <em>J Am Heart Assoc.</em> 2026. doi:10.1161/JAHA.124.041221
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
            <div className="flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden ring-4 ring-[#d4a088]/40 bg-[#0d1c30]">
                <Image
                  src="/dr-japa.jpg"
                  alt="Dr. Sohan Japa"
                  fill
                  className="object-contain object-top"
                  sizes="(max-width: 640px) 256px, 320px"
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
          <p className="text-zinc-400 text-lg text-center mb-4 max-w-2xl mx-auto">
            Start with a consultation. Stay for the outcomes.
          </p>

          {/* Initial Consultation */}
          <div className="bg-[#0d1c30] border border-zinc-700 rounded-2xl px-8 py-6 max-w-2xl mx-auto mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="text-[#d4a088] text-xs font-medium tracking-wider uppercase mb-1">Step 1</div>
              <div className="text-white font-semibold text-lg">Initial Consultation</div>
              <div className="text-zinc-400 text-sm mt-1">30-minute video visit · One-time, no commitment</div>
            </div>
            <div className="flex items-baseline gap-1 sm:text-right shrink-0">
              <span className="text-4xl font-bold text-white">$275</span>
              <span className="text-zinc-400 text-sm">one-time</span>
            </div>
          </div>

          {/* Membership Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-6">
            {/* Annual — lead with this */}
            <div className="bg-[#0a1628] border-2 border-[#d4a088] rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#d4a088] text-[#0a1628] text-xs font-semibold px-3 py-1 rounded-full">Best Value</span>
              </div>
              <div className="text-[#d4a088] text-xs font-medium tracking-wider uppercase mb-4">Annual Membership</div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-bold">$174</span>
                <span className="text-zinc-400">/mo</span>
              </div>
              <div className="text-zinc-500 text-sm mb-6">Billed $2,088/yr · Save $300</div>
              <ul className="space-y-3 mb-8">
                {[
                  "Quarterly 15-min follow-up visits",
                  "Unlimited async physician messaging",
                  "Personalized metabolic protocol",
                  "Medication management & adjustments",
                  "Labs review & care plan updates",
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
                eventProperties={{ location: 'pricing', button: 'annual_membership' }}
                className="block w-full bg-[#d4a088] text-[#0a1628] px-6 py-3 rounded text-sm font-medium hover:bg-[#c4906c] transition-colors text-center"
              >
                Get Started
              </TrackedLink>
            </div>

            {/* Monthly */}
            <div className="bg-[#0a1628] border border-zinc-800 rounded-2xl p-8">
              <div className="text-zinc-400 text-xs font-medium tracking-wider uppercase mb-4">Monthly Membership</div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-bold">$199</span>
                <span className="text-zinc-400">/mo</span>
              </div>
              <div className="text-zinc-500 text-sm mb-6">Month-to-month · Cancel anytime</div>
              <ul className="space-y-3 mb-8">
                {[
                  "Quarterly 15-min follow-up visits",
                  "Unlimited async physician messaging",
                  "Personalized metabolic protocol",
                  "Medication management & adjustments",
                  "Labs review & care plan updates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-zinc-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <TrackedLink
                href="/start"
                eventName="cta_click"
                eventProperties={{ location: 'pricing', button: 'monthly_membership' }}
                className="block w-full border border-zinc-600 text-white px-6 py-3 rounded text-sm font-medium hover:border-zinc-400 transition-colors text-center"
              >
                Get Started
              </TrackedLink>
            </div>
          </div>

          <p className="text-zinc-500 text-sm text-center max-w-xl mx-auto">
            Medications (including GLP-1s) are billed separately through your pharmacy if prescribed. FSA/HSA eligible.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#0d1c30]">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently asked <span className="text-[#d4a088]">questions</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do you prescribe GLP-1 medications like semaglutide?",
                a: "Yes — for patients where GLP-1 therapy is clinically appropriate, we can prescribe and manage it as part of your overall care plan. During your first visit, Dr. Japa will review your health history, labs, and goals to determine what's right for you. GLP-1s are one tool in a broader approach — we combine medication with nutrition and lifestyle guidance tailored to your biology."
              },
              {
                q: "Do you accept insurance?",
                a: "We are a self-pay practice and do not bill insurance directly. Upon request, we can provide a superbill for potential reimbursement through your FSA or HSA. Many patients find that direct-pay care is actually more cost-effective than navigating high-deductible plans."
              },
              {
                q: "Are the labs included in my membership?",
                a: "Your membership includes the physician's interpretation and ordering of your lab panel. Lab draw costs vary — we work with Quest and LabCorp, and many patients have these covered by insurance. For self-pay patients, out-of-pocket lab costs typically range from $100–300 for the comprehensive initial panel. We'll give you a clear estimate before ordering."
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. There's no long-term contract. Your membership is billed monthly and you can cancel with 30 days' notice at any time. No penalties, no runaround."
              },
              {
                q: "How quickly can I get an appointment?",
                a: "Most new patients are seen within 1–2 weeks of signing up. After your initial visit, follow-up visits are scheduled quarterly, with unlimited async messaging between appointments."
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
                a: "Telehealth memberships with a licensed physician are generally FSA/HSA-eligible. We recommend confirming with your plan administrator, but most patients are able to use pre-tax dollars for their membership."
              },
            ].map(({ q, a }, i) => (
              <details key={i} className="group border border-zinc-700 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none hover:bg-zinc-800/40 transition-colors">
                  <span className="font-medium text-white pr-4">{q}</span>
                  <svg className="w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-2 text-zinc-400 leading-relaxed">{a}</div>
              </details>
            ))}
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
            className="inline-block bg-[#d4a088] text-[#0a1628] px-10 py-4 rounded text-lg font-medium hover:bg-[#c4906c] transition-colors"
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
            <div className="text-right text-sm text-zinc-500 space-y-1">
              <p>Board-certified internal medicine</p>
              <p>Telehealth practice</p>
              <p>
                <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Notice of Privacy Practices</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
