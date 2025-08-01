import type { NextConfig } from 'next';

const nextConfig = {
  webpack: (config : any) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

export default nextConfig;
