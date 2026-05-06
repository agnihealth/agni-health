# Clinic Designer Deliverables
*Date: 2026-05-06 | clinic-designer agent | T-1 day before launch*

---

## Status: COMPLETE ✅

All design deliverables for launch readiness have been executed.

---

## 1. Hero Images — GENERATED & DEPLOYED

**Location:** `clinic/website/assets/` + `agni-health/public/`
**Commit:** `5aeca7c` — pushed to main, Vercel auto-deploying

| File | Description | Status |
|------|-------------|--------|
| `hero-v1-morning.png` | SA man, sunlit apartment window, morning ritual | ✅ Generated + deployed |
| `hero-v2-outdoor.png` | SA man, urban walking path, navy jacket | ✅ Generated + deployed |
| `hero-v3-kitchen.png` | SA man, modern kitchen, healthy meal + health app | ✅ Refreshed + deployed |

**A/B rotation:** All 3 in `HeroImage.tsx` rotation. Previous brief noted v1-morning looked AI-generated — this version uses improved gpt-image-2 generation. Review and remove from rotation if it still feels unnatural.

---

## 2. Ad Creatives — GENERATED

**Location:** `clinic/marketing/creatives/`
**Brief:** `clinic/marketing/creatives/ad-creative-brief.md`

| File | Angle | Matched Ad Copy |
|------|-------|----------------|
| `ad-creative-v1-kitchen.png` | Nutrition + metabolic health | Ad 1: "Your genes may be working against you" |
| `ad-creative-v2-outdoor.png` | Active lifestyle, telehealth | Ad 2: "A doctor who actually gets it" |
| `ad-creative-v3-digital.png` | Home health monitoring | Ad 4: "Control your blood sugar. Today." |
| `ad-creative-v4-fitness.png` | Weight/fitness transformation | Ad 3: "Finally lose weight. Keep it off." |

All creatives: 1:1 square, generated with gpt-image-2.
**Next step:** Upload to Meta Ads Manager, set UTM params per brief, run all 4 creatives ~$125/ad, pause bottom 2 by Day 3.

---

## 3. Pricing Tier Inclusions — ENHANCED & LIVE

**Commit:** Part of `d92d73d` — already live at agnihealth.co

**Change summary:**

Before (vague):
- "Quarterly 20-min follow-up visits"
- "Async physician messaging (48hr SLA)"
- "Personalized metabolic protocol"

After (specific, converts):
- "Quarterly 20-min video visits (board-certified MD)"
- "SA-specific lab panel (HOMA-IR, ApoB, fasting insulin)"
- "Personalized metabolic protocol document"
- "Medication management incl. GLP-1 if appropriate"
- "Unlimited async physician messaging (48-hr response)"

Applied to both Essential and Intensive tiers. Intensive also updated with:
- "CGM setup, data review & clinical interpretation"
- "Annual 60-min metabolic deep-dive & goal reset"

Addresses CEO flag: "Membership tier inclusions detail on pricing page."

---

## 4. Social Proof Section — CONFIRMED LIVE

Already deployed (commit `3d988f8`). Verified in page snapshot.
Content: "Clinical depth. Evidence-based. Built for you." → 3 pillars + credential bar + Dr. Japa personal quote.

---

## 5. What's Still Open (Not Design Scope)

| Item | Owner | Priority |
|------|-------|----------|
| Healthie availability hours | Sohan | CRITICAL — blocks booking |
| Link intake flow to appointments | Sohan/CMO | CRITICAL — blocks booking |
| Airtable PAT env var in Vercel | CMO | High — executive waitlist emails |
| Louisiana prescribing compliance | Legal/Sohan | High — legal risk |
| Physician headshot quality | Sohan | Medium — may want HeadshotPro session |

---

## Notes for Next Iteration

- **Hero images:** Review v1-morning. If it still looks AI-generated, remove from rotation and keep v2+v3.
- **Ad creatives:** Text overlay versions (with actual ad copy burned in) would help for Instagram Stories format. Available on request.
- **OG image:** `og-image.png` exists but hasn't been refreshed. Consider updating for launch.
- **Logo:** Solid wordmark logo exists. No icon/favicon iteration needed for launch.
