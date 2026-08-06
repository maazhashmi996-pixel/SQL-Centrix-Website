// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, useSpring, useTransform, animate } from "framer-motion";
// import { ArrowUpRight, Sparkles, Shield, TrendingUp, Award, Layers } from "lucide-react";

// // Reusable animated number counter component
// function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
//   const count = useSpring(0, { stiffness: 60, damping: 20 });
//   const rounded = useTransform(count, (latest) => Math.round(latest));
//   const [displayValue, setDisplayValue] = useState(0);

//   useEffect(() => {
//     const controls = animate(count, value, { duration: 2.5, ease: "easeOut" });
//     return controls.stop;
//   }, [count, value]);

//   useEffect(() => {
//     return rounded.on("change", (v) => {
//       setDisplayValue(v);
//     });
//   }, [rounded]);

//   return (
//     <span>
//       {displayValue}
//       {suffix}
//     </span>
//   );
// }

// export default function Hero() {
//   return (
//     <section className="relative h-screen w-full flex items-center justify-center bg-[#030305] text-white px-6 lg:px-20 overflow-hidden selection:bg-amber-500 selection:text-slate-950">
      
//       {/* Absolute Luxurious Mesh Gradients & Backlights aligned with gold/yellow logo palette */}
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-amber-600/25 via-yellow-500/15 to-amber-400/10 blur-[200px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-950/20 blur-[180px] rounded-full pointer-events-none" />

//       {/* Ultra-Fine Luxury Dot Grid */}
//       <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

//       <div className="relative max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
//         {/* Left Column: High-End Editorial Typography */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
//           className="lg:col-span-7 space-y-6 lg:space-y-8 text-left"
//         >
          
//           {/* Premium Glowing Badge */}
//           <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-gradient-to-r from-amber-950/80 via-slate-900 to-slate-900 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(234,179,8,0.15)] backdrop-blur-md">
//             <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: "10s" }} />
//             <span>SQL Centrix &bull; Growth Partner</span>
//           </div>

//           <div className="space-y-4">
//             <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96]">
//               ARCHITECTING <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 font-serif italic font-normal tracking-normal">
//                 unrivaled
//               </span> <br />
//               DIGITAL EMPIRES.
//             </h1>

//             <p className="text-slate-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
//               We design and execute elite SEO frameworks, high-converting performance ads, and breathtaking web experiences for category-defining brands.
//             </p>
//           </div>

//           {/* Action CTAs with Glass & Glow */}
//           <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
//             <motion.a
//               whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(234, 179, 8, 0.45)" }}
//               whileTap={{ scale: 0.97 }}
//               href="#contact"
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-950 font-bold px-7 py-4 rounded-2xl shadow-xl shadow-amber-950/40 transition-all duration-300 group border border-amber-300/30 text-sm sm:text-base cursor-pointer relative overflow-hidden"
//             >
//               <motion.div 
//                 animate={{ x: ["-100%", "200%"] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
//                 className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
//               />
//               <span>Secure Your Strategy Session</span>
//               <div className="w-7 h-7 rounded-xl bg-slate-950/10 flex items-center justify-center group-hover:bg-slate-950/20 transition-colors">
//                 <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
//               </div>
//             </motion.a>

//             <motion.a
//               whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(234, 179, 8, 0.4)" }}
//               whileTap={{ scale: 0.97 }}
//               href="https://my-portfolio-beige-gamma-24.vercel.app/"
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/80 text-slate-200 font-semibold px-6 py-4 rounded-2xl transition-all duration-300 border border-slate-800 backdrop-blur-md text-sm sm:text-base cursor-pointer"
//             >
//               <span>Explore Portfolio</span>
//             </motion.a>
//           </div>

//           {/* Micro Trust Proof with Animated Counters */}
//           <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-800/80 max-w-lg text-left">
//             <div>
//               <div className="text-xl sm:text-2xl font-black text-white font-mono">
//                 +<Counter value={340} suffix="%" />
//               </div>
//               <div className="text-[11px] text-slate-400 font-medium mt-0.5">Pipeline Velocity</div>
//             </div>
//             <div>
//               <div className="text-xl sm:text-2xl font-black text-white font-mono">
//                 <Counter value={4} />.<Counter value={8} />x
//               </div>
//               <div className="text-[11px] text-slate-400 font-medium mt-0.5">Average ROAS</div>
//             </div>
//             <div>
//               <div className="text-xl sm:text-2xl font-black text-white font-mono">
//                 <Counter value={99} />.<Counter value={4} />%
//               </div>
//               <div className="text-[11px] text-slate-400 font-medium mt-0.5">Retention Rate</div>
//             </div>
//           </div>

//         </motion.div>

//         {/* Right Column: Ultra-Premium Glassmorphic Showcase Card */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.92, y: 30 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
//           className="lg:col-span-5 relative"
//         >
//           <div className="relative p-3 rounded-[2.5rem] bg-gradient-to-tr from-amber-600/40 via-yellow-500/20 to-slate-900 shadow-[0_0_60px_rgba(234,179,8,0.2)] border border-amber-500/30 backdrop-blur-2xl">
//             <div className="bg-[#080a12]/95 backdrop-blur-3xl rounded-[2rem] p-6 sm:p-7 space-y-4 relative overflow-hidden shadow-2xl">
              
//               {/* Internal Glow Effect */}
//               <div className="absolute -top-20 -right-20 w-44 h-44 bg-amber-500/20 blur-[70px] pointer-events-none rounded-full" />

//               {/* Card Header */}
//               <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/30">
//                     <TrendingUp className="w-4 h-4 animate-pulse" />
//                   </div>
//                   <div>
//                     <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide">Live Growth Pipeline</h3>
//                     <p className="text-[10px] text-slate-400">SQL Centrix Intelligence Hub</p>
//                   </div>
//                 </div>
//                 <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold">
//                   SECURE
//                 </span>
//               </div>

//               {/* Visual Mini Metrics List */}
//               <div className="space-y-3">
//                 <motion.div 
//                   whileHover={{ scale: 1.02, x: 4 }}
//                   className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-850 flex items-center justify-between"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
//                       <Shield className="w-3.5 h-3.5" />
//                     </div>
//                     <div>
//                       <div className="text-xs font-bold text-white">Technical SEO Architecture</div>
//                       <div className="text-[10px] text-slate-400">Top-tier search rankings achieved</div>
//                     </div>
//                   </div>
//                   <span className="text-xs font-bold text-amber-400 font-mono">Rank #1</span>
//                 </motion.div>

//                 <motion.div 
//                   whileHover={{ scale: 1.02, x: 4 }}
//                   className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-850 flex items-center justify-between"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold">
//                       <Award className="w-3.5 h-3.5" />
//                     </div>
//                     <div>
//                       <div className="text-xs font-bold text-white">PPC Ad Scaling</div>
//                       <div className="text-[10px] text-slate-400">Cost-per-acquisition minimized</div>
//                     </div>
//                   </div>
//                   <span className="text-xs font-bold text-yellow-400 font-mono">4.8x ROAS</span>
//                 </motion.div>

//                 <motion.div 
//                   whileHover={{ scale: 1.02, x: 4 }}
//                   className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-850 flex items-center justify-between"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-lg bg-amber-600/20 text-amber-500 flex items-center justify-center font-bold">
//                       <Layers className="w-3.5 h-3.5" />
//                     </div>
//                     <div>
//                       <div className="text-xs font-bold text-white">UI/UX Web Engineering</div>
//                       <div className="text-[10px] text-slate-400">High-converting luxury interfaces</div>
//                     </div>
//                   </div>
//                   <span className="text-xs font-bold text-amber-500 font-mono">99.4% Conv</span>
//                 </motion.div>
//               </div>

//               {/* Card Footer Status */}
//               <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
//                 <span>SYSTEM STATUS: OPTIMAL</span>
//                 <span className="text-emerald-400 flex items-center gap-1">
//                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
//                   LIVE
//                 </span>
//               </div>

//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }










"use client";
import React, { useState, useEffect } from "react";
import { motion, useSpring, useTransform, animate } from "framer-motion";
import { ArrowUpRight, Sparkles, Shield, TrendingUp, Award, Layers } from "lucide-react";

// Reusable animated number counter component
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useSpring(0, { stiffness: 60, damping: 20 });
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, { duration: 2.5, ease: "easeOut" });
    return controls.stop;
  }, [count, value]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      setDisplayValue(v);
    });
  }, [rounded]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#030305] text-white px-6 lg:px-20 py-24 overflow-hidden selection:bg-amber-500 selection:text-slate-950">
      
      {/* Absolute Luxurious Mesh Gradients & Backlights aligned with gold/yellow logo palette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-amber-600/25 via-yellow-500/15 to-amber-400/10 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-950/20 blur-[180px] rounded-full pointer-events-none" />

      {/* Ultra-Fine Luxury Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Official Content & Editorial Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6 lg:space-y-8 text-left"
        >
          
          {/* Premium Glowing Badge */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-gradient-to-r from-amber-950/80 via-slate-900 to-slate-900 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(234,179,8,0.15)] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: "10s" }} />
            <span>SQL Centrix &bull; Growth Partner</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96]">
              NOTHING BUT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 font-serif italic font-normal tracking-normal">
                Sales Qualified
              </span> <br />
              LEADS.
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              At SQL Centrix, every strategy, campaign, website, advertisement, and piece of content has one objective: Bringing your business, qualified opportunities that convert into revenue. Marketing is the process. SQL’s are the results. At SQL Centrix the results are our starting point.
            </p>
          </div>

          {/* Action CTAs with Glass & Glow */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
            <motion.a
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(234, 179, 8, 0.45)" }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-950 font-bold px-7 py-4 rounded-2xl shadow-xl shadow-amber-950/40 transition-all duration-300 group border border-amber-300/30 text-sm sm:text-base cursor-pointer relative overflow-hidden"
            >
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
              />
              <span>Get Your Free Growth Strategy</span>
              <div className="w-7 h-7 rounded-xl bg-slate-950/10 flex items-center justify-center group-hover:bg-slate-950/20 transition-colors">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(234, 179, 8, 0.4)" }}
              whileTap={{ scale: 0.97 }}
              href="https://my-portfolio-beige-gamma-24.vercel.app/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/80 text-slate-200 font-semibold px-6 py-4 rounded-2xl transition-all duration-300 border border-slate-800 backdrop-blur-md text-sm sm:text-base cursor-pointer"
            >
              <span>Explore Portfolio</span>
            </motion.a>
          </div>

          {/* Micro Trust Proof with Animated Counters */}
          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-800/80 max-w-lg text-left">
            <div>
              <div className="text-xl sm:text-2xl font-black text-white font-mono">
                +<Counter value={340} suffix="%" />
              </div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">Pipeline Velocity</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white font-mono">
                <Counter value={4} />.<Counter value={8} />x
              </div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">Average ROAS</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white font-mono">
                <Counter value={99} />.<Counter value={4} />%
              </div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">Retention Rate</div>
            </div>
          </div>

        </motion.div>

        {/* Right Column: Ultra-Premium Glassmorphic Showcase Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative p-3 rounded-[2.5rem] bg-gradient-to-tr from-amber-600/40 via-yellow-500/20 to-slate-900 shadow-[0_0_60px_rgba(234,179,8,0.2)] border border-amber-500/30 backdrop-blur-2xl">
            <div className="bg-[#080a12]/95 backdrop-blur-3xl rounded-[2rem] p-6 sm:p-7 space-y-4 relative overflow-hidden shadow-2xl">
              
              {/* Internal Glow Effect */}
              <div className="absolute -top-20 -right-20 w-44 h-44 bg-amber-500/20 blur-[70px] pointer-events-none rounded-full" />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/30">
                    <TrendingUp className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide">Live Growth Pipeline</h3>
                    <p className="text-[10px] text-slate-400">SQL Centrix Intelligence Hub</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold">
                  SECURE
                </span>
              </div>

              {/* Visual Mini Metrics List */}
              <div className="space-y-3">
                <motion.div 
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-850 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                      <Shield className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Technical SEO Architecture</div>
                      <div className="text-[10px] text-slate-400">Top-tier search rankings achieved</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-400 font-mono">Rank #1</span>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-850 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">PPC Ad Scaling</div>
                      <div className="text-[10px] text-slate-400">Cost-per-acquisition minimized</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-yellow-400 font-mono">4.8x ROAS</span>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-850 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-600/20 text-amber-500 flex items-center justify-center font-bold">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">UI/UX Web Engineering</div>
                      <div className="text-[10px] text-slate-400">High-converting luxury interfaces</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-500 font-mono">99.4% Conv</span>
                </motion.div>
              </div>

              {/* Card Footer Status */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>SYSTEM STATUS: OPTIMAL</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  LIVE
                </span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}