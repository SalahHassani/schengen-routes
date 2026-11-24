import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { BRAND } from "@/lib/constants";

export function MissionVision() {
  return (
    <Section id="who-we-are" background="white" spacing="lg" aria-labelledby="who-we-are-heading">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Who We Are</Eyebrow>
          <Heading as="h2" id="who-we-are-heading" className="mt-2">
            Structured Information for Navigating Europe
          </Heading>
          <Paragraph className="mt-3">
            {BRAND.name} ({BRAND.tagline}) is an information and discovery platform focused on
            helping people navigate European opportunities across four structured areas: Study, Visa
            Guide, Travel, and Explore.
          </Paragraph>
          <Paragraph size="sm" className="mt-3">
            We organise public information and link to authoritative institutions so visitors can
            research options clearly. Platform guides do not guarantee university admissions or visa
            approvals.
          </Paragraph>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card variant="default" padding="lg" className="flex h-full flex-col">
            <Eyebrow>Our Mission</Eyebrow>
            <Heading as="h3" size="h4" className="mt-2">
              Clearer, More Accessible European Discovery
            </Heading>
            <Paragraph size="sm" className="mt-3">
              To make discovering and navigating opportunities across Europe clearer, more
              accessible and easier to understand.
            </Paragraph>
          </Card>

          <Card variant="default" padding="lg" className="flex h-full flex-col">
            <Eyebrow>Our Vision</Eyebrow>
            <Heading as="h3" size="h4" className="mt-2">
              Connecting People with Education, Travel &amp; Culture
            </Heading>
            <Paragraph size="sm" className="mt-3">
              To become a trusted platform connecting people with European education, travel
              information and cultural experiences.
            </Paragraph>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
