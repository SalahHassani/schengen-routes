import type { Metadata } from "next";
import { ExploreBreadcrumbs } from "@/components/explore/explore-breadcrumbs";
import { ExploreCategoryNavigation } from "@/components/explore/explore-category-nav";
import { ExploreCta } from "@/components/explore/explore-cta";
import { ExploreExperienceCard } from "@/components/explore/explore-experience-card";
import { ExploreStoryCard } from "@/components/explore/explore-story-card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { EXPLORE_CATEGORIES } from "@/data/explore/categories";
import { EXPLORE_EXPERIENCES } from "@/data/explore/experiences";
import { EXPLORE_STORIES } from "@/data/explore/stories";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European Food & Culinary Culture | ${BRAND.name}`,
  description:
    "Explore European food traditions, neighbourhood cafés, local markets, and regional culinary culture.",
  openGraph: {
    title: `European Food & Culinary Culture | ${BRAND.name}`,
    description: "Discover regional food culture, cafés, and culinary traditions across Europe.",
    type: "website",
  },
};

export default function ExploreFoodPage() {
  const foodExperiences = EXPLORE_EXPERIENCES.filter((e) => e.category === "food");
  const foodStories = EXPLORE_STORIES.filter((s) => s.category === "food");

  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <ExploreBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Explore", href: "/explore" },
              { label: "Food & Cuisine" },
            ]}
            inverse
          />
          <Badge variant="accent">{BRAND.name} · Explore</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Culinary Traditions &amp; Café Life
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            European Food &amp; Culinary Culture
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Explore regional culinary traditions, local markets, and neighbourhood café routines
            across European cities.
          </Paragraph>
        </Container>
      </section>

      <ExploreCategoryNavigation categories={EXPLORE_CATEGORIES} activeHref="/explore/food" />

      <Section background="white" spacing="lg" aria-labelledby="food-culture-heading">
        <Container>
          <Eyebrow>Culinary Experiences &amp; Stories</Eyebrow>
          <Heading as="h2" id="food-culture-heading" className="mt-2">
            Cafés, Markets &amp; Regional Traditions
          </Heading>
          <Paragraph className="mt-3 max-w-3xl">
            Curated culinary experiences and editorial perspectives on European food culture.
          </Paragraph>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {foodExperiences.map((exp) => (
              <ExploreExperienceCard key={exp.id} experience={exp} />
            ))}
            {foodStories.map((story) => (
              <ExploreStoryCard key={story.id} story={story} />
            ))}
          </div>
        </Container>
      </Section>

      <ExploreCta />
    </>
  );
}
