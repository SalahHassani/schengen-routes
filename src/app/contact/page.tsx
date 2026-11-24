import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactGuidance } from "@/components/contact/contact-guidance";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInformation } from "@/components/contact/contact-information";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact Us | ${BRAND.name}`,
  description: `Get in touch with ${BRAND.name} (${BRAND.tagline}) via official email (${BRAND.email}), WhatsApp (${BRAND.phoneDisplay}), or our official social channels.`,
  openGraph: {
    title: `Contact ${BRAND.name} — Let's Talk About Your European Journey`,
    description: `Have a question about studying, travelling or exploring Europe? Reach ${BRAND.name} via official channels.`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <Section background="white" spacing="lg" aria-label="Contact channels and enquiry form">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <ContactInformation />
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      <ContactGuidance />
    </>
  );
}
