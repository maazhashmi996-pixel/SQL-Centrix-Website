"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, Users, ShieldCheck, Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function Solution() {
  const containerRef = useRef(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: true });

  const [isBgPlaying, setIsBgPlaying] = useState(true);
  const [isBgMuted, setIsBgMuted] = useState(true);

  // 3D Tilt Parallax Motion Values for the Main Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2deg", "2deg"]);

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

  const toggleBgPlay = () => {
    if (bgVideoRef.current) {
      if (isBgPlaying) {
        bgVideoRef.current.pause();
      } else {
        bgVideoRef.current.play();
      }
      setIsBgPlaying(!isBgPlaying);
    }
  };

  const toggleBgMute = () => {
    if (bgVideoRef.current) {
      bgVideoRef.current.muted = !isBgMuted;
      setIsBgMuted(!isBgMuted);
    }
  };

  return (
    <section 
      ref={containerRef}
      id="pross"
      className="py-28 lg:py-36 bg-white text-slate-900 relative overflow-hidden border-b border-slate-100 perspective-[1200px]"
    >
      {/* Absolute Background Video Covering the Entire Section (Light Theme Styled) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <video 
          ref={bgVideoRef}
          autoPlay 
          loop 
          muted={isBgMuted} 
          playsInline
          className="w-full h-full object-cover opacity-20 scale-105 filter blur-[1px]"
          src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-code-31951-large.mp4"
        />
        {/* Soft Light Overlay to keep background video subtle and maintain text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/95" />
      </div>

      {/* Background Floating Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ scale: [1, 1.05, 0.95, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full bg-gradient-to-tr from-amber-100/70 via-yellow-100/50 to-amber-200/30 blur-[130px] rounded-full"
        />
      </div>

      {/* Floating Controls for Background Video (Bottom Right Corner of Section) */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-slate-700 shadow-lg">
        <span className="text-[10px] font-mono tracking-wider text-slate-500 pr-1 hidden sm:inline">BG VIDEO</span>
        <button 
          onClick={toggleBgMute}
          className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Toggle Background Video Mute"
        >
          {isBgMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
        </button>
        <button 
          onClick={toggleBgPlay}
          className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Toggle Background Video Play"
        >
          {isBgPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
        </button>
      </div>

      {/* Main Container - Strictly Aligned with Navbar & Hero (max-w-7xl, px-6 lg:px-12) */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10">
        
        {/* Interactive 3D Tilt Parallax Main Card Wrapper */}
        <motion.div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center p-8 sm:p-12 lg:p-16 rounded-[2.5rem] bg-white/90 border border-slate-200/80 shadow-[0_20px_50px_rgba(245,158,11,0.06)] backdrop-blur-2xl relative overflow-hidden group"
        >
          
          {/* Dynamic Interactive Cursor Spotlight Effect */}
          <motion.div 
            className="absolute pointer-events-none -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            style={{
              background: useTransform(
                [spotlightX, spotlightY],
                ([latestX, latestY]) => `radial-gradient(500px circle at ${latestX}px ${latestY}px, rgba(245, 158, 11, 0.05), transparent 80%)`
              )
            }}
          />

          {/* Top Shimmer Border Accent */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 opacity-90 shadow-sm" />

          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 text-left space-y-6 relative z-10">
            
            {/* Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              The Solution (Brand Positioning)
            </motion.div>

            {/* Staggered Word Reveal Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12] flex flex-wrap gap-x-2.5 gap-y-1">
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
              className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
            >
              Generate{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 font-bold inline-block"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Qualified Leads
              </motion.span>{" "}
              that help your business grow.
            </motion.p>

            {/* Checkpoints list */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-3 pt-1"
            >
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <div className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 border border-amber-200">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Pre-vetted enterprise decision makers ready to buy</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <div className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 border border-amber-200">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Predictable pipeline velocity with zero waste</span>
              </div>
            </motion.div>

            {/* Action Button & Headline Card Combination */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4 space-y-4"
            >
              {/* Headline Ready to build a marketing system focused */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800">System Integration</span>
                  <p className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
                    Ready to build a marketing system focused
                  </p>
                </div>
                
                <motion.a
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-bold px-5 py-3 rounded-xl shadow-lg shadow-amber-500/25 transition-all duration-300 text-xs sm:text-sm group cursor-pointer shrink-0 whitespace-nowrap"
                >
                  <span>Book a Free Strategy Call</span>
                  <div className="w-5 h-5 rounded-lg bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </motion.a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Metric Dashboard Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.95, x: 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 relative z-10"
          >
            <div className="p-6 sm:p-7 rounded-[2rem] bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 backdrop-blur-2xl space-y-4 relative overflow-hidden">
              
              {/* Widget Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <motion.div 
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" 
                  />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800">Live Engine Metrics</span>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 font-bold border border-amber-200">Optimized</span>
              </div>

              {/* Data Card 1 */}
              <motion.div 
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.2 }}
                className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-medium">Pipeline Growth</p>
                    <p className="text-sm font-bold text-slate-900 tracking-tight">3.4x Average ROI</p>
                  </div>
                </div>
                <span className="text-xs text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">+32%</span>
              </motion.div>

              {/* Data Card 2 */}
              <motion.div 
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.2 }}
                className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-yellow-50 border border-yellow-200 flex items-center justify-center text-yellow-600">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-medium">Qualified Delivery</p>
                    <p className="text-sm font-bold text-slate-900 tracking-tight">100% Verified SQLs</p>
                  </div>
                </div>
                <span className="text-xs text-amber-600 font-bold bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-lg">Active</span>
              </motion.div>

              {/* Secure Footer Info */}
              <div className="flex items-center gap-2 pt-2 text-xs text-slate-500 border-t border-slate-100">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Enterprise compliance & data privacy assured</span>
              </div>

            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}