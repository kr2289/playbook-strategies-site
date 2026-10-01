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
    "Downloadable research from Playbook Strategies. Leave your email to get the PDF, and opt in to the weekly newsletter if you want it.",
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
          <h1>Research you can take into the room.</h1>
          <p className="playbook-index-lead">
            Original analysis on how sports properties price the fan
            experience — starting with college football concessions. Leave
            your name and email to download a PDF. Check the box if you also
            want the weekly newsletter.
          </p>
          {unlocked && (
            <p className="playbook-unlocked-note">
              Reports are unlocked on this browser.
            </p>
          )}
          <ReportsList reports={REPORTS} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
