# Analytics Setup

## Stack
- **PostHog** — Full product analytics, A/B testing, funnels, session replay
- **Vercel Analytics** — Web Vitals, basic traffic (auto-enabled on Vercel)

## Events Tracked

### Automatic
- `$pageview` — All page views with URL
- `$pageleave` — When user leaves

### A/B Testing
- `$experiment_started` — Hero image variant exposure
  - `experiment`: "hero_image"
  - `variant`: "v1", "v2", "v3"

### CTA Clicks
- `cta_click` — Any booking CTA clicked
  - `location`: "nav" | "hero" | "bottom_cta"
  - `button`: "book_consultation" | "start_consultation"
  - `href`: destination URL

### Booking Funnel
- `booking_page_viewed` — User reached /book page
  - `hero_variant`: which hero they saw

## Setup

1. Create PostHog account at https://posthog.com
2. Create a project, copy the API key
3. Copy `.env.local.example` to `.env.local`
4. Add your PostHog key

```bash
cp .env.local.example .env.local
# Edit .env.local with your key
```

## Testing Locally

Events log to console in dev mode. Open browser console to see:
```
[Analytics] cta_click {location: 'hero', button: 'start_consultation', href: '/book'}
```

## A/B Test Variants

Force a specific hero variant with URL params:
- `localhost:3000?v=1` — Morning wellness
- `localhost:3000?v=2` — Outdoor active
- `localhost:3000?v=3` — Kitchen/cooking

Variant is sticky per user (localStorage).

## Funnels to Build in PostHog

1. **Homepage → Booking**
   - $pageview (/) → cta_click → booking_page_viewed

2. **Hero Variant Performance**
   - Filter by `hero_variant` on booking_page_viewed
   - Compare conversion rates across v1/v2/v3

3. **CTA Location Performance**
   - Group cta_click by `location`
   - See which CTA position converts best

## Future: Healthie Webhook

When Healthie booking completes, fire a webhook to:
```
POST /api/analytics/booking-complete
```

This will track `booking_completed` event to close the funnel.
