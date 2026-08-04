# Agni Health Website Spec
*Generated: 2026-05-04 | CMO Deliverable*

## Executive Summary

**Tech Stack Decision: Next.js 14 on Vercel (not Framer)**

Framer can't run Vercel Edge Config middleware, can't do server-side experiment assignment, and can't cleanly integrate Conversions API later. You'd be rebuilding in 3 weeks anyway.

---

## 1. Full Stack

```
Framework:    Next.js 14 (App Router, TypeScript)
Styling:      Tailwind CSS + shadcn/ui
Hosting:      Vercel Pro ($20/mo — required for Edge Config)
A/B Testing:  Vercel Edge Config + Middleware
Analytics:    PostHog Cloud (free to 1M events/mo)
Attribution:  UTM → localStorage → Healthie URL params
Pixels:       Meta + TikTok via next/script (no GTM needed)
```

---

## 2. A/B Testing Architecture

### How It Works

```
User hits agni.md
       ↓
Edge Middleware runs (<1ms, before page renders)
       ↓
Reads "hero-experiment" from Edge Config
       ↓
Assigns variant, sets 30-day sticky cookie
       ↓
Next.js page reads cookie → renders correct Hero component
       ↓
PostHog captures: page_viewed { variant: "control" }
```

**Zero client-side flicker.** Assignment happens at the edge before HTML is sent.

### Middleware Implementation

**`middleware.ts`:**
```typescript
import { NextRequest, NextResponse } from 'next/server'
import { get } from '@vercel/edge-config'

const COOKIE_NAME = 'agni-ab'

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== '/' && !request.nextUrl.pathname.startsWith('/lp/'))
    return NextResponse.next()

  if (request.cookies.get(COOKIE_NAME)) return NextResponse.next()

  const experiment = await get<{
    active: boolean
    variants: Record<string, number>
  }>('hero-experiment')

  let variant = 'control'
  if (experiment?.active) {
    const rand = Math.random()
    let cumulative = 0
    for (const [name, weight] of Object.entries(experiment.variants)) {
      cumulative += weight
      if (rand < cumulative) { variant = name; break }
    }
  }

  const response = NextResponse.next()
  response.cookies.set(COOKIE_NAME, variant, {
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: false,  // PostHog JS needs to read it
    sameSite: 'lax',
  })
  return response
}

export const config = { matcher: ['/', '/lp/:path*'] }
```

### Edge Config JSON

Live-edit in Vercel dashboard, zero redeploy:

```json
{
  "hero-experiment": {
    "active": true,
    "variants": {
      "control":   0.50,
      "variant-a": 0.50
    }
  }
}
```

### Hero Images in Rotation

- ✅ **Kitchen + Tech** (`hero-v3-kitchen.png`) — primary, in rotation
- ✅ **Outdoor Walk** (`hero-v2-outdoor.png`) — in rotation
- ❌ **Morning Window** (`hero-v1-morning.png`) — removed (looks AI-generated)

### First 4 Weeks Experiment Queue

| Week | Variable | Control | Variant A |
|------|----------|---------|-----------|
| 1 | Hero headline | *"Your metabolism works differently."* | *"South Asian men get diabetes younger. We catch it first."* |
| 2 | CTA button copy | `Book Your First Visit` | `See If You Qualify` |
| 3 | Social proof | None | Patient quote or "Trusted by SA men in CA, LA, MA" |
| 4 | LP angle | Prediabetes-focused | GLP-1/weight-focused |

**Success metric:** `booking_started` rate — not bounce rate, not time-on-site.

---

## 3. PostHog Integration

### Why PostHog

- Free to 1M events/month
- Session recording included (with input masking for HIPAA)
- Funnel analysis and cohorts are free
- BAA available on paid plan if needed later

### Event Tracking Plan

```typescript
// lib/analytics.ts — unified event firing
export function trackPageView()         // fires PostHog + pixels auto-fire
export function trackCTAClick(loc)      // PostHog + Meta InitiateCheckout + TikTok ClickButton
export function trackBookingWidget()    // PostHog + Meta ViewContent
export function trackBookingConfirmed() // PostHog + Meta Lead + TikTok CompleteRegistration
```

