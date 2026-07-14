import React from "react";
import { profile } from "../data.js";

export default function Footer() {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-card">
            <div className="contact-card__left">
              <p className="section-label" style={{marginBottom: "10px"}}>Get in touch</p>
              <h2 className="contact-title">Let's work together</h2>
              <p className="contact-sub">
                I'm actively looking for internship opportunities. If you have a position that matches my skills, I'd love to connect.
              </p>
            </div>
            <div className="contact-card__right">
              <a href={`mailto:${profile.email}`} className="contact-btn-primary">
                Send me an email
              </a>
              <div className="contact-socials">
                <a href={profile.github}   target="_blank" rel="noreferrer" className="contact-social">GitHub ↗</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-social">LinkedIn ↗</a>
                <a href={profile.resumeUrl}                                  className="contact-social">Resume ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="footer-brand">
            <span className="footer-dot" aria-hidden="true" />
            {profile.name}
          </p>
          <p className="footer-note">
            © 2026 Nifa | Code. Create. Innovate. | All rights reserved.
          </p>
          <div className="footer-links">
            <a href={profile.github}   target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </footer>

      <style>{`
        .contact-section { padding: 100px 0; }
        .contact-card {
          background: var(--bg-card);
          border: 1.5px solid var(--border-md);
          border-radius: var(--radius);
          padding: 56px 60px;
          display: flex; gap: 60px; align-items: center;
          position: relative; overflow: hidden;
        }
        .contact-card::before {
          content: "";
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 80% 50%, color-mix(in srgb, var(--accent) 6%, transparent), transparent 70%);
          pointer-events: none;
        }
        .contact-card__left { flex: 1; }
        .contact-title {
          font-size: clamp(1.8rem, 3.5vw, 2.4rem);
          font-weight: 800; letter-spacing: -0.02em;
          color: var(--txt); line-height: 1.15; margin-bottom: 16px;
        }
        .contact-sub {
          font-size: 16px; line-height: 1.7; color: var(--txt-2);
          max-width: 440px;
        }
        .contact-card__right {
          display: flex; flex-direction: column; gap: 16px;
          align-items: flex-start; flex-shrink: 0;
        }
        .contact-btn-primary {
          font-size: 15px; font-weight: 700;
          background: var(--accent); color: #fff;
          padding: 15px 32px; border-radius: var(--radius-sm);
          transition: background 0.15s, transform 0.15s;
          display: inline-block; white-space: nowrap;
        }
        .contact-btn-primary:hover { background: var(--accent-dk); transform: translateY(-1px); }
        .contact-socials { display: flex; gap: 18px; }
        .contact-social {
          font-size: 14px; font-weight: 600; color: var(--txt-2);
          transition: color 0.15s;
        }
        .contact-social:hover { color: var(--accent); }

        .site-footer {
          border-top: 1px solid var(--border);
          padding: 28px 0;
          background: var(--bg);
        }
        .footer-inner {
          display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
        }
        .footer-brand {
          font-weight: 700; font-size: 15px; color: var(--txt);
          display: flex; align-items: center; gap: 8px;
        }
        .footer-dot {
          width: 8px; height: 8px; border-radius: 50%; background: var(--accent);
          display: inline-block;
        }
        .footer-note {
          font-size: 13px; color: var(--txt-3); flex: 1;
        }
        .footer-links {
          display: flex; gap: 20px;
        }
        .footer-links a {
          font-size: 13.5px; color: var(--txt-3); transition: color 0.15s;
        }
        .footer-links a:hover { color: var(--accent); }

        @media (max-width: 820px) {
          .contact-card { flex-direction: column; padding: 36px 28px; gap: 32px; }
          .contact-card__right { width: 100%; }
          .contact-btn-primary { width: 100%; text-align: center; }
          .footer-note { width: 100%; order: 3; }
        }
      `}</style>
    </>
  );
}
