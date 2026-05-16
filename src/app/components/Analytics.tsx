'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, Suspense } from 'react';
import Script from 'next/script';

// Meta Pixel ID
const META_PIXEL_ID = '1713148253376763';

// Anonymous session ID for HIPAA-safe analytics
// Generates a random ID on first visit, persists in cookie for 1 year
const ANON_ID_KEY = 'agni_anon_id';
const ANON_ID_EXPIRY_DAYS = 365;

function generateAnonId(): string {
  return 'anon_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

export function getAnonId(): string {
  if (typeof window === 'undefined') return 'server';
  
  let anonId = getCookie(ANON_ID_KEY);
  if (!anonId) {
    anonId = generateAnonId();
    setCookie(ANON_ID_KEY, anonId, ANON_ID_EXPIRY_DAYS);
  }
  return anonId;
}

// Get hero variant from localStorage (set by HeroImage component)
export function getHeroVariant(): string | null {
  if (typeof window === 'undefined') return null;
  const variant = localStorage.getItem('agni-hero-variant');
  return variant ? `v${parseInt(variant) + 1}` : null;
}

// Initialize PostHog with anonymous ID
if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  const anonId = getAnonId();
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
    person_profiles: 'always',
    capture_pageview: true, // Auto-capture handles initial load + UTM params
    capture_pageleave: true,
    capture_scroll_depth: true,
    bootstrap: {
      distinctID: anonId,
    },
  } as Parameters<typeof posthog.init>[1]);
}

// Meta Pixel helper
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: unknown;
  }
}

export function trackMetaEvent(event: string, data?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', event, data);
  }
}

// Track pageviews on SPA route changes (initial load handled by auto-capture)
function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip first render — auto-capture handles initial pageview with UTM params
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (pathname && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url += '?' + searchParams.toString();
      }
      posthog.capture('$pageview', { $current_url: url });
    }
  }, [pathname, searchParams]);

  return null;
}

// Analytics event helper
export function trackEvent(event: string, properties?: Record<string, unknown>) {
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.capture(event, properties);
  }
  // Also log to console in dev
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] ${event}`, properties);
  }
}

// A/B test tracking
export function trackExperiment(experimentName: string, variant: string | number) {
  trackEvent('ab_test_assigned', {
    experiment_name: experimentName,
    variant,
  });
}

// Conversion tracking
export function trackConversion(goal: string, properties?: Record<string, unknown>) {
  trackEvent('conversion', {
    goal,
    ...properties,
  });
}

// Meta Pixel Script component
function MetaPixel() {
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

// Provider component
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      <MetaPixel />
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      {children}
    </PostHogProvider>
  );
}

export { posthog };
