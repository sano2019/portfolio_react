import React from "react";

export default function Hero(): React.JSX.Element {
  return (
    <header className="portfolio-header">
      <div className="portfolio-badge">SANDERNOBEL.DEV</div>
      <h1 className="portfolio-title">Sander Nobel</h1>
      <h2 className="portfolio-subtitle">
        Full-Stack Consultant - Business Needs to Implementation
      </h2>
      <p className="portfolio-location">
        📍 Stockholm, Sweden | Bilingual English & Dutch
      </p>

      <p className="portfolio-bio">
        I’m a multi-disciplinary tech generalist and consultant. My journey has
        taken me from studying Strategic IT Management to configuring enterprise
        SaaS business logic, and ultimately into full-stack software
        engineering. I bridge the gap between complex analytical rules, clean
        code infrastructure, and creative visual storytelling.
      </p>
      <p className="hero-availability">
        Currently available for freelance development, infrastructure
        consulting, and mentorship.
      </p>

      <div className="contact-row">
        <a href="mailto:sander.nobel@gmail.com" className="contact-link">
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/sano2019/"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}
