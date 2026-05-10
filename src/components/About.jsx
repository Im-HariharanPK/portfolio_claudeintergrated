import React from "react";
import { useScrollReveal } from "../hooks/useAnimations";
import "./About.css";

export default function About({ data }) {
  const { ref: leftRef, visible: leftVisible } = useScrollReveal();
  const { ref: rightRef, visible: rightVisible } = useScrollReveal();

  return (
    <section id="about" className="about-section">
      <div className="section-inner">
        <div className="section-label">Who I Am</div>
        <h2 className="section-title">Analytical mind,<br />strategic vision.</h2>

        <div className="about-grid">
          {/* Visual column */}
          <div
            ref={leftRef}
            className={`about-visual reveal ${leftVisible ? "visible" : ""}`}
          >
            <div className="avatar-wrap">
              <div className="avatar-ring" />
              <div className="avatar-ring-mask" />
              <div className="avatar">
                <div className="avatar-bg" />
                <span className="avatar-initials">{data.initials}</span>
              </div>
            </div>
            <div className="about-stats">
              {data.about.stats.map((s, i) => (
                <div className="stat-card" key={i}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Text column */}
          <div
            ref={rightRef}
            className={`about-text reveal reveal-d2 ${rightVisible ? "visible" : ""}`}
          >
            {data.about.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <div className="transition-bar">
              <strong>Career Transition Journey:</strong>{" "}
              {data.about.transitionNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}