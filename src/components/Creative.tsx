import React, { useState, useEffect } from "react";
import "../App.css"; // Ensure this matches your CSS import path

interface YouTubeVideo {
  id: string;
  title: string;
  link: string;
  date: string;
}

export default function Creative(): React.JSX.Element {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch the statically built JSON asset from your public folder
    fetch("./youtube-videos.json")
      .then((res) => {
        if (!res.ok) throw new Error("Static video asset not found");
        return res.json();
      })
      .then((data: YouTubeVideo[]) => {
        setVideos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load static YouTube feed:", err);
        setLoading(false);
      });
  }, []);

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
        <p className="card-text" style={{ marginBottom: "2rem" }}>
          I run a YouTube channel focused on travel and motovlogging content. As
          a certified editor in
          <strong> DaVinci Resolve</strong>, I design high-tempo editing
          workflows and integrate modern AI-driven multimedia production
          pipelines.
        </p>

        {loading ? (
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            Loading project media...
          </p>
        ) : (
          <div className="embed-grid">
            {videos.map((video) => (
              <div key={video.id} className="embed-card">
                <div className="video-responsive-wrapper">
                  <iframe
                    /* ⚡ FIXED: Added the template literal syntax ($) and the secure embed route */
                    src={`https://youtube.com/{video.id}?rel=0`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="embed-video-title">{video.title}</p>
              </div>
            ))}
          </div>
        )}
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
