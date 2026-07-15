import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, GraduationCap, Award, Keyboard, BrainCircuit, User } from 'lucide-react';

interface StatCounterProps {
  end: number;
  suffix?: string;
  label: string;
  className?: string;
}

function StatCounter({ end, suffix = '', label, className = '' }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000; // 2 seconds
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            const currentCount = Math.floor(easeProgress * end);
            
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={elementRef} className={`text-center p-6 bg-slate-900/50 border border-white/5 rounded-2xl backdrop-blur-md relative overflow-hidden group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="text-3xl sm:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 mb-1">
        {count}{suffix}
      </div>
      <div className="text-zinc-500 text-xs sm:text-sm font-sans tracking-wide uppercase font-medium">{label}</div>
    </div>
  );
}

export default function About() {
  const skills = [
    { name: 'HTML5', category: 'frontend', level: 95, icon: 'HTML' },
    { name: 'CSS3', category: 'frontend', level: 90, icon: 'CSS' },
    { name: 'JavaScript', category: 'frontend', level: 92, icon: 'JS' },
    { name: 'React', category: 'frontend', level: 88, icon: 'React' },
    { name: 'Next.js', category: 'frontend', level: 82, icon: 'Next' },
    { name: 'Tailwind CSS', category: 'frontend', level: 95, icon: 'Tailwind' },
    { name: 'Bootstrap', category: 'frontend', level: 85, icon: 'Bootstrap' },
    { name: 'Responsive Design', category: 'frontend', level: 98, icon: 'Responsive' },
    { name: 'UI Design', category: 'frontend', level: 85, icon: 'UI' },
    { name: 'SEO', category: 'business', level: 80, icon: 'SEO' },
    { name: 'Git', category: 'tools', level: 86, icon: 'Git' },
    { name: 'GitHub', category: 'tools', level: 90, icon: 'GitHub' },
    { name: 'MS Word', category: 'tools', level: 95, icon: 'Word' },
    { name: 'MS Excel', category: 'tools', level: 90, icon: 'Excel' },
    { name: 'Typing (50 WPM)', category: 'tools', level: 100, icon: 'Typing' },
    { name: 'Internet Research', category: 'business', level: 95, icon: 'Research' },
  ];

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Web Dev & Design' },
    { id: 'tools', name: 'Software & Tools' },
    { id: 'business', name: 'SEO & Research' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="about" className="relative py-28 px-6 bg-slate-950 overflow-hidden">
      {/* Decorative Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-4">
            <User className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Bio text (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <BrainCircuit className="w-24 h-24 text-cyan-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="text-cyan-400 w-5 h-5 animate-pulse" />
                Empowering Digital Growth
              </h3>
              
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6">
                I am <span className="text-white font-semibold">Prince Kumar</span>, Founder of{' '}
                <span className="text-cyan-400 font-semibold font-mono">RoadsideDeveloper</span>. I help local and national businesses across India establish a dominant online presence through fast, modern, custom, and affordable websites.
              </p>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
                I specialize in crafting beautiful high-converting landing pages, dynamic restaurant sites, robust school portals, and business websites. I hold an Advanced Diploma in Computer Applications (<span className="text-violet-400 font-semibold">ADCA</span>) and am currently ongoing with my B.A. degree, focusing on bringing international web standards to the local market.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950/40 border border-white/5">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase">Education</h4>
                    <p className="text-white text-sm font-semibold">B.A. (Ongoing) & ADCA</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950/40 border border-white/5">
                  <div className="p-2.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400">
                    <Keyboard className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase">Keyboard Precision</h4>
                    <p className="text-white text-sm font-semibold">50 WPM Typing Speed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Counters Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <StatCounter end={150} suffix="+" label="Projects Completed" />
            <StatCounter end={120} suffix="+" label="Happy Clients" />
            <StatCounter end={15} suffix="+" label="Technologies" />
            <StatCounter end={3} suffix="+" label="Years Experience" />
            <StatCounter end={25} suffix="+" label="Key Skills" className="col-span-2" />
          </div>

        </div>

        {/* Futuristic Holographic Skills Showcase */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
            <Award className="text-violet-500 w-5 h-5" />
            Futuristic Skill Dashboard
          </h3>

          {/* Skill Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide border transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white border-cyan-400/20 shadow-[0_0_15px_rgba(0,229,255,0.2)]'
                    : 'bg-slate-900/50 text-zinc-400 border-white/5 hover:text-white hover:border-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Skills holographic grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="group relative p-4 rounded-2xl bg-slate-900/30 border border-white/5 backdrop-blur-sm overflow-hidden hover:border-cyan-500/30 shadow-lg hover:shadow-[0_0_20px_rgba(0,229,255,0.05)] transition-all duration-300 interactive-item"
              >
                {/* Neon glow back-lighting on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-cyan-400/5 rounded-full blur-xl group-hover:bg-cyan-400/10 transition-colors" />

                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-sm font-semibold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    {skill.level}%
                  </span>
                </div>

                {/* Cyberpunk progress line */}
                <div className="w-full h-1.5 rounded-full bg-zinc-950 p-[1px]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-600 shadow-[0_0_8px_#00E5FF] transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
