import React, { useState } from "react";
import { skillGroups } from "../data.js";

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <p className="section-label">Expertise</p>
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-sub" style={{ marginBottom: "56px" }}>
          Technologies and tools I work with across mobile, cloud, IoT, and the web.
        </p>

        <div className="sg-grid">
          {skillGroups.map((group, gi) => (
            <div
              key={group.label}
              className={`sg-card${hovered === gi ? " sg-card--active" : ""}`}
              style={{ "--gcolor": group.color }}
              onMouseEnter={() => setHovered(gi)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Glow blob */}
              <div className="sg-glow" aria-hidden="true" />

              {/* Header */}
              <div className="sg-head">
                <span className="sg-icon" role="img" aria-label={group.label}>
                  {group.icon}
                </span>
                <h3 className="sg-label">{group.label}</h3>
                <span className="sg-count">{group.items.length}</span>
              </div>

              {/* Divider */}
              <div className="sg-divider" />

              {/* Pills */}
              <div className="sg-pills">
                {group.items.map(item => (
                  <span key={item} className="sg-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background: var(--bg-muted);
          position: relative; overflow: hidden;
        }

        /* Subtle background decoration */
        .skills-section::before {
          content: "";
          position: absolute; top: -200px; right: -200px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, color-mix(in srgb, var(--accent) 5%, transparent), transparent 70%);
          pointer-events: none;
        }

        /* Grid */
        .sg-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        /* Card */
        .sg-card {
          position: relative;
          background: var(--bg-card);
          border: 1.5px solid var(--border);
          border-radius: var(--radius);
          padding: 24px 22px 26px;
          overflow: hidden;
          cursor: default;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .sg-card--active {
          transform: translateY(-4px);
          border-color: var(--gcolor, var(--accent));
          box-shadow: 0 12px 40px color-mix(in srgb, var(--gcolor, var(--accent)) 15%, transparent);
        }

        /* Animated glow behind card on hover */
        .sg-glow {
          position: absolute; top: -40px; right: -40px;
          width: 120px; height: 120px; border-radius: 50%;
          background: radial-gradient(circle, var(--gcolor, var(--accent)), transparent 70%);
          opacity: 0;
          transition: opacity 0.35s ease, transform 0.35s ease;
          pointer-events: none;
        }
        .sg-card--active .sg-glow { opacity: 0.18; transform: scale(1.3); }

        /* Top accent stripe */
        .sg-card::after {
          content: "";
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--gcolor, var(--accent));
          opacity: 0;
          transition: opacity 0.25s ease;
          border-radius: var(--radius) var(--radius) 0 0;
        }
        .sg-card--active::after { opacity: 1; }

        /* Head */
        .sg-head {
          display: flex; align-items: center; gap: 10px; margin-bottom: 0;
        }
        .sg-icon { font-size: 24px; line-height: 1; flex-shrink: 0; }
        .sg-label {
          font-size: 14.5px; font-weight: 700; color: var(--txt);
          letter-spacing: -0.01em; flex: 1;
        }
        .sg-count {
          font-family: var(--mono); font-size: 11px;
          color: var(--gcolor, var(--accent));
          background: color-mix(in srgb, var(--gcolor, var(--accent)) 12%, transparent);
          border-radius: 999px; padding: 3px 9px;
          font-weight: 600; flex-shrink: 0;
        }

        /* Divider */
        .sg-divider {
          height: 1px; background: var(--border);
          margin: 16px 0;
          transition: background 0.25s;
        }
        .sg-card--active .sg-divider {
          background: color-mix(in srgb, var(--gcolor, var(--accent)) 30%, var(--border));
        }

        /* Pills */
        .sg-pills {
          display: flex; flex-wrap: wrap; gap: 7px;
        }
        .sg-pill {
          font-size: 12.5px; font-weight: 500;
          color: var(--txt-2);
          background: var(--bg-muted);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 5px 11px;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .sg-card--active .sg-pill {
          color: var(--gcolor, var(--accent));
          border-color: color-mix(in srgb, var(--gcolor, var(--accent)) 30%, transparent);
          background: color-mix(in srgb, var(--gcolor, var(--accent)) 7%, var(--bg-muted));
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .sg-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
        @media (max-width: 780px) {
          .sg-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (max-width: 480px) {
          .sg-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
