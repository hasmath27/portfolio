import React from "react";
import { profile, education } from "../data.js";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <p className="section-label">Background</p>
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>{profile.about}</p>
            <p>{profile.about2}</p>

            <div className="about-contact-row">
              <a href={`mailto:${profile.email}`} className="about-contact-pill">
                <MailIcon/> {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="about-contact-pill">
                <PhoneIcon/> {profile.phone}
              </a>
            </div>
          </div>

          <div className="about-edu-card">
            <div className="about-edu-card__head">
              <GradIcon/>
              <h3>Education</h3>
            </div>
            <div className="about-edu-card__degree">{education.degree}</div>
            <div className="about-edu-card__inst">{education.institution}</div>
            <div className="about-edu-card__loc">{education.location} · {education.period}</div>
            <div className="about-edu-card__divider" />
            <p className="about-edu-card__cwlbl">Relevant Coursework</p>
            <ul className="about-edu-card__cw">
              {education.coursework.map(c => (
                <li key={c}>
                  <span className="about-cw-dot" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .about-section { background: var(--bg-muted); }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 48px;
          align-items: start;
          margin-top: 48px;
        }
        .about-text p {
          font-size: 16.5px; line-height: 1.8; color: var(--txt-2);
          margin-bottom: 22px;
        }
        .about-contact-row {
          display: flex; flex-wrap: wrap; gap: 10px; margin-top: 32px;
        }
        .about-contact-pill {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 14px; font-weight: 500; color: var(--txt-2);
          background: var(--bg-card); border: 1px solid var(--border);
          padding: 10px 18px; border-radius: 999px;
          transition: border-color 0.15s, color 0.15s;
        }
        .about-contact-pill:hover { border-color: var(--accent); color: var(--accent); }
        .about-edu-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 28px;
        }
        .about-edu-card__head {
          display: flex; align-items: center; gap: 10px; margin-bottom: 18px;
        }
        .about-edu-card__head h3 {
          font-family: var(--mono); font-size: 12px; text-transform: uppercase;
          letter-spacing: 0.08em; color: var(--accent);
        }
        .about-edu-card__degree {
          font-size: 17px; font-weight: 700; color: var(--txt);
          margin-bottom: 6px; line-height: 1.35;
        }
        .about-edu-card__inst {
          font-size: 14.5px; color: var(--txt-2); margin-bottom: 4px;
        }
        .about-edu-card__loc {
          font-size: 13px; color: var(--txt-3);
          font-family: var(--mono); margin-bottom: 0;
        }
        .about-edu-card__divider {
          border-top: 1px solid var(--border); margin: 20px 0 16px;
        }
        .about-edu-card__cwlbl {
          font-size: 12px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.06em; color: var(--txt-3); margin-bottom: 12px;
        }
        .about-edu-card__cw {
          display: flex; flex-direction: column; gap: 9px;
        }
        .about-edu-card__cw li {
          display: flex; align-items: center; gap: 10px;
          font-size: 14px; color: var(--txt-2);
        }
        .about-cw-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; }
          .about-edu-card { order: -1; }
        }
      `}</style>
    </section>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.95-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
function GradIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );
}
