"use client";
import React, { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, Target, Zap, ShieldCheck } from "lucide-react";

export default function Solution() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: true });

  // Mouse Parallax Glow Effect for the interactive wrapper card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

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
    <section 
      ref={containerRef}
        id="pross"
      className="py-36 px-6 bg-gradient-to-b from-white via-purple-50/60 to-white text-slate-900 text-center relative overflow-hidden border-b border-purple-100"
    >
      {/* Light Theme Background Decorative Grid Lines & Animated Glow Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7e22ce0a_1px,transparent_1px),linear-gradient(to_bottom,#7e22ce0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[400px] bg-gradient-to-r from-purple-300/40 via-violet-300/30 to-indigo-300/40 blur-[150px] rounded-full pointer-events-none"
      />

      {/* Floating Animated Side Badge: Precision Targeting */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-20 left-[12%] hidden lg:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 border border-purple-200/80 backdrop-blur-md text-xs text-purple-700 font-semibold shadow-xl shadow-purple-500/10"
      >
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Target className="w-4 h-4 text-purple-600" />
        </motion.div>
        <span>Precision Targeting</span>
      </motion.div>

      {/* Floating Animated Side Badge: Verified Pipeline */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-24 right-[12%] hidden lg:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 border border-purple-200/80 backdrop-blur-md text-xs text-purple-700 font-semibold shadow-xl shadow-purple-500/10"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <ShieldCheck className="w-4 h-4 text-purple-600" />
        </motion.div>
        <span>Verified Pipeline</span>
      </motion.div>

      {/* Main Interactive 3D Tilt Parallax Wrapper Card */}
      <motion.div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto space-y-10 p-8 md:p-14 rounded-[2.5rem] bg-white/95 border border-purple-100 shadow-[0_25px_60px_-15px_rgba(147,51,234,0.12)] backdrop-blur-2xl"
      >
        
        {/* Animated Top Shimmer Border */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 rounded-t-full opacity-80" />

        {/* Animated Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
          Brand Positioning & Growth
        </motion.div>

        {/* Main Heading with Staggered Word Reveal Animation */}
        <div className="space-y-2">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900 flex flex-wrap justify-center gap-x-3 gap-y-1">
            {"At SQL Centrix, every campaign is designed around one objective".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 25, filter: "blur(8px)" }}
                transition={{ duration: 0.6, delay: index * 0.04, ease: "easeOut" }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Highlight Subtitle with Smooth Fade-up */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          Generate{" "}
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 font-bold inline-flex items-center gap-1.5"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Zap className="w-5 h-5 text-purple-600 inline fill-purple-200" /> Qualified Leads
          </motion.span>{" "}
          that help your business scale faster.
        </motion.p>

        {/* Interactive Action Button with Magnetic Hover & Continuous Pulse Glow */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="pt-4 flex justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.06, boxShadow: "0 20px 45px -10px rgba(147, 51, 234, 0.3)" }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold px-9 py-5 rounded-2xl shadow-xl shadow-purple-600/25 transition-all duration-300 border border-purple-400/30 text-base group cursor-pointer relative overflow-hidden"
          >
            {/* Shimmer overlay effect on button */}
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
            />
            
            <span>Book a Free Strategy Call</span>
            <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
}