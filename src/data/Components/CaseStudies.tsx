"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useSpring, useTransform, animate } from "framer-motion";
import { caseStudiesData } from "@/src/data/caseStudiesData";
import { Sparkles, ArrowRight, TrendingUp, Award, Zap, CheckCircle2 } from "lucide-react";

// Reusable counter component for metrics inside case studies
function MetricCounter({ value }: { value: string }) {
  const numericVal = parseFloat(value.replace(/[^0-9.]/g, ""));
  const hasPlus = value.startsWith("+");
  const hasX = value.endsWith("x");
  const hasPercent = value.endsWith("%");

  const count = useSpring(0, { stiffness: 50, damping: 20 });
  const rounded = useTransform(count, (latest) => {
    if (value.includes(".")) {
      return latest.toFixed(1);
    }
    return Math.round(latest).toString();
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !isNaN(numericVal)) {
      animate(count, numericVal, { duration: 2.2, ease: "easeOut" });
    }
  }, [isInView, numericVal, count]);

  if (isNaN(numericVal)) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref} className="inline-flex items-center">
      {hasPlus && "+"}
      <motion.span>{rounded}</motion.span>
      {hasPercent && "%"}
      {hasX && "x"}
    </span>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 px-6 lg:px-20 bg-white text-slate-900 relative overflow-hidden border-b border-amber-500/20 selection:bg-amber-500 selection:text-slate-950">
      
      {/* Absolute Luxurious Light Ambient Backlights (Logo Yellow Theme) */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-yellow-400/5 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-amber-400/10 via-yellow-300/5 to-transparent blur-[140px] rounded-full pointer-events-none" />

      {/* Ultra-Fine Clean Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b12_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Grid Layout: Left Sticky Header & Right Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Header with 3D Perspective Flip Animation */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
            <HeaderCopy />

            {/* Premium Light-Theme Glass Impact Card */}
            <motion.div 
              initial={{ opacity: 0, rotateY: 25, x: -30 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformPerspective: 1000 }}
              className="p-8 rounded-[2.5rem] bg-white text-slate-900 space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden border border-amber-500/30 backdrop-blur-xl group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-yellow-400/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600" />

              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-300/80 flex items-center justify-center text-amber-600 shadow-sm">
                <Award className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold tracking-tight text-slate-900">Ready to scale your brand?</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Let's design a custom growth roadmap tailored specifically for your business objectives in Lahore and globally.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Dedicated Growth Team & Strategy</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Guaranteed Transparent Reporting</span>
                </div>
              </div>

              <motion.a 
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(245, 158, 11, 0.25)" }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-sm shadow-md transition-all duration-300 group/btn border border-amber-300 cursor-pointer"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Case Studies Cards with Unique Creative Scroll Reveals */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudiesData.map((cs, idx) => (
              <CaseStudyCard key={idx} cs={cs} idx={idx} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

// --- Header Copy Component ---
function HeaderCopy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true }); 

  return (
    <div ref={ref} className="space-y-4 text-left">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, y: -20 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: -20 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-md"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
        <span>Proven Results & Case Studies</span>
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(10px)" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]"
      >
        Performance Systems <br />
        Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 font-serif italic font-normal tracking-normal">Global</span> Partners.
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal"
      >
        Discover how our data-driven growth frameworks scale revenue and accelerate user acquisition with absolute precision.
      </motion.p>
    </div>
  );
}

// --- Case Study Card Component with Creative 3D Tilt & Diagonal Reveal Scroll Animation ---
function CaseStudyCard({ cs, idx }: { cs: any; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    margin: "-15% 0px -15% 0px",
    once: true,
  });

  // Unique diagonal and dynamic entrance direction based on index position
  const initialX = idx % 2 === 0 ? -60 : 60;
  const initialY = 50;

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, x: initialX, y: initialY, rotateZ: idx % 2 === 0 ? -3 : 3 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, rotateZ: 0 } : { opacity: 0, x: initialX, y: initialY, rotateZ: idx % 2 === 0 ? -3 : 3 }}
      transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        borderColor: "rgba(245, 158, 11, 0.6)",
        boxShadow: "0 30px 60px -15px rgba(245, 158, 11, 0.18)"
      }}
      className="bg-white rounded-[2.2rem] p-7 border border-amber-500/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)] backdrop-blur-xl flex flex-col justify-between space-y-6 group transition-all duration-300 relative overflow-hidden text-left"
    >
      {/* Top Gradient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-900 bg-amber-50 border border-amber-300/60 px-3 py-1 rounded-full shadow-xs">
            <Zap className="w-3 h-3 text-amber-600 animate-pulse" />
            {cs.industry}
          </span>
          <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/80">
            #{String(idx + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug tracking-tight">
          {cs.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed">
          {cs.description}
        </p>
      </div>

      {/* Metrics Container with Animated Counters */}
      <div className="grid grid-cols-2 gap-3 py-4 px-4 border border-amber-200/60 bg-gradient-to-br from-amber-50/40 via-white to-yellow-50/20 rounded-2xl relative overflow-hidden shadow-xs">
        <div className="absolute inset-0 bg-white/40 pointer-events-none" />
        {cs.metrics.map((m: any, mIdx: number) => (
          <div key={mIdx} className="space-y-1 relative z-10">
            <div className="text-xl font-black text-slate-950 flex items-center gap-1 tracking-tight font-mono">
              <TrendingUp className="w-4 h-4 text-amber-600 shrink-0" />
              <MetricCounter value={m.value} />
            </div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider leading-tight">{m.label}</div>
          </div>
        ))}
      </div>

      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href="#contact"
        className="w-full text-center flex items-center justify-center gap-2 bg-slate-900 hover:bg-gradient-to-r hover:from-amber-500 hover:to-yellow-400 hover:text-slate-950 text-white font-bold py-3.5 px-4 rounded-2xl transition-all duration-300 text-xs shadow-md group/btn cursor-pointer"
      >
        <span>View Full Case Study</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
      </motion.a>
    </motion.div>
  );
}