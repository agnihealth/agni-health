# Agni Health — Analytics Report
**Period:** May 6 – May 16, 2026 (10 days)  
**Generated:** May 16, 2026  
**Campaign:** Agni Health — $500 Pilot May 2026

---

## 1. Meta Ads — Campaign Summary

| Metric | Value |
|--------|-------|
| **Spend** | $745.46 |
| **Impressions** | 56,040 |
| **Reach** | 46,389 |
| **Frequency** | 1.21x |
| **Clicks (all)** | 3,244 |
| **Link Clicks** | 1,379 |
| **Landing Page Views** | 1,269 |
| **CTR** | 5.79% |
| **CPM** | $13.30 |
| **CPC** | $0.23 |
| **Initiate Checkout** | 2 |
| **Video Views** | 4,796 |

---

## 2. Meta Ads — Ad-Level Breakdown

| Ad Name | Spend | Impressions | Clicks | CTR | CPM | CPC | Link Clicks | LPVs | Checkout |
|---------|-------|-------------|--------|-----|-----|-----|-------------|------|----------|
| Ad 7: Video of Belly Fat troubles | $172.61 | 11,935 | 650 | 5.45% | $14.46 | $0.27 | 425 | 369 | 0 |
| Ad 5 -- Before/After (B test) - Copy | $120.98 | 10,397 | 493 | 4.74% | $11.64 | $0.25 | 304 | 286 | 1 |
| Ad 6 - Three stats - Copy | $99.52 | 8,515 | 892 | 10.48% | $11.69 | $0.11 | 149 | 131 | 0 |
| Ad 4 -- Blood Sugar - Copy | $79.04 | 5,856 | 191 | 3.26% | $13.50 | $0.41 | 95 | 91 | 0 |
| Ad 1 -- Metabolic Risk - Copy | $76.65 | 5,509 | 279 | 5.06% | $13.91 | $0.27 | 87 | 85 | 1 |
| Ad 1 -- Metabolic Risk | $41.14 | 3,043 | 198 | 6.51% | $13.52 | $0.21 | 51 | 49 | 0 |
| Ad 6 - Three stats | $34.84 | 2,086 | 219 | 10.50% | $16.70 | $0.16 | 57 | 51 | 0 |
| Ad 5 -- Before/After (A test) - Copy | $31.42 | 2,311 | 107 | 4.63% | $13.60 | $0.29 | 67 | 64 | 0 |
| Ad 5 -- Before/After | $25.20 | 1,411 | 65 | 4.61% | $17.86 | $0.39 | 43 | 40 | 0 |
| Ad 2 -- Doctor who gets it | $20.25 | 1,247 | 37 | 2.97% | $16.24 | $0.55 | 29 | 29 | 0 |
| Ad 5 -- Before/After (A/B test) | $15.37 | 977 | 62 | 6.35% | $15.73 | $0.25 | 43 | 43 | 0 |
| Ad 4 -- Blood Sugar | $13.86 | 1,341 | 27 | 2.01% | $10.34 | $0.51 | 17 | 17 | 0 |
| Ad 3 -- Wt loss | $10.47 | 1,075 | 19 | 1.77% | $9.74 | $0.55 | 8 | 10 | 0 |
| Ad 2 -- Doctor who gets it - Copy | $2.08 | 134 | 1 | 0.75% | $15.52 | $2.08 | 1 | 1 | 0 |
| Ad 4 -- Blood Sugar - Copy (v2) | $1.49 | 147 | 4 | 2.72% | $10.14 | $0.37 | 3 | 3 | 0 |
| Ad 3 -- Wt loss - Copy | $0.49 | 51 | 0 | 0% | $9.61 | — | 0 | 0 | 0 |
| Ad 5 -- Before/After (B test) | $0.05 | 5 | 0 | 0% | $10.00 | — | 0 | 0 | 0 |
| **TOTAL** | **$745.46** | **56,040** | **3,244** | **5.79%** | **$13.30** | **$0.23** | **1,379** | **1,269** | **2** |

### 🏆 Top Performers (by CTR)
1. **Ad 6 - Three stats** & **Ad 6 - Three stats - Copy** — ~10.5% CTR, lowest CPC ($0.11–$0.16)
2. **Ad 1 -- Metabolic Risk** — 6.51% CTR, $0.21 CPC
3. **Ad 5 -- Before/After (A/B test)** — 6.35% CTR, $0.25 CPC

