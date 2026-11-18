"use client";

import React, { useState } from "react";
import { Product, ProductCategory, BrandName, StockStatus } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { X, Plus, Sparkles, Tag, ShieldCheck, DollarSign } from "lucide-react";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (product: Product) => void;
}

export const AddProductModal: React.FC<AddProductModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const { dict, language } = useLanguage();

  const [brand, setBrand] = useState<BrandName>("Samsung");
  const [category, setCategory] = useState<ProductCategory>("tvs");
  const [name_en, setNameEn] = useState("");
  const [name_hi, setNameHi] = useState("");
  const [modelCode, setModelCode] = useState("");
  const [tagline_en, setTaglineEn] = useState("");
  const [tagline_hi, setTaglineHi] = useState("");
  const [mrpDemo, setMrpDemo] = useState<number>(75000);
  const [priceDemo, setPriceDemo] = useState<number>(62990);
  const [emiMonthlyDemo, setEmiMonthlyDemo] = useState<number>(5250);
  const [showPrice, setShowPrice] = useState<boolean>(true);
  const [stockStatus, setStockStatus] = useState<StockStatus>("in_showroom");
  const [warranty_en, setWarrantyEn] = useState("1 Year Comprehensive Brand Warranty");
  const [warranty_hi, setWarrantyHi] = useState("1 वर्ष की व्यापक आधिकारिक ब्रांड वारंटी");
  const [spec1, setSpec1] = useState("4K Ultra HD Display with HDR10+");
  const [spec2, setSpec2] = useState("Smart TV OS with Dolby Atmos Audio");
  const [spec3, setSpec3] = useState("3x HDMI, 2x USB, Dual-band WiFi");
  const [isFeatured, setIsFeatured] = useState<boolean>(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name_en.trim() || !modelCode.trim()) return;

    const slug = `${brand.toLowerCase()}-${modelCode.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${Date.now().toString().slice(-4)}`;

    const newProduct: Product = {
      id: `prod-${Date.now()}`,
      slug,
      brand,
      category,
      name_en: name_en.trim(),
      name_hi: name_hi.trim() || name_en.trim(),
      modelCode: modelCode.trim().toUpperCase(),
      tagline_en: tagline_en.trim() || "Showroom Display Model",
      tagline_hi: tagline_hi.trim() || "शोरूम प्रदर्शन मॉडल",
      mrpDemo: Number(mrpDemo),
      priceDemo: Number(priceDemo),
      showPrice,
      emiMonthlyDemo: Number(emiMonthlyDemo),
      stockStatus,
      warranty_en,
      warranty_hi,
      mainSpecs_en: [spec1, spec2, spec3].filter(Boolean),
      mainSpecs_hi: [spec1, spec2, spec3].filter(Boolean),
      detailedSpecs_en: {
        "Model Code": modelCode.toUpperCase(),
        Brand: brand,
        Category: category.toUpperCase(),
        Warranty: warranty_en,
      },
      detailedSpecs_hi: {
        "मॉडल कोड": modelCode.toUpperCase(),
        ब्रांड: brand,
        श्रेणी: category.toUpperCase(),
        वारंटी: warranty_hi,
      },
      isFeatured,
      colorOptions: ["Black", "Titanium Gray"],
    };

    onAdd(newProduct);
    onClose();
  };

  const brandOptions: BrandName[] = [
    "Samsung",
    "Apple",
    "vivo",
    "LG",
    "Hyundai",
    "Whirlpool",
    "Canon",
  ];

  const categoryOptions: { id: ProductCategory; label: string }[] = [
    { id: "smartphones", label: dict.categories.smartphones },
    { id: "laptops", label: dict.categories.laptops },
    { id: "tvs", label: dict.categories.tvs },
    { id: "acs", label: dict.categories.airConditioners },
    { id: "refrigerators", label: dict.categories.refrigerators },
    { id: "washing", label: dict.categories.washingMachines },
    { id: "home-appliances", label: dict.categories.microwaves },
    { id: "accessories", label: dict.categories.audio },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#111111] text-white flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <Plus className="w-5 h-5 text-[#D82935]" />
            <h3 className="text-lg font-black font-display text-white">
              {dict.admin.productActions.addNew}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-zinc-400 hover:text-white bg-zinc-900 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 text-xs">
          {/* Brand & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-zinc-700 mb-1">Brand Name *</label>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value as BrandName)}
                className="w-full px-3 py-2 rounded-xl border border-zinc-300 bg-white font-semibold text-zinc-900 focus:outline-none focus:border-[#D82935]"
              >
                {brandOptions.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bold text-zinc-700 mb-1">Product Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ProductCategory)}
                className="w-full px-3 py-2 rounded-xl border border-zinc-300 bg-white font-semibold text-zinc-900 focus:outline-none focus:border-[#D82935]"
              >
                {categoryOptions.map((c) => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Model Name & Code */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block font-bold text-zinc-700 mb-1">Product Title (English) *</label>
              <input
                type="text"
                required
                value={name_en}
                onChange={(e) => setNameEn(e.target.value)}
                placeholder="e.g. Sony Bravia XR 65-inch OLED 4K TV"
                className="w-full px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#D82935]"
              />
            </div>
            <div>
              <label className="block font-bold text-zinc-700 mb-1">Model Code *</label>
              <input
                type="text"
                required
                value={modelCode}
                onChange={(e) => setModelCode(e.target.value)}
                placeholder="e.g. XR-65A80L"
                className="w-full px-3 py-2 rounded-xl border border-zinc-300 font-mono uppercase focus:outline-none focus:border-[#D82935]"
              />
            </div>
          </div>

          {/* Hindi Title */}
          <div>
            <label className="block font-bold text-zinc-700 mb-1">Product Title (Hindi - हिन्दी)</label>
            <input
              type="text"
              value={name_hi}
              onChange={(e) => setNameHi(e.target.value)}
              placeholder="e.g. सोनी ब्राविया XR 65-इंच OLED 4K स्मार्ट टीवी"
              className="w-full px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#D82935]"
            />
          </div>

          {/* Pricing Row: Price, MRP, EMI */}
          <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-bold text-zinc-700 mb-1">Showroom Price (₹) *</label>
              <input
                type="number"
                required
                value={priceDemo}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setPriceDemo(val);
                  setEmiMonthlyDemo(Math.round(val / 12));
                }}
                className="w-full px-3 py-2 rounded-xl border border-zinc-300 font-mono font-bold text-zinc-900 focus:outline-none focus:border-[#D82935]"
              />
            </div>

            <div>
              <label className="block font-bold text-zinc-700 mb-1">MRP Demo (₹) *</label>
              <input
                type="number"
                required
                value={mrpDemo}
                onChange={(e) => setMrpDemo(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-zinc-300 font-mono text-zinc-600 focus:outline-none focus:border-[#D82935]"
              />
            </div>

            <div>
              <label className="block font-bold text-zinc-700 mb-1">0% Monthly EMI (₹)</label>
              <input
                type="number"
                required
                value={emiMonthlyDemo}
                onChange={(e) => setEmiMonthlyDemo(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-zinc-300 font-mono text-zinc-900 focus:outline-none focus:border-[#D82935]"
              />
            </div>
          </div>

          {/* Stock Status & Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div>
              <label className="block font-bold text-zinc-700 mb-1">Stock Availability *</label>
              <select
                value={stockStatus}
                onChange={(e) => setStockStatus(e.target.value as StockStatus)}
                className="w-full px-3 py-2 rounded-xl border border-zinc-300 bg-white font-semibold text-zinc-900 focus:outline-none focus:border-[#D82935]"
              >
                <option value="in_showroom">In Showroom Stock</option>
                <option value="limited">Limited Stock Units</option>
                <option value="order_basis">Available on Order</option>
              </select>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <input
                type="checkbox"
                id="showPriceCheck"
                checked={showPrice}
                onChange={(e) => setShowPrice(e.target.checked)}
                className="w-4 h-4 accent-[#D82935] rounded"
              />
              <label htmlFor="showPriceCheck" className="font-semibold text-zinc-800 cursor-pointer">
                Display Price to Public
              </label>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <input
                type="checkbox"
                id="featuredCheck"
                checked={isFeatured}
                onChange={(e) => setIsFeatured(e.target.checked)}
                className="w-4 h-4 accent-[#D82935] rounded"
              />
              <label htmlFor="featuredCheck" className="font-semibold text-zinc-800 cursor-pointer">
                Mark as Featured Showroom Deal
              </label>
            </div>
          </div>

          {/* Specifications Bullets */}
          <div className="space-y-2">
            <label className="block font-bold text-zinc-700">Key Specifications (Bullets)</label>
            <input
              type="text"
              value={spec1}
              onChange={(e) => setSpec1(e.target.value)}
              placeholder="Specification Bullet 1"
              className="w-full px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#D82935]"
            />
            <input
              type="text"
              value={spec2}
              onChange={(e) => setSpec2(e.target.value)}
              placeholder="Specification Bullet 2"
              className="w-full px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#D82935]"
            />
            <input
              type="text"
              value={spec3}
              onChange={(e) => setSpec3(e.target.value)}
              placeholder="Specification Bullet 3"
              className="w-full px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#D82935]"
            />
          </div>

          {/* Submit & Cancel */}
          <div className="pt-4 border-t border-zinc-200 flex items-center justify-end gap-3">
            <Button type="button" variant="outline" size="sm" onClick={onClose}>
              {dict.admin.productActions.cancel}
            </Button>
            <Button type="submit" variant="primary" size="sm" icon={<Plus className="w-3.5 h-3.5" />}>
              {dict.admin.productActions.addNew}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
