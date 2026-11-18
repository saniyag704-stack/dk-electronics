import { MetadataRoute } from "next";
import { SHOWROOM_CONFIG } from "@/config/showroom";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SHOWROOM_CONFIG.siteUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/products", "/brands", "/services", "/about", "/contact"],
        disallow: ["/admin", "/admin/*", "/api/*"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
