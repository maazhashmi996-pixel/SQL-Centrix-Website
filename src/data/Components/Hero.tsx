// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, useSpring, useTransform, animate } from "framer-motion";
// import { ArrowUpRight, Shield, TrendingUp, Award, Layers } from "lucide-react";

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
//     { name: "Shopify", color: "text-rose-500 hover:text-rose-400" },
//     { name: "Mindbody", color: "text-blue-500 hover:text-blue-400" },
//     { name: "MetLife", color: "text-emerald-500 hover:text-emerald-400" },
//     { name: "Ramp", color: "text-violet-500 hover:text-violet-400" },
//     { name: "Marriott", color: "text-amber-500 hover:text-amber-400" },
//     { name: "Figma", color: "text-cyan-500 hover:text-cyan-400" },
//     { name: "Woo", color: "text-indigo-500 hover:text-indigo-400" },
//     { name: "Coinbase", color: "text-yellow-500 hover:text-yellow-400" },
//     { name: "Google", color: "text-blue-600 hover:text-blue-500" },
//     { name: "Amazon", color: "text-orange-500 hover:text-orange-400" },
//   ];

//   return (
//     <section className="relative min-h-[calc(100vh-5rem)] w-full flex flex-col justify-between bg-white text-slate-900 overflow-hidden selection:bg-yellow-300 selection:text-slate-900  pt-12">
      
//       {/* Background Glow Effect */}
//       <div className="absolute top-0 right-0 w-full lg:w-[1000px] h-full pointer-events-none overflow-hidden z-0">
//         <motion.div 
//           animate={{ 
//             x: [0, 20, -10, 0], 
//             y: [0, -15, 10, 0],
//             scale: [1, 1.03, 0.98, 1] 
//           }}
//           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -top-20 -right-20 w-[800px] h-[800px] bg-gradient-to-tr from-yellow-200/50 via-amber-200/40 to-yellow-100/20 blur-[130px] rounded-full transform origin-top-right" 
//         />
//       </div>

//       <div className="max-w-7xl mx-auto w-full z-10 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto">
        
//         {/* Left Column */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
//           className="lg:col-span-7 space-y-6 lg:space-y-7 text-left"
//         >
          
//           <div className="space-y-4">
//           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black leading-[1.05]">
//   Nothing But <span className="text-yellow-500 drop-shadow-sm">Sales Qualified Leads.</span>
// </h1>

//             <div className="space-y-3">
//               <h2 className="text-lg sm:text-xl font-bold text-yellow-600">Sub Heading</h2>
//               <p className="text-slate-700 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
//                 At SQL Centrix, every strategy, campaign, website, advertisement, and piece of content has one objective: Bringing your business, qualified opportunities that convert into revenue.
//               </p>
//               <p className="text-slate-700 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
//                 Marketing is the process. SQL’s are the results.
//               </p>
//               <p className="text-slate-700 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
//                 At SQL Centrix the results are our starting point.
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
//             <motion.a
//               whileHover={{ scale: 1.03, boxShadow: "0 14px 35px rgba(234, 179, 8, 0.35)" }}
//               whileTap={{ scale: 0.97 }}
//               href="#contact"
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-extrabold px-7 py-4 rounded-2xl shadow-lg shadow-yellow-500/20 transition-all duration-300 group text-sm cursor-pointer relative overflow-hidden"
//             >
//               <span>Get Your Free Growth Strategy</span>
//               <div className="w-6 h-6 rounded-xl bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
//                 <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-slate-950" />
//               </div>
//             </motion.a>
//           </div>

//           <div className="grid grid-cols-3 gap-6 pt-5 border-t border-yellow-200/80 max-w-lg text-left">
//             <div>
//               <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono tracking-tight">
//                 +<Counter value={340} suffix="%" />
//               </div>
//               <div className="text-xs text-slate-600 font-medium mt-0.5">Pipeline Velocity</div>
//             </div>
//             <div>
//               <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono tracking-tight">
//                 <Counter value={4} />.<Counter value={8} />x
//               </div>
//               <div className="text-xs text-slate-600 font-medium mt-0.5">Average ROAS</div>
//             </div>
//             <div>
//               <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono tracking-tight">
//                 <Counter value={99} />.<Counter value={4} />%
//               </div>
//               <div className="text-xs text-slate-600 font-medium mt-0.5">Retention Rate</div>
//             </div>
//           </div>

//         </motion.div>

//         {/* Right Column - Interactive Card Hub */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.92, y: 30 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
//           className="lg:col-span-5 relative z-10"
//         >
//           <div className="relative p-3.5 rounded-[2.5rem] bg-gradient-to-tr from-yellow-400/15 via-amber-300/10 to-white shadow-2xl border border-yellow-200/60 backdrop-blur-2xl">
//             <div className="bg-white/95 backdrop-blur-md rounded-[2rem] p-6 space-y-4 relative overflow-hidden shadow-xl border border-yellow-100">
              
//               <div className="flex items-center justify-between border-b border-yellow-100 pb-3.5">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-2xl bg-yellow-50 flex items-center justify-center text-yellow-600 font-bold shadow-sm border border-yellow-200/50">
//                     <TrendingUp className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-wide">Live Growth Pipeline</h3>
//                     <p className="text-[11px] text-yellow-600 font-medium">SQL Centrix Intelligence Hub</p>
//                   </div>
//                 </div>
//                 <span className="px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-[10px] font-mono font-bold tracking-wider">
//                   SECURE
//                 </span>
//               </div>

