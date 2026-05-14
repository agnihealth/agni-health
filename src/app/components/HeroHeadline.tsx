"use client";

import { useSearchParams } from "next/navigation";

// Keys must match utm_content values exactly as passed in the ad URL.
// Original ads use shorthand keys; newer copies use {{ad.name}} which resolves to the full ad name.
const VARIANTS: Record<string, { headline: string; accent: string; sub?: string }> = {
  // Ad 7 — belly fat video (uses {{ad.name}})
  "Ad 7: Video of Belly Fat troubles": {
    headline: "South Asian bodies store fat",
    accent: "differently. Here's why.",
    sub: "Visceral fat, not the scale, is the real risk — and standard care misses it.",
  },
  // Ad 1 — metabolic risk (uses {{ad.name}})
  "Ad 1 -- Metabolic Risk": {
    headline: "Your metabolic risk is higher",
    accent: "than your doctor thinks.",
    sub: "South Asians develop prediabetes at 8× the rate — at the same BMI. We built care for that reality.",
  },
  // Ad 4 — blood sugar (copy uses {{ad.name}})
  "Ad 4 -- Blood Sugar - Copy": {
    headline: "Your blood sugar looks fine.",
    accent: "It's not the whole story.",
    sub: "Fasting insulin and HOMA-IR reveal risk years before A1c does. We check them.",
  },
  // Ad 6 — three stats (original shorthand + copy full name)
  "ad6-stats": {
    headline: "3 numbers your doctor",
    accent: "isn't checking.",
    sub: "HOMA-IR. ApoB. Fasting insulin. The markers standard care often skips — and why they matter for South Asians.",
  },
  "Ad 6 - Three stats - Copy": {
    headline: "3 numbers your doctor",
    accent: "isn't checking.",
    sub: "HOMA-IR. ApoB. Fasting insulin. The markers standard care often skips — and why they matter for South Asians.",
  },
  // Ad 5 — before/after (original shorthand + copy full names)
  "ad5-beforeafter": {
    headline: "Real results.",
    accent: "Built for South Asian biology.",
    sub: "Real patients. Real labs. Care designed around South Asian metabolism.",
  },
  "Ad 5 -- Before/After (A/B test) - Copy": {
    headline: "Real results.",
    accent: "Built for South Asian biology.",
    sub: "Real patients. Real labs. Care designed around South Asian metabolism.",
  },
  "Ad 5 -- Before/After (B test) - Copy": {
    headline: "Real results.",
    accent: "Built for South Asian biology.",
    sub: "Real patients. Real labs. Care designed around South Asian metabolism.",
  },
  // Ad 2 — doctor (original shorthand + copy)
  "ad2-doctor": {
    headline: "A doctor who actually",
    accent: "understands your biology.",
    sub: "Stanford & Harvard-trained. Built this practice because standard care kept missing South Asian patients.",
  },
  "Ad 2 -- Doctor who gets it - Copy": {
    headline: "A doctor who actually",
    accent: "understands your biology.",
    sub: "Stanford & Harvard-trained. Built this practice because standard care kept missing South Asian patients.",
  },
  // Ad 3 — weight loss (original shorthand + copy)
  "ad3-weight": {
    headline: "Weight loss that works",
    accent: "for South Asian bodies.",
    sub: "Standard advice wasn't built for your metabolism. Ours was.",
  },
  "Ad 3 -- Wt loss - Copy": {
    headline: "Weight loss that works",
    accent: "for South Asian bodies.",
    sub: "Standard advice wasn't built for your metabolism. Ours was.",
  },
};

const DEFAULT = {
  headline: "Your doctor's normal",
  accent: "isn't your normal",
};

export default function HeroHeadline() {
  const params = useSearchParams();
  const utmContent = params.get("utm_content") ?? "";
  const v = VARIANTS[utmContent] ?? DEFAULT;

  return (
    <div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
        {v.headline}
        <br />
        <span className="text-[#d4a088]">{v.accent}</span>
      </h1>
      {v.sub && (
        <p className="mt-4 text-zinc-400 text-lg leading-relaxed max-w-lg">
          {v.sub}
        </p>
      )}
    </div>
  );
}
