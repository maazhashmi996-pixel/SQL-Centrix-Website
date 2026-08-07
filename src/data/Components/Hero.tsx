// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, useSpring, useTransform, animate } from "framer-motion";
// import { ArrowUpRight, Sparkles, Shield, TrendingUp, Award, Layers } from "lucide-react";

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
//   const brands = [
//     { name: "Shopify", color: "text-emerald-600 hover:text-emerald-500" },
//     { name: "Mindbody", color: "text-purple-600 hover:text-purple-500" },
//     { name: "MetLife", color: "text-blue-600 hover:text-blue-500" },
//     { name: "Ramp", color: "text-slate-900 hover:text-amber-600" },
//     { name: "Marriott", color: "text-rose-700 hover:text-rose-600" },
//     { name: "Figma", color: "text-orange-600 hover:text-orange-500" },
//     { name: "Woo", color: "text-violet-600 hover:text-violet-500" },
//     { name: "Coinbase", color: "text-blue-500 hover:text-blue-400" },
//     { name: "Google", color: "text-red-500 hover:text-blue-600" },
//     { name: "Amazon", color: "text-amber-600 hover:text-amber-500" },
//   ];

//   return (
//     <section className="relative min-h-[calc(100vh-5rem)] w-full flex flex-col justify-between bg-white text-slate-900 overflow-hidden selection:bg-amber-500 selection:text-slate-900 pt-6">
      
//       <div className="absolute top-0 right-0 w-full lg:w-[1000px] h-full pointer-events-none overflow-hidden z-0">
//         <motion.div 
//           animate={{ 
//             x: [0, 20, -10, 0], 
//             y: [0, -15, 10, 0],
//             scale: [1, 1.03, 0.98, 1] 
//           }}
//           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -top-20 -right-20 w-[800px] h-[800px] bg-gradient-to-tr from-amber-100/70 via-yellow-100/50 to-amber-50/30 blur-[120px] rounded-full transform origin-top-right" 
//         />
//       </div>

//       <div className="max-w-7xl mx-auto w-full z-10 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto">
        
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
//           className="lg:col-span-7 space-y-5 lg:space-y-6 text-left"
//         >
          
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2 }}
//             className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold tracking-widest uppercase shadow-sm"
//           >
//             <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" style={{ animationDuration: "10s" }} />
//             <span>SQL Centrix &bull; Growth Partner</span>
//           </motion.div>

//           <div className="space-y-3">
//             <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
//               Nothing But Sales Qualified Leads.
//             </h1>

//             <p className="text-slate-600 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
//               At SQL Centrix, every strategy, campaign, website, advertisement, and piece of content has one objective: Bringing your business, qualified opportunities that convert into revenue. Marketing is the process. SQL’s are the results. At SQL Centrix the results are our starting point.
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
//             <motion.a
//               whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(234, 179, 8, 0.3)" }}
//               whileTap={{ scale: 0.97 }}
//               href="#contact"
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition-all duration-300 group text-sm cursor-pointer relative overflow-hidden"
//             >
//               <span>Get Your Free Growth Strategy</span>
//               <div className="w-6 h-6 rounded-lg bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
//                 <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-slate-900" />
//               </div>
//             </motion.a>

//             <motion.a
//               whileHover={{ scale: 1.02, backgroundColor: "rgba(241, 245, 249, 1)" }}
//               whileTap={{ scale: 0.97 }}
//               href="https://my-portfolio-beige-gamma-24.vercel.app/"
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-700 font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 border border-slate-200 text-sm cursor-pointer"
//             >
//               <span>Explore Portfolio</span>
//             </motion.a>
//           </div>

//           <div className="grid grid-cols-3 gap-6 pt-3 border-t border-slate-200 max-w-lg text-left">
//             <div>
//               <div className="text-lg sm:text-xl font-black text-slate-900 font-mono">
//                 +<Counter value={340} suffix="%" />
//               </div>
//               <div className="text-[11px] text-slate-500 font-medium mt-0.5">Pipeline Velocity</div>
//             </div>
//             <div>
//               <div className="text-lg sm:text-xl font-black text-slate-900 font-mono">
//                 <Counter value={4} />.<Counter value={8} />x
//               </div>
//               <div className="text-[11px] text-slate-500 font-medium mt-0.5">Average ROAS</div>
//             </div>
//             <div>
//               <div className="text-lg sm:text-xl font-black text-slate-900 font-mono">
//                 <Counter value={99} />.<Counter value={4} />%
//               </div>
//               <div className="text-[11px] text-slate-500 font-medium mt-0.5">Retention Rate</div>
//             </div>
//           </div>

//         </motion.div>

