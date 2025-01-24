import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '0ivjzaofksjyombd.public.blob.vercel-storage.com',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },};

export default nextConfig;
