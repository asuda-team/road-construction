import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yol-taslama.kamilussat.com",
      },
      {
        protocol: "https",
        hostname: "www.pexels.com",
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
