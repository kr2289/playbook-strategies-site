import PlayIcon from "./components/PlayIcon";
import SiteNav from "./components/SiteNav";

const EMAIL = "katherine@katherinerowe.com";

const POSITIONING =
  "Strategy and analytics advisor across the sports & entertainment ecosystem. I help organizations find revenue in ticketing, sponsorship, media, and growth, with frameworks that outlast the engagement.";

const areas = [
  ["01", "Growth & Customer Acquisition", "Operating models, channel strategy, international expansion, and fan segmentation."],
  ["02", "Partnership & Sponsorship Strategy", "Valuation, benchmarking, asset audits, and ROI models for deals that pay off."],
  ["03", "Ticketing, Pricing & Event Value", "Pricing resets, packaging, premium inventory, and monetization that lift yield."],
  ["04", "Broadcast & Media Integration", "Branded integrations and global feed strategy, from concept to delivery."],
  ["05", "Data Storytelling & Activation", "Campaigns, BI dashboards & reporting, athlete & AI activations, and data-brand positioning."],
  ["06", "Tech Stack & Data Foundations", "Unified fan data models, automated pipelines, predictive analytics, and CRM & marketing automation."],
];

const steps = [
  ["01", "Start with the data you have", "Go inside the organization and map what exists, even without a CRM or database, and find the story it tells."],
  ["02", "Size the opportunity", "Quantify the incremental revenue on the table and tie every recommendation to the KPIs that matter to you."],
  ["03", "Test, shift & measure", "Put changes into the live season or event, measure what actually moves, and iterate rather than delivering a one-time report."],
  ["04", "Make it stick", "Bridge data to the people who use it, with narratives every department can act on and systems the team keeps using."],
];

const caseGroups = [
  {
    label: "Revenue & Growth",
    cases: [
      ["800k → 1.7M", "Customer Acquisition Strategy", "Customers acquired per year through esports, sweepstakes, sports betting, and media-rights partnerships."],
      ["$15M+", "Ticketing & Sponsorship Revenue Strategy", "Revenue upside identified for a pro sports franchise through fan analytics, pricing, and sponsorship benchmarking."],
    ],
  },
  {
    label: "Partnerships & Media",
    cases: [
      ["< 6 weeks", "Broadcast Integration Strategy & Deliveries", "Branded integrations from concept to on-air across NBC Sports, Paramount ANZ, and a global Formula 1 partnership."],
      ["162M+", "Data Storytelling Strategy", "Impressions driven by a cross-functional data storytelling team across Team USA, Team GB, and Team Germany."],
    ],
  },
  {
    label: "Data & Activation",
    cases: [
      ["4 weeks", "Enterprise Data Transformation", "Fragmented data sources unified into one governed Databricks pipeline powering an expanded client portal."],
      ["4k+ scans", "Athlete Data & AI Activation", "An interactive athlete-data experience with Ashton Eaton, in the top 10% of all Dreamforce activations."],
    ],
  },
];

const who = [
  ["Properties", "Teams, leagues, venues & events, from major professional franchises to emerging tournaments."],
  ["Brands", "Enterprise and consumer brands investing in sports & entertainment and looking to prove the return."],
  ["Agencies", "Partnership, media, and creative agencies that need data and strategy behind the deals they sell."],
  ["Tech Providers", "SaaS, data, and analytics platforms selling into sports & entertainment — positioning, use cases, and the story that wins enterprise deals."],
  ["Investment & Real Estate", "Investors, developers, and ownership groups evaluating sports & entertainment assets, venue economics, and the revenue story behind the deal."],
  ["Athletes & Individuals", "Athletes and personalities turning performance data into brand storytelling and activations."],
];

const experience = [
  ["2024–2026", "CrowdIQ", "Led client strategy & insights for global sports organizations, turning crowd data into ticketing, game-day, and sponsorship gains."],
  ["2021–2024", "Salesforce", "Drove data storytelling & partnership ROI across the F1 and Olympic ecosystems; led Tableau marketing strategic planning & budget."],
  ["2020–2021", "Kraft Analytics Group", "Led ticketing analytics for the NFL and its 30 clubs; built fan acquisition and international expansion strategies."],
  ["2012–2018", "U.S. Army", "Signal officer leading teams that delivered satellite, radio, and network communications."],
];

