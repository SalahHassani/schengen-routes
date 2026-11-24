import type { Metadata } from "next";
import { ExploreBreadcrumbs } from "@/components/explore/explore-breadcrumbs";
import { ExploreCategoryNavigation } from "@/components/explore/explore-category-nav";
import { ExploreCta } from "@/components/explore/explore-cta";
import { ExploreExperienceCard } from "@/components/explore/explore-experience-card";
import { ExplorePlaceCard } from "@/components/explore/explore-place-card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { EXPLORE_CATEGORIES } from "@/data/explore/categories";
import { EXPLORE_EXPERIENCES } from "@/data/explore/experiences";
import { EXPLORE_PLACES } from "@/data/explore/places";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European Nature & Outdoor Landscapes | ${BRAND.name}`,
  description:
    "Explore Alpine lakes, mountain valleys, coastlines, and outdoor scenery across Europe with SchengeN Routes.",
  openGraph: {
    title: `European Nature & Outdoor Landscapes | ${BRAND.name}`,
    description: "Discover mountains, lakes, and natural landscapes across Europe.",
    type: "website",
  },
};

export default function ExploreNaturePage() {
  const naturePlaces = EXPLORE_PLACES.filter((p) => p.category === "nature");
  const natureExperiences = EXPLORE_EXPERIENCES.filter((e) => e.category === "nature");

  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <ExploreBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Explore", href: "/explore" },
              { label: "Nature & Outdoors" },
            ]}
            inverse
          />
          <Badge variant="accent">{BRAND.name} · Explore</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Mountains, Lakes &amp; Coastlines
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            European Nature &amp; Outdoor Landscapes
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Explore Alpine valleys, glacial mountain lakes, waterways, and dramatic coastlines
            across Europe.
          </Paragraph>
        </Container>
      </section>

      <ExploreCategoryNavigation categories={EXPLORE_CATEGORIES} activeHref="/explore/nature" />

      <Section background="white" spacing="lg" aria-labelledby="nature-places-heading">
        <Container>
          <Eyebrow>Natural Landscapes</Eyebrow>
          <Heading as="h2" id="nature-places-heading" className="mt-2">
            Alpine &amp; Outdoor Scenery
          </Heading>
          <Paragraph className="mt-3 max-w-3xl">
            Natural regions and outdoor experiences documented with official tourism portals.
          </Paragraph>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {naturePlaces.map((place) => (
              <ExplorePlaceCard key={place.id} place={place} />
            ))}
            {natureExperiences.map((exp) => (
              <ExploreExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </Container>
      </Section>

      <ExploreCta />
    </>
  );
}
