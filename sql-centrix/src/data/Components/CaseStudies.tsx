"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { caseStudiesData } from "@/src/data/caseStudiesData";
import { Sparkles, ArrowRight, TrendingUp, Award, Zap, CheckCircle2 } from "lucide-react";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 px-6 bg-gradient-to-b from-white via-purple-50/40 to-white relative overflow-hidden border-b border-purple-100/80">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7e22ce0a_1px,transparent_1px),linear-gradient(to_bottom,#7e22ce0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-purple-400/20 blur-[160px] rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 -right-32 w-[600px] h-[600px] bg-indigo-400/20 blur-[160px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Grid Layout: Left Sticky Header & Right Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Header & Global Impact Card */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
            <HeaderCopy />

            {/* Impact Summary Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 text-white space-y-6 shadow-2xl shadow-purple-950/30 relative overflow-hidden border border-purple-500/30 backdrop-blur-xl group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-purple-500/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-400" />

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/30 to-indigo-500/30 border border-purple-400/30 flex items-center justify-center text-purple-300 shadow-inner">
                <Award className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold tracking-tight">Ready to scale your brand?</h4>
                <p className="text-purple-200/80 text-sm leading-relaxed">
                  Let's design a custom growth roadmap tailored specifically for your business objectives.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-purple-800/60">
                <div className="flex items-center gap-2 text-xs text-purple-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Dedicated Growth Team & Strategy</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-purple-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Guaranteed Transparent Reporting</span>
                </div>
              </div>

              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-white hover:bg-purple-50 text-slate-900 font-bold text-sm shadow-xl transition-all duration-300 group/btn"
              >
                Book a Strategy Call 
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-purple-600" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Case Studies Cards Grid */}
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

// --- Extracted Header Component with Clean Typing Animation ---
function HeaderCopy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true }); 

  return (
    <div ref={ref} className="space-y-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md"
      >
        <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
        Proven Results
      </motion.div>

      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] flex flex-wrap gap-x-3 gap-y-1">
        {"Performance Systems Built for".split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
        {/* Gradient Words */}
        {["Global", "Partners"].map((word, index) => (
          <motion.span
            key={`gradient-${index}`}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.4, delay: (4 + index) * 0.05 }}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800"
          >
            {word}
          </motion.span>
        ))}
      </h2>

      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-slate-600 text-lg leading-relaxed"
      >
        Discover how our data-driven growth frameworks scale revenue and accelerate user acquisition with absolute precision.
      </motion.p>
    </div>
  );
}

// --- Case Study Card Component ---
function CaseStudyCard({ cs, idx }: { cs: any; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    margin: "-20% 0px -20% 0px",
    once: true,
  });

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 25 }}
      transition={{ duration: 0.4, delay: idx * 0.08 }}
      whileHover={{ 
        y: -8, 
        borderColor: "rgba(168, 85, 247, 0.5)",
        boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.18)"
      }}
      className="bg-white/90 hover:bg-white rounded-3xl p-8 border border-purple-100 shadow-[0_15px_30px_-10px_rgba(147,51,234,0.06)] backdrop-blur-xl flex flex-col justify-between space-y-6 group transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-purple-700 bg-purple-50/80 border border-purple-200/60 px-3.5 py-1.5 rounded-full shadow-sm">
            <Zap className="w-3 h-3 text-purple-600 animate-pulse" />
            {cs.industry}
          </span>
          <span className="text-xs font-bold text-purple-400 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
            #{String(idx + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors leading-snug tracking-tight">
          {isInView ? (
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="inline-block overflow-hidden whitespace-nowrap"
            >
              {cs.title}
            </motion.span>
          ) : (
            <span className="opacity-0">{cs.title}</span>
          )}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed">
          {cs.description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-purple-100 bg-gradient-to-br from-purple-50/60 to-indigo-50/30 px-4 rounded-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-white/40 pointer-events-none" />
        {cs.metrics.map((m: any, mIdx: number) => (
          <div key={mIdx} className="space-y-1 relative z-10">
            <div className="text-lg font-black text-purple-950 flex items-center gap-1.5 tracking-tight">
              <TrendingUp className="w-4 h-4 text-purple-600 shrink-0" />
              {m.value}
            </div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider leading-tight">{m.label}</div>
          </div>
        ))}
      </div>

      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href="#contact"
        className="w-full text-center flex items-center justify-center gap-2 bg-slate-900 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-3.5 px-4 rounded-2xl transition-all duration-300 text-xs shadow-lg shadow-slate-900/10 group/btn"
      >
        View Full Case Study 
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
      </motion.a>
    </motion.div>
  );
}