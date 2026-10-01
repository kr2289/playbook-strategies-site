import Link from "next/link";

export default function PlaybookList({ pieces }) {
  return (
    <div className="playbook-grid">
      {pieces.map((piece) => (
        <Link
          className="playbook-card"
          href={`/playbook/${piece.slug}`}
          key={piece.slug}
        >
          <span className="playbook-kicker">{piece.kicker}</span>
          <h3>{piece.title}</h3>
          <p>{piece.dek}</p>
          <span className="playbook-card-cta">Open the piece</span>
        </Link>
      ))}
    </div>
  );
}
