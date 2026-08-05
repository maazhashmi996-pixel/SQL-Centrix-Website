"use client";
import React, { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Phone, MapPin, Building2, ArrowRight, ShieldCheck, Clock } from "lucide-react";

export default function Footer() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.1, once: true });

  // 3D Parallax Tilt Effect setup for the contact card form container
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

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

  return (
    <footer 
      ref={containerRef}
      id="contact" 
      className="py-32 px-6 bg-gradient-to-b from-white via-purple-50/70 to-purple-100/50 relative overflow-hidden text-slate-900 border-t border-purple-100"
    >
      
      {/* Background Decorative Mesh Grid & Luxury Animated Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7e22ce0a_1px,transparent_1px),linear-gradient(to_bottom,#7e22ce0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3], x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-purple-300/30 blur-[150px] rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-indigo-300/30 blur-[160px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Trust Badges & Premium Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
                Get In Touch
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Let's discuss your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800">growth goals.</span>
              </h2>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Fill out the form and our executive strategy team will analyze your requirements and get in touch shortly.
              </p>
            </div>

            {/* Premium Contact Details Cards with Hover Micro-interactions */}
            <div className="space-y-3.5">
              
              <motion.div 
                whileHover={{ x: 6, borderColor: "rgba(168, 85, 247, 0.4)" }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/90 border border-purple-100 shadow-[0_10px_30px_rgba(147,51,234,0.05)] backdrop-blur-md cursor-pointer group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200/80 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Company Entity</div>
                  <div className="text-slate-900 font-bold text-sm md:text-base">SQL Centrix Pvt. Ltd.</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 6, borderColor: "rgba(168, 85, 247, 0.4)" }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/90 border border-purple-100 shadow-[0_10px_30px_rgba(147,51,234,0.05)] backdrop-blur-md cursor-pointer group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200/80 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Direct Phone</div>
                  <div className="text-slate-900 font-bold text-sm md:text-base">+92 320 6495098</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 6, borderColor: "rgba(168, 85, 247, 0.4)" }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/90 border border-purple-100 shadow-[0_10px_30px_rgba(147,51,234,0.05)] backdrop-blur-md cursor-pointer group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200/80 text-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Office Headquarters</div>
                  <div className="text-slate-900 text-sm leading-relaxed font-semibold">
                    House# 4, Ittehad Colony Allama Iqbal Town, Lahore, 54000
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Security & Response Guarantee Badge */}
            <div className="flex items-center gap-6 pt-2 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                <span>100% Confidentiality</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-600" />
                <span>24h Response Time</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Ultra-Modern 3D Tilt Form Container */}
          <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="bg-white/95 p-8 md:p-10 rounded-[2.5rem] border border-purple-100 shadow-[0_25px_60px_-15px_rgba(147,51,234,0.12)] backdrop-blur-2xl space-y-4 relative overflow-hidden"
            >
              
              {/* Shimmer Border Top Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 rounded-t-full" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">First Name*</label>
                  <input 
                    type="text" 
                    placeholder="John" 
                    className="w-full bg-purple-50/50 border border-purple-100 rounded-2xl p-3.5 text-slate-900 text-sm focus:outline-none focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 transition-all shadow-sm" 
                    required 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Last Name*</label>
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    className="w-full bg-purple-50/50 border border-purple-100 rounded-2xl p-3.5 text-slate-900 text-sm focus:outline-none focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 transition-all shadow-sm" 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address*</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-purple-50/50 border border-purple-100 rounded-2xl p-3.5 text-slate-900 text-sm focus:outline-none focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 transition-all shadow-sm" 
                    required 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number*</label>
                  <input 
                    type="tel" 
                    placeholder="+92 300 0000000" 
                    className="w-full bg-purple-50/50 border border-purple-100 rounded-2xl p-3.5 text-slate-900 text-sm focus:outline-none focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 transition-all shadow-sm" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Organization / Company</label>
                <input 
                  type="text" 
                  placeholder="Company Name (Optional)" 
                  className="w-full bg-purple-50/50 border border-purple-100 rounded-2xl p-3.5 text-slate-900 text-sm focus:outline-none focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 transition-all shadow-sm" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Message / Purpose*</label>
                <textarea 
                  rows={3} 
                  placeholder="Tell us about your project requirements and goals..." 
                  className="w-full bg-purple-50/50 border border-purple-100 rounded-2xl p-3.5 text-slate-900 text-sm focus:outline-none focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 transition-all shadow-sm resize-none" 
                  required
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(147, 51, 234, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-600 text-white font-bold py-4 rounded-2xl transition duration-300 text-base shadow-xl shadow-purple-600/25 flex items-center justify-center gap-3 group cursor-pointer relative overflow-hidden"
              >
                {/* Subtle button light shimmer stream */}
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                />

                <span>Speak With Our Team</span>
                <div className="w-7 h-7 rounded-xl bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </motion.button>
            </form>
          </motion.div>

        </div>

        {/* Bottom Copyright & Footer Note */}
        <div className="mt-20 pt-6 border-t border-purple-200/60 text-center text-slate-500 text-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} SQL Centrix Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-purple-600 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-purple-600 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-purple-600 cursor-pointer transition-colors">Security</span>
          </div>
        </div>

      </div>
    </footer>
  );
}