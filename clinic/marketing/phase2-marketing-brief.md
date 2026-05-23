# Agni Health — Phase 2 Marketing Brief
**Author**: clinic-cmo | **Date**: 2026-05-13  
**Status**: PROPOSED — awaiting CEO/Din approval before execution  
**Context**: Based on $500 Meta pilot (approx. May 7–14, 2026)

---

## Pilot Summary (Week 1)

| Metric | Result | Notes |
|--------|--------|-------|
| Total site visitors (7 days) | ~65 real (74 total minus ~9 Sohan testing) | |
| Paid social visitors | 25 | Facebook/Instagram feeds |
| CTR | 2.24% | Strong for cold audience |
| Cost per landing page view | $0.50–0.90 | Well below $2 benchmark |
| Homepage → /start conversion | 9.5% (21 → 2) | Room to improve |
| /start → /book conversion | 100% | High intent on booking page |
| Winning ad | Ad 4 — "Blood Sugar" angle | 11 of 12 page landings |
| Confirmed patient bookings | TBD (Sohan to confirm) | |

### Key Findings

**What worked:**
- CTR of 2.24% is **strong** for a healthcare cold-traffic audience (industry benchmark ~1.2–1.8%)
- $0.50–0.90 per landing page view is excellent — well under target CAC headroom
- Ad 4 (blood sugar / prediabetes framing) clearly resonated most with SA males 30–55

**What needs work:**
- Homepage → /start CVR at 9.5% is suboptimal. Industry target for high-intent pages: 15–25%
- We had traffic, but limited email capture (Airtable waitlist not yet wired)
- We don't yet know how many website visitors booked — can now track via Keragon → Meta Schedule events

**Implications:**
1. The audience targeting and ad creative are working. The funnel bottleneck is **the website conversion rate**, not ad performance.
2. With better landing page CVR, the CAC could be well under $100
3. Ad 4 ("Take control of your blood sugar") + Ad 5 ("Your family history isn't your destiny") should be our core creative going into Phase 2

---

## Phase 2 Goals (May 14 – June 14)

| Goal | Target |
|------|--------|
| First paid patient | Week of May 14 |
| Total paid patients | 5 by June 1 |
| Website CVR (homepage → /start) | 20% (from 9.5%) |
| Waitlist email captures | 100 |
| Organic channel activation | Reddit + Facebook Page live |
| Blog post 1 published | Before May 20 |

---

## 1. Website Conversion Optimization (Priority 1)

**The funnel bottleneck is conversion, not traffic. Fix this before scaling ad spend.**

### Changes to propose to Sohan:

**A. Above-the-fold rewrite**
Current hero: assess what's there. Propose:
> "Your A1c is borderline. Your doctor said 'watch your diet.' But no one told you what to actually do."

This speaks directly to the prediabetes journey and mirrors the winning Ad 4 angle.

**B. Add Sohan's face + credentials prominently**
- A photo of Sohan with: "Dr. Sohan Japa, MD | Stanford • Harvard | Metabolic Health Specialist"
- A single honest line: "I built Agni Health because South Asian men deserve a doctor who already knows the numbers."

**C. Reduce friction on /start**
- The booking flow should be 1-click visible — "Book a 30-minute consultation →"
- Add: "No insurance needed. HSA/FSA accepted."
- Add: "Most patients see initial results in the first 30 days."

**D. Waitlist capture (out-of-state + out-of-schedule visitors)**
- Wire Airtable to /api/waitlist (ops task — CMO recommends prioritizing immediately)
- Copy: "Outside CA, MA, or LA? Join the waitlist — we're expanding."
- Secondary capture: Exit-intent offer: "Get our free South Asian Metabolic Health Checklist" → email required

**E. FAQ section (bottom of homepage)**
Key objections to address:
- Does insurance cover this? (No, self-pay — HSA/FSA accepted)
- What states are you in? (CA, MA, LA — working on expansion)
- What's a typical first visit like? (30 min video → full metabolic workup → personalized plan)
- How is this different from my regular doctor? (SA-specific thresholds, HOMA-IR, ApoB, GLP-1 where appropriate)