//               <div className="space-y-3">
//                 <motion.div 
//                   whileHover={{ scale: 1.02, x: 4 }}
//                   className="p-3.5 rounded-2xl bg-yellow-50/40 hover:bg-yellow-50/80 border border-yellow-100/80 flex items-center justify-between transition-colors shadow-2xs"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-xl bg-yellow-100/80 text-yellow-700 flex items-center justify-center font-bold">
//                       <Shield className="w-4 h-4" />
//                     </div>
//                     <div>
//                       <div className="text-xs font-bold text-slate-900">Technical SEO Architecture</div>
//                       <div className="text-[11px] text-slate-500">Top-tier search rankings achieved</div>
//                     </div>
//                   </div>
//                   <span className="text-xs font-bold text-yellow-600 font-mono bg-yellow-100/60 px-2 py-1 rounded-lg">Rank #1</span>
//                 </motion.div>

//                 <motion.div 
//                   whileHover={{ scale: 1.02, x: 4 }}
//                   className="p-3.5 rounded-2xl bg-yellow-50/40 hover:bg-yellow-50/80 border border-yellow-100/80 flex items-center justify-between transition-colors shadow-2xs"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-xl bg-amber-100/80 text-amber-700 flex items-center justify-center font-bold">
//                       <Award className="w-4 h-4" />
//                     </div>
//                     <div>
//                       <div className="text-xs font-bold text-slate-900">PPC Ad Scaling</div>
//                       <div className="text-[11px] text-slate-500">Cost-per-acquisition minimized</div>
//                     </div>
//                   </div>
//                   <span className="text-xs font-bold text-amber-600 font-mono bg-amber-100/60 px-2 py-1 rounded-lg">4.8x ROAS</span>
//                 </motion.div>

//                 <motion.div 
//                   whileHover={{ scale: 1.02, x: 4 }}
//                   className="p-3.5 rounded-2xl bg-yellow-50/40 hover:bg-yellow-50/80 border border-yellow-100/80 flex items-center justify-between transition-colors shadow-2xs"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-xl bg-yellow-100/80 text-yellow-700 flex items-center justify-center font-bold">
//                       <Layers className="w-4 h-4" />
//                     </div>
//                     <div>
//                       <div className="text-xs font-bold text-slate-900">UI/UX Web Engineering</div>
//                       <div className="text-[11px] text-slate-500">High-converting luxury interfaces</div>
//                     </div>
//                   </div>
//                   <span className="text-xs font-bold text-yellow-600 font-mono bg-yellow-100/60 px-2 py-1 rounded-lg">99.4% Conv</span>
//                 </motion.div>
//               </div>

//               <div className="pt-3 border-t border-yellow-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
//                 <span>SYSTEM STATUS: OPTIMAL</span>
//                 <span className="text-yellow-600 flex items-center gap-1.5 font-bold">
//                   <span className="w-2 h-2 rounded-full bg-yellow-500 animate-ping" />
//                   LIVE
//                 </span>
//               </div>

//             </div>
//           </div>
//         </motion.div>

//       </div>

//       {/* Brands Ticker Marquee with Multi-Colored Brand Logos */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5, duration: 0.8 }}
//         className="w-full border-t border-yellow-200/80 bg-white/90 backdrop-blur-md py-5 overflow-hidden relative z-20 shrink-0 mt-8 shadow-sm"
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













// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Sparkles,
//   CheckCircle2,
//   TrendingUp,
//   MousePointer2,
// } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       className="
//         relative
//         min-h-screen
//         w-full
//         overflow-hidden
//         bg-[#fafafa]
//         text-slate-900
//         flex
//         flex-col
//         selection:bg-yellow-300
//         selection:text-slate-950
//       "
//     >
//       {/* =====================================================
//           BACKGROUND
//       ===================================================== */}

//       <div className="absolute inset-0 pointer-events-none">

//         {/* Main Yellow Glow */}

//         <motion.div
//           animate={{
//             x: [0, 50, -30, 0],
//             y: [0, -25, 30, 0],
//             scale: [1, 1.08, 0.96, 1],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="
//             absolute
//             -top-72
//             left-1/2
//             -translate-x-1/2
//             h-[650px]
//             w-[650px]
//             rounded-full
//             bg-yellow-300/20
//             blur-[150px]
//           "
//         />

//         {/* Blue Glow */}

//         <motion.div
//           animate={{
//             x: [0, -30, 25, 0],
//             y: [0, 25, -20, 0],
//           }}
//           transition={{
//             duration: 17,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="
//             absolute
//             top-[35%]
//             -left-72
//             h-[500px]
//             w-[500px]
//             rounded-full
//             bg-blue-200/15
//             blur-[140px]
//           "
//         />

//         {/* Orange Glow */}

//         <motion.div
//           animate={{
//             scale: [1, 1.08, 1],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="
//             absolute
//             -bottom-72
//             -right-40
//             h-[550px]
//             w-[550px]
//             rounded-full
//             bg-orange-200/15
//             blur-[150px]
//           "
//         />

//         {/* Soft Grid */}

//         <div
//           className="
//             absolute
//             inset-0
//             opacity-[0.30]
//             bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)]
//             bg-[size:5rem_5rem]
//             [mask-image:radial-gradient(ellipse_70%_55%_at_50%_40%,black_45%,transparent_100%)]
//           "
//         />

//         {/* Small Dots */}

//         <div
//           className="
//             absolute
//             inset-0
//             opacity-[0.20]
//             bg-[radial-gradient(#64748b_1px,transparent_1px)]
//             [background-size:30px_30px]
//             [mask-image:linear-gradient(to_bottom,black,transparent_75%)]
//           "
//         />

//         {/* Top Gradient */}

//         <div
//           className="
//             absolute
//             top-0
//             left-0
//             right-0
//             h-40
//             bg-gradient-to-b
//             from-white
//             to-transparent
//           "
//         />
//       </div>

//       {/* =====================================================
//           TOP LABEL
//       ===================================================== */}

