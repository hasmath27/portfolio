import React, { useState } from "react";
import { projects } from "../data.js";

/* Category filters — only what exists in the data */
const FILTERS = [
  "All",
  "Cloud · DevOps",
  "Machine Learning · API",
  "Mobile · Flutter",
  "Mobile · Android",
  "Web · Full-Stack",
  "Web · Laravel",
  "Desktop · Python",
  "UI/UX · Figma",
  "IoT · Cloud · Mobile",
];

function GHIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}
function ExtIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

/* Gradient overlays per category for placeholder bg */
const CAT_GRADIENTS = {
  "IoT · Cloud · Mobile":    "linear-gradient(135deg,#0D2137 0%,#0A3152 50%,#0D1B2E 100%)",
  "Cloud · DevOps":          "linear-gradient(135deg,#0D1F3C 0%,#0A2744 50%,#071828 100%)",
  "Machine Learning · API":  "linear-gradient(135deg,#1A0A3C 0%,#2D1254 50%,#0F0720 100%)",
  "Mobile · Flutter":        "linear-gradient(135deg,#002244 0%,#0047AB 50%,#001F3F 100%)",
  "Mobile · Android":        "linear-gradient(135deg,#003322 0%,#006644 50%,#002211 100%)",
  "Web · Full-Stack":        "linear-gradient(135deg,#0A1628 0%,#1E3A5F 50%,#0A0F1A 100%)",
  "Web · Laravel":           "linear-gradient(135deg,#3D0A0A 0%,#7F1D1D 50%,#1A0505 100%)",
  "Desktop · Python":        "linear-gradient(135deg,#1A2A0A 0%,#2D4A12 50%,#0A1205 100%)",
  "UI/UX · Figma":           "linear-gradient(135deg,#2D0A3D 0%,#5B1F8A 50%,#1A0520 100%)",
};

const CAT_ACCENT = {
  "IoT · Cloud · Mobile":    "#0EA5E9",
  "Cloud · DevOps":          "#3B82F6",
  "Machine Learning · API":  "#8B5CF6",
  "Mobile · Flutter":        "#38BDF8",
  "Mobile · Android":        "#34D399",
  "Web · Full-Stack":        "#60A5FA",
  "Web · Laravel":           "#F87171",
  "Desktop · Python":        "#86EFAC",
  "UI/UX · Figma":           "#C084FC",
};

