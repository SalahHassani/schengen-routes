import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Consultation",
  description:
    "Get in touch with SchengeN Routes for European study guidance, visa preparation support, or travel consultation.",
};

export default function ContactPage() {
  return (
    <Section background="white" spacing="lg">
      <Container size="narrow">
        <Badge variant="accent">Milestones 8 & 9 • Section Placeholder</Badge>
        <Eyebrow className="mt-4">Get Consultation</Eyebrow>
        <Heading as="h1" className="mt-2">
          Contact &amp; Consultation
        </Heading>
        <Divider variant="gold" className="mt-4" />
        <Paragraph size="lg" className="mt-6">
          Reach out to our team at{" "}
          <span className="text-brand-navy font-semibold">{CONTACT.email}</span> or via WhatsApp at{" "}
          <span className="text-brand-navy font-semibold">{CONTACT.whatsappDisplay}</span>. The
          structured consultation request form will be implemented in Milestones 8 and 9.
        </Paragraph>
      </Container>
    </Section>
  );
}