//       <div
//         className="
//           relative
//           z-20
//           w-full
//           max-w-7xl
//           mx-auto
//           px-6
//           lg:px-12
//           pt-7
//         "
//       >
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: -15,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.7,
//             ease: "easeOut",
//           }}
//           className="
//             inline-flex
//             items-center
//             gap-2.5
//             rounded-full
//             border
//             border-slate-200
//             bg-white/80
//             px-4
//             py-2
//             shadow-[0_8px_30px_rgba(15,23,42,0.06)]
//             backdrop-blur-xl
//           "
//         >
//           {/* Live Dot */}

//           <span className="relative flex h-2 w-2">
//             <span
//               className="
//                 absolute
//                 inline-flex
//                 h-full
//                 w-full
//                 animate-ping
//                 rounded-full
//                 bg-emerald-400
//                 opacity-70
//               "
//             />

//             <span
//               className="
//                 relative
//                 inline-flex
//                 h-2
//                 w-2
//                 rounded-full
//                 bg-emerald-500
//               "
//             />
//           </span>

//           <span
//             className="
//               text-[10px]
//               sm:text-[11px]
//               font-bold
//               tracking-[0.12em]
//               text-slate-600
//             "
//           >
//             REVENUE-DRIVEN B2B GROWTH
//           </span>
//         </motion.div>
//       </div>

//       {/* =====================================================
//           CENTER CONTENT
//       ===================================================== */}

//       <div
//         className="
//           relative
//           z-10
//           flex
//           flex-1
//           items-center
//           justify-center
//           px-6
//           py-16
//           sm:py-20
//         "
//       >
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.9,
//             delay: 0.1,
//             ease: [0.16, 1, 0.3, 1],
//           }}
//           className="
//             flex
//             w-full
//             max-w-5xl
//             flex-col
//             items-center
//             text-center
//           "
//         >
//           {/* =================================================
//               SUB HEADING
//           ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               scale: 0.9,
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//             }}
//             transition={{
//               duration: 0.6,
//               delay: 0.25,
//             }}
//             className="
//               mb-6
//               flex
//               items-center
//               gap-3
//               rounded-full
//               border
//               border-yellow-200
//               bg-yellow-50/80
//               px-4
//               py-2
//               shadow-sm
//             "
//           >
//             <div
//               className="
//                 flex
//                 h-7
//                 w-7
//                 items-center
//                 justify-center
//                 rounded-lg
//                 bg-yellow-400
//                 text-slate-950
//                 shadow-sm
//               "
//             >
//               <Sparkles className="h-3.5 w-3.5" />
//             </div>

//             <span
//               className="
//                 text-[10px]
//                 sm:text-xs
//                 font-extrabold
//                 uppercase
//                 tracking-[0.18em]
//                 text-yellow-700
//               "
//             >
//               Sub Heading
//             </span>
//           </motion.div>

//           {/* =================================================
//               MAIN HEADING
//           ================================================= */}

//           <h1
//             className="
//               max-w-5xl
//               text-[clamp(2.8rem,7vw,6.8rem)]
//               font-black
//               leading-[0.91]
//               tracking-[-0.065em]
//               text-slate-950
//             "
//           >
//             Nothing But{" "}

//             <span className="relative inline-block">

//               {/* Gradient Text */}

//               <span
//                 className="
//                   relative
//                   z-10
//                   bg-gradient-to-r
//                   from-yellow-400
//                   via-amber-500
//                   to-orange-500
//                   bg-clip-text
//                   text-transparent
//                 "
//               >
//                 Sales Qualified Leads.
//               </span>

//               {/* Highlight */}

//               <motion.span
//                 initial={{
//                   width: 0,
//                 }}
//                 animate={{
//                   width: "72%",
//                 }}
//                 transition={{
//                   duration: 1,
//                   delay: 1,
//                   ease: "easeOut",
//                 }}
//                 className="
//                   absolute
//                   -bottom-2
//                   left-0
//                   h-1.5
//                   rounded-full
//                   bg-gradient-to-r
//                   from-yellow-400
//                   via-amber-400
//                   to-transparent
//                 "
//               />

//               {/* Small decorative dot */}

//               <motion.span
//                 initial={{
//                   opacity: 0,
//                   scale: 0,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   scale: 1,
//                 }}
//                 transition={{
//                   delay: 1.4,
//                 }}
//                 className="
//                   absolute
//                   -right-5
//                   -top-3
//                   h-3
//                   w-3
//                   rounded-full
//                   bg-yellow-400
//                   shadow-[0_0_20px_rgba(250,204,21,0.7)]
//                 "
//               />
//             </span>
//           </h1>

//           {/* =================================================
//               DESCRIPTION
//           ================================================= */}

//           <div className="mt-8 max-w-2xl">

//             <p
//               className="
//                 text-base
//                 leading-7
//                 text-slate-600
//                 sm:text-lg
//                 sm:leading-8
//               "
//             >
//               At{" "}
//               <span className="font-bold text-slate-900">
//                 SQL Centrix
//               </span>
//               , every strategy, campaign, website,
//               advertisement, and piece of content has one
//               objective: Bringing your business, qualified
//               opportunities that convert into revenue.
//             </p>

//             {/* Divider */}

//             <div className="mx-auto my-5 flex items-center justify-center gap-3">
//               <span className="h-px w-8 bg-slate-200" />

//               <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />

//               <span className="h-px w-8 bg-slate-200" />
//             </div>

//             <p
//               className="
//                 text-sm
//                 font-bold
//                 text-slate-800
//                 sm:text-base
//               "
//             >
//               Marketing is the process. SQL&apos;s are the results.
//             </p>

