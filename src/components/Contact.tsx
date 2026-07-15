import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  Instagram, 
  Twitter, 
  MessageCircle, 
  CheckCircle,
  Sparkles,
  ShieldCheck,
  Globe
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Simple clean validation
  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) errors.message = 'Message content is required';
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate high-quality API response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Auto close success alert after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', color: 'hover:text-[#0A66C2]' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com', color: 'hover:text-white' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com', color: 'hover:text-[#E1306C]' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://x.com', color: 'hover:text-[#1DA1F2]' },
    { name: 'WhatsApp', icon: <MessageCircle className="w-5 h-5" />, href: `https://wa.me/918405918172?text=Hello%20Prince%2C%20I%20am%20interested%20in%20your%20web%20services!`, color: 'hover:text-[#25D366]' },
  ];

  return (
    <section id="contact" className="relative py-28 px-6 bg-slate-950 overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CO-CREATE MASTERPIECES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Details Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-between">
              
              {/* Backglow element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <h3 className="text-2xl font-bold text-white mb-2 font-sans">
                  Prince Kumar
                </h3>
                <p className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-8">
                  FOUNDER OF ROADSIDEDEVELOPER
                </p>

                {/* Info Items List */}
                <div className="space-y-6">
                  
                  {/* Email */}
                  <a
                    href="mailto:kprince4303@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/40 border border-white/5 hover:border-cyan-500/20 transition-all group"
                  >
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase">Email Address</h4>
                      <p className="text-white text-sm font-semibold group-hover:text-cyan-300 transition-colors">kprince4303@gmail.com</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:8405918172"
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/40 border border-white/5 hover:border-violet-500/20 transition-all group"
                  >
                    <div className="p-2.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase">Phone Number</h4>
                      <p className="text-white text-sm font-semibold group-hover:text-violet-300 transition-colors">+91 8405918172</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/40 border border-white/5">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase">Location</h4>
                      <p className="text-white text-sm font-semibold">Bihar, India</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Social Channels row */}
              <div className="mt-10 pt-6 border-t border-white/5">
                <h4 className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase mb-4">Connect Socially</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-3 rounded-xl bg-slate-950 border border-white/10 text-zinc-400 ${social.color} hover:border-cyan-500/30 shadow-md hover:scale-108 transition-all`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Forms Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-slate-900/30 border border-white/5 backdrop-blur-md shadow-2xl relative overflow-hidden">
              
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Quick Consultation Desk
              </h3>

              {/* Success Notification */}
              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-3.5 text-emerald-300">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <div className="text-xs sm:text-sm font-sans font-medium">
                    Message sent successfully! Prince Kumar will contact you shortly.
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase text-zinc-500 tracking-wider mb-1.5 pl-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:ring-1 transition-all ${
                        formErrors.name ? 'border-red-500 focus:ring-red-500' : 'border-white/5 focus:border-cyan-400 focus:ring-cyan-400'
                      }`}
                      placeholder="e.g. Ramesh Singh"
                    />
                    {formErrors.name && <p className="text-[10px] text-red-500 font-mono mt-1 pl-1">{formErrors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase text-zinc-500 tracking-wider mb-1.5 pl-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:ring-1 transition-all ${
                        formErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/5 focus:border-cyan-400 focus:ring-cyan-400'
                      }`}
                      placeholder="e.g. name@example.com"
                    />
                    {formErrors.email && <p className="text-[10px] text-red-500 font-mono mt-1 pl-1">{formErrors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase text-zinc-500 tracking-wider mb-1.5 pl-1">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3.5 rounded-xl bg-slate-950 border border-white/5 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      placeholder="e.g. +91 8405918172"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase text-zinc-500 tracking-wider mb-1.5 pl-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full p-3.5 rounded-xl bg-slate-950 border border-white/5 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      placeholder="e.g. Website Redesign query"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase text-zinc-500 tracking-wider mb-1.5 pl-1">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full p-3.5 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:ring-1 transition-all resize-none ${
                      formErrors.message ? 'border-red-500 focus:ring-red-500' : 'border-white/5 focus:border-cyan-400 focus:ring-cyan-400'
                    }`}
                    placeholder="Describe your project, timeline, budget range..."
                  />
                  {formErrors.message && <p className="text-[10px] text-red-500 font-mono mt-1 pl-1">{formErrors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-ping' : ''}`} />
                  {isSubmitting ? 'Sending Request...' : 'Submit Message'}
                </button>

              </form>

              {/* Secure guarantee check */}
              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-wider mt-5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Encrypted secure connection</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
