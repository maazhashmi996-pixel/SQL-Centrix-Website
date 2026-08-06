"use client";
import React, { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, Users, ShieldCheck } from "lucide-react";

export default function Solution() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: true });

  // 3D Tilt Parallax Motion Values for the Main Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  // Spotlight Cursor Tracking Values
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
    
    spotlightX.set(mouseX);
    spotlightY.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      ref={containerRef}
      id="pross"
      className="py-36 px-6 bg-white text-slate-900 relative overflow-hidden border-b border-amber-500/20 perspective-[1200px]"
    >
      {/* Animated Ambient Background Glow Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3], x: [0, 30, 0], y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-amber-500/15 via-purple-500/10 to-transparent blur-[130px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Interactive 3D Tilt Parallax Main Card Wrapper */}
        <motion.div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center p-8 md:p-16 rounded-[2.5rem] bg-white/95 border border-amber-500/30 shadow-[0_30px_70px_rgba(245,158,11,0.1)] backdrop-blur-2xl relative overflow-hidden group"
        >
          
          {/* Dynamic Interactive Cursor Spotlight Effect */}
          <motion.div 
            className="absolute pointer-events-none -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            style={{
              background: useTransform(
                [spotlightX, spotlightY],
                ([latestX, latestY]) => `radial-gradient(500px circle at ${latestX}px ${latestY}px, rgba(245, 158, 11, 0.08), transparent 80%)`
              )
            }}
          />

          {/* Animated Top Shimmer Border Accent */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 via-purple-500 to-amber-600 opacity-90 shadow-sm" />

          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 text-left space-y-7 relative z-10">
            
            {/* Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              Brand Positioning & Growth
            </motion.div>

            {/* Staggered Word Reveal Main Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12] flex flex-wrap gap-x-2.5 gap-y-1">
              {"At SQL Centrix, every campaign is designed around one objective".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(6px)" }}
                  transition={{ duration: 0.5, delay: index * 0.03 + 0.15, ease: "easeOut" }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-slate-600 font-normal leading-relaxed"
            >
              Generate{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-purple-600 font-bold inline-block"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Qualified Leads
              </motion.span>{" "}
              that help your business grow.
            </motion.p>

            {/* Checkpoints list with smooth entry */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-3 pt-1"
            >
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Pre-vetted enterprise decision makers ready to buy</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Predictable pipeline velocity with zero waste</span>
              </div>
            </motion.div>

            {/* Magnetic Interactive Action Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.04, boxShadow: "0 20px 40px -10px rgba(245, 158, 11, 0.3)" }}
                whileTap={{ scale: 0.96 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-purple-600 to-amber-600 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/25 transition-all duration-300 text-sm md:text-base group cursor-pointer w-full sm:w-auto relative overflow-hidden border border-amber-300/30"
              >
                {/* Continuous Shimmer Overlay */}
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
                />
                
                <span>Book a Free Strategy Call</span>
                <div className="w-7 h-7 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </motion.a>
              <span className="text-xs text-slate-500 font-medium pl-1">No commitment required</span>
            </motion.div>

          </div>

          {/* Right Column: Interactive Live Metric Dashboard Mockup with Black & Purple Background + Yellow Glow Shadow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.95, x: 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 relative z-10"
          >
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-black via-slate-950 to-purple-950 text-white shadow-[0_0_50px_rgba(234,179,8,0.4),0_0_100px_rgba(168,85,247,0.2)] border border-amber-500/60 backdrop-blur-2xl space-y-6 relative overflow-hidden">
              
              {/* Internal Ambient Purple/Yellow Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/20 blur-[60px] pointer-events-none rounded-full" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-500/20 blur-[60px] pointer-events-none rounded-full" />

              {/* Widget Header */}
              <div className="flex items-center justify-between border-b border-purple-900/40 pb-4">
                <div className="flex items-center gap-2.5">
                  <motion.div 
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b]" 
                  />
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-200/80">Live Engine Metrics</span>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 font-semibold border border-amber-500/30">Optimized</span>
              </div>

              {/* Data Card 1 with Glass Effect & Hover */}
              <motion.div 
                whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 27, 75, 0.6)" }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between cursor-pointer shadow-inner backdrop-blur-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-purple-300/70 font-medium">Pipeline Growth</p>
                    <p className="text-lg font-bold text-white tracking-tight">3.4x Average ROI</p>
                  </div>
                </div>
                <span className="text-xs text-emerald-300 font-bold bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-1 rounded-lg">+32%</span>
              </motion.div>

              {/* Data Card 2 with Glass Effect & Hover */}
              <motion.div 
                whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 27, 75, 0.6)" }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between cursor-pointer shadow-inner backdrop-blur-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-purple-300/70 font-medium">Qualified Delivery</p>
                    <p className="text-lg font-bold text-white tracking-tight">100% Verified SQLs</p>
                  </div>
                </div>
                <span className="text-xs text-amber-300 font-bold bg-amber-500/10 border border-amber-500/40 px-2.5 py-1 rounded-lg">Active</span>
              </motion.div>

              {/* Secure Footer Info */}
              <div className="flex items-center gap-2 pt-2 text-xs text-purple-200/70 border-t border-purple-900/40">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Enterprise compliance & data privacy assured</span>
              </div>

            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}