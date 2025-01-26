import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '0ivjzaofksjyombd.public.blob.vercel-storage.com',
        port: '',
        pathname: '**',
      },
    ],
  },};

export default nextConfig;
