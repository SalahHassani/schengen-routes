import type { Metadata } from "next";
import { ExploreBreadcrumbs } from "@/components/explore/explore-breadcrumbs";
import { ExploreCategoryNavigation } from "@/components/explore/explore-category-nav";
import { ExploreCta } from "@/components/explore/explore-cta";
import { ExploreExperienceCard } from "@/components/explore/explore-experience-card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { EXPLORE_CATEGORIES } from "@/data/explore/categories";
import { EXPLORE_EXPERIENCES } from "@/data/explore/experiences";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Local European Experiences | ${BRAND.name}`,
  description:
    "Explore neighbourhood canal walks, boulevard strolls, Alpine scenery, and cultural routines across Europe.",
  openGraph: {
    title: `Local European Experiences | ${BRAND.name}`,
    description:
      "Discover local neighbourhoods, cultural activities, and distinctive experiences in Europe.",
    type: "website",
  },
};

export default function ExploreExperiencesPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <ExploreBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Explore", href: "/explore" },
              { label: "Local Experiences" },
            ]}
            inverse
          />
          <Badge variant="accent">{BRAND.name} · Explore</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Neighbourhoods &amp; Everyday Discovery
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            Local Experiences Across Europe
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Step beyond standard sightseeing checklists with neighbourhood walks, historic
            boulevards, lakeside landscapes, and student-quarter culture.
          </Paragraph>
        </Container>
      </section>

      <ExploreCategoryNavigation
        categories={EXPLORE_CATEGORIES}
        activeHref="/explore/experiences"
      />

      <Section background="white" spacing="lg" aria-labelledby="experiences-list-heading">
        <Container>
          <Eyebrow>Curated Experiences</Eyebrow>
          <Heading as="h2" id="experiences-list-heading" className="mt-2">
            Cultural &amp; Neighbourhood Experiences
          </Heading>
          <Paragraph className="mt-3 max-w-3xl">
            Select any experience card to view the full editorial note and official visitor
            resource.
          </Paragraph>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXPLORE_EXPERIENCES.map((experience) => (
              <ExploreExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </Container>
      </Section>

      <ExploreCta />
    </>
  );
}
