# Agni Health — Waitlist Email Nurture Sequence
**Author**: clinic-cmo | **Date**: 2026-05-13  
**Status**: PROPOSED — awaiting CEO/Din approval before sending  
**Trigger**: User submits email via agnihealth.co waitlist form  
**Platform**: Healthie messaging or external email tool (recommend Loops.so or Resend + custom templates)  
**HIPAA note**: These emails are pre-booking/marketing. Waitlist email ≠ PHI. Safe to send via standard email provider.

---

## Sequence Overview

| Email | Trigger | Subject | Goal |
|-------|---------|---------|------|
| Email 1 | Immediately on signup | "You're on the list — here's what to expect" | Welcome, set expectation, one helpful fact |
| Email 2 | Day 3 | "The one test your doctor probably hasn't ordered" | Educate, build trust, soft CTA |
| Email 3 | Day 7 | "A spot just opened up — here's how to book" | Convert to booking, urgency |

---

## Email 1 — Welcome

**Subject**: You're on the Agni Health list

**Preview text**: A different kind of metabolic care for South Asian men.

---

Hi [First Name],

You're on the Agni Health waitlist.

I'm Sohan Japa, MD — the founder. I built Agni Health because I kept seeing the same pattern: South Asian men coming in with "normal" labs, a family history of diabetes, and no real plan from their doctor.

The problem isn't their doctors. It's that standard clinical guidelines weren't built with South Asian bodies in mind. South Asians develop type 2 diabetes at a BMI of 23, not 30. We develop it 4x more often than white Americans. And we often don't get a proper workup until things have already progressed.

That's what Agni Health exists to fix.

**What happens next:**
- I'm seeing patients in California, Louisiana, and Massachusetts now
- Initial consultations are scheduled as availability opens
- I'll be in touch within a few days

In the meantime, if you want to understand what a proper metabolic workup looks like for South Asian men, I wrote about it here: [link to blog post 1]

— Dr. Sohan Japa  
Founder, Agni Health  
agnihealth.co

---

*Agni Health | Telehealth metabolic care for South Asian men*  
*Unsubscribe* | *Privacy Policy*

---

## Email 2 — Education + Trust

**Subject**: The one test your doctor probably hasn't ordered

**Preview text**: Your A1c doesn't show insulin resistance. This does.

---

Hi [First Name],

Quick question: has your doctor ever ordered a **fasting insulin** test?

Most standard blood panels don't include it. But for South Asian men, it's one of the most important tests we can run.

Here's why: Your A1c shows your average blood sugar over 90 days. But insulin resistance — the root cause of metabolic disease — can be building for years before it shows up in your A1c.

A fasting insulin level, combined with your fasting glucose, lets us calculate **HOMA-IR** — the gold-standard estimate of how insulin-resistant you are. We've seen patients with completely "normal" A1c values who have a HOMA-IR that puts them at significant risk.

At Agni Health, every initial consultation includes:
- Fasting insulin + HOMA-IR calculation
- ApoB (better than LDL for SA men)
- hsCRP (inflammation marker)
- Waist circumference assessed to South Asian thresholds
- A1c, glucose, and the full standard panel

Not because we're being thorough for thoroughness's sake. Because these are the markers that actually predict metabolic disease progression in South Asian men.

If you're in California, Louisiana, or Massachusetts and want a proper workup — not just "your labs look fine, watch your diet" — I'd like to see you.

[Book your initial consultation →] (agnihealth.co/book)

Initial consultation: $350. Credited toward your first month if you enroll in ongoing care.

— Dr. Sohan Japa  
Agni Health

---

## Email 3 — Conversion

**Subject**: A spot just opened up

**Preview text**: Initial consultations in your state — book before it fills.

---

Hi [First Name],

I have a few initial consultation slots available this week and next in [State — CA / MA / LA based on location data if available, else: "your state"].

If you've been thinking about getting a real metabolic workup — not just a routine annual panel — now is a good time.

Here's what an Agni Health initial consultation looks like:

- **30-minute video visit** with me (Dr. Sohan Japa)
- Full South Asian-specific metabolic review of your labs and history
- Discussion of your diet, family history, and lifestyle — in the context of South Asian health, not generic guidelines
- A clear plan: labs to order, lifestyle changes, and whether medication (including GLP-1 if appropriate) makes sense for you
- Consult summary sent to you (and your PCP if you want) within 48 hours

**Cost**: $350 for the initial visit. If you enroll in the Essential or Intensive plan, this is credited toward your first or second month.

[Book your initial consultation →] (agnihealth.co/book)

If you have questions before booking, just reply to this email. I read everything.

— Dr. Sohan Japa, MD  
Founder, Agni Health  
agnihealth.co

---

*Licensed in California, Louisiana, and Massachusetts. Telehealth only.*

---

## Implementation Notes

**Platform options:**
1. **Loops.so** — built for startups, transactional + marketing, $49/mo. Integrates with Next.js via REST API. Recommended.
2. **Resend** — developer-friendly, great React Email templates, pay-per-use (~$0.001/email at our volume = essentially free). Recommended if we want full control.
3. **Healthie** — has built-in messaging/email but limited automation. Not ideal for marketing sequences.

**Required to activate:**
1. Airtable waitlist wired to /api/waitlist (ops) — captures email
2. Webhook from Airtable → email platform to trigger sequence
3. Or: /api/waitlist → direct call to Loops.so or Resend API on signup

**Personalization to add later:**
- [First Name] from form submission
- State (from IP or form field) — to personalize Email 3 ("California patients")
- Referral source (UTM from form landing) — to personalize Email 1 (e.g., "You found us from our Facebook post")

**HIPAA note**: 
Emails 1–3 are marketing emails to non-patients. Safe to use standard email provider. Once a patient books and shares health info, all communication moves to Healthie's HIPAA-compliant messaging. Do not send health-specific info (labs, diagnoses) through marketing email tools.

---

*All copy pending Sohan review. Subject lines and CTAs may be A/B tested.*  
*Prepared by: Agni Health CMO | May 13, 2026*
