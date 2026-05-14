"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface NavItem { label: string; href: string; }
interface Props {
  site: "lam" | "sainte-adele";
  lang: "fr" | "en";
  onToggleLang: () => void;
  items: NavItem[];
}

const WAVES = ["#C0392B","#E67E22","#F1C40F","#2980B9","#1ABC9C","#27AE60"];

export default function CrossNav({ site, lang, onToggleLang, items }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* Nav bar — transparent, no background band */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 pt-4"
        style={{ height: "56px", background: "transparent" }}>

        {/* Single cross button — menu + home */}
        <div className="relative" ref={ref}>
          <button
            className={`cross-btn ${open ? "menu-open" : ""}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu">
            {/* Real cross SVG — thick arms, clearly a cross not a plus */}
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect className="cross-v" x="9.5" y="1" width="3" height="20" rx="1.5" fill="white"/>
              <rect className="cross-h" x="1" y="9.5" width="20" height="3" rx="1.5" fill="white"/>
            </svg>
          </button>

          {/* Dropdown */}
          <div className={`nav-dropdown ${open ? "open" : ""}`}>

            {/* Home — first item */}
            <Link href="/" className="nav-link flex items-center gap-3"
              onClick={() => setOpen(false)}
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "12px", marginBottom: "4px" }}>
              <svg width="15" height="13" viewBox="0 0 15 13" fill="none" style={{ flexShrink: 0 }}>
                <path d="M7.5 1L1 6.5V12h4.5V9h4v3H14V6.5L7.5 1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none"/>
              </svg>
              {lang === "fr" ? "Accueil" : "Home"}
            </Link>

            {/* Site switcher */}
            <div className="px-4 py-2 flex items-center gap-2">
              <Link href="/lam"
                className={`site-pill ${site === "lam" ? "active" : "inactive"}`}
                onClick={() => setOpen(false)}>
                LAM — MRL
              </Link>
              <Link href="/sainte-adele"
                className={`site-pill ${site === "sainte-adele" ? "active" : "inactive"}`}
                onClick={() => setOpen(false)}>
                Ste-Adèle
              </Link>
            </div>

            {/* Color strip */}
            <div className="mx-4 mb-1 flex rounded-full overflow-hidden" style={{ height: "2px" }}>
              {WAVES.map((c, i) => <div key={i} style={{ flex: 1, background: c }} />)}
            </div>

            <div className="nav-divider" />

            {/* Page nav items */}
            {items.map((item, i) => (
              <Link key={i} href={item.href}
                className={`nav-link ${item.label.startsWith("←") ? "back" : ""}`}
                onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Lang toggle — right side only */}
        <div className="lang-toggle">
          <button className={`lang-btn ${lang === "fr" ? "active" : "inactive"}`}
            onClick={() => lang !== "fr" && onToggleLang()}>FR</button>
          <button className={`lang-btn ${lang === "en" ? "active" : "inactive"}`}
            onClick={() => lang !== "en" && onToggleLang()}>EN</button>
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: "56px" }} />
    </>
  );
}
