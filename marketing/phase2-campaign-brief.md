# Agni Health — Phase 2 Campaign Brief
**Prepared by:** clinic-cmo | **Date:** 2026-05-12  
**Status:** PROPOSED — awaiting Sohan approval before any spend or execution  
**Context:** $500 Meta pilot (May 6–13) ending tomorrow; this brief covers what happens next

---

## TL;DR for Sohan

The $500 pilot gave us real signal on ad creative + audience. Now we need to:
1. **Read the data correctly** (see decision framework below)
2. **Nurture the leads** we captured — fastest path to patient #1
3. **Scale what worked** with a $1,500–2,000 Phase 2 budget
4. **Fix the gap**: Pixel → Keragon → booking must be verified before any new spend

---

## Part 1: How to Read the Pilot Data

Pull from Meta Ads Manager before the campaign fully settles (within 72 hours of end).

### Metrics to Pull

| Metric | Where | What It Tells Us |
|--------|-------|-----------------|
| Impressions | Ad level | Reach quality; high impressions + low clicks = creative mismatch |
| CTR (all) | Ad level | Thumb-stop power |
| CTR (link) | Ad level | Actual click-through to landing page or lead form |
| CPM | Ad set level | Audience cost; >$25 = targeting too narrow |
| CPL | Ad level | Cost per lead form submission — key pilot metric |
| Lead volume | Lead form insights | Total qualified contacts captured |
| Cost per result | Campaign level | Blended efficiency |
| Frequency | Ad set level | How many times each person saw the ad — >2.5 = fatigue starting |

### What Good Looks Like (Pilot Benchmarks)

| Metric | Green | Yellow | Red |
|--------|-------|--------|-----|
| CPL | <$15 | $15–30 | >$30 |
| CTR (link) | >1.5% | 0.8–1.5% | <0.8% |
| Lead volume | >15 leads | 8–15 leads | <8 leads |
| CPM | <$20 | $20–30 | >$30 |

At $500 spend and a CPL of $15–20, we should have captured ~25–33 leads. At $25–30 CPL, we'd have ~17–20 leads. Either is acceptable for a validation run — what matters more is the quality signal from lead form completions.

### Decision Framework

```
                    CPL < $20?
                   /          \
                YES            NO
                |               |
        Lead quality OK?    Was any single ad CPL < $20?
        (email + phone)    /                           \
           /       \      YES                          NO
         YES        NO    |                             |
          |          |  Isolate + scale that ad      Pause all;
    → SCALE        → OPTIMIZE  (see Part 3)          fix targeting
    Phase 2          creative                       before Phase 2
```

**Lead quality check:** Open the leads in Meta lead center or Keragon. Do the names and emails look real (not gibberish)? Are they in CA/LA/MA? Are they male and in the right age range based on form data? A 50% quality rate is normal; 20–30% is acceptable for a cold audience.

---

## Part 2: Lead Nurture — Fastest Path to Patient #1

⚠️ **This is the highest-priority action item.** If leads from the pilot are sitting in Meta Lead Center and not being actioned, we're wasting the $500 we just spent.

### The Funnel After Lead Submission

```
Lead submits form → Keragon receives webhook → Healthie creates lead → Email sent → Call/SMS → Books consult
```

**Verify this pipeline is working** before Phase 2 launches. The sequence should be:

**Email 1 (sent within 15 minutes of form submission — automated):**
> Subject: Your Agni Health request — next step
> 
> Hi [First Name],
>
> Thanks for reaching out. I'm Dr. Sohan Japa, the physician behind Agni Health.
>
> I built this practice specifically for South Asian men managing prediabetes, metabolic syndrome, and weight — the kind of care most standard clinics don't have time to provide.
>
> To get started, pick a time for a 30-minute initial consultation (telehealth, from wherever you are in CA, LA, or MA):
>
> [BOOK LINK — Healthie scheduling widget]
>
> The initial consultation is $350 and includes a full review of your labs using South Asian-specific thresholds.
>
> Looking forward to speaking with you.
>
> — Sohan Japa, MD  
> Agni Health | agnihealth.co

---

**Email 2 (if no booking within 48 hours — automated):**
> Subject: One number that changes everything
>
> Hi [First Name],
>
> Quick note: I didn't want to assume you'd seen my last message.
>
> Here's the number I always want to know about South Asian men: **HOMA-IR**.
>
> It's a calculation from fasting glucose + fasting insulin that tells you exactly how insulin-resistant you are. It's one of the best early predictors of metabolic disease — and it's almost never ordered in standard primary care.
>
> If you've had lab work in the last 2 years and want to know what your HOMA-IR likely is, I can calculate it in our first call — sometimes even before you get new labs drawn.
>
> Book here: [BOOK LINK]
>
> — Sohan Japa, MD  
> Agni Health

---

**Email 3 (if no booking after 5 days — final, manual OK):**
> Subject: Last message from me
>
> [First Name] —
>
> I'm going to stop following up after this. Not because I don't want to help, but because I know you're busy and I don't want to be annoying about it.
>
> If you decide you want to dig into your metabolic health with a physician who actually understands South Asian biology, I'm here.
>
> agnihealth.co/book
>
> — Sohan

---

### Implementation Notes

- **Keragon integration:** Check that Meta Lead Ads → Keragon → Healthie webhook is firing. Pull Keragon logs to confirm.
- **Email sender:** Use sohan@agnihealth.co (ImprovMX → personal email) — personal sender name, not "Agni Health Team"
- **Phone call:** For any lead with a phone number, Sohan should attempt one call within 24 hours of form submission. No voicemail unless Sohan wants to record a brief one.
- **SMS (if available via Healthie):** "Hi, this is Dr. Japa from Agni Health — I saw you requested info. Happy to chat. agnihealth.co/book if you want to pick a time."

