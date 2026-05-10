import React from "react";
import "./Hero.css";

export default function Hero({ data, setHovered }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow hero-glow--1" />
      <div className="hero-glow hero-glow--2" />
      <div className="hero-glow hero-glow--3" />

      <div className="hero-inner">
        <div className="hero-tag">
          <span className="hero-tag__dot" />
          {data.tagline}
        </div>

        <h1 className="hero-name">
          {data.name.split(" ").map((word, i) =>
            i === 0 ? (
              <span key={i} className="hero-name__grad">{word} </span>
            ) : (
              <React.Fragment key={i}>{word}</React.Fragment>
            )
          )}
        </h1>

        <p className="hero-role">
          {data.role.from}
          <span className="hero-role__arrow"> → </span>
          {data.role.to}
        </p>

        <p className="hero-desc">{data.heroDesc}</p>

        <div className="hero-ctas">
          <button
            className="btn-primary"
            onClick={() => scrollTo("projects")}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            View My Work
          </button>
          <button
            className="btn-ghost"
            onClick={() => scrollTo("contact")}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Get In Touch
          </button>
        </div>

        {/* Floating chips */}
        <div className="hero-chips">
          <span className="chip chip--purple">SQL</span>
          <span className="chip chip--teal">Power BI</span>
          <span className="chip chip--coral">Python</span>
          {/* <span className="chip chip--amber">BPMN</span> */}
        </div>
      </div>

      <button className="hero-scroll" onClick={() => scrollTo("about")} aria-label="Scroll down">
        <span className="hero-scroll__label">Scroll</span>
        <div className="hero-scroll__line" />
      </button>
    </section>
  );
}