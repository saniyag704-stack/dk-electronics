import React from "react";
import { Product } from "@/data/products";
import { SHOWROOM_CONFIG } from "@/config/showroom";

interface ProductJsonLdProps {
  product: Product;
}

export const ProductJsonLd: React.FC<ProductJsonLdProps> = ({ product }) => {
  const productUrl = `${SHOWROOM_CONFIG.siteUrl}/products/${product.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name_en,
    alternateName: product.name_hi,
    image: `${SHOWROOM_CONFIG.siteUrl}/images/products/${product.category}.jpg`,
    description: `${product.tagline_en} - ${product.mainSpecs_en.join(", ")}`,
    sku: product.modelCode,
    mpn: product.modelCode,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "INR",
      price: product.priceDemo,
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability:
        product.stockStatus === "in_showroom"
          ? "https://schema.org/InStock"
          : product.stockStatus === "limited"
          ? "https://schema.org/LimitedAvailability"
          : "https://schema.org/PreOrder",
      seller: {
        "@type": "ElectronicsStore",
        name: SHOWROOM_CONFIG.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: SHOWROOM_CONFIG.locality,
          addressRegion: SHOWROOM_CONFIG.region,
          postalCode: SHOWROOM_CONFIG.postalCode,
          addressCountry: SHOWROOM_CONFIG.country,
        },
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
