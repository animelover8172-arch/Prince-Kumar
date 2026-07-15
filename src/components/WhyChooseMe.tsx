import React from 'react';
import { motion } from 'motion/react';
import { 
  DollarSign, 
  Layers, 
  Zap, 
  Smartphone, 
  Search, 
  Award, 
  HeartHandshake, 
  CheckCircle2, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { TimelineEvent } from '../types';

export default function WhyChooseMe() {
  const events: TimelineEvent[] = [
    {
      id: 'pricing',
      title: 'Affordable Pricing',
      subtitle: 'Starting from roadside startups to luxury businesses',
      description: 'Premium international-standard websites at rates designed to empower local businesses across India without breaking the bank.',
      iconName: 'DollarSign'
    },
    {
      id: 'modern-ui',
      title: 'Modern UI / UX',
      subtitle: 'Cinematic layout with gorgeous visual appeal',
      description: 'Stunning typography pairings, balanced padding, glassmorphic panels, and glowing custom indicators that captivate your audience.',
      iconName: 'Layers'
    },
    {
      id: 'delivery',
      title: 'Fast Delivery',
      subtitle: 'Prompt turnarounds, keeping you on schedule',
      description: 'Highly structured development pipelines ensuring your high-performance web asset goes live exactly when you need it.',
      iconName: 'Zap'
    },
    {
      id: 'responsive',
      title: 'Responsive Design',
      subtitle: 'A fluid look across all devices',
      description: 'Meticulously crafted fluid grids that scale beautifully from ultra-wide display screens down to standard smartphone touch targets.',
      iconName: 'Smartphone'
    },
    {
      id: 'seo-friendly',
      title: 'SEO Friendly',
      subtitle: 'Coded for organic Google visibility',
      description: 'Proper semantic tags, fast-loading clean code, meta header tags, and technical schemas designed to help you rank on Google maps.',
      iconName: 'Search'
    },
    {
      id: 'premium-quality',
      title: 'Premium Quality',
      subtitle: 'Zero compromises on code architecture',
      description: 'Strict modular codebases, optimized media loading, security firewalls, and pristine interactive elements for a luxurious feel.',
      iconName: 'Award'
    },
    {
      id: 'support',
      title: 'Friendly Support',
      subtitle: 'Long-term maintenance partnership',
      description: 'Prompt communication via WhatsApp, regular backups, security checkpoints, and continuous content updates with absolute peace of mind.',
      iconName: 'HeartHandshake'
    }
  ];

  const getIcon = (name: string) => {
    const props = { className: 'w-5 h-5 text-cyan-400 group-hover:text-white transition-colors duration-300' };
    switch (name) {
      case 'DollarSign': return <DollarSign {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Search': return <Search {...props} />;
      case 'Award': return <Award {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="why-choose-me" className="relative py-28 px-6 bg-slate-950 overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-violet-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>THE ROADSIDEDEVELOPER DIFFERENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            Why Choose Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Vertical Interactive Timeline */}
        <div className="relative border-l border-white/5 ml-4 sm:ml-32 md:ml-40">
          
          {/* Timeline Nodes */}
          {events.map((event, index) => (
            <div
              key={event.id}
              className="mb-14 sm:mb-16 last:mb-0 pl-8 sm:pl-10 relative group"
            >
              {/* Timeline Center Bullet Pin */}
              <div className="absolute top-1.5 -left-[17px] w-8 h-8 rounded-full bg-slate-950 border-2 border-white/10 group-hover:border-cyan-400 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all duration-300">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-cyan-400 transition-colors" />
              </div>

              {/* Responsive Date/Step Indicator (shown on left on medium+ screens) */}
              <div className="hidden sm:block absolute top-2 right-full mr-10 text-right w-24 md:w-32">
                <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-400/10 px-2 py-0.5 rounded-md">
                  STEP 0{index + 1}
                </span>
                <p className="text-[10px] text-zinc-500 font-mono mt-1 uppercase">GUARANTEE</p>
              </div>

              {/* Glass Card Details */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-md shadow-xl group-hover:border-cyan-500/20 group-hover:shadow-[0_10px_30px_rgba(0,229,255,0.05)] transition-all duration-300 relative overflow-hidden interactive-card">
                
                {/* Visual Glow Highlights */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-400/10 transition-all duration-500 pointer-events-none" />

                {/* Event Heading Row */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  
                  {/* Icon Circle */}
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center shadow-md group-hover:border-cyan-500/30 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all duration-300 shrink-0">
                    {getIcon(event.iconName)}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-zinc-500 text-xs sm:text-sm font-sans mt-0.5 font-medium">
                      {event.subtitle}
                    </p>
                  </div>
                </div>

                {/* Event Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Verification line */}
                <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>RoadsideDeveloper Verified Quality</span>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
