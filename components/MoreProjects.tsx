"use client";
import { useState } from "react";
import { BadgeCheck } from "lucide-react";
import { projects } from "@/lib/data";
import { areaMeta, areaOrder } from "./areaMeta";

export default function MoreProjects() {
  const [area, setArea] = useState("all");
  const areas = areaOrder.filter((a) => projects.some((p) => p.area === a));
  const visible = area === "all" ? projects : projects.filter((p) => p.area === area);

  return (
    <>
      <div className="chip-row" role="group" aria-label="Filter projects by area">
        <button className={`chip${area === "all" ? " is-active" : ""}`} onClick={() => setArea("all")}>
          All <span>{projects.length}</span>
        </button>
        {areas.map((a) => (
          <button key={a} className={`chip${area === a ? " is-active" : ""}`} onClick={() => setArea(a)}>
            {areaMeta[a].label} <span>{projects.filter((p) => p.area === a).length}</span>
          </button>
        ))}
      </div>

      <div className="mp-grid">
        {visible.map((p) => {
          const { Icon, tone, label } = areaMeta[p.area];
          return (
            <article key={p.title} className="mp-card">
              <div className="mp-top">
                <span className={`tone-icon tone-${tone}`} title={label}><Icon size={18} strokeWidth={1.75} /></span>
                <span className="mp-period">{p.period}</span>
              </div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <div className="mp-foot">
                {p.venue ? (
                  <span className="mp-venue"><BadgeCheck size={13} strokeWidth={2} /> {p.venue}</span>
                ) : (
                  <span className="mp-tags">{p.tags.join(" · ")}</span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
