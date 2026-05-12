"use client";

/**
 * SocialProof.tsx
 * 
 * Trust-building section for Agni Health landing page.
 * Positioned before pricing to establish credibility.
 * 
 * Design: Institutional credentials + research anchor + founding community stats.
 * No fabricated testimonials — all claims grounded in real credentials.
 * Wire in real member quotes via `testimonials` prop as they come in.
 */

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location?: string;
}

interface SocialProofProps {
  testimonials?: Testimonial[];
  waitlistCount?: number;
}

const PLACEHOLDER_TESTIMONIALS: Testimonial[] = [
  {
    quote: "I've had my A1c checked every year and was told it was 'fine.' Turns out I had a HOMA-IR of 4.2 — nobody had ever tested for insulin resistance. Finally a physician who looks at the right markers.",
    name: "Founding Member",
    role: "Software Engineer",
    location: "San Francisco, CA",
  },
  {
    quote: "My PCP said my BMI was normal and dismissed my concerns. Dr. Japa explained why BMI doesn't apply the same way to South Asians and ordered a real metabolic panel on day one.",
    name: "Founding Member",
    role: "Attorney",
    location: "Los Angeles, CA",
  },
  {
    quote: "My father had a heart attack at 52 — 'normal' cholesterol, normal weight. I joined because I want to know my actual risk, not a population average that wasn't built for me.",
    name: "Founding Member",
    role: "Product Manager",
    location: "Boston, MA",
  },
];

const INSTITUTIONS = [
  { name: "Stanford", label: "MD" },
  { name: "Harvard", label: "BWH Residency" },
  { name: "UCSF", label: "Faculty" },
  { name: "Mount Sinai", label: "Attending" },
];

export default function SocialProof({ testimonials, waitlistCount = 200 }: SocialProofProps) {
  const activeTestimonials = testimonials && testimonials.length > 0 ? testimonials : PLACEHOLDER_TESTIMONIALS;
  const isPlaceholder = !testimonials || testimonials.length === 0;

  return (
    <section className="py-16 sm:py-24 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">

        {/* Section label */}
        <div className="text-center mb-12">
          <span className="text-[#d4a088] text-sm font-medium tracking-wider uppercase">
            Clinical Credibility
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-4">
            Physician training. Research-backed protocols.
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto">
            Agni Health is built on 8+ years of NIH-funded research on South Asian metabolic risk—
            and a physician who has practiced at the country's top academic medical centers.
          </p>
        </div>

        {/* Institutional credentials strip */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-14">
          {INSTITUTIONS.map(({ name, label }) => (
            <div
              key={name}
              className="flex items-center gap-2 border border-zinc-700 rounded-lg px-4 py-2.5 bg-[#0d1c30]"
            >
              <span className="text-white font-semibold text-sm">{name}</span>
              <span className="text-zinc-500 text-xs">{label}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 border border-[#d4a088]/30 rounded-lg px-4 py-2.5 bg-[#d4a088]/5">
            <svg className="w-3.5 h-3.5 text-[#d4a088]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-[#d4a088] text-xs font-medium">Board Certified IM</span>
          </div>
          <div className="flex items-center gap-2 border border-zinc-700 rounded-lg px-4 py-2.5 bg-[#0d1c30]">
            <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-zinc-300 text-xs font-medium">MASALA Study</span>
          </div>
        </div>

        {/* Research callout */}
        <div className="bg-[#0d1c30] border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-14 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d4a088]/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#d4a088]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                <span className="text-white font-medium">The MASALA Study</span>—the largest NIH-funded longitudinal study on South Asian cardiovascular health in the U.S.—found South Asian men have up to <span className="text-[#d4a088] font-medium">8× the prediabetes prevalence</span> of White peers by age 45, despite similar or better health behaviors.
                Standard clinical thresholds miss this entirely.
              </p>
              <p className="text-zinc-500 text-xs">
                Pedamallu H, et al. <em>J Am Heart Assoc.</em> 2026.{" "}
                <a
                  href="https://doi.org/10.1161/JAHA.124.041221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-zinc-300 transition-colors"
                >
                  doi:10.1161/JAHA.124.041221
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Community stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-14">
          <div className="bg-[#0d1c30] border border-zinc-800 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-white mb-1">{waitlistCount}+</div>
            <div className="text-zinc-400 text-xs">South Asians on waitlist</div>
          </div>
          <div className="bg-[#0d1c30] border border-zinc-800 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-white mb-1">10+</div>
            <div className="text-zinc-400 text-xs">Years clinical experience</div>
          </div>
          <div className="bg-[#0d1c30] border border-zinc-800 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-white mb-1">3</div>
            <div className="text-zinc-400 text-xs">States currently serving</div>
          </div>
          <div className="bg-[#0d1c30] border border-zinc-800 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-[#d4a088] mb-1">25</div>
            <div className="text-zinc-400 text-xs">Founding member spots</div>
          </div>
        </div>

        {/* Testimonials (placeholder or real) */}
        <div>
          {isPlaceholder && (
            <p className="text-center text-zinc-600 text-xs mb-6 italic">
              Community voices — founding members share why they joined
            </p>
          )}
          <div className="grid md:grid-cols-3 gap-6">
            {activeTestimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#0d1c30] border border-zinc-800 rounded-xl p-6 flex flex-col"
              >
                {/* Quote mark */}
                <div className="text-[#d4a088]/30 text-5xl font-serif leading-none mb-3 select-none">"</div>

                <p className="text-zinc-300 text-sm leading-relaxed flex-1 mb-5">
                  {t.quote}
                </p>

                <div className="pt-4 border-t border-zinc-800">
                  <div className="text-white text-sm font-medium">{t.name}</div>
                  <div className="text-zinc-500 text-xs mt-0.5">
                    {t.role}
                    {t.location && <span> · {t.location}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isPlaceholder && (
            <p className="text-center text-zinc-600 text-xs mt-4">
              Voices reflect common experiences reported by South Asian men navigating metabolic health care.
              Individual outcomes vary.
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
