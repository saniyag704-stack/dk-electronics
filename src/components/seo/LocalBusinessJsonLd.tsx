import React from "react";
import { SHOWROOM_CONFIG } from "@/config/showroom";

export const LocalBusinessJsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    "@id": `${SHOWROOM_CONFIG.siteUrl}/#store`,
    name: SHOWROOM_CONFIG.name,
    alternateName: "डीके इलेक्ट्रॉनिक्स अनपरा",
    description:
      "Premier multi-brand electronics showroom in Anpara, Sonbhadra. Sourcing 100% genuine Smart TVs, Refrigerators, ACs, Washing Machines, Smartphones, and Laptops with authorized brand warranties and paperless 0% EMI financing.",
    url: SHOWROOM_CONFIG.siteUrl,
    telephone: SHOWROOM_CONFIG.phoneTel,
    priceRange: "₹₹ - ₹₹₹₹",
    image: `${SHOWROOM_CONFIG.siteUrl}/images/dk-store-reference.jpg`,
    logo: `${SHOWROOM_CONFIG.siteUrl}/images/dk-logo.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Commercial Market",
      addressLocality: SHOWROOM_CONFIG.locality,
      addressRegion: SHOWROOM_CONFIG.region,
      postalCode: SHOWROOM_CONFIG.postalCode,
      addressCountry: SHOWROOM_CONFIG.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:30",
        closes: "21:00",
      },
    ],
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Anpara",
      },
      {
        "@type": "AdministrativeArea",
        name: "Sonbhadra",
      },
      {
        "@type": "AdministrativeArea",
        name: "Singrauli Region",
      },
    ],
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Paperless Showroom EMI",
    currenciesAccepted: "INR",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Showroom Consumer Technology Catalog",
      itemListElement: [
        { "@type": "OfferCatalog", name: "Smartphones" },
        { "@type": "OfferCatalog", name: "Laptops & Computers" },
        { "@type": "OfferCatalog", name: "4K OLED & Smart TVs" },
        { "@type": "OfferCatalog", name: "Air Conditioners" },
        { "@type": "OfferCatalog", name: "Refrigerators" },
        { "@type": "OfferCatalog", name: "Washing Machines" },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
