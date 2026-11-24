import type { Metadata } from "next";
import { ExploreBreadcrumbs } from "@/components/explore/explore-breadcrumbs";
import { ExploreCategoryNavigation } from "@/components/explore/explore-category-nav";
import { ExploreCta } from "@/components/explore/explore-cta";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { EXPLORE_CATEGORIES } from "@/data/explore/categories";
import { EXPLORE_EVENTS } from "@/data/explore/events";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European Festivals & Cultural Traditions | ${BRAND.name}`,
  description:
    "Explore seasonal celebrations, music traditions, and cultural gatherings across European cities.",
  openGraph: {
    title: `European Festivals & Cultural Traditions | ${BRAND.name}`,
    description: "Discover seasonal cultural traditions and music heritage across Europe.",
    type: "website",
  },
};

export default function ExploreFestivalsPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <ExploreBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Explore", href: "/explore" },
              { label: "Festivals & Events" },
            ]}
            inverse
          />
          <Badge variant="accent">{BRAND.name} · Explore</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Seasonal &amp; Cultural Gatherings
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            Festivals &amp; Cultural Traditions
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Explore seasonal markets, musical seasons, and cultural traditions across Europe. Always
            verify current seasonal dates directly with official tourism or event portals.
          </Paragraph>
        </Container>
      </section>

      <ExploreCategoryNavigation categories={EXPLORE_CATEGORIES} activeHref="/explore/festivals" />

      <Section background="white" spacing="lg" aria-labelledby="festivals-list-heading">
        <Container>
          <Eyebrow>Cultural &amp; Seasonal Traditions</Eyebrow>
          <Heading as="h2" id="festivals-list-heading" className="mt-2">
            Recurring Cultural &amp; Seasonal Traditions
          </Heading>
          <Paragraph className="mt-3 max-w-3xl">
            Unverified dates are intentionally omitted; check linked official sources for current
            seasonal schedules.
          </Paragraph>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXPLORE_EVENTS.map((ev) => (
              <Card key={ev.id} variant="default" padding="lg" className="flex h-full flex-col">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="accent">{ev.country}</Badge>
                  <span className="text-text-muted text-xs">Tradition</span>
                </div>
                <Heading as="h3" size="h4" className="mt-3">
                  {ev.title}
                </Heading>
                <p className="text-text-secondary mt-1 text-xs font-medium">{ev.location}</p>
                <Paragraph size="sm" className="mt-2">
                  {ev.description}
                </Paragraph>
                {ev.eventDate ? (
                  <p className="text-brand-blue mt-3 text-xs font-semibold">
                    Verified Date: {ev.eventDate}
                  </p>
                ) : null}
                <div className="border-border-subtle mt-auto pt-4 text-xs">
                  <div className="flex items-center justify-between gap-2 border-t pt-3">
                    <span className="text-text-muted text-[11px]">Reviewed {ev.lastReviewed}</span>
                    <a
                      href={ev.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-brand-navy font-semibold underline underline-offset-4"
                    >
                      Official Source ↗
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <ExploreCta />
    </>
  );
}
