"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#about",        label: "About" },
  { href: "#experience",   label: "Experience" },
  { href: "#projects",     label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#education",    label: "Education" },
  { href: "#contact",      label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      height: 60,
      background: "rgba(255,255,255,0.96)",
      backdropFilter: "blur(12px)",
      borderBottom: scrolled ? "1px solid var(--c-border)" : "1px solid transparent",
      boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
      transition: "all 0.2s",
    }}>
      {/* Centered container */}
      <div style={{
        maxWidth: 1160, margin: "0 auto", padding: "0 40px",
        height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="#" className="nav-brand">
          <span className="nav-mark font-serif">QW</span>
          <span>Qazi Waqas Khan</span>
        </a>

        {/* Desktop links */}
        <nav style={{ gap: 2 }} className="nav-desktop">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        <a href="https://scholar.google.com/citations?user=nU5lyoIAAAAJ&hl=en"
          target="_blank" rel="noopener noreferrer"
          style={{
            alignItems: "center", gap: 6,
            fontSize: 13, fontWeight: 500,
            color: "var(--c-accent)", background: "var(--c-accent-light)",
            padding: "6px 14px", borderRadius: 7, textDecoration: "none",
            transition: "all 0.15s", border: "1px solid #c8dced",
          }}
          className="nav-desktop"
        >
          🎓 Scholar
        </a>

        {/* Mobile burger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="nav-mobile" aria-label="Toggle menu"
          style={{ padding: 8, background: "none", border: "none", cursor: "pointer", color: "var(--c-muted)" }}>
          <div style={{ width: 20, height: 1.5, background: "currentColor", marginBottom: 5 }}></div>
          <div style={{ width: 20, height: 1.5, background: "currentColor", marginBottom: 5 }}></div>
          <div style={{ width: 20, height: 1.5, background: "currentColor" }}></div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "#fff", borderBottom: "1px solid var(--c-border)",
          padding: "8px 20px 16px",
        }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "10px 0", fontSize: 15, color: "var(--c-muted)", textDecoration: "none", borderBottom: "1px solid var(--c-divider)" }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
