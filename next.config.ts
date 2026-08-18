import type { NextConfig } from "next";
import path from "path";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const basePath = rawBasePath.replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "opengraph.githubassets.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons", "framer-motion"],
  },
};

export default nextConfig;
