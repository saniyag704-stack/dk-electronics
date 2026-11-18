"use client";

import React from "react";
import Link from "next/link";
import { Product, getProductImage } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { buildProductWhatsAppUrl } from "@/config/showroom";
import {
  Smartphone,
  Laptop,
  Tv,
  Wind,
  Refrigerator,
  Sparkles,
  Wrench,
  Camera,
  ShieldCheck,
  MessageCircle,
  Eye,
  Check,
  Scale,
  Zap,
} from "lucide-react";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  isCompared?: boolean;
  onToggleCompare?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  isCompared = false,
  onToggleCompare,
}) => {
  const { dict, language } = useLanguage();

  const name = language === "hi" ? product.name_hi : product.name_en;
  const mainSpecs = language === "hi" ? product.mainSpecs_hi : product.mainSpecs_en;
  const warranty = language === "hi" ? product.warranty_hi : product.warranty_en;

  const stockBadge = {
    in_showroom: {
      text: dict.catalog.stockStatus.inShowroom,
      variant: "light" as const,
      color: "text-zinc-900 bg-zinc-100 border-zinc-300",
    },
    limited: {
      text: dict.catalog.stockStatus.limited,
      variant: "light" as const,
      color: "text-amber-800 bg-amber-50 border-amber-200",
    },
    order_basis: {
      text: dict.catalog.stockStatus.onOrder,
      variant: "light" as const,
      color: "text-zinc-700 bg-zinc-100 border-zinc-200",
    },
  }[product.stockStatus];

  // Category Icon helper
  const renderCategoryVisual = () => {
    const iconClass = "w-10 h-10 text-zinc-700 group-hover:text-[#D82935] transition-colors";
    switch (product.category) {
      case "smartphones":
        return <Smartphone className={iconClass} />;
      case "laptops":
        return <Laptop className={iconClass} />;
      case "tvs":
        return <Tv className={iconClass} />;
      case "acs":
        return <Wind className={iconClass} />;
      case "refrigerators":
        return <Refrigerator className={iconClass} />;
      case "washing":
        return <Sparkles className={iconClass} />;
      case "home-appliances":
        return <Wrench className={iconClass} />;
      case "accessories":
        return <Camera className={iconClass} />;
      default:
        return <Tv className={iconClass} />;
    }
  };

  const whatsappUrl = buildProductWhatsAppUrl({
    productName: name,
    brand: product.brand,
    modelCode: product.modelCode,
    pageRefOrSlug: product.slug,
    language,
  });

  return (
    <div className="bg-white rounded-2xl border border-zinc-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Top Visual Area with Model Code & Compare Checkbox */}
        <div className="relative bg-[#F5F5F5] p-6 pb-4 border-b border-zinc-100 flex flex-col items-center justify-center text-center">
          {/* Top Badges Bar */}
          <div className="w-full flex items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-black tracking-wider text-white bg-[#111111] px-2.5 py-0.5 rounded font-mono uppercase">
              {product.brand}
            </span>

            {/* Compare Checkbox */}
            {onToggleCompare && (
              <button
                type="button"
                onClick={() => onToggleCompare(product)}
                className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border transition-all ${
                  isCompared
                    ? "bg-[#D82935] text-white border-[#D82935] shadow-sm"
                    : "bg-white text-zinc-600 border-zinc-300 hover:border-zinc-400"
                }`}
              >
                <Scale className="w-3 h-3" />
                <span>{isCompared ? dict.catalog.added : dict.catalog.compare}</span>
              </button>
            )}
          </div>

          {/* Real Photorealistic Product Image */}
          <div
            onClick={() => onViewDetails(product)}
            className="w-full h-44 sm:h-48 rounded-xl bg-white overflow-hidden my-2 cursor-pointer border border-zinc-200/80 relative group/img shadow-sm"
          >
            <img
              src={getProductImage(product)}
              alt={name}
              loading="lazy"
              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end justify-center p-2.5">
              <span className="text-[10px] text-white font-semibold bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                <Eye className="w-3 h-3 text-[#D82935]" />
                <span>{dict.catalog.viewDetails}</span>
              </span>
            </div>
          </div>

          {/* Exact Model Code */}
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mt-1">
            {dict.catalog.modelPrefix} <strong className="text-zinc-800">{product.modelCode}</strong>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 space-y-3">
          {/* Stock & Featured Badges */}
          <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
            <span className={`px-2 py-0.5 rounded border font-semibold ${stockBadge.color}`}>
              {stockBadge.text}
            </span>
            {product.isFeatured && (
              <Badge variant="red">
                {dict.featured.showroomDeal}
              </Badge>
            )}
          </div>

          {/* Exact Model Name */}
          <h3
            onClick={() => onViewDetails(product)}
            className="text-sm font-bold text-zinc-900 leading-snug line-clamp-2 hover:text-[#D82935] cursor-pointer transition-colors"
            title={name}
          >
            {name}
          </h3>

          {/* Main Specifications List (3 Bullets) */}
          <ul className="space-y-1 text-[11px] text-zinc-600">
            {mainSpecs.slice(0, 3).map((spec, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D82935] shrink-0" />
                <span className="truncate">{spec}</span>
              </li>
            ))}
          </ul>

          {/* Warranty Badge */}
          <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 bg-zinc-50 p-2 rounded-lg border border-zinc-100">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D82935] shrink-0" />
            <span className="truncate">{warranty}</span>
          </div>
        </div>
      </div>

      {/* Pricing & Actions Bottom Bar */}
      <div className="p-5 pt-0">
        <div className="pt-3 border-t border-zinc-100 mb-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-zinc-400 block">
                {dict.catalog.showroomOffer}
              </span>
              {product.showPrice ? (
                <div className="flex items-baseline gap-1.5">
                  <span className="text-base font-black text-zinc-900 font-display">
                    ₹{product.priceDemo.toLocaleString("en-IN")}
                  </span>
                  <span className="text-[11px] text-zinc-400 line-through">
                    ₹{product.mrpDemo.toLocaleString("en-IN")}
                  </span>
                </div>
              ) : (
                <span className="text-xs font-bold text-[#D82935]">
                  {dict.catalog.bestPriceOnEnquiry}
                </span>
              )}
            </div>

            <div className="text-right">
              <span className="text-[9px] uppercase font-semibold text-zinc-400 block">
                {dict.catalog.emiStarts}
              </span>
              <span className="text-xs font-black text-zinc-800 font-mono">
                ₹{product.emiMonthlyDemo.toLocaleString("en-IN")}/mo*
              </span>
            </div>
          </div>
          <span className="text-[9px] text-zinc-400 block mt-0.5">
            {dict.catalog.demoPricingDisclaimer}
          </span>
        </div>

        {/* Dual Actions: View Details + WhatsApp Enquiry Button */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onViewDetails(product)}
            className="inline-flex items-center justify-center gap-1 text-xs font-semibold py-2 px-2.5 rounded-xl border border-zinc-200 text-zinc-800 hover:bg-zinc-100 transition"
          >
            <Eye className="w-3.5 h-3.5 text-zinc-500" />
            <span>{dict.catalog.viewDetails}</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button
              variant="primary"
              size="sm"
              fullWidth
              icon={<MessageCircle className="w-3.5 h-3.5 fill-white text-[#D82935]" />}
            >
              {dict.catalog.enquireOffer}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
