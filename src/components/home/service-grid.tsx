import { ServiceCard } from "@/components/home/service-card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { SERVICE_PILLARS } from "@/data/services";

export function ServiceGrid() {
  return (
    <Section id="services" background="subtle" spacing="lg" aria-labelledby="services-heading">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Four Core Pillars</Eyebrow>
          <Heading as="h2" id="services-heading" className="mt-2">
            Explore Our Services
          </Heading>
          <Paragraph className="mt-3">
            Dedicated guidance designed for students, visa applicants, travellers, and curious
            explorers planning their route to Europe.
          </Paragraph>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_PILLARS.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
