import { Metadata } from "next";
import { SHOWROOM_CONFIG } from "@/config/showroom";

export const metadata: Metadata = {
  title: "About Us – 28 Years of Trust | DK Electronics Anpara",
  description:
    "Learn about DK Electronics: over 28 years of electronics retail leadership in Anpara, Sonbhadra. Serving generations with genuine multi-brand consumer electronics, home appliances, and dedicated after-sales care.",
  keywords: [
    "about DK Electronics Anpara",
    "electronics store history Anpara",
    "28 years electronics retailer Sonbhadra",
    "DK Electronics showroom story",
    "electronics retail Anpara Uttar Pradesh",
  ],
  alternates: {
    canonical: `${SHOWROOM_CONFIG.siteUrl}/about`,
    languages: {
      "en-IN": `${SHOWROOM_CONFIG.siteUrl}/about`,
      "hi-IN": `${SHOWROOM_CONFIG.siteUrl}/about?lang=hi`,
      "x-default": `${SHOWROOM_CONFIG.siteUrl}/about`,
    },
  },
  openGraph: {
    title: "About Us – 28 Years of Trust | DK Electronics Anpara",
    description:
      "Over 28 years of trusted electronics retail in Anpara, Sonbhadra. Multi-brand technology showroom and customer service.",
    url: `${SHOWROOM_CONFIG.siteUrl}/about`,
    siteName: "DK Electronics Anpara",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SHOWROOM_CONFIG.siteUrl}/images/dk-store-reference.jpg`,
        width: 1200,
        height: 630,
        alt: "DK Electronics Showroom Heritage Anpara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us – 28 Years of Trust | DK Electronics Anpara",
    description:
      "Over 28 years of trusted electronics retail in Anpara, Sonbhadra.",
    images: [`${SHOWROOM_CONFIG.siteUrl}/images/dk-store-reference.jpg`],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
