import type { MetadataRoute } from "next";
import { getConfiguredSiteOrigin } from "@/lib/seo/config";

export default function robots(): MetadataRoute.Robots {
  const origin = getConfiguredSiteOrigin();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/search"],
      },
    ],
    ...(origin ? { sitemap: new URL("/sitemap.xml", origin).toString() } : {}),
  };
}
