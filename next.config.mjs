/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/api/reports/file/[slug]": ["./content/reports/**/*"],
    },
    serverComponentsExternalPackages: ["ws"],
  },
};

export default nextConfig;
