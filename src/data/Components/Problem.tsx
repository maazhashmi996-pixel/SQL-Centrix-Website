"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XCircle, AlertTriangle, Activity, Zap, CheckCircle2 } from "lucide-react";

const problems = [
  "Brand awareness is important",
  "Beautiful websites are important",
  "SEO is important",
  "Advertising is important",
  "Social media is important",
  "Content is important",
];

export default function Problem() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-36 px-6 bg-gradient-to-b from-white via-purple-50/60 to-white text-slate-900 border-b border-purple-200/90 relative overflow-hidden">
      
      {/* Background Animated Gradient Aurora Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-purple-500/20 via-indigo-600/15 to-rose-500/15 blur-[180px] rounded-full pointer-events-none"
      />

      {/* High-Contrast Interactive Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7c3aed18_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed18_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Dynamic Dark Connected Data Lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-80">
        <motion.path
          d="M 50 150 Q 350 50 650 250 T 1300 350"
          fill="none"
          stroke="url(#purpleRedGradient)"
          strokeWidth="3"
          strokeDasharray="10 10"
          animate={{ strokeDashoffset: [0, -120] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="purpleRedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#4f46e5" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative max-w-4xl mx-auto text-center space-y-16 z-10">
        
        {/* Section Header */}
        <div className="space-y-5">
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-purple-100/90 border-2 border-purple-300 text-purple-900 text-xs font-black uppercase tracking-widest shadow-md backdrop-blur-md"
          >
            <motion.span 
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }} 
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-2.5 h-2.5 rounded-full bg-purple-700 shadow-[0_0_12px_rgba(126,58,237,0.9)]"
            />
            <Activity className="w-4 h-4 text-purple-700" />
            Traditional Marketing Limits
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]"
          >
            The Reality of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-900">Marketing Channels</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-slate-700 text-lg md:text-xl max-w-xl mx-auto font-semibold"
          >
            We respect the channels, but we look past vanity metrics.
          </motion.p>
        </div>

        {/* Interactive Staggered Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          {problems.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div 
                key={idx}
                onHoverStart={() => setHoveredIdx(idx)}
                onHoverEnd={() => setHoveredIdx(null)}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.08, 
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5, 
                  boxShadow: "0 25px 45px -10px rgba(126, 58, 237, 0.25)",
                  borderColor: "rgba(126, 58, 237, 0.9)"
                }}
                whileTap={{ scale: 0.97 }}
                className={`relative flex items-center space-x-4 p-5 rounded-2xl bg-white border-2 transition-all duration-300 cursor-pointer overflow-hidden shadow-[0_10px_25px_-5px_rgba(126,58,237,0.08)] ${
                  isHovered ? "border-purple-600 bg-gradient-to-r from-purple-100/70 via-white to-white shadow-xl" : "border-purple-200"
                }`}
              >
                {/* Active Shimmer Glow Background Effect */}
                {isHovered && (
                  <motion.div 
                    layoutId="cardGlow"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-indigo-500/10 to-transparent pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}

                <motion.div 
                  whileHover={{ rotate: 25, scale: 1.2 }}
                  className="w-11 h-11 rounded-xl bg-rose-100/90 flex items-center justify-center flex-shrink-0 border-2 border-rose-200 shadow-inner relative z-10"
                >
                  <XCircle className="w-5 h-5 text-rose-600" />
                </motion.div>
                
                <span className="font-bold text-slate-900 text-sm md:text-base tracking-tight relative z-10">
                  {item}
                </span>

                {/* Animated Interactive Node Indicator */}
                <div className="ml-auto relative z-10 flex items-center justify-center">
                  <motion.div 
                    animate={{ 
                      scale: isHovered ? [1, 1.5, 1] : 1, 
                      backgroundColor: isHovered ? "#7c3aed" : "#94a3b8" 
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className={`w-2.5 h-2.5 rounded-full ${isHovered ? "shadow-[0_0_10px_rgba(126,58,237,1)]" : ""}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* High-Impact Alert Banner with Glowing Pulse */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.02, boxShadow: "0 30px 60px -15px rgba(244, 63, 94, 0.25)" }}
          className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-r from-rose-100 via-white to-rose-100 border-2 border-rose-400 text-rose-950 text-base md:text-lg font-black shadow-2xl shadow-rose-500/15 max-w-2xl mx-auto flex items-center justify-center gap-4 text-center backdrop-blur-md overflow-hidden group"
        >
          {/* Subtle Hover Pulse Lighting */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-transparent to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, -12, 0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 flex-shrink-0"
          >
            <div className="w-12 h-12 rounded-2xl bg-rose-200 border-2 border-rose-300 flex items-center justify-center shadow-inner">
              <AlertTriangle className="w-6 h-6 text-rose-700" />
            </div>
          </motion.div>
          
          <span className="relative z-10 tracking-tight text-slate-900">
            But none of them matter if they don't generate business.
          </span>
        </motion.div>

      </div>
    </section>
  );
}