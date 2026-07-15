import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Briefcase, GraduationCap, Globe, ShieldCheck, CheckCircle2, ChevronRight, User } from 'lucide-react';

export default function Resume() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Triggering functional download of resume file (custom clean formatting)
  const handleDownload = () => {
    const resumeText = `=====================================================
                   PRINCE KUMAR
=====================================================
Founder: RoadsideDeveloper
Email: kprince4303@gmail.com
Phone: +91 8405918172
Location: Bihar, India
Website: https://roadsidedeveloper.com

-----------------------------------------------------
PROFESSIONAL SUMMARY
-----------------------------------------------------
Ambitious, skilled, and business-focused web designer 
and developer. Founder of RoadsideDeveloper, delivering 
premium, modern, and SEO-optimized web solutions to 
businesses across India. Specialized in responsive 
layouts, intuitive UI/UX design, and organic search growth.

-----------------------------------------------------
EDUCATION & CREDENTIALS
-----------------------------------------------------
- Bachelor of Arts (B.A.) - Ongoing
- Advanced Diploma in Computer Applications (ADCA)
  Comprehensive computer software operations and systems training.

-----------------------------------------------------
TECHNICAL SKILLS & COMPETENCIES
-----------------------------------------------------
- Web Development: HTML5, CSS3, JavaScript, React, Next.js, Bootstrap
- Styling Frameworks: Tailwind CSS
- Productivity Tools: MS Word, MS Excel, Data Entry
- Writing & Business: Copywriting, Internet Research
- Keyboard Precision: 50 WPM Typing Speed
- Other: Responsive Web Design, SEO Optimization, Portfolio Setup

-----------------------------------------------------
LANGUAGES
-----------------------------------------------------
- Hindi (Native/Fluent)
- English (Professional Working)

-----------------------------------------------------
CORE VALUES
-----------------------------------------------------
- Modern, clean, and luxurious visual appeal.
- Absolute transparency and affordable pricing.
- Prompt deliveries and friendly customer care.

=====================================================
Designed & Developed with Love by Prince Kumar
Founder of RoadsideDeveloper
=====================================================
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Prince_Kumar_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="resume" className="relative py-28 px-6 bg-slate-950 overflow-hidden">
      {/* Visual lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>QUALIFICATION SUMMARY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            Curriculum Vitae
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Resume Preview Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Description / Core highlights (4 cols) */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-cyan-400" />
                Professional Profile
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-white/5">
                  <h4 className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase mb-1">FOUNDER</h4>
                  <p className="text-white text-sm font-semibold">RoadsideDeveloper</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-white/5">
                  <h4 className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase mb-1">EDUCATION</h4>
                  <p className="text-white text-sm font-semibold">B.A. (Ongoing) & ADCA</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-white/5">
                  <h4 className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase mb-1">PRECISION KEYBOARDING</h4>
                  <p className="text-white text-sm font-semibold">50 WPM Typing Speed</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-white/5">
                  <h4 className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase mb-1">LANGUAGES</h4>
                  <div className="flex gap-2 mt-1">
                    <span className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 text-xs font-medium">Hindi</span>
                    <span className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 text-xs font-medium">English</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleDownload}
                className="w-full mt-6 py-4 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/10 active:scale-98"
              >
                <Download className="w-4 h-4 animate-bounce" />
                {downloadSuccess ? 'Resume Saved!' : 'Download Resume'}
              </button>
            </div>
          </div>

          {/* Right Tablet-like Resume Preview Card (8 cols) */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/30 border border-white/5 backdrop-blur-md shadow-2xl relative overflow-hidden flex flex-col justify-between">
              
              {/* Tablet screen border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-violet-600" />

              {/* Preview Body Header */}
              <div className="border-b border-white/5 pb-6 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black text-white">Prince Kumar</h3>
                  <p className="text-cyan-400 font-mono text-xs uppercase tracking-wider mt-0.5">
                    Founder of RoadsideDeveloper
                  </p>
                </div>
                <div className="text-left sm:text-right font-mono text-[10px] text-zinc-500">
                  <p>EMAIL: kprince4303@gmail.com</p>
                  <p>PHONE: +91 8405918172</p>
                </div>
              </div>

              {/* Resume Sections */}
              <div className="space-y-6">
                
                {/* Education section */}
                <div>
                  <h4 className="text-zinc-500 text-xs font-mono font-bold tracking-wider uppercase mb-3 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-violet-400" />
                    Education & Credentials
                  </h4>
                  <div className="space-y-3.5 pl-5 border-l border-white/5">
                    <div>
                      <div className="flex items-center justify-between">
                        <h5 className="text-sm font-semibold text-white">Bachelor of Arts (B.A.)</h5>
                        <span className="text-[10px] text-zinc-500 font-mono">Ongoing</span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">Focusing on modern business structures and local market demand across India.</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h5 className="text-sm font-semibold text-white">Advanced Diploma in Computer Applications (ADCA)</h5>
                        <span className="text-[10px] text-zinc-500 font-mono">Completed</span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">Specialized comprehensive coaching in systems, networks, design layout, and office automation tools.</p>
                    </div>
                  </div>
                </div>

                {/* Skills section */}
                <div>
                  <h4 className="text-zinc-500 text-xs font-mono font-bold tracking-wider uppercase mb-3 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    Key Competencies
                  </h4>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 pl-5 border-l border-white/5">
                    {[
                      'MS Word & Excel Mastery',
                      'High-Speed Data Entry',
                      'Internet Research Skills',
                      'SEO Copywriting & Keywords',
                      'Responsive Web Design',
                      'Modern UI Layout'
                    ].map((skillItem) => (
                      <div key={skillItem} className="flex items-center gap-2 text-zinc-300 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{skillItem}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quality line */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>© 2026 ROADSDIEDEVELOPER CO.</span>
                  <span>VERIFIED ORIGINAL DOCUMENT</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
