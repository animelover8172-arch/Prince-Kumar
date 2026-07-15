import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Terminal, Sparkles, BookOpen } from 'lucide-react';

export default function TechStack() {
  const [selectedTechIndex, setSelectedTechIndex] = useState<number | null>(null);

  const techs = [
    { name: 'HTML5', desc: 'Standard markup structuring with semantic SEO, clean tags, and layout accessibility.', level: 'Advanced', color: '#E34F26' },
    { name: 'CSS3', desc: 'Advanced visuals, responsive grids, keyframe animations, flexboxes, and variables.', level: 'Advanced', color: '#1572B6' },
    { name: 'JavaScript', desc: 'Functional programming, DOM controls, asynchronous logic, REST api fetching, and ES6+ features.', level: 'Advanced', color: '#F7DF1E' },
    { name: 'React', desc: 'Single Page Applications (SPA), reactive hooks, context APIs, state engines, and modular components.', level: 'Intermediate/Advanced', color: '#61DAFB' },
    { name: 'Next.js', desc: 'Server-side rendering (SSR), static page generation (SSG), routing frameworks, and SEO optimizers.', level: 'Intermediate', color: '#ffffff' },
    { name: 'Tailwind CSS', desc: 'Utility-first clean styles, responsive setups, fluid grids, and custom animation hooks.', level: 'Expert', color: '#06B6D4' },
    { name: 'GitHub', desc: 'Branch structures, pull requests, release merges, pipeline tracking, and repository storage.', level: 'Advanced', color: '#181717' },
    { name: 'VS Code', desc: 'Standard IDE setup, custom keyboard shortcuts, debugger tools, and extension pipelines.', level: 'Expert', color: '#007ACC' },
    { name: 'Figma', desc: 'Design visual wireframing, high-fidelity prototypes, asset preparation, and layout grids.', level: 'Advanced', color: '#F24E1E' }
  ];

  return (
    <section id="tech-stack" className="relative py-28 px-6 bg-slate-950 overflow-hidden">
      {/* Dynamic ambient sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>CUTTING-EDGE UTILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            My Tech Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tech Stack Interactive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive Float Cells (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-4">
            {techs.map((tech, index) => {
              const isActive = selectedTechIndex === index;
              return (
                <div
                  key={tech.name}
                  onClick={() => setSelectedTechIndex(isActive ? null : index)}
                  onMouseEnter={() => setSelectedTechIndex(index)}
                  className={`group relative p-6 rounded-2xl border bg-slate-900/40 backdrop-blur-md shadow-lg transition-all duration-300 cursor-pointer text-center flex flex-col justify-center items-center h-[130px] overflow-hidden interactive-card ${
                    isActive 
                      ? 'border-cyan-400/50 shadow-[0_0_20px_rgba(0,229,255,0.15)] bg-slate-900' 
                      : 'border-white/5 hover:border-white/10'
                  }`}
                >
                  {/* Subtle decorative glowing corner dot */}
                  <div
                    className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: tech.color }}
                  />
                  
                  {/* Animated Back glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Icon Letter Symbol */}
                  <span className="text-2xl sm:text-3xl font-mono font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 group-hover:scale-110 transition-transform duration-300">
                    {tech.name.substring(0, 2).toUpperCase()}
                  </span>

                  <span className="text-xs sm:text-sm text-zinc-300 font-bold font-sans mt-2 group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right: Technical Details Panel (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md shadow-2xl relative overflow-hidden h-[360px] flex flex-col justify-between">
              
              {/* Backglow element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

              {selectedTechIndex !== null ? (
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        {/* Status Light */}
                        <div
                          className="w-3.5 h-3.5 rounded-full shadow-lg"
                          style={{
                            backgroundColor: techs[selectedTechIndex].color,
                            boxShadow: `0 0 10px ${techs[selectedTechIndex].color}`
                          }}
                        />
                        <h3 className="text-2xl font-black text-white font-sans">
                          {techs[selectedTechIndex].name}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-400/10 px-2 py-0.5 rounded-md uppercase">
                        {techs[selectedTechIndex].level}
                      </span>
                    </div>

                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                      {techs[selectedTechIndex].desc}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/50 border border-white/5 flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-violet-400 shrink-0" />
                    <p className="text-zinc-500 text-[11px] font-mono leading-relaxed">
                      RoadsideDeveloper uses {techs[selectedTechIndex].name} to engineer lightning-fast digital assets with pristine structure.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <Terminal className="w-14 h-14 text-cyan-500/40 mb-4 animate-pulse" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Interactive Console
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm max-w-xs leading-relaxed">
                    Hover or click on any technology icon in the left grid to view detailed deployment specifications, utility levels, and applications.
                  </p>
                  <div className="inline-flex items-center gap-1.5 mt-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Awaiting selection</span>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
