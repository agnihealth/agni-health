# Agni Health — CMO Report | May 13, 2026
**Prepared by:** clinic-cmo  
**Status:** For Sohan + Din review — no spend or external actions taken

---

## Executive Summary

The $500 Meta pilot ends today. We have meaningful signal. The bottleneck is **not** the email capture form — it's the funnel architecture. High-volume traffic from Ad 7 is qualifying through the screening flow but not booking via Healthie. Priority action: fix the homepage → /book conversion before scaling Phase 2 spend.

---

## 1. Email Capture: Why 0 Captures Today

**Root cause: audience flow mismatch, not a broken form.**

The `/start` page email capture only shows when a visitor answers "no" to a screening question (the `showNotFit` state). If Ad 7's audience is:
- Answering YES to both questions (qualified) → redirected to `/book` → not booking there
- Never hitting the "not a fit" screen that shows email capture

Evidence: May 13 = 60 sessions, 4 CTA clicks, 0 captures. May 12 = 12 sessions, 4 clicks, 4 captures (33% CVR). May 12's top ads (Ad 1 + Ad 6) drove a more educated, intent-rich audience that likely had more "no" answers (out of state, etc.) — catching them in the waitlist funnel.

**The homepage inline `EmailCapture` component** (between hero and problem section) should also be generating captures — but high-bounce traffic from Ad 7 may not be scrolling past the hero to reach it.

**Verification step for Din:** Check the Vercel environment variables in production:
- `AIRTABLE_PAT` set?
- `AIRTABLE_BASE_ID` set?
- If either is missing, Airtable writes fail silently but tracking events still fire (which is why PostHog showed 4 captures on May 12)

---

## 2. Ad Performance Analysis

### Summary
| Ad | May 12 CTR | May 13 Spend | Quality Signal |
|----|------------|--------------|----------------|
| Ad 1 (Metabolic Risk) | 8.95% | lower | ✅ HIGH — educated intent audience |
| Ad 6 (Three Stats) | 10.55% | lower | ✅ HIGH — data-driven audience |
| Ad 7 (Belly Fat Video) | n/a | ~$42 (75%) | ⚠️ MEDIUM — volume but lower intent |

### Recommendation for Phase 2 Ad Spend

**Requires Sohan approval before any Meta changes.**

Proposed Phase 2 structure:
- **Cap Ad 7 at $15/day** — it drives landing page views but lower booking intent
- **Re-activate Ad 1 + Ad 6** — $15–20/day each; the May 12 signal shows these reach a higher-intent audience even at lower volume
- **Total:** ~$45–50/day = ~$1,400–1,500/month (fits within approved Phase 2 range)

Do NOT scale spend until the /book conversion is fixed. More traffic to a leaky funnel is money out the window.

---

## 3. Homepage CVR Fix — Top Priority

**Problem:** 89 landing page views from Ad 7 → only 4 CTA clicks (4.5% CVR vs our 8% target)

**Diagnosis:**
The current hero headline ("Your doctor's normal isn't your normal") is introspective and philosophy-first. Ad 7's belly fat audience arrived primed for a specific solution (belly fat / weight loss), not a reframing of their doctor visit. There's a **message match gap** between ad creative and landing page.

### Proposed Changes (for Din to implement, Sohan to approve)

#### A. UTM-aware hero headline for Ad 7 traffic
The site already has A/B tested hero variants via Edge middleware. We should add a 4th variant (v4) specifically for `?utm_content=ad7` traffic:

**v4 headline (Ad 7 match):**
> South Asian men carry belly fat differently.  
> **Your metabolic risk is higher than your BMI suggests.**

This matches the Ad 7 belly fat message and pivots immediately to the clinical framing that distinguishes Agni Health.

#### B. Move email capture above the fold (for bounce protection)
Currently the `EmailCapture` component sits below the hero, below the fold on most mobile screens. For paid traffic, we need an email capture option visible without scrolling.

**Proposed change:** Add a secondary CTA option directly in the hero:
```
[Book Your Discovery Call]  — or —  [Get free risk guide →]
```
The "free risk guide" → triggers email capture inline (modal or inline form) with the HOMA-IR content from blog post 2 as the lead magnet.

