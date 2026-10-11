"use client";
import { Fragment, useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { publications, profile } from "@/lib/data";
import Section from "./Section";
import { areaMeta, areaOrder } from "./areaMeta";

const PAGE = 10;
const isMe = (name: string) => /qazi\s+waqas|waqas\s+khan/i.test(name);
const maxCites = Math.max(...profile.citationsByYear.map((c) => c.n));

export default function Publications() {
  const [area, setArea] = useState("all");
  const [firstOnly, setFirstOnly] = useState(false);
  const [sort, setSort] = useState<"newest" | "cited">("newest");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = publications.filter((p) =>
      (area === "all" || p.area === area) &&
      (!firstOnly || p.firstAuthor) &&
      (!q || p.title.toLowerCase().includes(q) || p.venue.toLowerCase().includes(q) ||
        p.authors.some((a) => a.toLowerCase().includes(q)))
    );
    return [...list].sort((a, b) =>
      sort === "cited" ? b.cites - a.cites || b.year - a.year : b.year - a.year || b.cites - a.cites
    );
  }, [area, firstOnly, sort, query]);

  const visible = showAll ? filtered : filtered.slice(0, PAGE);
  const reset = () => setShowAll(false);

  return (
    <Section id="publications" title="Publications" number="04">

      {/* Scholar summary */}
      <div className="pub-panel">
        <div className="pub-stats">
          {[
            { v: profile.stats.publications, l: "Papers" },
            { v: profile.stats.citations,    l: "Citations" },
            { v: profile.stats.hIndex,       l: "h-index" },
            { v: profile.stats.i10Index,     l: "i10-index" },
          ].map((s) => (
            <div key={s.l}>
              <span className="pub-stat-v font-serif">{s.v}</span>
              <span className="pub-stat-l">{s.l}</span>
            </div>
          ))}
        </div>
        <div className="pub-chart">
          <div className="pub-chart-head">
            <span>Citations per year</span>
            <a href={profile.links.scholar} target="_blank" rel="noopener noreferrer">
              Google Scholar <ArrowUpRight size={13} strokeWidth={2} />
            </a>
          </div>
          <div className="pub-bars" role="img"
               aria-label={`Citations per year: ${profile.citationsByYear.map((c) => `${c.year} ${c.n}`).join(", ")}`}>
            {profile.citationsByYear.map((c, i) => (
              <div key={c.year} className="pub-bar-col">
                <span className="pub-bar-n">{c.n}</span>
                <span className="pub-bar-track">
                  <span className="pub-bar" style={{ height: `${(c.n / maxCites) * 100}%`, animationDelay: `${i * 90}ms` }} />
                </span>
                <span className="pub-bar-y">{c.year}{i === profile.citationsByYear.length - 1 ? "*" : ""}</span>
              </div>
            ))}
          </div>
          <span className="pub-chart-note">* {profile.citationsByYear[profile.citationsByYear.length - 1].year} so far</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="pub-toolbar">
        <label className="pub-search">
          <Search size={16} strokeWidth={1.75} />
          <input type="search" placeholder="Search titles, venues or co-authors"
                 value={query} onChange={(e) => { setQuery(e.target.value); reset(); }} />
        </label>
        <div className="pub-toggles">
          <button className={`chip${firstOnly ? " is-active" : ""}`} aria-pressed={firstOnly}
                  onClick={() => { setFirstOnly(!firstOnly); reset(); }}>
            First author <span>{publications.filter((p) => p.firstAuthor).length}</span>
          </button>
          <div className="pub-sort" role="group" aria-label="Sort">
            <button className={sort === "newest" ? "is-active" : ""} onClick={() => setSort("newest")}>Newest</button>
            <button className={sort === "cited" ? "is-active" : ""} onClick={() => setSort("cited")}>Most cited</button>
          </div>
        </div>
      </div>
      <div className="chip-row" role="group" aria-label="Filter by research area">
        <button className={`chip${area === "all" ? " is-active" : ""}`} onClick={() => { setArea("all"); reset(); }}>
          All <span>{publications.length}</span>
        </button>
        {areaOrder.map((a) => (
          <button key={a} className={`chip${area === a ? " is-active" : ""}`} onClick={() => { setArea(a); reset(); }}>
            {areaMeta[a].label} <span>{publications.filter((p) => p.area === a).length}</span>
          </button>
        ))}
      </div>

      {/* List */}
      {visible.length === 0 ? (
        <p className="pub-empty">No papers match. Try a different search or filter.</p>
      ) : (
        <ol className="pub-list">
          {visible.map((p, i) => {
            const { Icon, tone, label } = areaMeta[p.area];
            const newYear = sort === "newest" && (i === 0 || visible[i - 1].year !== p.year);
            return (
              <Fragment key={p.id}>
                {newYear && (
                  <li className="pub-year" aria-hidden="true">
                    <span>{p.year}</span>
                    <span className="pub-year-count">{filtered.filter((x) => x.year === p.year).length} papers</span>
                  </li>
                )}
                <li className="pub-item2">
                  <div className="pub-cite">
                    {p.cites > 0 ? (
                      <><span className="pub-cite-n font-serif">{p.cites}</span><span className="pub-cite-l">citations</span></>
                    ) : (
                      <span className="pub-cite-l">{p.year >= 2026 ? "New" : "Not yet cited"}</span>
                    )}
                  </div>
                  <div className="pub-body">
                    <div className="pub-badges">
                      <span className={`pub-area tone-text-${tone}`}><Icon size={13} strokeWidth={2} /> {label}</span>
                      {p.firstAuthor && <span className="pub-badge is-first">First author</span>}
                      {p.type === "Survey" && <span className="pub-badge is-survey">Survey</span>}
                      {p.type === "Conference" && <span className="pub-badge">Conference</span>}
                      {p.cites >= 40 && <span className="pub-badge is-hot">Highly cited</span>}
                    </div>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="pub-title2">
                      {p.title} <ArrowUpRight size={14} strokeWidth={2} />
                    </a>
                    <p className="pub-authors">
                      {p.authors.map((a, j) => (
                        <Fragment key={j}>
                          {j > 0 && ", "}
                          {isMe(a) ? <strong>{a}</strong> : a}
                        </Fragment>
                      ))}
                    </p>
                    <p className="pub-venue"><em>{p.venue}</em>, {p.year}</p>
                  </div>
                </li>
              </Fragment>
            );
          })}
        </ol>
      )}

      {filtered.length > PAGE && (
        <button className="pub-more" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show fewer" : `Show all ${filtered.length} papers`}
        </button>
      )}
    </Section>
  );
}
