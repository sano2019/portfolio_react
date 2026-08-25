import React from "react";

interface ProjectStory {
  title: string;
  scope: string;
  company: string;
  tags: string[];
  description: string;
}

const STORIES: ProjectStory[] = [
  {
    title: "High-Reliability Aviation Web Infrastructure",
    scope: "Full-Stack Software Engineering",
    company: "SAS - Scandinavian Airlines",
    tags: ["TypeScript", "React", "Node.js", "Docker", "Cloud Platform"],
    description:
      "Modernized under-the-hood web infrastructure within a complex, high-scale aviation environment. Focused heavily on type safety, system resilience, and tracking down runtime inefficiencies.",
  },
  {
    title: "Algorithmic Modeling & Enterprise Logic Architecture",
    scope: "Domain Analysis & SaaS Configuration",
    company: "Keylane",
    tags: [
      "Systems Analysis",
      "Mathematical Formulas",
      "Logic Design",
      "On-site Workshops",
    ],
    description:
      "Translated intricate corporate demands into rock-solid automated solutions. Mapped end-to-end calculations and audited deep architectural dependencies to eliminate downstream regression errors.",
  },
];

export default function CaseStudies(): React.JSX.Element {
  return (
    <section className="portfolio-section">
      <h3 className="section-heading">Systems & Code Retrospectives</h3>
      <p className="section-intro-text">
        Most of my commercial work lives inside private enterprise repositories.
        Instead of public code dumps, here is the high-level methodology behind
        the production systems I've architected.
      </p>
      <div className="case-studies-grid">
        {STORIES.map((story, i) => (
          <div key={i} className="pillar-card case-card">
            <div className="card-meta">
              <span className="card-company">{story.company}</span>
              <span className="card-scope">{story.scope}</span>
            </div>
            <h4 className="case-title">{story.title}</h4>
            <p className="card-text">{story.description}</p>
            <div className="tag-grid">
              {story.tags.map((t) => (
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
