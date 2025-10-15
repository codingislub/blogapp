import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  },
  // Handle Clerk in server components
  serverExternalPackages: ['@clerk/nextjs']
};

export default nextConfig;
