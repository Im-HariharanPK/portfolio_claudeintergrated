// import React, { useEffect, useRef, useState } from "react";
import React from "react";
import { useScrollReveal } from "../hooks/useAnimations";
import "./Skills.css";

function SkillBar({ label, value, animate }) {
  return (
    <div className="skill-bar-item">
      <div className="skill-bar-label">
        <span>{label}</span>
        <span className="skill-bar-pct">{value}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: animate ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}

const colorClass = {
  purple: "cat--purple",
  teal: "cat--teal",
  coral: "cat--coral",
  amber: "cat--amber",
};

export default function Skills({ data }) {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="skills" className="skills-section">
      <div className="section-inner">
        <div className="section-label">What I Bring</div>
        <h2 className="section-title">Skills &amp; Expertise</h2>

        <div className="skills-grid" ref={ref}>
          {data.skills.map((cat, i) => (
            <div
              key={i}
              className={`skill-category ${colorClass[cat.color] || ""} reveal reveal-d${i} ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="skill-cat-icon">{cat.icon}</span>
              <div className="skill-cat-title">{cat.title}</div>
              <div className="skill-cat-desc">{cat.desc}</div>
              <div className="skill-pills">
                {cat.pills.map((p, j) => (
                  <span key={j} className="skill-pill">{p}</span>
                ))}
              </div>
              <div className="skill-bars">
                {cat.bars.map((b, j) => (
                  <SkillBar key={j} label={b.label} value={b.value} animate={visible} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}