/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack: (config : any) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
