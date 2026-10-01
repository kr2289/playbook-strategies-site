export const PLAYBOOK_COOKIE = "playbook_access";

export const PLAYBOOK_PIECES = [
  {
    slug: "865-neyland",
    title: "865 Neyland",
    kicker: "Venues & Real Estate",
    dek: "A $285 million entertainment district beside a 102,000-seat stadium in Knoxville. Who built it, who owns the ground, and what comes back.",
    versions: [
      {
        id: "carousel",
        label: "Carousel",
        file: "865-neyland.html",
        width: 1080,
        height: 7200,
      },
    ],
  },
  {
    slug: "nfl-stadium-cycle",
    title: "NFL Stadium Cycle",
    kicker: "Venues",
    dek: "Eighteen NFL stadiums opened between 1995 and 2009. Every club by the year its current stadium opened — and which ones already have a new build or renovation announced.",
    versions: [
      {
        id: "poster",
        label: "Poster",
        file: "nfl-stadium-cycle.html",
        width: 1080,
        height: 1500,
      },
    ],
  },
  {
    slug: "the-gap-narrows",
    title: "The Gap Narrows",
    kicker: "College Football Ticketing",
    dek: "Announced attendance is not actual attendance. One crest per Power 4 school, 2025 home season — what each school announced, and how far that ran above what its scanners counted.",
    versions: [
      {
        id: "chart",
        label: "Chart",
        file: "the-gap-narrows.html",
        width: 1080,
        height: 950,
      },
    ],
  },
  {
    slug: "nfl-melbourne",
    title: "Arrival time is not the whole strategy",
    kicker: "Market Entry",
    dek: "The NFL’s first regular season game in Australia, and two very different bets on the market. The 49ers landed a week early. The Rams hold the rights.",
    versions: [
      {
        id: "carousel",
        label: "Carousel",
        file: "nfl-melbourne-carousel.html",
        width: 1080,
        height: 5700,
      },
      {
        id: "onepager",
        label: "One-pager",
        file: "nfl-melbourne-onepager.html",
        width: 1080,
        height: 1450,
      },
    ],
  },
  {
    slug: "the-company-they-keep",
    title: "The Company They Keep",
    kicker: "Athlete Sponsorship",
    dek: "Coaches, family, and performance staff have become sponsor inventory. People remember the brands around the athlete. They cannot always explain who each company is paying.",
    versions: [
      {
        id: "carousel",
        label: "Carousel",
        file: "the-company-they-keep.html",
        width: 1080,
        height: 11400,
      },
    ],
  },
];

export function getPlaybookPiece(slug) {
  return PLAYBOOK_PIECES.find((piece) => piece.slug === slug) ?? null;
}

export function getPlaybookVersion(piece, versionId) {
  if (!piece?.versions?.length) return null;
  return (
    piece.versions.find((version) => version.id === versionId) ??
    piece.versions[0]
  );
}