### PostHog Funnel Configuration

```
Step 1: page_viewed
Step 2: cta_clicked
Step 3: booking_widget_loaded
Step 4: booking_confirmed

Break down by: utm_source · utm_campaign · ab_variant · device_type
```

### Conversion Targets

| Metric | Formula | Goal |
|--------|---------|------|
| CTA click rate | `cta_clicked / page_viewed` | >8% |
| CTA → Widget | `booking_widget / cta_clicked` | >60% |
| Widget → Booked | `booking_confirmed / booking_widget` | >40% |
| **Overall CVR** | `booking_confirmed / page_viewed` | **>3%** |

---

## 4. UTM Attribution Pipeline

Healthie's booking widget is an iframe — you can't instrument inside it.

### Solution

```
User lands from IG ad with UTMs
        ↓
useUTMCapture hook reads URL params → localStorage
        ↓
useBookingURL hook reads localStorage → builds Healthie URL with UTMs appended
        ↓
CTA button href = Healthie URL + utm params
        ↓
Patient books → Healthie stores UTMs in patient profile metadata
        ↓
PostHog booking_confirmed event fires with same UTM props
        ↓
Full source attribution on every booking
```

### UTM Convention

Standardize before running a single ad:

```
utm_source   = instagram | tiktok | google | facebook | organic
utm_medium   = paid_social | paid_search | email | sms
utm_campaign = prediabetes-awareness | glp1-sa-men | family-history
utm_content  = [creative ID: hero-v1, testimonial-reel, stats-carousel]
```

### Example Tagged URL

```
https://agni.md/lp/prediabetes?utm_source=instagram&utm_medium=paid_social&utm_campaign=prediabetes-awareness&utm_content=hero-v1
```

---

## 5. Modular Page Architecture

Every testable element lives in its own component. Swapping a variant = editing one file.

```
components/
├── hero/
│   ├── HeroControl.tsx     ← "Your metabolism works differently."
│   ├── HeroVariantA.tsx    ← "South Asian men get diabetes younger."
│   └── index.tsx           ← Reads cookie → renders correct variant
├── sections/
│   ├── ProblemSection.tsx
│   ├── HowItWorks.tsx
│   ├── Conditions.tsx
│   ├── Pricing.tsx
│   └── FAQ.tsx
├── cta/
│   └── CTAButton.tsx       ← Fires all 3 analytics events on click
└── analytics/
    ├── MetaPixel.tsx
    ├── TikTokPixel.tsx
    └── PostHogProvider.tsx

app/
├── page.tsx                ← Homepage
├── services/page.tsx
├── about/page.tsx
├── book/page.tsx
└── lp/[variant]/page.tsx   ← Dynamic ad landing pages (stripped nav)
```

### Ad Landing Pages

No navigation, single CTA, message-matched to creative:

| Route | Ad Angle |
|-------|----------|
| `/lp/prediabetes` | Prediabetes caught late, SA-specific thresholds |
| `/lp/glp1` | GLP-1 therapy by a doctor who understands SA men |
| `/lp/diabetes-optimize` | "Your A1c is fine" isn't a care plan |
| `/lp/family-history` | Dad has diabetes — your window to act |

---

## 6. Ad Pixels

Both pixels load via `next/script strategy="afterInteractive"` — no GTM, no added latency.

### Meta Pixel Event Map

| Action | Event | Purpose |
|--------|-------|---------|
| Page load | `PageView` | Auto via init |
| Book button clicked | `InitiateCheckout` | Intent signal to algo |
| Booking page reached | `ViewContent` | Funnel depth |
| Booking confirmed | `Lead` | Primary conversion |
| (Week 2+) | `Purchase` + value | ROAS optimization |

> **Note:** Add Meta Conversions API (CAPI) in Week 2 when spending real budget. CAPI sends events server-to-server, unaffected by iOS 14 restrictions or ad blockers.

---

