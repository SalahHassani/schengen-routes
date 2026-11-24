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
  title: `European History & Heritage | ${BRAND.name}`,
  description:
    "Explore historic quarters, medieval bridges, coastal heritage sites, and historical landscapes across Europe.",
  openGraph: {
    title: `European History & Heritage | ${BRAND.name}`,
    description: "Discover historical places and enduring heritage sites across Europe.",
    type: "website",
  },
};

export default function ExploreHistoryPage() {
  const historyPlaces = EXPLORE_PLACES.filter((p) => p.category === "history");

  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <ExploreBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Explore", href: "/explore" },
              { label: "History & Heritage" },
            ]}
            inverse
          />
          <Badge variant="accent">{BRAND.name} · Explore</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Historical Places &amp; Continuity
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            European History &amp; Heritage
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Discover historic urban cores, river crossings, and heritage landmarks that reflect
            Europe&apos;s layered past.
          </Paragraph>
        </Container>
      </section>

      <ExploreCategoryNavigation categories={EXPLORE_CATEGORIES} activeHref="/explore/history" />

      <Section background="white" spacing="lg" aria-labelledby="history-places-heading">
        <Container>
          <Eyebrow>Heritage Locations</Eyebrow>
          <Heading as="h2" id="history-places-heading" className="mt-2">
            Historic Quarters &amp; Heritage Sites
          </Heading>
          <Paragraph className="mt-3 max-w-3xl">
            Historical locations documented with official tourism and cultural sources.
          </Paragraph>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {historyPlaces.map((place) => (
              <ExplorePlaceCard key={place.id} place={place} />
            ))}
          </div>
        </Container>
      </Section>

      <ExploreCta />
    </>
  );
}
