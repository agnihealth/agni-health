"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    // Disable PostHog if declined
    if (typeof window !== "undefined" && (window as any).posthog) {
      (window as any).posthog.opt_out_capturing();
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-zinc-900/95 border-t border-zinc-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-400 text-center sm:text-left">
          We use cookies to analyze site usage and improve your experience.{" "}
          <Link href="/privacy" className="underline hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </p>
        <div className="flex gap-3">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm bg-[#d4a088] text-[#0a1628] rounded-lg font-medium hover:bg-[#e0b199] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
