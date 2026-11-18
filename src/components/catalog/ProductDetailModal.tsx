"use client";

import React, { useState } from "react";
import { Product, getProductImage } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { buildProductWhatsAppUrl, SHOWROOM_CONFIG } from "@/config/showroom";
import {
  X,
  ShieldCheck,
  CreditCard,
  MessageCircle,
  Phone,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Smartphone,
  Laptop,
  Tv,
  Wind,
  Refrigerator,
  Wrench,
  Camera,
} from "lucide-react";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  const { dict, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"specs" | "emi" | "warranty">("specs");

  if (!product) return null;

  const name = language === "hi" ? product.name_hi : product.name_en;
  const tagline = language === "hi" ? product.tagline_hi : product.tagline_en;
  const warranty = language === "hi" ? product.warranty_hi : product.warranty_en;
  const specs = language === "hi" ? product.detailedSpecs_hi : product.detailedSpecs_en;

  const whatsappUrl = buildProductWhatsAppUrl({
    productName: name,
    brand: product.brand,
    modelCode: product.modelCode,
    pageRefOrSlug: product.slug,
    language,
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col">
        {/* Header Bar */}
        <div className="p-6 bg-[#111111] text-white flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <span className="text-xs font-black tracking-wider text-white bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md font-mono uppercase">
              {product.brand}
            </span>
            <span className="text-xs text-zinc-400 font-mono">
              {dict.catalog.modelPrefix} <strong className="text-white">{product.modelCode}</strong>
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 transition"
            aria-label="Close detail modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Real Photorealistic Product Showcase */}
          <div className="w-full h-52 sm:h-64 rounded-2xl overflow-hidden border border-zinc-200 bg-white relative shadow-sm">
            <img
              src={getProductImage(product)}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="text-[10px] font-black tracking-wider text-white bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded uppercase font-mono shadow-sm">
                {product.brand}
              </span>
              <span className="text-[10px] font-bold text-white bg-[#D82935] px-2.5 py-1 rounded shadow-sm">
                {product.modelCode}
              </span>
            </div>
          </div>

          {/* Title & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                {product.category.toUpperCase()}
              </span>
              <span className="text-[10px] text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200 font-semibold">
                {dict.productDetail.demoSpecificationNotice}
              </span>
            </div>

            <h2 id="product-modal-title" className="text-xl sm:text-2xl font-black text-zinc-900 font-display">
              {name}
            </h2>
            <p className="text-xs text-zinc-600 mt-1">{tagline}</p>
          </div>

          {/* Pricing & EMI Highlight Box */}
          <div className="p-5 rounded-2xl bg-[#F5F5F5] border border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-zinc-500 block">
                {dict.productDetail.showroomOfferTitle}
              </span>
              {product.showPrice ? (
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-black text-zinc-900 font-display">
                    ₹{product.priceDemo.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs text-zinc-400 line-through">
                    MRP: ₹{product.mrpDemo.toLocaleString("en-IN")}
                  </span>
                </div>
              ) : (
                <span className="text-base font-bold text-[#D82935] mt-0.5 block">
                  {dict.catalog.bestPriceOnEnquiry}
                </span>
              )}
            </div>

            <div className="bg-white p-3 rounded-xl border border-zinc-200 text-right">
              <span className="text-[10px] font-semibold text-zinc-500 block">
                {dict.productDetail.easyEmiStartsTitle}
              </span>
              <span className="text-sm font-black text-zinc-900 font-mono">
                ₹{product.emiMonthlyDemo.toLocaleString("en-IN")}{dict.productDetail.perMonthUnit}*
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-zinc-200">
            <button
              onClick={() => setActiveTab("specs")}
              className={`pb-2.5 px-4 text-xs font-bold transition ${
                activeTab === "specs"
                  ? "border-b-2 border-[#D82935] text-[#D82935]"
                  : "text-zinc-500 hover:text-black"
              }`}
            >
              {dict.productDetail.tabs.specs}
            </button>
            <button
              onClick={() => setActiveTab("emi")}
              className={`pb-2.5 px-4 text-xs font-bold transition ${
                activeTab === "emi"
                  ? "border-b-2 border-[#D82935] text-[#D82935]"
                  : "text-zinc-500 hover:text-black"
              }`}
            >
              {dict.productDetail.tabs.emi}
            </button>
            <button
              onClick={() => setActiveTab("warranty")}
              className={`pb-2.5 px-4 text-xs font-bold transition ${
                activeTab === "warranty"
                  ? "border-b-2 border-[#D82935] text-[#D82935]"
                  : "text-zinc-500 hover:text-black"
              }`}
            >
              {dict.productDetail.tabs.warranty}
            </button>
          </div>

          {/* Tab 1: Detailed Specifications Table */}
          {activeTab === "specs" && (
            <div className="space-y-3">
              <div className="divide-y divide-zinc-200/80 border border-zinc-200 rounded-2xl overflow-hidden text-xs">
                {Object.entries(specs).map(([key, val], idx) => (
                  <div
                    key={key}
                    className={`grid grid-cols-12 p-3 ${
                      idx % 2 === 0 ? "bg-white" : "bg-zinc-50/70"
                    }`}
                  >
                    <span className="col-span-5 font-bold text-zinc-700">{key}</span>
                    <span className="col-span-7 text-zinc-900">{val}</span>
                  </div>
                ))}
              </div>

              {product.colorOptions && (
                <div className="text-xs text-zinc-600 pt-2 flex items-center gap-2">
                  <span className="font-bold text-zinc-800">
                    {dict.productDetail.colorOptionsLabel}
                  </span>
                  <span>{product.colorOptions.join(", ")}</span>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: EMI Breakdown */}
          {activeTab === "emi" && (
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4 text-xs">
              <div className="flex items-center gap-2 font-bold text-zinc-900">
                <CreditCard className="w-4 h-4 text-[#D82935]" />
                <span>
                  {dict.productDetail.financingTitle}
                </span>
              </div>
              <p className="text-zinc-600">
                {dict.productDetail.financingDesc}
              </p>

              <div className="grid grid-cols-3 gap-3 text-center pt-2">
                <div className="bg-white p-3 rounded-xl border border-zinc-200">
                  <span className="text-[10px] text-zinc-500 block">{dict.productDetail.sixMonths}</span>
                  <strong className="text-sm font-black text-zinc-900 font-mono">
                    ₹{Math.round(product.priceDemo / 6).toLocaleString("en-IN")}{dict.productDetail.perMonthUnit}
                  </strong>
                </div>
                <div className="bg-white p-3 rounded-xl border border-zinc-200">
                  <span className="text-[10px] text-zinc-500 block">{dict.productDetail.twelveMonths}</span>
                  <strong className="text-sm font-black text-zinc-900 font-mono">
                    ₹{Math.round(product.priceDemo / 12).toLocaleString("en-IN")}{dict.productDetail.perMonthUnit}
                  </strong>
                </div>
                <div className="bg-white p-3 rounded-xl border border-zinc-200">
                  <span className="text-[10px] text-zinc-500 block">{dict.productDetail.twentyFourMonths}</span>
                  <strong className="text-sm font-black text-zinc-900 font-mono">
                    ₹{Math.round(product.priceDemo / 24).toLocaleString("en-IN")}{dict.productDetail.perMonthUnit}
                  </strong>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Warranty & Support */}
          {activeTab === "warranty" && (
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3 text-xs">
              <div className="flex items-center gap-2 font-bold text-zinc-900">
                <ShieldCheck className="w-4 h-4 text-[#D82935]" />
                <span>{warranty}</span>
              </div>
              <ul className="space-y-2 text-zinc-600 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D82935] shrink-0" />
                  <span>
                    {dict.productDetail.warrantyCoverage1}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D82935] shrink-0" />
                  <span>
                    {dict.productDetail.warrantyCoverage2}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D82935] shrink-0" />
                  <span>
                    {dict.productDetail.warrantyCoverage3}
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-zinc-50 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={SHOWROOM_CONFIG.phoneTel}
            className="w-full sm:w-auto"
          >
            <Button
              variant="secondary"
              size="md"
              fullWidth
              icon={<Phone className="w-4 h-4 text-[#D82935]" />}
            >
              {dict.productDetail.callShowroomBtn}
            </Button>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="md"
              fullWidth
              icon={<MessageCircle className="w-4 h-4 fill-white text-[#D82935]" />}
            >
              {dict.productDetail.getBestOfferBtn}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
