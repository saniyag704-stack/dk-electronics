"use client";

import React, { useState, useMemo, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProductCard } from "@/components/catalog/ProductCard";
import { ProductDetailModal } from "@/components/catalog/ProductDetailModal";
import { ProductComparisonModal } from "@/components/catalog/ProductComparisonModal";
import { ComparisonFloatingBar } from "@/components/catalog/ComparisonFloatingBar";
import {
  PRODUCTS_DATA,
  Product,
  ProductCategory,
  BrandName,
} from "@/data/products";
import { getStoredProducts } from "@/lib/productStore";
import { useLanguage } from "@/context/LanguageContext";
import {
  Search,
  Filter,
  SlidersHorizontal,
  X,
  RotateCcw,
  Sparkles,
  ShieldAlert,
  Info,
} from "lucide-react";

export default function ProductsPage() {
  const { dict, language } = useLanguage();

  const [productsList, setProductsList] = useState<Product[]>(PRODUCTS_DATA);

  useEffect(() => {
    setProductsList(getStoredProducts());
    const handleUpdate = () => {
      setProductsList(getStoredProducts());
    };
    window.addEventListener("dk_catalog_updated", handleUpdate);
    return () => window.removeEventListener("dk_catalog_updated", handleUpdate);
  }, []);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">("all");
  const [selectedBrand, setSelectedBrand] = useState<BrandName | "all">("all");
  const [featuredOnly, setFeaturedOnly] = useState<boolean>(false);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  // Modal states
  const [activeDetailProduct, setActiveDetailProduct] = useState<Product | null>(null);
  const [comparedProducts, setComparedProducts] = useState<Product[]>([]);
  const [comparisonModalOpen, setComparisonModalOpen] = useState<boolean>(false);

  // 8 Official Product Categories
  const categoriesList = [
    { id: "all" as const, label: dict.catalog.allCategories },
    { id: "smartphones" as const, label: dict.categories.smartphones },
    { id: "laptops" as const, label: dict.categories.laptops },
    { id: "tvs" as const, label: dict.categories.tvs },
    { id: "acs" as const, label: dict.categories.airConditioners },
    { id: "refrigerators" as const, label: dict.categories.refrigerators },
    { id: "washing" as const, label: dict.categories.washingMachines },
    { id: "home-appliances" as const, label: dict.categories.microwaves },
    { id: "accessories" as const, label: dict.categories.audio },
  ];

  // 7 Brands identified in showroom photograph
  const brandsList: (BrandName | "all")[] = [
    "all",
    "Samsung",
    "Apple",
    "vivo",
    "LG",
    "Hyundai",
    "Whirlpool",
    "Canon",
  ];

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return productsList.filter((p) => {
      // 1. Category Filter
      if (selectedCategory !== "all" && p.category !== selectedCategory) {
        return false;
      }

      // 2. Brand Filter
      if (selectedBrand !== "all" && p.brand !== selectedBrand) {
        return false;
      }

      // 3. Featured Filter
      if (featuredOnly && !p.isFeatured) {
        return false;
      }

      // 4. In Stock Filter
      if (inStockOnly && p.stockStatus !== "in_showroom") {
        return false;
      }

      // 5. Search Filter (matches name, brand, model code, or specs)
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const name = (language === "hi" ? p.name_hi : p.name_en).toLowerCase();
        const brand = p.brand.toLowerCase();
        const model = p.modelCode.toLowerCase();
        const matches = name.includes(q) || brand.includes(q) || model.includes(q);
        if (!matches) return false;
      }

      return true;
    });
  }, [selectedCategory, selectedBrand, featuredOnly, inStockOnly, searchQuery, language]);

  // Comparison toggle
  const handleToggleCompare = (product: Product) => {
    if (comparedProducts.some((p) => p.id === product.id)) {
      setComparedProducts(comparedProducts.filter((p) => p.id !== product.id));
    } else {
      if (comparedProducts.length >= 4) {
        alert(dict.comparison.maxComparisonAlert);
        return;
      }
      setComparedProducts([...comparedProducts, product]);
    }
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedBrand("all");
    setFeaturedOnly(false);
    setInStockOnly(false);
  };

  return (
    <MainLayout>
      {/* 1. Header Banner */}
      <section className="bg-[#111111] text-white py-12 border-b border-zinc-800">
        <Container>
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[#D82935]" />
              <span>
                DK Electronics • {dict.catalog.title}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
              {dict.catalog.title}
            </h1>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
              {dict.catalog.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Interactive Discovery & Filter Bar */}
      <section className="bg-white border-b border-zinc-200 py-5 sticky top-20 z-30 shadow-sm">
        <Container>
          <div className="space-y-4">
            {/* Top Row: Search & Quick Toggles */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              {/* Live Search */}
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={dict.catalog.searchPlaceholder}
                  className="w-full bg-[#F5F5F5] border border-zinc-200 text-zinc-900 text-xs rounded-full pl-10 pr-9 py-2.5 focus:outline-none focus:border-[#D82935] focus:bg-white transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Toggles & Reset */}
              <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-between md:justify-end">
                {/* Featured Toggle */}
                <button
                  type="button"
                  onClick={() => setFeaturedOnly(!featuredOnly)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                    featuredOnly
                      ? "bg-[#D82935] text-white border-[#D82935]"
                      : "bg-zinc-100 text-zinc-700 border-zinc-200 hover:bg-zinc-200"
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>{dict.catalog.featuredDeals}</span>
                </button>

                {/* In Stock Toggle */}
                <button
                  type="button"
                  onClick={() => setInStockOnly(!inStockOnly)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                    inStockOnly
                      ? "bg-[#111111] text-white border-[#111111]"
                      : "bg-zinc-100 text-zinc-700 border-zinc-200 hover:bg-zinc-200"
                  }`}
                >
                  <span>{dict.catalog.inStockDemo}</span>
                </button>

                {/* Reset Filters */}
                {(selectedCategory !== "all" ||
                  selectedBrand !== "all" ||
                  featuredOnly ||
                  inStockOnly ||
                  searchQuery) && (
                  <button
                    onClick={handleResetFilters}
                    className="text-xs text-[#D82935] hover:underline flex items-center gap-1 font-semibold ml-2"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{dict.catalog.resetBtn}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Middle Row: 8 Official Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {categoriesList.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? "bg-[#111111] text-white shadow-sm font-bold"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Bottom Row: 7 Storefront Brand Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pt-1 border-t border-zinc-100 scrollbar-none text-xs">
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider shrink-0 mr-1">
                {dict.catalog.brandLabel}
              </span>
              {brandsList.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition-all ${
                    selectedBrand === brand
                      ? "bg-[#D82935] text-white shadow-sm"
                      : "bg-zinc-100 text-zinc-700 hover:text-black hover:bg-zinc-200"
                  }`}
                >
                  {brand === "all" ? dict.catalog.allBrands : brand}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Product Grid & Results */}
      <section className="py-12 bg-[#F5F5F5] min-h-[500px]">
        <Container>
          {/* Results count & active filter summary */}
          <div className="flex items-center justify-between mb-8 text-xs text-zinc-500">
            <span>
              {dict.catalog.showingResults} <strong className="text-zinc-900">{filteredProducts.length}</strong>{" "}
              {dict.catalog.resultsSuffix}
            </span>
            <span className="text-[11px] text-zinc-400 hidden sm:inline">
              {dict.catalog.showroomAssurance}
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl border border-zinc-200 p-8 space-y-4 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-zinc-100 text-zinc-400 flex items-center justify-center mx-auto">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-zinc-900">
                {dict.catalog.noResultsTitle}
              </h3>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                {dict.catalog.noResultsDesc}
              </p>
              <Button variant="secondary" size="sm" onClick={handleResetFilters}>
                {dict.catalog.clearFiltersBtn}
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => {
                const isCompared = comparedProducts.some((p) => p.id === product.id);

                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={(p) => setActiveDetailProduct(p)}
                    isCompared={isCompared}
                    onToggleCompare={handleToggleCompare}
                  />
                );
              })}
            </div>
          )}
        </Container>
      </section>

      {/* 4. Product Detail Modal */}
      <ProductDetailModal
        product={activeDetailProduct}
        onClose={() => setActiveDetailProduct(null)}
      />

      {/* 5. Product Comparison Modal */}
      {comparisonModalOpen && (
        <ProductComparisonModal
          products={comparedProducts}
          onClose={() => setComparisonModalOpen(false)}
          onRemove={(id) =>
            setComparedProducts(comparedProducts.filter((p) => p.id !== id))
          }
          onClearAll={() => {
            setComparedProducts([]);
            setComparisonModalOpen(false);
          }}
        />
      )}

      {/* 6. Sticky Floating Comparison Bar */}
      <ComparisonFloatingBar
        comparedProducts={comparedProducts}
        onOpenModal={() => setComparisonModalOpen(true)}
        onClear={() => setComparedProducts([])}
      />
    </MainLayout>
  );
}
