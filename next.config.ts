import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   eslint: {
    // ✅ Ignore ALL ESLint errors and warnings during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
