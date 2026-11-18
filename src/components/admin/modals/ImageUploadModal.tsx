"use client";

import React, { useState } from "react";
import { Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import {
  UploadCloud,
  Image as ImageIcon,
  CheckCircle2,
  X,
  Sparkles,
  Link as LinkIcon,
  HardDrive,
} from "lucide-react";

interface ImageUploadModalProps {
  product: Product | null;
  onClose: () => void;
  onSaveImage: (productId: string, imageUrl: string) => void;
}

export const ImageUploadModal: React.FC<ImageUploadModalProps> = ({
  product,
  onClose,
  onSaveImage,
}) => {
  const { dict, language } = useLanguage();
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [uploadSuccess, setUploadSuccess] = useState(false);

  if (!product) return null;

  const samplePresets = [
    { label: "OLED TV Presentation", url: "/images/products/tv-oled.jpg" },
    { label: "Smart Refrigerator", url: "/images/products/refrigerator.jpg" },
    { label: "Dual Inverter AC", url: "/images/products/ac-inverter.jpg" },
    { label: "Front Load Washing Machine", url: "/images/products/washing-machine.jpg" },
    { label: "Flagship 5G Smartphone", url: "/images/products/smartphone.jpg" },
  ];

  const handleSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file.name);
      setImageUrl(`https://cdn.dkelectronics.demo/uploads/${file.name}`);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const finalUrl = imageUrl || (selectedFile ? `https://cdn.dkelectronics.demo/uploads/${selectedFile}` : "");
    if (!finalUrl) return;

    onSaveImage(product.id, finalUrl);
    setUploadSuccess(true);
    setTimeout(() => {
      setUploadSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#111111] text-white flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <UploadCloud className="w-5 h-5 text-[#D82935]" />
            <h3 className="text-base font-black font-display text-white">
              {dict.admin.productActions.uploadImage}: {product.modelCode}
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

        {/* Content */}
        <div className="p-6 space-y-5 text-xs">
          {/* Target Product */}
          <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 flex items-center justify-between">
            <span className="font-bold text-zinc-900 truncate">{product.name_en}</span>
            <span className="font-mono text-[10px] bg-zinc-900 text-white px-2 py-0.5 rounded font-black shrink-0">
              {product.brand}
            </span>
          </div>

          {/* Drag & Drop Simulation Zone */}
          <div className="border-2 border-dashed border-zinc-300 rounded-2xl p-6 text-center hover:border-[#D82935] hover:bg-red-50/10 transition cursor-pointer relative group">
            <input
              type="file"
              accept="image/png, image/jpeg, image/webp"
              onChange={handleSimulatedUpload}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            />
            <div className="w-12 h-12 rounded-xl bg-zinc-100 group-hover:bg-red-50 text-zinc-500 group-hover:text-[#D82935] flex items-center justify-center mx-auto mb-2 transition">
              <UploadCloud className="w-6 h-6" />
            </div>
            <strong className="block text-zinc-900 font-bold mb-0.5">
              Drag & Drop product photography here
            </strong>
            <span className="text-[11px] text-zinc-500 block">
              Supports JPG, PNG, WebP up to 10MB
            </span>
            {selectedFile && (
              <div className="mt-3 inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[11px] font-mono px-3 py-1 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Selected: {selectedFile}</span>
              </div>
            )}
          </div>

          {/* Or Direct CDN / Image URL Input */}
          <div>
            <label className="block font-bold text-zinc-700 mb-1 flex items-center gap-1.5">
              <LinkIcon className="w-3.5 h-3.5 text-zinc-400" />
              <span>Or specify external Image URL:</span>
            </label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://images.unsplash.com/... or https://your-cdn.com/..."
              className="w-full px-3 py-2 rounded-xl border border-zinc-300 font-mono text-[11px] focus:outline-none focus:border-[#D82935]"
            />
          </div>

          {/* Sample Presets */}
          <div>
            <span className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2">
              Showroom Presets:
            </span>
            <div className="flex flex-wrap gap-2">
              {samplePresets.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setImageUrl(preset.url)}
                  className="px-2.5 py-1 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-[11px] font-medium transition"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Production Notice */}
          <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 text-[11px] text-zinc-500 leading-relaxed flex items-start gap-2">
            <HardDrive className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
            <p>
              In production with Supabase/Firebase, uploads are stored securely in a dedicated <code className="font-mono text-zinc-800">product-images</code> storage bucket with automatic WebP conversion and CDN caching.
            </p>
          </div>

          {/* Actions */}
          <div className="pt-3 border-t border-zinc-200 flex items-center justify-end gap-3">
            <Button type="button" variant="outline" size="sm" onClick={onClose}>
              {dict.admin.productActions.cancel}
            </Button>
            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={handleSave}
              disabled={!imageUrl && !selectedFile}
              icon={uploadSuccess ? <CheckCircle2 className="w-3.5 h-3.5" /> : <UploadCloud className="w-3.5 h-3.5" />}
            >
              {uploadSuccess ? "Image Linked!" : "Save Image Reference"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
