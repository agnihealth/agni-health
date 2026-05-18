"use client";

import { useState } from "react";
import { trackEvent } from "./Analytics";

interface EmailCaptureProps {
  source?: string;
  compact?: boolean;
}

export default function EmailCapture({
  source = "homepage_fence",
  compact = false,
}: EmailCaptureProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    trackEvent("email_capture", { source, email, hasQuestion: !!question });

    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "general", question }),
      });
    } catch {
      // silent — don't block the UX on API failure
    }

    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm">
        <svg className="w-4 h-4 text-[#d4a088]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        You&apos;re on the list. We&apos;ll be in touch.
      </div>
    );
  }

  if (!open) {
    return (
      <p className={`text-zinc-500 ${compact ? "text-sm" : "text-sm"}`}>
        Not ready yet?{" "}
        <button
          onClick={() => setOpen(true)}
          className="text-zinc-400 hover:text-white underline underline-offset-2 transition-colors"
        >
          Ask questions or join waitlist →
        </button>
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-3 text-left">
      <input
        type="email"
        inputMode="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="w-full px-4 py-3 rounded bg-[#0a1628] border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#d4a088] text-sm"
      />
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Any questions? (optional)"
        rows={3}
        className="w-full px-4 py-3 rounded bg-[#0a1628] border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#d4a088] text-sm resize-none"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 py-3 bg-[#d4a088] text-[#0a1628] rounded font-medium text-sm hover:bg-[#c4906c] transition-colors disabled:opacity-60"
        >
          {loading ? "..." : "Submit"}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="px-4 py-3 text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
