"use client";

import { useEffect, useState } from "react";
import PlayIcon from "./PlayIcon";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
];

export default function SiteNav({ email }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#top" onClick={closeMenu}>
          <PlayIcon size={34} color="#17483a" weight={5} />
          <span className="brand-name">
            PLAYBOOK
            <span className="brand-sub">STRATEGIES</span>
          </span>
        </a>

        <nav className="nav-links nav-desktop" aria-label="Primary">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a className="btn" href={`mailto:${email}`}>
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
          <span className={`nav-toggle-bar ${open ? "open" : ""}`} />
          <span className={`nav-toggle-bar ${open ? "open" : ""}`} />
          <span className={`nav-toggle-bar ${open ? "open" : ""}`} />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`nav-mobile ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="nav-mobile-inner" aria-label="Mobile">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="btn" href={`mailto:${email}`} onClick={closeMenu}>
            Let&apos;s Talk
          </a>
        </nav>
      </div>

      <button
        type="button"
        className={`nav-backdrop ${open ? "open" : ""}`}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={closeMenu}
      />
    </header>
  );
}
