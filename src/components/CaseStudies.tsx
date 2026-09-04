import React from "react";
import { STORIES } from "../data/case-studies";

export default function CaseStudies(): React.JSX.Element {
  return (
    <section className="portfolio-section">
      <h3 className="section-heading">Work</h3>
      <p className="section-intro-text">
        Select verified projects from named roles; NDA-sensitive work kept
        anonymous (e.g., car manufacturer POC, national infrastructure).
      </p>
      <div className="case-studies-grid">
        {STORIES.map((s) => (
          <div key={s.title} className="pillar-card case-card">
            <div className="card-meta">
              <span className="card-company">{s.company}</span>
              <span className="card-scope">{s.scope}</span>
            </div>
            <h4 className="case-title">{s.title}</h4>
            <p className="card-text">{s.description}</p>
            <div className="tag-grid">
              {s.tags.map((t) => (
                <span key={t} className="skill-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
