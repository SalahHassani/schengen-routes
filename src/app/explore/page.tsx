import type { Metadata } from "next";
import NextLink from "next/link";
import { CultureSection, type CultureThemeHighlight } from "@/components/explore/culture-section";
import { ExploreCategoryCard } from "@/components/explore/explore-category-card";
import { ExploreCategoryNavigation } from "@/components/explore/explore-category-nav";
import { ExploreCta } from "@/components/explore/explore-cta";
import { ExploreDirectory } from "@/components/explore/explore-directory";
import { ExploreHero } from "@/components/explore/explore-hero";
import { ExploreStoryCard } from "@/components/explore/explore-story-card";
import { FeaturedDiscoveries } from "@/components/explore/featured-discoveries";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { EXPLORE_CATEGORIES } from "@/data/explore/categories";
import { EXPLORE_EVENTS } from "@/data/explore/events";
import { EXPLORE_EXPERIENCES } from "@/data/explore/experiences";
import { EXPLORE_PLACES } from "@/data/explore/places";
import { EXPLORE_STORIES } from "@/data/explore/stories";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Explore Europe Beyond the Ordinary | ${BRAND.name}`,
  description:
    "Discover the cultures, stories, landmarks, food traditions, student life, and natural landscapes that make Europe extraordinary with SchengeN Routes.",
  openGraph: {
    title: `Explore Europe Beyond the Ordinary | ${BRAND.name}`,
    description:
      "Editorial discovery across European culture, landmarks, history, food, festivals, student life, nature, and local experiences.",
    type: "website",
  },
};

const CULTURE_HIGHLIGHTS: readonly CultureThemeHighlight[] = [
  {
    id: "theme-history-heritage",
    eyebrow: "History & Heritage",
    title: "Historic Quarters & Enduring Heritage",
    description:
      "Trace centuries of European urban evolution through Roman monuments, medieval bridges, and historic civic centres.",
    href: "/explore/history",
    linkLabel: "Explore History & Heritage",
  },
  {
    id: "theme-food-cuisine",
    eyebrow: "Food & Cuisine",
    title: "Regional Tables, Markets & Café Culture",
    description:
      "Experience seasonal produce, local markets, regional dishes, and unhurried café routines across European cities.",
    href: "/explore/food",
    linkLabel: "Explore Food & Cuisine",
  },
  {
    id: "theme-student-life",
    eyebrow: "Student Life",
    title: "Campus Rhythms & Everyday City Life",
    description:
      "See how students experience university districts, public libraries, cultural venues, and walkable neighbourhoods.",
    href: "/explore/student-life",
    linkLabel: "Explore Student Life",
  },
  {
    id: "theme-nature-outdoors",
    eyebrow: "Nature & Outdoors",
    title: "Alpine Valleys, Lakes & Coastal Scenery",
    description:
      "Discover mountain ranges, glacial waters, waterways, and outdoor trails shaped by Europe's varied geography.",
    href: "/explore/nature",
    linkLabel: "Explore Nature & Outdoors",
  },
] as const;

export default function ExplorePage() {
  const featuredPlaces = EXPLORE_PLACES.filter((place) => place.featured);
  const latestStories = EXPLORE_STORIES.slice(0, 3);

  return (
    <>
      <ExploreHero />
      <ExploreCategoryNavigation categories={EXPLORE_CATEGORIES} activeHref="/explore" />

      <Section
        id="explore-categories"
        background="white"
        spacing="lg"
        aria-labelledby="explore-categories-heading"
      >
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Explore Categories</Eyebrow>
            <Heading as="h2" id="explore-categories-heading" className="mt-2">
              Discover Europe by Theme &amp; Interest
            </Heading>
            <Paragraph className="mt-3">
              Browse cultural traditions, iconic landmarks, historical heritage, food culture,
              festivals, student life, nature, and local experiences.
            </Paragraph>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXPLORE_CATEGORIES.map((category) => (
              <ExploreCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </Container>
      </Section>

      <FeaturedDiscoveries places={featuredPlaces} background="subtle" />

      <CultureSection highlights={CULTURE_HIGHLIGHTS} background="white" />

      <ExploreDirectory
        categories={EXPLORE_CATEGORIES}
        places={EXPLORE_PLACES}
        stories={EXPLORE_STORIES}
        experiences={EXPLORE_EXPERIENCES}
        events={EXPLORE_EVENTS}
        background="subtle"
      />

      <Section
        id="explore-latest-stories"
        background="white"
        spacing="lg"
        aria-labelledby="explore-stories-heading"
      >
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <Eyebrow>Latest Stories</Eyebrow>
              <Heading as="h2" id="explore-stories-heading" className="mt-2">
                Editorial Stories &amp; Cultural Perspectives
              </Heading>
              <Paragraph className="mt-3">
                Thoughtful articles examining European urban spaces, student routines, and regional
                food traditions.
              </Paragraph>
            </div>
            <NextLink
              href="/explore/stories"
              className="font-heading text-brand-blue hover:text-brand-navy inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
            >
              <span>All Stories</span>
              <span aria-hidden="true">→</span>
            </NextLink>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestStories.map((story) => (
              <ExploreStoryCard key={story.id} story={story} />
            ))}
          </div>
        </Container>
      </Section>

      <ExploreCta />
    </>
  );
}
