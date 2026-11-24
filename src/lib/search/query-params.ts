export function sanitizeParam(value: string | null | undefined, fallback = "all"): string {
  if (!value) return fallback;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : fallback;
}

export function sanitizeEnumParam<T extends string>(
  value: string | null | undefined,
  allowed: readonly T[],
  fallback: T
): T {
  if (!value) return fallback;
  const trimmed = value.trim();
  return (allowed as readonly string[]).includes(trimmed) ? (trimmed as T) : fallback;
}

export function buildSearchQueryString(params: Record<string, string | undefined>): string {
  const searchParams = new URLSearchParams();
  for (const [key, rawValue] of Object.entries(params)) {
    const val = rawValue?.trim();
    if (!val || val.toLowerCase() === "all") continue;
    searchParams.set(key, val);
  }
  const encoded = searchParams.toString();
  return encoded ? `?${encoded}` : "";
}
