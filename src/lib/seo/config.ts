import { BRAND, CONTACT, SOCIAL_LINKS } from "@/lib/constants";

export interface SeoSiteConfig {
  brandName: string;
  tagline: string;
  serviceLine: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  contactEmail: string;
  socialUrls: readonly string[];
  defaultOgImagePath: string;
}

export const SEO_CONFIG: SeoSiteConfig = {
  brandName: BRAND.name,
  tagline: BRAND.tagline,
  serviceLine: BRAND.serviceLine,
  defaultTitle: `${BRAND.name} — ${BRAND.tagline}`,
  titleTemplate: `%s | ${BRAND.name}`,
  defaultDescription:
    "Explore European higher education, Schengen and national visa guidance, practical travel planning, and cultural discovery across Europe.",
  contactEmail: CONTACT.email,
  socialUrls: [SOCIAL_LINKS.instagram.url, SOCIAL_LINKS.facebook.url, SOCIAL_LINKS.tiktok.url],
  defaultOgImagePath: "/images/og-default.png",
};

/**
 * Returns a normalized origin (e.g. "https://example.org") only when
 * NEXT_PUBLIC_SITE_URL is explicitly configured with http(s).
 * Never fabricates a domain or treats localhost as a production canonical domain.
 */
export function getConfiguredSiteOrigin(): URL | null {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return null;

  try {
    const parsed = new URL(raw);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return null;
    }
    const hostname = parsed.hostname.toLowerCase();
    if (hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1") {
      return null;
    }
    return new URL(parsed.origin);
  } catch {
    return null;
  }
}
