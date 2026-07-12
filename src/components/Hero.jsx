import React, { useState, useEffect } from "react";
import { profile, stats } from "../data.js";

function PhotoOrPlaceholder() {
  if (profile.photo) {
    return (
      <img
        src={profile.photo}
        alt={profile.name}
        className="hero-photo"
      />
    );
  }
  return (
    <div className="hero-photo-placeholder" aria-label="Profile photo placeholder">
      <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
      <span>Add your photo to<br/><code>/public/photo.jpg</code></span>
    </div>
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % profile.specialties.length);
        setFade(true);
      }, 300);
    }, 2800);
    return () => clearInterval(iv);
  }, []);

  return (
    <section id="top" className="hero-section">
      <div className="container hero-inner">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            Open to internship opportunities
          </div>

          <h1 className="hero-name">
            Hi, I'm
            <br/>
            <span className="hero-name-accent">{profile.name}</span>
          </h1>

          <div className="hero-role-row">
            <span className="hero-role-static">I build</span>
            <span
              className="hero-role-dynamic"
              style={{ opacity: fade ? 1 : 0, transform: fade ? "translateY(0)" : "translateY(-8px)" }}
            >
              {profile.specialties[roleIdx]}
            </span>
          </div>

          <p className="hero-about">{profile.about}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View my work</a>
            <a href={`mailto:${profile.email}`} className="btn-outline">Get in touch</a>
          </div>

          <div className="hero-links">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hero-link-pill">
              <GHIcon /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hero-link-pill">
              <LIIcon /> LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-photo-col">
          <div className="hero-photo-ring">
            <PhotoOrPlaceholder />
          </div>

          <div className="hero-stats-grid">
            {stats.map(s => (
              <div key={s.label} className="hero-stat">
                <span className="hero-stat-val">{s.value}</span>
                <span className="hero-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex; align-items: center;
          background: var(--hero-grad);
          padding: 120px 0 80px;
          border-bottom: 1px solid var(--border);
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 64px;
          align-items: center;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 500; color: var(--accent);
          background: var(--accent-lt); border-radius: 999px;
          padding: 7px 16px; margin-bottom: 28px;
          border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
        }
        .hero-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--signal);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        .hero-name {
          font-size: clamp(2.6rem, 5vw, 4rem);
          font-weight: 800; letter-spacing: -0.03em;
          line-height: 1.08; color: var(--txt);
          margin-bottom: 18px;
        }
        .hero-name-accent { color: var(--accent); }
        .hero-role-row {
          display: flex; align-items: center; gap: 12px;
          font-size: clamp(1.2rem, 2.5vw, 1.55rem);
          font-weight: 700; color: var(--txt-2);
          margin-bottom: 28px;
        }
        .hero-role-dynamic {
          color: var(--txt);
          border-bottom: 3px solid var(--accent);
          padding-bottom: 2px;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .hero-about {
          font-size: 16.5px; line-height: 1.75;
          color: var(--txt-2); max-width: 520px;
          margin-bottom: 36px;
        }
        .hero-actions {
          display: flex; gap: 14px; flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .btn-primary {
          font-size: 15px; font-weight: 700;
          background: var(--accent); color: #fff;
          padding: 14px 28px; border-radius: var(--radius-sm);
          transition: background 0.15s, transform 0.15s;
          display: inline-block;
        }
        .btn-primary:hover { background: var(--accent-dk); transform: translateY(-1px); }
        .btn-outline {
          font-size: 15px; font-weight: 600; color: var(--txt);
          border: 1.5px solid var(--border-md);
          padding: 14px 28px; border-radius: var(--radius-sm);
          transition: border-color 0.15s, color 0.15s;
          display: inline-block;
        }
        .btn-outline:hover { border-color: var(--accent); color: var(--accent); }
        .hero-links {
          display: flex; gap: 10px; flex-wrap: wrap;
        }
        .hero-link-pill {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 13.5px; font-weight: 500; color: var(--txt-2);
          background: var(--bg-card); border: 1px solid var(--border);
          padding: 8px 16px; border-radius: 999px;
          transition: color 0.15s, border-color 0.15s;
        }
        .hero-link-pill:hover { color: var(--accent); border-color: var(--accent); }

        /* Photo */
        .hero-photo-col {
          display: flex; flex-direction: column; align-items: center; gap: 28px;
        }
        .hero-photo-ring {
          width: 300px; height: 300px; border-radius: 50%;
          border: 3px solid var(--border-md);
          box-shadow: 0 0 0 8px var(--bg-muted);
          overflow: hidden; flex-shrink: 0;
          background: var(--bg-muted);
        }
        .hero-photo {
          width: 100%; height: 100%; object-fit: cover; object-position: center top;
        }
        .hero-photo-placeholder {
          width: 100%; height: 100%;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 14px;
          color: var(--txt-3);
        }
        .hero-photo-placeholder code {
          font-family: var(--mono); font-size: 12px; color: var(--accent);
        }
        .hero-photo-placeholder span {
          font-size: 13px; text-align: center; line-height: 1.6;
        }
        .hero-stats-grid {
          display: flex; gap: 0;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius); overflow: hidden;
          width: 100%;
        }
        .hero-stat {
          flex: 1; padding: 20px 16px; text-align: center;
          border-right: 1px solid var(--border);
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat-val {
          display: block; font-size: 26px; font-weight: 800; color: var(--accent);
          letter-spacing: -0.02em;
        }
        .hero-stat-lbl {
          display: block; font-size: 12px; color: var(--txt-3); margin-top: 3px;
        }

        @media (max-width: 960px) {
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-photo-col { order: -1; }
          .hero-photo-ring { width: 200px; height: 200px; }
          .hero-badge, .hero-actions, .hero-links { justify-content: center; }
          .hero-role-row { justify-content: center; }
          .hero-about { margin: 0 auto 36px; }
        }
      `}</style>
    </section>
  );
}

function GHIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}
function LIIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
