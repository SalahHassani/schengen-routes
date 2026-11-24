import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExploreArticleLayout } from "@/components/explore/explore-article-layout";
import { ExploreCta } from "@/components/explore/explore-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { EXPLORE_EXPERIENCES } from "@/data/explore/experiences";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/seo/structured-data";

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
    return buildPageMetadata({
      title: "Experience Not Found",
      description: "The requested local experience entry could not be found.",
      pathname: `/explore/experiences/${slug}`,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: `${experience.title} — Local Experiences`,
    description: experience.description,
    pathname: `/explore/experiences/${experience.slug}`,
    ogType: "article",
    imagePath: experience.image,
    imageAlt: experience.imageAlt,
  });
}

export default async function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  const { slug } = await params;
  const experience = EXPLORE_EXPERIENCES.find((item) => item.slug === slug);

  if (!experience) {
    notFound();
  }

  const pathname = `/explore/experiences/${experience.slug}`;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", pathname: "/" },
          { name: "Explore", pathname: "/explore" },
          { name: "Local Experiences", pathname: "/explore/experiences" },
          { name: experience.title, pathname },
        ])}
      />
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
