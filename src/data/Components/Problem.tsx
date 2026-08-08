"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { XCircle, AlertTriangle, Activity } from "lucide-react";

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
    <section className="py-36 px-6 bg-white text-slate-900 border-b border-yellow-500/20 relative overflow-hidden">
      
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-yellow-500/15 via-yellow-400/10 to-yellow-500/15 blur-[180px] rounded-full pointer-events-none"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#eab30815_1px,transparent_1px),linear-gradient(to_bottom,#eab30815_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center space-y-16 z-10">
        
        <div className="space-y-5">
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-900 text-xs font-black uppercase tracking-widest shadow-md backdrop-blur-md"
          >
            <motion.span 
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }} 
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-[0_0_12px_rgba(234,179,8,0.9)]"
            />
            <Activity className="w-4 h-4 text-yellow-600" />
            2. The Problem
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]"
          >
             <span className="text-yellow-500">The Problem</span>
          </motion.h2>
        </div>

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
                  boxShadow: "0 25px 45px -10px rgba(234, 179, 8, 0.2)",
                  borderColor: "rgba(234, 179, 8, 0.8)"
                }}
                whileTap={{ scale: 0.97 }}
                className={`relative flex items-center space-x-4 p-5 rounded-2xl bg-white border transition-all duration-300 cursor-pointer overflow-hidden shadow-md ${
                  isHovered ? "border-yellow-500 bg-gradient-to-r from-yellow-50/80 via-white to-white shadow-xl" : "border-slate-200"
                }`}
              >
                {isHovered && (
                  <motion.div 
                    layoutId="cardGlow"
                    className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-yellow-400/5 to-transparent pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}

                <motion.div 
                  whileHover={{ rotate: 25, scale: 1.2 }}
                  className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0 border border-rose-200 shadow-inner relative z-10"
                >
                  <XCircle className="w-5 h-5 text-rose-600" />
                </motion.div>
                
                <span className="font-bold text-slate-900 text-sm md:text-base tracking-tight relative z-10">
                  {item}
                </span>

                <div className="ml-auto relative z-10 flex items-center justify-center">
                  <motion.div 
                    animate={{ 
                      scale: isHovered ? [1, 1.5, 1] : 1, 
                      backgroundColor: isHovered ? "#eab308" : "#cbd5e1" 
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className={`w-2.5 h-2.5 rounded-full ${isHovered ? "shadow-[0_0_10px_rgba(234,179,8,1)]" : ""}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.02, boxShadow: "0 30px 60px -15px rgba(234, 179, 8, 0.25)" }}
          className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-r from-yellow-50 via-white to-yellow-50 border border-yellow-200 text-slate-900 text-base md:text-lg font-black shadow-2xl shadow-yellow-500/10 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-center backdrop-blur-md overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="flex items-center gap-4 justify-center">
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [0, -12, 0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 flex-shrink-0"
            >
              <div className="w-12 h-12 rounded-2xl bg-yellow-100 border border-yellow-300 flex items-center justify-center shadow-inner">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
              </div>
            </motion.div>
            
            <span className="relative z-10 tracking-tight text-slate-900">
              But none of them matter if they don't generate business.
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}