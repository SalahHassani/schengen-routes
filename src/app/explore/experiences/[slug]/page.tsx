import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExploreArticleLayout } from "@/components/explore/explore-article-layout";
import { ExploreCta } from "@/components/explore/explore-cta";
import { EXPLORE_EXPERIENCES } from "@/data/explore/experiences";
import { BRAND } from "@/lib/constants";

interface ExperienceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return EXPLORE_EXPERIENCES.map((exp) => ({ slug: exp.slug }));
}

export async function generateMetadata({ params }: ExperienceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = EXPLORE_EXPERIENCES.find((item) => item.slug === slug);

  if (!experience) {
    return {
      title: `Experience Not Found | ${BRAND.name}`,
    };
  }

  return {
    title: `${experience.title} — Local Experiences | ${BRAND.name}`,
    description: experience.description,
    openGraph: {
      title: `${experience.title} | ${BRAND.name}`,
      description: experience.description,
      type: "article",
    },
  };
}

export default async function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  const { slug } = await params;
  const experience = EXPLORE_EXPERIENCES.find((item) => item.slug === slug);

  if (!experience) {
    notFound();
  }

  return (
    <>
      <ExploreArticleLayout
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Explore", href: "/explore" },
          { label: "Local Experiences", href: "/explore/experiences" },
          { label: experience.title },
        ]}
        eyebrow="Local Experience"
        title={experience.title}
        locationBadge={`${experience.location} · ${experience.country}`}
        imageSrc={experience.image}
        imageAlt={experience.imageAlt}
        imageAspect="4/3"
        leadText={experience.description}
        paragraphs={[experience.description]}
        highlightLabel="Location Context"
        highlightText={`${experience.location} (${experience.country}) — explore local visitor guidance through the official source linked below.`}
        sources={[experience.source]}
        lastReviewed={experience.lastReviewed}
        backHref="/explore/experiences"
        backLabel="Back to All Experiences"
      />
      <ExploreCta />
    </>
  );
}
