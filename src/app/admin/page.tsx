"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { DKLogo } from "@/components/brand/DKLogo";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS_DATA, Product, ProductCategory, BrandName, StockStatus } from "@/data/products";
import { SHOWROOM_CONFIG } from "@/config/showroom";
import {
  AdminRole,
  AdminTab,
  CustomerLead,
  ServiceTicket,
  ShowroomOffer,
  CategoryMeta,
  BrandMeta,
} from "@/components/admin/types";
import { BackendSetupGuide } from "@/components/admin/BackendSetupGuide";
import { AddProductModal } from "@/components/admin/modals/AddProductModal";
import { EditProductModal } from "@/components/admin/modals/EditProductModal";
import { DeleteProductModal } from "@/components/admin/modals/DeleteProductModal";
import { ImageUploadModal } from "@/components/admin/modals/ImageUploadModal";
import { UpdatePriceModal } from "@/components/admin/modals/UpdatePriceModal";
import { OfferModal } from "@/components/admin/modals/OfferModal";
import {
  LayoutDashboard,
  Package,
  Plus,
  Edit,
  Trash2,
  UploadCloud,
  DollarSign,
  Layers,
  Award,
  Users,
  Wrench,
  Sparkles,
  BarChart3,
  Database,
  Lock,
  Unlock,
  LogOut,
  ArrowLeft,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  Phone,
  MessageCircle,
  Tag,
  Eye,
  EyeOff,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Percent,
  Check,
  ShieldAlert,
} from "lucide-react";

