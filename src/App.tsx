import React from "react";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";
import Creative from "./components/Creative";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Offerings from "./components/Offerings";
import "./App.css";

export default function App(): React.JSX.Element {
  return (
    <div className="portfolio-container">
      <nav className="site-nav">
        <a href="#hero">About</a>
        <a href="#case-studies">Systems</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#offerings">Offerings</a>
        <a href="#creative">Creative</a>
        <a href="#contact">Contact</a>
      </nav>
      <div id="hero">
        <Hero />
      </div>
      <div id="case-studies">
        <CaseStudies />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="offerings">
        <Offerings />
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
