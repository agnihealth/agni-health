import { PostHog } from 'posthog-node';

// Server-side PostHog client
// This bypasses ad blockers by sending events directly from the server

let posthogClient: PostHog | null = null;

export function getPostHogServer(): PostHog | null {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    return null;
  }

  if (!posthogClient) {
    posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      flushAt: 1, // Send immediately for real-time tracking
      flushInterval: 0,
    });
  }

  return posthogClient;
}

// Extract UTM and ad parameters from URL
export function extractMarketingParams(url: URL): Record<string, string> {
  const params: Record<string, string> = {};
  
  // UTM parameters
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id'];
  for (const key of utmKeys) {
    const value = url.searchParams.get(key);
    if (value) {
      params[key] = value;
    }
  }

  // Facebook click ID
  const fbclid = url.searchParams.get('fbclid');
  if (fbclid) {
    params.fbclid = fbclid;
    params.$initial_referrer_source = 'facebook';
  }

  // Google click ID
  const gclid = url.searchParams.get('gclid');
  if (gclid) {
    params.gclid = gclid;
    params.$initial_referrer_source = 'google';
  }

  return params;
}

// Track a server-side pageview
export async function trackServerPageview(
  distinctId: string,
  url: string,
  properties?: Record<string, unknown>
): Promise<void> {
  const posthog = getPostHogServer();
  if (!posthog) return;

  try {
    const parsedUrl = new URL(url);
    const marketingParams = extractMarketingParams(parsedUrl);

    posthog.capture({
      distinctId,
      event: '$pageview',
      properties: {
        $current_url: url,
        $pathname: parsedUrl.pathname,
        $host: parsedUrl.host,
        // Mark as server-side for debugging
        $lib: 'posthog-node',
        server_side: true,
        // Include marketing attribution
        ...marketingParams,
        ...properties,
      },
    });

    // Flush immediately
    await posthog.flush();
  } catch (error) {
    console.error('[PostHog Server] Error tracking pageview:', error);
  }
}

// Track a server-side event
export async function trackServerEvent(
  distinctId: string,
  event: string,
  properties?: Record<string, unknown>
): Promise<void> {
  const posthog = getPostHogServer();
  if (!posthog) return;

  try {
    posthog.capture({
      distinctId,
      event,
      properties: {
        $lib: 'posthog-node',
        server_side: true,
        ...properties,
      },
    });

    await posthog.flush();
  } catch (error) {
    console.error('[PostHog Server] Error tracking event:', error);
  }
}

// Shutdown (call on process exit)
export async function shutdownPostHog(): Promise<void> {
  if (posthogClient) {
    await posthogClient.shutdown();
    posthogClient = null;
  }
}
