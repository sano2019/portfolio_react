import React, { useState } from "react";
import "./App.css";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  desc: string;
}

type PillarTab = "engineering" | "strategy" | "creative";

// 🛠️ SET THIS TO 'true' WHEN YOU ARE READY TO SHOW YOUR FULL PORTFOLIO
const IS_WEBSITE_LIVE = false;

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Freelance Problem Solver",
    company: "Self-Employed",
    period: "2025 - Present",
    desc: "Full-stack development, prompt engineering, video production workflows, and tech consulting.",
  },
  {
    role: "Software Developer",
    company: "SAS - Scandinavian Airlines",
    period: "2024 - 2026",
    desc: "Built resilient web infrastructure and systems within the aviation space using modern web stacks.",
  },
  {
    role: "Software Developer",
    company: "Futurice",
    period: "2021 - 2024",
    desc: "Consulted on digital products. Developed full-stack software using TypeScript, React, Node, and cloud tools.",
  },
  {
    role: "Teaching Assistant",
    company: "Le Wagon",
    period: "2020 - 2021",
    desc: "Mentored students transitioning into tech. Explained programming fundamentals, architectural patterns, and code logic.",
  },
  {
    role: "IT Consultant",
    company: "Keylane",
    period: "2016 - 2020",
    desc: "Configured business logic into SaaS platforms, managed customer requirements, and translated functional specs to technical docs.",
  },
];

export default function App(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<PillarTab>("engineering");

  // Renders the clean placeholder page to lock down your domain immediately
  if (!IS_WEBSITE_LIVE) {
    return (
      <div className="coming-soon-container">
        <div className="portfolio-badge">SANDERNOBEL.DEV</div>
        <h1 className="portfolio-title">Sander Nobel</h1>
        <h2 className="portfolio-subtitle">Freelance Problem Solver</h2>
        <div className="divider" />
        <p className="coming-soon-text">
          A brand new digital portfolio is currently under construction.
        </p>
        <p className="portfolio-location">📍 Stockholm, Sweden</p>
      </div>
    );
  }

  // Your full portfolio code remains completely intact below, safe and sound!
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <div className="portfolio-badge">SANDERNOBEL.DEV</div>
        <h1 className="portfolio-title">Sander Nobel</h1>
        <h2 className="portfolio-subtitle">Freelance Problem Solver</h2>
        <p className="portfolio-location">
          📍 Stockholm, Sweden | Bilingual English & Dutch
        </p>
        <p className="portfolio-bio">
          I'm a full-stack developer and technical consultant who bridges the
          gap between clean code, business strategy, and media production. I
          turn complex logic into smooth digital solutions.
        </p>
        <div className="contact-row">
          <a href="mailto:sander.nobel@gmail.com" className="contact-link">
            Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
        </div>
      </header>

      <section className="portfolio-section">
        <div className="tab-container">
          <button
            onClick={() => setActiveTab("engineering")}
            className={`tab-button ${activeTab === "engineering" ? "active" : ""}`}
          >
            ⚙️ Build
          </button>
          <button
            onClick={() => setActiveTab("strategy")}
            className={`tab-button ${activeTab === "strategy" ? "active" : ""}`}
          >
            📊 Strategy
          </button>
          <button
            onClick={() => setActiveTab("creative")}
            className={`tab-button ${activeTab === "creative" ? "active" : ""}`}
          >
            🎬 Create
          </button>
        </div>

        <div className="pillar-card">
          {activeTab === "engineering" && (
            <div>
              <h3 className="card-title">Software Engineering</h3>
              <p className="card-text">
                Building scalable, reliable web applications. Generalist mindset
                with deep technical focus on modern infrastructure tools.
              </p>
              <div className="tag-grid">
                {[
                  "TypeScript",
                  "React",
                  "Node.js",
                  "Python",
                  "Docker",
                  "Kubernetes",
                  "Rust",
                  "Flutter",
                ].map((t) => (
                  <span key={t} className="skill-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "strategy" && (
            <div>
              <h3 className="card-title">IT Consulting & Business Logic</h3>
              <p className="card-text">
                Holding a Master's in Strategic IT Management, I understand
                commercial goals, map functional processes, configure core SaaS
                logic, and coordinate cross-border projects.
              </p>
              <div className="tag-grid">
                {[
                  "Strategic IT Management",
                  "SaaS Configuration",
                  "Requirements Gathering",
                  "Technical Documentation",
                  "ITIL Foundation",
                ].map((t) => (
                  <span key={t} className="skill-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "creative" && (
            <div>
              <h3 className="card-title">Media Production & Mentorship</h3>
              <p className="card-text">
                Certified video editor specializing in modern AI workflows and
                high-tempo media. Educator equipped with international CELTA
                teaching frameworks.
              </p>
              <div className="tag-grid">
                {[
                  "DaVinci Resolve Certified",
                  "Video Editing",
                  "MotoVlogging Content",
                  "CELTA Certified",
                  "Technical Mentorship",
                ].map((t) => (
                  <span key={t} className="skill-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="portfolio-section">
        <h3 className="section-heading">Career Timeline</h3>
        <div className="timeline-list">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-meta">
                <span className="timeline-period">{exp.period}</span>
                <span className="timeline-company">{exp.company}</span>
              </div>
              <div className="timeline-content">
                <h4 className="timeline-role">{exp.role}</h4>
                <p className="timeline-desc">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="portfolio-footer">
        © {new Date().getFullYear()} Sander Nobel. Built using React +
        TypeScript + Vite.
      </footer>
    </div>
  );
}
