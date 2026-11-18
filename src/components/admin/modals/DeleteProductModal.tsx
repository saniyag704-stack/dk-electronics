"use client";

import React from "react";
import { Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { AlertTriangle, Trash2, X } from "lucide-react";

interface DeleteProductModalProps {
  product: Product | null;
  onClose: () => void;
  onConfirm: (productId: string) => void;
}

export const DeleteProductModal: React.FC<DeleteProductModalProps> = ({
  product,
  onClose,
  onConfirm,
}) => {
  const { dict, language } = useLanguage();

  if (!product) return null;

  const productName = language === "hi" ? product.name_hi : product.name_en;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden p-6 sm:p-8 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-red-50 text-[#D82935] flex items-center justify-center mx-auto border border-red-100 shadow-sm">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-black text-zinc-900 font-display">
          {dict.admin.productActions.deleteConfirmTitle}
        </h3>

        <p className="text-xs text-zinc-600 leading-relaxed">
          {dict.admin.productActions.deleteConfirmDesc}
        </p>

        {/* Product preview chip */}
        <div className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-200 text-left text-xs font-mono">
          <div className="font-bold text-zinc-900 line-clamp-1">{productName}</div>
          <div className="text-[11px] text-zinc-500 mt-0.5">
            Brand: <strong className="text-zinc-800">{product.brand}</strong> • Model: <strong className="text-zinc-800">{product.modelCode}</strong>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-center gap-3">
          <Button type="button" variant="outline" size="sm" onClick={onClose}>
            {dict.admin.productActions.cancel}
          </Button>
          <Button
            type="button"
            variant="primary"
            size="sm"
            onClick={() => {
              onConfirm(product.id);
              onClose();
            }}
            icon={<Trash2 className="w-3.5 h-3.5" />}
          >
            {dict.admin.productActions.delete}
          </Button>
        </div>
      </div>
    </div>
  );
};
