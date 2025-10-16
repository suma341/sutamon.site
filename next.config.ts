import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 静的エクスポ/ートを有効化
  images: {
    unoptimized: true, // Next/Image の最適化を無効化
  },
  reactStrictMode: true,
};

export default nextConfig;
