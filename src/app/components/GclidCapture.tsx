"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

/**
 * Captures gclid from URL and stores in sessionStorage for persistence
 * across navigation (e.g., homepage → /start → /book).
 * This component is invisible and just handles the capture side-effect.
 */
function GclidCaptureContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const gclid = searchParams.get("gclid");
    if (gclid) {
      sessionStorage.setItem("gclid", gclid);
    }
  }, [searchParams]);

  return null;
}

export function GclidCapture() {
  return (
    <Suspense fallback={null}>
      <GclidCaptureContent />
    </Suspense>
  );
}
