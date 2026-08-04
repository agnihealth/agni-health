# CMO Assessment — Before/After Creative Package
**Date:** 2026-05-11 | **Author:** clinic-cmo  
**Subject:** Ad 5 (Before/After) creative review — campaign ends May 13

---

## Executive Summary

Nine versions of before/after creative were generated today. The imagery is well-executed and on-brand, but carries a **high Meta policy rejection risk** and a **FTC compliance gap** that need resolution before launch. I'm recommending a pivot on creative format for the Meta channel.

---

## Creative Inventory Review

| File | Format | Verdict |
|------|--------|---------|
| `before-after-final-v1.png` | 1080×1080 | ⚠️ Duplicated footer text, $49 CTA price needs verification |
| `before-after-final-v5.png` | 1080×1080 | ✅ Cleanest square version, dead space in mid-section |
| `before-after-final-v7.png` | 1080×820 landscape | ✅ Solid composition, correct disclaimer |
| `before-after-final-v8.png` | 1080×820 landscape | ✅ Same as v7, "Featured individual is a real person" |
| `before-after-final-v9.png` | 1080×1350 4:5 | ❌ Large dead space below text; disclaimer says "real person" but pilot-ads.md designates this as "simulated" — **mismatch** |
| `before-after-real-v1.png` | 1080×1080 | ⚠️ Base version, raw look, lightest disclaimer |
| `before-after-sim-v1.png` | ??? | Not reviewed (rendering error) |

### v9 Specific Bugs
1. **Wrong disclaimer**: Shows "Featured individual is a real person" — but per `pilot-ads.md`, v9 is the *simulated* version. Should read: *"Simulation only. Not a real patient or actual result. Individual results will vary."*
2. **Dead space**: Bottom ~300px is empty navy — unfinished look for 4:5 format.

---

## 🚨 Critical Issue: Meta Ad Policy Violation Risk

Meta's advertising policies (Personal Health / Body Image section) explicitly prohibit:

> *"Before and after images depicting changes to weight, breast size, or other physical attributes related to body image."*

**All v1–v9 creatives violate this policy.** The before/after torso format — regardless of the medical framing — matches the exact pattern Meta's review system auto-flags. Expected outcomes if submitted:

- Ad disapproved (most likely)
- Ad set paused
- Account flagged (risk escalation if repeated)

**This applies even with proper disclaimers.** Meta's policy is about the visual format, not the copy.

---

## ⚠️ FTC Compliance Concern

The creatives labeled "Featured individual is a real person" need to actually be a real, consented patient. If these are AI-generated images:
- That disclaimer is deceptive per FTC guidelines for health advertising
- The correct label would be: *"Simulated result. Not a real patient."*
- Even for AI-simulated, we'd need the disclaimer to be prominent (size/placement compliant)

**Action needed from Sohan:** Confirm whether the photos are:
(a) Sohan's own before/after photos → use "real person" disclaimer ✅
(b) A real patient with written consent → same ✅  
(c) AI-generated → must use "Simulation only" disclaimer, or do not run on Meta

---

## CMO Recommendation

### For the May 13 Campaign Deadline (48 hours)

**Do NOT add body before/after as a 5th ad to the current Meta campaign.** The risk of rejection + account flag isn't worth the 2-day remaining window.

**Instead, run Ad 5 with existing compliant creative:**

Use `ad-creative-v1-kitchen.png` (the winning kitchen lifestyle image) paired with the Ad 5 copy from `pilot-ads.md`. This is:
- Already Meta-approved (existing creative format)
- Consistent with the SA lifestyle positioning
- Zero rejection risk

Ad 5 copy works standalone without before/after imagery:
> **Headline:** This is what metabolic progress looks like.  
> **Body:** Visceral fat is the #1 driver of metabolic disease in South Asian men — even at a "normal" weight. Agni Health is physician-led care designed for your biology. CA, LA & MA.

---

### For Campaign Phase 2 (After May 13)

Before/after works well on **other channels** where it's permitted:

| Channel | Before/After Policy | Recommendation |
|---------|-------------------|----------------|
| Meta (FB/IG) | ❌ Prohibited | Do not use |
| Google Display | ⚠️ Case-by-case | Use with medical disclaimer |
| Email / Healthie newsletter | ✅ Allowed | Strong use case |
| Organic social (Instagram post) | ✅ Allowed (not paid) | Post as educational content |
| TikTok | ⚠️ Stricter than Meta | Avoid |

**Recommended Phase 2 approach:** Publish the before/after as organic Instagram content (educational framing: "This is what visceral fat reduction looks like in South Asian men") with proper disclaimer. Then run a separate Meta traffic ad linking to that Instagram post. Avoids the direct ad policy trigger.

---

### If Sohan Wants to Test Before/After on Meta Anyway

If Sohan decides to test it despite the risk:

1. Use **v5** (cleanest version, 1:1 format)
2. Fix the disclaimer to match actual status (real vs simulated)
3. Submit to Meta review — expect rejection, then:
   - If rejected: appeal with medical context once, note the response
   - If approved: we learn Meta's review is less strict than expected
4. **Do not let a rejection spiral** — appeal once, move on

---

### Alternate "Before/After" Concept That Passes Meta Review

If the before/after *angle* tests well in copy, consider a **biomarker before/after** creative:

```
[BEFORE]                    [AFTER]
HbA1c: 6.4%          →    HbA1c: 5.3%
Fasting insulin: 18   →    Fasting insulin: 9
HOMA-IR: 3.2         →    HOMA-IR: 1.8
```

- No body images = no policy trigger
- Clinically specific = higher credibility with our audience (SA men who track their health)
- Can include a real patient's numbers (with consent) or hypothetical (with "representative results" disclosure)
- Much more interesting to someone who already knows they're prediabetic

---

## Immediate Action Items

| Priority | Action | Owner |
|----------|--------|-------|
| 🔴 Today | Confirm photo status: real patient / Sohan's own / AI | Sohan |
| 🔴 Today | Decide: add Ad 5 to current campaign? (Rec: No — use existing creative) | Sohan |
| 🟡 This week | Fix v9 disclaimer mismatch | clinic-designer |
| 🟡 This week | Draft biomarker before/after creative brief | clinic-cmo → clinic-designer |
| 🟢 Phase 2 | Publish v8 as organic IG post (educational content) | Sohan / clinic-cmo |
| 🟢 Phase 2 | Design biomarker-based "before/after" creative for Meta | clinic-designer |

---

*Files in: `agni-health/marketing/creatives/` — versions v1–v9 preserved as-is pending Sohan decision*
