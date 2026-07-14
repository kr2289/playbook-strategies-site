/* Playbook Strategies — single-page site */

const EMAIL = "katherine@katherinerowe.com";

function PlayIcon({ size = 220, color = "#ffffff", weight = 3 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <rect x="16" y="16" width="68" height="68" stroke={color} strokeWidth={weight} />
      <line x1="50" y1="5" x2="50" y2="16" stroke={color} strokeWidth={weight} />
      <line x1="50" y1="84" x2="50" y2="95" stroke={color} strokeWidth={weight} />
      <line x1="5" y1="50" x2="16" y2="50" stroke={color} strokeWidth={weight} />
      <line x1="84" y1="50" x2="95" y2="50" stroke={color} strokeWidth={weight} />
      <line x1="40" y1="60" x2="59" y2="41" stroke={color} strokeWidth={weight} />
      <path d="M63 37 L55.5 39.5 L60.5 44.5 Z" fill={color} />
      <circle cx="36" cy="64" r="7" stroke={color} strokeWidth={weight} />
      <circle cx="66" cy="34" r="7" stroke={color} strokeWidth={weight} />
    </svg>
  );
}

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

const cases = [
  ["800k → 1.7M", "Customer Acquisition Strategy", "Customers acquired per year through esports, sweepstakes, sports betting, and media-rights partnerships."],
  ["$15M+", "Ticketing & Sponsorship Revenue Strategy", "Revenue upside identified for a pro sports franchise through fan analytics, pricing, and sponsorship benchmarking."],
  ["$525K+", "Two-Event Ticketing & Growth Strategy", "New ticketing revenue upside mapped across a two-event fan flywheel, from pricing to premium add-ons."],
  ["4 weeks", "Enterprise Data Transformation", "Fragmented data sources unified into one governed Databricks pipeline powering an expanded client portal."],
  ["< 6 weeks", "Broadcast Integration Strategy & Deliveries", "Branded integrations from concept to on-air across NBC Sports, Paramount ANZ, and a global Formula 1 partnership."],
  ["162M+", "Data Storytelling Strategy", "Impressions driven by a cross-functional data storytelling team across Team USA, Team GB, and Team Germany."],
  ["+70%", "Event Value Monetization Strategy", "Increase in ticketing revenue recommended for NBA Summer League through session restructuring and pricing."],
  ["4k+ scans", "Athlete Data & AI Activation", "An interactive athlete-data experience with Ashton Eaton, in the top 10% of all Dreamforce activations."],
  ["ROI", "Partnership Strategy & Valuation", "A defensible methodology linking media valuation to sales pipeline and hospitality return."],
];

const who = [
  ["Properties", "Teams, leagues, venues & events, from major professional franchises to emerging tournaments."],
  ["Brands", "Enterprise and consumer brands investing in sports & entertainment and looking to prove the return."],
  ["Agencies", "Partnership, media, and creative agencies that need data and strategy behind the deals they sell."],
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
      {/* nav */}
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top">
            <PlayIcon size={34} color="#17483a" weight={5} />
            <span className="brand-name">
              PLAYBOOK
              <span className="brand-sub">STRATEGIES</span>
            </span>
          </a>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a className="btn" href={`mailto:${EMAIL}`}>
              Let&apos;s Talk
            </a>
          </nav>
        </div>
      </header>

      {/* hero */}
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow on-dark">Strategy. Insight. Growth.</span>
            <h1>I turn data and insight into decisions that drive growth.</h1>
            <p>
              Playbook Strategies helps sports & entertainment organizations
              find the revenue in their data, with frameworks, measurement
              systems, and operating models that outlast the engagement.
            </p>
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

      {/* value strip */}
      <div className="value-strip">
        <div className="wrap">
          <p>
            The value isn&apos;t the analysis.{" "}
            <em>It&apos;s the framework that remains after the work.</em>
          </p>
        </div>
      </div>

      {/* services */}
      <section id="services">
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

      {/* approach */}
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

      {/* work */}
      <section className="work" id="work">
        <div className="wrap">
          <span className="eyebrow">Case Studies</span>
          <div className="bar" />
          <h2>Proof, not promises.</h2>
          <div className="cases">
            {cases.map(([stat, title, desc]) => (
              <div className="case-card" key={title}>
                <span className="stat">{stat}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* who */}
      <section className="who">
        <div className="wrap">
          <span className="eyebrow">Who I Work With</span>
          <div className="bar" />
          <h2>Both sides of the deal.</h2>
          <div className="who-grid">
            {who.map(([title, desc]) => (
              <div className="who-card" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <p className="exp-line">
            Experience spanning all US major leagues, European football, F1,
            the Olympic & Paralympic ecosystems, tennis & golf, AFL, NRL, and
            emerging events.
          </p>
        </div>
      </section>

      {/* about */}
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

      {/* substack */}
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

      {/* contact */}
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
