import type { Metadata } from "next";
import { CountryGuideGrid } from "@/components/visa-guide/country-guide-grid";
import { VisaCta } from "@/components/visa-guide/visa-cta";
import { VisaDisclaimer } from "@/components/visa-guide/visa-disclaimer";
import { VisaSubnav } from "@/components/visa-guide/visa-subnav";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { COUNTRY_VISA_GUIDES } from "@/data/visa-guide/countries";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Country-Specific European Visa Guides | ${BRAND.name}`,
  description:
    "Explore country-specific visa and residence overviews for Germany, Italy, France, Hungary, Netherlands, and Austria, with official ministry and immigration portals.",
};

export default function VisaCountriesPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <Badge variant="accent">{BRAND.name} · Visa Guide</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Country-Specific Guidance
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            European Country Visa Overviews
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Review EU and Schengen membership status separately alongside official foreign ministry,
            immigration authority, and visa portal links for each country.
          </Paragraph>
        </Container>
      </section>

      <VisaSubnav activeHref="/visa-guide/countries" />

      <CountryGuideGrid countries={COUNTRY_VISA_GUIDES} background="white" detailed showFilterBar />

      <VisaDisclaimer background="subtle" />
      <VisaCta />
    </>
  );
}
