import type { Metadata } from "next";
import { ExploreBreadcrumbs } from "@/components/explore/explore-breadcrumbs";
import { ExploreCategoryNavigation } from "@/components/explore/explore-category-nav";
import { ExploreCta } from "@/components/explore/explore-cta";
import { ExplorePlaceCard } from "@/components/explore/explore-place-card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { EXPLORE_CATEGORIES } from "@/data/explore/categories";
import { EXPLORE_PLACES } from "@/data/explore/places";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European Landmarks & Architecture | ${BRAND.name}`,
  description:
    "Explore notable European monuments, riverfront architecture, and historic landmarks with source links.",
  openGraph: {
    title: `European Landmarks & Architecture | ${BRAND.name}`,
    description: "Discover architectural landmarks and monuments across European cities.",
    type: "website",
  },
};

export default function ExploreLandmarksPage() {
  const landmarkPlaces = EXPLORE_PLACES.filter((p) => p.category === "landmarks");

  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <ExploreBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Explore", href: "/explore" },
              { label: "Landmarks & Architecture" },
            ]}
            inverse
          />
          <Badge variant="accent">{BRAND.name} · Explore</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Monuments &amp; Architectural Form
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            European Landmarks &amp; Architecture
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Explore iconic monuments and riverfront architectural landmarks across Europe, backed by
            official cultural and tourism sources.
          </Paragraph>
        </Container>
      </section>

      <ExploreCategoryNavigation categories={EXPLORE_CATEGORIES} activeHref="/explore/landmarks" />

      <Section background="white" spacing="lg" aria-labelledby="landmarks-list-heading">
        <Container>
          <Eyebrow>Featured Landmarks</Eyebrow>
          <Heading as="h2" id="landmarks-list-heading" className="mt-2">
            Architectural &amp; Civic Landmarks
          </Heading>
          <Paragraph className="mt-3 max-w-3xl">
            Select any landmark card to read its full editorial note and official reference link.
          </Paragraph>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {landmarkPlaces.map((place) => (
              <ExplorePlaceCard key={place.id} place={place} />
            ))}
          </div>
        </Container>
      </Section>

      <ExploreCta />
    </>
  );
}