//         <motion.div 
//           initial={{ opacity: 0, scale: 0.92, y: 30 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
//           className="lg:col-span-5 relative z-10"
//         >
//           <div className="relative p-3 rounded-[2.5rem] bg-gradient-to-tr from-amber-500/10 via-yellow-500/10 to-slate-100 shadow-2xl border border-slate-200/80 backdrop-blur-2xl">
//             <div className="bg-white/90 backdrop-blur-md rounded-[2rem] p-5 sm:p-6 space-y-3.5 relative overflow-hidden shadow-sm border border-slate-100">
              
//               <div className="flex items-center justify-between border-b border-slate-100 pb-3">
//                 <div className="flex items-center gap-3">
//                   <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 font-bold shadow-sm border border-amber-200/40">
//                     <TrendingUp className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-wide">Live Growth Pipeline</h3>
//                     <p className="text-[10px] text-slate-500">SQL Centrix Intelligence Hub</p>
//                   </div>
//                 </div>
//                 <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-[10px] font-mono font-bold">
//                   SECURE
//                 </span>
//               </div>

//               <div className="space-y-2.5">
//                 <motion.div 
//                   whileHover={{ scale: 1.02, x: 4 }}
//                   className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between shadow-xs"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
//                       <Shield className="w-3.5 h-3.5" />
//                     </div>
//                     <div>
//                       <div className="text-xs font-bold text-slate-900">Technical SEO Architecture</div>
//                       <div className="text-[10px] text-slate-500">Top-tier search rankings achieved</div>
//                     </div>
//                   </div>
//                   <span className="text-xs font-bold text-amber-600 font-mono">Rank #1</span>
//                 </motion.div>

//                 <motion.div 
//                   whileHover={{ scale: 1.02, x: 4 }}
//                   className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between shadow-xs"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="w-7 h-7 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center font-bold">
//                       <Award className="w-3.5 h-3.5" />
//                     </div>
//                     <div>
//                       <div className="text-xs font-bold text-slate-900">PPC Ad Scaling</div>
//                       <div className="text-[10px] text-slate-500">Cost-per-acquisition minimized</div>
//                     </div>
//                   </div>
//                   <span className="text-xs font-bold text-yellow-600 font-mono">4.8x ROAS</span>
//                 </motion.div>

//                 <motion.div 
//                   whileHover={{ scale: 1.02, x: 4 }}
//                   className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between shadow-xs"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
//                       <Layers className="w-3.5 h-3.5" />
//                     </div>
//                     <div>
//                       <div className="text-xs font-bold text-slate-900">UI/UX Web Engineering</div>
//                       <div className="text-[10px] text-slate-500">High-converting luxury interfaces</div>
//                     </div>
//                   </div>
//                   <span className="text-xs font-bold text-amber-600 font-mono">99.4% Conv</span>
//                 </motion.div>
//               </div>

//               <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
//                 <span>SYSTEM STATUS: OPTIMAL</span>
//                 <span className="text-emerald-600 flex items-center gap-1 font-semibold">
//                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
//                   LIVE
//                 </span>
//               </div>

//             </div>
//           </div>
//         </motion.div>

//       </div>

//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5, duration: 0.8 }}
//         className="w-full border-t border-slate-200 bg-white/90 backdrop-blur-md py-4 overflow-hidden relative z-20 shrink-0 mt-6"
//       >
//         <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
//           <motion.div 
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
//             className="flex items-center gap-16 whitespace-nowrap shrink-0 px-8"
//           >
//             {[...brands, ...brands].map((brand, idx) => (
//               <motion.div 
//                 key={idx} 
//                 whileHover={{ scale: 1.1, y: -2 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                 className={`flex items-center justify-center font-extrabold text-lg tracking-tight uppercase font-sans cursor-pointer transition-colors duration-300 ${brand.color}`}
//               >
//                 {brand.name}
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.div>

//     </section>
//   );
// }