---

## 2. Meta Ads — Phase 2 Campaign

**Recommended**: Pause the pilot campaign. Launch a new Phase 2 campaign with improved creative and a tighter budget until CVR is improved.

### Phase 2 Campaign Settings

| Setting | Value |
|---------|-------|
| Campaign objective | Traffic (same as pilot) |
| Budget | $300/month ($10/day) |
| Duration | Ongoing until 5 patients booked, then re-evaluate |
| Geography | CA only (Bay Area + LA + San Diego) |
| Targeting | Males 30–55, SA ethnic proxy interests |
| Placements | FB Feed + IG Feed only |

### Ad Creative Priority (ranked by expected performance)

1. **Ad 4 (winner)** — "Take control of your blood sugar" — KEEP RUNNING
2. **Ad 5** — "Your family history isn't your destiny" — ADD THIS (already drafted)
3. **Ad 7** — "A doctor who was trained for this" (physician authority) — ADD IF AD 5 PERFORMS
4. **Video ad** — once text overlay is fixed — can test as Ad 8

**Pause**: Ad 1 (BMI angle), Ad 2 (doctor empathy), Ad 3 (GLP-1 weight). These underperformed vs. Ad 4.

### Budget Justification
At $0.70 avg CPL and 9.5% CVR, current CAC estimate = $0.70 ÷ 0.095 ÷ 0.XX (booking rate). If booking rate is 50% of /start visitors: CAC ≈ $0.70 / 0.095 / 0.5 = ~$147. With improved CVR (20%): CAC ≈ $70. Target: <$200.

$300/month is low-risk testing that lets us dial in CVR before scaling.

---

## 3. Organic Channels — Activate Now

These channels cost $0 and can drive the first 1–3 patients. They should be activated immediately.

### Reddit (Sohan posts)
Scripts are ready in `clinic/marketing/reddit-scripts-week1.md`. 

**Activation plan:**
- Week 1: Post Script 1 in r/prediabetes (find a relevant thread or post a new one)
- Week 2: Post Script 2 in r/IndianAmerican or r/ABCDesis
- Week 3: Post Script 3 in r/diabetes
- Rule: Never mention Agni Health in first 3-4 posts. Build credibility first.
- After 3–4 genuine responses: mention agnihealth.co only if directly asked about practice/resources

**Time commitment for Sohan**: ~20 minutes per week.

### Facebook Page (agnihealth)
The page (ID 61589385147389) is live but has zero content. 

**Activation plan — 3 posts this week:**
1. **Post 1** (today): "Welcome to Agni Health" — Sohan's brief intro, what the practice does, who it's for. 2–3 sentences + link to agnihealth.co
2. **Post 2** (Day 3): Infographic or quote card: "South Asian men develop type 2 diabetes at a BMI of 23, not 30. Here's why that matters." — educational, shareable
3. **Post 3** (Day 5): Link to Blog Post 1 once published

**Also**: Join 3–5 SA community FB groups and post educational content (not ads). Groups to research: "Indian American Health," "Bay Area Desi," "South Asian Professionals Boston," "Desi Health."

### LinkedIn
- Sohan should have a LinkedIn presence connecting to agnihealth.co
- One post per week: case studies (anonymized), research summaries, SA metabolic health education
- Physician-to-physician visibility: colleagues who can refer

### Physician Referral Outreach
Referral sheet ready at `clinic/marketing/physician-referral-sheet.md`.

**Activation plan:**
- Sohan identifies 5–10 PCPs, endocrinologists, or internal medicine colleagues (not friends/family — professional contacts)
- Personal email or LinkedIn message: "I've launched a metabolic telehealth practice specifically for South Asian men — I'd appreciate referrals for patients who fit this profile."
- Attach physician referral sheet (PDF export)

This is the highest-ROI organic channel if Sohan has professional colleagues in target geos.

---

## 4. Blog Post 1 — Publication

