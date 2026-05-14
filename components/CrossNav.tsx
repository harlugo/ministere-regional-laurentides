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
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2.5"
        style={{
          background: "rgba(13,36,22,0.88)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          height: "50px"
        }}>

        {/* Left — home logo + cross menu */}
        <div className="flex items-center gap-2.5">

          {/* Home logo */}
          <Link href="/" title={lang === "fr" ? "Accueil" : "Home"}
            className="w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 transition-all hover:scale-110"
            style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.20)" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="6" y="1" width="2" height="12" rx="1" fill="white"/>
              <rect x="1" y="4.5" width="12" height="2" rx="1" fill="white"/>
            </svg>
          </Link>

          {/* Cross menu */}
          <div className="relative" ref={ref}>
            <button
              className={`cross-btn ${open ? "menu-open" : ""}`}
              onClick={() => setOpen(o => !o)}
              aria-label="Menu">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect className="cross-v" x="9" y="2" width="2" height="16" rx="1" fill="white"/>
                <rect className="cross-h" x="2" y="9" width="16" height="2" rx="1" fill="white"/>
              </svg>
            </button>

            {/* Dropdown */}
            <div className={`nav-dropdown ${open ? "open" : ""}`}>

              {/* Home link */}
              <Link href="/" className="nav-link back flex items-center gap-2"
                onClick={() => setOpen(false)}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", marginBottom: "4px", paddingBottom: "12px" }}>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                  <rect x="6" y="1" width="2" height="12" rx="1" fill="currentColor"/>
                  <rect x="1" y="4.5" width="12" height="2" rx="1" fill="currentColor"/>
                </svg>
                {lang === "fr" ? "Accueil — Laurentides" : "Home — Laurentians"}
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

              {/* Nav items */}
              {items.map((item, i) => (
                <Link key={i} href={item.href}
                  className={`nav-link ${item.label.startsWith("←") ? "back" : ""}`}
                  onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right — lang toggle only */}
        <div className="lang-toggle">
          <button className={`lang-btn ${lang === "fr" ? "active" : "inactive"}`}
            onClick={() => lang !== "fr" && onToggleLang()}>FR</button>
          <button className={`lang-btn ${lang === "en" ? "active" : "inactive"}`}
            onClick={() => lang !== "en" && onToggleLang()}>EN</button>
        </div>
      </nav>

      <div style={{ height: "50px" }} />
    </>
  );
}
