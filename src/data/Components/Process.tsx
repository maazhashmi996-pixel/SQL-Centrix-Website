"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Search, Megaphone, FileText, Share2, Award, Layout, Sparkles, ArrowRight, CheckCircle2, Plane, Globe2 } from "lucide-react";

const services = [
  {
    title: "Brand Positioning",
    desc: "Before customers buy from you. They need to trust you. We build memorable brands that create confidence from the very first interaction.",
    icon: Award,
    tag: "Positioning",
    metrics: "Absolute Trust",
  },
  {
    title: "High-Converting Websites",
    desc: "Your website shouldn't just look good. It should educate visitors and build trust by answering the questions they are looking for and convert visitors into qualified enquiries.",
    icon: Layout,
    tag: "Websites",
    metrics: "High Conversion",
  },
  {
    title: "Search Visibility",
    desc: "Customers can't buy from businesses they can't find. We improve your visibility across search engines and AI-powered search through structured content and technical excellence.",
    icon: Search,
    tag: "Search & AI",
    metrics: "Enhanced Visibility",
  },
  {
    title: "Paid Media",
    desc: "Sometimes customers are already searching. We create paid advertising campaigns focused on attracting the right audience not just generating traffic.",
    icon: Megaphone,
    tag: "Acquisition",
    metrics: "Right Audience",
  },
  {
    title: "Content Strategy",
    desc: "People buy from businesses they understand. We develop content that educates, builds authority, and supports customers throughout their buying journey.",
    icon: FileText,
    tag: "Editorial",
    metrics: "Builds Authority",
  },
  {
    title: "Social Media & Community Growth",
    desc: "We create social media experiences that strengthen your reputation and keep your business visible where your audience spends their time.",
    icon: Share2,
    tag: "Community",
    metrics: "Strong Reputation",
  },
  {
    title: "Authority Building",
    desc: "Strengthening your digital authority through strategic content, digital PR, guest posting, and Wikipedia consulting will help your business become a trusted name online.",
    icon: Globe2,
    tag: "Digital PR",
    metrics: "Trusted Name",
  },
];

const brands = [
  { name: "ACME Corp", color: "text-indigo-400 hover:text-indigo-300" },
  { name: "Apex Global", color: "text-purple-400 hover:text-purple-300" },
  { name: "Vortex AI", color: "text-pink-400 hover:text-pink-300" },
  { name: "Nexus Tech", color: "text-amber-400 hover:text-amber-300" },
  { name: "Synergy Labs", color: "text-emerald-400 hover:text-emerald-300" },
  { name: "Pioneer Media", color: "text-cyan-400 hover:text-cyan-300" },
  { name: "Zenith Group", color: "text-rose-400 hover:text-rose-300" },
  { name: "Quantum Systems", color: "text-blue-400 hover:text-blue-300" },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.1, once: true });

  // Prevent SSR mismatch by checking if mounted on client
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Scroll Progress for the Flying Airplane Animation along the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const airplaneX = useTransform(scrollYProgress, [0, 1], ["-10vw", "105vw"]);
  const airplaneY = useTransform(scrollYProgress, [0, 0.5, 1], ["0vh", "35vh", "70vh"]);
  const airplaneRotate = useTransform(scrollYProgress, [0, 0.5, 1], [15, 25, 10]);

  return (
    <section ref={containerRef} id="process" className="py-6 px-6 bg-[#0B0F17] text-white relative overflow-hidden">
      
      {/* Background Darker Particles - Rendered only on Client Side to prevent Hydration Error */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isMounted &&
          [...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-indigo-950/70 border border-indigo-900/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0.15, 0.4, 0.15],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            />
          ))}
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-indigo-500/15 via-purple-500/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/10 blur-[150px] pointer-events-none" />

      {/* Animated Scroll-Triggered Flying Airplane Element */}
      <motion.div
        style={{ x: airplaneX, y: airplaneY, rotate: airplaneRotate }}
        className="absolute top-20 left-0 z-20 pointer-events-none hidden md:flex items-center gap-3 filter drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]"
      >
        <div className="relative p-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-xl border border-indigo-400/40">
          <Plane className="w-6 h-6 transform -rotate-45" />
          <div className="absolute right-full top-1/2 -translate-y-1/2 w-24 h-1 bg-gradient-to-l from-purple-500 to-transparent blur-xs" />
        </div>
        <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-slate-950/80 border border-indigo-500/40 text-purple-300 backdrop-blur-md">
          SQL Centrix Flight
        </span>
      </motion.div>

      <div className="relative max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md"
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
            How We Generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Sales Qualified Leads</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg leading-relaxed font-normal"
          >
            Sales don't happen because of one marketing channel. They happen because every digital touchpoint works together. That's exactly how SQL Centrix operates.
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
                className="bg-white/[0.03] backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 hover:border-indigo-500/50 hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden flex flex-col justify-between group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)]"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300 shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300">
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-purple-300 bg-purple-500/10 px-3 py-1.5 rounded-xl border border-purple-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                    <span>{item.metrics}</span>
                  </div>
                  
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-indigo-500 group-hover:translate-x-1 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Moving Brands Marquee Row */}
        <div className="pt-7 border-t border-white/10 overflow-hidden relative">
          <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#0B0F17] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#0B0F17] to-transparent z-10 pointer-events-none" />
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 whitespace-nowrap px-4">
              Trusted By
            </span>
            <div className="flex overflow-hidden w-full mask-linear">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-12 whitespace-nowrap min-w-max"
              >
                {[...brands, ...brands].map((brand, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2.5 transition-colors font-bold text-lg tracking-wider px-4 cursor-pointer ${brand.color}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current opacity-75" />
                    {brand.name}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}