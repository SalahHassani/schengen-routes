import type { Metadata } from "next";
import { ExploreBreadcrumbs } from "@/components/explore/explore-breadcrumbs";
import { ExploreCategoryNavigation } from "@/components/explore/explore-category-nav";
import { ExploreCta } from "@/components/explore/explore-cta";
import { ExploreStoryCard } from "@/components/explore/explore-story-card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { EXPLORE_CATEGORIES } from "@/data/explore/categories";
import { EXPLORE_STORIES } from "@/data/explore/stories";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European Stories & Cultural Essays | ${BRAND.name}`,
  description:
    "Read editorial stories and essays on European urban waterways, student life, markets, and food culture.",
  openGraph: {
    title: `European Stories & Cultural Essays | ${BRAND.name}`,
    description: "Editorial essays and cultural discoveries across Europe from SchengeN Routes.",
    type: "website",
  },
};

export default function ExploreStoriesPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <ExploreBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Explore", href: "/explore" },
              { label: "Stories" },
            ]}
            inverse
          />
          <Badge variant="accent">{BRAND.name} · Explore</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Editorial Magazine
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            European Stories &amp; Cultural Perspectives
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Original editorial pieces exploring how European cities, student life, and culinary
            customs shape everyday experiences.
          </Paragraph>
        </Container>
      </section>

      <ExploreCategoryNavigation categories={EXPLORE_CATEGORIES} activeHref="/explore/stories" />

      <Section background="white" spacing="lg" aria-labelledby="stories-list-heading">
        <Container>
          <Eyebrow>Editorial Archive</Eyebrow>
          <Heading as="h2" id="stories-list-heading" className="mt-2">
            Latest Stories &amp; Essays
          </Heading>
          <Paragraph className="mt-3 max-w-3xl">
            Every story includes publication/update dates and links to authoritative references.
          </Paragraph>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {EXPLORE_STORIES.map((story) => (
              <ExploreStoryCard key={story.id} story={story} />
            ))}
          </div>
        </Container>
      </Section>

      <ExploreCta />
    </>
  );
}
