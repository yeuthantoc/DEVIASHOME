import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { locales } from "@/i18n/config";

const ARTICLE_SLUGS = [
  "food-safety-standards-wooden-kitchenware",
  "oem-vs-odm-wooden-kitchenware",
  "acacia-wood-oil-finish-durability"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const homepages = locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === "en" || locale === "ko" ? 1.0 : 0.8,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}`]))
    }
  }));

  const subpages = (["oem", "about"] as const).flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}/${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: locale === "en" || locale === "ko" ? 0.9 : 0.7,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}/${path}`]))
      }
    }))
  );

  const articlePages = ARTICLE_SLUGS.flatMap((slug) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}/insights/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: locale === "en" || locale === "ko" ? 0.8 : 0.6,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}/insights/${slug}`]))
      }
    }))
  );

  return [...homepages, ...subpages, ...articlePages];
}
