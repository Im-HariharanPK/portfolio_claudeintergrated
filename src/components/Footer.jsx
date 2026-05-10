import React from "react";
import "./Footer.css";

export default function Footer({ name }) {
  return (
    <footer className="footer">
      <p>
        Designed &amp; built by — {name} © {new Date().getFullYear()}
      </p>
      <p className="footer-role">Research Analyst → Business Analyst</p>
    </footer>
  );
}