//             <p
//               className="
//                 mt-1.5
//                 text-sm
//                 text-slate-500
//                 sm:text-base
//               "
//             >
//               At SQL Centrix the results are our starting point.
//             </p>
//           </div>

//           {/* =================================================
//               CTA
//           ================================================= */}

//           <div className="mt-9 flex flex-col items-center">

//             {/* CTA Label */}

//             <span
//               className="
//                 mb-2
//                 text-[9px]
//                 font-extrabold
//                 uppercase
//                 tracking-[0.25em]
//                 text-slate-400
//               "
//             >
//               CTA Button
//             </span>

//             <motion.a
//               href="#contact"
//               whileHover={{
//                 scale: 1.035,
//                 y: -3,
//               }}
//               whileTap={{
//                 scale: 0.97,
//               }}
//               className="
//                 group
//                 relative
//                 inline-flex
//                 items-center
//                 justify-center
//                 gap-3
//                 overflow-hidden
//                 rounded-2xl
//                 bg-slate-950
//                 px-7
//                 py-4
//                 text-sm
//                 font-bold
//                 text-white
//                 shadow-[0_20px_45px_rgba(15,23,42,0.16)]
//                 transition-all
//                 duration-300
//                 hover:bg-slate-800
//               "
//             >
//               {/* Shine */}

//               <span
//                 className="
//                   absolute
//                   inset-y-0
//                   -left-full
//                   w-1/3
//                   skew-x-[-20deg]
//                   bg-white/10
//                   transition-all
//                   duration-700
//                   group-hover:left-[120%]
//                 "
//               />

//               <span className="relative z-10">
//                 Get Your Free Growth Strategy
//               </span>

//               <span
//                 className="
//                   relative
//                   z-10
//                   flex
//                   h-8
//                   w-8
//                   items-center
//                   justify-center
//                   rounded-lg
//                   bg-yellow-400
//                   text-slate-950
//                   transition-transform
//                   duration-300
//                   group-hover:rotate-45
//                 "
//               >
//                 <ArrowUpRight className="h-4 w-4" />
//               </span>
//             </motion.a>
//           </div>

//           {/* =================================================
//               TRUST MINI CARDS
//           ================================================= */}

//           <div
//             className="
//               mt-10
//               flex
//               flex-wrap
//               items-center
//               justify-center
//               gap-3
//             "
//           >

//             {/* Card 1 */}

//             <motion.div
//               whileHover={{
//                 y: -3,
//               }}
//               className="
//                 flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 border
//                 border-slate-200
//                 bg-white/70
//                 px-3
//                 py-2
//                 shadow-sm
//                 backdrop-blur-md
//               "
//             >
//               <div
//                 className="
//                   flex
//                   h-6
//                   w-6
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-emerald-50
//                   text-emerald-600
//                 "
//               >
//                 <CheckCircle2 className="h-3.5 w-3.5" />
//               </div>

//               <span
//                 className="
//                   text-[10px]
//                   font-bold
//                   text-slate-600
//                 "
//               >
//                 Qualified Opportunities
//               </span>
//             </motion.div>

//             {/* Card 2 */}

//             <motion.div
//               whileHover={{
//                 y: -3,
//               }}
//               className="
//                 flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 border
//                 border-slate-200
//                 bg-white/70
//                 px-3
//                 py-2
//                 shadow-sm
//                 backdrop-blur-md
//               "
//             >
//               <div
//                 className="
//                   flex
//                   h-6
//                   w-6
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-yellow-50
//                   text-yellow-600
//                 "
//               >
//                 <TrendingUp className="h-3.5 w-3.5" />
//               </div>

//               <span
//                 className="
//                   text-[10px]
//                   font-bold
//                   text-slate-600
//                 "
//               >
//                 Revenue Focused
//               </span>
//             </motion.div>

//             {/* Card 3 */}

//             <motion.div
//               whileHover={{
//                 y: -3,
//               }}
//               className="
//                 flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 border
//                 border-slate-200
//                 bg-white/70
//                 px-3
//                 py-2
//                 shadow-sm
//                 backdrop-blur-md
//               "
//             >
//               <div
//                 className="
//                   flex
//                   h-6
//                   w-6
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-blue-50
//                   text-blue-600
//                 "
//               >
//                 <MousePointer2 className="h-3.5 w-3.5" />
//               </div>

//               <span
//                 className="
//                   text-[10px]
//                   font-bold
//                   text-slate-600
//                 "
//               >
//                 Conversion Driven
//               </span>
//             </motion.div>

//           </div>
//         </motion.div>
//       </div>

//       {/* =====================================================
//           BOTTOM DECORATIVE LINE
//       ===================================================== */}

//       <div className="relative z-10 mx-auto mb-6 flex w-full max-w-7xl items-center justify-center px-6">

//         <div className="flex w-full max-w-3xl items-center gap-4">

//           <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />

//           <div className="flex items-center gap-2">

//             <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />

//             <span className="h-1.5 w-8 rounded-full bg-yellow-400" />

//             <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />

//           </div>

//           <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />

//         </div>
//       </div>
//     </section>
//   );
// }





































// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Sparkles,
//   CheckCircle2,
//   TrendingUp,
//   MousePointer2,
// } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative min-h-[100vh] overflow-hidden bg-[#f8f8f5] text-slate-950">

//       {/* =====================================================
//           BACKGROUND
//       ===================================================== */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">

//         {/* Yellow Glow */}
//         <motion.div
//           animate={{
//             x: [0, 35, -20, 0],
//             y: [0, -20, 20, 0],
//             scale: [1, 1.08, 0.98, 1],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -right-40 -top-52 h-[700px] w-[700px] rounded-full bg-yellow-300/20 blur-[140px]"
//         />

