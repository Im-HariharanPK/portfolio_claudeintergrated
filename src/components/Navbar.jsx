import React, { useState } from "react";
import { useNavScroll } from "../hooks/useAnimations";
import "./Navbar.css";

const links = ["About", "Skills", "Projects", "Contact"];

export default function Navbar({ setHovered }) {
  const { scrolled, activeSection } = useNavScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a
        href="#hero"
        className="nav-logo"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}
      >
        Portfolio <span className="logo-star">✦</span>
      </a>

      {/* Desktop links */}
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l}>
            <button
              className={`nav-link ${activeSection === l.toLowerCase() ? "active" : ""}`}
              onClick={() => scrollTo(l.toLowerCase())}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {l}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map((l) => (
          <button key={l} className="mobile-link" onClick={() => scrollTo(l.toLowerCase())}>
            {l}
          </button>
        ))}
      </div>
    </nav>
  );
}