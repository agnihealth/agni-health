#!/usr/bin/env python3
"""
Generate Ad 6 — Static image (1080x1080)
Agni Health — Pedamallu stats infographic
v3: vertical centering, fixed label spacing, updated eyebrow, CTA fix
"""

from PIL import Image, ImageDraw, ImageFont
import os

WORKSPACE  = os.path.expanduser("~/.openclaw/workspace/agni-health")
FONTS_DIR  = os.path.join(WORKSPACE, "assets/fonts")
BRAND_DIR  = os.path.join(WORKSPACE, "assets/brand")
OUT_PATH   = os.path.expanduser(
    "~/.openclaw/workspace/agni-health/marketing/creatives/ad-6-stats.png"
)

DEEP_NAVY        = (10,  22,  40)
TERRACOTTA       = (212, 160, 136)
TERRACOTTA_DEEP  = (196, 144, 108)   # button fill — richer, more contrast
WHITE            = (255, 255, 255)
ZINC_300         = (212, 212, 216)
ZINC_500         = (113, 113, 122)
ZINC_800         = (39,  39,  42)

def fnt(weight, size):
    names = {
        "bold":    "PlusJakartaSans-Bold.ttf",
        "medium":  "PlusJakartaSans-Medium.ttf",
        "regular": "PlusJakartaSans-Regular.ttf",
    }
    return ImageFont.truetype(os.path.join(FONTS_DIR, names[weight]), size)

W, H = 1080, 1350   # 4:5 — optimal for Meta feed (max mobile screen real estate)
img  = Image.new("RGB", (W, H), DEEP_NAVY)
draw = ImageDraw.Draw(img)

def tw(text, font):
    bb = draw.textbbox((0, 0), text, font=font)
    return bb[2] - bb[0]

def th(text, font):
    bb = draw.textbbox((0, 0), text, font=font)
    return bb[3] - bb[1]

def cx(text, font):
    return (W - tw(text, font)) // 2

# ── Fonts ────────────────────────────────────────────────
f_eye   = fnt("medium", 28)
f_num   = fnt("bold",   162)
f_lbl   = fnt("medium",  36)
f_cta   = fnt("medium",  28)
f_fine  = fnt("regular", 20)

EYE_TEXT = "SOUTH ASIAN MEN · AGE 45"

stats = [
    ("31%", "Prediabetes"),
    ("25%", "High Blood Pressure"),
    ("78%", "High Cholesterol"),
]

CTA_TEXT = "Book Your Discovery Call"
PAD_X, PAD_Y = 54, 22

# ── Pre-calculate total content height ───────────────────
GAP_EYE_DIV   = 28
DIV_H         = 2
GAP_DIV_STATS = 80
GAP_NUM_LBL   = 68
GAP_STATS_DIV = 82
INTER_DIV_H   = 1
eye_h = th(EYE_TEXT, f_eye)

total_h = 0
total_h += eye_h
total_h += GAP_EYE_DIV + DIV_H
total_h += GAP_DIV_STATS

for i, (num, label) in enumerate(stats):
    n_h = th(num,   f_num)
    l_h = th(label, f_lbl)
    total_h += n_h + GAP_NUM_LBL + l_h
    if i < len(stats) - 1:
        total_h += GAP_STATS_DIV + INTER_DIV_H + GAP_STATS_DIV

# ── Start Y — vertically centered with slight upward bias ─
FOOTER_HEIGHT = 88
start_y = (H - FOOTER_HEIGHT - total_h) // 2

# ── Draw ─────────────────────────────────────────────────
y = start_y

# Eyebrow
draw.text((cx(EYE_TEXT, f_eye), y), EYE_TEXT, font=f_eye, fill=TERRACOTTA)
y += eye_h

# Divider under eyebrow
y += GAP_EYE_DIV
draw.rectangle([(W//2 - 230, y), (W//2 + 230, y + DIV_H)], fill=ZINC_800)
y += DIV_H + GAP_DIV_STATS

# Stats
for i, (num, label) in enumerate(stats):
    n_h = th(num,   f_num)
    l_h = th(label, f_lbl)

    # Dimensional number: shadow layer + main
    SHADOW = (40, 18, 8)   # dark warm shadow
    nx = cx(num, f_num)
    draw.text((nx + 4, y + 5), num, font=f_num, fill=SHADOW)   # shadow
    draw.text((nx,     y    ), num, font=f_num, fill=TERRACOTTA)  # main
    y += n_h + GAP_NUM_LBL
    draw.text((cx(label, f_lbl), y), label, font=f_lbl, fill=WHITE)
    y += l_h

    if i < len(stats) - 1:
        y += GAP_STATS_DIV
        draw.rectangle(
            [(W//2 - 140, y), (W//2 + 140, y + INTER_DIV_H)],
            fill=ZINC_800
        )
        y += INTER_DIV_H + GAP_STATS_DIV



# ── Bottom bar: source left, logo right — same baseline ──
fine = "Source: Pedamallu et al., JAHA 2026"
fine_h = th(fine, f_fine)

logo = Image.open(os.path.join(BRAND_DIR, "logo-transparent.png")).convert("RGBA")
logo_w = 148
logo = logo.resize((logo_w, int(logo.height * logo_w / logo.width)), Image.LANCZOS)

BOTTOM_MARGIN = 28
baseline_y = H - BOTTOM_MARGIN - max(fine_h, logo.height)

draw.text((48, baseline_y + (max(fine_h, logo.height) - fine_h) // 2), fine, font=f_fine, fill=ZINC_500)
logo_x = W - logo_w - 48
logo_y = baseline_y + (max(fine_h, logo.height) - logo.height) // 2
img.paste(logo, (logo_x, logo_y), logo)

# ── Save ─────────────────────────────────────────────────
img.save(OUT_PATH, "PNG", dpi=(300, 300))
print(f"Saved → {OUT_PATH}  (content block: {total_h}px, start_y: {start_y})")
