import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews: Testimonial[] = [
    {
      id: 'rev-1',
      name: 'Ramesh Singh',
      role: 'Owner',
      company: 'Raj Darbar Restaurant & Hotel',
      content: 'Prince developed our hotel website with absolute visual mastery! Our customers find the menus incredibly beautiful, and the table reservations have skyrocketed. Highly recommended!',
      rating: 5,
      avatar: 'https://picsum.photos/seed/avatar1/100/100'
    },
    {
      id: 'rev-2',
      name: 'Sunita Sharma',
      role: 'Marketing Lead',
      company: 'Deep Manglam Carpet',
      content: 'We needed a highly polished digital showroom for our hand-woven carpets. Prince delivered a custom catalog that looks better than top international agencies. Fantastic attention to detail!',
      rating: 5,
      avatar: 'https://picsum.photos/seed/avatar2/100/100'
    },
    {
      id: 'rev-3',
      name: 'Principal Amit Kumar',
      role: 'Director',
      company: 'Standard English School',
      content: 'Our new school website is incredibly fast, easy to navigate, and professional. It has simplified our admission notices and news sharing. RoadsideDeveloper is the best for education portals.',
      rating: 5,
      avatar: 'https://picsum.photos/seed/avatar3/100/100'
    },
    {
      id: 'rev-4',
      name: 'Vikram Aditya',
      role: 'Founder',
      company: 'Royal Spice Restaurant',
      content: 'The custom food menu transitions and Google Maps SEO designed by Prince has helped us reach 3x more local foot traffic! Unmatched speed and affordable rates.',
      rating: 5,
      avatar: 'https://picsum.photos/seed/avatar4/100/100'
    }
  ];

  // Auto slide loop
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section id="testimonials" className="relative py-28 px-6 bg-slate-950 overflow-hidden">
      {/* Visual glowing backg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CLIENT REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            Testimonials
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Slider Wrapper */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-between">
          
          {/* Subtle Decorative Quote Icon */}
          <div className="absolute top-6 right-6 opacity-5 pointer-events-none">
            <Quote className="w-24 h-24 text-cyan-400 rotate-180" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex-1 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating row */}
                <div className="flex gap-1 mb-6">
                  {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Feedback content */}
                <p className="text-zinc-200 text-base sm:text-lg italic leading-relaxed mb-8">
                  "{reviews[activeIndex].content}"
                </p>
              </div>

              {/* Client Info Row */}
              <div className="flex items-center justify-between gap-4 mt-4 pt-6 border-t border-white/5 flex-wrap">
                <div className="flex items-center gap-4">
                  {/* Avatar circle */}
                  <img
                    src={reviews[activeIndex].avatar}
                    alt={reviews[activeIndex].name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full border border-white/10 object-cover bg-zinc-950"
                  />
                  <div>
                    <h4 className="text-white text-sm font-bold font-sans">
                      {reviews[activeIndex].name}
                    </h4>
                    <p className="text-zinc-500 text-xs font-mono uppercase mt-0.5">
                      {reviews[activeIndex].role}, {reviews[activeIndex].company}
                    </p>
                  </div>
                </div>

                {/* Slider Manual Indicators / Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-xl text-zinc-400 hover:text-white bg-slate-950 border border-white/5 hover:border-cyan-500/20 transition-all cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-xl text-zinc-400 hover:text-white bg-slate-950 border border-white/5 hover:border-cyan-500/20 transition-all cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
