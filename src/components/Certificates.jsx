import React, { useState } from "react";
import { certificates } from "../data.js";

const INITIAL_SHOW = 3;

/* ── Lightbox ─────────────────────────────────────────────── */
function Lightbox({ cert, onClose }) {
  // Close on backdrop click
  const onBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Close on Escape key
  React.useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <div className="lb-backdrop" onClick={onBackdrop} role="dialog" aria-modal="true" aria-label={cert.title}>
      <div className="lb-box">
        {/* Close button */}
        <button className="lb-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Image */}
        <div className="lb-img-wrap">
          {cert.image
            ? <img src={cert.image} alt={cert.title} className="lb-img"/>
            : (
              <div className="lb-placeholder">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M8 14l-3 7 7-2 7 2-3-7"/>
                  <path d="M9 14v1a3 3 0 0 0 6 0v-1"/>
                </svg>
                <p>No image added yet</p>
                <code>/public/certificates/your-file.jpg</code>
              </div>
            )
          }
        </div>

        {/* Info */}
        <div className="lb-info">
          <h3 className="lb-title">{cert.title}</h3>
          <p className="lb-issuer">{cert.issuer}</p>
          <span className="lb-date">{cert.date}</span>
          {cert.url && (
            <a href={cert.url} target="_blank" rel="noreferrer" className="lb-verify">
              Verify credential ↗
            </a>
          )}
        </div>
      </div>

      <style>{`
        .lb-backdrop {
          position: fixed; inset: 0; z-index: 200;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          animation: lb-fade-in 0.2s ease;
        }
        @keyframes lb-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .lb-box {
          position: relative;
          background: var(--bg-card);
          border: 1px solid var(--border-md);
          border-radius: 16px;
          overflow: hidden;
          max-width: 780px;
          width: 100%;
          animation: lb-slide-up 0.22s ease;
          box-shadow: 0 32px 80px rgba(0,0,0,0.5);
        }
        @keyframes lb-slide-up {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .lb-close {
          position: absolute; top: 14px; right: 14px; z-index: 10;
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(0,0,0,0.5); color: #fff;
          display: flex; align-items: center; justify-content: center;
          border: none; cursor: pointer;
          transition: background 0.15s;
        }
        .lb-close:hover { background: rgba(0,0,0,0.8); }
        .lb-img-wrap {
          width: 100%;
          background: #000;
          max-height: 70vh;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }
        .lb-img {
          width: 100%; height: auto;
          max-height: 70vh;
          object-fit: contain;
          display: block;
          object-position: center top;
        }
        .lb-placeholder {
          width: 100%; padding: 80px 20px;
          display: flex; flex-direction: column;
          align-items: center; gap: 12px; color: #475569;
        }
        .lb-placeholder p { font-size: 14px; margin: 0; }
        .lb-placeholder code {
          font-family: var(--mono); font-size: 12px; color: var(--accent);
        }
        .lb-info {
          padding: 20px 24px 22px;
          display: flex; align-items: center; gap: 16px;
          flex-wrap: wrap;
          border-top: 1px solid var(--border);
        }
        .lb-title {
          font-size: 16px; font-weight: 700; color: var(--txt);
          margin: 0; flex: 1; min-width: 200px;
        }
        .lb-issuer { font-size: 13.5px; color: var(--txt-2); margin: 0; }
        .lb-date {
          font-family: var(--mono); font-size: 12px; color: var(--txt-3);
          background: var(--bg-muted); border-radius: 999px;
          padding: 4px 12px; flex-shrink: 0;
        }
        .lb-verify {
          font-size: 13px; font-weight: 600; color: #fff;
          background: var(--accent); padding: 8px 16px;
          border-radius: 8px; flex-shrink: 0;
          transition: opacity 0.15s;
        }
        .lb-verify:hover { opacity: 0.85; }
      `}</style>
    </div>
  );
}

