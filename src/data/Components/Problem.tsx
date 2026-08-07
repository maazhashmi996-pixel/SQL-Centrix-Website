// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { XCircle, AlertTriangle, Activity, Zap, CheckCircle2 } from "lucide-react";

// const problems = [
//   "Brand awareness is important",
//   "Beautiful websites are important",
//   "SEO is important",
//   "Advertising is important",
//   "Social media is important",
//   "Content is important",
// ];

// export default function Problem() {
//   const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

//   return (
//     <section className="py-36 px-6 bg-white text-slate-900 border-b border-amber-500/20 relative overflow-hidden">
      
//       {/* Background Animated Gradient Aurora Orbs aligned with gold/yellow palette */}
//       <motion.div 
//         animate={{ 
//           scale: [1, 1.3, 1], 
//           opacity: [0.3, 0.5, 0.3],
//           rotate: [0, 180, 360]
//         }}
//         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-amber-500/15 via-yellow-400/10 to-amber-600/15 blur-[180px] rounded-full pointer-events-none"
//       />

//       {/* High-Contrast Interactive Background Grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#eab30815_1px,transparent_1px),linear-gradient(to_bottom,#eab30815_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

//       {/* Dynamic Connected Data Lines SVG */}
//       <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
//         <motion.path
//           d="M 50 150 Q 350 50 650 250 T 1300 350"
//           fill="none"
//           stroke="url(#amberGoldGradient)"
//           strokeWidth="3"
//           strokeDasharray="10 10"
//           animate={{ strokeDashoffset: [0, -120] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//         />
//         <defs>
//           <linearGradient id="amberGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
//             <stop offset="50%" stopColor="#eab308" stopOpacity="0.7" />
//             <stop offset="100%" stopColor="#d97706" stopOpacity="0.9" />
//           </linearGradient>
//         </defs>
//       </svg>

//       <div className="relative max-w-4xl mx-auto text-center space-y-16 z-10">
        
//         {/* Section Header */}
//         <div className="space-y-5">
//           <motion.div 
//             initial={{ opacity: 0, y: -20, scale: 0.8 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-black uppercase tracking-widest shadow-md backdrop-blur-md"
//           >
//             <motion.span 
//               animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }} 
//               transition={{ duration: 1.8, repeat: Infinity }}
//               className="w-2.5 h-2.5 rounded-full bg-amber-600 shadow-[0_0_12px_rgba(245,158,11,0.9)]"
//             />
//             <Activity className="w-4 h-4 text-amber-600" />
//             Traditional Marketing Limits
//           </motion.div>

//           <motion.h2 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
//             className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]"
//           >
//             The Reality of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700">Marketing Channels</span>
//           </motion.h2>

//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
//             className="text-slate-600 text-lg md:text-xl max-w-xl mx-auto font-semibold"
//           >
//             We respect the channels, but we look past vanity metrics.
//           </motion.p>
//         </div>

//         {/* Interactive Staggered Grid Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
//           {problems.map((item, idx) => {
//             const isHovered = hoveredIdx === idx;
//             return (
//               <motion.div 
//                 key={idx}
//                 onHoverStart={() => setHoveredIdx(idx)}
//                 onHoverEnd={() => setHoveredIdx(null)}
//                 initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
//                 whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//                 viewport={{ once: true }}
//                 transition={{ 
//                   duration: 0.6, 
//                   delay: idx * 0.08, 
//                   ease: [0.21, 0.47, 0.32, 0.98] 
//                 }}
//                 whileHover={{ 
//                   scale: 1.03, 
//                   y: -5, 
//                   boxShadow: "0 25px 45px -10px rgba(245, 158, 11, 0.2)",
//                   borderColor: "rgba(245, 158, 11, 0.8)"
//                 }}
//                 whileTap={{ scale: 0.97 }}
//                 className={`relative flex items-center space-x-4 p-5 rounded-2xl bg-white border transition-all duration-300 cursor-pointer overflow-hidden shadow-md ${
//                   isHovered ? "border-amber-500 bg-gradient-to-r from-amber-50/80 via-white to-white shadow-xl" : "border-slate-200"
//                 }`}
//               >
//                 {/* Active Shimmer Glow Background Effect */}
//                 {isHovered && (
//                   <motion.div 
//                     layoutId="cardGlow"
//                     className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-transparent pointer-events-none"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   />
//                 )}

//                 <motion.div 
//                   whileHover={{ rotate: 25, scale: 1.2 }}
//                   className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0 border border-rose-200 shadow-inner relative z-10"
//                 >
//                   <XCircle className="w-5 h-5 text-rose-600" />
//                 </motion.div>
                
//                 <span className="font-bold text-slate-900 text-sm md:text-base tracking-tight relative z-10">
//                   {item}
//                 </span>

