import { Metadata } from "next";
import { SHOWROOM_CONFIG } from "@/config/showroom";

export const metadata: Metadata = {
  title: "Electronics Catalog & Models | DK Electronics Anpara",
  description:
    "Explore authentic electronics products at DK Electronics showroom in Anpara, Sonbhadra. Smartphones, Laptops, 4K Smart TVs, ACs, Refrigerators, and Home Appliances with genuine warranty and 0% EMI options.",
  keywords: [
    "electronics catalog Anpara",
    "smartphones showroom Anpara",
    "laptops Sonbhadra",
    "smart TV Anpara",
    "inverter AC dealer Anpara",
    "refrigerator washing machine showroom",
    "DK Electronics products",
    "0% EMI electronics Anpara",
  ],
  alternates: {
    canonical: `${SHOWROOM_CONFIG.siteUrl}/products`,
    languages: {
      "en-IN": `${SHOWROOM_CONFIG.siteUrl}/products`,
      "hi-IN": `${SHOWROOM_CONFIG.siteUrl}/products?lang=hi`,
      "x-default": `${SHOWROOM_CONFIG.siteUrl}/products`,
    },
  },
  openGraph: {
    title: "Electronics Catalog & Models | DK Electronics Anpara",
    description:
      "Explore authentic electronics products at DK Electronics showroom in Anpara, Sonbhadra. Multi-brand electronics with genuine warranty and 0% EMI.",
    url: `${SHOWROOM_CONFIG.siteUrl}/products`,
    siteName: "DK Electronics Anpara",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SHOWROOM_CONFIG.siteUrl}/images/dk-store-reference.jpg`,
        width: 1200,
        height: 630,
        alt: "DK Electronics Showroom Products Catalog Anpara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electronics Catalog & Models | DK Electronics Anpara",
    description:
      "Explore authentic electronics products at DK Electronics showroom in Anpara, Sonbhadra.",
    images: [`${SHOWROOM_CONFIG.siteUrl}/images/dk-store-reference.jpg`],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