/* ── Certificate Card ─────────────────────────────────────── */
function CertCard({ cert, onClick }) {
  return (
    <article
      className="cert-card"
      onClick={() => onClick(cert)}
      role="button"
      tabIndex={0}
      aria-label={`View ${cert.title}`}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(cert); }}
    >
      <div className="cert-card__thumb">
        {cert.image
          ? <img src={cert.image} alt={cert.title} loading="lazy"/>
          : (
            <div className="cert-placeholder">
              <div className="cert-placeholder__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M8 14l-3 7 7-2 7 2-3-7"/>
                  <path d="M9 14v1a3 3 0 0 0 6 0v-1"/>
                </svg>
              </div>
              <p>Add image</p>
              <code>/certificates/</code>
            </div>
          )
        }
        {/* Expand hint on hover */}
        <div className="cert-card__expand-hint">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <polyline points="15 3 21 3 21 9"/>
            <polyline points="9 21 3 21 3 15"/>
            <line x1="21" y1="3" x2="14" y2="10"/>
            <line x1="3" y1="21" x2="10" y2="14"/>
          </svg>
          Click to expand
        </div>
      </div>

      <div className="cert-card__body">
        <span className="cert-card__date">{cert.date}</span>
        <h3 className="cert-card__title">{cert.title}</h3>
        <p className="cert-card__issuer">{cert.issuer}</p>
      </div>

      <style>{`
        .cert-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .cert-card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
          box-shadow: 0 12px 36px color-mix(in srgb, var(--accent) 12%, transparent);
        }
        .cert-card__thumb {
          aspect-ratio: 4/3;
          background: var(--bg-muted);
          border-bottom: 1px solid var(--border);
          overflow: hidden;
          position: relative;
        }
        .cert-card__thumb img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.35s ease;
        }
        .cert-card:hover .cert-card__thumb img { transform: scale(1.06); }

        /* Expand hint overlay */
        .cert-card__expand-hint {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(2px);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 8px;
          color: #fff; font-size: 13px; font-weight: 600;
          opacity: 0;
          transition: opacity 0.22s ease;
        }
        .cert-card:hover .cert-card__expand-hint { opacity: 1; }

        /* Placeholder */
        .cert-placeholder {
          width: 100%; height: 100%;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 8px; padding: 16px;
        }
        .cert-placeholder__icon {
          color: var(--txt-3); width: 48px; height: 48px; border-radius: 50%;
          background: var(--bg-muted);
          display: flex; align-items: center; justify-content: center;
          border: 1px dashed var(--border-md);
        }
        .cert-placeholder p { font-size: 12px; color: var(--txt-3); margin: 0; }
        .cert-placeholder code {
          font-family: var(--mono); font-size: 10.5px; color: var(--accent);
        }

        /* Body */
        .cert-card__body { padding: 14px 16px 18px; }
        .cert-card__date {
          display: block; font-family: var(--mono); font-size: 11px;
          color: var(--txt-3); margin-bottom: 6px;
        }
        .cert-card__title {
          font-size: 13.5px; font-weight: 700; color: var(--txt);
          line-height: 1.4; margin-bottom: 5px;
        }
        .cert-card__issuer { font-size: 12px; color: var(--txt-3); }
      `}</style>
    </article>
  );
}

/* ── Main Section ─────────────────────────────────────────── */
export default function Certificates() {
  const [showAll, setShowAll]     = useState(false);
  const [lightbox, setLightbox]   = useState(null);
  const hasAnyImage = certificates.some(c => c.image !== null);
  const visible  = showAll ? certificates : certificates.slice(0, INITIAL_SHOW);
  const hasMore  = certificates.length > INITIAL_SHOW;

  return (
    <section id="certs" className="section certs-section">
      <div className="container">
        <p className="section-label">Credentials</p>
        <h2 className="section-title">Certificates</h2>

        {!hasAnyImage && <Guide/>}

        <div className="certs-grid">
          {visible.map(c => (
            <CertCard key={c.id} cert={c} onClick={setLightbox}/>
          ))}
        </div>

        {hasMore && (
          <div className="certs-more-wrap">
            <button className="certs-more-btn" onClick={() => setShowAll(v => !v)}>
              {showAll
                ? "Show less ↑"
                : `Show ${certificates.length - INITIAL_SHOW} more certificate${certificates.length - INITIAL_SHOW > 1 ? "s" : ""} ↓`
              }
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && <Lightbox cert={lightbox} onClose={() => setLightbox(null)}/>}

      <style>{`
        .certs-section { background: var(--bg-muted); }
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px; margin-top: 36px;
        }
        .certs-more-wrap { display: flex; justify-content: center; margin-top: 36px; }
        .certs-more-btn {
          font-size: 14.5px; font-weight: 600;
          color: var(--accent); border: 1.5px solid var(--accent);
          padding: 12px 32px; border-radius: 999px;
          background: transparent; cursor: pointer;
          transition: background 0.15s, color 0.15s;
          font-family: var(--font);
        }
        .certs-more-btn:hover { background: var(--accent); color: #fff; }
        @media (max-width: 1000px) { .certs-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px)  { .certs-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
