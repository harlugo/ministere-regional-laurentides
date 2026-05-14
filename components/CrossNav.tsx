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
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Detect scroll to switch nav background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Colors adapt to scroll position
  const navBg = scrolled
    ? "rgba(26, 61, 43, 0.97)"
    : "rgba(13, 36, 22, 0.55)";
  const navBorder = scrolled
    ? "1px solid rgba(255,255,255,0.12)"
    : "1px solid rgba(255,255,255,0.08)";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5"
        style={{
          height: "54px",
          background: navBg,
          backdropFilter: "blur(16px)",
          borderBottom: navBorder,
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}>

        {/* Cross menu button */}
        <div className="relative" ref={ref}>
          <button
            className={`cross-btn ${open ? "menu-open" : ""}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            style={{ width: "44px", height: "44px" }}>
            {/*
              Real religious cross proportions:
              - Vertical bar: tall (full height)
              - Horizontal bar: shorter, placed in upper third
              - Arms clearly longer than wide
            */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              style={{ transition: "transform 0.3s ease" }}
              className={open ? "" : ""}>
              {/* Vertical bar — full height */}
              <rect className="cross-v" x="10.5" y="1" width="3" height="22" rx="1.5" fill="white"/>
              {/* Horizontal bar — upper third, shorter than vertical */}
              <rect className="cross-h" x="3" y="7" width="18" height="3" rx="1.5" fill="white"/>
            </svg>
          </button>

          {/* Dropdown panel */}
          <div className={`nav-dropdown ${open ? "open" : ""}`}>

            {/* Home */}
            <Link href="/" className="nav-link flex items-center gap-3"
              onClick={() => setOpen(false)}
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "11px", marginBottom: "4px" }}>
              <svg width="14" height="13" viewBox="0 0 14 13" fill="none" style={{ flexShrink: 0 }}>
                <path d="M7 1L1 6v6h3.5V9h5v3H13V6L7 1Z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
              </svg>
              {lang === "fr" ? "Accueil" : "Home"}
            </Link>

            {/* Site switcher */}
            <div className="px-4 py-2 flex items-center gap-2">
              <Link href="/lam" className={`site-pill ${site === "lam" ? "active" : "inactive"}`} onClick={() => setOpen(false)}>LAM — MRL</Link>
              <Link href="/sainte-adele" className={`site-pill ${site === "sainte-adele" ? "active" : "inactive"}`} onClick={() => setOpen(false)}>Ste-Adèle</Link>
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

        {/* Lang toggle */}
        <div className="lang-toggle">
          <button className={`lang-btn ${lang === "fr" ? "active" : "inactive"}`}
            onClick={() => lang !== "fr" && onToggleLang()}>FR</button>
          <button className={`lang-btn ${lang === "en" ? "active" : "inactive"}`}
            onClick={() => lang !== "en" && onToggleLang()}>EN</button>
        </div>
      </nav>
      <div style={{ height: "54px" }} />
    </>
  );
}