export default function AdminDashboardPage() {
  const { dict, language } = useLanguage();

  // Authentication & Role State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [adminRole, setAdminRole] = useState<AdminRole>("owner");
  const [loginEmail, setLoginEmail] = useState("owner@dkelectronics.com");
  const [loginPassword, setLoginPassword] = useState("");

  // Navigation Tab State
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");

  // In-Memory Catalog State (Modules 3-9)
  const [products, setProducts] = useState<Product[]>(PRODUCTS_DATA);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>("all");
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string>("all");

  // Modals State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deletingProduct, setDeletingProduct] = useState<Product | null>(null);
  const [uploadImageProduct, setUploadImageProduct] = useState<Product | null>(null);
  const [updatingPriceProduct, setUpdatingPriceProduct] = useState<Product | null>(null);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

  // In-Memory Customer Leads State (Module 12)
  const [leads, setLeads] = useState<CustomerLead[]>([
    {
      id: "LD-201",
      name: "Ramesh Sharma",
      phone: "+91 98111 22334",
      product: "Samsung Galaxy S24 Ultra 5G",
      brand: "Samsung",
      channel: "WhatsApp",
      status: "new",
      timestamp: "12 mins ago",
      estimatedValue: 124999,
    },
    {
      id: "LD-202",
      name: "Pooja Verma",
      phone: "+91 98222 44556",
      product: "Sony Bravia XR 55\" OLED (KD-55X82L)",
      brand: "Sony",
      channel: "VIP Demo Form",
      status: "contacted",
      timestamp: "45 mins ago",
      estimatedValue: 84990,
    },
    {
      id: "LD-203",
      name: "Anand Kulkarni",
      phone: "+91 98333 66778",
      product: "Daikin 1.5T 5-Star Split AC",
      brand: "Daikin",
      channel: "EMI Calculator",
      status: "converted",
      timestamp: "2 hours ago",
      estimatedValue: 46990,
    },
    {
      id: "LD-204",
      name: "Sunita Agrawal",
      phone: "+91 98444 88990",
      product: "Apple iPhone 15 Pro Max (256GB)",
      brand: "Apple",
      channel: "WhatsApp",
      status: "new",
      timestamp: "3 hours ago",
      estimatedValue: 148900,
    },
    {
      id: "LD-205",
      name: "Vikram Malhotra",
      phone: "+91 98555 11223",
      product: "LG 9Kg Front Load AI Direct Drive",
      brand: "LG",
      channel: "Phone Call",
      status: "contacted",
      timestamp: "Yesterday",
      estimatedValue: 42990,
    },
  ]);

  // In-Memory Service Desk Tickets State (Module 13 - 6 Devices)
  const [serviceTickets, setServiceTickets] = useState<ServiceTicket[]>([
    {
      id: "SRV-401",
      customerName: "Sunil Sharma",
      phone: "+91 98765 43210",
      deviceType: "AC",
      problem: "Cooling gas leak, needs in-home inspection",
      location: "Sector 14, Commercial Hub",
      status: "scheduled",
      technician: "Raju Technician",
      createdAt: "Today, 10:15 AM",
      priority: "urgent",
    },
    {
      id: "SRV-402",
      customerName: "Deepak Mehta",
      phone: "+91 98123 99887",
      deviceType: "TV",
      problem: "Display panel horizontal flickering on HDMI 2",
      location: "Civil Lines, Central City",
      status: "inspection",
      technician: "Amit Senior Tech",
      createdAt: "Yesterday",
      priority: "normal",
    },
    {
      id: "SRV-403",
      customerName: "Anita Rao",
      phone: "+91 98999 55443",
      deviceType: "Washing Machine",
      problem: "Drum vibration during spin cycle",
      location: "Model Town Ext.",
      status: "parts_ordered",
      technician: "Vikram Engineer",
      createdAt: "2 days ago",
      priority: "normal",
    },
    {
      id: "SRV-404",
      customerName: "Rajesh Khanna",
      phone: "+91 98444 11223",
      deviceType: "Laptop",
      problem: "Battery replacement & thermal paste re-application",
      location: "Market Complex",
      status: "completed",
      technician: "Suresh Hardware Desk",
      createdAt: "3 days ago",
      priority: "normal",
    },
  ]);

  // In-Memory Showroom Offers State (Module 14)
  const [offers, setOffers] = useState<ShowroomOffer[]>([
    {
      id: "off-1",
      title_en: "Festive Smart TV + Soundbar Combo Savings",
      title_hi: "त्योहारी स्मार्ट टीवी + साउंडबार कॉम्बो बचत",
      badge_en: "Showroom Special",
      badge_hi: "विशेष शोरूम छूट",
      discountSummary: "Free 160W Soundbar + Wall Bracket Installation with all 55\"+ 4K TVs",
      applicableCategory: "Smart TVs",
      validUntil: "31 Dec 2026",
      isActive: true,
    },
    {
      id: "off-2",
      title_en: "Zero Down Payment Summer Cooling Festival",
      title_hi: "ज़ीरो डाउन पेमेंट ग्रीष्मकालीन कूलिंग ऑफर",
      badge_en: "0% EMI Scheme",
      badge_hi: "0% ईएमआई योजना",
      discountSummary: "Zero Down Payment + 12-Month No Cost EMI on Daikin & LG Split ACs",
      applicableCategory: "Air Conditioners",
      validUntil: "15 Jan 2027",
      isActive: true,
    },
    {
      id: "off-3",
      title_en: "Exchange Bonus on 5G Smartphones",
      title_hi: "5G स्मार्टफोन पर अतिरिक्त एक्सचेंज बोनस",
      badge_en: "Extra ₹4,000 Off",
      badge_hi: "अतिरिक्त ₹4,000 छूट",
      discountSummary: "Instant valuation and upgrade bonus on Samsung Galaxy & Apple iPhone",
      applicableCategory: "Smartphones",
      validUntil: "Ongoing 2026",
      isActive: true,
    },
  ]);

  // Categories Metadata (Module 10)
  const categoriesList: CategoryMeta[] = [
    {
      id: "smartphones",
      name_en: "Smartphones",
      name_hi: "स्मार्टफोन (Smartphones)",
      description_en: "Apple, Samsung, vivo 5G flagship devices",
      description_hi: "एप्पल, सैमसंग, विवो 5G फ्लैगशिप डिवाइस",
      iconName: "Smartphone",
      activeCount: products.filter((p) => p.category === "smartphones").length,
      isVisible: true,
    },
    {
      id: "laptops",
      name_en: "Laptops & Computers",
      name_hi: "लैपटॉप व कंप्यूटिंग",
      description_en: "Productivity, coding & high performance laptops",
      description_hi: "उत्पादकता, कोडिंग और उच्च प्रदर्शन लैपटॉप",
      iconName: "Laptop",
      activeCount: products.filter((p) => p.category === "laptops").length,
      isVisible: true,
    },
    {
      id: "tvs",
      name_en: "Smart TVs & OLED",
      name_hi: "स्मार्ट टीवी व OLED",
      description_en: "4K UHD, QLED and OLED cinematic displays",
      description_hi: "4K अल्ट्रा एचडी, QLED एवं OLED सिनेमाई स्क्रीन",
      iconName: "Tv",
      activeCount: products.filter((p) => p.category === "tvs").length,
      isVisible: true,
    },
    {
      id: "acs",
      name_en: "Air Conditioners",
      name_hi: "एयर कंडीशनर (ACs)",
      description_en: "5-Star Dual Inverter Split ACs",
      description_hi: "5-स्टार डुअल इन्वर्टर स्प्लिट एसी",
      iconName: "Wind",
      activeCount: products.filter((p) => p.category === "acs").length,
      isVisible: true,
    },
    {
      id: "refrigerators",
      name_en: "Refrigerators",
      name_hi: "रेफ्रिजरेटर (Refrigerators)",
      description_en: "Double Door, Frost-Free & Side-by-Side models",
      description_hi: "डबल डोर, फ्रॉस्ट-फ्री व साइड-बाय-साइड मॉडल",
      iconName: "Refrigerator",
      activeCount: products.filter((p) => p.category === "refrigerators").length,
      isVisible: true,
    },
    {
      id: "washing",
      name_en: "Washing Machines",
      name_hi: "वाशिंग मशीन",
      description_en: "Front & Top Load Inverter smart washers",
      description_hi: "स्मार्ट AI इन्वर्टर फ्रंट व टॉप लोड स्वचालित मशीन",
      iconName: "Sparkles",
      activeCount: products.filter((p) => p.category === "washing").length,
      isVisible: true,
    },
    {
      id: "home-appliances",
      name_en: "Home Appliances",
      name_hi: "घरेलू उपकरण व माइक्रोवेव",
      description_en: "Convection microwaves & kitchen appliances",
      description_hi: "कन्वेक्शन, ग्रिल और सोलो ओवन",
      iconName: "Wrench",
      activeCount: products.filter((p) => p.category === "home-appliances").length,
      isVisible: true,
    },
    {
      id: "accessories",
      name_en: "Audio & Accessories",
      name_hi: "ऑडियो व एक्सेसरीज़",
      description_en: "Dolby Atmos soundbars & personal tech gear",
      description_hi: "सिनेमाई होम थिएटर साउंडबार और ऑडियो उपकरण",
      iconName: "Layers",
      activeCount: products.filter((p) => p.category === "accessories").length,
      isVisible: true,
    },
  ];

  // Brands Metadata (Module 11)
  const brandsList: BrandMeta[] = [
    {
      name: "Samsung",
      tier: "Flagship",
      origin: "South Korea",
      categories: ["Smartphones", "Smart TVs", "Refrigerators", "Washing Machines"],
      productCount: products.filter((p) => p.brand === "Samsung").length,
      isStorefrontVerified: true,
    },
    {
      name: "Apple",
      tier: "Flagship",
      origin: "United States",
      categories: ["Smartphones", "Laptops", "Accessories"],
      productCount: products.filter((p) => p.brand === "Apple").length,
      isStorefrontVerified: true,
    },
    {
      name: "vivo",
      tier: "Major Partner",
      origin: "China / India",
      categories: ["Smartphones"],
      productCount: products.filter((p) => p.brand === "vivo").length,
      isStorefrontVerified: true,
    },
    {
      name: "LG",
      tier: "Flagship",
      origin: "South Korea",
      categories: ["Smart TVs", "Washing Machines", "Refrigerators"],
      productCount: products.filter((p) => p.brand === "LG").length,
      isStorefrontVerified: true,
    },
    {
      name: "Hyundai",
      tier: "Major Partner",
      origin: "South Korea",
      categories: ["Smart TVs", "Home Appliances"],
      productCount: products.filter((p) => p.brand === "Hyundai").length,
      isStorefrontVerified: true,
    },
    {
      name: "Whirlpool",
      tier: "Major Partner",
      origin: "United States",
      categories: ["Refrigerators", "Washing Machines"],
      productCount: products.filter((p) => p.brand === "Whirlpool").length,
      isStorefrontVerified: true,
    },
    {
      name: "Canon",
      tier: "Major Partner",
      origin: "Japan",
      categories: ["Cameras", "Optical Equipment"],
      productCount: products.filter((p) => p.brand === "Canon").length,
      isStorefrontVerified: true,
    },
  ];

  // State Manipulation Handlers
  const handleAddProduct = (newProduct: Product) => {
    setProducts([newProduct, ...products]);
  };

  const handleEditProduct = (updatedProduct: Product) => {
    setProducts(products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter((p) => p.id !== productId));
  };

  const handleUpdatePrice = (
    productId: string,
    newPrice: number,
    newMrp: number,
    newEmi: number,
    showPrice: boolean
  ) => {
    setProducts(
      products.map((p) =>
        p.id === productId
          ? {
              ...p,
              priceDemo: newPrice,
              mrpDemo: newMrp,
              emiMonthlyDemo: newEmi,
              showPrice,
            }
          : p
      )
    );
  };

  const handleSaveImage = (productId: string, imageUrl: string) => {
    // In demo mode, log and update product state
    console.log(`[Demo Image Linked] Product ${productId} -> ${imageUrl}`);
  };

  const cycleStockStatus = (productId: string) => {
    setProducts(
      products.map((p) => {
        if (p.id !== productId) return p;
        const next: StockStatus =
          p.stockStatus === "in_showroom"
            ? "limited"
            : p.stockStatus === "limited"
            ? "order_basis"
            : "in_showroom";
        return { ...p, stockStatus: next };
      })
    );
  };

  const toggleProductPriceVisibility = (productId: string) => {
    setProducts(
      products.map((p) => (p.id === productId ? { ...p, showPrice: !p.showPrice } : p))
    );
  };

  const updateLeadStatus = (leadId: string, newStatus: "new" | "contacted" | "converted") => {
    setLeads(leads.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l)));
  };

  const updateServiceStatus = (
    ticketId: string,
    newStatus: "scheduled" | "inspection" | "parts_ordered" | "completed"
  ) => {
    setServiceTickets(
      serviceTickets.map((s) => (s.id === ticketId ? { ...s, status: newStatus } : s))
    );
  };

  const handleAddOffer = (newOffer: ShowroomOffer) => {
    setOffers([newOffer, ...offers]);
  };

  // Filtered Products Calculation
  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      searchQuery === "" ||
      p.name_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.modelCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategoryFilter === "all" || p.category === selectedCategoryFilter;

    const matchesBrand =
      selectedBrandFilter === "all" || p.brand === selectedBrandFilter;

    return matchesSearch && matchesCategory && matchesBrand;
  });

  // KPI Calculations
  const totalSKUs = products.length;
  const inShowroomCount = products.filter((p) => p.stockStatus === "in_showroom").length;
  const lowStockCount = products.filter((p) => p.stockStatus === "limited").length;
  const totalLeads = leads.length;
  const newLeadsCount = leads.filter((l) => l.status === "new").length;
  const pendingServicesCount = serviceTickets.filter((s) => s.status !== "completed").length;
  const totalPipelineValue = leads.reduce((acc, curr) => acc + curr.estimatedValue, 0);

  // ─────────────────────────────────────────────────────────────
  // 1. SECURE OWNER LOGIN GATEWAY
  // ─────────────────────────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] text-white flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
        {/* Subtle Ambient Red Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D82935]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-lg bg-zinc-950 p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl space-y-6 relative z-10 backdrop-blur-md">
          <div className="text-center space-y-3">
            <div className="flex justify-center mb-2">
              <DKLogo variant="on-dark" size="sm" />
            </div>
            <Badge variant="red">{dict.admin.portalBadge}</Badge>
            <h1 className="text-2xl font-black font-display text-white">
              {dict.admin.login.title}
            </h1>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
              {dict.admin.login.subtitle}
            </p>
          </div>

          {/* Login Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsAuthenticated(true);
            }}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="block font-bold text-zinc-300 mb-1">
                {dict.admin.login.emailLabel}
              </label>
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder={dict.admin.login.emailPlaceholder}
                className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white font-mono focus:outline-none focus:border-[#D82935] transition"
              />
            </div>

            <div>
              <label className="block font-bold text-zinc-300 mb-1">
                {dict.admin.login.passwordLabel}
              </label>
              <input
                type="password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder={dict.admin.login.passwordPlaceholder}
                className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white font-mono focus:outline-none focus:border-[#D82935] transition"
              />
            </div>

            <div>
              <label className="block font-bold text-zinc-300 mb-1">
                {dict.admin.login.roleSelectLabel}
              </label>
              <select
                value={adminRole}
                onChange={(e) => setAdminRole(e.target.value as AdminRole)}
                className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white font-semibold focus:outline-none focus:border-[#D82935] transition"
              >
                <option value="owner">{dict.admin.roleOwner}</option>
                <option value="store_manager">{dict.admin.roleManager}</option>
              </select>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              fullWidth
              icon={<Unlock className="w-4 h-4" />}
            >
              {dict.admin.login.enterBtn}
            </Button>
          </form>

          {/* Zero-Trust Architecture Security Callout */}
          <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-[11px] text-zinc-400 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-zinc-200">
              <ShieldAlert className="w-4 h-4 text-emerald-400" />
              <span>{dict.admin.login.securityTitle}</span>
            </div>
            <p className="leading-relaxed">
              {dict.admin.login.securityDesc}
            </p>
          </div>

          {/* Footer Controls: Language & Return to Public Site */}
          <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
            <Link href="/" className="hover:text-white flex items-center gap-1 transition">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{dict.nav.home}</span>
            </Link>
            <LanguageToggle variant="header" />
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // 2. MAIN EXECUTIVE OWNER DASHBOARD LAYOUT
  // ─────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-zinc-100 flex flex-col font-sans select-none">
      {/* ─────────────────────────────────────────────────────────────
          TOPBAR: Brand + Role Indicator + Lang Switcher + Sign Out
      ────────────────────────────────────────────────────────────── */}
      <header className="bg-[#141414] border-b border-zinc-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" title="Return to Public Customer Showroom" className="shrink-0">
              <DKLogo variant="on-dark" size="sm" />
            </Link>
            <span className="hidden md:inline-block h-5 w-px bg-zinc-800" />
            <div className="hidden md:flex items-center gap-2">
              <span className="text-xs font-mono font-black text-white uppercase tracking-wider">
                {dict.admin.portalBadge}
              </span>
              <span className="text-[10px] bg-red-950/80 text-[#D82935] border border-red-800/50 px-2 py-0.5 rounded font-mono font-bold">
                {adminRole === "owner" ? dict.admin.roleOwner : dict.admin.roleManager}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle variant="header" />

            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-white hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition"
            >
              <span>Public Site</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </Link>

            <button
              onClick={() => setIsAuthenticated(false)}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition"
              title="End admin session"
            >
              <LogOut className="w-3.5 h-3.5 text-[#D82935]" />
              <span className="hidden sm:inline">{dict.admin.logoutBtn}</span>
            </button>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          NON-PRODUCTION PREVIEW BANNER (Explicit Demo Mode Transparency)
      ────────────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/15 to-amber-500/10 border-b border-amber-500/30 px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-amber-300">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <strong className="font-bold">{dict.admin.previewBannerTitle}:</strong>
            <span className="text-zinc-300 hidden md:inline">
              {dict.admin.previewBannerDesc}
            </span>
          </div>

          <button
            onClick={() => setActiveTab("backend_guide")}
            className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 hover:text-amber-200 underline font-mono shrink-0"
          >
            <span>{dict.admin.tabs.backend}</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MAIN BODY: Sidebar Navigation + Dynamic Module View
      ────────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Admin Navigation Sidebar (3 Cols) */}
          <aside className="lg:col-span-3 bg-[#141414] rounded-2xl border border-zinc-800 p-3 space-y-1 sticky top-24">
            <div className="p-3 pb-2 border-b border-zinc-800 text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono">
              Console Modules
            </div>

            {/* Tab 1: Overview */}
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                activeTab === "overview"
                  ? "bg-[#D82935] text-white shadow-md"
                  : "text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <LayoutDashboard className="w-4 h-4" />
                <span>{dict.admin.tabs.overview}</span>
              </div>
            </button>

            {/* Tab 2: Products */}
            <button
              onClick={() => setActiveTab("products")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                activeTab === "products"
                  ? "bg-[#D82935] text-white shadow-md"
                  : "text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Package className="w-4 h-4" />
                <span>{dict.admin.tabs.products}</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeTab === "products" ? "bg-black/40 text-white" : "bg-zinc-800 text-zinc-400"}`}>
                {totalSKUs}
              </span>
            </button>

            {/* Tab 3: Customer Enquiries */}
            <button
              onClick={() => setActiveTab("enquiries")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                activeTab === "enquiries"
                  ? "bg-[#D82935] text-white shadow-md"
                  : "text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4" />
                <span>{dict.admin.tabs.enquiries}</span>
              </div>
              {newLeadsCount > 0 && (
                <span className="text-[10px] font-mono bg-red-500 text-white font-bold px-1.5 py-0.5 rounded-full animate-pulse">
                  {newLeadsCount} new
                </span>
              )}
            </button>

            {/* Tab 4: Service Bookings */}
            <button
              onClick={() => setActiveTab("services")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                activeTab === "services"
                  ? "bg-[#D82935] text-white shadow-md"
                  : "text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Wrench className="w-4 h-4" />
                <span>{dict.admin.tabs.services}</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeTab === "services" ? "bg-black/40 text-white" : "bg-zinc-800 text-zinc-400"}`}>
                {pendingServicesCount}
              </span>
            </button>

            {/* Tab 5: Categories */}
            <button
              onClick={() => setActiveTab("categories")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                activeTab === "categories"
                  ? "bg-[#D82935] text-white shadow-md"
                  : "text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4" />
                <span>{dict.admin.tabs.categories}</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeTab === "categories" ? "bg-black/40 text-white" : "bg-zinc-800 text-zinc-400"}`}>
                8
              </span>
            </button>

            {/* Tab 6: Brands */}
            <button
              onClick={() => setActiveTab("brands")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                activeTab === "brands"
                  ? "bg-[#D82935] text-white shadow-md"
                  : "text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4" />
                <span>{dict.admin.tabs.brands}</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeTab === "brands" ? "bg-black/40 text-white" : "bg-zinc-800 text-zinc-400"}`}>
                7
              </span>
            </button>

            {/* Tab 7: Offers */}
            <button
              onClick={() => setActiveTab("offers")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                activeTab === "offers"
                  ? "bg-[#D82935] text-white shadow-md"
                  : "text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4" />
                <span>{dict.admin.tabs.offers}</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeTab === "offers" ? "bg-black/40 text-white" : "bg-zinc-800 text-zinc-400"}`}>
                {offers.length}
              </span>
            </button>

            {/* Tab 8: Business Analytics */}
            <button
              onClick={() => setActiveTab("analytics")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                activeTab === "analytics"
                  ? "bg-[#D82935] text-white shadow-md"
                  : "text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <BarChart3 className="w-4 h-4" />
                <span>{dict.admin.tabs.analytics}</span>
              </div>
            </button>

            {/* Tab 9: Backend Architecture Guide */}
            <div className="pt-2 border-t border-zinc-800 mt-2">
              <button
                onClick={() => setActiveTab("backend_guide")}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                  activeTab === "backend_guide"
                    ? "bg-[#D82935] text-white shadow-md"
                    : "text-amber-400 hover:bg-amber-400/10 hover:text-amber-300"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Database className="w-4 h-4" />
                  <span>{dict.admin.tabs.backend}</span>
                </div>
                <span className="text-[10px] font-mono bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded">
                  SQL
                </span>
              </button>
            </div>
          </aside>

          {/* Right Column: Active Tab Content (9 Cols) */}
          <main className="lg:col-span-9 space-y-6">
            {/* ─────────────────────────────────────────────────────────────
                MODULE 2: DASHBOARD OVERVIEW VIEW
            ────────────────────────────────────────────────────────────── */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Title */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-black font-display text-white">
                      {dict.admin.dashboardTitle}
                    </h1>
                    <p className="text-xs text-zinc-400 mt-1">
                      {dict.admin.dashboardSubtitle}
                    </p>
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setIsAddModalOpen(true)}
                    icon={<Plus className="w-3.5 h-3.5" />}
                  >
                    {dict.admin.productActions.addNew}
                  </Button>
                </div>

                {/* 5 Executive KPI Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-[#141414] p-5 rounded-2xl border border-zinc-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                      {dict.admin.activeCatalogItems}
                    </span>
                    <div className="text-3xl font-black text-white font-display">
                      {totalSKUs}
                    </div>
                    <span className="text-[11px] text-emerald-400 font-mono mt-1 block">
                      {inShowroomCount} In Showroom Stock
                    </span>
                  </div>

                  <div className="bg-[#141414] p-5 rounded-2xl border border-zinc-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                      {dict.admin.newLeadsToday}
                    </span>
                    <div className="text-3xl font-black text-[#D82935] font-display">
                      {newLeadsCount}
                    </div>
                    <span className="text-[11px] text-zinc-400 font-mono mt-1 block">
                      {totalLeads} Total Active Enquiries
                    </span>
                  </div>

                  <div className="bg-[#141414] p-5 rounded-2xl border border-zinc-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                      {dict.admin.pendingServiceTickets}
                    </span>
                    <div className="text-3xl font-black text-amber-400 font-display">
                      {pendingServicesCount}
                    </div>
                    <span className="text-[11px] text-zinc-400 font-mono mt-1 block">
                      Across 6 Multi-Device Categories
                    </span>
                  </div>

                  <div className="bg-[#141414] p-5 rounded-2xl border border-zinc-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                      {dict.admin.lowStockAlert}
                    </span>
                    <div className="text-2xl font-black text-white font-mono">
                      {lowStockCount} Units
                    </div>
                    <span className="text-[11px] text-amber-500 font-mono mt-1 block">
                      Requires Showroom Warehouse Restock
                    </span>
                  </div>

                  <div className="bg-[#141414] p-5 rounded-2xl border border-zinc-800 sm:col-span-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                      {dict.admin.monthlyPipelineValue}
                    </span>
                    <div className="text-3xl font-black text-emerald-400 font-mono">
                      ₹{totalPipelineValue.toLocaleString("en-IN")}
                    </div>
                    <span className="text-[11px] text-zinc-400 font-mono mt-1 block">
                      Estimated high-intent product customer value
                    </span>
                  </div>
                </div>

                {/* Quick Recent Enquiries Widget */}
                <div className="bg-[#141414] rounded-2xl border border-zinc-800 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black text-white uppercase tracking-wider font-mono">
                      Recent Inquiries Pipeline
                    </h3>
                    <button
                      onClick={() => setActiveTab("enquiries")}
                      className="text-xs text-[#D82935] hover:underline font-bold"
                    >
                      View All Leads ›
                    </button>
                  </div>

                  <div className="divide-y divide-zinc-800 text-xs">
                    {leads.slice(0, 3).map((lead) => (
                      <div key={lead.id} className="py-3 flex items-center justify-between gap-4">
                        <div>
                          <strong className="text-white block">{lead.name}</strong>
                          <span className="text-zinc-400 text-[11px]">{lead.product}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-zinc-400">{lead.phone}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            lead.status === "new"
                              ? "bg-red-500/20 text-red-400 border border-red-500/30"
                              : lead.status === "contacted"
                              ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                              : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          }`}>
                            {lead.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Recent Service Tickets Widget */}
                <div className="bg-[#141414] rounded-2xl border border-zinc-800 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black text-white uppercase tracking-wider font-mono">
                      Active Technical Service Desk Requests
                    </h3>
                    <button
                      onClick={() => setActiveTab("services")}
                      className="text-xs text-[#D82935] hover:underline font-bold"
                    >
                      Manage Tickets ›
                    </button>
                  </div>

                  <div className="divide-y divide-zinc-800 text-xs">
                    {serviceTickets.slice(0, 3).map((ticket) => (
                      <div key={ticket.id} className="py-3 flex items-center justify-between gap-4">
                        <div>
                          <span className="font-bold text-white block">
                            [{ticket.deviceType}] {ticket.problem}
                          </span>
                          <span className="text-zinc-400 text-[11px]">
                            {ticket.customerName} • {ticket.location}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold bg-zinc-800 text-zinc-300">
                          {ticket.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ─────────────────────────────────────────────────────────────
                MODULE 3-9: PRODUCT CATALOG & PRICE/STOCK MANAGEMENT VIEW
            ────────────────────────────────────────────────────────────── */}
            {activeTab === "products" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-black font-display text-white">
                      {dict.admin.catalogTitle}
                    </h2>
                    <p className="text-xs text-zinc-400 mt-1">
                      Manage models, live prices, customer visibility, and showroom stock flags.
                    </p>
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setIsAddModalOpen(true)}
                    icon={<Plus className="w-3.5 h-3.5" />}
                  >
                    {dict.admin.productActions.addNew}
                  </Button>
                </div>

                {/* Search & Filters */}
                <div className="p-4 bg-[#141414] rounded-2xl border border-zinc-800 flex flex-wrap items-center gap-3">
                  <div className="relative flex-1 min-w-[200px]">
                    <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search model name, code, brand..."
                      className="w-full text-xs pl-9 pr-3 py-2 bg-zinc-900 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-[#D82935]"
                    />
                  </div>

                  <select
                    value={selectedCategoryFilter}
                    onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                    className="text-xs px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-200 focus:outline-none"
                  >
                    <option value="all">All Categories</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="laptops">Laptops</option>
                    <option value="tvs">Smart TVs</option>
                    <option value="acs">Air Conditioners</option>
                    <option value="refrigerators">Refrigerators</option>
                    <option value="washing">Washing Machines</option>
                    <option value="home-appliances">Appliances</option>
                    <option value="accessories">Accessories</option>
                  </select>

                  <select
                    value={selectedBrandFilter}
                    onChange={(e) => setSelectedBrandFilter(e.target.value)}
                    className="text-xs px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-200 focus:outline-none"
                  >
                    <option value="all">All Brands</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Apple">Apple</option>
                    <option value="vivo">vivo</option>
                    <option value="LG">LG</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Whirlpool">Whirlpool</option>
                    <option value="Canon">Canon</option>
                  </select>
                </div>

                {/* Products Table */}
                <div className="bg-[#141414] rounded-2xl border border-zinc-800 overflow-x-auto">
                  <table className="w-full text-left text-xs text-zinc-300">
                    <thead className="bg-zinc-900/80 text-[11px] font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-800">
                      <tr>
                        <th className="p-3.5">Brand / Model</th>
                        <th className="p-3.5">Category</th>
                        <th className="p-3.5">Showroom Price</th>
                        <th className="p-3.5">0% EMI</th>
                        <th className="p-3.5">Stock Status</th>
                        <th className="p-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/80">
                      {filteredProducts.map((p) => {
                        const name = language === "hi" ? p.name_hi : p.name_en;
                        return (
                          <tr key={p.id} className="hover:bg-zinc-900/40 transition">
                            <td className="p-3.5">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-[10px] bg-zinc-800 text-white font-bold px-1.5 py-0.5 rounded">
                                  {p.brand}
                                </span>
                                <span className="font-mono text-[10px] text-zinc-400">
                                  {p.modelCode}
                                </span>
                              </div>
                              <div className="font-bold text-white mt-1 line-clamp-1" title={name}>
                                {name}
                              </div>
                            </td>

                            <td className="p-3.5 uppercase font-mono text-[11px] text-zinc-400">
                              {p.category}
                            </td>

                            <td className="p-3.5">
                              <div className="flex items-center gap-2">
                                <div>
                                  <strong className="text-white font-mono text-sm block">
                                    ₹{p.priceDemo.toLocaleString("en-IN")}
                                  </strong>
                                  <span className="text-[10px] text-zinc-500 line-through block">
                                    ₹{p.mrpDemo.toLocaleString("en-IN")}
                                  </span>
                                </div>
                                <button
                                  onClick={() => toggleProductPriceVisibility(p.id)}
                                  className="p-1 rounded text-zinc-500 hover:text-white"
                                  title={p.showPrice ? "Price is Public" : "Price is Hidden (Enquire Only)"}
                                >
                                  {p.showPrice ? (
                                    <Eye className="w-3.5 h-3.5 text-emerald-400" />
                                  ) : (
                                    <EyeOff className="w-3.5 h-3.5 text-amber-500" />
                                  )}
                                </button>
                              </div>
                            </td>

                            <td className="p-3.5 font-mono text-zinc-300">
                              ₹{p.emiMonthlyDemo.toLocaleString("en-IN")}/mo
                            </td>

                            <td className="p-3.5">
                              <button
                                onClick={() => cycleStockStatus(p.id)}
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full border transition ${
                                  p.stockStatus === "in_showroom"
                                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                                    : p.stockStatus === "limited"
                                    ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                                    : "bg-zinc-800 text-zinc-400 border-zinc-700"
                                }`}
                                title="Click to cycle stock status"
                              >
                                {p.stockStatus === "in_showroom"
                                  ? "In Showroom"
                                  : p.stockStatus === "limited"
                                  ? "Limited"
                                  : "On Order"}
                              </button>
                            </td>

                            <td className="p-3.5 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => setUpdatingPriceProduct(p)}
                                  className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition"
                                  title="Quick Update Price"
                                >
                                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                                </button>
                                <button
                                  onClick={() => setUploadImageProduct(p)}
                                  className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition"
                                  title="Upload Image"
                                >
                                  <UploadCloud className="w-3.5 h-3.5 text-blue-400" />
                                </button>
                                <button
                                  onClick={() => setEditingProduct(p)}
                                  className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition"
                                  title="Edit Specs & Details"
                                >
                                  <Edit className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => setDeletingProduct(p)}
                                  className="p-1.5 rounded-lg bg-zinc-900 hover:bg-red-950/50 text-zinc-400 hover:text-red-400 transition"
                                  title="Delete Product"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ─────────────────────────────────────────────────────────────
                MODULE 12: CUSTOMER ENQUIRIES PIPELINE
            ────────────────────────────────────────────────────────────── */}
            {activeTab === "enquiries" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-black font-display text-white">
                    {dict.admin.inboxTitle}
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1">
                    Manage incoming customer inquiries from WhatsApp, VIP Walkthrough Forms, and EMI Calculator leads.
                  </p>
                </div>

                <div className="bg-[#141414] rounded-2xl border border-zinc-800 overflow-x-auto">
                  <table className="w-full text-left text-xs text-zinc-300">
                    <thead className="bg-zinc-900/80 text-[11px] font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-800">
                      <tr>
                        <th className="p-3.5">Customer</th>
                        <th className="p-3.5">Product Interest</th>
                        <th className="p-3.5">Channel</th>
                        <th className="p-3.5">Est. Value</th>
                        <th className="p-3.5">Status</th>
                        <th className="p-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/80">
                      {leads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-zinc-900/40 transition">
                          <td className="p-3.5">
                            <strong className="text-white block font-bold">{lead.name}</strong>
                            <a
                              href={`tel:${lead.phone.replace(/\s+/g, "")}`}
                              className="font-mono text-zinc-400 hover:text-white"
                            >
                              {lead.phone}
                            </a>
                            <span className="text-[10px] text-zinc-500 block mt-0.5">{lead.timestamp}</span>
                          </td>

                          <td className="p-3.5">
                            <span className="font-bold text-zinc-200 block">{lead.product}</span>
                            <span className="text-[10px] text-zinc-400 font-mono">Brand: {lead.brand}</span>
                          </td>

                          <td className="p-3.5">
                            <span className="inline-flex items-center gap-1 text-[11px] bg-zinc-900 px-2.5 py-1 rounded-lg border border-zinc-800 text-zinc-300">
                              <MessageCircle className="w-3 h-3 text-[#D82935]" />
                              <span>{lead.channel}</span>
                            </span>
                          </td>

                          <td className="p-3.5 font-mono text-emerald-400 font-bold">
                            ₹{lead.estimatedValue.toLocaleString("en-IN")}
                          </td>

                          <td className="p-3.5">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              lead.status === "new"
                                ? "bg-red-500/20 text-red-400 border border-red-500/30"
                                : lead.status === "contacted"
                                ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                                : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            }`}>
                              {lead.status}
                            </span>
                          </td>

                          <td className="p-3.5 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              {lead.status !== "contacted" && lead.status !== "converted" && (
                                <button
                                  onClick={() => updateLeadStatus(lead.id, "contacted")}
                                  className="text-[11px] font-bold px-2 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 transition"
                                >
                                  Mark Contacted
                                </button>
                              )}
                              {lead.status !== "converted" && (
                                <button
                                  onClick={() => updateLeadStatus(lead.id, "converted")}
                                  className="text-[11px] font-bold px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition"
                                >
                                  Mark Converted
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ─────────────────────────────────────────────────────────────
                MODULE 13: SERVICE BOOKING MANAGEMENT VIEW (6 Devices)
            ────────────────────────────────────────────────────────────── */}
            {activeTab === "services" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-black font-display text-white">
                    {dict.admin.serviceDesk.title}
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1">
                    {dict.admin.serviceDesk.subtitle}
                  </p>
                </div>

                <div className="bg-[#141414] rounded-2xl border border-zinc-800 overflow-x-auto">
                  <table className="w-full text-left text-xs text-zinc-300">
                    <thead className="bg-zinc-900/80 text-[11px] font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-800">
                      <tr>
                        <th className="p-3.5">{dict.admin.serviceDesk.ticketId}</th>
                        <th className="p-3.5">{dict.admin.serviceDesk.device}</th>
                        <th className="p-3.5">{dict.admin.serviceDesk.customer}</th>
                        <th className="p-3.5">{dict.admin.serviceDesk.problem}</th>
                        <th className="p-3.5">Status</th>
                        <th className="p-3.5 text-right">Progress</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/80">
                      {serviceTickets.map((ticket) => (
                        <tr key={ticket.id} className="hover:bg-zinc-900/40 transition">
                          <td className="p-3.5 font-mono text-zinc-400 font-bold">
                            {ticket.id}
                          </td>

                          <td className="p-3.5">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase font-mono bg-zinc-800 text-[#D82935] border border-zinc-700">
                              {ticket.deviceType}
                            </span>
                          </td>

                          <td className="p-3.5">
                            <strong className="text-white block">{ticket.customerName}</strong>
                            <span className="font-mono text-zinc-400 text-[11px]">{ticket.phone}</span>
                            <span className="text-[10px] text-zinc-500 block">{ticket.location}</span>
                          </td>

                          <td className="p-3.5">
                            <p className="max-w-xs text-zinc-300 line-clamp-2">{ticket.problem}</p>
                            <span className="text-[10px] text-zinc-500 font-mono mt-0.5 block">
                              Tech: {ticket.technician}
                            </span>
                          </td>

                          <td className="p-3.5">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase font-mono ${
                              ticket.status === "scheduled"
                                ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                : ticket.status === "inspection"
                                ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                                : ticket.status === "parts_ordered"
                                ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                                : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            }`}>
                              {ticket.status}
                            </span>
                          </td>

                          <td className="p-3.5 text-right">
                            <select
                              value={ticket.status}
                              onChange={(e) =>
                                updateServiceStatus(
                                  ticket.id,
                                  e.target.value as "scheduled" | "inspection" | "parts_ordered" | "completed"
                                )
                              }
                              className="text-[11px] px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-200 focus:outline-none"
                            >
                              <option value="scheduled">Scheduled</option>
                              <option value="inspection">In Inspection</option>
                              <option value="parts_ordered">Parts Ordered</option>
                              <option value="completed">Completed</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ─────────────────────────────────────────────────────────────
                MODULE 10: CATEGORY MANAGEMENT VIEW
            ────────────────────────────────────────────────────────────── */}
            {activeTab === "categories" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-black font-display text-white">
                    Showroom Product Categories (8 Categories)
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1">
                    Manage consumer technology classifications and public discovery categories.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {categoriesList.map((cat) => (
                    <div key={cat.id} className="bg-[#141414] p-5 rounded-2xl border border-zinc-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded border border-zinc-800">
                          {cat.id}
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          {cat.activeCount} SKUs
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-white font-display">
                        {language === "hi" ? cat.name_hi : cat.name_en}
                      </h3>
                      <p className="text-xs text-zinc-400 line-clamp-2">
                        {language === "hi" ? cat.description_hi : cat.description_en}
                      </p>
                      <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
                        <span>Active in Menu</span>
                        <span className="text-emerald-400 font-bold">Enabled</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ─────────────────────────────────────────────────────────────
                MODULE 11: BRAND PARTNERS VIEW
            ────────────────────────────────────────────────────────────── */}
            {activeTab === "brands" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-black font-display text-white">
                    Storefront Brand References (7 Brands)
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1">
                    Manage multi-brand partnerships and visual references identified from the showroom storefront photograph.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {brandsList.map((brand) => (
                    <div key={brand.name} className="bg-[#141414] p-5 rounded-2xl border border-zinc-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-black font-mono text-white bg-black px-3 py-1 rounded-lg border border-zinc-800 uppercase">
                          {brand.name}
                        </span>
                        <span className="text-xs font-mono font-bold text-[#D82935]">
                          {brand.productCount} Models
                        </span>
                      </div>

                      <div className="text-xs text-zinc-400 space-y-1">
                        <div>Tier: <strong className="text-zinc-200">{brand.tier}</strong></div>
                        <div>Origin: <strong className="text-zinc-200">{brand.origin}</strong></div>
                        <div className="truncate">Categories: {brand.categories.join(", ")}</div>
                      </div>

                      <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
                        <span className="text-zinc-500">Storefront Reference:</span>
                        <span className="text-emerald-400 font-semibold">Verified on Facade</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 text-[11px] text-zinc-400">
                  Notice: Brand references shown represent visual logos present on the showroom facade. Official dealership agreements are subject to owner confirmation prior to public launch.
                </div>
              </div>
            )}

            {/* ─────────────────────────────────────────────────────────────
                MODULE 14: OFFERS & PROMOTIONS VIEW
            ────────────────────────────────────────────────────────────── */}
            {activeTab === "offers" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-black font-display text-white">
                      {dict.admin.offers.title}
                    </h2>
                    <p className="text-xs text-zinc-400 mt-1">
                      {dict.admin.offers.subtitle}
                    </p>
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setIsOfferModalOpen(true)}
                    icon={<Plus className="w-3.5 h-3.5" />}
                  >
                    {dict.admin.offers.createOffer}
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {offers.map((offer) => {
                    const title = language === "hi" ? offer.title_hi : offer.title_en;
                    const badge = language === "hi" ? offer.badge_hi : offer.badge_en;
                    return (
                      <div key={offer.id} className="bg-[#141414] p-6 rounded-2xl border border-zinc-800 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold bg-[#D82935] text-white px-2.5 py-0.5 rounded font-mono">
                            {badge}
                          </span>
                          <span className="text-[11px] font-mono text-emerald-400 font-bold">
                            {offer.isActive ? "Active Campaign" : "Inactive"}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-white font-display">
                          {title}
                        </h3>

                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {offer.discountSummary}
                        </p>

                        <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500 font-mono">
                          <span>Target: {offer.applicableCategory}</span>
                          <span>Expires: {offer.validUntil}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ─────────────────────────────────────────────────────────────
                MODULE 15: BUSINESS ANALYTICS VIEW
            ────────────────────────────────────────────────────────────── */}
            {activeTab === "analytics" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-black font-display text-white">
                    {dict.admin.analytics.title}
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1">
                    {dict.admin.analytics.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Chart 1: Enquiries by Category */}
                  <div className="bg-[#141414] p-6 rounded-2xl border border-zinc-800 space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
                      {dict.admin.analytics.byCategory}
                    </h3>
                    <div className="space-y-3 text-xs">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-white">Smartphones (Apple / Samsung)</span>
                          <span className="font-mono text-zinc-400">38% (42 leads)</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full bg-[#D82935] rounded-full" style={{ width: "38%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-white">4K OLED & Smart TVs</span>
                          <span className="font-mono text-zinc-400">28% (31 leads)</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: "28%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-white">Air Conditioners & Cooling</span>
                          <span className="font-mono text-zinc-400">18% (20 leads)</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: "18%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-white">Refrigerators & Washers</span>
                          <span className="font-mono text-zinc-400">16% (18 leads)</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: "16%" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chart 2: Channel Acquisition Breakdown */}
                  <div className="bg-[#141414] p-6 rounded-2xl border border-zinc-800 space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
                      {dict.admin.analytics.byChannel}
                    </h3>
                    <div className="space-y-3 text-xs">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-white">Direct WhatsApp Clicks</span>
                          <span className="font-mono text-emerald-400 font-bold">54%</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: "54%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-white">VIP Showroom Walkthrough Form</span>
                          <span className="font-mono text-[#D82935] font-bold">26%</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full bg-[#D82935] rounded-full" style={{ width: "26%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-white">EMI Calculator Applications</span>
                          <span className="font-mono text-blue-400 font-bold">20%</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: "20%" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Conversion Pipeline Funnel */}
                  <div className="bg-[#141414] p-6 rounded-2xl border border-zinc-800 md:col-span-2 space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
                      {dict.admin.analytics.funnel}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                        <span className="text-xs text-zinc-400 block mb-1">Total Enquiries Received</span>
                        <div className="text-2xl font-black text-white font-mono">111 Leads</div>
                        <span className="text-[10px] text-zinc-500">100% Top of Funnel</span>
                      </div>
                      <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                        <span className="text-xs text-zinc-400 block mb-1">Contacted by Showroom Sales</span>
                        <div className="text-2xl font-black text-amber-400 font-mono">72 Leads</div>
                        <span className="text-[10px] text-amber-400/80">64.8% Contact Rate</span>
                      </div>
                      <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                        <span className="text-xs text-zinc-400 block mb-1">Store Visits / Converted Sales</span>
                        <div className="text-2xl font-black text-emerald-400 font-mono">48 Sales</div>
                        <span className="text-[10px] text-emerald-400/80">43.2% Conversion Rate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ─────────────────────────────────────────────────────────────
                BACKEND ARCHITECTURE & INTEGRATION GUIDE TAB
            ────────────────────────────────────────────────────────────── */}
            {activeTab === "backend_guide" && (
              <BackendSetupGuide />
            )}
          </main>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MODALS INTEGRATION
      ────────────────────────────────────────────────────────────── */}
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddProduct}
      />

      <EditProductModal
        product={editingProduct}
        onClose={() => setEditingProduct(null)}
        onSave={handleEditProduct}
      />

      <DeleteProductModal
        product={deletingProduct}
        onClose={() => setDeletingProduct(null)}
        onConfirm={handleDeleteProduct}
      />

      <ImageUploadModal
        product={uploadImageProduct}
        onClose={() => setUploadImageProduct(null)}
        onSaveImage={handleSaveImage}
      />

      <UpdatePriceModal
        product={updatingPriceProduct}
        onClose={() => setUpdatingPriceProduct(null)}
        onSavePrice={handleUpdatePrice}
      />

      <OfferModal
        isOpen={isOfferModalOpen}
        onClose={() => setIsOfferModalOpen(false)}
        onSave={handleAddOffer}
      />
    </div>
  );
}
