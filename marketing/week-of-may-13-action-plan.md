# Agni Health — Week of May 13 Action Plan
**Prepared by:** clinic-cmo | **Date:** 2026-05-12  
**Status:** PROPOSED — Sohan approves each item before execution

---

## Context

- Meta pilot ($500) ends May 13 (tomorrow)
- Sohan returns to Mac Mini: Sunday evening (~May 17)
- Ads A/B test on Ad 5 still running at pilot close
- Ad 7 video finalized (`ad7/final/ad7-final.mp4`)
- Blog posts 1 and 2 drafted, awaiting /blog route + publishing
- Lead nurture sequence drafted, awaiting Keragon verification

---

## Day-by-Day Plan

---

### Tuesday, May 13 (Campaign End Day)

**Sohan — 15 minutes in Meta Ads Manager:**
1. Pull final campaign report (campaign ID: 120247744843680387)
   - Download: Ad-level performance — impressions, clicks, CPL, leads by ad
   - Screenshot the top-line numbers
2. Open Meta Lead Center → count total leads captured
3. Note: which ad had the lowest CPL?

**Din — technical verification:**
1. Send a test lead through Keragon webhook → confirm it lands in Healthie
2. Confirm Email 1 (from lead-nurture-sequence.md) is set up to auto-send
3. If automation isn't live: manually email every pilot lead from sohan@agnihealth.co using the Email 1 template — do this TODAY before leads go cold

---

### Wednesday–Thursday, May 14–15

**Sohan:**
1. Review Phase 2 brief (`marketing/phase2-campaign-brief.md`) — 10 min read
2. Decision: approve Phase 2 budget ($1,500–2,000/month) Y/N?
3. Review Ad 7 final video — watch `ad7/final/ad7-final.mp4` — ready to upload to Meta?
4. Review lead nurture Email 1–3 (`marketing/lead-nurture-sequence.md`) — approve copy?
5. Review blog post 1 (`marketing/blog-post-1-outline.md`) — clinical accuracy check

**Din:**
1. If Phase 2 approved: set up Phase 2 Meta campaign structure (two campaigns: lead gen + retargeting)
2. Upload Ad 7 video to Meta creative library
3. Create lookalike audience from pilot leads (if >20 leads captured)
4. Add /blog route to Next.js agni-health repo (coordinate with clinic-designer)
5. Verify ImprovMX → sohan@agnihealth.co is routing correctly

---

### Friday, May 16

**Din:**
1. Launch Phase 2 lead gen campaign (if Sohan approved)
   - Start with top pilot ad + Ad 7 video
   - Budget: $50/day initial, scale based on day 3 CPL
   - Ad set: CA initially, add MA and LA in week 2
2. Publish blog post 1 to agnihealth.co/blog if /blog route is live
3. Post blog post 1 on Agni Health Facebook page

**Sohan (if available):**
- Review Reddit script 1 (`clinic/marketing/reddit-scripts-week1.md`) — find a thread in r/prediabetes to respond to, post Script 1 (slightly personalized)

---

### Saturday–Sunday, May 16–17

**No major execution — review period**

**Sohan:**
- Review Phase 2 campaign day-1 data (if launched Friday)
- Check Healthie for any new lead bookings
- Decide on blog post 2 (`marketing/blog-post-2-draft.md`) — clinical accuracy check

---

### Week 2 (May 19–23)

**Priority order:**

1. **Lead follow-up** — check every lead from pilot and Phase 2. Any that haven't received Email 1 → send it now. For leads 5+ days old with no response → send Email 3.

2. **Blog post 1 live** — if not published in week 1, publish now. Schedule LinkedIn article version.

3. **Ad 8 decision** — do we have a patient testimonial yet? If yes: execute Ad 8 brief. If no: proceed with composite (approve with Sohan), build quote card with clinic-designer.

4. **Reddit expansion** — post Script 2 in r/IndianAmerican or r/ABCDesis if Script 1 got traction.

5. **Phase 2 mid-week check** — pull CPL by ad, pause bottom performer if CPL > $35.

---

## Key Decisions Needed This Week (All Require Sohan)

| Decision | Deadline | Options |
|----------|----------|---------|
| Phase 2 budget approve | May 14 | $1,500/mo, $2,000/mo, or pass |
| Ad 7 video — ready to run? | May 14 | Approve as-is / request revision |
| Lead nurture copy — approve? | May 14 | Approve / edit / write own version |
| Blog post 1 clinical accuracy | May 15 | Approve / flag corrections |
| Blog post 2 clinical accuracy | May 17 | Approve / flag corrections |
| Ad 8 — real or composite? | May 21 | Real patient (need consent) / composite (approve framing) |
| Reddit — comfortable posting as self? | May 16 | Y/N — adjust scripts if needed |

---

## Running Metrics Dashboard (Check Weekly)

| Metric | Where to Check | Target |
|--------|---------------|--------|
| Total leads (all-time) | Meta Lead Center | — |
| Leads → booked rate | Healthie | >15% |
| Booked → showed rate | Healthie | >80% |
| CPL (Phase 2) | Meta Ads Manager | <$20 |
| Website visits | PostHog | Track weekly trend |
| Blog post visits | PostHog | Once published |
| Phase 2 total spend | Meta Ads Manager | Stay within budget |

---

## Files Ready for Execution

| File | Status | Next action |
|------|--------|-------------|
| `marketing/phase2-campaign-brief.md` | ✅ Ready | Sohan review + approve budget |
| `marketing/ad8-creative-brief.md` | ✅ Ready | Sohan approve framing → clinic-designer executes |
| `marketing/lead-nurture-sequence.md` | ✅ Ready | Sohan approve copy → Din sets up automation |
| `marketing/blog-post-1-outline.md` | ✅ Ready | Sohan clinical review → Din publishes |
| `marketing/blog-post-2-draft.md` | ✅ Ready | Sohan clinical review → publish week 2 |
| `marketing/reddit-scripts-week1.md` | ✅ Ready | Sohan review → post when thread found |
| `marketing/pilot-ads.md` | ✅ Used | Archive after Phase 2 launch |
| `ad7/final/ad7-final.mp4` | ✅ Final | Upload to Meta creative library |

---

*Prepared by: Agni Health CMO function | 2026-05-12*
