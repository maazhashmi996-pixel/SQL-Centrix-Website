"use client";
import { motion } from "framer-motion";
import { XCircle, AlertTriangle } from "lucide-react";

const problems = [
  "Brand awareness is important",
  "Beautiful websites are important",
  "SEO is important",
  "Advertising is important",
  "Social media is important",
  "Content is important",
];

export default function Problem() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white via-purple-50/50 to-white text-slate-900 border-b border-purple-100/80 relative overflow-hidden">
      
      {/* Next-Level Background Ambient Pulsing Gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1], 
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-r from-purple-400/20 to-indigo-400/20 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto text-center space-y-16">
        
        {/* Header Section with Smooth Spring Animation */}
        <div className="space-y-5">
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-purple-100/80 border border-purple-200/80 text-purple-700 text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-md"
          >
            <motion.span 
              animate={{ scale: [1, 1.4, 1] }} 
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-purple-600"
            />
            Traditional Marketing Limits
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
          >
            The Reality of Marketing Channels
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-slate-600 text-lg md:text-xl max-w-xl mx-auto font-normal"
          >
            We respect the channels, but we look past vanity metrics.
          </motion.p>
        </div>

        {/* Staggered Grid Cards with Magnetic Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          {problems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.1, 
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -5, 
                boxShadow: "0 20px 30px -10px rgba(147, 51, 234, 0.15)",
                borderColor: "rgba(168, 85, 247, 0.5)"
              }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center space-x-4 p-5 rounded-2xl bg-white/90 border border-purple-100/80 shadow-[0_10px_25px_-5px_rgba(147,51,234,0.05)] backdrop-blur-md transition-colors duration-300 cursor-default"
            >
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0 border border-rose-100 shadow-inner"
              >
                <XCircle className="w-5 h-5 text-rose-500" />
              </motion.div>
              <span className="font-semibold text-slate-800 text-sm md:text-base tracking-tight">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Next-Level Alert Box with Floating Effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.02 }}
          className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-rose-50/90 via-white to-rose-50/90 border border-rose-200/90 text-rose-900 text-base md:text-lg font-semibold shadow-xl shadow-rose-500/5 max-w-2xl mx-auto flex items-center justify-center gap-4 text-center backdrop-blur-md"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <AlertTriangle className="w-7 h-7 text-rose-500 flex-shrink-0" />
          </motion.div>
          <span>But none of them matter if they don't generate business.</span>
        </motion.div>

      </div>
    </section>
  );
}