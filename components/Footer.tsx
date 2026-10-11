"use client";
import { useState } from "react";
import { ArrowUpRight, Check, Copy, Handshake, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const collabTypes = ["Research collaboration", "Joint grant proposals", "Peer review", "Industry projects"];

const links = [
  { label: "Google Scholar", href: profile.links.scholar },
  { label: "LinkedIn",       href: profile.links.linkedin },
  { label: "ResearchGate",   href: profile.links.researchgate },
  { label: "DBLP",           href: profile.links.dblp },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <footer id="contact" className="ft">
      <div className="ft-wrap">
        {/* Collaborate band */}
        <div className="cta">
          <div className="cta-glow" aria-hidden="true" />
          <div className="cta-copy">
            <span className="cta-kicker"><Handshake size={15} strokeWidth={2} /> Open to collaboration</span>
            <h2 className="font-serif">Let&apos;s build private, efficient AI together.</h2>
            <p>
              Working on federated learning, on-device AI, healthcare or smart buildings?
              I&apos;m always happy to talk about new ideas, data and partnerships.
            </p>
            <div className="cta-chips">
              {collabTypes.map((c) => <span key={c}>{c}</span>)}
            </div>
          </div>

          <div className="cta-actions">
            <a href={`mailto:${profile.email}`} className="cta-btn">
              <Mail size={17} strokeWidth={2} /> Email {profile.name.split(" ")[0]}
            </a>
            <button type="button" className="cta-copy-btn" onClick={copyEmail} aria-live="polite">
              {copied ? <Check size={15} strokeWidth={2} /> : <Copy size={15} strokeWidth={2} />}
              <span>{copied ? "Copied" : profile.email}</span>
            </button>
            <div className="cta-links">
              {links.slice(0, 2).map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label} <ArrowUpRight size={13} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="ft-bar">
          <div className="ft-id">
            <span className="nav-mark font-serif">QW</span>
            <div>
              <div className="ft-name font-serif">Dr. {profile.name}</div>
              <div className="ft-role">{profile.position} · {profile.institution}</div>
            </div>
          </div>
          <nav className="ft-links" aria-label="Academic profiles">
            {links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="footer-link">{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="ft-copy">© {new Date().getFullYear()} {profile.name} · {profile.location}</div>
      </div>
    </footer>
  );
}
