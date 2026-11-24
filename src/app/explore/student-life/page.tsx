import type { Metadata } from "next";
import NextLink from "next/link";
import { ExploreBreadcrumbs } from "@/components/explore/explore-breadcrumbs";
import { ExploreCategoryNavigation } from "@/components/explore/explore-category-nav";
import { ExploreCta } from "@/components/explore/explore-cta";
import { ExploreExperienceCard } from "@/components/explore/explore-experience-card";
import { ExploreStoryCard } from "@/components/explore/explore-story-card";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
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
  title: `European Student Life & City Culture | ${BRAND.name}`,
  description:
    "Explore everyday student lifestyle, campus culture, libraries, and community routines across European university cities.",
  openGraph: {
    title: `European Student Life & City Culture | ${BRAND.name}`,
    description:
      "Discover student lifestyle, cultural routines, and university city life across Europe.",
    type: "website",
  },
};

export default function ExploreStudentLifePage() {
  const studentExperiences = EXPLORE_EXPERIENCES.filter((e) => e.category === "student-life");
  const studentStories = EXPLORE_STORIES.filter((s) => s.category === "student-life");

  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <ExploreBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Explore", href: "/explore" },
              { label: "Student Life" },
            ]}
            inverse
          />
          <Badge variant="accent">{BRAND.name} · Explore</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Campus Rhythm &amp; Community
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            Student Life in European Cities
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Discover everyday university life, student communities, public libraries, and cultural
            experiences across European cities.
          </Paragraph>
        </Container>
      </section>

      <ExploreCategoryNavigation
        categories={EXPLORE_CATEGORIES}
        activeHref="/explore/student-life"
      />

      <Section background="white" spacing="lg" aria-labelledby="student-life-heading">
        <Container>
          <Card variant="default" padding="md" className="bg-surface-subtle mb-8">
            <p className="text-text-secondary text-xs leading-relaxed">
              Looking for university admissions, degree programmes, scholarships, or application
              deadlines? Visit our dedicated{" "}
              <NextLink
                href="/study"
                className="text-brand-blue hover:text-brand-navy font-semibold underline underline-offset-4"
              >
                Study in Europe section
              </NextLink>
              .
            </p>
          </Card>

          <Eyebrow>Student Experiences &amp; Stories</Eyebrow>
          <Heading as="h2" id="student-life-heading" className="mt-2">
            Campus Culture &amp; Everyday Routines
          </Heading>
          <Paragraph className="mt-3 max-w-3xl">
            How students engage with European cities, cultural institutions, and shared campus
            spaces.
          </Paragraph>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {studentExperiences.map((exp) => (
              <ExploreExperienceCard key={exp.id} experience={exp} />
            ))}
            {studentStories.map((story) => (
              <ExploreStoryCard key={story.id} story={story} />
            ))}
          </div>
        </Container>
      </Section>

      <ExploreCta />
    </>
  );
}
