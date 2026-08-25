import React from "react";

export default function Contact(): React.JSX.Element {
  return (
    <section className="portfolio-section contact-collaboration">
      <h3 className="section-heading">Let's Collaborate</h3>
      <p className="section-intro-text">
        Whether you want to trade travel stories, talk infrastructure, or bring
        me onto an active corporate project, my doors are open.
      </p>

      <div className="collaboration-menu">
        <div className="collab-option">
          <h5>☕ Casual Chat & Mentorship</h5>
          <p>
            Want to discuss programming fundamentals, open-source infrastructure
            tools, or transition into tech? Let's talk.
          </p>
        </div>

        <div className="collab-option">
          <h5>📊 Technical System Consulting</h5>
          <p>
            Need a generalist eye to audit business logic requirements, map out
            an automated data solution, or build clean TypeScript/React
            applications?
          </p>
        </div>
      </div>

      <div className="final-cta">
        <a href="mailto:sander.nobel@gmail.com" className="primary-cta-button">
          Drop me a line
        </a>
      </div>
    </section>
  );
}
