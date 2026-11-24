import { getConfiguredSiteOrigin } from "@/lib/seo/config";

export function normalizePathname(pathname: string): string {
  const trimmed = pathname.trim();
  if (!trimmed || trimmed === "/") return "/";
  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  const withoutQuery = withLeadingSlash.split("?")[0].split("#")[0];
  if (withoutQuery === "/") return "/";
  return withoutQuery.replace(/\/+$/, "") || "/";
}

/**
 * Returns an absolute canonical URL when NEXT_PUBLIC_SITE_URL is configured,
 * or a clean normalized relative path when no public production origin is set.
 */
export function buildCanonicalUrl(pathname: string): string {
  const cleanPath = normalizePathname(pathname);
  const origin = getConfiguredSiteOrigin();
  if (!origin) {
    return cleanPath;
  }
  return new URL(cleanPath, origin).toString();
}