#### C. Add physician credentialing above fold
Sohan's MD/board certification and the specialty context should be visible before the CTA. A one-line addition below the headline:

> *Sohan Japa, MD — Metabolic Health · CA · LA · MA*

Currently Sohan's credentials appear further down the page. For cold paid traffic, trust needs to be front-loaded.

### Implementation File
See `marketing/homepage-cvr-fix-v1.md` (drafted below) for the exact copy changes ready for Din to implement.

---

## 4. Brand Assets — Ready to Commit

The following files are staged but uncommitted in the repo. These need to be committed + pushed to trigger Vercel redeploy with the new flame mark logo.

**Requires: Din or Sohan to push to GitHub main (auto-deploys to agnihealth.co)**

Files to include:
```
assets/brand/logo.svg          ← new canonical SVG logo
assets/brand/flame-mark.svg    ← standalone flame mark
assets/brand/logo-1x.png       ← 498×181 transparent
assets/brand/logo-2x.png       ← 996×362 transparent
public/og-image.png            ← updated OG image
public/favicon.png             ← updated 512×512
public/favicon.ico             ← multi-size (16/32/48)
docs/design-language.md        ← brand guidelines doc
```

**Note on `/logo-transparent.png`:** The `/start` and homepage currently reference `public/logo-transparent.png`. This needs to be updated to use the new SVG, or the PNG needs to be replaced with the new `logo-1x.png` content. Din should handle this swap in the same commit.

---

## 5. Blog Post 2 (HOMA-IR) — Status

**The draft at `marketing/blog-post-2-draft.md` is publication-ready from a copy standpoint.**

What it still needs before publishing:
1. **Sohan: clinical accuracy review** — especially the HOMA-IR reference ranges table and the MASALA study citation. The DOI reference should match `10.1161/JAHA.124.041221` (verify it resolves).
2. **Din: /blog route** — the Next.js blog infrastructure needs to be live. This is a code task, not a content task.
3. **Designer task: HOMA-IR infographic** — a simple image showing the formula and reference ranges table for the Facebook post version.

**CMO recommendation:** Publish blog post 1 first (lower clinical complexity), then blog post 2 in Week 2 (May 19–21).

---

## 6. Week 2 Priorities (May 19–23)

Ranked by expected impact on patient #1:

| Priority | Task | Owner | Blocker |
|----------|------|-------|---------|
| 1 | Verify all pilot leads received Email 1 (Keragon) | Din | Verify automation live |
| 2 | Fix homepage hero for Ad 7 message match | Din | Sohan approve copy |
| 3 | Move email capture above fold + lead magnet | Din | Sohan approve |
| 4 | Commit + push brand assets | Din | — |
| 5 | Phase 2 Meta structure (if Sohan approves) | Din | Sohan approve budget |
| 6 | Publish blog post 1 | Din | /blog route + Sohan clinical OK |
| 7 | Blog post 2 clinical review | Sohan | — |
| 8 | DBA filing "Agni Health" — SF County | Sohan | ~$90, bizfileportal.sos.ca.gov |

---

## 7. Key Decisions Needed from Sohan

| # | Decision | Context | Timeline |
|---|----------|---------|---------|
| 1 | Phase 2 budget: $1,500/mo? | Pilot data supports it if funnel is fixed first | May 14–15 |
| 2 | Ad 7 cap + Ad 1/6 reactivation | CMO rec above | May 14 |
| 3 | Homepage hero copy (v4 + credential line) | Approve copy at Section 3 above | May 15 |
| 4 | Lead magnet: approve HOMA-IR guide as opt-in? | Repurposes blog post 2 content | May 15 |
| 5 | Blog post 1 clinical accuracy | `marketing/blog-post-1-outline.md` | May 15–16 |
| 6 | Blog post 2 clinical accuracy | `marketing/blog-post-2-draft.md` | May 17–18 |

---

*CMO function — Agni Health | 2026-05-13*
