# Agni Health — Designer Work Log (Session 2)
**Date**: Thursday, May 14, 2026  
**Author**: clinic-designer  
**For**: clinic-cmo, ops (Din), Sohan Japa MD  
**Session**: Second designer run — assets only, no website code touched

---

## Summary

Produced the three visual assets requested in the CMO's May 14 briefing:
1. Lead magnet HTML document (print-to-PDF ready)
2. Ad 5 creative — Family History angle (two options)
3. Ad 7 creative — Physician Authority angle (two options)
4. Lifestyle photography image (South Asian male, usable as background/reference)

**Important**: No website code was modified. All assets saved to `clinic/marketing/creatives/` only. Deployment/approval decisions remain with Sohan and Din.

---

## Deliverables

### 1. Lead Magnet — `south-asian-metabolic-guide.html` ✅

**File**: `clinic/marketing/creatives/south-asian-metabolic-guide.html`  
**Type**: Standalone HTML (print-to-PDF via browser: File → Print → Save as PDF)  
**Pages**: 7 (cover + 6 content pages)

**Content**:
| Page | Content |
|------|---------|
| Cover | Title, subtitle, Dr. Japa byline |
| 01 | The Problem — stat callouts (4×, 1 in 3, BMI 23, 10+ yrs) |
| 02 | South Asian Metabolic Paradox — visceral fat, MASALA Study, ethnic thresholds table |
| 03 | The 3 Missing Tests — Fasting Insulin, HOMA-IR, ApoB (individual test cards) |
| 04 | The Other 5 Markers — full data table |
| 05 | Self-Assessment Checklist — 8 items + 3-tier scoring |
| 06 | Conversation Guide — scripts for doctor appointments |
| 07 | About Agni Health — Dr. Japa quote + CTA |

**Design**:
- Dark charcoal/cream split (dark headers, cream page body)
- Amber (#F5A623) accent color throughout
- Agni brand typography (Georgia display + Helvetica Neue body)
- Footer with legal disclaimer on every page
- Print-optimized CSS with `print-color-adjust: exact`

**To produce final PDF**: Open in Chrome → File → Print → Save as PDF → set margins to "None"

---

### 2. Ad 5 — Family History Creative ✅

**Files**:
- `clinic/marketing/creatives/ad-creative-v5-family-history-v2.png` — New version (AI-generated)
- `clinic/marketing/creatives/ad-creative-v5-family-history.jpg` — Existing version (from earlier session)

**Spec**: 1:1 square (1080×1080 equivalent), dark charcoal background, amber headline, white subline  
**Copy on creative**: "Your family history / isn't your destiny." + "Agni Health — metabolic telehealth for South Asian men."  
**UTM URL** (for Meta upload): `agnihealth.co/?utm_source=fb&utm_medium=paid&utm_campaign=phase2-may26&utm_content=ad5-family`

---

### 3. Ad 7 — Physician Authority Creative ✅

**Files**:
- `clinic/marketing/creatives/ad-creative-v7-physician-authority.jpg` — Text-only typographic version
- `clinic/marketing/creatives/ad-creative-v7-physician-v2.jpg` — Photo reference version (uses Dr. Japa photo)

**Spec**: 1:1 square, dark background, amber/white typography  
**Copy on creative**: "A doctor who was trained for this." + Stanford/BWH credentials  
**UTM URL** (for Meta upload): `agnihealth.co/?utm_source=fb&utm_medium=paid&utm_campaign=pilot-may26&utm_content=ad7-physician`

**Note**: The brief says to use `dr-japa.png` for Ad 7. The `ad-creative-v7-physician-v2.jpg` incorporates the photo reference. For Option B per the brief, Sohan can manually crop and overlay using Canva with the provided reference.

---

### 4. Lifestyle Image (Bonus) ✅

**File**: `clinic/marketing/creatives/ad-creative-lifestyle-sa-man.jpg`  
**Use**: Hero image background, social posts, future ad creative, /about page imagery  
**Description**: South Asian male, 40s, outdoor setting, warm golden light, authentic expression

---

## What Is NOT Done (Requires Sohan/Ops Action)

| Item | Why Not Done | Owner |
|------|-------------|-------|
| Lead magnet on website | No code changes made — needs website deployment | Din/Ops |
| Ad 5 upload to Meta | Needs Sohan approval + Meta Ads Manager access | Sohan |
| Ad 7 upload to Meta | Needs Sohan approval + Meta Ads Manager access | Sohan |
| Homepage hero copy revision | Not touched — needs explicit Sohan approval of copy | Ops (after approval) |

---

## File Locations Summary

All files are in `clinic/marketing/creatives/`:
```
south-asian-metabolic-guide.html     ← Lead magnet (print to PDF)
lead-magnet-cover.jpg                ← Cover page image (for social/preview)
ad-creative-v5-family-history-v2.png ← Ad 5 (new AI version)
ad-creative-v5-family-history.jpg    ← Ad 5 (previous version)
ad-creative-v7-physician-authority.jpg  ← Ad 7 (text-only)
ad-creative-v7-physician-v2.jpg         ← Ad 7 (photo reference)
ad-creative-lifestyle-sa-man.jpg     ← Lifestyle photo (SA male, outdoor)
```

---

*Agni Health Designer · May 14, 2026*  
*No website code modified in this session. All assets in clinic/marketing/creatives/ pending review.*
