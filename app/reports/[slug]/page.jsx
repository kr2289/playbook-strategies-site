import { cookies } from "next/headers";
import Link from "next/link";
import ReportsGate from "../../components/ReportsGate";
import ReportsList from "../../components/ReportsList";
import SiteFooter from "../../components/SiteFooter";
import SiteNav from "../../components/SiteNav";
import { hasReportsAccess } from "../../lib/reports-access";
import { getReport, REPORTS } from "../../lib/reports";
import { SITE_NAME } from "../../lib/site";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return REPORTS.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const report = getReport(params.slug);
  if (!report) {
    return { title: `Reports | ${SITE_NAME}` };
  }

  return {
    title: `${report.title} | ${SITE_NAME}`,
    description: report.dek,
    alternates: {
      canonical: `/reports/${report.slug}`,
    },
    openGraph: {
      title: `${report.title} | ${SITE_NAME}`,
      description: report.dek,
      type: "article",
      url: `/reports/${report.slug}`,
    },
  };
}

export default function ReportPage({ params }) {
  const report = getReport(params.slug);
  if (!report) notFound();

  const unlocked = hasReportsAccess(cookies());
  const others = REPORTS.filter((item) => item.slug !== report.slug);

  return (
    <main>
      <SiteNav />
      <article className="playbook-piece">
        <div className="wrap playbook-piece-intro">
          <Link className="playbook-back" href="/reports">
            Reports
          </Link>
          <span className="eyebrow">{report.kicker}</span>
          <h1>{report.title}</h1>
          <p className="playbook-dek">{report.dek}</p>
          <p className="reports-meta reports-meta-page">
            PDF · {report.pages} pages · {report.published}
          </p>
        </div>

        {unlocked ? (
          <div className="wrap reports-download">
            <div className="reports-download-panel">
              <p>Download the PDF, or read it here.</p>
              <a
                className="btn"
                href={`/api/reports/file/${report.slug}?download=1`}
              >
                Download PDF
              </a>
            </div>
            <iframe
              className="reports-embed"
              title={report.title}
              src={`/api/reports/file/${report.slug}`}
            />
          </div>
        ) : (
          <div className="wrap">
            <ReportsGate slug={report.slug} />
          </div>
        )}
      </article>

      {others.length > 0 && (
        <section className="playbook-more">
          <div className="wrap">
            <span className="eyebrow">More reports</span>
            <div className="bar" />
            <ReportsList reports={others} />
          </div>
        </section>
      )}
      <SiteFooter />
    </main>
  );
}
