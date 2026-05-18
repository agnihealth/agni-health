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
];

export default function HeroImage() {
  const searchParams = useSearchParams();
  const [variant, setVariant] = useState<number | null>(null);

  useEffect(() => {
    const variantCount = HERO_VARIANTS.length;

    // Check URL param first (?v=1, ?v=2)
    const urlVariant = searchParams.get('v');
    const urlIndex = urlVariant ? parseInt(urlVariant) - 1 : -1;
    if (urlIndex >= 0 && urlIndex < variantCount) {
      setVariant(urlIndex);
      return;
    }

    // Check localStorage for sticky assignment (re-randomize if out of range)
    const stored = localStorage.getItem('agni-hero-variant');
    const storedIndex = stored !== null ? parseInt(stored) : -1;
    if (storedIndex >= 0 && storedIndex < variantCount) {
      setVariant(storedIndex);
      return;
    }

    // Random assignment, persist to localStorage
    const random = Math.floor(Math.random() * variantCount);
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
