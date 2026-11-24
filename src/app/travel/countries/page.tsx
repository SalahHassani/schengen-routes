import type { Metadata } from "next";
import Image from "next/image";
import { TravelCta } from "@/components/travel/travel-cta";
import { TravelSubnav } from "@/components/travel/travel-subnav";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { TRAVEL_COUNTRY_GUIDES } from "@/data/travel/countries";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European Country Travel Guides | ${BRAND.name}`,
  description:
    "Explore country-level European travel overviews covering currency, languages, transportation systems, practical advice, and official tourism portals.",
};

export default function TravelCountriesPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <Badge variant="accent">{BRAND.name} · Travel</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Country Guides
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            European Country Travel Overviews
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Review essential country travel context—including main destinations, important cities,
            currency, languages, transport networks, and official national tourism boards.
          </Paragraph>
        </Container>
      </section>

      <TravelSubnav activeHref="/travel/countries" />

      <Section background="white" spacing="lg" aria-labelledby="travel-countries-heading">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Country Profiles</Eyebrow>
            <Heading as="h2" id="travel-countries-heading" className="mt-2">
              Country-by-Country Travel Reference
            </Heading>
            <Paragraph className="mt-3">
              Each country guide summarises core visitor basics and links directly to the
              destination&apos;s official national tourism portal.
            </Paragraph>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {TRAVEL_COUNTRY_GUIDES.map((country) => (
              <Card
                key={country.slug}
                variant="default"
                padding="none"
                className="flex h-full flex-col overflow-hidden"
              >
                <div className="bg-surface-subtle relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={country.imageSrc}
                    alt={country.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-2">
                    <Heading as="h3" size="h4">
                      {country.name}
                    </Heading>
                    <Badge variant="default">{country.region}</Badge>
                  </div>

                  <Paragraph size="sm" className="mt-2.5">
                    {country.introduction}
                  </Paragraph>

                  <div className="text-text-secondary mt-4 space-y-2 text-xs">
                    <div>
                      <span className="font-heading text-text-primary font-semibold">
                        Main Destinations:{" "}
                      </span>
                      <span>{country.mainDestinations.join(" · ")}</span>
                    </div>
                    <div>
                      <span className="font-heading text-text-primary font-semibold">
                        Important Cities:{" "}
                      </span>
                      <span>{country.importantCities.join(", ")}</span>
                    </div>
                    <div>
                      <span className="font-heading text-text-primary font-semibold">
                        Transport Overview:{" "}
                      </span>
                      <span>{country.transportationOverview}</span>
                    </div>
                    <div>
                      <span className="font-heading text-text-primary font-semibold">
                        Currency &amp; Language:{" "}
                      </span>
                      <span>
                        {country.currencyInfo} {country.languageInfo}
                      </span>
                    </div>
                    <div>
                      <span className="font-heading text-text-primary font-semibold">
                        Practical Notes:{" "}
                      </span>
                      <span>{country.practicalTravelInfo.join(" ")}</span>
                    </div>
                  </div>

                  <div className="border-border-subtle mt-auto pt-4 text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-3">
                      <span className="text-text-muted text-[11px]">
                        Last reviewed: {country.lastReviewed}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {country.officialTourismSources.map((src) => (
                          <a
                            key={src.url}
                            href={src.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-blue hover:text-brand-navy font-semibold underline underline-offset-4"
                          >
                            {src.authority} ↗
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <TravelCta />
    </>
  );
}
