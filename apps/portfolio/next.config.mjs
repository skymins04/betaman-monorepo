import getBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = getBundleAnalyzer({
  enabled: process.env.ANAYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  output: "export",
  experimental: {
    optimizePackageImports: ["@betaman/shadcn"],
  },
};

export default withBundleAnalyzer(nextConfig);
