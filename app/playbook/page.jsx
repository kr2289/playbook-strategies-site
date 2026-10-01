import { cookies } from "next/headers";
import PlaybookList from "../components/PlaybookList";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import { hasPlaybookAccess } from "../lib/playbook-access";
import { PLAYBOOK_PIECES } from "../lib/playbook";
import { SITE_NAME } from "../lib/site";

export const dynamic = "force-dynamic";

export const metadata = {
  title: `The Playbook | ${SITE_NAME}`,
  description:
    "Visual essays on venues, ticketing, market entry, and athlete sponsorship from Playbook Strategies.",
  alternates: {
    canonical: "/playbook",
  },
};

export default function PlaybookIndexPage() {
  const unlocked = hasPlaybookAccess(cookies());

  return (
    <main>
      <SiteNav />
      <section className="playbook-index">
        <div className="wrap">
          <span className="eyebrow">The Playbook</span>
          <div className="bar" />
          <h1>How the work thinks on the page.</h1>
          <p className="playbook-index-lead">
            Original analysis on venues, ticketing, market entry, and the
            sponsorship around athletes. Leave your email on any piece to open
            the library, and opt in to the weekly newsletter if you want it.
          </p>
          {unlocked && (
            <p className="playbook-unlocked-note">
              The library is unlocked on this browser.
            </p>
          )}
          <PlaybookList pieces={PLAYBOOK_PIECES} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
