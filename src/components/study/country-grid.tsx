import { CountryCard } from "@/components/study/country-card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import type { StudyCountryRecord } from "@/types/study";

export interface CountryGridProps {
  countries: readonly StudyCountryRecord[];
  background?: "white" | "subtle";
  detailed?: boolean;
  title?: string;
  eyebrow?: string;
  description?: string;
}

export function CountryGrid({
  countries,
  background = "white",
  detailed = false,
  title = "European Study Destinations",
  eyebrow = "Country Discovery",
  description = "Explore initial European study destinations with official portal references. Detailed tuition, admissions, and deadline rules vary by institution and programme.",
}: CountryGridProps) {
  return (
    <Section
      id="study-countries"
      background={background}
      spacing="lg"
      aria-labelledby="study-countries-heading"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading as="h2" id="study-countries-heading" className="mt-2">
            {title}
          </Heading>
          <Paragraph className="mt-3">{description}</Paragraph>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <CountryCard key={country.slug} country={country} detailed={detailed} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
