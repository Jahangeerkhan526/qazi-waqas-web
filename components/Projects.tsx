import { ArrowUpRight, Landmark, Sparkles } from "lucide-react";
import { flagshipProjects, fundedProjects, latestWork, projects } from "@/lib/data";
import Section from "./Section";
import MoreProjects from "./MoreProjects";

export default function Projects() {
  return (
    <Section id="projects" title="Research Projects" number="03">

      {/* Latest work */}
      <div className="pj-head">
        <h3 className="font-serif">Latest work</h3>
        <span>Published in 2026</span>
      </div>
      <div className="pj-latest">
        {latestWork.map((w) => (
          <a key={w.name} href={w.url} target="_blank" rel="noopener noreferrer" className="pj-latest-card" title={w.title}>
            <span className="pj-latest-kicker"><Sparkles size={12} strokeWidth={2} /> {w.venue}</span>
            <span className="pj-latest-name font-serif">{w.name}</span>
            <span className="pj-latest-desc">{w.desc}</span>
            <span className="pj-latest-link">Read paper <ArrowUpRight size={13} strokeWidth={2} /></span>
          </a>
        ))}
      </div>

      {/* Funded research */}
      <div className="pj-head">
        <h3 className="font-serif">Funded research</h3>
      </div>
      <div className="pj-funded">
        {fundedProjects.map((f) => (
          <div key={f.title} className="pj-funded-card">
            <span className="pj-funded-icon"><Landmark size={20} strokeWidth={1.75} /></span>
            <div>
              <span className="pj-funded-funder">{f.funder}</span>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Flagship projects */}
      <div className="pj-head">
        <h3 className="font-serif">Flagship projects</h3>
        <span>By citations on Google Scholar</span>
      </div>
      <div className="pj-flagship">
        {flagshipProjects.map((p) => (
          <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer" className="pj-flag-card">
            <span className="pj-metric">
              <span className="pj-metric-num font-serif">{p.metric}</span>
              <span className="pj-metric-label">{p.metricLabel}</span>
            </span>
            <span className="pj-flag-title">{p.title}</span>
            <span className="pj-flag-desc">{p.desc}</span>
            <span className="pj-flag-venue">{p.venue}</span>
            <span className="pj-tags">
              {p.tags.map((t) => <span key={t} className="xp-tag">{t}</span>)}
            </span>
          </a>
        ))}
      </div>

      {/* More projects */}
      <div className="pj-head">
        <h3 className="font-serif">More projects</h3>
        <span>{projects.length} completed</span>
      </div>
      <MoreProjects />
    </Section>
  );
}
