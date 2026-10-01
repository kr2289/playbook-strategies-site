export const REPORTS_COOKIE = "reports_access";

export const REPORTS = [
  {
    slug: "fan-first-happy-hour",
    title: "Happy Hour and Fan First Pricing in College Football",
    kicker: "College Football Concessions",
    dek: "Tennessee's first hour at half price sparked a look at how schools price concessions — nine programs, seven schools, and which approaches might work best.",
    file: "fan-first-happy-hour.pdf",
    pages: 19,
    published: "October 1, 2026",
  },
];

export function getReport(slug) {
  return REPORTS.find((report) => report.slug === slug) ?? null;
}
