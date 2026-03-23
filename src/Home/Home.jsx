import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="anchor" id="about"></div>
      <About />
      <Projects />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}
