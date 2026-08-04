# Agni Health Analytics — May 17, 2026

## Meta Ads Performance

| Ad | Impressions | Reach | Clicks (all) | Link Clicks | Spend | CTR | CPC |
|----|------------|-------|--------------|-------------|-------|-----|-----|
| Ad 1 -- Metabolic Risk | 892 | 867 | 44 | 16 | $10.56 | 4.93% | $0.24 |
| Ad 6 - Three stats - Copy | 1,521 | 1,426 | 153 | 32 | $12.58 | 10.06% | $0.08 |
| Ad 7: Video of Belly Fat troubles | 1,008 | 1,008 | 53 | 46 | $16.56 | 5.26% | $0.31 |
| Ad 8 -- Oral GLP1 | 164 | 147 | 6 | 2 | $1.78 | 3.66% | $0.30 |
| **TOTAL** | **3,585** | **3,448** | **256** | **96** | **$41.48** | **7.14%** | **$0.16 avg** |

### Landing Page Views (from Meta actions)
- Ad 1: 15 LPVs
- Ad 6: 26 LPVs
- Ad 7: 43 LPVs
- Ad 8: 1 LPV
- **Total: 85 LPVs**

### Cost Per Visit
- Total spend / LPVs: $41.48 / 85 = **$0.49 CPV** (baseline was $0.48 — essentially flat)

### Video Engagement (Ad 7)
- 490 video views out of 1,008 impressions (48.6% video view rate)
- 3 reactions, 1 save

---

## ⭐ Best Performing Ad: Ad 6 - Three stats - Copy

**Why it wins:**
- CTR: 10.06% — massively outperforming others (1.6x the account average)
- CPC: $0.08 — cheapest by far (Ad 7 is 4x more expensive per click)
- 26 landing page views at lowest cost
- Efficiency ratio is exceptional — this is the ad to scale

---

## PostHog — Site Activity

### Traffic Summary
| Metric | Value |
|--------|-------|
| Total Pageviews | 113 |
| Unique Visitors | 106 |
| AB Test Assignments | 97 |
| Web Vitals events | 93 |
| Page Leaves | 10 |
| Autocapture clicks | 3 |

### Traffic by Ad (PostHog pageviews)
| Ad | Pageviews | Unique Visitors |
|----|-----------|----------------|
| Ad 7: Video of Belly Fat troubles | 62 | 61 |
| Ad 6 - Three stats - Copy | 29 | 26 |
| Ad 1 -- Metabolic Risk | 12 | 12 |
| Direct/Other | ~10 | ~7 |

**Note:** PostHog page view counts are higher than Meta LPVs for Ad 7 (62 vs 43) and roughly consistent for Ad 6 (29 vs 26). Discrepancy in Ad 7 may reflect return visits or attribution differences.

---

## Conversion Funnel

| Stage | Count |
|-------|-------|
| Landing Page Views (Meta) | 85 |
| Site Visitors (PostHog) | 106 |
| CTA / Form Clicks (autocapture) | 3 |
| Leads / Waitlist Signups | **0** |
| Screening Qualified | **0** |
| Bookings | **0** |

### Funnel Drop-off
- Visitors → CTA click: ~2.8% (3/106) — significantly below baseline 0.7% CTA rate... wait, 3/106 = 2.8% but this is raw autocapture not confirmed CTA clicks
- **No conversion events tracked today** — 0 leads, 0 signups, 0 bookings
- This is concerning: with 85 landing page views and 106 site visitors, zero conversions suggests either (a) conversion tracking not firing, or (b) genuine 0-conversion day

---

## vs. May 14-16 Baseline ($0.48 CPV, 6.27% CTR, 0.7% CTA rate)

| Metric | Baseline | Today | Change |
|--------|----------|-------|--------|
| CPV | $0.48 | $0.49 | +2% (flat) |
| CTR | 6.27% | 7.14% | **+14% ↑** |
| CTA Rate | 0.7% | ~0% | ↓ (no events) |
| Top ad CTR | — | 10.06% (Ad 6) | ⭐ |

### Key Observations
1. **CTR improved** overall — the account is getting better engagement
2. **Ad 6 is a breakout** — 10.06% CTR is remarkable for cold Facebook traffic
3. **Zero conversions recorded** — check if PostHog events are firing for form submits/CTA clicks. May be a tracking gap or genuinely rough conversion day.
4. **Ad 7 (video)** has great video engagement (490 views) but poor link click-through relative to spend — strong top-of-funnel but may need a stronger CTA
5. **Ad 8 (Oral GLP1)** — minimal spend, minimal results. Low priority.

### Recommendations
- Scale Ad 6 budget — the CTR and CPC justify it
- Audit conversion event tracking in PostHog (no Lead/signup events firing at all is suspicious)
- Consider pausing Ad 8 or reallocating its budget to Ad 6
- Ad 7 video is building brand awareness but not converting — review the landing page experience for video traffic specifically

---

*Generated: 2026-05-17 | Sources: Meta Ads API v21.0, PostHog HogQL*
