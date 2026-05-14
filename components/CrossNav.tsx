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
      {/* No bar — just two floating buttons */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-5 pt-4 pointer-events-none">

        {/* Cross menu — solid dark green circle */}
        <div className="relative pointer-events-auto" ref={ref}>
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            className={open ? "menu-open" : ""}
            style={{
              width: "46px", height: "46px",
              borderRadius: "50%",
              background: "#1a3d2b",
              border: "2px solid rgba(255,255,255,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 12px rgba(0,0,0,0.35)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {/* Religious cross: vertical full height, horizontal in upper third */}
              <rect className="cross-v" x="9.5" y="1.5" width="3" height="19" rx="1.5" fill="white"/>
              <rect className="cross-h" x="2.5" y="6"   width="17" height="3"  rx="1.5" fill="white"/>
            </svg>
          </button>

          {/* Dropdown */}
          <div className={`nav-dropdown ${open ? "open" : ""}`}>
            <Link href="/" className="nav-link flex items-center gap-3"
              onClick={() => setOpen(false)}
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "11px", marginBottom: "4px" }}>
              <svg width="14" height="13" viewBox="0 0 14 13" fill="none" style={{ flexShrink: 0 }}>
                <path d="M7 1L1 6v6h3.5V9h5v3H13V6L7 1Z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
              </svg>
              {lang === "fr" ? "Accueil" : "Home"}
            </Link>

            <div className="px-4 py-2 flex items-center gap-2">
              <Link href="/lam" className={`site-pill ${site==="lam"?"active":"inactive"}`} onClick={() => setOpen(false)}>LAM — MRL</Link>
              <Link href="/sainte-adele" className={`site-pill ${site==="sainte-adele"?"active":"inactive"}`} onClick={() => setOpen(false)}>Ste-Adèle</Link>
            </div>

            <div className="mx-4 mb-1 flex rounded-full overflow-hidden" style={{ height: "2px" }}>
              {WAVES.map((c, i) => <div key={i} style={{ flex: 1, background: c }} />)}
            </div>

            <div className="nav-divider" />

            {items.map((item, i) => (
              <Link key={i} href={item.href}
                className={`nav-link ${item.label.startsWith("←") ? "back" : ""}`}
                onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Lang toggle — solid dark green pill */}
        <div className="pointer-events-auto" style={{
          display: "flex",
          background: "#1a3d2b",
          border: "2px solid rgba(255,255,255,0.25)",
          borderRadius: "999px",
          overflow: "hidden",
          boxShadow: "0 2px 12px rgba(0,0,0,0.35)",
        }}>
          {(["FR","EN"] as const).map((l) => (
            <button key={l}
              onClick={() => lang !== l.toLowerCase() && onToggleLang()}
              style={{
                padding: "8px 16px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.07em",
                fontFamily: "system-ui",
                border: "none",
                outline: "none",
                cursor: "pointer",
                background: lang === l.toLowerCase() ? "white" : "transparent",
                color: lang === l.toLowerCase() ? "#1a3d2b" : "rgba(255,255,255,0.8)",
                transition: "all 0.2s",
              }}>
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* No spacer — buttons float over content */}
    </>
  );
}
