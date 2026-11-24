import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExploreArticleLayout } from "@/components/explore/explore-article-layout";
import { ExploreCta } from "@/components/explore/explore-cta";
import { EXPLORE_STORIES } from "@/data/explore/stories";
import { BRAND } from "@/lib/constants";

interface StoryDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return EXPLORE_STORIES.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: StoryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = EXPLORE_STORIES.find((item) => item.slug === slug);

  if (!story) {
    return {
      title: `Story Not Found | ${BRAND.name}`,
    };
  }

  return {
    title: `${story.title} | ${BRAND.name}`,
    description: story.excerpt,
    openGraph: {
      title: `${story.title} | ${BRAND.name}`,
      description: story.excerpt,
      type: "article",
    },
  };
}

export default async function StoryDetailPage({ params }: StoryDetailPageProps) {
  const { slug } = await params;
  const story = EXPLORE_STORIES.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  const locationLabel = story.city
    ? `${story.city}, ${story.country ?? "Europe"}`
    : (story.country ?? "Europe");

  const metaParts = [story.author, story.readingTime].filter(Boolean).join(" · ");

  return (
    <>
      <ExploreArticleLayout
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Explore", href: "/explore" },
          { label: "Stories", href: "/explore/stories" },
          { label: story.title },
        ]}
        eyebrow="Editorial Story"
        title={story.title}
        locationBadge={locationLabel}
        metaText={metaParts || undefined}
        imageSrc={story.coverImage}
        imageAlt={story.coverImageAlt}
        imageAspect="video"
        leadText={story.excerpt}
        paragraphs={story.content}
        sources={story.sources}
        lastReviewed={story.updatedAt}
        backHref="/explore/stories"
        backLabel="Back to All Stories"
      />
      <ExploreCta />
    </>
  );
}
