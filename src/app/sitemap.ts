import type { MetadataRoute } from "next";
import { EXPLORE_EXPERIENCES } from "@/data/explore/experiences";
import { EXPLORE_PLACES } from "@/data/explore/places";
import { EXPLORE_STORIES } from "@/data/explore/stories";
import { getConfiguredSiteOrigin } from "@/lib/seo/config";

export const STATIC_INDEXABLE_ROUTES: readonly {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/study", changeFrequency: "weekly", priority: 0.9 },
  { path: "/study/countries", changeFrequency: "weekly", priority: 0.8 },
  { path: "/study/universities", changeFrequency: "weekly", priority: 0.8 },
  { path: "/study/programmes", changeFrequency: "weekly", priority: 0.8 },
  { path: "/study/scholarships", changeFrequency: "weekly", priority: 0.8 },
  { path: "/study/application-deadlines", changeFrequency: "weekly", priority: 0.8 },
  { path: "/visa-guide", changeFrequency: "weekly", priority: 0.9 },
  { path: "/visa-guide/schengen-visa", changeFrequency: "weekly", priority: 0.8 },
  { path: "/visa-guide/student-visa", changeFrequency: "weekly", priority: 0.8 },
  { path: "/visa-guide/countries", changeFrequency: "weekly", priority: 0.8 },
  { path: "/visa-guide/document-checklists", changeFrequency: "weekly", priority: 0.8 },
  { path: "/visa-guide/application-process", changeFrequency: "weekly", priority: 0.8 },
  { path: "/visa-guide/faqs", changeFrequency: "weekly", priority: 0.75 },
  { path: "/travel", changeFrequency: "weekly", priority: 0.9 },
  { path: "/travel/destinations", changeFrequency: "weekly", priority: 0.8 },
  { path: "/travel/countries", changeFrequency: "weekly", priority: 0.8 },
  { path: "/travel/cities", changeFrequency: "weekly", priority: 0.8 },
  { path: "/travel/guides", changeFrequency: "weekly", priority: 0.8 },
  { path: "/travel/itineraries", changeFrequency: "weekly", priority: 0.8 },
  { path: "/travel/transportation", changeFrequency: "monthly", priority: 0.75 },
  { path: "/travel/accommodation", changeFrequency: "monthly", priority: 0.75 },
  { path: "/explore", changeFrequency: "weekly", priority: 0.9 },
  { path: "/explore/culture", changeFrequency: "weekly", priority: 0.75 },
  { path: "/explore/landmarks", changeFrequency: "weekly", priority: 0.8 },
  { path: "/explore/history", changeFrequency: "weekly", priority: 0.75 },
  { path: "/explore/food", changeFrequency: "weekly", priority: 0.75 },
  { path: "/explore/festivals", changeFrequency: "weekly", priority: 0.75 },
  { path: "/explore/student-life", changeFrequency: "weekly", priority: 0.75 },
  { path: "/explore/nature", changeFrequency: "weekly", priority: 0.75 },
  { path: "/explore/experiences", changeFrequency: "weekly", priority: 0.8 },
  { path: "/explore/stories", changeFrequency: "weekly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getConfiguredSiteOrigin();
  if (!origin) {
    return [];
  }

  const entries: MetadataRoute.Sitemap = STATIC_INDEXABLE_ROUTES.map((route) => ({
    url: new URL(route.path, origin).toString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  for (const place of EXPLORE_PLACES) {
    if (place.category !== "landmarks") continue;
    entries.push({
      url: new URL(`/explore/landmarks/${place.slug}`, origin).toString(),
      lastModified: place.lastReviewed,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const story of EXPLORE_STORIES) {
    entries.push({
      url: new URL(`/explore/stories/${story.slug}`, origin).toString(),
      lastModified: story.updatedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const exp of EXPLORE_EXPERIENCES) {
    entries.push({
      url: new URL(`/explore/experiences/${exp.slug}`, origin).toString(),
      lastModified: exp.lastReviewed,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
