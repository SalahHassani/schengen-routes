import { buildCanonicalUrl } from "@/lib/seo/canonical";
import { getConfiguredSiteOrigin, SEO_CONFIG } from "@/lib/seo/config";

export interface BreadcrumbEntry {
  name: string;
  pathname: string;
}

export function buildOrganizationJsonLd(): Record<string, unknown> {
  const origin = getConfiguredSiteOrigin();
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SEO_CONFIG.brandName,
    description: SEO_CONFIG.defaultDescription,
    email: `mailto:${SEO_CONFIG.contactEmail}`,
    sameAs: [...SEO_CONFIG.socialUrls],
  };
  if (origin) {
    data.url = origin.toString();
  }
  return data;
}

export function buildWebSiteJsonLd(): Record<string, unknown> | null {
  const origin = getConfiguredSiteOrigin();
  if (!origin) return null;

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SEO_CONFIG.brandName,
    url: origin.toString(),
    description: SEO_CONFIG.defaultDescription,
  };
}

export function buildBreadcrumbJsonLd(items: readonly BreadcrumbEntry[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: buildCanonicalUrl(item.pathname),
    })),
  };
}

export function buildArticleJsonLd(input: {
  headline: string;
  description: string;
  pathname: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}): Record<string, unknown> {
  const node: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    mainEntityOfPage: buildCanonicalUrl(input.pathname),
    publisher: {
      "@type": "Organization",
      name: SEO_CONFIG.brandName,
    },
  };
  if (input.datePublished) node.datePublished = input.datePublished;
  if (input.dateModified) node.dateModified = input.dateModified;
  if (input.authorName) {
    node.author = {
      "@type": "Person",
      name: input.authorName,
    };
  }
  return node;
}
