# Agni Health — Patient Intake Form
## For Healthie Configuration

---

### Section 1: Demographics
- [ ] Full legal name
- [ ] Preferred name
- [ ] Date of birth
- [ ] Sex assigned at birth
- [ ] Gender identity
- [ ] Pronouns
- [ ] Email
- [ ] Phone (mobile preferred)
- [ ] Address (street, city, state, zip)
- [ ] Emergency contact (name, relationship, phone)
- [ ] Preferred pharmacy (name, address)

---

### Section 2: Insurance & Payment
- [ ] Insurance carrier (or "Self-pay")
- [ ] Member ID
- [ ] Group number
- [ ] Upload: Front of insurance card
- [ ] Upload: Back of insurance card
- [ ] Acknowledgment: I understand this is a cash-pay practice and will receive a superbill for insurance submission

---

### Section 3: Chief Complaint & Goals
- [ ] What brings you to Agni Health today? (free text)
- [ ] Primary health goal (dropdown):
  - Weight loss
  - Blood sugar control
  - Overall metabolic health
  - Medication management
  - Other
- [ ] Target weight (if applicable)
- [ ] Have you tried weight loss programs before? (Y/N → if Y, describe)

---

### Section 4: Medical History
- [ ] Current diagnoses (check all that apply):
  - [ ] Type 2 Diabetes
  - [ ] Prediabetes
  - [ ] Obesity
  - [ ] High blood pressure
  - [ ] High cholesterol
  - [ ] Fatty liver (NAFLD/MASLD)
  - [ ] Sleep apnea
  - [ ] PCOS
  - [ ] Thyroid disorder
  - [ ] Heart disease
  - [ ] Kidney disease
  - [ ] Other: ___
- [ ] Prior surgeries (list)
- [ ] Allergies (medications, foods, environmental)
- [ ] Current medications (name, dose, frequency) — or upload photo of pill bottles

---

### Section 5: South Asian-Specific Risk Assessment
*These questions help us provide culturally-informed care.*

- [ ] Country/region of family origin:
  - India (specify state if known)
  - Pakistan
  - Bangladesh
  - Sri Lanka
  - Nepal
  - Other: ___
- [ ] Generation in US:
  - 1st generation (born outside US)
  - 2nd generation (parents immigrated)
  - 3rd+ generation
- [ ] Family history of diabetes BEFORE age 50? (parents, siblings)
  - [ ] Yes — who and at what age?
  - [ ] No
  - [ ] Unknown
- [ ] Family history of heart disease BEFORE age 55 (men) or 65 (women)?
  - [ ] Yes
  - [ ] No
  - [ ] Unknown
- [ ] Dietary pattern (check one):
  - Vegetarian (no meat/fish)
  - Pescatarian
  - Non-vegetarian
  - Vegan
- [ ] Dietary restrictions (religious, cultural, allergies): ___
- [ ] Primary cooking fat used at home:
  - Ghee
  - Vegetable oil
  - Olive oil
  - Coconut oil
  - Other: ___

---

### Section 6: Lifestyle Assessment
- [ ] Alcohol use — AUDIT-C screening:
  1. How often do you have a drink containing alcohol? (Never / Monthly or less / 2-4x month / 2-3x week / 4+ week)
  2. How many drinks on a typical drinking day? (1-2 / 3-4 / 5-6 / 7-9 / 10+)
  3. How often 6+ drinks on one occasion? (Never / Less than monthly / Monthly / Weekly / Daily)
- [ ] Tobacco use (Never / Former / Current — if current, how much?)
- [ ] Average hours of sleep per night
- [ ] Do you snore or has anyone observed you stop breathing during sleep? (Y/N)
- [ ] Exercise frequency:
  - None
  - 1-2 days/week
  - 3-4 days/week
  - 5+ days/week
- [ ] Type of exercise (walking, gym, sports, yoga, etc.)
- [ ] Occupation / typical work hours
- [ ] Stress level (1-10 scale)

---

### Section 7: Mental Health Screening (PHQ-4)
*Over the last 2 weeks, how often have you been bothered by:*

| Question | Not at all (0) | Several days (1) | More than half (2) | Nearly every day (3) |
|----------|----------------|------------------|--------------------|-----------------------|
| Feeling nervous, anxious, or on edge | | | | |
| Not being able to stop or control worrying | | | | |
| Little interest or pleasure in doing things | | | | |
| Feeling down, depressed, or hopeless | | | | |

---

### Section 8: Labs & Records Upload
- [ ] Upload any labs from the past 12 months (blood work, A1C, lipid panel, etc.)
- [ ] Upload any relevant medical records
- [ ] Are you currently using a CGM (continuous glucose monitor)? (Y/N)
  - If yes, which device? (Libre / Dexcom / Other)

---

### Section 9: Consents & Agreements
- [ ] Consent to telehealth services
- [ ] HIPAA Notice of Privacy Practices acknowledgment
- [ ] Financial agreement / self-pay acknowledgment
- [ ] Consent to treatment

---

## Healthie Configuration Notes
- Set all checkbox fields as required except "Other" free text fields
- Enable file upload for insurance cards, labs, medical records
- Auto-calculate PHQ-4 score and flag if ≥6 (moderate symptoms)
- Auto-calculate AUDIT-C and flag if ≥4 for men
- Send intake form link automatically upon booking confirmation
- Reminder to complete: 48h and 24h before appointment
