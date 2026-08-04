# Agni Health — Vendor Registry

Last updated: 2026-05-05

## Core Platform

| Vendor | Purpose | Account | Status |
|--------|---------|---------|--------|
| **Healthie** | EHR, scheduling, telehealth, billing | sohan_ai@icloud.com | ✅ Active |
| **Vercel** | Website hosting, deployment | (via GitHub) | ✅ Active |
| **GitHub** | Code repository | agnihealth/agni-health | ✅ Active |

## Analytics & Tracking

| Vendor | Purpose | Account | Status |
|--------|---------|---------|--------|
| **PostHog** | Product analytics, A/B testing, funnels | sohan_ai@icloud.com | ✅ Active |
| **Vercel Analytics** | Web Vitals, basic traffic | (bundled with Vercel) | ✅ Active |

## Domain & Infrastructure

| Vendor | Purpose | Account | Status |
|--------|---------|---------|--------|
| **Vercel** | Domain: agnihealth.co | — | ✅ Active |
| **Anytime Mailbox** | Business address (447 Sutter St, SF) | — | ⏳ Pending 1583 |

## Payments (Planned)

| Vendor | Purpose | Account | Status |
|--------|---------|---------|--------|
| **Stripe** | Payment processing | — | ⏳ Not set up |

## Compliance & Insurance

| Vendor | Purpose | Account | Status |
|--------|---------|---------|--------|
| **Coverys** | Malpractice insurance | — | ⏳ Pending binding |

## Entity

| Item | Details |
|------|---------|
| **LLC** | Sohan Japa MD LLC |
| **State** | California |
| **EIN** | 87-3422672 |
| **Formed** | 2021-11-01 |
| **Address** | 447 Sutter St Ste 506-1024, San Francisco, CA 94108 |

## BAAs Required

| Vendor | BAA Status |
|--------|------------|
| Healthie | ⏳ Needed |
| PostHog | ⏳ Review (self-host option for HIPAA) |
| Vercel | ⏳ Review |
| Stripe | ⏳ When set up |

## Credentials Locations

```
~/.config/healthie/          # Healthie (if any)
~/.config/posthog/           # PostHog credentials
~/.config/resy/              # Resy (personal, not clinic)
agni-health/.env.local       # PostHog project key
```

## Notes

- PostHog free tier: 1M events/month — sufficient for launch
- Healthie handles HIPAA-compliant telehealth + messaging
- Consider self-hosted PostHog if PHI concerns arise
- Stripe Connect may be needed for insurance billing later
