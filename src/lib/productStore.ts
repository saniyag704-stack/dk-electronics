// src/lib/productStore.ts
import { PRODUCTS_DATA, Product } from "@/data/products";

const STORAGE_KEY = "dk_electronics_custom_catalog_v2";

/**
 * Retrieves the current catalog. If the showroom owner has customized prices
 * or added new products in the Admin Dashboard, they are loaded from browser storage.
 */
export function getStoredProducts(): Product[] {
  if (typeof window === "undefined") {
    return PRODUCTS_DATA;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return PRODUCTS_DATA;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.error("Error reading stored products from localStorage", err);
  }
  return PRODUCTS_DATA;
}

/**
 * Saves updated or newly added products to browser localStorage and dispatches
 * an event so all open tabs/views update instantly without manual reload.
 */
export function saveStoredProducts(products: Product[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    window.dispatchEvent(new Event("dk_catalog_updated"));
  } catch (err) {
    console.error("Error writing products to localStorage", err);
  }
}

/**
 * Resets the catalog back to default showroom products if needed.
 */
export function resetStoredProducts(): Product[] {
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new Event("dk_catalog_updated"));
    } catch (err) {
      console.error("Error resetting products in localStorage", err);
    }
  }
  return PRODUCTS_DATA;
}
