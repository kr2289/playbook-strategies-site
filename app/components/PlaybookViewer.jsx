"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function PlaybookViewer({ piece, version }) {
  const frameRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;

    const update = () => {
      const width = node.getBoundingClientRect().width;
      setScale(Math.min(1, width / version.width));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, [version.width]);

  return (
    <div className="playbook-viewer">
      {piece.versions.length > 1 && (
        <div className="playbook-versions" aria-label="Format">
          {piece.versions.map((option) => (
            <Link
              key={option.id}
              href={`/playbook/${piece.slug}?v=${option.id}`}
              scroll={false}
              className={
                option.id === version.id
                  ? "playbook-version is-active"
                  : "playbook-version"
              }
            >
              {option.label}
            </Link>
          ))}
        </div>
      )}
      <div className="playbook-frame" ref={frameRef}>
        <div
          className="playbook-frame-stage"
          style={{ height: version.height * scale }}
        >
          <iframe
            title={piece.title}
            src={`/api/playbook/file/${piece.slug}?v=${version.id}`}
            width={version.width}
            height={version.height}
            sandbox="allow-scripts allow-same-origin"
            style={{
              width: version.width,
              height: version.height,
              transform: `scale(${scale})`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
