import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turboMode: false, // ✅ disables Turbopack correctly
  },
};

export default nextConfig;
