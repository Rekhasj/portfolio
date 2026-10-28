import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site can be hosted on Netlify (publish dir: "out")
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