"use client";
import React, { useState, useEffect } from "react";
import { motion, useSpring, useTransform, animate } from "framer-motion";
import { ArrowUpRight, Sparkles, Shield, TrendingUp, Award, Layers, CheckCircle2, Zap } from "lucide-react";

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
  const brands = [
    { name: "Shopify", color: "text-emerald-600 hover:text-emerald-500" },
    { name: "Mindbody", color: "text-purple-600 hover:text-purple-500" },
    { name: "MetLife", color: "text-blue-600 hover:text-blue-500" },
    { name: "Ramp", color: "text-slate-900 hover:text-amber-600" },
    { name: "Marriott", color: "text-rose-700 hover:text-rose-600" },
    { name: "Figma", color: "text-orange-600 hover:text-orange-500" },
    { name: "Woo", color: "text-violet-600 hover:text-violet-500" },
    { name: "Coinbase", color: "text-blue-500 hover:text-blue-400" },
    { name: "Google", color: "text-red-500 hover:text-blue-600" },
    { name: "Amazon", color: "text-amber-600 hover:text-amber-500" },
  ];

  return (
    <section className="relative min-h-[calc(100vh-5rem)] w-full flex flex-col justify-between bg-[#FAFAFA] text-slate-900 overflow-hidden selection:bg-amber-500 selection:text-slate-950 pt-8">
      
      {/* Natural Ambient Background Gradients (Light & Subtle) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ 
            x: [0, 30, -20, 0], 
            y: [0, -20, 20, 0],
            scale: [1, 1.05, 0.95, 1] 
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-[700px] h-[700px] bg-gradient-to-br from-amber-200/40 via-yellow-100/30 to-transparent blur-[140px] rounded-full" 
        />
      </div>

      <div className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] bg-amber-100/30 blur-[120px] pointer-events-none rounded-full z-0" />

      {/* Subtle Grid Pattern for Technical Feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full z-10 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto">
        
        {/* Left Column: Copy & CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" style={{ animationDuration: "8s" }} />
            <span>SQL Centrix &bull; Elite Growth Partner</span>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
              Nothing But <br />
              <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
                Sales Qualified Leads.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              At SQL Centrix, every strategy, campaign, website, and advertisement has one objective: Bringing your business qualified opportunities that convert into revenue. Marketing is the process. SQLs are the results.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.02, boxShadow: "0 15px 30px -10px rgba(245, 158, 11, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:opacity-95 text-slate-950 font-bold px-7 py-4 rounded-2xl shadow-xl shadow-amber-500/20 transition-all duration-300 group text-sm cursor-pointer relative overflow-hidden border border-amber-400/50"
            >
              <span>Get Your Free Growth Strategy</span>
              <div className="w-7 h-7 rounded-xl bg-slate-950/10 flex items-center justify-center group-hover:bg-slate-950/20 transition-colors">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-slate-950" />
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 1)", borderColor: "rgba(245, 158, 11, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              href="https://my-portfolio-beige-gamma-24.vercel.app/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm text-slate-800 font-bold px-7 py-4 rounded-2xl transition-all duration-300 border border-slate-200/80 shadow-xs text-sm cursor-pointer"
            >
              <span>Explore Portfolio</span>
            </motion.a>
          </div>

          {/* Metrics Counter Bar */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/80 max-w-lg text-left">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight">
                +<Counter value={340} suffix="%" />
              </div>
              <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-500" /> Pipeline Velocity
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight">
                <Counter value={4} />.<Counter value={8} />x
              </div>
              <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-amber-500" /> Average ROAS
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight">
                <Counter value={99} />.<Counter value={4} />%
              </div>
              <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-amber-500" /> Retention Rate
              </div>
            </div>
          </div>

        </motion.div>

        {/* Right Column: Premium Floating Live Interactive Dashboard Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="lg:col-span-5 relative z-10"
        >
          <div className="relative p-3.5 rounded-[2.5rem] bg-gradient-to-tr from-amber-500/20 via-white/40 to-slate-200/50 shadow-2xl shadow-slate-200/50 border border-amber-500/20 backdrop-blur-xl">
            <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] p-6 sm:p-7 space-y-4 relative overflow-hidden shadow-sm border border-slate-100">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-md shadow-amber-500/20">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-900 tracking-wide">Live Growth Pipeline</h3>
                    <p className="text-[11px] text-slate-500 font-medium">SQL Centrix Intelligence Hub</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-[10px] font-mono font-extrabold tracking-wider">
                  SECURE
                </span>
              </div>

              {/* Dynamic Items List */}
              <div className="space-y-3">
                <motion.div 
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Technical SEO Architecture</div>
                      <div className="text-[10px] text-slate-500">Top-tier search rankings achieved</div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-amber-700 font-mono bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60">Rank #1</span>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-yellow-500/10 text-yellow-700 flex items-center justify-center font-bold">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">PPC Ad Scaling</div>
                      <div className="text-[10px] text-slate-500">Cost-per-acquisition minimized</div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-yellow-700 font-mono bg-yellow-50 px-2.5 py-1 rounded-lg border border-yellow-200/60">4.8x ROAS</span>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-600/10 text-amber-800 flex items-center justify-center font-bold">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">UI/UX Web Engineering</div>
                      <div className="text-[10px] text-slate-500">High-converting luxury interfaces</div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-amber-800 font-mono bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60">99.4% Conv</span>
                </motion.div>
              </div>

              {/* Status Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="font-semibold tracking-wider">SYSTEM STATUS: OPTIMAL</span>
                <span className="text-emerald-600 flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE
                </span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>

      {/* Brand Marquee Ticker Bar with Original Brand Colors */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full border-t border-slate-200/80 bg-white/80 backdrop-blur-md py-6 overflow-hidden relative z-20 shrink-0 mt-12 shadow-[0_-10px_30px_rgba(0,0,0,0.02)]"
      >
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-16 whitespace-nowrap shrink-0 px-8"
          >
            {[...brands, ...brands].map((brand, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={`flex items-center justify-center font-black text-xl tracking-tight uppercase font-sans cursor-pointer transition-all duration-300 ${brand.color}`}
              >
                {brand.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}