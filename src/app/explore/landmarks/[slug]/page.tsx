import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExploreArticleLayout } from "@/components/explore/explore-article-layout";
import { ExploreCta } from "@/components/explore/explore-cta";
import { EXPLORE_PLACES } from "@/data/explore/places";
import { BRAND } from "@/lib/constants";

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
    return {
      title: `Landmark Not Found | ${BRAND.name}`,
    };
  }

  return {
    title: `${place.name} — European Landmarks | ${BRAND.name}`,
    description: place.description,
    openGraph: {
      title: `${place.name} | ${BRAND.name}`,
      description: place.description,
      type: "article",
    },
  };
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
