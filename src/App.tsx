import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseMe from './components/WhyChooseMe';
import TechStack from './components/TechStack';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-white font-sans selection:bg-cyan-500/30 selection:text-white overflow-x-hidden">
      {/* Interactive Trailing Cursor */}
      <CustomCursor />

      {/* Futuristic 3D Particle Constellation / Grid Background */}
      <ParticleBackground />

      {/* Frosted glass Navigation panel */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative w-full">
        {/* Hero Banner with typing roles & rotating card */}
        <Hero />

        {/* Biography & Holographic skills dashboard */}
        <About />

        {/* Service Bento Grid + interactive modals */}
        <Services />

        {/* Laptop device Mockup project portfolio grids */}
        <Projects />

        {/* Chronological business guarantee timeline */}
        <WhyChooseMe />

        {/* Hover console utility stacks */}
        <TechStack />

        {/* Tablet sheet CV and functional downloader */}
        <Resume />

        {/* Star testimonial slides */}
        <Testimonials />

        {/* Client desk forms & active socials */}
        <Contact />
      </main>

      {/* Copyright footer */}
      <Footer />
    </div>
  );
}
