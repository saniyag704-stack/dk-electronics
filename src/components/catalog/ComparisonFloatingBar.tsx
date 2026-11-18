"use client";

import React from "react";
import { Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { Scale, X, ArrowRight } from "lucide-react";

interface ComparisonFloatingBarProps {
  comparedProducts: Product[];
  onOpenModal: () => void;
  onClear: () => void;
}

export const ComparisonFloatingBar: React.FC<ComparisonFloatingBarProps> = ({
  comparedProducts,
  onOpenModal,
  onClear,
}) => {
  const { dict } = useLanguage();

  if (comparedProducts.length === 0) return null;

  return (
    <div className="fixed bottom-6 inset-x-0 z-40 flex justify-center px-4 pointer-events-none animate-in slide-in-from-bottom-5 duration-200">
      <div className="bg-[#111111] text-white rounded-full shadow-2xl border border-zinc-700/80 p-2 sm:p-2.5 pl-4 sm:pl-5 flex items-center gap-3 sm:gap-4 pointer-events-auto max-w-xl w-full justify-between">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-8 h-8 rounded-full bg-[#D82935] flex items-center justify-center shrink-0">
            <Scale className="w-4 h-4 text-white" />
          </div>
          <div className="truncate">
            <span className="text-xs font-bold text-white block truncate">
              {comparedProducts.length} {dict.comparison.floatingSelectedText}
            </span>
            <span className="text-[10px] text-zinc-400 hidden sm:block truncate">
              {comparedProducts.map((p) => p.brand).join(", ")}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onClear}
            className="text-[11px] text-zinc-400 hover:text-white px-2 py-1 transition"
          >
            {dict.comparison.floatingClear}
          </button>

          <button
            type="button"
            onClick={onOpenModal}
            className="bg-[#D82935] hover:bg-[#BA1C27] text-white text-xs font-bold px-4 py-2 rounded-full shadow transition-all flex items-center gap-1.5 active:scale-95"
          >
            <span>{dict.comparison.floatingCompareNow}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
