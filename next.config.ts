import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.2.113", "localhost"],
  output: "standalone",
};

export default nextConfig;