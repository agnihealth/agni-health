# Agni Health — Design Language

> **Version:** 1.0  
> **Status:** Codified from production website (May 2026)  
> **Applies to:** Web, paid ads, video, print, social assets

---

## Brand Essence

Agni Health sits at the intersection of **medical credibility** and **cultural specificity**. The visual language should feel like a premium private clinic — not a startup, not a tech product. Warm enough to feel human. Dark enough to feel serious.

**In one sentence:** *Trusted specialist care, built for people who've been overlooked by generic medicine.*

---

## Color Palette

### Backgrounds

| Name | Hex | Usage |
|------|-----|-------|
| **Deep Navy** | `#0a1628` | Primary page background, hero section, bottom CTA |
| **Midnight Blue** | `#0d1c30` | Section backgrounds, card surfaces, stat blocks |
| **Elevated Navy** | `#1a2d4a` | Nested cards, image placeholder backgrounds, inputs |

### Brand Accent

| Name | Hex | Usage |
|------|-----|-------|
| **Terracotta** | `#d4a088` | Headlines emphasis, stat numbers, icons, CTA buttons, section labels |
| **Terracotta Deep** | `#c4906c` | Button hover state, pressed states |
| **Terracotta Subtle** | `#d4a088` at 10% opacity | Icon container backgrounds, subtle highlights |

> **Why terracotta?** It evokes warmth, South Asian cultural heritage (think spice, clay, fire — "Agni"), and reads as premium against deep navy without being clinical-cold blue or aggressive-red.

### Text Hierarchy

| Role | Value | Notes |
|------|-------|-------|
| **Primary** | `white` / `#ffffff` | Main headings, key body copy |
| **Secondary** | `zinc-300` / `#d4d4d8` | Supporting body, subheadings |
| **Tertiary** | `zinc-400` / `#a1a1aa` | Descriptive text, captions |
| **Muted** | `zinc-500` / `#71717a` | Placeholder text, fine print |
| **Accent** | `#d4a088` | Labels, emphasized words, callouts |

### Borders & Dividers

| Name | Value | Usage |
|------|-------|-------|
| **Subtle** | `zinc-800` / `#27272a` | Card borders, section dividers |
| **Mid** | `zinc-700` / `#3f3f46` | Stronger dividers, focus rings |

---

## Typography

### Font Stack

| Role | Font | Variable | Notes |
|------|------|----------|-------|
| **Primary UI** | Plus Jakarta Sans | `--font-jakarta` | All body, nav, CTAs, labels |
| **Display / Serif** | Playfair Display | `--font-playfair` | Testimonial pull quotes, feature callouts |
| **Monospace** | Geist Mono | `--font-geist-mono` | Step numbers (01, 02, 03), code, stat counters |

### Type Scale

| Level | Classes | Usage |
|-------|---------|-------|
| **Hero H1** | `text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight` | One per page |
| **Section H2** | `text-2xl sm:text-3xl font-bold` | Section headings |
| **Card H3** | `text-xl font-semibold` | Feature cards, step titles |
| **Sub H4** | `text-lg font-semibold` | Card subsections |
| **Body** | `text-base leading-relaxed` | Standard paragraph text |
| **Body Large** | `text-base sm:text-xl leading-relaxed` | Hero subheadline |
| **Label / Eyebrow** | `text-sm font-medium tracking-wider uppercase` | Section labels above headings |
| **Stat / Counter** | `text-4xl font-bold font-mono` | Big numbers, impact stats |
| **Caption** | `text-sm` | Fine print, disclaimers |

---

## Spacing & Layout

