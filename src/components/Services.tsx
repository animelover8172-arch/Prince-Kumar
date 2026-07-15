import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Layers, 
  Utensils, 
  GraduationCap, 
  Briefcase, 
  UserCheck, 
  RefreshCw, 
  Smartphone, 
  Wrench, 
  TrendingUp, 
  Sparkles, 
  CheckCircle,
  X 
} from 'lucide-react';
import { Service } from '../types';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const servicesData: Service[] = [
    {
      id: 'web-design',
      title: 'Website Design',
      description: 'Creating high-fidelity, tailor-made Figma mockups and modern web visual concepts designed specifically for your brand.',
      iconName: 'Palette',
      details: [
        'Custom Figma visual systems',
        'Wireframing & user flow definition',
        'Premium typography & asset pairing',
        'Interactive prototype reviews'
      ],
      features: ['Modern Swiss Aesthetics', 'Dark Mode Presets', 'High Conversion Focus']
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages',
      description: 'Ultra-optimized single-page sales funnels engineered for maximum conversion, speed, and business growth.',
      iconName: 'Layers',
      details: [
        'A/B tested copywriting architectures',
        'Stunning transition animations',
        'Lead capture form integration',
        'Optimized core web vitals'
      ],
      features: ['High-Velocity Rendering', 'Pixel Perfect Layouts', 'Integrated CTA Systems']
    },
    {
      id: 'restaurant-website',
      title: 'Restaurant Website',
      description: 'Immersive culinary digital experiences complete with interactive menus, online reservations, and elegant food galleries.',
      iconName: 'Utensils',
      details: [
        'Dynamic visual food menus',
        'Seamless Table Booking & reservation',
        'Google Maps local SEO setup',
        'Customer review dashboard integration'
      ],
      features: ['Image-heavy Lazy-Loading', 'Mobile-First Ordering ready', 'WhatsApp Ordering link']
    },
    {
      id: 'school-website',
      title: 'School Website',
      description: 'Professional, fully integrated portals for educational institutions featuring student records, news, and class info.',
      iconName: 'GraduationCap',
      details: [
        'Online admission application forms',
        'News, notices, and events board',
        'Curriculum and syllabus guides',
        'Contact lists & teacher directories'
      ],
      features: ['Extremely accessible UI', 'Fast loading documents', 'Parent info desk']
    },
    {
      id: 'business-website',
      title: 'Business Website',
      description: 'Premium corporate websites that establish absolute trust, represent core values, and capture high-value enterprise leads.',
      iconName: 'Briefcase',
      details: [
        'Corporate branding integration',
        'Services showcases & grids',
        'Testimonials & partner galleries',
        'Interactive contact desks'
      ],
      features: ['Awwwards-quality feel', 'Secure SSL configurations', 'Automated email alerts']
    },
    {
      id: 'portfolio-website',
      title: 'Portfolio Website',
      description: 'Showcase your personal brand or creative agency works with a luxury portfolio built to convert clients.',
      iconName: 'UserCheck',
      details: [
        'Cinematic 3D scrolling animations',
        'Dynamic filterable galleries',
        'Integrated downloadable resume systems',
        'Interactive micro-interactions'
      ],
      features: ['Awwwards-grade motion', 'Custom mouse trails', 'Staggered loading grids']
    },
    {
      id: 'website-redesign',
      title: 'Website Redesign',
      description: 'Transforming legacy, slow, or outdated web portals into fast, responsive, and luxurious digital assets.',
      iconName: 'RefreshCw',
      details: [
        'Full UI/UX audit & analysis',
        'Legacy data migration',
        'Extreme performance optimization',
        'SEO preservation strategy'
      ],
      features: ['Instant modern facelift', 'No downtime deployment', '80%+ Lighthouse score boost']
    },
    {
      id: 'responsive-design',
      title: 'Responsive Design',
      description: 'Adapting your web experience seamlessly to every size—ultra-wide desktops, standard laptops, tablets, and phones.',
      iconName: 'Smartphone',
      details: [
        'Mobile-first responsive architecture',
        'Incredibly smooth fluid layouts',
        'Optimized touch interactions',
        'Adaptive media and vectors'
      ],
      features: ['Cross-browser compatible', 'Fluid spacing & text sizing', '44px+ touch targets']
    },
    {
      id: 'website-maintenance',
      title: 'Website Maintenance',
      description: 'Continuous security audits, speed boosts, content updates, and server health checks keeping you online.',
      iconName: 'Wrench',
      details: [
        '24/7 server monitoring alerts',
        'Weekly asset & plugin backups',
        'Subtle content & text edits',
        'Immediate threat defense'
      ],
      features: ['99.99% uptime guarantee', 'Rapid ticketing support', 'Monthly health reports']
    },
    {
      id: 'seo-optimization',
      title: 'SEO Optimization',
      description: 'Rocketing your search engine rank. Schema markup, semantic speed ups, keyword targeting, and local map SEO.',
      iconName: 'TrendingUp',
      details: [
        'Complete technical SEO markup',
        'Google Search Console setup',
        'Sitemap & robots file generation',
        'Local Google Business listing boost'
      ],
      features: ['Organic traffic multipliers', 'Rich search snippets', 'Google Maps rank boost']
    }
  ];

  // Helper to map icon name to component
  const getIcon = (name: string) => {
    const props = { className: 'w-6 h-6 text-cyan-400 group-hover:scale-110 group-hover:text-violet-400 transition-all duration-300' };
    switch (name) {
      case 'Palette': return <Palette {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      case 'RefreshCw': return <RefreshCw {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Wrench': return <Wrench {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="relative py-28 px-6 bg-radial from-slate-950 via-black to-slate-950 overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[450px] h-[450px] bg-violet-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT I DO BEST</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            Premium Services
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-md shadow-lg hover:border-cyan-400/30 hover:shadow-[0_15px_30px_rgba(0,229,255,0.1)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between h-[280px] overflow-hidden interactive-card"
            >
              {/* Backglow glow lines */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center mb-6 group-hover:border-cyan-500/30 shadow-md group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all duration-300">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* View details button at bottom */}
              <div className="flex items-center gap-1.5 mt-4 text-[11px] font-mono font-bold tracking-widest text-cyan-400 group-hover:text-white uppercase transition-colors">
                <span>View Details</span>
                <span className="text-cyan-400 group-hover:translate-x-1.5 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            {/* Click backdrop to close */}
            <div className="absolute inset-0" onClick={() => setSelectedService(null)} />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-cyan-500/30 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,229,255,0.15)] z-10 backdrop-blur-xl overflow-hidden"
            >
              {/* Animated top lights */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-zinc-400 hover:text-white bg-slate-950 border border-white/5 hover:border-cyan-500/20 transition-all duration-300 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-cyan-500/20 flex items-center justify-center shadow-lg">
                  {getIcon(selectedService.iconName)}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {selectedService.title}
                  </h3>
                  <p className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase mt-0.5">
                    RoadsideDeveloper Standard
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                {selectedService.description}
              </p>

              {/* Deliverables / Scope */}
              <div className="mb-6">
                <h4 className="text-zinc-400 text-xs font-mono font-bold tracking-wider uppercase mb-3.5">
                  Scope of Delivery
                </h4>
                <div className="space-y-2.5">
                  {selectedService.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3 text-zinc-300 text-xs sm:text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features Tags */}
              <div>
                <h4 className="text-zinc-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
                  Highlights
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.features.map((feat, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-zinc-950 border border-white/10 text-zinc-300 text-[11px] font-medium"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-white/5 flex gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-950 text-zinc-400 hover:text-white font-semibold text-xs tracking-wide border border-white/5 hover:border-white/10 transition-colors"
                >
                  Close Window
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-xs tracking-wide hover:opacity-90 transition-opacity text-center flex items-center justify-center gap-1.5"
                >
                  Order Service
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
