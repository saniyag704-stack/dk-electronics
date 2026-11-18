// src/lib/basePath.ts

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Ensures public assets (images, icons, etc.) resolve correctly whether hosted
 * on a root domain (localhost, Vercel, custom domain) or GitHub Pages subpath (/dk-electronics).
 */
export function assetUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (BASE_PATH && !clean.startsWith(BASE_PATH)) {
    return `${BASE_PATH}${clean}`;
  }
  return clean;
}
