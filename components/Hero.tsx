"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, FileText, GraduationCap, Mail, MapPin, Sparkles } from "lucide-react";
import { profile, latestPaper as latest } from "@/lib/data";

const focusAreas = ["healthcare", "IoT networks", "smart buildings", "edge devices"];

const stats = [
  { v: profile.stats.publications, l: "Publications" },
  { v: profile.stats.citations,    l: "Citations" },
  { v: profile.stats.hIndex,       l: "h-index" },
  { v: profile.stats.i10Index,     l: "i10-index" },
];

const profiles = [
  { label: "Google Scholar", short: <GraduationCap size={17} strokeWidth={1.75} />, href: profile.links.scholar },
  { label: "LinkedIn",       short: "in",   href: profile.links.linkedin },
  { label: "ResearchGate",   short: "RG",   href: profile.links.researchgate },
  { label: "DBLP",           short: "dblp", href: profile.links.dblp },
];

const initials = profile.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
const orbitNodes = [0, 60, 120, 180, 240, 300];

/* Staggered CSS entrance: runs without JS, so content is never stuck hidden */
const delay = (i: number) => ({ "--d": i } as CSSProperties);

/* "4,200+" -> counts up to 4,200 and keeps the "+" */
function CountUp({ value }: { value: string }) {
  const target = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9,]/g, "");
  const [n, setN] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - start) / 1400, 1);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [target]);

  return <span ref={ref}>{n.toLocaleString("en-GB")}{suffix}</span>;
}

export default function Hero() {
  const [focus, setFocus] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setFocus((f) => (f + 1) % focusAreas.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-wrap">
        <div className="hero-grid">

          {/* LEFT: identity + pitch */}
          <div>
            <div className="hero-eyebrow reveal" style={delay(0)}>
              <span className="badge-dot"></span>
              {profile.title} · Open to collaboration
            </div>

            <h1 className="hero-name font-serif reveal" style={delay(1)}>
              Dr. Qazi Waqas Khan
            </h1>

            <p className="hero-tagline reveal" style={delay(2)}>
              Building private, efficient AI for{" "}
              <span className="hero-rotator">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={focusAreas[focus]}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                  >
                    {focusAreas[focus]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </p>

            <p className="hero-lede reveal" style={delay(3)}>
              Postdoctoral researcher at <strong>{profile.institution}</strong> specialising in decentralised
              federated learning and multimodal fusion: training models across thousands of
              devices without ever moving sensitive data.
            </p>

            <div className="hero-ctas reveal" style={delay(4)}>
              <a href="#publications" className="btn-primary">
                View publications <ArrowRight size={16} strokeWidth={2} />
              </a>
              {profile.cv ? (
                <a href={profile.cv} className="btn-secondary" download>
                  <FileText size={16} strokeWidth={1.75} /> Download CV
                </a>
              ) : (
                <a href={`mailto:${profile.email}`} className="btn-secondary">
                  <Mail size={16} strokeWidth={1.75} /> Get in touch
                </a>
              )}
              <div className="hero-profiles">
                {profiles.map((p) => (
                  <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer"
                     className="hero-profile" aria-label={p.label} title={p.label}>
                    {p.short}
                  </a>
                ))}
              </div>
            </div>

            <dl className="hero-stats reveal" style={delay(5)}>
              {stats.map((s) => (
                <div key={s.l}>
                  <dd className="font-serif"><CountUp value={s.v} /></dd>
                  <dt>{s.l}</dt>
                </div>
              ))}
            </dl>
          </div>

          {/* RIGHT: portrait inside a federated network */}
          <div className="hero-visual reveal-zoom">
            <div className="orbit orbit-outer" aria-hidden="true">
              {orbitNodes.map((deg) => (
                <span key={deg} className="orbit-node" style={{ transform: `rotate(${deg}deg) translateX(var(--orbit-r)) rotate(-${deg}deg)` }} />
              ))}
            </div>
            <div className="orbit orbit-inner" aria-hidden="true" />

            <div className="hero-portrait">
              {profile.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
              ) : (
                <span className="hero-initials font-serif">{initials}</span>
              )}
            </div>

            <a href={profile.links.scholar} target="_blank" rel="noopener noreferrer" className="float-card float-cite">
              <span className="float-icon"><GraduationCap size={16} strokeWidth={1.75} /></span>
              <span>
                <span className="float-big">{profile.stats.citations}</span>
                <span className="float-sub">citations on Scholar</span>
              </span>
            </a>

            <a href={latest.url} target="_blank" rel="noopener noreferrer" className="float-card float-paper">
              <span className="float-kicker"><Sparkles size={12} strokeWidth={2} /> Latest paper · {latest.year}</span>
              <span className="float-title">{latest.title}</span>
              <span className="float-sub">{latest.venue} <ArrowUpRight size={12} strokeWidth={2} /></span>
            </a>

            <div className="float-card float-loc">
              <MapPin size={14} strokeWidth={1.75} /> {profile.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
