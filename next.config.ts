import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    ROOT_URL: process.env.ROOT_URL,
    WEATHER_API_ACCESS_TOKEN: process.env.WEATHER_API_ACCESS_TOKEN,
    NEXT_PUBLIC_GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
    NEXT_PUBLIC_WEATHER_API_URL: process.env.NEXT_PUBLIC_WEATHER_API_URL,
  }
};

export default nextConfig;
