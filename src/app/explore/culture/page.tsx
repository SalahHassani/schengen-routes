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
  title: `European Culture & Traditions | ${BRAND.name}`,
  description:
    "Explore European cultural traditions, civic heritage, languages, and everyday creative life with SchengeN Routes.",
  openGraph: {
    title: `European Culture & Traditions | ${BRAND.name}`,
    description: "Discover cultural traditions, arts, and neighbourhood heritage across Europe.",
    type: "website",
  },
};

export default function ExploreCulturePage() {
  const culturePlaces = EXPLORE_PLACES.filter((p) => p.category === "culture");
  const cultureExperiences = EXPLORE_EXPERIENCES.filter(
    (e) => e.category === "culture" || e.category === "experiences"
  );

  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <ExploreBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Explore", href: "/explore" },
              { label: "Culture & Traditions" },
            ]}
            inverse
          />
          <Badge variant="accent">{BRAND.name} · Explore</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Cultural Traditions &amp; Arts
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            Culture &amp; Traditions Across Europe
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            European culture is shaped by distinct regional languages, architectural traditions,
            music, and daily civic life across neighbouring cities and countries.
          </Paragraph>
        </Container>
      </section>

      <ExploreCategoryNavigation categories={EXPLORE_CATEGORIES} activeHref="/explore/culture" />

      <Section background="white" spacing="lg" aria-labelledby="culture-places-heading">
        <Container>
          <Eyebrow>Cultural Centres</Eyebrow>
          <Heading as="h2" id="culture-places-heading" className="mt-2">
            Places Rooted in Cultural Heritage
          </Heading>
          <Paragraph className="mt-3 max-w-3xl">
            Cities and cultural districts that preserve artistic, musical, and civic traditions.
          </Paragraph>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {culturePlaces.map((place) => (
              <ExplorePlaceCard key={place.id} place={place} />
            ))}
          </div>

          <div className="mt-12">
            <Eyebrow>Cultural Experiences</Eyebrow>
            <Heading as="h2" className="mt-2">
              Everyday Cultural &amp; Neighbourhood Experiences
            </Heading>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cultureExperiences.map((exp) => (
                <ExploreExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <ExploreCta />
    </>
  );
}