//         {/* Blue Glow */}
//         <motion.div
//           animate={{
//             x: [0, -25, 15, 0],
//             y: [0, 25, -15, 0],
//           }}
//           transition={{
//             duration: 17,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -bottom-52 -left-52 h-[550px] w-[550px] rounded-full bg-blue-200/15 blur-[140px]"
//         />

//         {/* Orange Glow */}
//         <div className="absolute -bottom-64 right-[-100px] h-[500px] w-[500px] rounded-full bg-orange-200/10 blur-[150px]" />

//         {/* Grid */}
//         <div
//           className="
//             absolute
//             inset-0
//             opacity-[0.18]
//             bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)]
//             bg-[size:6rem_6rem]
//           "
//         />

//         {/* Soft Center Light */}
//         <div className="absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-[110px]" />
//       </div>

//       {/* =====================================================
//           MAIN NAVBAR-ALIGNED CONTAINER
//       ===================================================== */}

//       <div className="relative z-20 mx-auto w-full max-w-[1180px]">

//         {/* ===================================================
//             TOP BADGES
//         =================================================== */}

//         <div className="flex items-center justify-between pt-5">

//           {/* Left Mini Brand */}

//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="flex items-center gap-2"
//           >
//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-yellow-400 shadow-[0_10px_25px_rgba(15,23,42,0.12)]">
//               <Sparkles className="h-4 w-4" />
//             </div>

//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-900">
//                 SQL Centrix
//               </p>

//               <p className="text-[7px] text-slate-400">
//                 Revenue-driven growth
//               </p>
//             </div>
//           </motion.div>

//           {/* Right Growth Badge */}

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl"
//           >
//             {/* IMPORTANT:
//                 relative is inside className
//             */}

//             <span className="relative flex h-2 w-2">

//               <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

//               <span className="relative h-2 w-2 rounded-full bg-emerald-500" />

//             </span>

//             <span className="text-[9px] font-bold tracking-[0.13em] text-slate-500">
//               REVENUE-DRIVEN B2B GROWTH
//             </span>
//           </motion.div>

//         </div>

//         {/* ===================================================
//             HERO CONTENT
//         =================================================== */}

//         <div className="flex min-h-[calc(100vh-100px)] items-center pb-16">

//           <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">

//             {/* =================================================
//                 LEFT CONTENT
//             ================================================= */}

//             <motion.div
//               initial={{ opacity: 0, x: -35 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{
//                 duration: 0.9,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//             >

//               {/* Sub Heading */}

//               <div className="mb-6 flex items-center gap-3">

//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: 42 }}
//                   transition={{
//                     duration: 0.7,
//                     delay: 0.3,
//                   }}
//                   className="h-[2px] rounded-full bg-yellow-400"
//                 />

//                 <span className="text-[10px] font-black uppercase tracking-[0.25em] text-yellow-600 sm:text-xs">
//                   Sub Heading
//                 </span>

//               </div>

//               {/* Main Heading */}

//               <h1 className="max-w-[720px] text-[clamp(3rem,6vw,6.7rem)] font-black leading-[0.86] tracking-[-0.075em] text-slate-950">

//                 Nothing But{" "}

//                 <span className="relative inline-block">

//                   {/* Natural Yellow */}

//                   <span className="relative z-10 text-yellow-500">
//                     Sales Qualified Leads.
//                   </span>

//                   {/* Yellow Underline */}

//                   <motion.span
//                     initial={{ width: 0 }}
//                     animate={{ width: "62%" }}
//                     transition={{
//                       duration: 1,
//                       delay: 0.8,
//                       ease: "easeOut",
//                     }}
//                     className="absolute -bottom-2 left-0 h-2 rounded-full bg-yellow-300/60"
//                   />

//                 </span>

//               </h1>

//               {/* Description */}

//               <div className="mt-8 max-w-[650px]">

//                 <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
//                   At{" "}
//                   <span className="font-bold text-slate-950">
//                     SQL Centrix
//                   </span>
//                   , every strategy, campaign, website, advertisement, and piece of content has one objective: Bringing your business, qualified opportunities that convert into revenue.
//                 </p>

//                 {/* Divider */}

//                 <div className="my-5 flex items-center gap-3">

//                   <div className="h-px w-14 bg-slate-200" />

//                   <motion.div
//                     animate={{
//                       scale: [1, 1.4, 1],
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                     }}
//                     className="h-1.5 w-1.5 rounded-full bg-yellow-400"
//                   />

//                   <div className="h-px w-14 bg-slate-200" />

//                 </div>

//                 <p className="text-sm font-bold text-slate-800 sm:text-base">
//                   Marketing is the process. SQL&apos;s are the results.
//                 </p>

//                 <p className="mt-1 text-sm text-slate-500 sm:text-base">
//                   At SQL Centrix the results are our starting point.
//                 </p>

//               </div>

//               {/* CTA */}

//               <div className="mt-8">

//                 <motion.a
//                   href="#contact"
//                   whileHover={{
//                     y: -4,
//                     scale: 1.025,
//                   }}
//                   whileTap={{
//                     scale: 0.97,
//                   }}
//                   className="group relative inline-flex items-center gap-4 overflow-hidden rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white shadow-[0_22px_50px_rgba(15,23,42,0.18)] transition-all duration-300 sm:px-6"
//                 >

//                   {/* Button Shine */}

//                   <span className="absolute inset-y-0 -left-full w-1/3 skew-x-[-20deg] bg-white/10 transition-all duration-700 group-hover:left-[120%]" />

//                   <span className="relative z-10">
//                     Get Your Free Growth Strategy
//                   </span>

//                   <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-slate-950 transition-transform duration-300 group-hover:rotate-45">
//                     <ArrowUpRight className="h-4 w-4" />
//                   </span>

