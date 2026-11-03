import Logo from "./Logo";

const LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#approach", label: "Approach" },
  { href: "/#work", label: "Work" },
  { href: "/reports", label: "Reports" },
  { href: "/#about", label: "About" },
];

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p className="footer-legal">
          <span>
            &copy; {new Date().getFullYear()} Playbook Strategies &middot; Katherine Rowe
          </span>
          <span>Based in Austin, TX. Working globally.</span>
        </p>
        <div className="footer-byline">
          <Logo size={52} />
          <div className="footer-id">
            <p className="footer-name">Playbook Strategies</p>
            <p className="footer-domain">playbookstrategies.co</p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            {LINKS.map(({ href, label }) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