//                 {/* Animated Interactive Node Indicator */}
//                 <div className="ml-auto relative z-10 flex items-center justify-center">
//                   <motion.div 
//                     animate={{ 
//                       scale: isHovered ? [1, 1.5, 1] : 1, 
//                       backgroundColor: isHovered ? "#d97706" : "#cbd5e1" 
//                     }}
//                     transition={{ duration: 1, repeat: Infinity }}
//                     className={`w-2.5 h-2.5 rounded-full ${isHovered ? "shadow-[0_0_10px_rgba(217,119,6,1)]" : ""}`}
//                   />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* High-Impact Alert Banner with Glowing Pulse */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9, y: 30 }}
//           whileInView={{ opacity: 1, scale: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 200 }}
//           whileHover={{ scale: 1.02, boxShadow: "0 30px 60px -15px rgba(245, 158, 11, 0.25)" }}
//           className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-r from-amber-50 via-white to-amber-50 border border-amber-300 text-slate-900 text-base md:text-lg font-black shadow-2xl shadow-amber-500/10 max-w-2xl mx-auto flex items-center justify-center gap-4 text-center backdrop-blur-md overflow-hidden group"
//         >
//           {/* Subtle Hover Pulse Lighting */}
//           <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

//           <motion.div
//             animate={{ y: [0, -6, 0], rotate: [0, -12, 0, 12, 0] }}
//             transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
//             className="relative z-10 flex-shrink-0"
//           >
//             <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center shadow-inner">
//               <AlertTriangle className="w-6 h-6 text-amber-600" />
//             </div>
//           </motion.div>
          
//           <span className="relative z-10 tracking-tight text-slate-900">
//             But none of them matter if they don't generate business.
//           </span>

//         </motion.div>

//       </div>
//     </section>
//   );
// }


























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
    <section className="py-36 px-6 bg-white text-slate-900 border-b border-indigo-500/20 relative overflow-hidden">
      
      {/* Background Animated Gradient Aurora Orbs aligned with indigo/purple/pink palette */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-pink-500/15 blur-[180px] rounded-full pointer-events-none"
      />

      {/* High-Contrast Interactive Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f115_1px,transparent_1px),linear-gradient(to_bottom,#6366f115_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Dynamic Connected Data Lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
        <motion.path
          d="M 50 150 Q 350 50 650 250 T 1300 350"
          fill="none"
          stroke="url(#indigoPurpleGradient)"
          strokeWidth="3"
          strokeDasharray="10 10"
          animate={{ strokeDashoffset: [0, -120] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="indigoPurpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
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
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs font-black uppercase tracking-widest shadow-md backdrop-blur-md"
          >
            <motion.span 
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }} 
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-2.5 h-2.5 rounded-full bg-indigo-600 shadow-[0_0_12px_rgba(99,102,241,0.9)]"
            />
            <Activity className="w-4 h-4 text-indigo-600" />
            Traditional Marketing Limits
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]"
          >
            The Reality of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 font-serif italic font-normal tracking-normal">Marketing Channels</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-slate-600 text-lg md:text-xl max-w-xl mx-auto font-semibold"
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
                  boxShadow: "0 25px 45px -10px rgba(99, 102, 241, 0.2)",
                  borderColor: "rgba(99, 102, 241, 0.8)"
                }}
                whileTap={{ scale: 0.97 }}
                className={`relative flex items-center space-x-4 p-5 rounded-2xl bg-white border transition-all duration-300 cursor-pointer overflow-hidden shadow-md ${
                  isHovered ? "border-indigo-500 bg-gradient-to-r from-indigo-50/80 via-white to-white shadow-xl" : "border-slate-200"
                }`}
              >
                {/* Active Shimmer Glow Background Effect */}
                {isHovered && (
                  <motion.div 
                    layoutId="cardGlow"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent pointer-events-none"
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

                {/* Animated Interactive Node Indicator */}
                <div className="ml-auto relative z-10 flex items-center justify-center">
                  <motion.div 
                    animate={{ 
                      scale: isHovered ? [1, 1.5, 1] : 1, 
                      backgroundColor: isHovered ? "#9333ea" : "#cbd5e1" 
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className={`w-2.5 h-2.5 rounded-full ${isHovered ? "shadow-[0_0_10px_rgba(147,51,234,1)]" : ""}`}
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
          whileHover={{ scale: 1.02, boxShadow: "0 30px 60px -15px rgba(99, 102, 241, 0.25)" }}
          className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-r from-indigo-50 via-white to-purple-50 border border-indigo-200 text-slate-900 text-base md:text-lg font-black shadow-2xl shadow-indigo-500/10 max-w-2xl mx-auto flex items-center justify-center gap-4 text-center backdrop-blur-md overflow-hidden group"
        >
          {/* Subtle Hover Pulse Lighting */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, -12, 0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 flex-shrink-0"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 border border-indigo-300 flex items-center justify-center shadow-inner">
              <AlertTriangle className="w-6 h-6 text-indigo-600" />
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