### 💸 Spend Leaders
1. Ad 7: Video of Belly Fat troubles — $172.61 (highest LPVs: 369)
2. Ad 5 -- Before/After (B test) - Copy — $120.98 (1 checkout)
3. Ad 6 - Three stats - Copy — $99.52 (highest click volume: 892)

---

## 3. PostHog — Site Analytics

| Metric | Value |
|--------|-------|
| **Total Pageviews** | 3,031 |
| **Unique Visitors** | 1,442 |
| **Sessions** | 1,511 |
| **Waitlist Signups (leads)** | 5 |
| **InitiateCheckout events** | 0 |
| **Lead Conversion Rate** | 0.33% (of sessions) |

### Pageviews by Page

| Page | Pageviews | % of Total |
|------|-----------|------------|
| `/` (Homepage) | 2,937 | 96.9% |
| `/start` | 55 | 1.8% |
| `/book` | 20 | 0.7% |
| `/privacy` | 10 | 0.3% |
| `/terms` | 7 | 0.2% |
| `/hero=V1` | 1 | <0.1% |
| `/guide` | 1 | <0.1% |
| **Total** | **3,031** | |

> **Note:** Traffic is heavily concentrated on the homepage (96.9%). Very few users are progressing to `/start` or `/book`.

---

## 4. Combined Funnel: Ads → Site → Leads → Checkout

```
Meta Ad Impressions       56,040
         ↓ 5.79% CTR
All Clicks                 3,244
         ↓ link clicks
Link Clicks                1,379  (42.5% of all clicks)
         ↓ landing page view rate
Landing Page Views         1,269  (92.0% of link clicks)
         ↓ PostHog sessions
PostHog Sessions           1,511  (includes organic/direct)
         ↓ homepage → /start
Visited /start                55   (3.6% of sessions)
         ↓ /start → /book
Visited /book                 20   (36% of /start visitors)
         ↓ waitlist conversion
Waitlist Signups               5   (0.33% of sessions)
         ↓ checkout pixel
Checkout (Meta pixel)          2   (0.13% of sessions)
```

### Key Funnel Metrics

| Stage | Count | Rate |
|-------|-------|------|
| Impressions → Clicks | 56,040 → 3,244 | 5.79% CTR |
| Clicks → Link Clicks | 3,244 → 1,379 | 42.5% |
| Link Clicks → LPVs (Meta) | 1,379 → 1,269 | 92.0% |
| Sessions → /start | 1,511 → 55 | 3.6% |
| /start → /book | 55 → 20 | 36.4% |
| Sessions → Waitlist Lead | 1,511 → 5 | 0.33% |
| Sessions → Checkout | 1,511 → 2 | 0.13% |

### Cost Per Key Event
| Event | Cost |
|-------|------|
| Cost per Link Click | $0.54 |
| Cost per Landing Page View | $0.59 |
| Cost per Session (est.) | $0.49 |
| Cost per Waitlist Signup | $149.09 |
| Cost per Checkout | $372.73 |

---

## 5. Observations & Notes

- **Ad 6 (Three stats)** is the clear CTR winner at ~10.5% — remarkably high for cold traffic. The copy/creative format is resonating well with the SA audience.
- **Ad 7 (Belly Fat video)** drives the most landing page views (369) and has strong volume, making it the top traffic driver. No checkout conversions though.
- **Homepage dominance** (96.9% of pageviews) with only 3.6% progressing to `/start` suggests the homepage-to-funnel transition needs work. The CTA or UX flow may need optimization.
- **Only 5 waitlist signups** from ~1,511 sessions (0.33%) is a low conversion rate — expected for early-stage but worth tracking against benchmarks.
- **2 checkout initiations** (Meta pixel) vs **0 in PostHog** suggests the checkout event may not be firing in PostHog, or checkout flow routes elsewhere.
- **$745.46 spent** in 10 days against a $500 pilot budget suggests the campaign has slightly exceeded initial budget — worth reviewing pacing.

---

*Raw data: `~/.openclaw/workspace/data/agni-analytics-raw.json`*
