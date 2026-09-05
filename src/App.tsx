import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";
import Creative from "./components/Creative";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Offerings from "./components/Offerings";
import "./App.css";

export default function App(): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(document.body.classList.contains('high-contrast'));
  useEffect(() => { if (localStorage.getItem('contrast') === "on") document.body.classList.add('high-contrast'); }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <div className="portfolio-container">
      <a href="#hero" className="skip-link">Skip to content</a>
      <nav className="site-nav">
        <a href="#hero">About</a>
        <a href="#case-studies">Work</a>
        <a href="#offerings">Offerings</a>
        <a href="#creative">Creative Projects</a>
        <a href="#contact">Contact</a>
        {/* HAMBURGER START - comment out below block to disable hamburger overlay */}
        <button
          className="hamburger-btn"
          aria-label="Open menu"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen(!open)}
        >
          <span></span><span></span><span></span>
        </button>
        {/* HAMBURGER END */}
      </nav>
      {/* OVERLAY START - comment out for hamburger removal */}
      <div
        className={`mobile-nav-overlay ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <button className="close-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
          ×
        </button>
        <a href="#hero" onClick={() => setOpen(false)}>About</a>
        <a href="#case-studies" onClick={() => setOpen(false)}>Work</a>
        <a href="#offerings" onClick={() => setOpen(false)}>Offerings</a>
        <a href="#creative" onClick={() => setOpen(false)}>Creative Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
      {/* OVERLAY END */}
      <main id="hero"><Hero /></main>
      <section id="case-studies" aria-label="Case studies"><CaseStudies /></section>
      <section id="testimonials" aria-label="Testimonials"><Testimonials /></section>
      <section id="offerings" aria-label="Offerings"><Offerings /></section>
      <section id="creative" aria-label="Creative work"><Creative /></section>
      <section id="contact" aria-label="Contact"><Contact /></section>
      <footer className="portfolio-footer">
        © {new Date().getFullYear()} Sander Nobel. Crafted with React, TypeScript, and Vite.
        <button className="contrast-toggle" onClick={() => { document.body.classList.toggle('high-contrast'); const on = document.body.classList.contains('high-contrast'); localStorage.setItem('contrast', on ? 'on' : 'off'); setHighContrast(on); }} aria-label="Toggle contrast">{highContrast ? "Standard Theme" : "High Contrast"}</button>
      </footer>
    </div>
  );
}
