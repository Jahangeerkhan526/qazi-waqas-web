import { BrainCircuit, CodeXml, Network, type LucideIcon } from "lucide-react";
import { publications, skills } from "@/lib/data";
import Section from "./Section";

const groupStyle: Record<string, { Icon: LucideIcon; tone: string }> = {
  "Core Research Areas": { Icon: Network,      tone: "blue" },
  "Machine Learning":    { Icon: BrainCircuit, tone: "purple" },
  "Tools & Frameworks":  { Icon: CodeXml,      tone: "green" },
};

// Venue counts come straight from the publications list
const venues = Object.entries(
  publications.reduce<Record<string, number>>((acc, p) => {
    acc[p.venue] = (acc[p.venue] || 0) + 1;
    return acc;
  }, {})
).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

export default function Skills() {
  const groups = skills.filter((g) => groupStyle[g.category]);

  return (
    <Section id="skills" title="Skills & Expertise" number="06">
      <div className="sk-grid">
        {groups.map((g) => {
          const { Icon, tone } = groupStyle[g.category];
          return (
            <div key={g.category} className="sk-card">
              <div className="sk-head">
                <span className={`tone-icon tone-${tone}`}><Icon size={19} strokeWidth={1.75} /></span>
                <h3>{g.category.replace(" & ", " and ")}</h3>
              </div>
              <div className="sk-tags">
                {g.items.map((item) => <span key={item} className={`sk-tag sk-tag-${tone}`}>{item}</span>)}
              </div>
            </div>
          );
        })}
      </div>

      <div className="sk-venues">
        <div className="sk-venues-head">
          <h3 className="font-serif">Published in</h3>
          <span>{venues.length} journals and conferences</span>
        </div>
        <ul>
          {venues.filter(([, n]) => n > 1).map(([name, n]) => (
            <li key={name}>
              <span className="sk-venue-n font-serif">{n}</span>
              <span className="sk-venue-name">{name}<small>papers</small></span>
            </li>
          ))}
        </ul>
        <div className="sk-venue-more">
          <span className="sk-venue-more-label">Also published in</span>
          {venues.filter(([, n]) => n === 1).map(([name]) => <span key={name} className="sk-venue-chip">{name}</span>)}
        </div>
      </div>
    </Section>
  );
}
