import { SITE_URL } from "./lib/site";
import { REPORTS } from "./lib/reports";

export default async function sitemap() {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/reports`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...REPORTS.map((report) => ({
      url: `${SITE_URL}/reports/${report.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}
