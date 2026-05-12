"use client";

import { useSearchParams } from "next/navigation";

const VARIANTS: Record<string, { headline: string; accent: string }> = {
  "ad7-belly": {
    headline: "Still can't lose",
    accent: "the belly?",
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
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
      {v.headline}
      <br />
      <span className="text-[#d4a088]">{v.accent}</span>
    </h1>
  );
}
