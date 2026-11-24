import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { BRAND } from "@/lib/constants";

export function BrandIntroduction() {
  return (
    <Section id="introduction" background="white" spacing="md" aria-labelledby="intro-heading">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>About {BRAND.name}</Eyebrow>
            <Heading as="h2" id="intro-heading" className="mt-2">
              A Single Starting Point for Your European Plans
            </Heading>
            <Divider variant="gold" className="mt-4" />
          </div>

          <div className="space-y-4 lg:col-span-7">
            <Paragraph size="lg">
              {BRAND.name} brings together European education discovery, structured visa
              information, practical travel planning, and cultural exploration in one clear,
              accessible platform.
            </Paragraph>
            <Paragraph>
              Whether you are researching European universities, preparing Schengen or student visa
              documentation, organising an upcoming itinerary, or exploring life across European
              cities, our goal is to help you review reliable information and take organised next
              steps.
            </Paragraph>
          </div>
        </div>
      </Container>
    </Section>
  );
}
