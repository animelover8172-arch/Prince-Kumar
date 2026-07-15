import React from 'react';
import { Terminal, ArrowUp, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative py-12 px-6 bg-slate-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 z-10 relative">
        
        {/* Logo / Brand left */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 p-[1px] shadow-lg">
            <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <div>
            <p className="text-white text-xs font-bold font-sans">Prince Kumar</p>
            <p className="text-zinc-500 text-[9px] font-mono uppercase tracking-wider">RoadsideDeveloper</p>
          </div>
        </div>

        {/* Center Credits */}
        <div className="text-center">
          <p className="text-zinc-400 text-xs sm:text-sm font-sans tracking-wide">
            Designed & Developed with ❤️ by{' '}
            <span className="text-white font-semibold">Prince Kumar</span> | Founder of{' '}
            <span className="text-cyan-400 font-semibold font-mono">RoadsideDeveloper</span>
          </p>
          <p className="text-zinc-600 text-[10px] font-mono mt-1.5 uppercase tracking-widest">
            © 2026 RoadsideDeveloper Co. All rights reserved.
          </p>
        </div>

        {/* Scroll up right */}
        <button
          onClick={scrollToTop}
          className="group p-2.5 rounded-xl bg-slate-900 border border-white/5 hover:border-cyan-500/20 text-zinc-400 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-105"
          aria-label="Scroll back to top"
        >
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
