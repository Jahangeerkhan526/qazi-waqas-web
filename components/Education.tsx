import { Award, GraduationCap, Landmark, MapPin, Medal } from "lucide-react";
import { education, awards } from "@/lib/data";
import Section from "./Section";

const medalIcon = { gold: Medal, silver: Medal, grant: Landmark } as const;

export default function Education() {
  const medals = awards.filter((a) => a.kind !== "grant");
  const grants = awards.filter((a) => a.kind === "grant");

  return (
    <Section id="education" title="Education & Awards" number="05">

      {/* Degrees */}
      <div className="edu-row">
        {education.map((edu, i) => (
          <div key={i} className={`edu-card${edu.highlight ? " accent-card" : ""}`}>
            <div className="edu-top">
              <span className="edu-icon"><GraduationCap size={18} strokeWidth={1.75} /></span>
              <span className="edu-period">{edu.period}</span>
            </div>
            <div className="font-serif edu-degree">{edu.degree}</div>
            <div className="edu-field">{edu.field}</div>
            <div className="edu-school">{edu.school}</div>
            <div className="edu-loc"><MapPin size={12} strokeWidth={1.75} /> {edu.location}</div>
            {edu.note && <div className="edu-note">{edu.note}</div>}
          </div>
        ))}
      </div>

      {/* Awards and honours */}
      <div className="aw-band">
        <div className="aw-head">
          <span className="aw-head-icon"><Award size={20} strokeWidth={1.75} /></span>
          <div>
            <h3 className="font-serif">Awards and honours</h3>
            <p>Gold medals for academic excellence at COMSATS, then selected for competitive Korean research funding.</p>
          </div>
        </div>

        <div className="aw-medals">
          {medals.map((a, i) => {
            const Icon = medalIcon[a.kind as keyof typeof medalIcon];
            return (
              <div key={i} className={`aw-card is-${a.kind}`}>
                <div className="aw-medal" aria-hidden="true">
                  <span className="aw-ribbon" />
                  <span className="aw-disc"><Icon size={26} strokeWidth={1.75} /></span>
                </div>
                <span className="aw-year font-serif">{a.year}</span>
                <h4>{a.title}</h4>
                <p className="aw-detail">{a.detail}</p>
                <p className="aw-org">{a.org}</p>
              </div>
            );
          })}
        </div>

        <div className="aw-grants">
          {grants.map((a, i) => (
            <div key={i} className="aw-grant">
              <span className="aw-grant-icon"><Landmark size={20} strokeWidth={1.75} /></span>
              <div>
                <h4>{a.title}</h4>
                <p className="aw-detail">{a.detail}</p>
                <p className="aw-org">{a.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
