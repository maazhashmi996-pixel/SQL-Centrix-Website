"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Phone, MapPin, Building2, ShieldCheck, Clock, CheckCircle2, Send } from "lucide-react";

export default function Footer() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 3D Parallax Tilt Effect setup for the contact card form container
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["1.5deg", "-1.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-1.5deg", "1.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <footer 
      ref={containerRef}
      id="contact" 
      className="relative pt-19 pb-20 px-6 lg:px-20 bg-gradient-to-b from-white via-slate-50/80 to-indigo-50/30 overflow-hidden text-slate-900 border-t border-indigo-100/80 selection:bg-indigo-600 selection:text-white"
    >
      
      {/* Absolute Luxurious Light Ambient Backdrops matching the Blue/Purple/Pink Gradient Theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[550px] h-[550px] bg-gradient-to-br from-purple-200/50 via-indigo-100/40 to-transparent blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-pink-200/60 via-purple-100/30 to-transparent blur-[160px] rounded-full pointer-events-none" />

      {/* Ultra-Fine Clean Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#6366f10d_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Contact Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-20 border-b border-indigo-100/80">
          
          {/* Left Column: Scroll Animation from Left */}
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-indigo-50 border border-indigo-300 text-indigo-900 text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
                <span>SEND US A MESSAGE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Let's discuss your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 font-serif italic font-normal tracking-normal">
                  growth goals.
                </span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Fill out the form below, and our team will get in touch with you shortly to discuss your requirements and the best way to help your business grow.
              </p>
            </div>

            {/* Interactive Contact Cards */}
            <div className="space-y-4">
              {[
                { icon: Building2, title: "Company Entity", value: "SQL Centrix Pvt. Ltd.", isAddress: false },
                { icon: Phone, title: "Direct Phone", value: "+92 320 6495098", isAddress: false },
                { icon: MapPin, title: "Office Headquarters", value: "House# 4, Ittehad Colony Allama Iqbal Town, Lahore, 54000", isAddress: true }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div 
                    key={idx}
                    whileHover={{ 
                      x: 8, 
                      y: -3, 
                      scale: 1.01,
                      borderColor: "rgba(99, 102, 241, 0.5)",
                      backgroundColor: "rgba(255, 255, 255, 0.95)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex ${item.isAddress ? 'items-start' : 'items-center'} gap-4.5 p-5 rounded-2xl bg-white/90 border border-indigo-200/80 cursor-pointer group shadow-[0_10px_30px_rgba(99,102,241,0.04)] hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)] transition-all duration-300 backdrop-blur-xl`}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200/80 text-indigo-700 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-indigo-500 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                      <IconComponent className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{item.title}</div>
                      <div className={item.isAddress ? "text-slate-700 text-sm leading-relaxed font-semibold mt-0.5" : "text-slate-900 font-bold text-sm sm:text-base mt-0.5"}>
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links Row */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-widest">Social Links</div>
              <div className="flex items-center gap-3">
                {[
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/",
                    svg: (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                    )
                  },
                  {
                    label: "Linkedin",
                    href: "linkedin.com/feed",
                    svg: (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect width="4" height="12" x="2" y="9"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    )
                  },
                  {
                    label: "Facebook",
                    href: "https://www.facebook.com/",
                    svg: (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    )
                  },
                  {
                    label: "Tiktok",
                    href: "https://www.tiktok.com/en/",
                    svg: (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.13Z"/>
                      </svg>
                    )
                  },
                  {
                    label: "Youtube",
                    href: "https://www.youtube.com/",
                    svg: (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                        <path d="m10 15 5-3-5-3z"/>
                      </svg>
                    )
                  }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-white border border-indigo-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-400 flex items-center justify-center shadow-sm transition-colors"
                    aria-label={social.label}
                  >
                    {social.svg}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Security & Response Guarantee Badge */}
            <div className="flex items-center gap-6 pt-2 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-2 cursor-pointer">
                <ShieldCheck className="w-4 h-4 text-indigo-600 animate-pulse" />
                <span>100% Confidentiality</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <Clock className="w-4 h-4 text-indigo-600 animate-pulse" />
                <span>24h Response Time</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Scroll Animation from Right */}
          <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 80, scale: 0.95 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-white/95 backdrop-blur-2xl p-8 sm:p-12 rounded-[2.5rem] border border-indigo-200 shadow-[0_30px_70px_-15px_rgba(99,102,241,0.12)] space-y-6 relative overflow-hidden"
            >
              
              {/* Animated Glowing Shimmer Border Line at Top */}
              <motion.div 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 right-0 h-[4px] bg-[length:200%_auto] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
              />

              {/* Success Notification Banner */}
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-900 text-sm font-semibold flex items-center gap-3 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 animate-bounce" />
                  <span>Thank you! Your message has been received. We will contact you within 24 hours.</span>
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">First Name*</label>
                  <input 
                    type="text" 
                    placeholder="John" 
                    className="w-full bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 transition-all shadow-sm font-medium" 
                    required 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Last Name*</label>
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    className="w-full bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 transition-all shadow-sm font-medium" 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Email Address*</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 transition-all shadow-sm font-medium" 
                    required 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Phone Number*</label>
                  <input 
                    type="tel" 
                    placeholder="+92 300 0000000" 
                    className="w-full bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 transition-all shadow-sm font-medium" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Organization</label>
                <input 
                  type="text" 
                  placeholder="Company Name (Optional)" 
                  className="w-full bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 transition-all shadow-sm font-medium" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Purpose*</label>
                <input 
                  type="text" 
                  placeholder="Purpose of inquiry (e.g. Lead Generation, SEO, Website)" 
                  className="w-full bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 transition-all shadow-sm font-medium" 
                  required 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Message</label>
                <textarea 
                  rows={3} 
                  placeholder="Tell us about your project requirements and goals..." 
                  className="w-full bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 transition-all shadow-sm resize-none font-medium" 
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 28px 50px -12px rgba(99, 102, 241, 0.35)" }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4.5 px-6 rounded-2xl transition duration-300 text-sm shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3 group cursor-pointer relative overflow-hidden border border-indigo-400/40"
              >
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.8 }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                />

                <span>Speak With Our Team</span>
                <div className="w-7 h-7 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Send className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:-translate-y-1 group-hover:rotate-12" />
                </div>
              </motion.button>
            </form>
          </motion.div>

        </div>

        {/* Copyright & Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium gap-4">
          <div>&copy; {new Date().getFullYear()} SQL Centrix Pvt. Ltd. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
          </div>
        </div>

       </div>
    </footer>
  );
}