export default function Home() {
  return (
    <main>
      <SiteNav email={EMAIL} />

      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow on-dark">Katherine Rowe · Playbook Strategies</span>
            <h1>I turn data and insight into decisions that drive growth.</h1>
            <p className="hero-lead">{POSITIONING}</p>
            <div className="hero-ctas">
              <a className="btn light" href={`mailto:${EMAIL}`}>
                Let&apos;s build your playbook
              </a>
              <a className="btn ghost" href="/playbook-strategies-one-pager.pdf" download>
                Download the one-pager
              </a>
            </div>
          </div>
          <div className="hero-icon">
            <PlayIcon size={260} />
          </div>
        </div>
      </section>

      <div className="value-strip">
        <div className="wrap">
          <p>
            The value isn&apos;t the analysis.{" "}
            <em>It&apos;s the framework that remains after the work.</em>
          </p>
        </div>
      </div>

      <section className="bg-graph-paper" id="services">
        <div className="wrap">
          <span className="eyebrow">What I Do</span>
          <div className="bar" />
          <h2>Project areas built around your KPIs.</h2>
          <div className="grid-3">
            {areas.map(([num, title, desc]) => (
              <div className="area" key={num}>
                <span className="num">{num}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="wrap">
          <span className="eyebrow on-dark">How I Work</span>
          <h2 style={{ marginTop: 18 }}>My approach</h2>
          <p className="lead">
            No two organizations are the same. Every engagement starts from
            your data, your constraints, and your KPIs, and it ends with
            something your team keeps running.
          </p>
          <div className="steps">
            {steps.map(([num, title, desc]) => (
              <div className="step" key={num}>
                <div className="dot">{num}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <p className="close-line">
            Fractional, project-based, or ongoing, structured to fit the
            organization.
          </p>
        </div>
      </section>

      <section className="who bg-graph-paper" id="who">
        <div className="wrap">
          <span className="eyebrow">Who I Work With</span>
          <div className="bar" />
          <h2>Across the sports & entertainment ecosystem.</h2>
          <div className="who-grid">
            {who.map(([title, desc]) => (
              <div className="who-card" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work bg-graph-paper" id="work">
        <div className="wrap">
          <span className="eyebrow">Case Studies</span>
          <div className="bar" />
          <h2>Proof, not promises.</h2>
          <p className="work-lead">
            Selected results from engagements like these — anonymized where
            required.
          </p>
          <div className="case-groups">
            {caseGroups.map(({ label, cases }) => (
              <div className="case-group" key={label}>
                <h3 className="case-group-label">{label}</h3>
                <div className="cases">
                  {cases.map(([stat, title, desc]) => (
                    <div className="case-card" key={title}>
                      <span className="stat">{stat}</span>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <span className="eyebrow">About</span>
          <div className="bar" />
          <h2>Katherine Rowe</h2>
          <div className="about-grid about">
            <div className="about-photo">
              <img src="/headshot.jpg" alt="Katherine Rowe" />
              <p className="about-quote">
                &ldquo;I turn data and insight into decisions that drive
                growth.&rdquo;
              </p>
            </div>
            <div>
              <p className="about-bio">
                I sit at the intersection of strategy, analytics, and
                execution. A connector of concepts and people, and a former
                U.S. Army officer, I lead diverse teams and build the systems
                organizations keep using long after an engagement ends.
              </p>
              <h4>EXPERIENCE</h4>
              <div className="xp">
                {experience.map(([dates, org, desc]) => (
                  <div className="xp-row" key={org}>
                    <span className="dates">{dates}</span>
                    <span className="org">{org}</span>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
              <p className="exp-line about-exp">
                Experience spanning all US major leagues, European football,
                F1, the Olympic &amp; Paralympic ecosystems, tennis &amp; golf,
                AFL, NRL, and emerging events.
              </p>
              <h4>EDUCATION</h4>
              <div className="edu">
                <span>
                  <strong>MLS, Sports Law</strong> &mdash; Arizona State
                  University
                </span>
                <span>
                  <strong>MBA, Global Business</strong> &mdash; UT Austin
                  (McCombs)
                </span>
                <span>
                  <strong>BA, Political Science</strong> &mdash; Clark
                  University
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="substack">
        <div className="wrap">
          <span className="eyebrow">The Newsletter</span>
          <h2>Weekly plays from the front office.</h2>
          <p>
            Strategy, analytics, and the business of sports, written weekly on
            Substack.
          </p>
          <a
            className="btn"
            href="https://katherinerowe.substack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read &amp; subscribe
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap contact-grid">
          <div>
            <span className="eyebrow on-dark">Contact</span>
            <h2>Let&apos;s build your playbook.</h2>
            <p className="pitch">
              Fractional advisory, defined projects, or ongoing strategy work.
              If your organization is sitting on data it isn&apos;t using,
              let&apos;s talk.
            </p>
            <a className="btn light" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>
          <div className="contact-links">
            <span>
              <span className="label">LinkedIn</span>
              <a
                href="https://linkedin.com/in/katherine-rowe"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/katherine-rowe
              </a>
            </span>
            <span>
              <span className="label">Blog</span>
              <a
                href="https://katherinerowe.substack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                katherinerowe.substack.com
              </a>
            </span>
            <span>
              <span className="label">Website</span>
              <a
                href="https://katherinerowe.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                katherinerowe.com
              </a>
            </span>
            <span>
              <span className="label">One-pager</span>
              <a href="/playbook-strategies-one-pager.pdf" download>
                Download the PDF
              </a>
            </span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>
            &copy; {new Date().getFullYear()} Playbook Strategies &middot;
            Katherine Rowe
          </span>
          <span>Based in Austin, TX. Working globally.</span>
        </div>
      </footer>
    </main>
  );
}
