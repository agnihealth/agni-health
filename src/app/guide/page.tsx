import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "South Asian Metabolic Risk Guide | Agni Health",
  description:
    "Why South Asians develop diabetes and heart disease earlier—and what standard medicine misses. A clinical overview from Agni Health.",
};

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-[family-name:var(--font-jakarta)]">
      {/* Nav */}
      <nav className="border-b border-zinc-800 px-6 py-4">
        <Link href="/">
          <Image
            src="/logo-transparent.png"
            alt="Agni Health"
            width={160}
            height={40}
            className="h-8 w-auto"
          />
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="mb-12">
          <span className="text-[#d4a088] text-sm font-medium tracking-wider uppercase">
            Free Guide
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mt-3 mb-6">
            The South Asian
            <br />
            <span className="text-[#d4a088]">metabolic risk guide</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Why your labs look fine but the risk is already building—and what
            standard medicine isn&apos;t measuring.
          </p>
        </div>

        <div className="space-y-14 text-base leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">
              The standard playbook wasn&apos;t built for you
            </h2>
            <p className="text-zinc-300">
              Clinical guidelines for diabetes, cardiovascular disease, and
              obesity were largely developed on European populations. BMI
              cutoffs, A1c thresholds, waist circumference norms—all calibrated
              for a different body.
            </p>
            <p className="text-zinc-300 mt-4">
              South Asians have fundamentally different metabolic physiology:
              higher insulin resistance at lower body weights, greater visceral
              fat accumulation even at &quot;healthy&quot; BMIs, and earlier
              cardiovascular risk accrual. The result is a population that falls
              through the cracks of standard screening—until it&apos;s too late.
            </p>
          </section>

          {/* Section 2 — Stats */}
          <section>
            <h2 className="text-xl font-bold mb-6 text-white">
              What the research shows
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#0d1c30] border border-zinc-800 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-[#d4a088] mb-1">~8×</div>
                <div className="text-sm text-white font-medium mb-1">
                  Prediabetes at 45
                </div>
                <div className="text-xs text-zinc-500">
                  South Asian men vs. White peers
                  <br />
                  (30.7% vs. 3.9%)
                </div>
              </div>
              <div className="bg-[#0d1c30] border border-zinc-800 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-[#d4a088] mb-1">~3×</div>
                <div className="text-sm text-white font-medium mb-1">
                  Prediabetes at 45
                </div>
                <div className="text-xs text-zinc-500">
                  South Asian women vs. White peers
                  <br />
                  (17.6% vs. 5.7%)
                </div>
              </div>
              <div className="bg-[#0d1c30] border border-zinc-800 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-[#d4a088] mb-1">2×</div>
                <div className="text-sm text-white font-medium mb-1">
                  Diabetes risk by 55
                </div>
                <div className="text-xs text-zinc-500">
                  vs. White peers
                  <br />
                  despite healthier behaviors
                </div>
              </div>
            </div>
            <p className="text-zinc-500 text-sm">
              Source: Pedamallu H, et al.{" "}
              <em>J Am Heart Assoc.</em> 2026.{" "}
              <a
                href="https://doi.org/10.1161/JAHA.124.041221"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-zinc-300"
              >
                doi:10.1161/JAHA.124.041221
              </a>
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">
              What standard labs miss
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-[#d4a088]/40 pl-5">
                <div className="font-semibold text-white">A1c alone</div>
                <p className="text-zinc-400 mt-1">
                  A1c catches diabetes—but misses insulin resistance years
                  before it develops. You can have a normal A1c and already be
                  on a trajectory toward metabolic disease.
                </p>
              </div>
              <div className="border-l-2 border-[#d4a088]/40 pl-5">
                <div className="font-semibold text-white">BMI thresholds</div>
                <p className="text-zinc-400 mt-1">
                  WHO&apos;s overweight cutoff is 25. For South Asians, risk
                  starts climbing at BMI 23. Millions are told their weight is
                  fine—while visceral fat accumulates silently.
                </p>
              </div>
              <div className="border-l-2 border-[#d4a088]/40 pl-5">
                <div className="font-semibold text-white">
                  Standard cholesterol panels
                </div>
                <p className="text-zinc-400 mt-1">
                  LDL alone underestimates risk. ApoB—the actual particle count
                  driving arterial plaque—is rarely ordered in primary care but
                  is a stronger predictor of cardiovascular events.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">
              What to actually track
            </h2>
            <div className="bg-[#0d1c30] border border-zinc-800 rounded-xl p-6 space-y-4">
              {[
                {
                  marker: "Fasting Insulin",
                  why: "Direct measure of insulin resistance. Should be <5 µIU/mL fasting. Rarely ordered—but one of the most predictive early markers.",
                },
                {
                  marker: "HOMA-IR",
                  why: "Calculated from fasting glucose and insulin. Score >1.5 suggests early insulin resistance. Score >2.5 is significant.",
                },
                {
                  marker: "ApoB",
                  why: "Counts atherogenic particles directly. More predictive than LDL-C, especially in South Asians with normal-range LDL.",
                },
                {
                  marker: "Waist circumference",
                  why: "Ethnic-specific threshold: action at >90cm (men) / >80cm (women) for South Asians—lower than standard Western cutoffs.",
                },
                {
                  marker: "hsCRP",
                  why: "High-sensitivity C-reactive protein. Inflammatory marker that precedes cardiovascular events.",
                },
              ].map(({ marker, why }) => (
                <div key={marker} className="flex gap-4">
                  <div className="w-36 shrink-0 text-[#d4a088] font-medium text-sm pt-0.5">
                    {marker}
                  </div>
                  <div className="text-zinc-400 text-sm">{why}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">
              What you can do
            </h2>
            <p className="text-zinc-300 mb-4">
              The good news: insulin resistance is largely reversible with the
              right protocol. But generic advice—&quot;eat less, move more&quot;—
              doesn&apos;t account for the metabolic specifics that make South
              Asian physiology different.
            </p>
            <p className="text-zinc-300">
              Effective intervention means targeting visceral fat specifically
              (not just weight), optimizing postprandial glucose response (which
              varies significantly with carbohydrate type and meal composition),
              and tracking the right markers at the right thresholds. That
              requires a protocol built for your biology—not a population you
              don&apos;t belong to.
            </p>
          </section>

          {/* CTA */}
          <section className="border-t border-zinc-800 pt-10">
            <h2 className="text-xl font-bold mb-3 text-white">
              Ready to know where you actually stand?
            </h2>
            <p className="text-zinc-400 mb-6">
              A 15-minute discovery call to review your history and, if
              appropriate, order the labs that actually matter for South Asian
              metabolism.
            </p>
            <Link
              href="/start"
              className="inline-block bg-[#d4a088] text-[#0a1628] px-8 py-4 rounded font-medium hover:bg-[#c4906c] transition-colors"
            >
              Book Your Discovery Call
            </Link>
            <p className="text-zinc-600 text-sm mt-4">
              Currently accepting patients in California, Louisiana, and
              Massachusetts.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-xs text-zinc-600 leading-relaxed">
          <p>
            The information on this page is for educational purposes only and
            does not constitute medical advice. Population statistics do not
            predict individual outcomes. Consult a qualified clinician before
            making health decisions.
          </p>
          <p className="mt-2">
            © 2026 Agni Health. All rights reserved.{" "}
            <Link href="/privacy" className="hover:text-zinc-400 underline">
              Privacy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
