import React from "react";
import { useScrollReveal } from "../hooks/useAnimations";
import "./Projects.css";

const badgeClass = {
  research: "badge--research",
  analysis: "badge--analysis",
  bi: "badge--bi",
  strategy: "badge--strategy",
};

export default function Projects({ data, setHovered }) {
  const { ref, visible } = useScrollReveal(0.08);

  return (
    <section id="projects" className="projects-section">
      <div className="section-inner">
        <div className="section-label">Selected Work</div>
        <h2 className="section-title">Projects &amp; Case Studies</h2>

        <div className="projects-grid" ref={ref}>
          {data.projects.map((p, i) => (
            <div
              key={i}
              className={`project-card reveal ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className="project-header">
                <div className="project-emoji">{p.emoji}</div>
                <span className={`project-badge ${badgeClass[p.badgeType] || ""}`}>
                  {p.badge}
                </span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-impact">
                <span className="impact-icon">✦</span> <strong>Impact:</strong>{" "}
                {p.impact}
              </div>
              <div className="project-tags">
                {p.tags.map((t, j) => (
                  <span key={j} className="project-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}