## 7. Page Content

### Homepage Sections

1. **Hero** — Headline + subhead + primary CTA
2. **Problem** — SA-specific metabolic risk (stats, family history angle)
3. **Solution** — How Agni Health works (3 steps)
4. **Conditions** — What we treat (prediabetes, diabetes, obesity, metabolic syndrome)
5. **How It Works** — Initial visit → follow-up cadence
6. **Pricing** — Transparent cash-pay pricing
7. **About** — Dr. Japa intro + credentials
8. **FAQ** — Common questions (see GLP-1 entry below)
9. **Final CTA** — Book your first visit

### Headline Options (for A/B testing)

**Control:**
> Your metabolism works differently.
> Telehealth care designed for South Asian men.

**Variant A:**
> South Asian men get diabetes younger.
> We catch it first.

**Variant B:**
> "Your A1c is fine" isn't a care plan.
> Get metabolic care that actually works.

**Variant C:**
> Your dad has diabetes.
> You have a window to change your story.

### GLP-1 Copy — Homepage Soft Line

Add as a supporting sentence inside the **Conditions** section (not the hero — keep the hero broader):

> *"For patients where it's clinically appropriate, we offer GLP-1 medication management as part of a comprehensive metabolic plan."*

This confirms availability without making it the brand identity. Sits naturally after listing prediabetes, diabetes, and obesity as treated conditions.

---

### FAQ Entry — GLP-1 (add to FAQ.tsx)

**Q: Do you prescribe GLP-1 medications like semaglutide?**

> Yes — for patients where GLP-1 therapy is clinically appropriate, we can prescribe and manage it as part of your overall care plan. During your first visit, your doctor will review your health history, labs, and goals to determine what's right for you. GLP-1s are one tool in a broader approach — we combine medication with nutrition and lifestyle guidance.

*Implementation note: This should be the first or second FAQ item given search intent. Do not use brand names (Ozempic/Wegovy) in the rendered FAQ text — they trigger Meta's ad review tools via pixel data and create trademark surface area.*

---

### Key Messaging Principles

1. **Clinical, not Ayurvedic** — Evidence-based medicine, not alternative wellness
2. **SA-specific** — We understand the unique metabolic profile
3. **Proactive** — Catch problems before they become diagnoses
4. **Modern** — Telehealth, async care, fits your life

---

## 8. Build Sequence

### Prep Tonight (30 min)

```bash
□ npx create-next-app@latest agni-health --typescript --tailwind --app
□ Push to GitHub → connect to Vercel → verify auto-deploy
□ Add all .env vars in Vercel dashboard
□ Create Edge Config store → paste hero-experiment JSON
```

### Day 2 Build

```
08:00  Brand tokens, fonts (Fraunces + Inter via next/font/google)
08:15  Root layout, navigation, footer
09:00  Homepage Hero (both variants)
10:00  Problem + Solution sections
11:00  Conditions + How It Works
12:00  Lunch
13:00  Pricing + FAQ
14:00  About page
15:00  Services page
16:00  Booking page (Healthie embed)
17:00  Landing page template + 2 variants
18:00  Analytics integration (PostHog + pixels)
19:00  UTM capture + attribution
20:00  QA + mobile testing
21:00  Soft launch
```

### Environment Variables

```
NEXT_PUBLIC_POSTHOG_KEY=phc_xxx
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
NEXT_PUBLIC_META_PIXEL_ID=xxx
NEXT_PUBLIC_TIKTOK_PIXEL_ID=xxx
NEXT_PUBLIC_HEALTHIE_BOOKING_URL=https://xxx.gethealthie.com/book
EDGE_CONFIG=https://edge-config.vercel.com/xxx
```

---

## 9. Domain Setup

1. Purchase `agni.md` (~$49/year)
2. Point to Vercel nameservers
3. Configure in Vercel project settings
4. SSL auto-provisioned

---

## 10. Geo & Context Personalization

### Vercel Edge Geolocation

Vercel provides geolocation data on every request — no external API needed:

