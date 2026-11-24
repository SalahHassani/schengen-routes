import { createHash } from "node:crypto";

export interface RateLimitResult {
  allowed: boolean;
  remaining?: number;
  retryAfterSeconds?: number;
  mode: "distributed" | "local-fallback";
}

const LOCAL_WINDOW_MS = 15 * 60 * 1000;
const LOCAL_MAX_REQUESTS = 10;

interface LocalEntry {
  count: number;
  resetAt: number;
}

const localStore = new Map<string, LocalEntry>();

export function hashClientIdentifier(rawIp: string | null): string {
  const salt = process.env.ENQUIRY_HASH_SALT || "schengen-routes-m9-default-salt";
  const source = rawIp && rawIp.trim().length > 0 ? rawIp.trim() : "unknown-client";
  return createHash("sha256").update(`${salt}:${source}`).digest("hex").slice(0, 24);
}

export function extractClientIp(headers: Headers): string | null {
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    const first = forwardedFor.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = headers.get("x-real-ip")?.trim();
  return realIp || null;
}

export async function checkEnquiryRateLimit(clientKeyHash: string): Promise<RateLimitResult> {
  const providerUrl = process.env.RATE_LIMIT_PROVIDER_URL?.trim();
  const providerToken = process.env.RATE_LIMIT_PROVIDER_TOKEN?.trim();

  if (providerUrl) {
    try {
      const response = await fetch(providerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(providerToken ? { Authorization: `Bearer ${providerToken}` } : {}),
        },
        body: JSON.stringify({
          key: `enquiry:${clientKeyHash}`,
          maxRequests: LOCAL_MAX_REQUESTS,
          windowSeconds: 900,
        }),
        signal: AbortSignal.timeout(3000),
      });

      if (response.ok) {
        const data = (await response.json()) as {
          allowed?: boolean;
          remaining?: number;
          retryAfterSeconds?: number;
        };
        return {
          allowed: data.allowed !== false,
          remaining: data.remaining,
          retryAfterSeconds: data.retryAfterSeconds,
          mode: "distributed",
        };
      }
    } catch {
      // Fall through to local bounded fallback without exposing provider internals.
    }
  }

  const now = Date.now();
  for (const [key, entry] of localStore.entries()) {
    if (entry.resetAt <= now) {
      localStore.delete(key);
    }
  }

  const existing = localStore.get(clientKeyHash);
  if (!existing || existing.resetAt <= now) {
    localStore.set(clientKeyHash, { count: 1, resetAt: now + LOCAL_WINDOW_MS });
    return {
      allowed: true,
      remaining: LOCAL_MAX_REQUESTS - 1,
      mode: "local-fallback",
    };
  }

  if (existing.count >= LOCAL_MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
      mode: "local-fallback",
    };
  }

  existing.count += 1;
  return {
    allowed: true,
    remaining: LOCAL_MAX_REQUESTS - existing.count,
    mode: "local-fallback",
  };
}
