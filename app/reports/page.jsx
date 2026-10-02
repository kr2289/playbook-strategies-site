import { cookies } from "next/headers";
import ReportsList from "../components/ReportsList";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import { hasReportsAccess } from "../lib/reports-access";
import { REPORTS } from "../lib/reports";
import { SITE_NAME } from "../lib/site";

export const dynamic = "force-dynamic";

export const metadata = {
  title: `Reports | ${SITE_NAME}`,
  description:
    "Tennessee made the first hour of concessions half-off after the Texas game. 19 pages on how other schools already price food and beer.",
  alternates: {
    canonical: "/reports",
  },
};

export default function ReportsIndexPage() {
  const unlocked = hasReportsAccess(cookies());

  return (
    <main>
      <SiteNav />
      <section className="playbook-index">
        <div className="wrap">
          <span className="eyebrow">Reports</span>
          <div className="bar" />
          <h1>Half-price concessions.</h1>
          <p className="playbook-index-lead">
            After the Texas game, Tennessee made the first hour half-off for
            the rest of the season. I compared how other schools already
            price food and beer, and what that does to the margin.
          </p>
          {unlocked && (
            <p className="playbook-unlocked-note">
              You already unlocked the PDF on this computer.
            </p>
          )}
          <ReportsList reports={REPORTS} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
