"use client";

import React, { useState, useEffect } from "react";
import { Product, ProductCategory, BrandName, StockStatus } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { X, Save, Edit3 } from "lucide-react";

interface EditProductModalProps {
  product: Product | null;
  onClose: () => void;
  onSave: (updated: Product) => void;
}

export const EditProductModal: React.FC<EditProductModalProps> = ({
  product,
  onClose,
  onSave,
}) => {
  const { dict } = useLanguage();

  const [name_en, setNameEn] = useState("");
  const [name_hi, setNameHi] = useState("");
  const [priceDemo, setPriceDemo] = useState<number>(0);
  const [mrpDemo, setMrpDemo] = useState<number>(0);
  const [emiMonthlyDemo, setEmiMonthlyDemo] = useState<number>(0);
  const [stockStatus, setStockStatus] = useState<StockStatus>("in_showroom");
  const [showPrice, setShowPrice] = useState<boolean>(true);
  const [isFeatured, setIsFeatured] = useState<boolean>(false);
  const [spec1, setSpec1] = useState("");
  const [spec2, setSpec2] = useState("");
  const [spec3, setSpec3] = useState("");

  useEffect(() => {
    if (product) {
      setNameEn(product.name_en);
      setNameHi(product.name_hi);
      setPriceDemo(product.priceDemo);
      setMrpDemo(product.mrpDemo);
      setEmiMonthlyDemo(product.emiMonthlyDemo);
      setStockStatus(product.stockStatus);
      setShowPrice(product.showPrice);
      setIsFeatured(product.isFeatured);
      setSpec1(product.mainSpecs_en[0] || "");
      setSpec2(product.mainSpecs_en[1] || "");
      setSpec3(product.mainSpecs_en[2] || "");
    }
  }, [product]);

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updated: Product = {
      ...product,
      name_en: name_en.trim(),
      name_hi: name_hi.trim() || name_en.trim(),
      priceDemo: Number(priceDemo),
      mrpDemo: Number(mrpDemo),
      emiMonthlyDemo: Number(emiMonthlyDemo),
      stockStatus,
      showPrice,
      isFeatured,
      mainSpecs_en: [spec1, spec2, spec3].filter(Boolean),
      mainSpecs_hi: [spec1, spec2, spec3].filter(Boolean),
    };

    onSave(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#111111] text-white flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Edit3 className="w-5 h-5 text-[#D82935]" />
            <div>
              <h3 className="text-base font-black font-display text-white">
                {dict.admin.productActions.edit}: {product.brand} {product.modelCode}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-zinc-400 hover:text-white bg-zinc-900 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
          <div>
            <label className="block font-bold text-zinc-700 mb-1">Product Title (English)</label>
            <input
              type="text"
              required
              value={name_en}
              onChange={(e) => setNameEn(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#D82935]"
            />
          </div>

          <div>
            <label className="block font-bold text-zinc-700 mb-1">Product Title (Hindi)</label>
            <input
              type="text"
              value={name_hi}
              onChange={(e) => setNameHi(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#D82935]"
            />
          </div>

          {/* Pricing Grid */}
          <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 grid grid-cols-3 gap-3">
            <div>
              <label className="block font-bold text-zinc-700 mb-1">Price (₹)</label>
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
              <label className="block font-bold text-zinc-700 mb-1">MRP (₹)</label>
              <input
                type="number"
                required
                value={mrpDemo}
                onChange={(e) => setMrpDemo(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-zinc-300 font-mono text-zinc-600 focus:outline-none focus:border-[#D82935]"
              />
            </div>
            <div>
              <label className="block font-bold text-zinc-700 mb-1">EMI/mo (₹)</label>
              <input
                type="number"
                required
                value={emiMonthlyDemo}
                onChange={(e) => setEmiMonthlyDemo(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-zinc-300 font-mono text-zinc-900 focus:outline-none focus:border-[#D82935]"
              />
            </div>
          </div>

          {/* Stock & Toggles */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-zinc-700 mb-1">Stock Availability</label>
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

            <div className="space-y-2 pt-2">
              <label className="flex items-center gap-2 cursor-pointer font-semibold text-zinc-800">
                <input
                  type="checkbox"
                  checked={showPrice}
                  onChange={(e) => setShowPrice(e.target.checked)}
                  className="w-4 h-4 accent-[#D82935] rounded"
                />
                <span>Visible Price</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer font-semibold text-zinc-800">
                <input
                  type="checkbox"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                  className="w-4 h-4 accent-[#D82935] rounded"
                />
                <span>Featured Showroom Deal</span>
              </label>
            </div>
          </div>

          {/* Specs */}
          <div className="space-y-2">
            <label className="block font-bold text-zinc-700">Specifications Highlights</label>
            <input
              type="text"
              value={spec1}
              onChange={(e) => setSpec1(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-[#D82935]"
            />
            <input
              type="text"
              value={spec2}
              onChange={(e) => setSpec2(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-[#D82935]"
            />
            <input
              type="text"
              value={spec3}
              onChange={(e) => setSpec3(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-[#D82935]"
            />
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-zinc-200 flex items-center justify-end gap-3">
            <Button type="button" variant="outline" size="sm" onClick={onClose}>
              {dict.admin.productActions.cancel}
            </Button>
            <Button type="submit" variant="primary" size="sm" icon={<Save className="w-3.5 h-3.5" />}>
              {dict.admin.productActions.save}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
