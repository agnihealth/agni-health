# Business Associate Agreement (BAA) Tracker — Agni Health
**Practice:** Agni Health, operated by Sohan Japa MD LLC  
**Last Updated:** May 13, 2026  
**Maintained by:** clinic-legal

---

## Summary

| Vendor | Service | PHI Exposure | BAA Required | BAA Status | Verification Date |
|--------|---------|--------------|--------------|------------|-------------------|
| Healthie | EHR, Telehealth | **YES** | ✅ Yes | ⚠️ **NEEDS VERIFICATION** | — |
| Stripe | Payments | Limited | ✅ Yes | ⚠️ **NEEDS VERIFICATION** | — |
| Vercel | Web Hosting | **NO** | ❌ No | ✅ N/A | — |
| Meta Pixel | Advertising | **NO** | ❌ No (must not receive PHI) | ✅ N/A | — |
| PostHog | Analytics | Possible | ⚠️ Review | ⚠️ **NEEDS CONFIG REVIEW** | — |
| Keragon | Webhook Relay | Limited | ⚠️ Maybe | ⚠️ **NEEDS REVIEW** | — |
| ImprovMX | Email Forwarding | Possible | ⚠️ Maybe | ⚠️ **NEEDS REVIEW** | — |

---

## Detailed Vendor Analysis

### Healthie — ⚠️ VERIFICATION NEEDED
**Service:** Electronic Health Records, Patient Portal, Telehealth Video
**PHI Handled:** Full medical records, demographics, diagnoses, treatment plans, medications, lab results
**BAA Status:** Healthie provides BAAs to all healthcare customers as part of their standard service agreement.

**Action Required:**
- [ ] Log into Healthie admin
- [ ] Navigate to Settings > Legal Documents (or similar)
- [ ] Download/screenshot the executed BAA
- [ ] Save copy in this tracker folder
- [ ] Record verification date above

**Reference:** https://www.gethealthie.com/security (HIPAA compliance page)

---

### Stripe — ⚠️ VERIFICATION NEEDED
**Service:** Payment Processing
**PHI Handled:** Limited — patient names, payment amounts, possibly service descriptions
**BAA Status:** Stripe offers BAAs for healthcare customers via their support portal.

**Action Required:**
- [ ] Access Stripe Dashboard
- [ ] Go to Settings > Compliance > Business Associate Agreement
- [ ] Accept/sign the BAA if not already done
- [ ] Screenshot confirmation
- [ ] Record verification date above

**Reference:** https://support.stripe.com/questions/hipaa-compliance-and-stripe (BAA request process)

---

### Vercel — ✅ N/A
**Service:** Website Hosting (static)
**PHI Handled:** None — the Agni Health website (agnihealth.co) is a static marketing/informational site. No PHI is collected or stored on Vercel.
**BAA Required:** No
**Notes:** Patient intake, consultations, and records are handled entirely through Healthie. Vercel hosts only public-facing marketing content.

---

### Meta Pixel — ✅ N/A (with conditions)
**Service:** Advertising Analytics
**PHI Handled:** Must be NONE
**BAA Required:** No — Meta does not sign BAAs and explicitly prohibits PHI in Pixel events.

**Critical Compliance Check:**
- [ ] Verify Pixel is NOT firing on Healthie pages
- [ ] Verify NO hashed emails/phone numbers are being sent
- [ ] Verify booking confirmation page does NOT send diagnosis or health-related URL parameters

**Warning:** If PHI is inadvertently sent to Meta Pixel, this creates a HIPAA breach. The implementation should be audited by clinic-ops or clinic-designer.

**Reference:** Meta Business Health Advertising Policy

---

### PostHog — ⚠️ CONFIGURATION REVIEW NEEDED
**Service:** Product Analytics
**PHI Handled:** Potentially — depends on configuration
**BAA Required:** If tracking logged-in patient sessions with identifiable data, yes.

**Questions to Answer:**
- [ ] Is PostHog tracking on Healthie patient portal, or only on public website?
- [ ] What events are being captured?
- [ ] Are any user identifiers (email, patient ID) being sent?
- [ ] Is session recording enabled? (If so, and if it records patient data = PHI)

**If PHI is being collected:**
- PostHog offers BAAs on their enterprise plans
- Consider upgrading or limiting data collection to exclude PHI

**Reference:** PostHog HIPAA documentation

---

### Keragon — ⚠️ REVIEW NEEDED
**Service:** Webhook/Integration Relay
**PHI Handled:** Possibly — receives appointment webhook data from Healthie
**BAA Required:** Depends on data contents

**Questions to Answer:**
- [ ] What data fields are in the Healthie → Keragon webhook?
- [ ] Is only appointment_id sent, or full patient details?
- [ ] Does Keragon store data, or just relay it?

**If only relaying non-identifiable IDs:** BAA likely not required
**If patient names, DOB, or health info:** BAA required

---

### ImprovMX — ⚠️ REVIEW NEEDED
**Service:** Email Forwarding
**PHI Handled:** Potentially — if privacy@agnihealth.co receives patient communications
**BAA Required:** If forwarding emails containing PHI, yes.

**Questions to Answer:**
- [ ] What emails route through ImprovMX?
- [ ] Is privacy@ or care@ forwarding patient messages?
- [ ] Does ImprovMX store emails or just forward?

**Mitigation:**
- Instruct patients to use Healthie portal for health-related communications
- Add disclaimer to email signature: "For medical inquiries, please use your patient portal"

---

## BAA Documentation Checklist

When verifying each BAA:
1. Download/screenshot the agreement
2. Note the effective date
3. Confirm it covers the services being used
4. Store copy in `clinic/legal-drafts/baa-copies/` (create folder if needed)
5. Update this tracker with verification date

---

## Annual Review

BAAs should be reviewed annually to ensure:
- Services are still in compliance with the BAA terms
- No new services have been added that require BAAs
- Contact information is current for breach notification purposes

**Next Review Due:** May 2027

---

*This tracker is for internal compliance management. clinic-legal maintains this document. Sohan/clinic-ceo should verify BAA status for Healthie and Stripe as priority items.*
