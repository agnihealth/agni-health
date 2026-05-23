# Agni Health — Designer Work Log
**Date**: Thursday, May 14, 2026  
**Author**: clinic-designer  
**For**: clinic-cmo, ops (Din), Sohan Japa MD

---

## Summary

Executed all three designer tasks from the CMO's May 14 briefing. Build is clean — no errors. Changes are live in the repo and deploy on next Vercel push.

---

## Task 1: Homepage Hero Copy v2 — ✅ Implemented

**Based on**: `homepage-hero-copy-v2.md` (CMO, May 14)  
**Status**: Implemented. Pending Sohan's final review before deploying to production.

### Changes made:

**`src/app/components/HeroHeadline.tsx`** — New default hero headline (Option A):
```
Your A1c is borderline.
Your doctor said "watch your diet."   ← amber
No one told you what to actually do.
```
- Added `line3` field support to the variant type so multi-line headlines work cleanly
- All UTM-tracked ad variants (Ads 1–7) are **unchanged** — visitors arriving from paid ads still see their contextual headline
- Only affects organic/direct traffic (the default)

**`src/app/page.tsx`** — Three supporting changes:

1. **Subheadline added** below hero:
   > "South Asian men develop type 2 diabetes at 4× the rate of white Americans — and most never get the workup that would tell them why. Agni Health is the telehealth practice built specifically for this."

2. **CTA updated**:
   - Button text: "Book a 30-Minute Consultation →" (was "Book Your Discovery Call")
   - Added pricing note: "Initial visit: $350 · CA, MA, LA · HSA/FSA accepted"
   - Added support line: "Most patients receive their full metabolic results and personalized plan within 5–7 days"

3. **Trust bar added** between hero and email capture strip:
   - Dr. Sohan Japa, MD — Stanford Medicine · Brigham and Women's Hospital
   - Built for South Asian metabolic health — not adapted from Western guidelines
   - Telehealth — California · Massachusetts · Louisiana
   - HSA/FSA accepted · No insurance needed

---

## Task 2: Lead Magnet PDF — ✅ Complete

**Based on**: `lead-magnet-outline.md` (CMO)

### What was built:

**`public/south-asian-metabolic-guide.html`** — Fully designed 7-page lead magnet:
- Cover page with Agni brand styling (dark background, amber flame palette)
- Page 1: The Problem (with stat callouts)
- Page 2: The South Asian Metabolic Paradox
- Page 3: The 3 Missing Tests (Fasting Insulin, HOMA-IR, ApoB)
- Page 4: The Other 5 Markers (full data table)
- Page 5: Self-Assessment Checklist + Scoring
- Page 6: Conversation Guide for Doctor Appointments
- Page 7: About Agni Health + CTA

**Accessible at**: `agnihealth.co/south-asian-metabolic-guide.html`  
**Print-to-PDF**: Users can print via browser (File → Print → Save as PDF)

### Updated `/guide` page:
- Added a download card with a direct link to the HTML guide
- Updated CTA button copy to "Book a 30-Minute Consultation →"

### Updated homepage (`page.tsx`):
- Added "Free Resource" lead magnet section above Pricing
- Headline: "Get the free South Asian Metabolic Risk Guide"
- Links to `/guide`

---

## Task 3: Ad 5 Creative — ✅ Complete

**Based on**: `ad-creative-brief-ad5.md` (CMO)  
**Format**: 1080×1080 square, Option A (text-only, no photo)

### Creative details:
- Background: Deep charcoal/navy gradient
- Headline (amber): "Your family history / isn't your destiny."
- Subline (white): "Agni Health — metabolic telehealth for South Asian men."
- Logo lockup: "Agni Health" bottom right in amber

### Saved to:
- `clinic/marketing/creatives/ad-creative-v5-family-history.jpg`
- `/Users/sohanai/workspace/agni-health-assets/ad-creative-v5-family-history.jpg`
- `public/ad-creative-v5-family-history.jpg` (Agni Health repo)

**Upload instructions for Sohan** → see `ad-creative-brief-ad5.md` — use this creative for Option A when building the ad in Meta Ads Manager.

---

## Build Status

```
✓ Build successful (no errors)
✓ 18 static pages generated
⚠ Pre-existing themeColor metadata warnings (not from today's changes)
```

---

## Pending Sohan Review

These changes are ready to deploy but per CMO brief require Sohan sign-off:

| Change | File | Risk |
|--------|------|------|
| Hero headline Option A | HeroHeadline.tsx | Low — A/B reversible |
| Subheadline copy | page.tsx | Low |
| CTA copy + pricing note | page.tsx | Low |
| Trust bar | page.tsx | Low |
| Lead magnet section on homepage | page.tsx | Low |
| Ad 5 creative upload | Meta Ads Manager | Medium — ad spend |

---

*Agni Health Designer | May 14, 2026*
