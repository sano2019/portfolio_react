import React from "react";

interface Quote {
  source: string;
  pull: string;
}

const QUOTES: Quote[] = [
  {
    source: "Software Engineer, Futurice",
    pull:
      "As one of my mentors during the traineeship, he guided not just me but all the interns. His curiosity and down-to-earth approach made him indispensable.",
  },
  {
    source: "UX/UI Designer, Futurice",
    pull:
      "On a demanding year-long project, he was a steadfast pillar of support - exceptional problem-solving and a collaborative spirit.",
  },
  {
    source: "Senior Developer, Futurice",
    pull:
      "Happy to jump into new stacks and learn quickly to help the team and client. A team player who takes responsibility when there's no account manager.",
  },
];

export default function Testimonials(): React.JSX.Element {
  return (
    <section className="portfolio-section">
      <h3 className="section-heading">Words from Collaborators</h3>
      <p className="section-intro-text">
        Colleagues highlight my ability to teach, adapt, and stay reliable -
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
                  marginBottom: "0.5rem",
                }}
              >
                “{q.pull}”
              </p>
              <cite
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  fontStyle: "normal",
                }}
              >
                - {q.source}
              </cite>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
