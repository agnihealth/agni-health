# Telehealth Informed Consent — Draft v1
**Prepared by:** clinic-legal  
**Date:** May 13, 2026  
**Status:** DRAFT — Requires Sohan approval  
**Deploy to:** Healthie intake flow or custom form

---

## INFORMED CONSENT FOR TELEHEALTH SERVICES

**Practice:** Agni Health, operated by Sohan Japa MD LLC  
**Provider:** Sohan Japa, MD  
**Licensed States:** California, Louisiana, Massachusetts

---

### WHAT IS TELEHEALTH?

Telehealth is the delivery of health care services using electronic communications, information technology, and telecommunications, including:
- Live, interactive audio and video conferencing between you and your provider
- Store-and-forward technologies (sharing of medical information such as photos, lab results, or records)
- Secure electronic messaging (portal messages, text-based communication)

Telehealth enables your health care provider to evaluate, diagnose, consult, and treat patients without being in the same physical location.

---

### BENEFITS OF TELEHEALTH

- **Convenience:** Receive care from your home, office, or anywhere with internet access
- **Access:** Connect with a physician who specializes in metabolic health for South Asians without geographic barriers
- **Efficiency:** Reduced travel time and waiting room exposure
- **Continuity:** Regular follow-up visits are easier to schedule and attend

---

### LIMITATIONS AND RISKS OF TELEHEALTH

I understand that telehealth has potential limitations, including but not limited to:

1. **Technology Requirements:** I need a device with a camera and microphone, reliable internet connection, and a private location for consultations.

2. **Technical Difficulties:** Sessions may be interrupted or disconnected due to technology failures. If this occurs, we will attempt to reconnect or reschedule.

3. **Not Appropriate for Emergencies:** Telehealth is not appropriate for emergency medical situations. If I am experiencing a medical emergency, I will call 911 or go to my nearest emergency room.

4. **Limitations of Virtual Examination:** The provider cannot physically examine me. Some conditions may require an in-person visit with a local provider for physical examination, diagnostic testing, or procedures.

5. **Privacy Considerations:** While we use HIPAA-compliant technology, there is always some risk that communications could be intercepted. I am responsible for ensuring privacy on my end of the consultation.

---

### EMERGENCY PROTOCOLS

**If I am experiencing a medical emergency, I understand that I should:**
- **Call 911** or go to my nearest emergency room
- **NOT** wait for a telehealth appointment or expect a timely response via portal messaging
- Notify Agni Health after the emergency has been addressed

**Examples of emergencies include:**
- Chest pain, difficulty breathing, or shortness of breath
- Signs of stroke (sudden numbness, confusion, difficulty speaking or understanding)
- Severe allergic reactions
- Uncontrolled bleeding
- Thoughts of harming myself or others
- Any condition I believe requires immediate medical attention

---

### MY RESPONSIBILITIES

I agree to:
1. Be physically located in **California, Louisiana, or Massachusetts** at the time of any telehealth consultation
2. Provide accurate and complete information about my medical history, medications, and current symptoms
3. Ensure I am in a private, quiet location during video visits
4. Have my medication bottles or a current medication list available during consultations
5. Follow up with my local healthcare providers as recommended
6. Contact emergency services (911) if I experience a medical emergency
7. Inform my provider if I am using a device or connection that may not be secure

---

### PRIVACY AND SECURITY

- All telehealth services are conducted using HIPAA-compliant platforms (Healthie)
- Video visits are encrypted end-to-end
- My health information is protected according to federal (HIPAA) and state privacy laws
- I have received and reviewed the Notice of Privacy Practices at agnihealth.co/privacy

---

### MY RIGHTS

I have the following rights regarding telehealth services:
1. **Right to Refuse:** I may refuse to participate in telehealth services at any time without affecting my right to future care or treatment.
2. **Right to Information:** I can ask questions about telehealth and have them answered before, during, or after my consultation.
3. **Right to an Alternative:** I can request information about alternatives to telehealth, including in-person care with local providers.
4. **Right to Privacy:** My telehealth sessions will be conducted in a private setting by my provider.
5. **Right to Access:** I can request access to my medical records as described in the Notice of Privacy Practices.

---

### BILLING AND INSURANCE

- Agni Health is a **self-pay practice** and does not bill insurance directly
- Fees are disclosed prior to booking and are due at the time of service
- I may request a **superbill** to submit to my insurance for potential reimbursement; however, reimbursement is not guaranteed
- My payment information is handled securely through Stripe

---

### PROVIDER CREDENTIALS

**Sohan Japa, MD**
- Medical School: Stanford University School of Medicine
- Residency: Harvard Medical School / Massachusetts General Hospital
- Board Certification: Internal Medicine (American Board of Internal Medicine)
- Active Medical Licenses:
  - California Medical Board
  - Louisiana State Board of Medical Examiners
  - Massachusetts Board of Registration in Medicine
- NPI: 1023468261

---

### STATE-SPECIFIC NOTICES

**California Patients:**
This consent is provided in compliance with California Business and Professions Code Section 2290.5. You have additional privacy rights under the Confidentiality of Medical Information Act (CMIA).

**Louisiana Patients:**
This consent is provided in compliance with Louisiana Administrative Code Title 46, Part XLV, Section 7513. Your consent to telehealth services is documented as required by state law.

**Massachusetts Patients:**
This consent is provided consistent with 243 CMR 2.01 regulations governing telemedicine. You have the right to receive care from a licensed physician.

---

### CONSENT ACKNOWLEDGMENT

By signing below (or checking the acknowledgment box in the patient portal), I confirm that:

1. I have read, or have had read to me, this Informed Consent for Telehealth Services
2. I understand the benefits, limitations, and risks of telehealth
3. I understand that telehealth is not appropriate for emergencies
4. I voluntarily consent to receive telehealth services from Agni Health
5. I understand I may withdraw my consent at any time without affecting my right to future care
6. I am physically located in California, Louisiana, or Massachusetts at the time of this consent

---

**Patient Signature:** ___________________________  
**Printed Name:** ___________________________  
**Date:** ___________________________

---

**OR (for electronic consent via Healthie):**

☐ I have read and understand this Informed Consent for Telehealth Services and agree to receive telehealth services from Agni Health.

---

## Implementation Notes for clinic-legal

**Option A — Add to Healthie Intake Flow:**
1. Create new Custom Module Form in Healthie
2. Copy content above
3. Add signature/acknowledgment checkbox
4. Insert as first form in "New Patient Intake" sequence

**Option B — Standalone Document:**
1. Create PDF version
2. Have patients sign during first visit
3. Store in Healthie documents

**Recommended:** Option A (integrated into intake flow for seamless compliance)

**Verification needed:** Check current Healthie intake forms (ID 127397) to see if any telehealth consent exists. If only a basic checkbox, replace with this comprehensive form.
