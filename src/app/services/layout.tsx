import { Metadata } from "next";
import { SHOWROOM_CONFIG } from "@/config/showroom";

export const metadata: Metadata = {
  title: "Repair & Installation Services | DK Electronics Anpara",
  description:
    "Expert diagnostic, repair, and installation services at DK Electronics in Anpara, Sonbhadra. Certified multi-brand support for smartphones, laptops, 4K TVs, ACs, refrigerators, and washing machines.",
  keywords: [
    "electronics repair Anpara",
    "mobile repair shop Anpara",
    "laptop service center Sonbhadra",
    "LED TV repair Anpara",
    "AC service installation Anpara",
    "refrigerator repair Sonbhadra",
    "washing machine repair Anpara",
    "DK Electronics repair service",
  ],
  alternates: {
    canonical: `${SHOWROOM_CONFIG.siteUrl}/services`,
    languages: {
      "en-IN": `${SHOWROOM_CONFIG.siteUrl}/services`,
      "hi-IN": `${SHOWROOM_CONFIG.siteUrl}/services?lang=hi`,
      "x-default": `${SHOWROOM_CONFIG.siteUrl}/services`,
    },
  },
  openGraph: {
    title: "Repair & Installation Services | DK Electronics Anpara",
    description:
      "Expert diagnostic, repair, and installation services in Anpara. Certified multi-brand support with transparent service estimation.",
    url: `${SHOWROOM_CONFIG.siteUrl}/services`,
    siteName: "DK Electronics Anpara",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SHOWROOM_CONFIG.siteUrl}/images/dk-store-reference.jpg`,
        width: 1200,
        height: 630,
        alt: "Electronics Repair and Care Services at DK Electronics Anpara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Repair & Installation Services | DK Electronics Anpara",
    description:
      "Multi-device repair and installation services at DK Electronics showroom in Anpara.",
    images: [`${SHOWROOM_CONFIG.siteUrl}/images/dk-store-reference.jpg`],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
