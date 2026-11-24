import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";

interface PlatformArea {
  number: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

const PLATFORM_AREAS: readonly PlatformArea[] = [
  {
    number: "01",
    title: "Study",
    description:
      "Discover universities, programmes, scholarships, and application deadlines across European study destinations.",
    href: "/study",
    linkLabel: "Explore Study",
  },
  {
    number: "02",
    title: "Visa Guide",
    description:
      "Understand visa categories, general application steps, country overviews, and document checklists with official source links.",
    href: "/visa-guide",
    linkLabel: "Open Visa Guide",
  },
  {
    number: "03",
    title: "Travel",
    description:
      "Explore European destinations, cities, suggested itineraries, transportation modes, and accommodation guidance.",
    href: "/travel",
    linkLabel: "Browse Travel",
  },
  {
    number: "04",
    title: "Explore",
    description:
      "Discover European culture, historic landmarks, culinary heritage, festivals, student life, and editorial stories.",
    href: "/explore",
    linkLabel: "Explore Europe",
  },
] as const;

export function AboutServices() {
  return (
    <Section
      id="what-we-help-you-discover"
      background="white"
      spacing="lg"
      aria-labelledby="about-services-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>What We Help You Discover</Eyebrow>
          <Heading as="h2" id="about-services-heading" className="mt-2">
            Four Integrated Areas of European Discovery
          </Heading>
          <Paragraph className="mt-3">
            Explore our four core sections directly to research education, visa procedures,
            practical travel, and cultural heritage.
          </Paragraph>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORM_AREAS.map((area) => (
            <Card
              key={area.title}
              variant="interactive"
              padding="lg"
              className="flex h-full flex-col"
            >
              <div className="flex items-center justify-between gap-2">
                <Badge variant="accent">Section {area.number}</Badge>
              </div>
              <Heading as="h3" size="h4" className="mt-3">
                {area.title}
              </Heading>
              <Paragraph size="sm" className="mt-2">
                {area.description}
              </Paragraph>
              <div className="border-border-subtle mt-auto pt-4 text-xs">
                <div className="border-t pt-3.5">
                  <NextLink
                    href={area.href}
                    className="font-heading text-brand-blue hover:text-brand-navy inline-flex items-center gap-1.5 font-semibold transition-colors"
                  >
                    <span>{area.linkLabel}</span>
                    <span aria-hidden="true">→</span>
                  </NextLink>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