```typescript
// middleware.ts additions
import { geolocation } from '@vercel/functions'

export async function middleware(request: NextRequest) {
  const geo = geolocation(request)
  // geo.region = "CA" | "LA" | "MA" | etc.
  // geo.city = "Los Angeles"
  // geo.country = "US"
  
  const response = NextResponse.next()
  
  // Pass geo to page via cookie (readable by RSC)
  response.cookies.set('agni-geo', JSON.stringify({
    region: geo.region || 'unknown',
    city: geo.city || 'unknown',
  }), { maxAge: 60 * 60, httpOnly: false })
  
  return response
}
```

### Personalization Matrix

| Signal | Source | Personalization |
|--------|--------|----------------|
| **State** | `geo.region` | "Now serving California" badge, redirect modal for unsupported states |
| **Campaign** | `utm_campaign` | Hero headline matched to ad angle |
| **Device** | `User-Agent` | Mobile: sticky bottom CTA, larger tap targets |
| **Time** | Server clock | Morning: "Start your day right" / Evening: "Take the first step" |
| **Referrer** | `referer` header | Organic Google: add trust badges, paid social: skip to CTA faster |

### State-Based Logic

```typescript
// components/StateBadge.tsx
const SUPPORTED_STATES = ['CA', 'LA', 'MA']
const STATE_NAMES = { CA: 'California', LA: 'Louisiana', MA: 'Massachusetts' }

export function StateBadge({ region }: { region: string }) {
  if (!SUPPORTED_STATES.includes(region)) return null
  return (
    <span className="inline-flex items-center px-2 py-1 text-sm bg-teal-50 text-teal-700 rounded-full">
      🏥 Now serving {STATE_NAMES[region]}
    </span>
  )
}
```

### Out-of-State Handling

```typescript
// components/OutOfStateModal.tsx
// Shows when geo.region not in SUPPORTED_STATES
// Options:
// 1. "Join waitlist for [State]" — capture email
// 2. "Continue anyway" — let them browse
// 3. Soft redirect to /waitlist
```

### Campaign → Headline Mapping

```typescript
// lib/personalization.ts
const CAMPAIGN_HEADLINES = {
  'prediabetes': {
    headline: 'South Asian men get diabetes younger.',
    subhead: 'We catch it first.',
  },
  'glp1': {
    headline: 'GLP-1 therapy, designed for your metabolism.',
    subhead: 'Not a one-size-fits-all prescription.',
  },
  'family-history': {
    headline: 'Your dad has diabetes.',
    subhead: 'You have a window to change your story.',
  },
  'diabetes-optimize': {
    headline: '"Your A1c is fine" isn\'t a care plan.',
    subhead: 'Get metabolic care that actually works.',
  },
  default: {
    headline: 'Your metabolism works differently.',
    subhead: 'Telehealth care designed for South Asian men.',
  },
}

export function getHeadline(campaign: string | null) {
  return CAMPAIGN_HEADLINES[campaign] || CAMPAIGN_HEADLINES.default
}
```

### Mobile vs Desktop

| Element | Mobile | Desktop |
|---------|--------|--------|
| Hero CTA | Sticky bottom bar | Inline button |
| Navigation | Hamburger menu | Full nav bar |
| Pricing | Accordion | Side-by-side cards |
| Tap targets | Min 48px | Standard |

### PostHog Properties

Capture personalization signals for analysis:

```typescript
posthog.capture('page_viewed', {
  geo_region: 'CA',
  geo_city: 'San Francisco',
  utm_campaign: 'prediabetes',
  device_type: 'mobile',
  ab_variant: 'control',
  time_bucket: 'morning', // 6am-12pm | afternoon | evening | night
})
```

This lets you answer: "Do mobile users from the prediabetes campaign convert better in the morning?"

---

## 11. Post-Launch (Week 1)

- [ ] Monitor PostHog funnels daily
- [ ] Start first A/B test (hero headline)
- [ ] Set up Meta Conversions API
- [ ] Create first ad campaign (IG, prediabetes angle)
- [ ] Monitor CAC and adjust
