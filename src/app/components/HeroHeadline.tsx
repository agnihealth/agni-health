"use client";

import { useSearchParams } from "next/navigation";

// Keys must match utm_content values exactly as passed in the ad URL
const VARIANTS: Record<string, { headline: string; accent: string; sub?: string }> = {
  // Ad 7 — belly fat video
  "Ad 7: Video of Belly Fat troubles": {
    headline: "South Asian bodies store fat",
    accent: "differently",
  },
  // Ad 1 — metabolic risk
  "Ad 1 -- Metabolic Risk": {
    headline: "South Asian metabolic risk is higher",
    accent: "than standard guidelines recognize",
  },
  // Ad 4 — blood sugar
  "Ad 4 -- Blood Sugar - Copy": {
    headline: "Normal blood sugar doesn't always tell",
    accent: "the full story for South Asian bodies",
  },
  // Ad 6 — three stats
  "Ad 6 - Three stats - Copy": {
    headline: "Your risk starts",
    accent: "earlier than you think",
  },
  // Ad 5 — before/after
  "Ad 5 -- Before/After (A test) - Copy": {
    headline: "Built to address visceral fat",
    accent: "Built for South Asian biology",
  },
  "Ad 5 -- Before/After (B test) - Copy": {
    headline: "Built to address visceral fat",
    accent: "Built for South Asian biology",
  },
  // Ad 2 — doctor
  "Ad 2 -- Doctor who gets it - Copy": {
    headline: "A doctor who actually gets it",
    accent: "because he lived it too",
  },
  // Ad 3 — weight loss
  "Ad 3 -- Wt loss - Copy": {
    headline: "Metabolic health care",
    accent: "built for South Asian bodies",
  },
};

const DEFAULT = {
  headline: "Standard 'normal' wasn't built",
  accent: "for South Asian biology",
};

export default function HeroHeadline() {
  const params = useSearchParams();
  const utmContent = params.get("utm_content") ?? "";
  const v = VARIANTS[utmContent] ?? DEFAULT;

  return (
    <div>
      <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
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