---

## Part 3: Phase 2 Campaign Recommendations

### Budget: $1,500–2,000 over 30 days

**Sohan approval required before any spend.**

### Campaign Architecture Change

Move from a **single campaign** with 4 ads to a **two-campaign structure**:

**Campaign A — Lead Generation (primary):**
$1,200–1,500 budget
- Objective: Lead forms
- Ad sets: 2 (CA + MA/LA separate, or SA interest vs. lookalike)
- Ads: Top 2 performers from pilot (by CPL) + Ad 7 (video) + Ad 8 (social proof)

**Campaign B — Retargeting (secondary):**
$300–500 budget
- Objective: Lead gen or Traffic
- Audience: Website pixel visitors (past 30 days) + pilot video viewers (3-second views)
- Ads: Different creative from what they already saw — use biomarker before/after (ad5b-biomarker) or testimonial angle

### Creative Rotation for Phase 2

| Ad | Creative | Copy | Audience | Status |
|----|----------|------|----------|--------|
| Top pilot ad | Best performer from pilot | Winning pilot copy | Cold SA male 30-55 | From pilot data |
| Ad 7 — Belly Fat | `ad7/final/ad7-final.mp4` | "Eating right. Staying active. Still can't lose the belly. It's not you — it's your biology." | Cold | Ready |
| Ad 8 — Social Proof | Quote card (see Ad 8 brief) | Testimonial angle | Warm retargeting | Need first patient |
| Ad 5B — Biomarker | `creatives/ad5-biomarker-before-after-v2.jpg` | "Your HbA1c and HOMA-IR tell a story before symptoms do." | Warm retargeting | Ready |

### Targeting Evolution

**Phase 1 (pilot):** Interest-based + Advantage+, CA only, age floor 25
**Phase 2:** Add:
- Lookalike 1% based on lead form submitters from pilot (if >20 leads captured)
- Language targeting: Hindi + English
- Geographic expansion: Add MA and LA ad sets (separate ad sets for budget control)
- Age floor: Raise to 30 if possible in standard campaign mode (not Advantage+)

### Creative Testing Framework for Phase 2

Week 1–2: Run top pilot ad + Ad 7 head-to-head (same audience, same budget)
Week 3: Kill bottom performer, shift budget to winner. Add Ad 8 (social proof) to retargeting
Week 4: Kill bottom 40%, retest top performer with alternate copy

---

## Part 4: Organic Channels (No Spend Required)

While ads run, these organic channels can be executed immediately and don't require Sohan's approval for drafting (just for publishing):

### Reddit
- **r/prediabetes** — blog post 1 is ready; Sohan can post as "A metabolic physician who treats South Asian patients" — educational comment on any existing thread about A1c/SA risk. No cold post, respond to existing discussions.
- **r/ABCDesis** — post: "I'm a South Asian physician who built a telehealth practice specifically for metabolic health in our community. AMA." (Sohan-led, genuine, not promotional)

### LinkedIn
- Post condensed version of blog post 1 as a LinkedIn article (1–2 hours to format)
- Connect with South Asian physician networks — internal referral pipeline

### Facebook Page
- Blog post 1 → Facebook page post (image + link)
- Infographic from the blog (waist circumference thresholds, HOMA-IR explainer) — post organic

---

## Part 5: What Needs to Happen Before Phase 2 Can Launch

| Blocker | Owner | Status |
|---------|-------|--------|
| Verify Meta Pixel → Keragon → Healthie pipeline end-to-end | Din/Ops | ⚠️ Unverified |
| Confirm lead nurture emails are set up in Healthie/Keragon | Din/Ops | ⚠️ Unclear |
| Sohan approve Phase 2 budget | Sohan | Pending |
| Read pilot data and choose top 2 ads | Sohan | After May 13 |
| Ad 8 creative (social proof) | clinic-designer | Needs first patient OR hypothetical |
| Lookalike audience created from pilot leads | Din/Meta | After leads confirmed |

---

## Part 6: KPIs for Phase 2 Gate Review (End of Month 2)

| Metric | Target | Action if Missed |
|--------|--------|-----------------|
| CPL | <$20 | Pause, audit copy + targeting |
| Total leads Month 2 | >75 | Not a pause signal, but scale budget if hitting CPL target |
| Lead → Consult booked rate | >15% | Fix nurture sequence; add SMS/call |
| Consult → Paid patient rate | >30% | Sohan to adjust pitch/intake; check pricing |
| Total patients Month 2 | 2–5 | Primary KPI — everything else is upstream |

---

## Decisions Needed from Sohan

1. **Is the Meta pilot data available?** Pull from Ads Manager → share with Din. We need to decide which ads to carry into Phase 2.
2. **Approve Phase 2 budget**: $1,500–2,000/month?
3. **Lead nurture**: Is Keragon → Healthie pipeline live? Do pilot leads have an email sequence running?
4. **Ad 7 video approval**: `ad7/final/ad7-final.mp4` — does it look ready to run on Meta?
5. **Organic channels**: Is Sohan comfortable posting on Reddit as himself? (AMA or comment-reply approach)

---

*Prepared by: Agni Health CMO function*  
*Status: PROPOSED — no external action taken. All spend and publishing requires Sohan approval.*