//                 </motion.a>

//               </div>

//             </motion.div>

//             {/* =================================================
//                 RIGHT VISUAL
//             ================================================= */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: 35,
//                 scale: 0.94,
//               }}
//               animate={{
//                 opacity: 1,
//                 x: 0,
//                 scale: 1,
//               }}
//               transition={{
//                 duration: 1,
//                 delay: 0.2,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className="relative hidden h-[500px] lg:block"
//             >

//               {/* Outer Orbit */}

//               <motion.div
//                 animate={{
//                   rotate: [0, 360],
//                 }}
//                 transition={{
//                   duration: 35,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-yellow-300/60"
//               />

//               {/* Inner Circle */}

//               <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200" />

//               {/* Main Card */}

//               <motion.div
//                 animate={{
//                   y: [0, -7, 0],
//                 }}
//                 transition={{
//                   duration: 6,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute left-1/2 top-1/2 z-10 w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white bg-white/90 p-5 shadow-[0_35px_90px_rgba(15,23,42,0.12)] backdrop-blur-2xl"
//               >

//                 {/* Card Header */}

//                 <div className="flex items-center justify-between">

//                   <div>

//                     <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">
//                       Growth System
//                     </p>

//                     <p className="mt-1 text-base font-black tracking-tight text-slate-950">
//                       Qualified Pipeline
//                     </p>

//                   </div>

//                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
//                     <TrendingUp className="h-4 w-4" />
//                   </div>

//                 </div>

//                 {/* Visual */}

//                 <div className="relative mt-5 h-[200px] overflow-hidden rounded-[1.5rem] bg-slate-950">

//                   {/* Grid */}

//                   <div
//                     className="
//                       absolute
//                       inset-0
//                       opacity-20
//                       bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
//                       bg-[size:40px_40px]
//                     "
//                   />

//                   {/* Yellow Orb */}

//                   <motion.div
//                     animate={{
//                       scale: [1, 1.15, 1],
//                       x: [0, 15, 0],
//                     }}
//                     transition={{
//                       duration: 5,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-400"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30" />

//                   {/* Center */}

//                   <div className="absolute inset-0 flex flex-col items-center justify-center">

//                     <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/50">
//                       Results
//                     </p>

//                     <p className="mt-1 text-6xl font-black tracking-[-0.08em] text-white">
//                       SQL
//                     </p>

//                     <div className="mt-3 h-1 w-16 rounded-full bg-yellow-400" />

//                   </div>

//                   {/* Floating Dot */}

//                   <motion.div
//                     animate={{
//                       y: [0, -12, 0],
//                       opacity: [0.5, 1, 0.5],
//                     }}
//                     transition={{
//                       duration: 2.5,
//                       repeat: Infinity,
//                     }}
//                     className="absolute bottom-6 left-7 h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.8)]"
//                   />

//                 </div>

//                 {/* Stats */}

//                 <div className="mt-4 grid grid-cols-2 gap-3">

//                   {/* Qualified */}

//                   <div className="rounded-2xl bg-slate-50 p-3">

//                     <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
//                       <CheckCircle2 className="h-4 w-4" />
//                     </div>

//                     <p className="mt-3 text-sm font-black text-slate-900">
//                       Qualified
//                     </p>

//                     <p className="mt-0.5 text-[8px] text-slate-400">
//                       Opportunities
//                     </p>

//                   </div>

//                   {/* Revenue */}

//                   <div className="rounded-2xl bg-slate-50 p-3">

//                     <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
//                       <MousePointer2 className="h-4 w-4" />
//                     </div>

//                     <p className="mt-3 text-sm font-black text-slate-900">
//                       Revenue
//                     </p>

//                     <p className="mt-0.5 text-[8px] text-slate-400">
//                       Focused Growth
//                     </p>

//                   </div>

//                 </div>

//               </motion.div>

//               {/* =================================================
//                   FLOATING LEAD QUALITY CARD
//               ================================================= */}

//               <motion.div
//                 animate={{
//                   y: [0, -10, 0],
//                   rotate: [0, 1.5, 0],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute left-[2%] top-[16%] z-20 rounded-2xl border border-yellow-200 bg-yellow-50 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
//               >

//                 <div className="flex items-center gap-2.5">

//                   <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-slate-950">
//                     <Sparkles className="h-4 w-4" />
//                   </div>

//                   <div>

//                     <p className="text-[9px] font-black text-slate-900">
//                       Lead Quality
//                     </p>

//                     <p className="mt-0.5 text-[8px] text-yellow-700">
//                       High intent
//                     </p>

//                   </div>

//                 </div>

//               </motion.div>

//               {/* =================================================
//                   FLOATING CONVERSION CARD
//               ================================================= */}

//               <motion.div
//                 animate={{
//                   y: [0, 10, 0],
//                 }}
//                 transition={{
//                   duration: 4.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute bottom-[12%] right-0 z-20 flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-[0_20px_50px_rgba(15,23,42,0.1)]"
//               >

//                 <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />

//                 <span className="text-[9px] font-bold text-slate-600">
//                   Conversion Driven
//                 </span>

//               </motion.div>

//             </motion.div>

//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           BOTTOM ALIGNMENT
//       ===================================================== */}

//       <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 w-full max-w-[1180px] -translate-x-1/2">

//         <div className="flex items-center gap-4">

//           <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-slate-300">
//             SQL CENTRIX
//           </span>

//           <div className="h-px flex-1 bg-slate-200" />

//           <div className="flex items-center gap-1.5">

//             <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />

//             <motion.span
//               animate={{
//                 width: [18, 38, 18],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="h-1.5 rounded-full bg-yellow-400"
//             />

//             <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }


















