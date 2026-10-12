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
    "Market intelligence from Playbook Strategies. Written on a market, not a client.",
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
          <h1>Market intelligence.</h1>
          <p className="playbook-index-lead">
            I write these on a market, not a client.
          </p>
          {unlocked && (
            <p className="playbook-unlocked-note">
              Unlocked on this computer.
            </p>
          )}
          <ReportsList reports={REPORTS} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
