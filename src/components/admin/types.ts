import { Product, ProductCategory, BrandName, StockStatus } from "@/data/products";

export type AdminRole = "owner" | "store_manager";

export type AdminTab =
  | "overview"
  | "products"
  | "price_stock"
  | "categories"
  | "brands"
  | "enquiries"
  | "services"
  | "offers"
  | "analytics"
  | "backend_guide";

export interface CustomerLead {
  id: string;
  name: string;
  phone: string;
  product: string;
  brand: string;
  channel: "WhatsApp" | "VIP Demo Form" | "EMI Calculator" | "Phone Call";
  status: "new" | "contacted" | "converted";
  timestamp: string;
  notes?: string;
  estimatedValue: number;
}

export interface ServiceTicket {
  id: string;
  customerName: string;
  phone: string;
  deviceType: "Mobile" | "Laptop" | "TV" | "AC" | "Refrigerator" | "Washing Machine";
  problem: string;
  location: string;
  status: "scheduled" | "inspection" | "parts_ordered" | "completed";
  technician: string;
  createdAt: string;
  priority: "normal" | "urgent";
}

export interface ShowroomOffer {
  id: string;
  title_en: string;
  title_hi: string;
  badge_en: string;
  badge_hi: string;
  discountSummary: string;
  applicableCategory: string;
  validUntil: string;
  isActive: boolean;
}

export interface CategoryMeta {
  id: ProductCategory;
  name_en: string;
  name_hi: string;
  description_en: string;
  description_hi: string;
  iconName: string;
  activeCount: number;
  isVisible: boolean;
}

export interface BrandMeta {
  name: BrandName;
  tier: "Flagship" | "Premium" | "Major Partner";
  origin: string;
  categories: string[];
  productCount: number;
  isStorefrontVerified: boolean;
}
