"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface NavItem { label: string; href: string; }
interface CrossNavProps {
  site: "lam" | "sainte-adele";
  lang: "fr" | "en";
  onToggleLang: () => void;
  items: NavItem[];
}

const WAVE_COLORS = ["#C0392B","#E67E22","#F1C40F","#2980B9","#1ABC9C","#27AE60"];

export default function CrossNav({ site, lang, onToggleLang, items }: CrossNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Fixed top nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3"
        style={{ background: "rgba(15,42,26,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        
        {/* Cross menu button */}
        <button
          className={`cross-menu-btn ${open ? "open" : ""}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span className="cross-bar-v" />
          <span className="cross-bar-h" />
        </button>

        {/* Site name */}
        <span className="text-white/80 text-sm font-semibold tracking-wide" style={{ fontFamily: "system-ui" }}>
          {site === "lam"
            ? (lang === "fr" ? "Ministère régional des Laurentides" : "Laurentian Area Ministry")
            : "Église Unie de Sainte-Adèle"}
        </span>

        {/* Lang toggle */}
        <div className="lang-toggle">
          <button className={`lang-btn ${lang === "fr" ? "active" : "inactive"}`} onClick={() => lang !== "fr" && onToggleLang()}>FR</button>
          <button className={`lang-btn ${lang === "en" ? "active" : "inactive"}`} onClick={() => lang !== "en" && onToggleLang()}>EN</button>
        </div>
      </nav>

      {/* Fullscreen overlay menu */}
      <div className={`menu-overlay ${open ? "open" : ""}`}>
        {/* Top row in overlay */}
        <div className="flex items-center justify-between px-6 pt-4 pb-2">
          <button className={`cross-menu-btn open`} onClick={() => setOpen(false)} aria-label="Fermer">
            <span className="cross-bar-v" />
            <span className="cross-bar-h" />
          </button>
          {/* Site switcher */}
          <div className="site-switcher-pill">
            <Link href="/lam" className={`site-pill ${site === "lam" ? "active" : "inactive"}`} onClick={() => setOpen(false)}>
              LAM — MRL
            </Link>
            <Link href="/sainte-adele" className={`site-pill ${site === "sainte-adele" ? "active" : "inactive"}`} onClick={() => setOpen(false)}>
              Sainte-Adèle
            </Link>
          </div>
        </div>

        {/* Color strip */}
        <div className="color-strip mx-6 rounded-full overflow-hidden mb-6 mt-3" style={{ height: "3px" }}>
          {WAVE_COLORS.map((c, i) => <div key={i} style={{ background: c }} />)}
        </div>

        {/* Nav items */}
        <div className="px-6 flex-1 overflow-y-auto">
          {items.map((item, i) => (
            <Link key={i} href={item.href} className="menu-item" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-5 text-white/30 text-xs" style={{ fontFamily: "system-ui" }}>
          Église Unie du Canada · United Church of Canada
        </div>
      </div>

      {/* Spacer for fixed nav */}
      <div style={{ height: "58px" }} />
    </>
  );
}