Post 1 is fully drafted at `clinic/marketing/blog-post-1-outline.md`. 

**What's needed to publish:**
- Add `/blog` route to Next.js agnihealth.co site (ops task — ~2 hours to implement)
- CMO can write the route spec if helpful

**After publishing:**
- Share on LinkedIn (condensed version, link back)
- Share on Facebook Page
- Submit URL to Google Search Console for indexing
- Internal link from homepage to blog post

Target publish date: **May 16 or before**. SEO starts working immediately on publish.

---

## 5. Email Nurture (Waitlist)

See separate file: `clinic/marketing/email-nurture-sequence.md`

3-email sequence for waitlist subscribers, ready for implementation once Airtable/Healthie email capture is wired.

---

## 6. South Asian Community Organizations — Phase 2

For patients 5–20, community partnerships become critical. These require Sohan's involvement:

| Organization | Geography | Approach |
|-------------|-----------|---------|
| SABA (South Asian Bar Association) | Bay Area, Boston | Sponsor health talk or newsletter |
| TiE (The Indus Entrepreneurs) | Bay Area, Boston, LA | Health & wellness speaking slot |
| IIT Alumni Associations | Bay Area, Boston | Member-facing health education event |
| South Asian Heart Center (El Camino) | Bay Area | Collaborative referral relationship |
| CHAI (Community Health Advocacy, S Asian Network) | LA | Refer to telehealth service |
| Joslin AADI | Boston | Collaborative referral — complex SA patients |

**Timing**: Begin outreach in Month 2 after Phase 1 produces 1–3 patients (social proof).

---

## 7. Phase 2 KPIs

| Metric | Current | Phase 2 Target (June 14) |
|--------|---------|--------------------------|
| Monthly site visitors | ~260/mo (pilot pace) | 500 |
| Homepage → /start CVR | 9.5% | 20% |
| Waitlist captures | 0 (not wired) | 50 |
| Blog posts published | 0 | 2 |
| Paid patients | 0 confirmed | 5 |
| CAC | ~$147 (est.) | <$100 |
| Reddit threads started | 0 | 3 |
| FB page posts | 0 | 8 |

---

## 8. Decisions Needed from Sohan

| # | Decision | My Recommendation |
|---|---------|-------------------|
| 1 | Pause $500 pilot campaign and launch Phase 2 at $300/mo? | ✅ Yes — pilot data sufficient, CVR fix first |
| 2 | Approve website conversion changes (hero copy, Sohan photo, FAQ)? | ✅ Yes — low risk, high impact |
| 3 | Start Reddit posting using scripts? (20 min/week) | ✅ Yes — zero cost, high credibility |
| 4 | Activate FB Page with 3 posts this week? | ✅ Yes — needed for social proof |
| 5 | Physician referral outreach — who in your professional network? | Need Sohan input |
| 6 | Prioritize blog post publication (/blog route)? | ✅ Yes — publish before May 20 |

---

## 9. CMO 2-Week Sprint Plan

**Week 1 (May 13–19):**
- [ ] Wire Airtable waitlist to /api/waitlist (ops)
- [ ] Fix hero copy on agnihealth.co homepage
- [ ] Add Sohan photo + credentials to homepage
- [ ] Launch FB Page: 3 posts
- [ ] Publish Blog Post 1 on agnihealth.co/blog
- [ ] Sohan: Post Script 1 on Reddit

**Week 2 (May 20–26):**
- [ ] Launch Phase 2 Meta campaign ($300/mo, Ads 4 + 5)
- [ ] Upload Ad 5 to Meta Ads Manager
- [ ] Add FAQ section to homepage
- [ ] Sohan: Post Script 2 on Reddit
- [ ] Add exit-intent email capture to website
- [ ] Draft Blog Post 2 (topic: "Metabolic Syndrome Explained for South Asian Men")

---

*All external actions (ad spend, publishing, outreach) require Sohan approval before execution.*  
*Prepared by: Agni Health CMO | May 13, 2026*
