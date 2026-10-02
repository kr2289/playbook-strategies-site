export const REPORTS_COOKIE = "reports_access";

export const REPORTS = [
  {
    slug: "fan-first-happy-hour",
    title: "Happy Hour and Fan First Pricing in College Football",
    kicker: "College Football Concessions",
    dek: "Tennessee went half-off for the first hour after gates. Nine programs, seven schools, four ways of pricing the same inventory.",
    file: "fan-first-happy-hour.pdf",
    pages: 19,
    published: "October 1, 2026",
  },
];

export function getReport(slug) {
  return REPORTS.find((report) => report.slug === slug) ?? null;
}
