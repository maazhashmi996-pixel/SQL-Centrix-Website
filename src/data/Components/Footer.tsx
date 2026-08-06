"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Phone, MapPin, Building2, ShieldCheck, Clock, CheckCircle2, Send, Globe2, ArrowRight } from "lucide-react";

export default function Footer() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.1, once: true });
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
      className="relative pt-19 pb-20 px-6 lg:px-20 bg-gradient-to-b from-white via-slate-50/80 to-purple-50/30 overflow-hidden text-slate-900 border-t border-purple-100/80 selection:bg-purple-600 selection:text-white"
    >
      
      {/* Absolute Luxurious Light Ambient Backdrops */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(168,85,247,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[550px] h-[550px] bg-gradient-to-br from-indigo-200/50 via-purple-100/40 to-transparent blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-purple-200/60 via-pink-100/30 to-transparent blur-[160px] rounded-full pointer-events-none" />

      {/* Ultra-Fine Clean Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#7e22ce0d_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Contact Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-24 border-b border-purple-100/80">
          
          {/* Left Column: Heading, Trust Badges & Fluid Staggered Entrance */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1,
                },
              },
            }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: -15 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
                }}
                className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-purple-100/80 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
                <span>Get In Touch</span>
              </motion.div>

              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]"
              >
                Let's discuss your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 font-serif italic font-normal tracking-normal">
                  growth goals.
                </span>
              </motion.h2>

              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal"
              >
                Fill out the form and our executive strategy team in Lahore will analyze your requirements and get in touch within 24 hours.
              </motion.p>
            </div>

            {/* Interactive Contact Cards with Smooth Spring Hovers */}
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
                    variants={{
                      hidden: { opacity: 0, x: -30, y: 15 },
                      visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    whileHover={{ 
                      x: 8, 
                      y: -3, 
                      scale: 1.01,
                      borderColor: "rgba(168, 85, 247, 0.4)",
                      backgroundColor: "rgba(255, 255, 255, 0.95)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex ${item.isAddress ? 'items-start' : 'items-center'} gap-4.5 p-5 rounded-2xl bg-white/90 border border-purple-100/80 cursor-pointer group shadow-[0_10px_30px_rgba(147,51,234,0.04)] hover:shadow-[0_20px_40px_rgba(147,51,234,0.1)] transition-all duration-300 backdrop-blur-xl`}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200/60 text-purple-700 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 group-hover:rotate-6 transition-all duration-500 shadow-sm">
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

            {/* Security & Response Guarantee Badge */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="flex items-center gap-6 pt-2 text-xs font-semibold text-slate-500"
            >
              <motion.div whileHover={{ scale: 1.05, color: "#9333ea" }} className="flex items-center gap-2 cursor-pointer">
                <ShieldCheck className="w-4 h-4 text-purple-600 animate-pulse" />
                <span>100% Confidentiality</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, color: "#9333ea" }} className="flex items-center gap-2 cursor-pointer">
                <Clock className="w-4 h-4 text-purple-600 animate-pulse" />
                <span>24h Response Time</span>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right Column: Premium High-End White 3D Tilt Form Container */}
          <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.92, y: 40 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-white/95 backdrop-blur-2xl p-8 sm:p-12 rounded-[2.5rem] border border-purple-100 shadow-[0_30px_70px_-15px_rgba(147,51,234,0.12)] space-y-6 relative overflow-hidden"
            >
              
              {/* Animated Glowing Shimmer Border Line at Top */}
              <motion.div 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 right-0 h-[4px] bg-[length:200%_auto] bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500"
              />

              {/* Success Notification Banner with Scale Spring */}
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-purple-800 text-sm font-semibold flex items-center gap-3 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 animate-bounce" />
                  <span>Thank you! Your message has been received. We will contact you within 24 hours.</span>
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">First Name*</label>
                  <motion.input 
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    type="text" 
                    placeholder="John" 
                    className="w-full bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white focus:ring-4 focus:ring-purple-600/10 transition-all shadow-sm font-medium" 
                    required 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Last Name*</label>
                  <motion.input 
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    type="text" 
                    placeholder="Doe" 
                    className="w-full bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white focus:ring-4 focus:ring-purple-600/10 transition-all shadow-sm font-medium" 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Email Address*</label>
                  <motion.input 
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white focus:ring-4 focus:ring-purple-600/10 transition-all shadow-sm font-medium" 
                    required 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Phone Number*</label>
                  <motion.input 
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    type="tel" 
                    placeholder="+92 300 0000000" 
                    className="w-full bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white focus:ring-4 focus:ring-purple-600/10 transition-all shadow-sm font-medium" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Organization / Company</label>
                <motion.input 
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  type="text" 
                  placeholder="Company Name (Optional)" 
                  className="w-full bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white focus:ring-4 focus:ring-purple-600/10 transition-all shadow-sm font-medium" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Message / Purpose*</label>
                <motion.textarea 
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  rows={3} 
                  placeholder="Tell us about your project requirements and goals..." 
                  className="w-full bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white focus:ring-4 focus:ring-purple-600/10 transition-all shadow-sm resize-none font-medium" 
                  required
                ></motion.textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 28px 50px -12px rgba(147, 51, 234, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-700 hover:from-purple-500 hover:to-indigo-600 text-white font-bold py-4.5 px-6 rounded-2xl transition duration-300 text-sm shadow-xl shadow-purple-600/20 flex items-center justify-center gap-3 group cursor-pointer relative overflow-hidden"
              >
                {/* Continuous Moving Light Shimmer Stream */}
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.8 }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 pointer-events-none"
                />

                <span>Speak With Our Team</span>
                <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Send className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:-translate-y-1 group-hover:rotate-12" />
                </div>
              </motion.button>
            </form>
          </motion.div>

        </div>

       </div>
    </footer>
  );
}