"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  MousePointer2,
  Target,
  Zap,
  BarChart3,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fcfcfa] text-slate-950">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main natural yellow glow */}
        <motion.div
          animate={{
            x: [0, 35, -15, 0],
            y: [0, -25, 20, 0],
            scale: [1, 1.08, 0.98, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 -top-56 h-[720px] w-[720px] rounded-full bg-yellow-300/20 blur-[150px]"
        />

        {/* Secondary warm glow */}
        <motion.div
          animate={{
            x: [0, -25, 20, 0],
            y: [0, 20, -15, 0],
            scale: [1, 0.95, 1.06, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-64 -left-56 h-[600px] w-[600px] rounded-full bg-amber-200/20 blur-[150px]"
        />

        {/* Soft white center */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-[130px]" />

        {/* Premium grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.32]
            bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)]
            bg-[size:5rem_5rem]
          "
        />

        {/* Fine radial texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.45)_75%,rgba(255,255,255,0.8)_100%)]" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-20 mx-auto w-full max-w-[1240px] px-6 lg:px-8">

        {/* ===================================================
            TOP BAR
        =================================================== */}

        <div className="flex items-center justify-between pt-6 lg:pt-8">

          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-[13px] bg-slate-950 shadow-[0_12px_30px_rgba(15,23,42,0.16)]">
              <Sparkles className="h-4 w-4 text-yellow-400" />

              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-yellow-400 ring-4 ring-[#fcfcfa]" />
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-950">
                SQL Centrix
              </p>

              <p className="mt-0.5 text-[8px] font-medium text-slate-400">
                Revenue-driven growth
              </p>
            </div>
          </motion.div>

          {/* Status */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hidden items-center gap-2.5 rounded-full border border-slate-200/80 bg-white/75 px-4 py-2.5 shadow-[0_8px_25px_rgba(15,23,42,0.05)] backdrop-blur-xl sm:flex"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>

            <span className="text-[9px] font-bold tracking-[0.14em] text-slate-500">
              REVENUE-DRIVEN B2B GROWTH
            </span>
          </motion.div>
        </div>

        {/* ===================================================
            HERO
        =================================================== */}

        <div className="flex min-h-[calc(100vh-90px)] items-center pb-16 pt-14 lg:pb-20 lg:pt-10">

          <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-[1.03fr_0.97fr] lg:gap-12">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-20"
            >

              {/* Label */}

              <div className="mb-7 flex items-center gap-3">

                <span className="h-[2px] w-10 rounded-full bg-yellow-500" />

                <span className="text-[10px] font-black uppercase tracking-[0.26em] text-yellow-600 sm:text-xs">
                  Sub Heading
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              </div>

              {/* Heading */}

              <h1 className="max-w-[760px] text-[clamp(3.4rem,6.3vw,6.9rem)] font-black leading-[0.88] tracking-[-0.078em] text-slate-950">

                Nothing But{" "}

                <span className="relative inline-block">

                  <span className="relative z-10 text-yellow-500">
                    Sales Qualified Leads.
                  </span>

                  {/* Marker */}

                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "68%", opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.75,
                      ease: "easeOut",
                    }}
                    className="absolute -bottom-3 left-0 h-2.5 rounded-full bg-yellow-300/60"
                  />

                  {/* Glow */}

                  <span className="absolute -inset-x-3 bottom-0 -z-10 h-8 rounded-full bg-yellow-200/20 blur-xl" />
                </span>
              </h1>

              {/* Description */}

              <div className="mt-9 max-w-[650px]">

                <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
                  At{" "}
                  <span className="font-bold text-slate-950">
                    SQL Centrix
                  </span>
                  , every strategy, campaign, website, advertisement, and piece of content has one objective: Bringing your business, qualified opportunities that convert into revenue.
                </p>

                {/* Divider */}

                <div className="my-6 flex items-center gap-3">

                  <div className="h-px w-16 bg-slate-200" />

                  <motion.div
                    animate={{
                      scale: [1, 1.45, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-yellow-500"
                  />

                  <div className="h-px w-16 bg-slate-200" />
                </div>

                <p className="text-sm font-bold text-slate-800 sm:text-base">
                  Marketing is the process. SQL&apos;s are the results.
                </p>

                <p className="mt-1.5 text-sm text-slate-500 sm:text-base">
                  At SQL Centrix the results are our starting point.
                </p>
              </div>

              {/* CTA */}

              <div className="mt-9 flex flex-wrap items-center gap-5">

                <motion.a
                  href="#contact"
                  whileHover={{
                    y: -4,
                    scale: 1.025,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group relative inline-flex items-center gap-4 overflow-hidden rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white shadow-[0_22px_50px_rgba(15,23,42,0.16)] sm:px-6"
                >

                  {/* Shine */}

                  <span className="absolute inset-y-0 -left-full w-1/3 skew-x-[-20deg] bg-white/10 transition-all duration-700 group-hover:left-[120%]" />

                  <span className="relative z-10">
                    Get Your Free Growth Strategy
                  </span>

                  <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-slate-950 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </motion.a>

                {/* Small trust text */}

                <div className="hidden items-center gap-2 sm:flex">
                  <div className="flex -space-x-2">
                    <span className="h-7 w-7 rounded-full border-2 border-white bg-slate-200" />
                    <span className="h-7 w-7 rounded-full border-2 border-white bg-yellow-200" />
                    <span className="h-7 w-7 rounded-full border-2 border-white bg-slate-300" />
                  </div>

                  <span className="text-[10px] font-semibold text-slate-400">
                    Revenue focused
                  </span>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT ORBIT SYSTEM
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.88,
                x: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 1.1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative mx-auto hidden h-[570px] w-full max-w-[560px] lg:block"
            >

              {/* Ambient glow */}

              <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/20 blur-[90px]" />

              {/* Outer Orbit */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 38,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-yellow-300/70"
              >

                {/* Orbit point */}

                <div className="absolute left-1/2 -top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-yellow-400 shadow-[0_0_25px_rgba(234,179,8,0.65)]" />

                <div className="absolute bottom-[14%] left-[7%] h-2 w-2 rounded-full bg-slate-300" />

                <div className="absolute right-[10%] top-[19%] h-2 w-2 rounded-full bg-yellow-500" />
              </motion.div>

              {/* Second orbit */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/90"
              >

                <div className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-slate-900 shadow-lg" />
              </motion.div>

              {/* Inner orbit */}

              <div className="absolute left-1/2 top-1/2 h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-200/60" />

              {/* =================================================
                  MAIN GLASS CARD
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, -9, 0],
                  rotateZ: [0, 0.5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 z-20 w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] border border-white/90 bg-white/85 p-5 shadow-[0_40px_100px_rgba(15,23,42,0.14)] backdrop-blur-2xl"
              >

                {/* Card top */}

                <div className="flex items-center justify-between px-1">

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Growth System
                    </p>

                    <p className="mt-1 text-base font-black tracking-tight text-slate-950">
                      Qualified Pipeline
                    </p>
                  </div>

                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600 ring-1 ring-yellow-200">
                    <TrendingUp className="h-4 w-4" />

                    <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-white" />
                  </div>
                </div>

                {/* Visualization */}

                <div className="relative mt-5 h-[205px] overflow-hidden rounded-[1.8rem] bg-slate-950">

                  {/* grid */}

                  <div
                    className="
                      absolute inset-0 opacity-[0.13]
                      bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
                      bg-[size:38px_38px]
                    "
                  />

                  {/* Yellow orb */}

                  <motion.div
                    animate={{
                      scale: [1, 1.18, 1],
                      x: [0, 15, 0],
                      y: [0, 8, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-400 blur-[1px]"
                  />

                  {/* Dark overlay */}

                  <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-transparent to-black/50" />

                  {/* mini lines */}

                  <div className="absolute bottom-7 left-7 right-7 flex items-end gap-2 opacity-60">
                    <span className="h-7 w-2 rounded-full bg-white/20" />
                    <span className="h-11 w-2 rounded-full bg-white/30" />
                    <span className="h-16 w-2 rounded-full bg-yellow-300/60" />
                    <span className="h-12 w-2 rounded-full bg-yellow-400/80" />
                    <span className="h-20 w-2 rounded-full bg-yellow-400" />
                    <span className="h-24 w-2 rounded-full bg-yellow-300" />
                  </div>

                  {/* center */}

                  <div className="absolute inset-0 flex flex-col items-center justify-center">

                    <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/50">
                      Results
                    </p>

                    <p className="mt-1 text-[4.5rem] font-black leading-none tracking-[-0.09em] text-white">
                      SQL
                    </p>

                    <div className="mt-4 h-1 w-16 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                  </div>
                </div>

                {/* Stats */}

                <div className="mt-4 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3">

                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>

                    <p className="mt-3 text-sm font-black text-slate-900">
                      Qualified
                    </p>

                    <p className="mt-0.5 text-[8px] text-slate-400">
                      Opportunities
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3">

                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <MousePointer2 className="h-4 w-4" />
                    </div>

                    <p className="mt-3 text-sm font-black text-slate-900">
                      Revenue
                    </p>

                    <p className="mt-0.5 text-[8px] text-slate-400">
                      Focused Growth
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  FLOATING QUALITY CARD
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 1.5, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-0 top-[17%] z-30 rounded-2xl border border-yellow-200/80 bg-white/90 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.1)] backdrop-blur-xl"
              >

                <div className="flex items-center gap-2.5">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-slate-950 shadow-sm">
                    <Sparkles className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[9px] font-black text-slate-900">
                      Lead Quality
                    </p>

                    <p className="mt-0.5 text-[8px] text-yellow-700">
                      High intent
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  FLOATING TARGET CARD
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[-5px] top-[30%] z-30 flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/90 px-3 py-2.5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl"
              >

                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950 text-yellow-400">
                  <Target className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[9px] font-black text-slate-900">
                    High Intent
                  </p>

                  <p className="text-[8px] text-slate-400">
                    Targeted
                  </p>
                </div>
              </motion.div>

              {/* =================================================
                  BOTTOM FLOATING CARD
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[10%] right-[-4%] z-30 flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/90 px-4 py-2.5 shadow-[0_20px_50px_rgba(15,23,42,0.1)] backdrop-blur-xl"
              >

                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                </span>

                <span className="text-[9px] font-bold text-slate-600">
                  Conversion Driven
                </span>
              </motion.div>

              {/* =================================================
                  SMALL DATA CHIP
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, -7, 0],
                  rotate: [0, -1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[8%] left-[2%] z-30 flex items-center gap-2 rounded-xl border border-yellow-200 bg-yellow-50/90 px-3 py-2 shadow-lg backdrop-blur-xl"
              >

                <BarChart3 className="h-3.5 w-3.5 text-yellow-600" />

                <span className="text-[8px] font-black uppercase tracking-wider text-yellow-800">
                  Growth
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM LINE
      ===================================================== */}

      <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 hidden w-full max-w-[1240px] -translate-x-1/2 px-6 lg:block">

        <div className="flex items-center gap-4">

          <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-slate-300">
            SQL CENTRIX
          </span>

          <div className="h-px flex-1 bg-slate-200" />

          <div className="flex items-center gap-1.5">

            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />

            <motion.span
              animate={{
                width: [18, 38, 18],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 rounded-full bg-yellow-500"
            />

            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          </div>
        </div>
      </div>
    </section>
  );
}


