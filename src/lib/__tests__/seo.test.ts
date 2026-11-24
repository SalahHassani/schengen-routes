import assert from "node:assert/strict";
import { describe, it } from "node:test";
import robots from "@/app/robots";
import sitemap, { STATIC_INDEXABLE_ROUTES } from "@/app/sitemap";
import { getSearchIndex } from "@/lib/search";
import { buildCanonicalUrl, normalizePathname } from "@/lib/seo/canonical";
import { getConfiguredSiteOrigin, SEO_CONFIG } from "@/lib/seo/config";
import { buildPageMetadata, buildRootMetadata } from "@/lib/seo/metadata";
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/seo/structured-data";

describe("Production domain & canonical URL safety", () => {
  it("never fabricates a domain or treats localhost as a public canonical origin", () => {
    const previous = process.env.NEXT_PUBLIC_SITE_URL;
    try {
      delete process.env.NEXT_PUBLIC_SITE_URL;
      assert.equal(getConfiguredSiteOrigin(), null);
      assert.equal(buildCanonicalUrl("/study/universities/"), "/study/universities");

      process.env.NEXT_PUBLIC_SITE_URL = "http://localhost:3000";
      assert.equal(getConfiguredSiteOrigin(), null);
      assert.equal(buildCanonicalUrl("/visa-guide"), "/visa-guide");

      process.env.NEXT_PUBLIC_SITE_URL = "https://example.org/some/subpath";
      const origin = getConfiguredSiteOrigin();
      assert.equal(origin?.toString(), "https://example.org/");
      assert.equal(
        buildCanonicalUrl("/travel/cities?country=Italy"),
        "https://example.org/travel/cities"
      );
    } finally {
      if (previous === undefined) {
        delete process.env.NEXT_PUBLIC_SITE_URL;
      } else {
        process.env.NEXT_PUBLIC_SITE_URL = previous;
      }
    }
  });

  it("normalizes pathnames consistently", () => {
    assert.equal(normalizePathname(""), "/");
    assert.equal(normalizePathname("/explore/stories/"), "/explore/stories");
  });
});

describe("Metadata, sitemap, robots, and JSON-LD", () => {
  it("builds unique page metadata and marks search pages as noindex", () => {
    const root = buildRootMetadata();
    assert.ok(root.description && root.description.length > 20);

    const studyMeta = buildPageMetadata({
      title: "Study in Europe",
      description: "Explore accredited European universities, degree levels, and intake timelines.",
      pathname: "/study",
    });
    assert.equal(studyMeta.title, "Study in Europe");
    assert.deepEqual(studyMeta.robots, { index: true, follow: true });

    const searchMeta = buildPageMetadata({
      title: "Search",
      description: "Search across SchengeN Routes.",
      pathname: "/search",
      noIndex: true,
    });
    assert.deepEqual(searchMeta.robots, { index: false, follow: true });
  });

  it("emits deduplicated sitemap entries only when NEXT_PUBLIC_SITE_URL is configured", () => {
    const previous = process.env.NEXT_PUBLIC_SITE_URL;
    try {
      delete process.env.NEXT_PUBLIC_SITE_URL;
      assert.deepEqual(sitemap(), []);

      process.env.NEXT_PUBLIC_SITE_URL = "https://example.org";
      const entries = sitemap();
      assert.ok(entries.length >= STATIC_INDEXABLE_ROUTES.length);

      const urls = entries.map((e) => e.url);
      assert.equal(new Set(urls).size, urls.length);
      assert.ok(urls.every((u) => u.startsWith("https://example.org/")));
      assert.ok(!urls.some((u) => u.includes("/api/") || u.endsWith("/search")));
    } finally {
      if (previous === undefined) {
        delete process.env.NEXT_PUBLIC_SITE_URL;
      } else {
        process.env.NEXT_PUBLIC_SITE_URL = previous;
      }
    }
  });

  it("configures robots rules and sitemap reference safely", () => {
    const previous = process.env.NEXT_PUBLIC_SITE_URL;
    try {
      delete process.env.NEXT_PUBLIC_SITE_URL;
      const unconfiguredRobots = robots();
      assert.equal(unconfiguredRobots.sitemap, undefined);

      process.env.NEXT_PUBLIC_SITE_URL = "https://example.org";
      const configuredRobots = robots();
      assert.equal(configuredRobots.sitemap, "https://example.org/sitemap.xml");
    } finally {
      if (previous === undefined) {
        delete process.env.NEXT_PUBLIC_SITE_URL;
      } else {
        process.env.NEXT_PUBLIC_SITE_URL = previous;
      }
    }
  });

  it("generates verified JSON-LD without invented organization attributes", () => {
    const org = buildOrganizationJsonLd();
    assert.equal(org["@type"], "Organization");
    assert.equal(org.name, SEO_CONFIG.brandName);
    assert.equal(org.email, "mailto:schengenroutes@gmail.com");
    assert.equal(org.address, undefined);
    assert.equal(org.foundingDate, undefined);

    const breadcrumbs = buildBreadcrumbJsonLd([
      { name: "Home", pathname: "/" },
      { name: "Study", pathname: "/study" },
    ]);
    assert.equal(breadcrumbs["@type"], "BreadcrumbList");

    const article = buildArticleJsonLd({
      headline: "Sample European Guide",
      description: "Verified overview.",
      pathname: "/explore/stories/sample",
      dateModified: "2026-11-24",
    });
    assert.equal(article["@type"], "Article");

    const previous = process.env.NEXT_PUBLIC_SITE_URL;
    try {
      delete process.env.NEXT_PUBLIC_SITE_URL;
      assert.equal(buildWebSiteJsonLd(), null);
    } finally {
      if (previous === undefined) {
        delete process.env.NEXT_PUBLIC_SITE_URL;
      } else {
        process.env.NEXT_PUBLIC_SITE_URL = previous;
      }
    }
  });

  it("ensures all internal routes referenced in the search index map to valid routes", () => {
    const validStatic = new Set(STATIC_INDEXABLE_ROUTES.map((r) => r.path));
    const validDynamicPrefixes = [
      "/explore/landmarks/",
      "/explore/stories/",
      "/explore/experiences/",
    ];

    for (const item of getSearchIndex()) {
      const isStatic = validStatic.has(item.href);
      const isDynamic = validDynamicPrefixes.some((prefix) => item.href.startsWith(prefix));
      assert.ok(isStatic || isDynamic, `Unexpected route in search index: ${item.href}`);
    }
  });
});
