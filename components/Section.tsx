interface SectionProps {
  id: string;
  title: string;
  number: string;
  children: React.ReactNode;
}

export default function Section({ id, title, number, children }: SectionProps) {
  return (
    <section id={id} className="section-divider">
      <div className="section-wrap">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
          <span className="font-mono" style={{
            fontSize: 11, color: "var(--c-subtle)",
            background: "var(--c-surface)", border: "1px solid var(--c-border)",
            padding: "2px 8px", borderRadius: 4,
          }}>
            {number}
          </span>
          <h2 className="font-serif" style={{ fontSize: 26, fontWeight: 500, color: "var(--c-text)" }}>
            {title}
          </h2>
          <div style={{ flex: 1, height: 1, background: "var(--c-divider)" }}></div>
        </div>
        {children}
      </div>
    </section>
  );
}
