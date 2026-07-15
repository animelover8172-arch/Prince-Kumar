import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Laptop, Smartphone, Search, Sparkles, Code2, Heart, MessageSquare } from 'lucide-react';
import { Project } from '../types';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const projectsData: Project[] = [
    {
      id: 'raj-darbar',
      title: 'Raj Darbar Restaurant & Hotel',
      description: 'Elegant Indian restaurant visual web portal featuring a dynamic menu browser, live reservation modules, and local SEO integrations.',
      category: 'Hospitality',
      image: 'https://picsum.photos/seed/restaurant1/640/400',
      demoUrl: '#contact',
      githubUrl: 'https://github.com',
      features: ['Table Booking Desk', 'WhatsApp Food Ordering', 'Dynamic Daily Menus'],
      techStack: ['React', 'Tailwind CSS', 'Framer Motion']
    },
    {
      id: 'deep-manglam',
      title: 'Deep Manglam Carpet',
      description: 'A luxurious interactive visual catalog and showroom for a premier hand-woven carpet manufacturer and distributor.',
      category: 'E-Commerce',
      image: 'https://picsum.photos/seed/carpet/640/400',
      demoUrl: '#contact',
      githubUrl: 'https://github.com',
      features: ['Zoomable Visual Gallery', 'Instant WhatsApp Catalogue', 'Custom Product Inquiry'],
      techStack: ['Next.js', 'Tailwind CSS', 'Lucide Icons']
    },
    {
      id: 'royal-spice',
      title: 'Royal Spice Restaurant',
      description: 'A modern, high-converting website featuring multi-cuisine displays, glowing food galleries, and customer reviews sliders.',
      category: 'Hospitality',
      image: 'https://picsum.photos/seed/spice/640/400',
      demoUrl: '#contact',
      githubUrl: 'https://github.com',
      features: ['Interactive Food Menus', 'Direct Reservation Desk', 'Social Integration'],
      techStack: ['React', 'CSS Grids', 'Animate.css']
    },
    {
      id: 'hotel-portal',
      title: 'Luxurious Hotel Website',
      description: 'A high-end booking portal with room rate comparisons, premium resort amenities guides, and responsive feedback panels.',
      category: 'Hospitality',
      image: 'https://picsum.photos/seed/hotel/640/400',
      demoUrl: '#contact',
      githubUrl: 'https://github.com',
      features: ['Room Availability Mock', 'Scenic Resort Gallery', 'Customer Review Hub'],
      techStack: ['React', 'Tailwind', 'Motion']
    },
    {
      id: 'consulting-landing',
      title: 'Business Landing Page',
      description: 'High-conversion, glowing single-page system built for a leading business consulting group, featuring lead-generation capture.',
      category: 'Corporate',
      image: 'https://picsum.photos/seed/corporate/640/400',
      demoUrl: '#contact',
      githubUrl: 'https://github.com',
      features: ['Glowing Hero Matrix', 'Lead Capture Form', 'Dynamic Clients Slider'],
      techStack: ['HTML5', 'Tailwind CSS', 'JavaScript']
    },
    {
      id: 'school-portal',
      title: 'Modern School Website',
      description: 'A functional, user-friendly informational portal for educational institutions featuring news, teacher profiles, and admissions guides.',
      category: 'Education',
      image: 'https://picsum.photos/seed/school/640/400',
      demoUrl: '#contact',
      githubUrl: 'https://github.com',
      features: ['Dynamic Notice Board', 'Admissions Form Query', 'Faculty Directory Card'],
      techStack: ['Bootstrap', 'Responsive Design', 'SEO']
    }
  ];

  const categories = ['all', 'Hospitality', 'E-Commerce', 'Corporate', 'Education'];

  const filteredProjects = projectsData.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  );

  return (
    <section id="projects" className="relative py-28 px-6 bg-slate-950 overflow-hidden">
      {/* Decorative Radial glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>EXQUISITE PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 capitalize border ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white border-cyan-400/20 shadow-[0_4px_15px_rgba(0,229,255,0.25)]'
                  : 'bg-slate-900/40 text-zinc-400 border-white/5 hover:text-white hover:border-white/10'
              }`}
            >
              {cat === 'all' ? 'All Masterpieces' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with Luxury Laptop Mockup Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="flex flex-col gap-5 relative group"
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
            >
              {/* Premium 3D Laptop Mockup Container */}
              <div className="relative w-full rounded-2xl bg-zinc-900/50 p-4 border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden group-hover:border-cyan-400/30 transition-all duration-500">
                {/* Glowing Aura inside card on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Laptop Display Bezel */}
                <div className="relative w-full aspect-[16/10] bg-black rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                  {/* Web Browser Tab Bar Mock */}
                  <div className="w-full h-7 bg-zinc-900/90 border-b border-white/5 flex items-center justify-between px-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    {/* Mock URL bar */}
                    <div className="w-1/2 h-4 bg-black/60 rounded-md border border-white/5 flex items-center justify-center text-[8px] text-zinc-500 font-mono tracking-wider overflow-hidden">
                      https://{project.id}.roadsidedeveloper.com
                    </div>
                    <div className="w-4 h-4" />
                  </div>

                  {/* Screenshot Image with high quality preview */}
                  <div className="relative w-full h-[calc(100%-28px)] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700 ease-out"
                    />
                    
                    {/* Dynamic Glare effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform pointer-events-none" />

                    {/* Dark Hover Overlay inside laptop screen */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <a
                        href={project.demoUrl}
                        className="p-3 rounded-full bg-cyan-400 text-black hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg shadow-cyan-400/20"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5 font-bold" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full bg-zinc-900 border border-white/10 text-white hover:scale-110 active:scale-95 transition-all duration-300"
                        title="GitHub Code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Laptop Keyboard Base Mock (Luxury UI 3D Detail) */}
                <div className="w-full h-2.5 bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-b-lg mt-2 relative border-t border-white/10 flex justify-center">
                  {/* Keyboard trackpad notch */}
                  <div className="w-16 h-[3px] bg-zinc-900 rounded-b" />
                </div>
              </div>

              {/* Project Meta Info */}
              <div className="px-1.5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400 font-bold bg-cyan-950/40 border border-cyan-400/10 px-2 py-0.5 rounded-md">
                    {project.category}
                  </span>
                  <div className="flex gap-1.5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] text-zinc-500 font-mono">
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-2.5">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Deliverables Bullet List */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feat) => (
                    <span
                      key={feat}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 text-zinc-300 text-xs border border-white/5"
                    >
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Action Buttons below */}
                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-xs tracking-wide hover:opacity-90 transition-opacity text-center flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/10"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Preview
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 rounded-xl bg-slate-900 border border-white/5 hover:border-white/10 text-zinc-300 hover:text-white font-semibold text-xs transition-colors flex items-center justify-center"
                    title="Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
