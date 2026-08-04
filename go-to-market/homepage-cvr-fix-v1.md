# Homepage CVR Fix — v1
**Prepared by:** clinic-cmo | **Date:** 2026-05-13  
**Status:** PROPOSED — awaiting Sohan approval; Din to implement once approved

---

## Problem Statement

- May 13: 89 LP views → 4 CTA clicks (4.5% CVR vs. 8% target)
- 0 email captures despite 60 sessions
- Ad 7 (belly fat video) audience = high volume, lower intent than Ad 1/6
- Message match gap: ad creative about belly fat → landing page opens with philosophy headline

---

## Change 1: New A/B Variant (v4) for Ad 7 Traffic

**Where:** `src/app/components/HeroHeadline.tsx` — add `utm_content=ad7` match for variant v4

**Proposed v4 headline copy:**

```
South Asian men carry belly fat differently.
Your metabolic risk is higher than your BMI suggests.
```

With subheadline:
```
At Agni Health, we run the labs your PCP doesn't order — and explain 
what they actually mean for someone built like you.
```

**Rationale:** Matches Ad 7's belly fat message, pivots to clinical credibility, explains the SA-specific value prop in one sentence.

**Implementation note for Din:**
- In the Edge middleware / `HeroHeadline` component, add logic: if `utm_content` includes `ad7` → serve v4
- Or: assign to A/B variant bucket v4 for that UTM

---

## Change 2: Add Sohan Credential Line Below Headline

**Where:** `src/app/page.tsx` — directly below `<HeroHeadline />`, before CTA buttons

**Current:** Nothing between headline and CTA

**Proposed addition:**
```tsx
<p className="text-zinc-400 text-sm font-medium">
  Sohan Japa, MD · Board-eligible internal medicine · Metabolic health specialist
  <span className="mx-2 text-zinc-600">·</span>
  <span className="text-zinc-500">CA · LA · MA</span>
</p>
```

**Rationale:** Cold paid traffic needs to see "who is this?" before they click. Moving credentials above fold reduces bounce.

---

## Change 3: Secondary Email CTA in Hero (Lead Magnet)

**Where:** `src/app/page.tsx` — add below existing CTA button row

**Current:**
```tsx
<TrackedLink href="/start" ...>Book Your Discovery Call</TrackedLink>
<Link href="#approach">How it works</Link>
```

**Proposed:**
```tsx
<TrackedLink href="/start" ...>Book Your Discovery Call</TrackedLink>
<button onClick={() => setShowEmailModal(true)} className="text-zinc-400 hover:text-white ...">
  Get the free SA metabolic risk guide →
</button>
```

The "free SA metabolic risk guide" triggers an inline email capture modal — or a simple inline form expansion — and submits to `/api/waitlist` with `type: "general"` and `source: "hero_lead_magnet"`.

**Lead magnet content:** A 1-page PDF or email summarizing:
- HOMA-IR formula + what SA-specific thresholds mean
- The 3 labs your PCP isn't ordering
- What to ask for at your next annual (specific CPT codes)

This repurposes blog post 2 content — no new writing needed. Designer task: format as a clean 1-pager.

**Rationale:**
- Lowers friction: not everyone is ready to book a $49 consult; many will give email for a free resource
- Builds the list with high-intent contacts
- CEO financial model flagged Executive tier (email-first → warm → upgrade) as key

---

## Change 4: "Limited spots" Copy Update

**Where:** `src/app/page.tsx` — line below CTA

**Current:**
```
Limited spots — next availability in 2–4 weeks.
```

**Proposed:**
```
Currently accepting new patients in CA · LA · MA — limited spots.
```

**Rationale:** "2–4 weeks" implies delay. "Currently accepting" implies urgency without false scarcity. Adding state reminder catches visitors wondering about eligibility.

---

## Change 5: Trust Signal Bar (above stats section)

**Location:** Between hero CTA and the "The risk starts earlier than you think" stats section

**Proposed:** A minimal 3-column trust bar:

| | | |
|--|--|--|
| 🏥 Internal Medicine, MD | 🔬 Metabolic health specialist | 📍 CA · LA · MA |
| Licensed physician | SA-specific protocols | Telehealth available |

**Implementation:** Simple flex row, zinc-800 background, minimal styling — does not need to be elaborate.

---

## Implementation Order for Din

1. **Change 2** (credential line) — 5 min, highest ROI, zero risk
2. **Change 4** (limited spots copy) — 2 min
3. **Change 5** (trust bar) — 30 min
4. **Change 3** (lead magnet CTA) — 2–3 hrs (needs modal component + lead magnet content)
5. **Change 1** (v4 UTM variant) — 1 hr

Changes 1–2 and 4 can ship immediately. Changes 3 and 5 need Sohan approval on copy. Change 1 needs UTM tracking confirmed.

---

## Expected Impact

Conservative estimate after Changes 2 + 4 + 5:
- Hero CTA click rate: 4.5% → 6–7% (based on trust-signal benchmarks)
- Email capture rate: 0% → 1–2% of sessions (lead magnet)
- Combined engaged rate: from ~4.5% to ~8–9% of sessions

This should move us past the 8% CTA target within 1 week if Ad 1 + Ad 6 traffic quality is maintained.

---

*CMO function — Agni Health | 2026-05-13*
