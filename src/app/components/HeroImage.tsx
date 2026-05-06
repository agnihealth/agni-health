'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { trackExperiment } from "./Analytics";
import HeroStats from "./HeroStats";

type ImageVariant = { kind: 'image'; src: string; alt: string };
type StatsVariant = { kind: 'stats' };
type HeroVariant = ImageVariant | StatsVariant;

const HERO_VARIANTS: HeroVariant[] = [
  { kind: 'image', src: "/hero-v3-kitchen.png", alt: "South Asian man in kitchen with masala dabba and lentils" },
  { kind: 'image', src: "/hero-v2-outdoor.png", alt: "South Asian man walking outdoors in morning light" },
  { kind: 'stats' },
];

export default function HeroImage() {
  const searchParams = useSearchParams();
  const [variant, setVariant] = useState<number | null>(null);

  useEffect(() => {
    // Check URL param first (?v=1, ?v=2, ?v=3)
    const urlVariant = searchParams.get('v');
    if (urlVariant && ['1', '2', '3'].includes(urlVariant)) {
      setVariant(parseInt(urlVariant) - 1);
      return;
    }

    // Check localStorage for sticky assignment
    const stored = localStorage.getItem('agni-hero-variant');
    if (stored && ['0', '1', '2'].includes(stored)) {
      setVariant(parseInt(stored));
      return;
    }

    // Random assignment, persist to localStorage
    const random = Math.floor(Math.random() * 3);
    localStorage.setItem('agni-hero-variant', String(random));
    setVariant(random);

    // Track experiment exposure
    trackExperiment('hero_image', `v${random + 1}`);
  }, [searchParams]);

  // Show nothing while determining variant (prevents flash)
  if (variant === null) {
    return (
      <div className="aspect-[4/3] rounded-2xl bg-[#1a2d4a] animate-pulse" />
    );
  }

  const hero = HERO_VARIANTS[variant];

  if (hero.kind === 'stats') {
    return <HeroStats />;
  }

  return (
    <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
      <Image 
        src={hero.src} 
        alt={hero.alt} 
        fill 
        className="object-cover"
        priority
      />
      {/* Gradient overlay for text readability if needed */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a1628]/30" />
    </div>
  );
}
