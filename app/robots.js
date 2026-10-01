import { SITE_URL } from "./lib/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/playbook", "/playbook/", "/intelligence", "/intelligence/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
