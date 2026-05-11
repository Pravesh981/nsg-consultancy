"use client";

import { useState, useRef, useEffect } from "react";

// ─── Language Data ────────────────────────────────────────────────────────────
const LANGUAGES = [
  // Americas
  { code: "en-US", label: "English (US)",     flag: "🇺🇸", region: "Americas" },
  { code: "es-MX", label: "Español (México)", flag: "🇲🇽", region: "Americas" },
  { code: "pt-BR", label: "Português (BR)",   flag: "🇧🇷", region: "Americas" },
  { code: "fr-CA", label: "Français (CA)",    flag: "🇨🇦", region: "Americas" },

  // Europe
  { code: "en-GB", label: "English (UK)",     flag: "🇬🇧", region: "Europe" },
  { code: "de",    label: "Deutsch",          flag: "🇩🇪", region: "Europe" },
  { code: "fr",    label: "Français",         flag: "🇫🇷", region: "Europe" },
  { code: "es",    label: "Español",          flag: "🇪🇸", region: "Europe" },
  { code: "it",    label: "Italiano",         flag: "🇮🇹", region: "Europe" },
  { code: "nl",    label: "Nederlands",       flag: "🇳🇱", region: "Europe" },
  { code: "pl",    label: "Polski",           flag: "🇵🇱", region: "Europe" },
  { code: "sv",    label: "Svenska",          flag: "🇸🇪", region: "Europe" },
  { code: "da",    label: "Dansk",            flag: "🇩🇰", region: "Europe" },
  { code: "fi",    label: "Suomi",            flag: "🇫🇮", region: "Europe" },
  { code: "no",    label: "Norsk",            flag: "🇳🇴", region: "Europe" },
  { code: "pt",    label: "Português (PT)",   flag: "🇵🇹", region: "Europe" },
];

const REGIONS = ["Americas", "Europe"];

// ─── Globe SVG Icon ───────────────────────────────────────────────────────────
function GlobeIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function LanguageSelector() {
  const [open, setOpen]             = useState(false);
  const [selected, setSelected]     = useState(LANGUAGES[0]);
  const [activeRegion, setActiveRegion] = useState("Americas");
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

function handleSelect(lang) {
  setSelected(lang);
  setOpen(false);
  localStorage.setItem("preferred-locale", lang.code);
  console.log("Locale saved:", lang.code);
}

useEffect(() => {
  const saved = localStorage.getItem("preferred-locale");
  if (saved) {
    const match = LANGUAGES.find((l) => l.code === saved);
    if (match) setSelected(match);
  }
}, []);

  const filtered = LANGUAGES.filter((l) => l.region === activeRegion);

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>

      {/* ── Trigger Button ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Select language"
        aria-expanded={open}
        style={{
          display:       "flex",
          alignItems:    "center",
          gap:           "6px",
          padding:       "7px 12px",
          background:    open ? "rgba(212,175,55,0.15)" : "transparent",
          border:        "1.5px solid rgba(212,175,55,0.5)",
          borderRadius:  "8px",
          color:         "#fff",
          cursor:        "pointer",
          fontSize:      "13px",
          fontWeight:    500,
          letterSpacing: "0.3px",
          transition:    "background 0.2s, border-color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background    = "rgba(212,175,55,0.15)";
          e.currentTarget.style.borderColor   = "#d4af37";
        }}
        onMouseLeave={(e) => {
          if (!open) {
            e.currentTarget.style.background  = "transparent";
            e.currentTarget.style.borderColor = "rgba(212,175,55,0.5)";
          }
        }}
      >
        <GlobeIcon size={18} />
        {/* <span>{selected.flag}</span>
        <span>{selected.code.toUpperCase()}</span> */}
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
        >
          <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ── Dropdown Panel ── */}
      {open && (
        <div
          style={{
            position:     "absolute",
            top:          "calc(100% + 8px)",
            right:        0,
            width:        "260px",
            background:   "linear-gradient(145deg, #0d1b2a, #1a2a3a)",
            border:       "1px solid rgba(212,175,55,0.3)",
            borderRadius: "12px",
            boxShadow:    "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.1)",
            overflow:     "hidden",
            zIndex:       9999,
            animation:    "langDropIn 0.18s ease",
          }}
        >
          {/* Header */}
          <div style={{
            padding:       "12px 16px 8px",
            borderBottom:  "1px solid rgba(255,255,255,0.07)",
            display:       "flex",
            alignItems:    "center",
            gap:           "8px",
            color:         "#d4af37",
            fontSize:      "11px",
            fontWeight:    600,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}>
            <GlobeIcon size={14} />
            Select Language
          </div>

          {/* Region Tabs */}
          <div style={{ display: "flex", padding: "8px 8px 0", gap: "4px" }}>
            {REGIONS.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                style={{
                  flex:          1,
                  padding:       "5px 0",
                  fontSize:      "11px",
                  fontWeight:    600,
                  letterSpacing: "0.5px",
                  border:        "none",
                  borderRadius:  "6px",
                  cursor:        "pointer",
                  transition:    "all 0.15s",
                  background:    activeRegion === region ? "#d4af37" : "rgba(255,255,255,0.06)",
                  color:         activeRegion === region ? "#0d1b2a" : "rgba(255,255,255,0.55)",
                }}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Language List */}
          <ul style={{ listStyle: "none", margin: "8px 0 0", padding: "0 6px 8px", maxHeight: "260px", overflowY: "auto" }}>
            {filtered.map((lang) => {
              const isActive = lang.code === selected.code;
              return (
                <li key={lang.code}>
                  <button
                    onClick={() => handleSelect(lang)}
                    style={{
                      display:       "flex",
                      alignItems:    "center",
                      gap:           "10px",
                      width:         "100%",
                      padding:       "8px 10px",
                      border:        "none",
                      borderRadius:  "7px",
                      cursor:        "pointer",
                      background:    isActive ? "rgba(212,175,55,0.15)" : "transparent",
                      color:         isActive ? "#d4af37" : "rgba(255,255,255,0.8)",
                      fontSize:      "13px",
                      textAlign:     "left",
                      transition:    "background 0.15s, color 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <span style={{ fontSize: "18px", lineHeight: 1 }}>{lang.flag}</span>
                    <span style={{ flex: 1 }}>{lang.label}</span>
                    {isActive && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l4 4 6-6" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Keyframe for dropdown animation */}
      <style>{`
        @keyframes langDropIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
      `}</style>
    </div>
  );
}