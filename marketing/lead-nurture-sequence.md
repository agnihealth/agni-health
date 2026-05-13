# Agni Health — Lead Nurture Email Sequence
**Prepared by:** clinic-cmo | **Date:** 2026-05-12  
**Status:** PROPOSED — awaiting Sohan approval before activation  
**Channel:** Email via Keragon → Healthie (or direct SMTP via ImprovMX if Healthie can't automate)  
**Trigger:** Meta Lead Form submission → Keragon webhook → email send

---

## Overview

Leads from Meta ads go cold fast. A study by Harvard Business Review found that responding to a lead within 5 minutes makes you 9× more likely to close them versus waiting 30 minutes. For a $350 medical consultation, we need speed + warmth + credibility.

This sequence is designed to:
1. Make the lead feel seen immediately
2. Deliver one piece of genuine value per touchpoint
3. Create a low-friction path to booking
4. Exit gracefully if they don't engage (no spam)

---

## Technical Requirements (Verify Before Activating)

- [ ] Keragon receives Meta Lead Center webhook ✅ (reportedly set up, needs end-to-end test)
- [ ] Keragon → Healthie creates lead record correctly
- [ ] Healthie or Keragon can trigger automated email on lead creation
- [ ] sohan@agnihealth.co is sending domain (ImprovMX → Sohan's Gmail)
- [ ] Booking link is live: agnihealth.co/book or direct Healthie widget URL
- [ ] Lead form captures: First name, Email, Phone (optional)

---

## Sequence Architecture

```
Lead submits → Email 1 (0–15 min) → Wait 48h
                                          ↓
                              Booked? → STOP sequence
                                          ↓
                                     No → Email 2 (Day 3)
                                          ↓
                              Booked? → STOP
                                          ↓
                                     No → Email 3 (Day 7)
                                          ↓
                              Booked? → STOP
                                          ↓
                                     No → Exit (no more emails)
```

---

## Email 1 — Immediate (0–15 Minutes After Form Submit)

**Subject:** Your Agni Health request — what happens next

**Preview text:** Quick note from Dr. Japa himself.

---

Hi [First Name],

I'm Dr. Sohan Japa — the physician behind Agni Health.

You reached out because you're thinking about your metabolic health. That's the right instinct. Most of the men I see have been told "your numbers are fine" for years before they came to me. By the time they did, things had progressed further than they needed to.

I built Agni Health specifically for South Asian men — because our metabolic risk is real, it starts earlier, and it requires a different approach than standard primary care offers.

If you want to talk through what's going on with your health — labs, symptoms, family history — book a 30-minute initial consultation here:

**→ [agnihealth.co/book]**

The consultation is $350 and includes a full metabolic review using South Asian-specific thresholds (A1c, HOMA-IR, ApoB, and more). If you enroll in ongoing care, it's credited toward your first month.

I'm in California — telehealth only, so you can join from anywhere in CA, LA, or MA.

Looking forward to it.

— Sohan Japa, MD  
Agni Health  
sohan@agnihealth.co | agnihealth.co

---

*You received this because you submitted a request through our Meta ad. If this was a mistake, just ignore this email — you won't hear from us again unless you reach out.*

---

## Email 2 — Day 3 (If No Booking Detected)

**Subject:** One test your doctor probably hasn't run

**Preview text:** It takes 2 minutes to add to standard bloodwork.

---

Hi [First Name],

Quick follow-up from me. I'm guessing your schedule is busy — it usually is for the kind of person who ends up looking into metabolic health.

I wanted to share one thing that might be useful, regardless of whether you book with me:

**Ask your doctor to add fasting insulin to your next blood draw.**

Most annual panels don't include it. But combined with your fasting glucose, it lets you calculate HOMA-IR — the best early measure of insulin resistance. South Asian men often have elevated insulin resistance years before their A1c enters the prediabetes range. By the time A1c catches up, the disease process has been running for a decade.

Knowing your HOMA-IR is the difference between catching it early and catching it late.

If you want to walk through your numbers with a physician who actually knows what to do with them, the calendar's open:

**→ [agnihealth.co/book]**

— Sohan

---

## Email 3 — Day 7 (Final)

**Subject:** Last message from me, [First Name]

**Preview text:** I'll stop here — just wanted to leave the door open.

---

Hi [First Name],

I'm going to leave you alone after this. I know you're busy, and I don't want to be another thing in your inbox.

But if you ever decide you want to take your metabolic health seriously — with a physician who's built a practice specifically for South Asians, who knows what to do with your HOMA-IR, your waist circumference, your family history — the door is open.

**→ agnihealth.co/book**

I'll be here.

— Sohan Japa, MD  
Agni Health

---

## Optional: SMS Touchpoint (Day 1, If Phone Captured)

If lead form captured a phone number and Healthie/Keragon supports SMS:

**Day 1 SMS (within 1 hour of form submit):**
> Hi [First Name] — this is Dr. Sohan Japa from Agni Health. You reached out earlier. Happy to answer questions or set up a call. Book here if you're ready: agnihealth.co/book

Keep it brief. No follow-up SMS if no response. One text only.

---

## Handling Replies

If a lead replies to any email:
- Forward to sohan@agnihealth.co if not already the sender
- Sohan responds personally (this is a major differentiator — people don't expect the actual doctor to reply)
- Priority: same-day response within business hours

Common reply types to expect:
1. **"What insurance do you accept?"** → We're self-pay only. HSA/FSA accepted. $350 initial consult.
2. **"Do you treat [specific condition]?"** → Metabolic health: prediabetes, T2DM (early), metabolic syndrome, insulin resistance, obesity. Not accepting Type 1, insulin-dependent T2DM, or non-metabolic conditions.
3. **"Are you accepting new patients?"** → Yes, scheduling now.
4. **"I'm in [State] — do you treat there?"** → CA, LA, MA only. If they're in another state, apologize and invite them to join waitlist for future expansion.

---

## A/B Test Recommendation (Phase 2)

Test Email 1 subject line variants:
- A: "Your Agni Health request — what happens next"
- B: "Dr. Japa here — quick note before you forget"
- C: "One thing I want to tell you about your metabolic health"

Measure: Open rate (if Healthie/Keragon tracks it) and booking rate

---

## Implementation Notes

**Option 1 — Keragon automation (preferred):**
- Trigger: Meta lead webhook received
- Action: Wait 1 min, send Email 1 via SMTP or Healthie
- Action: Wait 3 days, check if appointment booked, if not → send Email 2
- Action: Wait 7 days total, check again → if not booked → send Email 3

**Option 2 — Manual (fallback, for pilot lead nurture now):**
- Sohan checks Meta Lead Center daily
- For each new lead: send Email 1 manually from sohan@agnihealth.co
- Day 3: follow up if no booking
- Day 7: final email

**Option 2 is viable for the first 10–20 leads.** At scale, it won't work.

---

## Compliance Notes

- Unsubscribe link: technically required by CAN-SPAM if bulk email; manual follow-up is exempt
- For automated sequences: include "To stop receiving these emails, reply STOP" or similar
- HIPAA: Lead contact info (name, email) is not PHI until they become a patient; standard email is acceptable for pre-patient outreach
- No PHI in emails: Do not include lab results, diagnoses, or health information in outbound emails to non-patients

---

*Prepared by: Agni Health CMO function*  
*Status: PROPOSED — activation requires Sohan approval and technical verification of Keragon pipeline.*
