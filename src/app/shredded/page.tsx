import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import NavBar from "../components/NavBar";
import TrackedLink from "../components/TrackedLink";

export const metadata: Metadata = {
  title: "Get Shredded | Agni Health",
  description: "Body recomposition built for South Asian biology. We test for the insulin resistance that's blocking your results — and fix it.",
  openGraph: {
    title: "Get Shredded | Agni Health",
    description: "Body recomposition built for South Asian biology. We test for the insulin resistance that's blocking your results — and fix it.",
    url: "https://agnihealth.co/shredded",
    siteName: "Agni Health",
    images: [
      {
        url: "/og-image-shredded.png",
        width: 1200,
        height: 630,
        alt: "Agni Health — Get Shredded",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Shredded | Agni Health",
    description: "Body recomposition built for South Asian biology. We test for the insulin resistance that's blocking your results — and fix it.",
    images: ["/og-image-shredded.png"],
  },
};

export default function Shredded() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white font-[family-name:var(--font-jakarta)]">
      {/* Nav */}
      <NavBar
        links={[{ href: "#approach", label: "How It Works" }, { href: "#pricing", label: "Pricing" }]}
        ctaLabel="Book Consultation"
        ctaClassName="bg-[#b32424] text-[#0a0a0a] px-5 py-2.5 rounded text-sm font-medium hover:bg-[#8c1c1c] transition-colors"
        logoSrc="/logo-shredded.png"
      />

      {/* Hero */}
      <main className="max-w-3xl mx-auto px-4 sm:px-8 pt-6 sm:pt-8 pb-16 sm:pb-24">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            Are you <span className="text-[#b32424]">South Asian</span> and struggling
            <br className="hidden sm:block" />
            {" "}to get shredded?
          </h1>

          {/* Hero image */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden relative max-w-lg mx-auto mt-8">
            <Image
              src="/hero-shredded-v2.png"
              alt="Lean, muscular South Asian man in a home gym"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-lg mx-auto">
            You lift, you eat clean — and you&apos;re still stuck. South Asians are more{" "}
            <span className="text-[#b32424]">insulin resistant at the same BMI</span><sup>1</sup>. We&apos;ll fix that.
            When appropriate, we&apos;ll prescribe <u className="text-white font-semibold">GLP-1s</u>.
          </p>

          <div className="pt-4 flex flex-col items-center gap-4">
            <TrackedLink
              href="/start"
              eventName="cta_click"
              eventProperties={{ location: 'hero', button: 'book_discovery', variant: 'shredded' }}
              className="bg-[#b32424] text-[#0a0a0a] px-8 py-4 rounded text-base font-medium hover:bg-[#8c1c1c] transition-colors"
            >
              Get Shredded Now
            </TrackedLink>
          </div>
        </div>
      </main>

      {/* Approach */}
      <section id="approach" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Timeline: how care unfolds */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
              Your <span className="text-[#b32424]">Year 1</span> path
            </h2>
            <p className="text-zinc-400 text-center max-w-xl mx-auto mb-12 sm:mb-16">
              One path. No decision fatigue.
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="relative pl-10 sm:pl-12">
                {/* Vertical line */}
                <div className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-zinc-800" />

                <div className="relative pb-10">
                  <div className="absolute left-[-40px] sm:left-[-48px] top-0 w-8 h-8 rounded-full bg-[#0a0a0a] border-2 border-[#b32424] flex items-center justify-center">
                    <span className="text-[#b32424] text-xs font-mono font-bold">W1</span>
                  </div>
                  <div className="text-[#b32424] text-xs font-medium tracking-wider uppercase mb-1">Week 1</div>
                  <h4 className="text-lg font-semibold mb-2">Baseline consultation</h4>
<p className="text-zinc-400 leading-relaxed">
                    15-minute video call with Dr. Japa on your training history and where you&apos;re stuck.
                  </p>
                </div>

                <div className="relative pb-10">
                  <div className="absolute left-[-40px] sm:left-[-48px] top-0 w-8 h-8 rounded-full bg-[#0a0a0a] border-2 border-[#b32424] flex items-center justify-center">
                    <span className="text-[#b32424] text-xs font-mono font-bold">W2</span>
                  </div>
                  <div className="text-[#b32424] text-xs font-medium tracking-wider uppercase mb-1">Week 2</div>
                  <h4 className="text-lg font-semibold mb-2">Labs + DEXA scan</h4>
                  <p className="text-zinc-400 leading-relaxed">
                    Fasting insulin, HOMA-IR, ApoB, hormones, and a full body composition scan.
                  </p>
                </div>

                <div className="relative pb-10">
                  <div className="absolute left-[-40px] sm:left-[-48px] top-0 w-8 h-8 rounded-full bg-[#0a0a0a] border-2 border-[#b32424] flex items-center justify-center">
                    <span className="text-[#b32424] text-xs font-mono font-bold">W3</span>
                  </div>
                  <div className="text-[#b32424] text-xs font-medium tracking-wider uppercase mb-1">Week 3</div>
                  <h4 className="text-lg font-semibold mb-2">Your protocol</h4>
                  <p className="text-zinc-400 leading-relaxed">
                    A plan built around your bottleneck — nutrition, training, medication if appropriate.
                  </p>
                </div>

                <div className="relative pb-10">
                  <div className="absolute left-[-40px] sm:left-[-48px] top-0 w-8 h-8 rounded-full bg-[#0a0a0a] border-2 border-[#b32424] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#b32424]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4v-4z" />
                    </svg>
                  </div>
                  <div className="text-[#b32424] text-xs font-medium tracking-wider uppercase mb-1">Ongoing</div>
                  <h4 className="text-lg font-semibold mb-2">Async support</h4>
                  <p className="text-zinc-400 leading-relaxed">
                    Message Dr. Japa directly as your body responds. No waiting for the next slot.
                  </p>
                </div>

                <div className="relative pb-10">
                  <div className="absolute left-[-40px] sm:left-[-48px] top-0 w-8 h-8 rounded-full bg-[#0a0a0a] border-2 border-[#b32424] flex items-center justify-center">
                    <span className="text-[#b32424] text-xs font-mono font-bold">M3</span>
                  </div>
                  <div className="text-[#b32424] text-xs font-medium tracking-wider uppercase mb-1">Month 3</div>
                  <h4 className="text-lg font-semibold mb-2">Repeat DEXA</h4>
                  <p className="text-zinc-400 leading-relaxed">
                    A second scan: visceral fat down, lean mass up. A measurement, not a guess.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute left-[-40px] sm:left-[-48px] top-0 w-8 h-8 rounded-full bg-[#b32424] flex items-center justify-center">
                    <span className="text-[#0a0a0a] text-xs font-mono font-bold">Y1</span>
                  </div>
                  <div className="text-[#b32424] text-xs font-medium tracking-wider uppercase mb-1">Year 1</div>
                  <h4 className="text-lg font-semibold mb-2">Results that hold</h4>
                  <p className="text-zinc-400 leading-relaxed">
                    Quarterly DEXA and lab checkpoints keep your protocol dialed in.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              A body recomposition plan <span className="text-[#b32424]">built on your labs, not a template</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Physician-led. Data-driven. No generic macros PDF.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 sm:mb-20">
            <div className="p-8 rounded-xl bg-[#141414] border border-zinc-800 text-center">
              <div className="w-12 h-12 rounded-lg bg-[#b32424]/10 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-6 h-6 text-[#b32424]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">DEXA-Verified Body Comp</h3>
              <p className="text-zinc-400 leading-relaxed">
                A DEXA scan shows exactly where your fat and muscle actually sit — visceral, subcutaneous, and lean mass
                by region. No more guessing from a mirror or a scale.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#141414] border border-zinc-800 text-center">
              <div className="w-12 h-12 rounded-lg bg-[#b32424]/10 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-6 h-6 text-[#b32424]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fix the Metabolic Bottleneck</h3>
              <p className="text-zinc-400 leading-relaxed">
                We test fasting insulin, HOMA-IR, ApoB, and thyroid/hormone panels — the levers that decide whether your
                training and diet actually translate into visible results.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#141414] border border-zinc-800 text-center">
              <div className="w-12 h-12 rounded-lg bg-[#b32424]/10 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-6 h-6 text-[#b32424]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Direct Physician Access</h3>
              <p className="text-zinc-400 leading-relaxed">
                A board-certified MD who can prescribe when appropriate — not a coach guessing at supplements. No
                handoffs.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-zinc-400 mt-4">
                <svg className="w-4 h-4 text-[#b32424] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span>Stanford &amp; Harvard-trained physician care</span>
              </div>
            </div>
          </div>

          {/* Physician Quote */}
          <div className="max-w-2xl mx-auto">
            <div className="border border-zinc-800 rounded-xl p-8 bg-[#141414]">
              <blockquote className="relative text-center">
                <p className="text-zinc-300 text-base leading-relaxed italic mb-4">
                  &ldquo;I lived it too. Despite being a physician, I found myself at 26% body fat—&lsquo;healthy&rsquo; by
                  standard charts, but I knew better. I dropped to 12% once I stopped following generic advice.
                  That&apos;s why I built Agni.&rdquo;
                </p>
                <footer className="text-zinc-500 text-sm">
                  — Dr. Sohan Japa · Founder
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing — single plan */}
      <section id="pricing" className="py-16 sm:py-24 bg-[#141414]">
        <div className="max-w-2xl mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
            Fixed pricing. <span className="text-[#b32424]">Medications billed separately.</span>
          </h2>

          <div className="bg-[#0a0a0a] border-2 border-[#b32424] rounded-2xl p-8 sm:p-10 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="bg-zinc-700 text-zinc-200 text-xs font-semibold px-3 py-1 rounded-full">Founding Member Pricing</span>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span className="text-5xl sm:text-6xl font-bold">$250</span>
                <span className="text-zinc-400 text-lg">/mo</span>
              </div>
              <div className="text-[#b32424] text-sm mt-2">First 25 members lock in this rate permanently.</div>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Quarterly video visits with a board-certified MD",
                "DEXA scan every quarter to track real body comp change",
                "Labs included: fasting insulin, ApoB, LDL/HDL, hormones",
                "Medication management, including GLP-1s if appropriate",
                "Async messaging — 72-hour response",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#b32424] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <TrackedLink
              href="/start"
              eventName="cta_click"
              eventProperties={{ location: 'pricing', button: 'flat_plan', variant: 'shredded' }}
              className="block w-full bg-[#b32424] text-[#0a0a0a] px-6 py-4 rounded text-base font-medium hover:bg-[#8c1c1c] transition-colors text-center"
            >
              Get Started — $50 Baseline Consultation
            </TrackedLink>
            <p className="text-zinc-500 text-xs text-center mt-4">
              $50 consultation fee credited toward your first month. Cancel anytime.
            </p>
          </div>

          <p className="text-zinc-500 text-sm text-center mt-8">
            Medications (including GLP-1s) are billed separately through your pharmacy if prescribed. FSA/HSA eligible.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] to-[#141414]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Stop guessing. Find out what&apos;s actually holding your physique back.
          </h2>
          <TrackedLink
            href="/start"
            eventName="cta_click"
            eventProperties={{ location: 'bottom_cta', button: 'book_discovery', variant: 'shredded' }}
            className="inline-block bg-[#b32424] text-[#0a0a0a] px-10 py-4 rounded text-lg font-medium hover:bg-[#8c1c1c] transition-colors"
          >
            Get Shredded Now
          </TrackedLink>
          <p className="text-zinc-500 text-sm mt-6">
            Currently accepting patients in California and Massachusetts
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
