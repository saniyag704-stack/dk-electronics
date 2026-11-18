"use client";

import React, { useState, useEffect } from "react";
import { Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { DollarSign, Save, X, Percent, CheckCircle2 } from "lucide-react";

interface UpdatePriceModalProps {
  product: Product | null;
  onClose: () => void;
  onSavePrice: (
    productId: string,
    newPrice: number,
    newMrp: number,
    newEmi: number,
    showPrice: boolean
  ) => void;
}

export const UpdatePriceModal: React.FC<UpdatePriceModalProps> = ({
  product,
  onClose,
  onSavePrice,
}) => {
  const { dict } = useLanguage();

  const [priceDemo, setPriceDemo] = useState<number>(0);
  const [mrpDemo, setMrpDemo] = useState<number>(0);
  const [emiMonthlyDemo, setEmiMonthlyDemo] = useState<number>(0);
  const [showPrice, setShowPrice] = useState<boolean>(true);

  useEffect(() => {
    if (product) {
      setPriceDemo(product.priceDemo);
      setMrpDemo(product.mrpDemo);
      setEmiMonthlyDemo(product.emiMonthlyDemo);
      setShowPrice(product.showPrice);
    }
  }, [product]);

  if (!product) return null;

  const discountPercent =
    mrpDemo > priceDemo && mrpDemo > 0
      ? Math.round(((mrpDemo - priceDemo) / mrpDemo) * 100)
      : 0;

  const savingsAmount = Math.max(0, mrpDemo - priceDemo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSavePrice(product.id, Number(priceDemo), Number(mrpDemo), Number(emiMonthlyDemo), showPrice);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#111111] text-white flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-[#D82935]" />
            <h3 className="text-base font-black font-display text-white">
              {dict.admin.productActions.updatePrice}: {product.modelCode}
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

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          <div className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-200 text-zinc-800">
            <div className="font-bold text-sm truncate">{product.name_en}</div>
            <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
              Brand: <strong className="text-zinc-900">{product.brand}</strong> • Model: <strong className="text-zinc-900">{product.modelCode}</strong>
            </div>
          </div>

          <div>
            <label className="block font-bold text-zinc-700 mb-1">
              Showroom Offer Price (₹) *
            </label>
            <input
              type="number"
              required
              min={100}
              value={priceDemo}
              onChange={(e) => {
                const val = Number(e.target.value);
                setPriceDemo(val);
                setEmiMonthlyDemo(Math.round(val / 12));
              }}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 font-mono font-black text-base text-zinc-900 focus:outline-none focus:border-[#D82935]"
            />
          </div>

          <div>
            <label className="block font-bold text-zinc-700 mb-1">
              Maximum Retail Price / MRP (₹) *
            </label>
            <input
              type="number"
              required
              min={100}
              value={mrpDemo}
              onChange={(e) => setMrpDemo(Number(e.target.value))}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 font-mono text-zinc-600 focus:outline-none focus:border-[#D82935]"
            />
          </div>

          <div>
            <label className="block font-bold text-zinc-700 mb-1">
              0% Showroom Scheme Monthly EMI (₹)
            </label>
            <input
              type="number"
              required
              min={10}
              value={emiMonthlyDemo}
              onChange={(e) => setEmiMonthlyDemo(Number(e.target.value))}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 font-mono font-bold text-zinc-900 focus:outline-none focus:border-[#D82935]"
            />
          </div>

          {/* Computed Savings Callout */}
          <div className="p-3 bg-red-50/50 rounded-xl border border-red-100 flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-600">Customer Savings:</span>
            <div className="text-right">
              <strong className="text-[#D82935] font-bold block">
                ₹{savingsAmount.toLocaleString("en-IN")} ({discountPercent}% OFF)
              </strong>
            </div>
          </div>

          {/* Visibility Checkbox */}
          <div className="pt-2">
            <label className="flex items-center gap-2.5 cursor-pointer text-zinc-800 font-semibold">
              <input
                type="checkbox"
                checked={showPrice}
                onChange={(e) => setShowPrice(e.target.checked)}
                className="w-4 h-4 accent-[#D82935] rounded"
              />
              <span>Display Price to Public (uncheck for &quot;Enquire for Price&quot;)</span>
            </label>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-zinc-200 flex items-center justify-end gap-3">
            <Button type="button" variant="outline" size="sm" onClick={onClose}>
              {dict.admin.productActions.cancel}
            </Button>
            <Button type="submit" variant="primary" size="sm" icon={<Save className="w-3.5 h-3.5" />}>
              Save Price Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
