import ReportsList from "../components/ReportsList";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import { REPORTS } from "../lib/reports";
import { SITE_NAME } from "../lib/site";

export const dynamic = "force-dynamic";

export const metadata = {
  title: `Reports | ${SITE_NAME}`,
  description:
    "Playbook Strategies reports bring together data, research and commercial analysis to help teams, brands and investors understand a market, evaluate opportunities and make more informed decisions.",
  alternates: {
    canonical: "/reports",
  },
};

export default function ReportsIndexPage() {
  return (
    <main>
      <SiteNav />
      <section className="playbook-index">
        <div className="wrap">
          <span className="eyebrow">Reports</span>
          <div className="bar" />
          <h1>A closer look at the business of sports.</h1>
          <p className="playbook-index-lead">
            Playbook Strategies reports bring together data, research and
            commercial analysis to help teams, brands and investors
            understand a market, evaluate opportunities and make more
            informed decisions. Each report examines how revenue is
            generated, where growth is coming from and what it means for
            your business.
          </p>
          <ReportsList reports={REPORTS} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
