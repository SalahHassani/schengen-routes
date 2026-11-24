import { DestinationCard } from "@/components/home/destination-card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { FEATURED_DESTINATIONS } from "@/data/destinations";

export function DestinationSection() {
  return (
    <Section
      id="destinations"
      background="subtle"
      spacing="lg"
      aria-labelledby="destinations-heading"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Travel &amp; European Discovery</Eyebrow>
          <Heading as="h2" id="destinations-heading" className="mt-2">
            Iconic European Cities to Discover
          </Heading>
          <Paragraph className="mt-3">
            From historic capitals to student-friendly cultural centres, explore destinations across
            Europe as you plan your studies or upcoming journey.
          </Paragraph>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_DESTINATIONS.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
