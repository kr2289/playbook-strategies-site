/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/api/playbook/file/[slug]": ["./content/playbook/**/*"],
      "/api/reports/file/[slug]": ["./content/reports/**/*"],
    },
    serverComponentsExternalPackages: ["ws"],
  },
};

export default nextConfig;
