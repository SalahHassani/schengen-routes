import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExploreArticleLayout } from "@/components/explore/explore-article-layout";
import { ExploreCta } from "@/components/explore/explore-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { EXPLORE_PLACES } from "@/data/explore/places";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/seo/structured-data";

interface LandmarkDetailPageProps {
  params: Promise<{ slug: string }>;
}

const LANDMARK_PLACES = EXPLORE_PLACES.filter((place) => place.category === "landmarks");

export function generateStaticParams() {
  return LANDMARK_PLACES.map((place) => ({ slug: place.slug }));
}

export async function generateMetadata({ params }: LandmarkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const place = LANDMARK_PLACES.find((item) => item.slug === slug);

  if (!place) {
    return buildPageMetadata({
      title: "Landmark Not Found",
      description: "The requested European landmark entry could not be found.",
      pathname: `/explore/landmarks/${slug}`,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: `${place.name} — European Landmarks`,
    description: place.description,
    pathname: `/explore/landmarks/${place.slug}`,
    ogType: "article",
    imagePath: place.image,
    imageAlt: place.imageAlt,
  });
}

export default async function LandmarkDetailPage({ params }: LandmarkDetailPageProps) {
  const { slug } = await params;
  const place = LANDMARK_PLACES.find((item) => item.slug === slug);

  if (!place) {
    notFound();
  }

  const locationLabel = place.city ? `${place.city}, ${place.country}` : place.country;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", pathname: "/" },
          { name: "Explore", pathname: "/explore" },
          { name: "Landmarks & Architecture", pathname: "/explore/landmarks" },
          { name: place.name, pathname: `/explore/landmarks/${place.slug}` },
        ])}
      />
      <ExploreArticleLayout
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Explore", href: "/explore" },
          { label: "Landmarks & Architecture", href: "/explore/landmarks" },
          { label: place.name },
        ]}
        eyebrow="Landmarks & Architecture"
        title={place.name}
        locationBadge={locationLabel}
        imageSrc={place.image}
        imageAlt={place.imageAlt}
        imageAspect="4/3"
        leadText={place.description}
        paragraphs={[place.description, place.significance]}
        highlightLabel="Cultural & Architectural Significance"
        highlightText={place.significance}
        sources={[place.source]}
        lastReviewed={place.lastReviewed}
        backHref="/explore/landmarks"
        backLabel="Back to All Landmarks"
      />
      <ExploreCta />
    </>
  );
}
