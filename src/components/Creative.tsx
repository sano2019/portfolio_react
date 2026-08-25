import React from "react";

export default function Creative(): React.JSX.Element {
  return (
    <section className="portfolio-section">
      <h3 className="section-heading">Beyond the Code</h3>
      <p className="section-intro-text">
        I believe that the best engineers are also exceptional communicators.
        When I'm not looking at a terminal, I'm scaling up creative media
        projects, traveling, or teaching.
      </p>

      <div className="pillar-card creative-card">
        <h4 className="card-title">🎥 Media Production & MotoVlogging</h4>
        <p className="card-text">
          I run a YouTube channel focused on travel and motovlogging content. As
          a certified editor in
          <strong> DaVinci Resolve</strong>, I design high-tempo editing
          workflows and integrate modern AI-driven multimedia production
          pipelines.
        </p>

        {/* Visual YouTube Placeholder Grid */}
        <div className="youtube-placeholder-grid">
          <div className="video-thumb-mock">
            <span>[ YouTube Video Thumb ]</span>
          </div>
          <div className="video-thumb-mock">
            <span>[ YouTube Video Thumb ]</span>
          </div>
        </div>
      </div>

      <div
        className="pillar-card creative-card"
        style={{ marginTop: "1.5rem" }}
      >
        <h4 className="card-title">🗣️ Educational Architecture & Mentorship</h4>
        <p className="card-text">
          Holding an international <strong>CELTA teaching certification</strong>
          , I approach software engineering with strong educational empathy.
          Whether guiding career changers as a Teaching Assistant at Le Wagon or
          onboarding team members in complex corporate environments, I excel at
          making highly abstract technical concepts intuitive.
        </p>
      </div>
    </section>
  );
}
