import { cookies } from "next/headers";
import Link from "next/link";
import PlaybookGate from "../../components/PlaybookGate";
import PlaybookList from "../../components/PlaybookList";
import PlaybookViewer from "../../components/PlaybookViewer";
import SiteFooter from "../../components/SiteFooter";
import SiteNav from "../../components/SiteNav";
import { hasPlaybookAccess } from "../../lib/playbook-access";
import {
  getPlaybookPiece,
  getPlaybookVersion,
  PLAYBOOK_PIECES,
} from "../../lib/playbook";
import { SITE_NAME } from "../../lib/site";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return PLAYBOOK_PIECES.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const piece = getPlaybookPiece(params.slug);
  if (!piece) {
    return { title: `Playbook | ${SITE_NAME}` };
  }

  return {
    title: `${piece.title} | ${SITE_NAME}`,
    description: piece.dek,
    alternates: {
      canonical: `/playbook/${piece.slug}`,
    },
    openGraph: {
      title: `${piece.title} | ${SITE_NAME}`,
      description: piece.dek,
      type: "article",
      url: `/playbook/${piece.slug}`,
    },
  };
}

export default function PlaybookPiecePage({ params, searchParams }) {
  const piece = getPlaybookPiece(params.slug);
  if (!piece) notFound();

  const version = getPlaybookVersion(piece, searchParams?.v);
  const unlocked = hasPlaybookAccess(cookies());
  const others = PLAYBOOK_PIECES.filter((item) => item.slug !== piece.slug);

  return (
    <main>
      <SiteNav />
      <article className="playbook-piece">
        <div className="wrap playbook-piece-intro">
          <Link className="playbook-back" href="/playbook">
            The Playbook
          </Link>
          <span className="eyebrow">{piece.kicker}</span>
          <h1>{piece.title}</h1>
          <p className="playbook-dek">{piece.dek}</p>
        </div>

        {unlocked ? (
          <PlaybookViewer piece={piece} version={version} />
        ) : (
          <div className="wrap">
            <PlaybookGate slug={piece.slug} />
          </div>
        )}
      </article>

      {others.length > 0 && (
        <section className="playbook-more">
          <div className="wrap">
            <span className="eyebrow">More from The Playbook</span>
            <div className="bar" />
            <PlaybookList pieces={others} />
          </div>
        </section>
      )}
      <SiteFooter />
    </main>
  );
}
