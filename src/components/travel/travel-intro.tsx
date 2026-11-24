import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";

export function TravelIntro() {
  return (
    <Section
      id="travel-introduction"
      background="white"
      spacing="md"
      aria-labelledby="travel-intro-heading"
    >
      <Container>
        <Card variant="default" padding="lg" className="bg-surface-subtle">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <Eyebrow>About SchengeN Routes Travel</Eyebrow>
              <Heading as="h2" id="travel-intro-heading" size="h3" className="mt-2">
                Thoughtful European Discovery &amp; Practical Planning Guidance
              </Heading>
              <Paragraph size="sm" className="mt-3">
                SchengeN Routes Travel helps visitors discover European countries, historic cities,
                suggested itineraries, and practical transportation and accommodation guidance. Our
                focus is clear, source-backed destination discovery and trip preparation—not ticket
                sales, hotel bookings, or live reservation brokerage.
              </Paragraph>
            </div>
            <div className="lg:col-span-4">
              <div className="border-border-subtle text-text-secondary rounded-lg border bg-white p-4 text-xs">
                <p className="font-heading text-text-primary font-semibold">
                  Editorial Information Scope
                </p>
                <p className="mt-1.5">
                  Timetables, fares, attraction opening hours, and availability change seasonally.
                  Always confirm live operational details directly with official national tourism
                  portals and transport operators.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