function ProjectCard({ p }) {
  const accent = CAT_ACCENT[p.category] || "#3B82F6";
  const grad   = CAT_GRADIENTS[p.category] || "linear-gradient(135deg,#0A1628,#1E3A5F)";

  return (
    <article className="pcard">
      {/* Image area */}
      <div className="pcard__img-wrap">
        {p.image
          ? <img src={p.image} alt={p.title} className="pcard__img" loading="lazy"/>
          : (
            <div className="pcard__placeholder" style={{background: grad}}>
              <span className="pcard__placeholder-cat" style={{color: accent}}>{p.category}</span>
              <span className="pcard__placeholder-title">{p.title}</span>
            </div>
          )
        }

        {/* Hover overlay */}
        <div className="pcard__overlay">
          <div className="pcard__overlay-inner">
            <span className="pcard__overlay-cat" style={{color: accent}}>{p.category}</span>
            <h3 className="pcard__overlay-title">{p.title}</h3>
            <p className="pcard__overlay-summary">{p.summary}</p>

            <ul className="pcard__overlay-bullets">
              {p.bullets.slice(0,3).map((b, i) => (
                <li key={i}>
                  <span className="pcard__bullet-dot" style={{background: accent}}/>
                  {b}
                </li>
              ))}
            </ul>

            <div className="pcard__overlay-stack">
              {p.stack.map(s => (
                <span key={s} className="pcard__chip" style={{borderColor: accent+"44", color: accent}}>{s}</span>
              ))}
            </div>

            <div className="pcard__overlay-links">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="pcard__btn">
                  <GHIcon/> Code
                </a>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="pcard__btn pcard__btn--outline" style={{borderColor: accent, color: accent}}>
                  <ExtIcon/> {p.liveLabel || p.articleLabel || "Live ↗"}
                </a>
              )}
              {p.group && <span className="pcard__group-badge">Group project</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="pcard__foot">
        <div>
          <h3 className="pcard__title">{p.title}</h3>
          <span className="pcard__cat">{p.category}</span>
        </div>
        <div className="pcard__foot-stack">
          {p.stack.slice(0,3).map(s => (
            <span key={s} className="pcard__foot-chip">{s}</span>
          ))}
          {p.stack.length > 3 && <span className="pcard__foot-chip">+{p.stack.length-3}</span>}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter]   = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  const visible  = showAll ? filtered : filtered.slice(0, 6);
  const hasMore  = filtered.length > 6;

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Work</p>
        <h2 className="section-title">My Projects</h2>
        <p className="section-sub" style={{marginBottom: "44px"}}>
          9 projects across mobile, cloud, IoT, UI/UX and web.
        </p>

        {/* Filters */}
        <div className="proj-filters" role="group" aria-label="Filter by category">
          {FILTERS.filter(f => f === "All" || projects.some(p => p.category === f)).map(f => (
            <button
              key={f}
              onClick={() => { setFilter(f); setShowAll(false); }}
              className={`filter-btn${filter === f ? " active" : ""}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="proj-grid">
          {visible.map(p => <ProjectCard key={p.id} p={p}/>)}
        </div>

        {/* Show more / less */}
        {hasMore && (
          <div className="proj-more-wrap">
            <button
              className="proj-more-btn"
              onClick={() => setShowAll(v => !v)}
            >
              {showAll
                ? "Show less ↑"
                : `Show ${filtered.length - 6} more project${filtered.length - 6 > 1 ? "s" : ""} ↓`
              }
            </button>
          </div>
        )}
      </div>

      <style>{`
        /* ── Filters ────────────────────────────────────── */
        .proj-filters {
          display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px;
        }
        .filter-btn {
          font-size: 13px; font-weight: 500;
          padding: 7px 16px; border-radius: 999px;
          border: 1.5px solid var(--border-md);
          color: var(--txt-2); background: transparent;
          cursor: pointer; transition: all 0.15s;
          font-family: var(--font);
        }
        .filter-btn:hover { border-color: var(--accent); color: var(--accent); }
        .filter-btn.active {
          background: var(--accent); color: #fff; border-color: var(--accent);
        }

        /* ── Grid ───────────────────────────────────────── */
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        /* ── Card ───────────────────────────────────────── */
        .pcard {
          border-radius: var(--radius);
          overflow: hidden;
          background: var(--bg-card);
          border: 1px solid var(--border);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .pcard:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.22);
          border-color: var(--border-md);
        }

        /* Image area */
        .pcard__img-wrap {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
        }
        .pcard__img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.4s ease;
        }
        .pcard:hover .pcard__img { transform: scale(1.06); }
        .pcard__placeholder {
          width: 100%; height: 100%;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 10px; padding: 20px;
        }
        .pcard__placeholder-cat {
          font-family: var(--mono); font-size: 11px;
          letter-spacing: 0.06em; text-transform: uppercase;
        }
        .pcard__placeholder-title {
          font-size: 16px; font-weight: 700;
          color: rgba(255,255,255,0.7);
          text-align: center; line-height: 1.3;
        }

        /* Hover overlay */
        .pcard__overlay {
          position: absolute; inset: 0;
          background: rgba(6,11,22,0.93);
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity 0.28s ease;
          overflow-y: auto;
        }
        .pcard:hover .pcard__overlay { opacity: 1; }
        .pcard__overlay-inner {
          padding: 20px; display: flex; flex-direction: column; gap: 10px;
        }
        .pcard__overlay-cat {
          font-family: var(--mono); font-size: 10.5px;
          letter-spacing: 0.06em; text-transform: uppercase;
        }
        .pcard__overlay-title {
          font-size: 16px; font-weight: 700; color: #F1F5F9;
          line-height: 1.25; margin: 0;
        }
        .pcard__overlay-summary {
          font-size: 12.5px; line-height: 1.6; color: #94A3B8;
          margin: 0;
        }
        .pcard__overlay-bullets {
          display: flex; flex-direction: column; gap: 6px;
        }
        .pcard__overlay-bullets li {
          display: flex; align-items: flex-start; gap: 7px;
          font-size: 11.5px; color: #CBD5E1; line-height: 1.45;
        }
        .pcard__bullet-dot {
          width: 5px; height: 5px; border-radius: 50%;
          flex-shrink: 0; margin-top: 5px;
        }
        .pcard__overlay-stack {
          display: flex; flex-wrap: wrap; gap: 5px;
        }
        .pcard__chip {
          font-family: var(--mono); font-size: 10.5px;
          border: 1px solid; border-radius: 5px;
          padding: 3px 8px;
        }
        .pcard__overlay-links {
          display: flex; gap: 8px; flex-wrap: wrap; align-items: center;
          padding-top: 4px;
        }
        .pcard__btn {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 12px; font-weight: 600;
          background: #3B82F6; color: #fff;
          padding: 7px 14px; border-radius: 6px;
          transition: opacity 0.15s;
        }
        .pcard__btn:hover { opacity: 0.85; }
        .pcard__btn--outline {
          background: transparent !important;
          border: 1.5px solid;
        }
        .pcard__group-badge {
          font-size: 11px; color: #64748B;
          border: 1px solid #334155; border-radius: 999px;
          padding: 3px 10px; margin-left: auto;
        }

        /* Card footer */
        .pcard__foot {
          padding: 16px 18px 18px;
          display: flex; flex-direction: column; gap: 10px;
          border-top: 1px solid var(--border);
        }
        .pcard__title {
          font-size: 15px; font-weight: 700; color: var(--txt);
          margin: 0 0 3px; line-height: 1.3;
        }
        .pcard__cat {
          font-family: var(--mono); font-size: 11px;
          color: var(--txt-3); letter-spacing: 0.04em;
        }
        .pcard__foot-stack {
          display: flex; flex-wrap: wrap; gap: 5px;
        }
        .pcard__foot-chip {
          font-family: var(--mono); font-size: 10.5px;
          color: var(--txt-3); background: var(--bg-muted);
          border: 1px solid var(--border); border-radius: 4px;
          padding: 3px 8px;
        }

        /* Show more */
        .proj-more-wrap {
          display: flex; justify-content: center; margin-top: 40px;
        }
        .proj-more-btn {
          font-size: 14.5px; font-weight: 600;
          color: var(--accent); border: 1.5px solid var(--accent);
          padding: 12px 32px; border-radius: 999px;
          background: transparent; cursor: pointer;
          transition: background 0.15s, color 0.15s;
          font-family: var(--font);
        }
        .proj-more-btn:hover { background: var(--accent); color: #fff; }

        @media (max-width: 900px) {
          .proj-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 580px) {
          .proj-grid { grid-template-columns: 1fr; }
          .proj-filters { gap: 6px; }
          .filter-btn { font-size: 12px; padding: 6px 12px; }
        }
      `}</style>
    </section>
  );
}
