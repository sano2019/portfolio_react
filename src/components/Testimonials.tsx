import React from "react";

interface Quote {
  source: string;
  pull: string;
}

const QUOTES: Quote[] = [
  {
    source: "Colleague, Futurice",
    pull:
      "He never shies away from responsibility... passionate about helping junior developers get their first job. I'd happily recommend him.",
  },
  {
    source: "Mentee",
    pull:
      "Hard to overstate the value... his professional maturity helped me figure out what I wanted to do and the first steps to get there.",
  },
  {
    source: "Project partner",
    pull:
      "Unwavering professionalism... a steadfast pillar of support. Collaborative spirit made it an absolute pleasure.",
  },
  {
    source: "Peer / referral",
    pull:
      "Always there for support, technical or friendly. Positive impact undeniable.",
  },
];

export default function Testimonials(): React.JSX.Element {
  return (
    <section className="portfolio-section">
      <h3 className="section-heading">Words from Collaborators</h3>
      <p className="section-intro-text">
        Colleagues highlight my ability to teach, adapt, and stay reliable —
        feedback that aligns with my CELTA certification (July 2026) for
        structured adult education.
      </p>
      <div className="case-studies-grid">
        {QUOTES.map((q) => (
          <div key={q.source} className="pillar-card">
            <blockquote style={{ margin: 0 }}>
              <p
                style={{
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "0.75rem",
                }}
              >
                “{q.pull}”
              </p>
              <cite style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                — {q.source}
              </cite>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
