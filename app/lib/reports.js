export const REPORTS_COOKIE = "reports_access";

export const REPORTS = [
  {
    slug: "wnba-market-intelligence-2026",
    title: "The WNBA in 2026: Crowds, Team Finances, and Expansion",
    kicker: "WNBA · 2026",
    dek: "Crowds, money, and rights in the Women's National Basketball Association.",
    file: "wnba-market-intelligence-2026.pdf",
    pages: 42,
    published: "October 27, 2026",
  },
  {
    slug: "afl-market-intelligence-2026",
    title: "The AFL in 2026: Crowds, Club Finances, and Partner Deals",
    kicker: "AFL · 2026",
    dek: "Crowds, money, and rights in Australia's most attended league.",
    file: "afl-market-intelligence-2026.pdf",
    pages: 27,
    published: "October 12, 2026",
  },
  {
    slug: "fan-first-happy-hour",
    title: "Happy Hour and Fan First Pricing in College Football",
    kicker: "College football · 2026",
    dek: "Tennessee went half-off for the first hour after gates. Nine programs, seven schools, four pricing models.",
    file: "fan-first-happy-hour.pdf",
    pages: 19,
    published: "October 1, 2026",
  },
];

export function getReport(slug) {
  return REPORTS.find((report) => report.slug === slug) ?? null;
}
