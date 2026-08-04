// Looks up the most recent unused gclid captured on /book, to correlate a
// genuine Healthie booking (received via Keragon webhook, no gclid attached)
// back to the ad click that likely drove it. Best-effort match by recency —
// acceptable given current low traffic volume (collisions across concurrent
// visitors within the same window are rare).

const PAT = process.env.AIRTABLE_PAT!;
const BASE_ID = process.env.AIRTABLE_BASE_ID!;
const GCLID_TABLE_ID = "tblB5byOkiAHv8ikW"; // GclidTracking

// How far back we'll look for a matching gclid capture relative to the
// booking webhook firing. Healthie bookings typically complete within
// minutes of landing on /book, but leave generous headroom.
const LOOKBACK_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

interface GclidRecord {
  id: string;
  gclid: string;
  capturedAt: string;
}

export async function findRecentUnusedGclid(): Promise<GclidRecord | null> {
  if (!PAT || !BASE_ID) return null;

  const cutoff = new Date(Date.now() - LOOKBACK_WINDOW_MS).toISOString();
  const filterFormula = encodeURIComponent(
    `AND({Used} = FALSE(), IS_AFTER({CapturedAt}, '${cutoff}'))`
  );

  const url = `https://api.airtable.com/v0/${BASE_ID}/${GCLID_TABLE_ID}?filterByFormula=${filterFormula}&sort[0][field]=CapturedAt&sort[0][direction]=desc&maxRecords=1`;

  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${PAT}` },
    });
    if (!res.ok) {
      console.error("Airtable gclid lookup failed:", await res.text());
      return null;
    }
    const json = await res.json();
    const record = json.records?.[0];
    if (!record) return null;

    return {
      id: record.id,
      gclid: record.fields.Gclid,
      capturedAt: record.fields.CapturedAt,
    };
  } catch (err) {
    console.error("Airtable gclid lookup error:", err);
    return null;
  }
}

export async function markGclidUsed(recordId: string): Promise<void> {
  if (!PAT || !BASE_ID) return;
  try {
    await fetch(`https://api.airtable.com/v0/${BASE_ID}/${GCLID_TABLE_ID}/${recordId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${PAT}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields: { Used: true } }),
    });
  } catch (err) {
    console.error("Airtable markGclidUsed error:", err);
  }
}
