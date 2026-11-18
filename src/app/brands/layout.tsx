import { Metadata } from "next";
import { SHOWROOM_CONFIG } from "@/config/showroom";

export const metadata: Metadata = {
  title: "Authorized Brands & Partners | DK Electronics Anpara",
  description:
    "Discover world-class electronics brands at DK Electronics showroom in Anpara, Sonbhadra. Samsung, Apple, LG, vivo, Hyundai, Whirlpool, Canon, and more with genuine warranty and live demos.",
  keywords: [
    "electronics brands Anpara",
    "Samsung showroom Anpara",
    "Apple iPhone dealer Sonbhadra",
    "LG electronics Anpara",
    "vivo mobile showroom Anpara",
    "Whirlpool appliances Sonbhadra",
    "Canon cameras Anpara",
    "multi-brand electronics showroom Anpara",
  ],
  alternates: {
    canonical: `${SHOWROOM_CONFIG.siteUrl}/brands`,
    languages: {
      "en-IN": `${SHOWROOM_CONFIG.siteUrl}/brands`,
      "hi-IN": `${SHOWROOM_CONFIG.siteUrl}/brands?lang=hi`,
      "x-default": `${SHOWROOM_CONFIG.siteUrl}/brands`,
    },
  },
  openGraph: {
    title: "Authorized Brands & Partners | DK Electronics Anpara",
    description:
      "Discover world-class electronics brands at DK Electronics showroom in Anpara, Sonbhadra. Live showroom demos and 0% EMI.",
    url: `${SHOWROOM_CONFIG.siteUrl}/brands`,
    siteName: "DK Electronics Anpara",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SHOWROOM_CONFIG.siteUrl}/images/dk-store-reference.jpg`,
        width: 1200,
        height: 630,
        alt: "Leading Electronics Brands at DK Electronics Anpara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Authorized Brands & Partners | DK Electronics Anpara",
    description:
      "Leading electronics brands at DK Electronics showroom in Anpara, Sonbhadra.",
    images: [`${SHOWROOM_CONFIG.siteUrl}/images/dk-store-reference.jpg`],
  },
};

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
