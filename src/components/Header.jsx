import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext.jsx";

const NAV = [
  { href: "#projects",  label: "Projects" },
  { href: "#skills",    label: "Skills" },
  { href: "#certs",     label: "Certificates" },
  { href: "#about",     label: "About" },
  { href: "#contact",   label: "Contact" },
];

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Header() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header className={`hdr${scrolled ? " hdr--solid" : ""}`}>
        <div className="container hdr__inner">
          <nav className="hdr__nav" aria-label="Primary navigation">
            {NAV.map(l => (
              <a key={l.href} href={l.href} className="hdr__link">{l.label}</a>
            ))}
          </nav>

          <div className="hdr__right">
            <button
              className="hdr__theme"
              onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <a href="/MN.FathimaHasmathNifa_CV.pdf" className="hdr__cta" target="_blank" rel="noreferrer">Resume</a>
            <button
              className="hdr__burger"
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open
                ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              }
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="mobile-nav" role="dialog" aria-label="Mobile navigation">
          {NAV.map(l => (
            <a key={l.href} href={l.href} className="mobile-nav__link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="/MN.FathimaHasmathNifa_CV.pdf" className="mobile-nav__link mobile-nav__cta" onClick={() => setOpen(false)}>
            Resume ↗
          </a>
        </div>
      )}

      <style>{`
        .hdr {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 18px 0;
          border-bottom: 1px solid transparent;
          transition: background 0.25s, border-color 0.25s, padding 0.25s;
        }
        .hdr--solid {
          background: var(--bg);
          border-color: var(--border);
          backdrop-filter: blur(12px);
          padding: 13px 0;
        }
        .hdr__inner {
          display: flex; align-items: center;
        }
        .hdr__nav {
          display: flex; gap: 4px; align-items: center; flex: 1;
        }
        .hdr__link {
          font-size: 14.5px; font-weight: 500; color: var(--txt-2);
          padding: 7px 13px; border-radius: var(--radius-sm);
          transition: color 0.15s, background 0.15s;
        }
        .hdr__link:hover { color: var(--txt); background: var(--bg-muted); }
        .hdr__right {
          display: flex; align-items: center; gap: 10px; margin-left: auto;
        }
        .hdr__theme {
          width: 38px; height: 38px; border-radius: var(--radius-sm);
          display: flex; align-items: center; justify-content: center;
          color: var(--txt-2); background: var(--bg-muted);
          border: 1px solid var(--border);
          transition: color 0.15s, border-color 0.15s;
        }
        .hdr__theme:hover { color: var(--accent); border-color: var(--accent); }
        .hdr__cta {
          font-size: 14px; font-weight: 600; color: var(--txt);
          border: 1.5px solid var(--border-md);
          padding: 8px 20px; border-radius: var(--radius-sm);
          transition: border-color 0.15s, color 0.15s, background 0.15s;
        }
        .hdr__cta:hover { border-color: var(--accent); color: var(--accent); }
        .hdr__burger {
          display: none; color: var(--txt);
          padding: 7px; border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          align-items: center; justify-content: center;
        }
        .mobile-nav {
          position: fixed; top: 64px; left: 0; right: 0; z-index: 99;
          background: var(--bg-card); border-bottom: 1px solid var(--border);
          padding: 10px 16px 20px; display: flex; flex-direction: column;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
        }
        .mobile-nav__link {
          font-size: 16px; font-weight: 500; color: var(--txt-2);
          padding: 14px 12px; border-bottom: 1px solid var(--border);
          transition: color 0.15s;
        }
        .mobile-nav__link:last-child { border-bottom: none; }
        .mobile-nav__link:hover { color: var(--accent); }
        .mobile-nav__cta { color: var(--accent); font-weight: 600; }
        @media (max-width: 820px) {
          .hdr__nav { display: none; }
          .hdr__burger { display: flex; }
          .hdr__cta { display: none; }
        }
      `}</style>
    </>
  );
}
