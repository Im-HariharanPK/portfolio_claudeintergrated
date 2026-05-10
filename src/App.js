import React from "react";
import { useCursor } from "./hooks/useAnimations";
import { portfolioData } from "./data/portfolioData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";

export default function App() {
  const { cursorRef, ringRef, hovered, setHovered } = useCursor();

  return (
    <>
      {/* Custom cursor (hidden on touch) */}
      <div ref={cursorRef} className={`cursor ${hovered ? "hovered" : ""}`} />
      <div ref={ringRef} className={`cursor-ring ${hovered ? "hovered" : ""}`} />

      <Navbar setHovered={setHovered} />
      <Hero data={portfolioData} setHovered={setHovered} />
      <About data={portfolioData} />
      <Skills data={portfolioData} />
      <Projects data={portfolioData} setHovered={setHovered} />
      <Contact data={portfolioData} setHovered={setHovered} />
      <Footer name={portfolioData.name} />
    </>
  );
}