/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath :  "/syncpod_landing",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  assetPrefix: "/syncpod_landing", // You need to change this
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