- **Max content width:** `max-w-7xl` with `px-4 sm:px-6 lg:px-8` horizontal padding
- **Section vertical rhythm:** `py-16 sm:py-24` — generous breathing room
- **Card padding:** `p-6` (compact) or `p-8` (standard)
- **Grid gaps:** `gap-6` (compact), `gap-8` (standard), `gap-12` (loose)

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded` | 4px | CTA buttons |
| `rounded-lg` | 8px | Small elements |
| `rounded-xl` | 12px | Cards, stat blocks |
| `rounded-2xl` | 16px | Image containers, hero cards |
| `rounded-full` | 9999px | Avatars, badges, pills |

---

## Components

### Primary CTA Button
```
bg-[#d4a088] text-[#0a1628] px-8 py-4 rounded text-base font-medium
hover:bg-[#c4906c] transition-colors
```
- Dark navy text on terracotta background
- `transition-colors` — no bounce, no scale, just color shift

### Secondary / Ghost Button
```
border border-[#d4a088] text-[#d4a088] px-6 py-3 rounded text-sm font-medium
hover:bg-[#d4a088]/10 transition-colors
```

### Stat Card
```
bg-[#0a1628] border border-zinc-800 rounded-xl p-6 text-center
— Stat number: text-4xl font-bold text-[#d4a088]
— Label: text-white font-medium
— Description: text-zinc-400 text-sm
```

### Section Label (Eyebrow)
```
text-[#d4a088] text-sm font-medium tracking-wider uppercase
```
Used above H2s to introduce sections.

### Icon Container
```
w-12 h-12 rounded-lg bg-[#d4a088]/10 flex items-center justify-center
— Icon: w-6 h-6 text-[#d4a088]
```

---

## Motion & Interactions

- **Transitions:** `transition-colors` for interactive elements — subtle, no jarring movement
- **Gradients:** Subtle `bg-gradient-to-b from-[#0a1628] to-[#0d1c30]` for section depth
- **Animation:** `animate-pulse` used sparingly for skeleton/loading states only
- **Scroll:** `scroll-behavior: smooth` globally enabled

**Rule:** No flashy animations. Motion should reinforce premium and clinical, not startup-y.

---

## Ad Creative Guidelines

### Static Image Ads

- **Formats:** 1080×1080 (Feed), 1080×1920 (Stories/Reels)
- **Background:** Deep Navy `#0a1628` or dark photographic
- **Headline font:** Plus Jakarta Sans Bold
- **Accent:** Terracotta `#d4a088` for key words, numbers, CTAs
- **Logo:** Bottom-left or bottom-right, white wordmark
- **Disclaimer:** Caption-size, `zinc-500`, bottom of frame
- **South Asian representation:** Always. Photography/illustration should center South Asian men 30–55.

### Video Ads

- **Duration:** 8–15s (Stories/Reels), 15–30s (Feed)
- **Format:** 9:16 for Stories/Reels; 1:1 for Feed
- **Style:** Text-on-screen preferred — stat hook (0–3s), proof (3–7s), brand (7–11s), CTA (11–15s)
- **Background:** Deep Navy gradient or near-black
- **Type:** Large bold white + terracotta accent words
- **Hook rule:** Lead with the South Asian-specific stat. It's the most scroll-stopping thing we have.

### Winning Hook Language (validated May 2026)
```
"South Asians develop diabetes at a lower BMI than any other group."
"Your genes may be working against you."
"Control your blood sugar. Today."
"Prediabetes doesn't have to become diabetes."
```

---

## Voice & Tone

| Dimension | Do | Don't |
|-----------|-----|-------|
| **Credibility** | "Physician-led", "evidence-based", "specialist" | "Holistic", "wellness journey", "heal yourself" |
| **Specificity** | "South Asian men", "at a lower BMI", "A1c isn't enough" | Generic health language |
| **Urgency** | "Limited spots", "starts with a 15-min call" | Fear-mongering, exaggerated claims |
| **Warmth** | Direct, human, no jargon | Cold/clinical or overly casual |
| **CTAs** | "Book Your Discovery Call", "Get Started" | "Learn More", "Click Here", "Sign Up" |

---

## Don'ts

- ❌ No white backgrounds — always dark navy
- ❌ No generic stock photos of stethoscopes or pill bottles
- ❌ No blue accent colors (too generic health-tech)
- ❌ No all-caps body text (eyebrow labels only)
- ❌ No thin/light font weights for body copy (poor legibility on dark bg)
- ❌ No before/after photos without FTC disclaimer text
- ❌ No non-South-Asian representation in primary visuals

---

## Asset Storage

```
agni-health/
├── assets/brand/          — logos, favicons, wordmarks
├── assets/               — hero image variants
├── marketing/creatives/  — ad creatives (static + video)
├── public/               — production images (Next.js)
└── docs/design-language.md  ← this file
```
