"use client";

import React from "react";
import { Product, getProductImage } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { buildProductWhatsAppUrl } from "@/config/showroom";
import { X, Scale, MessageCircle, ShieldCheck, CheckCircle2 } from "lucide-react";

interface ProductComparisonModalProps {
  products: Product[];
  onClose: () => void;
  onRemove: (productId: string) => void;
  onClearAll: () => void;
}

export const ProductComparisonModal: React.FC<ProductComparisonModalProps> = ({
  products,
  onClose,
  onRemove,
  onClearAll,
}) => {
  const { dict, language } = useLanguage();

  if (products.length === 0) return null;

  const getProductWhatsapp = (p: Product) => {
    const name = language === "hi" ? p.name_hi : p.name_en;
    return buildProductWhatsAppUrl({
      productName: name,
      brand: p.brand,
      modelCode: p.modelCode,
      pageRefOrSlug: p.slug,
      language,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#111111] text-white flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <Scale className="w-5 h-5 text-[#D82935]" />
            <h2 className="text-lg font-black font-display text-white">
              {dict.comparison.matrixTitle}
            </h2>
            <span className="text-xs bg-zinc-900 border border-zinc-700 text-zinc-300 px-2.5 py-0.5 rounded-full font-mono">
              {products.length} {dict.comparison.itemsCountSuffix}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClearAll}
              className="text-xs text-zinc-400 hover:text-white underline transition"
            >
              {dict.comparison.clearAll}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 transition"
              aria-label="Close comparison"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Comparison Table */}
        <div className="p-6 overflow-x-auto overflow-y-auto">
          <table className="w-full min-w-[650px] border-collapse text-xs">
            <thead>
              <tr className="border-b border-zinc-200">
                <th className="p-4 text-left font-bold text-zinc-500 w-44 bg-zinc-50/80 rounded-tl-xl">
                  {dict.comparison.attributesLabel}
                </th>
                {products.map((p) => {
                  const name = language === "hi" ? p.name_hi : p.name_en;
                  return (
                    <th
                      key={p.id}
                      className="p-4 text-left font-bold text-zinc-900 w-60 border-l border-zinc-200 bg-white relative"
                    >
                      <button
                        onClick={() => onRemove(p.id)}
                        className="absolute top-2 right-2 p-1 text-zinc-400 hover:text-[#D82935] rounded-full hover:bg-zinc-100 transition"
                        title="Remove from comparison"
                      >
                        <X className="w-4 h-4" />
                      </button>

                      <span className="text-[10px] font-mono uppercase bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded font-black inline-block mb-1.5">
                        {p.brand}
                      </span>
                      <div className="w-full h-24 rounded-lg overflow-hidden my-1.5 border border-zinc-200 bg-zinc-50">
                        <img
                          src={getProductImage(p)}
                          alt={name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-sm font-bold text-zinc-900 line-clamp-2">
                        {name}
                      </div>
                      <div className="text-[10px] text-zinc-500 font-mono mt-0.5">
                        Model: {p.modelCode}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-200">
              {/* Category */}
              <tr>
                <td className="p-3.5 font-bold text-zinc-700 bg-zinc-50/50">
                  {dict.comparison.categoryLabel}
                </td>
                {products.map((p) => (
                  <td key={p.id} className="p-3.5 border-l border-zinc-200 uppercase font-semibold text-zinc-800">
                    {p.category}
                  </td>
                ))}
              </tr>

              {/* Demo Pricing */}
              <tr className="bg-red-50/30">
                <td className="p-3.5 font-bold text-zinc-900 bg-zinc-50/50">
                  {dict.comparison.priceLabel}
                </td>
                {products.map((p) => (
                  <td key={p.id} className="p-3.5 border-l border-zinc-200">
                    {p.showPrice ? (
                      <div>
                        <span className="text-base font-black text-zinc-900 font-display">
                          ₹{p.priceDemo.toLocaleString("en-IN")}
                        </span>
                        <span className="text-[10px] text-zinc-400 line-through block">
                          MRP: ₹{p.mrpDemo.toLocaleString("en-IN")}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs font-bold text-[#D82935]">
                        {dict.catalog.bestPriceOnEnquiry}
                      </span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Monthly EMI */}
              <tr>
                <td className="p-3.5 font-bold text-zinc-700 bg-zinc-50/50">
                  {dict.comparison.emiLabel}
                </td>
                {products.map((p) => (
                  <td key={p.id} className="p-3.5 border-l border-zinc-200 font-bold font-mono text-zinc-900">
                    ₹{p.emiMonthlyDemo.toLocaleString("en-IN")}/mo*
                  </td>
                ))}
              </tr>

              {/* Warranty */}
              <tr>
                <td className="p-3.5 font-bold text-zinc-700 bg-zinc-50/50">
                  {dict.comparison.warrantyLabel}
                </td>
                {products.map((p) => {
                  const w = language === "hi" ? p.warranty_hi : p.warranty_en;
                  return (
                    <td key={p.id} className="p-3.5 border-l border-zinc-200 text-zinc-700">
                      <div className="flex items-start gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#D82935] shrink-0 mt-0.5" />
                        <span>{w}</span>
                      </div>
                    </td>
                  );
                })}
              </tr>

              {/* Stock Status */}
              <tr>
                <td className="p-3.5 font-bold text-zinc-700 bg-zinc-50/50">
                  {dict.comparison.stockLabel}
                </td>
                {products.map((p) => (
                  <td key={p.id} className="p-3.5 border-l border-zinc-200">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-zinc-100 text-zinc-800 border border-zinc-300">
                      {dict.catalog.stockStatus.inShowroom}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Key Features */}
              <tr>
                <td className="p-3.5 font-bold text-zinc-700 bg-zinc-50/50 align-top">
                  {dict.comparison.highlightsLabel}
                </td>
                {products.map((p) => {
                  const specs = language === "hi" ? p.mainSpecs_hi : p.mainSpecs_en;
                  return (
                    <td key={p.id} className="p-3.5 border-l border-zinc-200 align-top">
                      <ul className="space-y-1 text-[11px] text-zinc-600">
                        {specs.map((s, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D82935] shrink-0 mt-1" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  );
                })}
              </tr>

              {/* Actions Row */}
              <tr>
                <td className="p-3.5 font-bold text-zinc-700 bg-zinc-50/50">
                  {dict.comparison.directEnquiryLabel}
                </td>
                {products.map((p) => (
                  <td key={p.id} className="p-3.5 border-l border-zinc-200">
                    <a
                      href={getProductWhatsapp(p)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button
                        variant="primary"
                        size="sm"
                        fullWidth
                        icon={<MessageCircle className="w-3.5 h-3.5 fill-white text-[#D82935]" />}
                      >
                        {dict.comparison.enquireDealBtn}
                      </Button>
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 bg-zinc-50 border-t border-zinc-200 text-center text-[11px] text-zinc-500">
          {dict.comparison.disclaimer}
        </div>
      </div>
    </div>
  );
};
