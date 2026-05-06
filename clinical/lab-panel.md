# Agni Health — Standard Lab Panels
## For Healthie Lab Order Configuration

---

## 🔬 Metabolic Baseline Panel (Initial Visit)
*Order for all new patients*

| Test | CPT Code | Rationale |
|------|----------|-----------|
| HbA1c | 83036 | Glycemic control, 3-month average |
| Fasting glucose | 82947 | Current glycemic status |
| Fasting insulin | 83525 | Insulin resistance assessment |
| Lipid panel (TC, LDL, HDL, TG) | 80061 | Cardiovascular risk |
| ApoB | 82172 | Better CV risk marker for SA population |
| Comprehensive metabolic panel (CMP) | 80053 | Electrolytes, kidney, liver function |
| ALT | (in CMP) | NAFLD/MASLD screening |
| AST | (in CMP) | NAFLD/MASLD screening |
| hsCRP | 86141 | Inflammatory marker |
| TSH | 84443 | Thyroid dysfunction screening |
| Vitamin D, 25-OH | 82306 | Common deficiency in SA |
| Vitamin B12 | 82607 | Baseline before metformin |
| CBC with diff | 85025 | General health screen |
| Urine microalbumin/creatinine ratio | 82043, 82570 | Diabetic nephropathy screening |

**HOMA-IR Calculation** (not a lab order — calculate from results):
```
HOMA-IR = (Fasting Insulin × Fasting Glucose) / 405
Target: <2.0 (optimal <1.0)
```

---

## 🔄 Metabolic Follow-Up Panel (Q3 Months)
*For patients on active treatment*

| Test | CPT Code | Rationale |
|------|----------|-----------|
| HbA1c | 83036 | Track glycemic progress |
| Fasting glucose | 82947 | Current status |
| Fasting insulin | 83525 | Insulin resistance trend |
| Lipid panel | 80061 | Response to treatment |
| CMP | 80053 | Kidney/liver monitoring (esp. on metformin) |
| hsCRP | 86141 | Inflammation trend |

---

## 📅 Comprehensive Annual Panel (Q12 Months)
*Full reassessment*

| Test | CPT Code | Rationale |
|------|----------|-----------|
| All Baseline Panel tests | — | Full reassessment |
| Uric acid | 84550 | Metabolic syndrome marker |
| GGT | 82977 | Liver health (esp. if alcohol use) |
| Ferritin | 82728 | Iron stores, inflammation |
| Homocysteine | 83090 | CV risk (if B12 low or family hx) |

---

## 🎯 GLP-1 Monitoring Panel
*For patients on semaglutide/tirzepatide*

| Test | CPT Code | Rationale |
|------|----------|-----------|
| CMP | 80053 | Kidney function, electrolytes |
| Lipase | 83690 | Pancreatitis risk monitoring |
| Amylase | 82150 | Pancreatitis risk monitoring |
| TSH | 84443 | Thyroid monitoring (MTC risk) |

**Timing**: Baseline, then Q3-6 months on therapy

---

## 🚨 SA-Specific Considerations

### Lower Thresholds for Action
| Metric | General Population | South Asian Threshold |
|--------|-------------------|----------------------|
| BMI "overweight" | ≥25 | ≥23 |
| BMI "obese" | ≥30 | ≥27.5 |
| Waist circumference (men) | >40 in (102 cm) | >35 in (90 cm) |
| A1C prediabetes action | 5.7-6.4 | Consider treatment at 5.7+ |

### A1C Caveats in SA Population
- Some SA patients have hemoglobin variants that affect A1C accuracy
- If A1C doesn't match clinical picture, consider:
  - Fructosamine (2-3 week glucose average)
  - Glycated albumin
  - CGM time-in-range as primary metric

### Additional Tests to Consider
| Scenario | Add Test |
|----------|----------|
| Family hx premature CVD | Lp(a) — 86152 |
| Suspected PCOS | Total testosterone, DHEA-S, SHBG |
| Erectile dysfunction | Total testosterone, free testosterone |
| Suspected NAFLD (ALT elevated) | FibroScan referral or FIB-4 calculation |
| On metformin >1 year | B12 annually |

---

## 🏥 Lab Routing

### Preferred Labs
1. **Quest Diagnostics** — widest insurance acceptance
2. **LabCorp** — good alternative
3. **Direct-to-consumer** (for cash-pay): Ulta Lab Tests, Walk-In Lab

### Healthie Lab Order Setup
1. Create "Order Set" for each panel above
2. Link to Quest/LabCorp via Healthie integration
3. Set default lab facility per patient preference
4. Enable "Results to Portal" for patient visibility
5. Configure alert for critical values:
   - A1C >9%
   - Fasting glucose >200
   - eGFR <45
   - ALT >3x ULN

---

## 📋 Quick Reference Card

```
NEW PATIENT: Metabolic Baseline Panel
  → HbA1c, fasting glucose, fasting insulin, lipid + ApoB, 
     CMP, hsCRP, TSH, Vit D, B12, CBC, urine microalb/Cr
  → Calculate HOMA-IR from results

FOLLOW-UP (Q3 mo): Metabolic Follow-Up Panel
  → HbA1c, fasting glucose, fasting insulin, lipid, CMP, hsCRP

ANNUAL: Comprehensive Panel
  → Baseline + uric acid, GGT, ferritin

ON GLP-1: Add lipase, amylase, TSH q3-6 months
```
