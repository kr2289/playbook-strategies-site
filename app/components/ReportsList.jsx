import Link from "next/link";

export default function ReportsList({ reports }) {
  return (
    <div className="playbook-grid">
      {reports.map((report) => (
        <Link
          className="playbook-card reports-card"
          href={`/reports/${report.slug}`}
          key={report.slug}
        >
          <span className="playbook-kicker">{report.kicker}</span>
          <h3>{report.title}</h3>
          <p>{report.dek}</p>
          <span className="reports-meta">
            PDF · {report.pages} pages · {report.published}
          </span>
          <span className="playbook-card-cta">Open</span>
        </Link>
      ))}
    </div>
  );
}
