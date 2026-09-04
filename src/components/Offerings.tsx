interface Offer {
  title: string;
  scope: string;
  tags: string[];
  description: string;
  note?: string;
}

const OFFERS: Offer[] = [
  {
    title: "Engineering & Integration",
    scope: "Full-Stack & Mobile Development",
    tags: ["TypeScript", "React", "Node", "Flutter", "Kubernetes"],
    description:
      "Building and integrating systems — from loyalty integrations (SAS) to mobile digitization (Stora Enso) and on-prem cloud automation (Internetstiftelsen). NDA-sensitive work handled confidentially.",
  },
  {
    title: "Consulting & Domain Analysis",
    scope: "SaaS Configuration & Technical Translation",
    tags: ["Business Logic", "Documentation", "Client Workshops", "GDPR"],
    description:
      "Translating requirements into working configuration and documentation (Keylane Axon), auditing dependencies, and supporting stakeholder dynamics — including conflict resolution in multi-team delivery.",
  },
  {
    title: "Mentorship & Structured Training",
    scope: "Onboarding & Team Growth",
    tags: ["CELTA", "Le Wagon TA", "Curriculum Design", "1:1 Coaching"],
    description:
      "Mentoring junior developers, curating trainee programs (Futurice), and structured technical onboarding backed by certified teaching practice.",
  },
];

export default function Offerings(): React.JSX.Element {
  return (
    <section className="portfolio-section">
      <h3 className="section-heading">Offerings</h3>
      <p className="section-intro-text">
        A hybrid profile — engineering, domain consulting, and structured
        mentoring. Confidential work (NDA clients, internal repositories)
        stays anonymous; named partnerships reference public-facing roles.
      </p>
      <div className="case-studies-grid">
        {OFFERS.map((o) => (
          <div key={o.title} className="pillar-card">
            <div className="card-meta">
              <span className="card-scope">{o.scope}</span>
            </div>
            <h4 className="case-title">{o.title}</h4>
            <p className="card-text">{o.description}</p>
            <div className="tag-grid">
              {o.tags.map((t) => (
                <span key={t} className="skill-tag">
                  {t}
                </span>
              ))}
            </div>
            {o.note && (
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                {o.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
