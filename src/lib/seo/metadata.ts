import type { Metadata } from "next";
import { buildCanonicalUrl, normalizePathname } from "@/lib/seo/canonical";
import { getConfiguredSiteOrigin, SEO_CONFIG } from "@/lib/seo/config";

export interface PageMetadataInput {
  title: string;
  description: string;
  pathname: string;
  noIndex?: boolean;
  ogType?: "website" | "article";
  imagePath?: string;
  imageAlt?: string;
}

export function buildRootMetadata(): Metadata {
  const origin = getConfiguredSiteOrigin();
  const imageUrl = origin
    ? new URL(SEO_CONFIG.defaultOgImagePath, origin).toString()
    : SEO_CONFIG.defaultOgImagePath;

  return {
    ...(origin ? { metadataBase: origin } : {}),
    title: {
      default: SEO_CONFIG.defaultTitle,
      template: SEO_CONFIG.titleTemplate,
    },
    description: SEO_CONFIG.defaultDescription,
    openGraph: {
      type: "website",
      siteName: SEO_CONFIG.brandName,
      title: SEO_CONFIG.defaultTitle,
      description: SEO_CONFIG.defaultDescription,
      images: [{ url: imageUrl, alt: `${SEO_CONFIG.brandName} — ${SEO_CONFIG.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: SEO_CONFIG.defaultTitle,
      description: SEO_CONFIG.defaultDescription,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildPageMetadata(input: PageMetadataInput): Metadata {
  const canonical = buildCanonicalUrl(input.pathname);
  const path = normalizePathname(input.pathname);
  const origin = getConfiguredSiteOrigin();
  const rawImage = input.imagePath || SEO_CONFIG.defaultOgImagePath;
  const resolvedImage =
    rawImage.startsWith("http://") || rawImage.startsWith("https://")
      ? rawImage
      : origin
        ? new URL(rawImage.startsWith("/") ? rawImage : `/${rawImage}`, origin).toString()
        : rawImage.startsWith("/")
          ? rawImage
          : `/${rawImage}`;

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: origin ? canonical : path,
    },
    openGraph: {
      type: input.ogType ?? "website",
      siteName: SEO_CONFIG.brandName,
      title: input.title,
      description: input.description,
      url: canonical,
      images: [
        {
          url: resolvedImage,
          alt: input.imageAlt ?? `${input.title} | ${SEO_CONFIG.brandName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [resolvedImage],
    },
    robots: input.noIndex ? { index: false, follow: true } : { index: true, follow: true },
  };
}
