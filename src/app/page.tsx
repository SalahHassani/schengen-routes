import type { Metadata } from "next";
import { BrandIntroduction } from "@/components/home/brand-introduction";
import { ConsultationCta } from "@/components/home/consultation-cta";
import { CountrySection } from "@/components/home/country-section";
import { DestinationSection } from "@/components/home/destination-section";
import { HeroSection } from "@/components/home/hero-section";
import { HowItWorks } from "@/components/home/how-it-works";
import { LatestUpdates } from "@/components/home/latest-updates";
import { ServiceGrid } from "@/components/home/service-grid";
import { StudyOpportunities } from "@/components/home/study-opportunities";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { BRAND, BRAND_ASSETS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${BRAND.name} — ${BRAND.tagline} | Study, Travel & Explore Europe`,
  description:
    "Discover European universities, understand Schengen and student visa requirements, plan your journeys, and explore European destinations with SchengeN Routes.",
  openGraph: {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description:
      "Study, Travel and Explore Europe with Confidence. Discover European universities, visa guidance, and travel inspiration in one place.",
    type: "website",
    siteName: BRAND.name,
    images: [
      {
        url: "/assets/images/hero/europe-hero.jpg",
        width: 1600,
        height: 900,
        alt: "Panoramic European cityscape overlooking historic bridges and spires",
      },
      {
        url: BRAND_ASSETS.primaryLogo,
        alt: `${BRAND.name} Official Logo`,
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandIntroduction />
      <ServiceGrid />
      <CountrySection />
      <StudyOpportunities />
      <WhyChooseUs />
      <DestinationSection />
      <HowItWorks />
      <LatestUpdates />
      <ConsultationCta />
    </>
  );
}
