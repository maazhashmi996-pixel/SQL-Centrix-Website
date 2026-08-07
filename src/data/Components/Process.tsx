"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { 
  HiOutlineSearch, 
  HiOutlineSpeakerphone, 
  HiOutlineDocumentText, 
  HiOutlineShare, 
  HiOutlineBadgeCheck, 
  HiOutlineTemplate, 
  HiOutlineSparkles, 
  HiOutlineArrowRight, 
  HiOutlineCheckCircle, 
  HiOutlineGlobe 
} from "react-icons/hi";
import { RiPlaneLine } from "react-icons/ri";

const services = [
  {
    title: "Brand Positioning",
    desc: "Before customers buy from you. They need to trust you. We build memorable brands that create confidence from the very first interaction.",
    icon: HiOutlineBadgeCheck,
    tag: "Positioning",
    metrics: "Absolute Trust",
  },
  {
    title: "High-Converting Websites",
    desc: "Your website shouldn't just look good. It should educate visitors and build trust by answering the questions they are looking for and convert visitors into qualified enquiries.",
    icon: HiOutlineTemplate,
    tag: "Websites",
    metrics: "High Conversion",
  },
  {
    title: "Search Visibility",
    desc: "Customers can't buy from businesses they can't find. We improve your visibility across search engines and AI-powered search through structured content and technical excellence.",
    icon: HiOutlineSearch,
    tag: "Search & AI",
    metrics: "Enhanced Visibility",
  },
  {
    title: "Paid Media",
    desc: "Sometimes customers are already searching. We create paid advertising campaigns focused on attracting the right audience not just generating traffic.",
    icon: HiOutlineSpeakerphone,
    tag: "Acquisition",
    metrics: "Right Audience",
  },
  {
    title: "Content Strategy",
    desc: "People buy from businesses they understand. We develop content that educates, builds authority, and supports customers throughout their buying journey.",
    icon: HiOutlineDocumentText,
    tag: "Editorial",
    metrics: "Builds Authority",
  },
  {
    title: "Social Media & Community Growth",
    desc: "We create social media experiences that strengthen your reputation and keep your business visible where your audience spends their time.",
    icon: HiOutlineShare,
    tag: "Community",
    metrics: "Strong Reputation",
  },
  {
    title: "Authority Building",
    desc: "Strengthening your digital authority through strategic content, digital PR, guest posting, and Wikipedia consulting will help your business become a trusted name online.",
    icon: HiOutlineGlobe,
    tag: "Digital PR",
    metrics: "Trusted Name",
  },
];

const brands = [
  { name: "ACME Corp", color: "text-amber-600 hover:text-amber-700" },
  { name: "Apex Global", color: "text-yellow-600 hover:text-yellow-700" },
  { name: "Vortex AI", color: "text-amber-700 hover:text-amber-800" },
  { name: "Nexus Tech", color: "text-yellow-700 hover:text-yellow-800" },
  { name: "Synergy Labs", color: "text-amber-500 hover:text-amber-600" },
  { name: "Pioneer Media", color: "text-yellow-500 hover:text-yellow-600" },
  { name: "Zenith Group", color: "text-amber-800 hover:text-amber-900" },
  { name: "Quantum Systems", color: "text-yellow-800 hover:text-yellow-900" },
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
    <section ref={containerRef} id="process" className="py-6 bg-white text-slate-900 relative overflow-hidden border-b border-slate-100">
      
      {/* Background Soft Subtle Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isMounted &&
          [Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-amber-200/50 border border-amber-300/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.5, 0.2],
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-amber-100/60 via-yellow-100/30 to-transparent blur-[120px] pointer-events-none" />

      {/* Animated Scroll-Triggered Flying Airplane Element */}
      <motion.div
        style={{ x: airplaneX, y: airplaneY, rotate: airplaneRotate }}
        className="absolute top-20 left-0 z-20 pointer-events-none hidden md:flex items-center gap-3 filter drop-shadow-[0_10px_20px_rgba(245,158,11,0.2)]"
      >
        <div className="relative p-3 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-950 shadow-lg border border-amber-300/40">
          <RiPlaneLine className="w-6 h-6 transform -rotate-45" />
          <div className="absolute right-full top-1/2 -translate-y-1/2 w-24 h-1 bg-gradient-to-l from-amber-400 to-transparent blur-xs" />
        </div>
        <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-white border border-amber-200 text-amber-800 shadow-sm backdrop-blur-md">
          SQL Centrix Flight
        </span>
      </motion.div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider"
          >
            <HiOutlineSparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            Our High-Impact Framework
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]"
          >
            How We Generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600">Sales Qualified Leads</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base md:text-lg leading-relaxed font-normal"
          >
            Sales don't happen because of one marketing channel. They happen because every digital touchpoint works together. That's exactly how SQL Centrix operates.
          </motion.p>
        </div>

        {/* Modern Bento Grid UI - Light Theme */}
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
                className="bg-white p-8 rounded-[2.5rem] border border-slate-200/80 hover:border-amber-500/40 hover:bg-slate-50/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(245,158,11,0.08)]"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-500 group-hover:text-slate-950 transition-all duration-300 shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-slate-100 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200">
                    <HiOutlineCheckCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span>{item.metrics}</span>
                  </div>
                  
                  <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-500 group-hover:text-slate-950 group-hover:border-amber-500 group-hover:translate-x-1 transition-all duration-300">
                    <HiOutlineArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Moving Brands Marquee Row */}
        <div className="pt-8 border-t border-slate-200 overflow-hidden relative">
          <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap px-2">
              Trusted By
            </span>
            <div className="flex overflow-hidden w-full">
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
                    <span className="w-2 h-2 rounded-full bg-current opacity-60" />
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