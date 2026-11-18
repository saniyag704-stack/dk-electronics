import { MetadataRoute } from "next";
import { PRODUCTS_DATA } from "@/data/products";
import { SHOWROOM_CONFIG } from "@/config/showroom";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SHOWROOM_CONFIG.siteUrl;
  const now = new Date();

  // Static core routes
  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never";
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/products", priority: 0.9, changeFrequency: "daily" },
    { path: "/brands", priority: 0.8, changeFrequency: "weekly" },
    { path: "/services", priority: 0.8, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    alternates: {
      languages: {
        en: `${baseUrl}${r.path}`,
        hi: `${baseUrl}${r.path}?lang=hi`,
        "x-default": `${baseUrl}${r.path}`,
      },
    },
  }));

  // Dynamic product entries
  const productEntries: MetadataRoute.Sitemap = PRODUCTS_DATA.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
    alternates: {
      languages: {
        en: `${baseUrl}/products/${p.slug}`,
        hi: `${baseUrl}/products/${p.slug}?lang=hi`,
        "x-default": `${baseUrl}/products/${p.slug}`,
      },
    },
  }));

  return [...staticEntries, ...productEntries];
}
