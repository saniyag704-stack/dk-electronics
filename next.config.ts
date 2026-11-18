import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
let repoName = "";
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  repoName = process.env.GITHUB_REPOSITORY.split("/")[1] || "";
}

// If repo ends with github.io, it is hosted at root. If not, it's at /repoName (e.g. /dk-electronics)
const isUserSite = repoName.toLowerCase().endsWith(".github.io");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions && !isUserSite && repoName ? `/${repoName}` : undefined);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isStaticExport ? "export" : undefined,
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath || "",
  },
  images: {
    unoptimized: true, // For flexible static hosting and local asset loading
  },
  trailingSlash: true,
};

export default nextConfig;
