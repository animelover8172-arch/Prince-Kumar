import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Mail, Briefcase, FileDown, ShieldCheck, Sparkles, ExternalLink, Globe } from 'lucide-react';

export default function Hero() {
  // Typing Animation logic
  const roles = [
    'Website Developer',
    'Frontend Developer',
    'Freelancer',
    'UI Designer',
    'Digital Business Consultant'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(120);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(60);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  // 3D Parallax Tilt Card Logic for portrait
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coords relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate angles (max 15 degrees)
    const tiltX = (mouseY / (height / 2)) * -12;
    const tiltY = (mouseX / (width / 2)) * 12;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-radial from-slate-900 via-slate-950 to-black"
    >
      {/* Moving Ambient Glow Lights */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[140px] animate-pulse pointer-events-none -z-10" style={{ animationDuration: '6s' }} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6 w-fit shadow-[0_0_15px_rgba(0,229,255,0.05)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>TOP-TIER WEB DESIGNER & DEVELOPER</span>
          </motion.div>

          {/* Founder Credit */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white font-mono tracking-widest text-sm font-semibold uppercase text-zinc-400 mb-2 flex items-center gap-2"
          >
            <span>FOUNDER OF</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              ROADSIDEDEVELOPER
            </span>
          </motion.h2>

          {/* Main Display Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight text-white mb-6 leading-tight"
          >
            Prince Kumar
          </motion.h1>

          {/* Typing Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl sm:text-3xl font-sans font-medium text-zinc-300 mb-8 flex items-center gap-2 min-h-[44px]"
          >
            <span>I'm a</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 font-bold border-r-2 border-cyan-400 pr-1 animate-pulse">
              {currentText}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-zinc-400 text-base sm:text-lg max-w-xl font-sans leading-relaxed mb-10"
          >
            Establishing premium digital identities across India. Designing ultra-fast, visually striking websites starting from roadside startups to luxury enterprises.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-sm tracking-wide shadow-[0_10px_30px_rgba(0,229,255,0.25)] hover:shadow-[0_10px_35px_rgba(124,58,237,0.45)] hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center gap-2 group border border-cyan-400/20"
            >
              <Mail className="w-4 h-4 text-white group-hover:scale-115 transition-transform" />
              Hire Me
            </a>
            
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-900 text-zinc-100 hover:text-white font-semibold text-sm tracking-wide border border-white/10 hover:border-cyan-500/30 shadow-lg hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center gap-2 group"
            >
              <Briefcase className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
              View Projects
            </a>

            <a
              href="#resume"
              className="px-6 py-4 rounded-xl bg-transparent hover:bg-white/5 text-zinc-400 hover:text-cyan-400 text-sm font-medium transition-all duration-300 flex items-center gap-1.5"
            >
              <FileDown className="w-4 h-4" />
              Resume
            </a>
          </motion.div>
        </div>

        {/* Right Side: Realistic Floating 3D Portrait Card */}
        <div className="lg:col-span-5 flex items-center justify-center relative mt-8 lg:mt-0">
          
          {/* Ambient Glowing Portal background */}
          <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-tr from-cyan-500 to-violet-600 opacity-20 blur-[60px] animate-pulse pointer-events-none -z-10" />

          {/* Tech Nodes/Floating stats surrounding portrait */}
          <div className="absolute top-0 -left-6 z-20 animate-bounce" style={{ animationDuration: '4s' }}>
            <div className="bg-slate-950/90 border border-cyan-500/30 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[10px] font-mono font-bold text-zinc-400 tracking-wider">STATUS: AVAILABLE</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 -right-6 z-20 animate-bounce" style={{ animationDuration: '6s' }}>
            <div className="bg-slate-950/90 border border-violet-500/30 rounded-2xl p-4 shadow-2xl backdrop-blur-md">
              <p className="text-zinc-500 text-[9px] font-mono tracking-widest uppercase">Specialization</p>
              <p className="text-white text-xs font-bold font-sans mt-0.5">Ultra-Fast React SPA</p>
            </div>
          </div>

          {/* Interactive 3D Card wrapper */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transformStyle: 'preserve-3d',
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 150 }}
            className="relative w-[280px] h-[370px] sm:w-[340px] sm:h-[450px] rounded-3xl p-3 bg-gradient-to-br from-white/10 to-white/0 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-sm cursor-none interactive-card group"
          >
            {/* Card Internal glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Glowing borders */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-cyan-500 via-transparent to-violet-600 opacity-20 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

            {/* Portrait Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-950" style={{ transform: 'translateZ(20px)' }}>
              <img
                src="/src/assets/images/regenerated_image_1784144526962.png"
                alt="Prince Kumar portrait - Founder of RoadsideDeveloper"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              
              {/* Glass footer overlay inside portrait */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-center justify-between border-t border-white/5">
                <div>
                  <h3 className="text-white text-sm font-bold font-sans">Prince Kumar</h3>
                  <p className="text-zinc-400 text-[10px] font-mono uppercase mt-0.5">Founding Engineer</p>
                </div>
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Mouse Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border border-zinc-500 flex justify-center p-1.5"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-cyan-400" />
        </motion.div>
      </div>
    </section>
  );
}
