import type { Metadata } from "next";
import { CountryGrid } from "@/components/study/country-grid";
import { StudyCta } from "@/components/study/study-cta";
import { StudySubnav } from "@/components/study/study-subnav";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { STUDY_COUNTRIES } from "@/data/study/countries";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European Study Destinations & Countries | ${BRAND.name}`,
  description:
    "Explore higher-education systems, official national study portals, and degree structures across Germany, Italy, Hungary, France, Netherlands, and Austria.",
};

export default function StudyCountriesPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <Badge variant="accent">{BRAND.name} · Study</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Country Discovery
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            European Study Destinations
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-2xl text-slate-200">
            Review higher-education structures, official languages, key academic cities, and
            verified government study portals across European destinations.
          </Paragraph>
        </Container>
      </section>

      <StudySubnav activeHref="/study/countries" />

      <CountryGrid
        countries={STUDY_COUNTRIES}
        background="white"
        detailed
        title="Country Profiles & Official Portals"
        eyebrow="Verified Country Guidance"
        description="Each country profile includes official national education links and review dates. Always confirm programme-specific tuition and entry rules directly with your target institution."
      />

      <StudyCta />
    </>
  );
}
