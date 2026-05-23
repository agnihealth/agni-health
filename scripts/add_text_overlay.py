#!/usr/bin/env python3
"""Add text overlays to ad7 video — Helvetica Neue Bold, consistent sizing."""

from moviepy import VideoFileClip, ImageClip, CompositeVideoClip
from PIL import Image, ImageDraw, ImageFont
import numpy as np

INPUT  = "/Users/sohanai/.openclaw/media/tool-video-generation/ad7-agni-logo-fadeout.mp4"
OUTPUT = "/Users/sohanai/.openclaw/media/tool-video-generation/ad7-final-text-v2.mp4"

FONT_PATH  = "/System/Library/Fonts/HelveticaNeue.ttc"
FONT_INDEX = 1   # Bold, upright
FONT_SIZE  = 54
STROKE_W   = 0
VIDEO_W, VIDEO_H = 720, 1280

def text_image(text, width=VIDEO_W, fontsize=FONT_SIZE):
    """Render a single line of text as a transparent RGBA image."""
    font = ImageFont.truetype(FONT_PATH, fontsize, index=FONT_INDEX)
    # measure
    tmp = Image.new("RGBA", (1, 1))
    d   = ImageDraw.Draw(tmp)
    bbox = d.textbbox((0, 0), text, font=font, stroke_width=STROKE_W)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1] + STROKE_W * 2 + 10
    img = Image.new("RGBA", (width, th + 20), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    x = (width - tw) // 2
    draw.text((x, 10), text, font=font, fill=(255, 255, 255, 210))
    return np.array(img)

def make_overlay(text, start, end, y_bottom_offset=200, fontsize=FONT_SIZE):
    arr = text_image(text, fontsize=fontsize)
    h   = arr.shape[0]
    clip = (
        ImageClip(arr, is_mask=False)
        .with_start(start)
        .with_end(end)
        .with_position(("center", VIDEO_H - y_bottom_offset - h))
    )
    return clip

video = VideoFileClip(INPUT)

overlays = [
    # [0–3s] Eating right.
    make_overlay("Eating right.",              start=0,  end=3,   y_bottom_offset=200),
    # [3–6s] Staying active.
    make_overlay("Staying active.",            start=3,  end=6,   y_bottom_offset=200),
    # [6–8s] Still can't lose the belly.
    make_overlay("Still can't lose the belly.", start=6, end=8,   y_bottom_offset=200),
    # [8–10s] Two-line stacked finale over logo card
    make_overlay("It's not you.",              start=8,  end=10,  y_bottom_offset=240),
    make_overlay("It's your biology.",         start=8,  end=10,  y_bottom_offset=170),
]

final = CompositeVideoClip([video] + overlays)
final.write_videofile(OUTPUT, codec="libx264", audio_codec="aac", logger=None)
print(f"Done: {OUTPUT}")
