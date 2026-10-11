import { ArrowRight, MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" number="02">
      <ol className="xp-list">
        {experience.map((item, i) => (
          <li key={i} className={`xp-item${item.current ? " is-current" : ""}`}>
            {/* Date column */}
            <div className="xp-when">
              <span className="xp-period">{item.period}</span>
              <span className="xp-loc"><MapPin size={12} strokeWidth={1.75} />{item.location}</span>
            </div>

            {/* Timeline rail */}
            <div className="xp-rail" aria-hidden="true">
              <span className="xp-dot" />
            </div>

            {/* Card */}
            <div className="xp-card">
              <div className="xp-head">
                <span className="xp-mark">{item.short}</span>
                <div className="xp-title">
                  <h3>{item.role}</h3>
                  <p className="xp-org">{item.org}</p>
                  <p className="xp-dept">{item.dept}</p>
                </div>
                {item.current && <span className="xp-badge">Current</span>}
              </div>

              {/* Mobile-only date line */}
              <p className="xp-when-inline">{item.period} · {item.location}</p>

              <ul className="xp-highlights">
                {item.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>

              <div className="xp-foot">
                <div className="xp-tags">
                  {item.tags.map((t) => <span key={t} className="xp-tag">{t}</span>)}
                </div>
                {item.papers && (
                  <a href="#publications" className="xp-papers">
                    <strong>{item.papers.count}</strong> {item.papers.label}
                    <ArrowRight size={14} strokeWidth={2} />
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
