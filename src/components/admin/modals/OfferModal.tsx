"use client";

import React, { useState } from "react";
import { ShowroomOffer } from "@/components/admin/types";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Sparkles, Save, X, Tag } from "lucide-react";

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (offer: ShowroomOffer) => void;
}

export const OfferModal: React.FC<OfferModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const { dict } = useLanguage();

  const [title_en, setTitleEn] = useState("");
  const [title_hi, setTitleHi] = useState("");
  const [badge_en, setBadgeEn] = useState("Showroom Special");
  const [badge_hi, setBadgeHi] = useState("विशेष शोरूम छूट");
  const [discountSummary, setDiscountSummary] = useState("Instant ₹5,000 Cashback + Free Installation");
  const [applicableCategory, setApplicableCategory] = useState("Smart TVs & Appliances");
  const [validUntil, setValidUntil] = useState("31 Dec 2026");
  const [isActive, setIsActive] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title_en.trim()) return;

    const newOffer: ShowroomOffer = {
      id: `offer-${Date.now()}`,
      title_en: title_en.trim(),
      title_hi: title_hi.trim() || title_en.trim(),
      badge_en,
      badge_hi,
      discountSummary,
      applicableCategory,
      validUntil,
      isActive,
    };

    onSave(newOffer);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#111111] text-white flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#D82935]" />
            <h3 className="text-base font-black font-display text-white">
              {dict.admin.offers.createOffer}
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
          <div>
            <label className="block font-bold text-zinc-700 mb-1">
              Campaign Offer Title (English) *
            </label>
            <input
              type="text"
              required
              value={title_en}
              onChange={(e) => setTitleEn(e.target.value)}
              placeholder="e.g. Festive Home Theater Mega Combo"
              className="w-full px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#D82935]"
            />
          </div>

          <div>
            <label className="block font-bold text-zinc-700 mb-1">
              Campaign Offer Title (Hindi - हिन्दी)
            </label>
            <input
              type="text"
              value={title_hi}
              onChange={(e) => setTitleHi(e.target.value)}
              placeholder="e.g. त्योहारी होम थिएटर मेगा कॉम्बो बचत"
              className="w-full px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#D82935]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-zinc-700 mb-1">
                Badge Text (English)
              </label>
              <input
                type="text"
                value={badge_en}
                onChange={(e) => setBadgeEn(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#D82935]"
              />
            </div>
            <div>
              <label className="block font-bold text-zinc-700 mb-1">
                Badge Text (Hindi)
              </label>
              <input
                type="text"
                value={badge_hi}
                onChange={(e) => setBadgeHi(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#D82935]"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-zinc-700 mb-1">
              Discount Summary / Free Gifts *
            </label>
            <input
              type="text"
              required
              value={discountSummary}
              onChange={(e) => setDiscountSummary(e.target.value)}
              placeholder="e.g. Free 160W Soundbar with all 55+ inch 4K OLED TVs"
              className="w-full px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#D82935]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-zinc-700 mb-1">
                Applicable Category
              </label>
              <input
                type="text"
                value={applicableCategory}
                onChange={(e) => setApplicableCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#D82935]"
              />
            </div>

            <div>
              <label className="block font-bold text-zinc-700 mb-1">
                Valid Until
              </label>
              <input
                type="text"
                value={validUntil}
                onChange={(e) => setValidUntil(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#D82935]"
              />
            </div>
          </div>

          <div className="pt-2">
            <label className="flex items-center gap-2 cursor-pointer font-semibold text-zinc-800">
              <input
                type="checkbox"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                className="w-4 h-4 accent-[#D82935] rounded"
              />
              <span>Activate Offer on Showroom Frontend</span>
            </label>
          </div>

          <div className="pt-4 border-t border-zinc-200 flex items-center justify-end gap-3">
            <Button type="button" variant="outline" size="sm" onClick={onClose}>
              {dict.admin.productActions.cancel}
            </Button>
            <Button type="submit" variant="primary" size="sm" icon={<Save className="w-3.5 h-3.5" />}>
              Create Promotion
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
