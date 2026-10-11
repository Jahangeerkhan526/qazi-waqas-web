import { ArrowRight, Building2, Layers, Network, ShieldCheck, type LucideIcon } from "lucide-react";
import { profile, publications, researchAreas } from "@/lib/data";
import Section from "./Section";

const areaIcons: Record<string, LucideIcon> = {
  fl: Network,
  energy: Building2,
  security: ShieldCheck,
  fusion: Layers,
};

export default function About() {
  return (
    <Section id="about" title="About" number="01">
      <div className="about-grid">
        {/* Story */}
        <div>
          <p className="about-mission font-serif">{profile.mission}</p>
          <p className="about-bio">{profile.bio}</p>
          <p className="about-bio">{profile.bio2}</p>
        </div>

        {/* At a glance */}
        <aside className="about-glance" aria-label="At a glance">
          <div className="about-glance-title">At a glance</div>
          <dl>
            {profile.glance.map((g) => (
              <div key={g.label}>
                <dt>{g.label}</dt>
                <dd>{g.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      {/* Research areas */}
      <div className="about-areas-head">
        <h3 className="font-serif">Research areas</h3>
        <span>From {profile.stats.publications} papers on Google Scholar</span>
      </div>
      <div className="about-areas">
        {researchAreas.map((a) => {
          const Icon = areaIcons[a.key];
          return (
            <a key={a.key} href="#publications" className="area-card">
              <span className="area-icon"><Icon size={20} strokeWidth={1.75} /></span>
              <span className="area-title">{a.title}</span>
              <span className="area-summary">{a.summary}</span>
              <span className="area-top">
                <span className="area-top-label">Key paper</span>
                <span className="area-top-title">{a.topPaper}</span>
                <span className="area-top-venue">{a.topVenue}</span>
              </span>
              <span className="area-count">
                {publications.filter((p) => p.area === a.key).length} papers <ArrowRight size={14} strokeWidth={2} />
              </span>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
