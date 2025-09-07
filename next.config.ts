import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uffs.io",
        port: "",
      },
    ],
  },
  experimental: {
    optimizeCss: false, // disable lightningcss
  },
};

export default nextConfig;
