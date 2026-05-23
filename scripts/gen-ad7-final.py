#!/usr/bin/env python3
"""
Ad 7 — belly fat angle
Step 1: moviepy builds base video + logo card + audio fade → temp file
Step 2: Python/PIL renders per-frame RGBA text overlay → piped to ffmpeg
Step 3: ffmpeg composites overlay onto base with clean opacity fading (no dark ghost)
"""

from moviepy import VideoFileClip, ImageClip, concatenate_videoclips
from moviepy.video import fx as vfx
from moviepy.audio import fx as afx
from PIL import Image, ImageDraw, ImageFont
import numpy as np
import subprocess, tempfile, os

BASE    = "/Users/sohanai/.openclaw/media/tool-video-generation/ad7-base-v4---1f682200-83b0-4c3f-8d12-2cb0152887f6.mp4"
LOGO    = os.path.expanduser("~/.openclaw/workspace/agni-health/assets/brand/logo-transparent.png")
OUTPUT  = "/Users/sohanai/.openclaw/workspace/agni-health/marketing/creatives/ad7/drafts/ad7-v24.mp4"

FONT_PATH  = "/System/Library/Fonts/HelveticaNeue.ttc"
FONT_INDEX = 1
FONT_SIZE  = 54
VIDEO_W, VIDEO_H = 720, 1280
FPS        = 24
LOGO_DUR   = 2.0
FADE_DUR   = 0.25
TEXT_ALPHA = 210   # 0-255, overall text opacity

# ── Text overlays config ──────────────────────────────────────────────────────
# (text, start, end, y_bottom_offset, fade_in, fade_out)
OVERLAYS = [
    ("Eating right",               0.0,  1.75, 120, False, True),
    ("Staying active",             2.5,  4.5,  120, True,  True),
    ("Still can't lose the belly", 4.8,  8.0,  120, True,  True),
    ("It's not you",               8.3,  10.0, 300, True,  False),
    ("It's your biology",          8.3,  10.0, 220, True,  False),
]

# ── Step 1: Build base video + logo card via moviepy ─────────────────────────

print("Building base video...")
video = VideoFileClip(BASE)
if video.audio:
    video = video.with_audio(video.audio.with_effects([afx.AudioFadeOut(2.0)]))
video = video.with_effects([vfx.FadeOut(2.0)])

logo_img = Image.open(LOGO).convert("RGBA")
logo_w   = 420
logo_h   = int(logo_img.height * logo_w / logo_img.width)
logo_img = logo_img.resize((logo_w, logo_h), Image.LANCZOS)
card     = Image.new("RGBA", (VIDEO_W, VIDEO_H), (0, 0, 0, 255))
card.paste(logo_img, ((VIDEO_W - logo_w) // 2, (VIDEO_H - logo_h) // 2), logo_img)

logo_card  = ImageClip(np.array(card)).with_duration(LOGO_DUR)
full_video = concatenate_videoclips([video, logo_card])
total_dur  = full_video.duration

tmp_base = tempfile.NamedTemporaryFile(suffix=".mp4", delete=False).name
full_video.write_videofile(tmp_base, codec="libx264", audio_codec="aac",
                           fps=FPS, logger=None)
print(f"Base saved → {tmp_base}")

# ── Step 2: Pre-render text images ────────────────────────────────────────────

def render_text(text):
    """Return full-width RGBA image with white text, transparent background."""
    font = ImageFont.truetype(FONT_PATH, FONT_SIZE, index=FONT_INDEX)
    tmp  = Image.new("RGBA", (1, 1))
    bbox = ImageDraw.Draw(tmp).textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1] + 10
    img  = Image.new("RGBA", (VIDEO_W, th + 20), (0, 0, 0, 0))
    x    = (VIDEO_W - tw) // 2
    ImageDraw.Draw(img).text((x, 10), text, font=font,
                             fill=(255, 255, 255, TEXT_ALPHA))
    return np.array(img)  # H x W x 4

text_imgs = {ov[0]: render_text(ov[0]) for ov in OVERLAYS}

# ── Step 3: Pipe RGBA overlay frames to ffmpeg, then composite ────────────────

def fade_mul(t, start, end, fade_in, fade_out):
    dur = end - start
    rel = t - start
    if rel < 0 or rel > dur:
        return 0.0
    mul = 1.0
    if fade_in  and rel < FADE_DUR:            mul = min(mul, rel / FADE_DUR)
    if fade_out and rel > dur - FADE_DUR:      mul = min(mul, (dur - rel) / FADE_DUR)
    return float(np.clip(mul, 0.0, 1.0))

n_frames    = int(round(total_dur * FPS))
tmp_overlay = tempfile.NamedTemporaryFile(suffix=".mov", delete=False).name

# Pipe raw RGBA frames → lossless alpha video
enc = subprocess.Popen(
    ["ffmpeg", "-y",
     "-f", "rawvideo", "-pix_fmt", "rgba",
     "-s", f"{VIDEO_W}x{VIDEO_H}", "-r", str(FPS), "-i", "pipe:0",
     "-c:v", "ffv1", "-pix_fmt", "yuva420p",
     tmp_overlay],
    stdin=subprocess.PIPE, stderr=subprocess.DEVNULL
)

print(f"Rendering {n_frames} overlay frames...")
frame_buf = np.zeros((VIDEO_H, VIDEO_W, 4), dtype=np.uint8)
for i in range(n_frames):
    t = i / FPS
    frame_buf[:] = 0  # clear to transparent
    for (text, start, end, y_off, fi, fo) in OVERLAYS:
        mul = fade_mul(t, start, end, fi, fo)
        if mul <= 0:
            continue
        img   = text_imgs[text]
        h_t   = img.shape[0]
        y_pos = VIDEO_H - y_off - h_t
        if y_pos < 0 or y_pos + h_t > VIDEO_H:
            continue
        # Composite text onto frame (alpha blend, only modifying alpha not RGB)
        src_a = img[:, :, 3:4].astype(np.float32) / 255.0 * mul
        src_r = img[:, :, :3].astype(np.float32)
        dst_a = frame_buf[y_pos:y_pos+h_t, :, 3:4].astype(np.float32) / 255.0
        dst_r = frame_buf[y_pos:y_pos+h_t, :, :3].astype(np.float32)
        out_a = src_a + dst_a * (1 - src_a)
        denom = np.where(out_a > 0, out_a, 1)
        out_r = (src_a * src_r + dst_a * (1 - src_a) * dst_r) / denom
        frame_buf[y_pos:y_pos+h_t, :, :3] = np.clip(out_r, 0, 255).astype(np.uint8)
        frame_buf[y_pos:y_pos+h_t, :,  3] = np.clip(out_a[:, :, 0] * 255, 0, 255).astype(np.uint8)
    enc.stdin.write(frame_buf.tobytes())

enc.stdin.close()
enc.wait()
print(f"Overlay video saved → {tmp_overlay}")

# Composite: overlay RGBA text track onto base video
print("Compositing...")
result = subprocess.run(
    ["ffmpeg", "-y",
     "-i", tmp_base,
     "-i", tmp_overlay,
     "-filter_complex", "[0:v][1:v]overlay=format=auto",
     "-c:a", "copy",
     OUTPUT],
    capture_output=True, text=True
)
if result.returncode != 0:
    print("ffmpeg stderr:", result.stderr[-2000:])
    raise RuntimeError("ffmpeg composite failed")

os.unlink(tmp_base)
os.unlink(tmp_overlay)
print(f"Done → {OUTPUT}")
