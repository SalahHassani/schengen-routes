import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExploreArticleLayout } from "@/components/explore/explore-article-layout";
import { ExploreCta } from "@/components/explore/explore-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { EXPLORE_STORIES } from "@/data/explore/stories";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo/structured-data";

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
    return buildPageMetadata({
      title: "Story Not Found",
      description: "The requested editorial story could not be found.",
      pathname: `/explore/stories/${slug}`,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: story.title,
    description: story.excerpt,
    pathname: `/explore/stories/${story.slug}`,
    ogType: "article",
    imagePath: story.coverImage,
    imageAlt: story.coverImageAlt,
  });
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
  const pathname = `/explore/stories/${story.slug}`;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", pathname: "/" },
          { name: "Explore", pathname: "/explore" },
          { name: "Stories", pathname: "/explore/stories" },
          { name: story.title, pathname },
        ])}
      />
      <JsonLd
        data={buildArticleJsonLd({
          headline: story.title,
          description: story.excerpt,
          pathname,
          datePublished: story.publishedAt,
          dateModified: story.updatedAt,
          authorName: story.author,
        })}
      />
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
