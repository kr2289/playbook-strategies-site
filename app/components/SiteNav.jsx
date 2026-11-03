"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#approach", label: "Approach" },
  { href: "/#work", label: "Work" },
  { href: "/reports", label: "Reports" },
  { href: "/sports-tech", label: "Sports Tech" },
  { href: "/#about", label: "About" },
];

function linkIsActive(href, pathname) {
  if (!href.startsWith("/") || href.includes("#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function sectionLabel(pathname) {
  if (pathname.startsWith("/intelligence")) return "Intelligence";
  if (pathname.startsWith("/sports-tech")) return "Sports Tech";
  if (pathname.startsWith("/reports")) return "Reports";
  return null;
}

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const section = sectionLabel(pathname);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setOpen(false);
  const contactHref = pathname === "/" ? "#contact" : "/#contact";

  return (
    <header className="letterhead">
      <div className="wrap">
        <div className="lh">
          <a className="mk" href="/" onClick={closeMenu}>
            Playbook Strategies
          </a>
          {section ? (
            <>
              <span className="dv" aria-hidden="true">
                /
              </span>
              <span className="ds">{section}</span>
            </>
          ) : null}

          <nav className="lh-nav nav-desktop" aria-label="Primary">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={linkIsActive(href, pathname) ? "is-active" : undefined}
              >
                {label}
              </a>
            ))}
            <a className="btn" href={contactHref}>
              Let&apos;s Talk
            </a>
          </nav>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <div className="lh-sub" />

        <div id="mobile-nav" className={open ? "lh-mobile open" : "lh-mobile"}>
          <nav aria-label="Mobile">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <a className="btn" href={contactHref} onClick={closeMenu}>
              Let&apos;s Talk
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
