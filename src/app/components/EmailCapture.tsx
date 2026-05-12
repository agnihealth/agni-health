"use client";

import { useState } from "react";
import { trackEvent } from "./Analytics";

interface EmailCaptureProps {
  source?: string;
  heading?: string;
  subtext?: string;
  compact?: boolean;
}

export default function EmailCapture({
  source = "homepage_fence",
  heading = "Not ready to book? Stay in the loop.",
  subtext = "Get updates on new research, availability, and what South Asian metabolic care actually looks like.",
  compact = false,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    trackEvent("email_capture", { source, email });

    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "general" }),
      });
    } catch {
      // silent — don't block the UX on API failure
    }

    setSubmitted(true);
    setLoading(false);
  };

  const compactHeading = "Not ready to book yet? Get updates on availability.";

  return (
    <div className="max-w-xl mx-auto text-center">
      <h3 className={`font-semibold mb-2 ${compact ? "text-base" : "text-xl"}`}>
        {compact ? compactHeading : heading}
      </h3>
      {!compact && <p className="text-zinc-400 text-sm mb-6">{subtext}</p>}

      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 rounded bg-[#0a1628] border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#d4a088] text-sm"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-3 bg-[#d4a088] text-[#0a1628] rounded font-medium text-sm hover:bg-[#c4906c] transition-colors disabled:opacity-60"
          >
            {loading ? "..." : "Notify me"}
          </button>
        </form>
      ) : (
        <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm">
          <svg className="w-4 h-4 text-[#d4a088]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          You're on the list. We'll be in touch.
        </div>
      )}
    </div>
  );
}
