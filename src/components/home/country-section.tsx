import { CountryCard } from "@/components/home/country-card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { FEATURED_COUNTRIES } from "@/data/countries";

export function CountrySection() {
  return (
    <Section id="countries" background="white" spacing="lg" aria-labelledby="countries-heading">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Country Discovery</Eyebrow>
          <Heading as="h2" id="countries-heading" className="mt-2">
            Explore European Countries
          </Heading>
          <Paragraph className="mt-3">
            Begin discovering prominent European study and travel destinations across the Schengen
            area, each offering distinct academic traditions and cultural experiences.
          </Paragraph>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_COUNTRIES.map((country) => (
            <CountryCard key={country.slug} country={country} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
