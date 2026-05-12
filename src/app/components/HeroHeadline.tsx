"use client";

import { useSearchParams } from "next/navigation";

const VARIANTS: Record<string, { headline: string; accent: string; sub: string }> = {
  "ad7-belly": {
    headline: "Still can't lose",
    accent: "the belly?",
    sub: "It's not willpower. South Asians store abdominal fat differently—and standard medicine isn't built for your biology.",
  },
};

const DEFAULT = {
  headline: "Your doctor's normal",
  accent: "isn't your normal.",
  sub: "Evidence-based protocols built for South Asian metabolism—not generic guidelines designed for someone else.",
};

export default function HeroHeadline() {
  const params = useSearchParams();
  const utmContent = params.get("utm_content") ?? "";
  const v = VARIANTS[utmContent] ?? DEFAULT;

  return (
    <>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
        {v.headline}
        <br />
        <span className="text-[#d4a088]">{v.accent}</span>
      </h1>
      <p className="text-base sm:text-xl text-zinc-400 leading-relaxed max-w-lg">
        {v.sub}
      </p>
    </>
  );
}
