import type { Metadata } from "next";
import { AboutCTA } from "@/components/about/about-cta";
import { AboutHero } from "@/components/about/about-hero";
import { AboutServices } from "@/components/about/about-services";
import { CoreValues } from "@/components/about/core-values";
import { MissionVision } from "@/components/about/mission-vision";
import { OurApproach } from "@/components/about/our-approach";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About Us | ${BRAND.name}`,
  description: `${BRAND.name} — ${BRAND.tagline}. Learn about our mission, vision, values, and structured approach to helping people discover Study, Visa Guide, Travel, and Explore opportunities across Europe.`,
  openGraph: {
    title: `About ${BRAND.name} — Connecting People with European Opportunities`,
    description: `${BRAND.tagline} — helping people discover opportunities to study, travel and explore across Europe.`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <AboutServices />
      <OurApproach />
      <AboutCTA />
    </>
  );
}
