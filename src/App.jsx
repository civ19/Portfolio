import React from "react";
import Starfield from "./components/Starfield";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";
import NavbarDock from "./components/NavbarDock";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#04070f] text-slate-100 selection:bg-teal-500/30 selection:text-teal-200">
      {/* Background Starfield Canvas */}
      <Starfield />

      {/* Subtle radial cosmic ambient gradients */}
      <div 
        aria-hidden="true" 
        className="fixed top-0 left-1/4 -translate-x-1/2 w-[600px] h-[500px] bg-teal-950/15 rounded-full blur-[140px] pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="fixed bottom-0 right-1/4 translate-x-1/2 w-[700px] h-[600px] bg-cyan-950/10 rounded-full blur-[160px] pointer-events-none"
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Footer />
      </div>

      {/* Floating Bottom Quick-Nav Dock */}
      <NavbarDock />
    </div>
  );
}