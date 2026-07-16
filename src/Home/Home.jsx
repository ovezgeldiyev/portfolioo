import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="anchor" id="about"></div>
      <About />
      <div className="anchor" id="projects"></div>
      <Projects />
      <div className="anchor" id="experience"></div>
      <Experience />
      <div className="anchor" id="services"></div>
      <Services />
      <div className="anchor" id="contact"></div>
      <Contact />
    </>
  );
}
