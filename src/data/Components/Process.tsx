"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Search, Megaphone, FileText, Share2, Award, Layout, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Brand Positioning & Identity",
    desc: "We build memorable enterprise brands that create absolute trust and authority from the very first visitor interaction.",
    icon: Award,
    tag: "Strategy",
    metrics: "99% Brand Recognition",
  },
  {
    title: "High-Converting Web Architecture",
    desc: "Lightning-fast, immersive websites engineered to educate visitors, answer critical objections, and capture qualified pipeline.",
    icon: Layout,
    tag: "Development",
    metrics: "3.4x Average Conversion",
  },
  {
    title: "Search Visibility & AI SEO",
    desc: "Dominate search engines and AI answer engines through rigorous technical optimization and authoritative content structures.",
    icon: Search,
    tag: "SEO & AI",
    metrics: "+240% Organic Traffic",
  },
  {
    title: "Targeted Paid Media Engines",
    desc: "Precision-targeted multi-channel ad campaigns designed strictly to attract high-intent buyers rather than empty clicks.",
    icon: Megaphone,
    tag: "Acquisition",
    metrics: "4.8x ROAS Average",
  },
  {
    title: "Strategic Content Marketing",
    desc: "Compelling editorial strategies that educate prospects, solve complex buyer problems, and shorten sales cycles.",
    icon: FileText,
    tag: "Editorial",
    metrics: "High Engagement",
  },
  {
    title: "Social Authority & Community",
    desc: "Active social presence and executive positioning that reinforces your reputation where key decision-makers spend time.",
    icon: Share2,
    tag: "Engagement",
    metrics: "Active Pipeline",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.1, once: true });

  return (
    <section id="process" className="py-32 px-6 bg-[#0B0F17] text-white relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-purple-600/15 via-indigo-600/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] pointer-events-none" />

      <div ref={containerRef} className="relative max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-purple-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            Our High-Impact Framework
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
          >
            How We Generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-200">Sales Qualified Leads</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg leading-relaxed font-normal"
          >
            Pipeline growth doesn't happen from a single isolated tactic. It requires every digital touchpoint to synchronize and drive predictable revenue.
          </motion.p>
        </div>

        {/* Modern Bento Grid UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white/[0.03] backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden flex flex-col justify-between group cursor-pointer shadow-2xl shadow-black/40"
              >
                {/* Subtle top light gradient line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    
                    {/* Icon Container */}
                    <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Tag Badge */}
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300">
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Metrics & Arrow */}
                <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-purple-300 bg-purple-500/10 px-3 py-1.5 rounded-xl border border-purple-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                    <span>{item.metrics}</span>
                  </div>
                  
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500 group-hover:translate-x-1 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}