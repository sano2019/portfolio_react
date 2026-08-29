import React from "react";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";
import Creative from "./components/Creative";
import Contact from "./components/Contact";
import "./App.css";

// 🛠️ SET THIS TO 'true' WHEN YOU ARE READY TO DEPLOY THE FULL BALANCED DESIGN
const IS_WEBSITE_LIVE = false;

export default function App(): React.JSX.Element {
  // Intercept and render the clean placeholder for production lockdown
  if (!IS_WEBSITE_LIVE) {
    return (
      <div className="coming-soon-container">
        <div className="portfolio-badge">SANDERNOBEL.DEV</div>
        <h1 className="portfolio-title">Sander Nobel</h1>
        <h2 className="portfolio-subtitle">Freelance Problem Solver</h2>
        <div className="divider" />
        <p className="coming-soon-text">
          A brand new modular digital portfolio is currently under construction.
        </p>
        <p className="portfolio-location">📍 Stockholm, Sweden</p>
      </div>
    );
  }

  // Your full layout orchestrator is safely waiting down here, compile-checked!
  return (
    <div className="portfolio-container">
      <nav className="site-nav">
        <a href="#hero">About</a>
        <a href="#case-studies">Systems</a>
        <a href="#creative">Creative</a>
        <a href="#contact">Contact</a>
      </nav>
      <div id="hero">
        <Hero />
      </div>
      <div id="case-studies">
        <CaseStudies />
      </div>
      <div id="creative">
        <Creative />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <footer className="portfolio-footer">
        © {new Date().getFullYear()} Sander Nobel. Crafted with React,
        TypeScript, and Vite.
      </footer>
    </div>
  );
}
