// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Sparkles,
//   CheckCircle2,
//   TrendingUp,
//   MousePointer2,
//   Target,
//   Zap,
//   BarChart3,
// } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#fcfcfa] text-slate-950">

//       {/* =====================================================
//           BACKGROUND
//       ===================================================== */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">

//         {/* Main natural yellow glow */}
//         <motion.div
//           animate={{
//             x: [0, 35, -15, 0],
//             y: [0, -25, 20, 0],
//             scale: [1, 1.08, 0.98, 1],
//           }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -right-48 -top-56 h-[720px] w-[720px] rounded-full bg-yellow-300/20 blur-[150px]"
//         />

//         {/* Secondary warm glow */}
//         <motion.div
//           animate={{
//             x: [0, -25, 20, 0],
//             y: [0, 20, -15, 0],
//             scale: [1, 0.95, 1.06, 1],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -bottom-64 -left-56 h-[600px] w-[600px] rounded-full bg-amber-200/20 blur-[150px]"
//         />

//         {/* Soft white center */}
//         <div className="absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-[130px]" />

//         {/* Premium grid */}
//         <div
//           className="
//             absolute inset-0
//             opacity-[0.32]
//             bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)]
//             bg-[size:5rem_5rem]
//           "
//         />

//         {/* Fine radial texture */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.45)_75%,rgba(255,255,255,0.8)_100%)]" />
//       </div>

//       {/* =====================================================
//           MAIN CONTAINER
//       ===================================================== */}

//       <div className="relative z-20 mx-auto w-full max-w-[1240px] px-6 lg:px-8">

//         {/* ===================================================
//             TOP BAR
//         =================================================== */}

//         <div className="flex items-center justify-between pt-6 lg:pt-8">

//           {/* Brand */}

//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="flex items-center gap-3"
//           >
//             <div className="relative flex h-10 w-10 items-center justify-center rounded-[13px] bg-slate-950 shadow-[0_12px_30px_rgba(15,23,42,0.16)]">
//               <Sparkles className="h-4 w-4 text-yellow-400" />

//               <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-yellow-400 ring-4 ring-[#fcfcfa]" />
//             </div>

//             <div>
//               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-950">
//                 SQL Centrix
//               </p>

//               <p className="mt-0.5 text-[8px] font-medium text-slate-400">
//                 Revenue-driven growth
//               </p>
//             </div>
//           </motion.div>

//           {/* Status */}

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             className="hidden items-center gap-2.5 rounded-full border border-slate-200/80 bg-white/75 px-4 py-2.5 shadow-[0_8px_25px_rgba(15,23,42,0.05)] backdrop-blur-xl sm:flex"
//           >
//             <span className="relative flex h-2 w-2">
//               <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
//               <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
//             </span>

//             <span className="text-[9px] font-bold tracking-[0.14em] text-slate-500">
//               REVENUE-DRIVEN B2B GROWTH
//             </span>
//           </motion.div>
//         </div>

//         {/* ===================================================
//             HERO
//         =================================================== */}

//         <div className="flex min-h-[calc(100vh-90px)] items-center pb-16 pt-14 lg:pb-20 lg:pt-10">

//           <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-[1.03fr_0.97fr] lg:gap-12">

//             {/* =================================================
//                 LEFT CONTENT
//             ================================================= */}

//             <motion.div
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.9,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className="relative z-20"
//             >

//               {/* Label */}

//               <div className="mb-7 flex items-center gap-3">

//                 <span className="h-[2px] w-10 rounded-full bg-yellow-500" />

//                 <span className="text-[10px] font-black uppercase tracking-[0.26em] text-yellow-600 sm:text-xs">
//                   Sub Heading
//                 </span>

//                 <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
//               </div>

//               {/* Heading */}

//               <h1 className="max-w-[760px] text-[clamp(3.4rem,6.3vw,6.9rem)] font-black leading-[0.88] tracking-[-0.078em] text-slate-950">

//                 Nothing But{" "}

//                 <span className="relative inline-block">

//                   <span className="relative z-10 text-yellow-500">
//                     Sales Qualified Leads.
//                   </span>

//                   {/* Marker */}

//                   <motion.span
//                     initial={{ width: 0, opacity: 0 }}
//                     animate={{ width: "68%", opacity: 1 }}
//                     transition={{
//                       duration: 1,
//                       delay: 0.75,
//                       ease: "easeOut",
//                     }}
//                     className="absolute -bottom-3 left-0 h-2.5 rounded-full bg-yellow-300/60"
//                   />

//                   {/* Glow */}

//                   <span className="absolute -inset-x-3 bottom-0 -z-10 h-8 rounded-full bg-yellow-200/20 blur-xl" />
//                 </span>
//               </h1>

//               {/* Description */}

//               <div className="mt-9 max-w-[650px]">

//                 <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
//                   At{" "}
//                   <span className="font-bold text-slate-950">
//                     SQL Centrix
//                   </span>
//                   , every strategy, campaign, website, advertisement, and piece of content has one objective: Bringing your business, qualified opportunities that convert into revenue.
//                 </p>

//                 {/* Divider */}

//                 <div className="my-6 flex items-center gap-3">

//                   <div className="h-px w-16 bg-slate-200" />

//                   <motion.div
//                     animate={{
//                       scale: [1, 1.45, 1],
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                     }}
//                     className="h-1.5 w-1.5 rounded-full bg-yellow-500"
//                   />

//                   <div className="h-px w-16 bg-slate-200" />
//                 </div>

//                 <p className="text-sm font-bold text-slate-800 sm:text-base">
//                   Marketing is the process. SQL&apos;s are the results.
//                 </p>

//                 <p className="mt-1.5 text-sm text-slate-500 sm:text-base">
//                   At SQL Centrix the results are our starting point.
//                 </p>
//               </div>

//               {/* CTA */}

//               <div className="mt-9 flex flex-wrap items-center gap-5">

//                 <motion.a
//                   href="#contact"
//                   whileHover={{
//                     y: -4,
//                     scale: 1.025,
//                   }}
//                   whileTap={{
//                     scale: 0.97,
//                   }}
//                   className="group relative inline-flex items-center gap-4 overflow-hidden rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white shadow-[0_22px_50px_rgba(15,23,42,0.16)] sm:px-6"
//                 >

//                   {/* Shine */}

//                   <span className="absolute inset-y-0 -left-full w-1/3 skew-x-[-20deg] bg-white/10 transition-all duration-700 group-hover:left-[120%]" />

//                   <span className="relative z-10">
//                     Get Your Free Growth Strategy
//                   </span>

//                   <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-slate-950 transition-transform duration-300 group-hover:rotate-45">
//                     <ArrowUpRight className="h-4 w-4" />
//                   </span>
//                 </motion.a>

//                 {/* Small trust text */}

//                 <div className="hidden items-center gap-2 sm:flex">
//                   <div className="flex -space-x-2">
//                     <span className="h-7 w-7 rounded-full border-2 border-white bg-slate-200" />
//                     <span className="h-7 w-7 rounded-full border-2 border-white bg-yellow-200" />
//                     <span className="h-7 w-7 rounded-full border-2 border-white bg-slate-300" />
//                   </div>

//                   <span className="text-[10px] font-semibold text-slate-400">
//                     Revenue focused
//                   </span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* =================================================
//                 RIGHT ORBIT SYSTEM
//             ================================================= */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scale: 0.88,
//                 x: 30,
//               }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//                 x: 0,
//               }}
//               transition={{
//                 duration: 1.1,
//                 delay: 0.2,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className="relative mx-auto hidden h-[570px] w-full max-w-[560px] lg:block"
//             >

//               {/* Ambient glow */}

//               <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/20 blur-[90px]" />

//               {/* Outer Orbit */}

//               <motion.div
//                 animate={{
//                   rotate: 360,
//                 }}
//                 transition={{
//                   duration: 38,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-yellow-300/70"
//               >

//                 {/* Orbit point */}

//                 <div className="absolute left-1/2 -top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-yellow-400 shadow-[0_0_25px_rgba(234,179,8,0.65)]" />

//                 <div className="absolute bottom-[14%] left-[7%] h-2 w-2 rounded-full bg-slate-300" />

//                 <div className="absolute right-[10%] top-[19%] h-2 w-2 rounded-full bg-yellow-500" />
//               </motion.div>

//               {/* Second orbit */}

//               <motion.div
//                 animate={{
//                   rotate: -360,
//                 }}
//                 transition={{
//                   duration: 28,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/90"
//               >

//                 <div className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-slate-900 shadow-lg" />
//               </motion.div>

//               {/* Inner orbit */}

//               <div className="absolute left-1/2 top-1/2 h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-200/60" />

//               {/* =================================================
//                   MAIN GLASS CARD
//               ================================================= */}

//               <motion.div
//                 animate={{
//                   y: [0, -9, 0],
//                   rotateZ: [0, 0.5, 0],
//                 }}
//                 transition={{
//                   duration: 7,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute left-1/2 top-1/2 z-20 w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] border border-white/90 bg-white/85 p-5 shadow-[0_40px_100px_rgba(15,23,42,0.14)] backdrop-blur-2xl"
//               >

//                 {/* Card top */}

//                 <div className="flex items-center justify-between px-1">

//                   <div>
//                     <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">
//                       Growth System
//                     </p>

//                     <p className="mt-1 text-base font-black tracking-tight text-slate-950">
//                       Qualified Pipeline
//                     </p>
//                   </div>

//                   <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600 ring-1 ring-yellow-200">
//                     <TrendingUp className="h-4 w-4" />

//                     <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-white" />
//                   </div>
//                 </div>

//                 {/* Visualization */}

//                 <div className="relative mt-5 h-[205px] overflow-hidden rounded-[1.8rem] bg-slate-950">

//                   {/* grid */}

//                   <div
//                     className="
//                       absolute inset-0 opacity-[0.13]
//                       bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
//                       bg-[size:38px_38px]
//                     "
//                   />

//                   {/* Yellow orb */}

//                   <motion.div
//                     animate={{
//                       scale: [1, 1.18, 1],
//                       x: [0, 15, 0],
//                       y: [0, 8, 0],
//                     }}
//                     transition={{
//                       duration: 6,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-400 blur-[1px]"
//                   />

//                   {/* Dark overlay */}

//                   <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-transparent to-black/50" />

//                   {/* mini lines */}

//                   <div className="absolute bottom-7 left-7 right-7 flex items-end gap-2 opacity-60">
//                     <span className="h-7 w-2 rounded-full bg-white/20" />
//                     <span className="h-11 w-2 rounded-full bg-white/30" />
//                     <span className="h-16 w-2 rounded-full bg-yellow-300/60" />
//                     <span className="h-12 w-2 rounded-full bg-yellow-400/80" />
//                     <span className="h-20 w-2 rounded-full bg-yellow-400" />
//                     <span className="h-24 w-2 rounded-full bg-yellow-300" />
//                   </div>

//                   {/* center */}

//                   <div className="absolute inset-0 flex flex-col items-center justify-center">

//                     <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/50">
//                       Results
//                     </p>

//                     <p className="mt-1 text-[4.5rem] font-black leading-none tracking-[-0.09em] text-white">
//                       SQL
//                     </p>

//                     <div className="mt-4 h-1 w-16 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
//                   </div>
//                 </div>

//                 {/* Stats */}

//                 <div className="mt-4 grid grid-cols-2 gap-3">

//                   <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3">

//                     <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
//                       <CheckCircle2 className="h-4 w-4" />
//                     </div>

//                     <p className="mt-3 text-sm font-black text-slate-900">
//                       Qualified
//                     </p>

//                     <p className="mt-0.5 text-[8px] text-slate-400">
//                       Opportunities
//                     </p>
//                   </div>

//                   <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3">

//                     <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
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
//                   FLOATING QUALITY CARD
//               ================================================= */}

//               <motion.div
//                 animate={{
//                   y: [0, -12, 0],
//                   rotate: [0, 1.5, 0],
//                 }}
//                 transition={{
//                   duration: 5.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute left-0 top-[17%] z-30 rounded-2xl border border-yellow-200/80 bg-white/90 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.1)] backdrop-blur-xl"
//               >

//                 <div className="flex items-center gap-2.5">

//                   <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-slate-950 shadow-sm">
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
//                   FLOATING TARGET CARD
//               ================================================= */}

//               <motion.div
//                 animate={{
//                   y: [0, 10, 0],
//                   x: [0, 4, 0],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute right-[-5px] top-[30%] z-30 flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/90 px-3 py-2.5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl"
//               >

//                 <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950 text-yellow-400">
//                   <Target className="h-4 w-4" />
//                 </div>

//                 <div>
//                   <p className="text-[9px] font-black text-slate-900">
//                     High Intent
//                   </p>

//                   <p className="text-[8px] text-slate-400">
//                     Targeted
//                   </p>
//                 </div>
//               </motion.div>

//               {/* =================================================
//                   BOTTOM FLOATING CARD
//               ================================================= */}

//               <motion.div
//                 animate={{
//                   y: [0, 10, 0],
//                 }}
//                 transition={{
//                   duration: 4.8,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute bottom-[10%] right-[-4%] z-30 flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/90 px-4 py-2.5 shadow-[0_20px_50px_rgba(15,23,42,0.1)] backdrop-blur-xl"
//               >

//                 <span className="relative flex h-2 w-2">
//                   <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-50" />
//                   <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
//                 </span>

//                 <span className="text-[9px] font-bold text-slate-600">
//                   Conversion Driven
//                 </span>
//               </motion.div>

//               {/* =================================================
//                   SMALL DATA CHIP
//               ================================================= */}

//               <motion.div
//                 animate={{
//                   y: [0, -7, 0],
//                   rotate: [0, -1, 0],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute bottom-[8%] left-[2%] z-30 flex items-center gap-2 rounded-xl border border-yellow-200 bg-yellow-50/90 px-3 py-2 shadow-lg backdrop-blur-xl"
//               >

//                 <BarChart3 className="h-3.5 w-3.5 text-yellow-600" />

//                 <span className="text-[8px] font-black uppercase tracking-wider text-yellow-800">
//                   Growth
//                 </span>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           BOTTOM LINE
//       ===================================================== */}

//       <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 hidden w-full max-w-[1240px] -translate-x-1/2 px-6 lg:block">

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
//               className="h-1.5 rounded-full bg-yellow-500"
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
  BarChart3,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fcfcfa] text-slate-950">

      {/* =====================================================
          PREMIUM BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Natural Yellow Glow */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 20, 0],
            scale: [1, 1.08, 0.98, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-52 -top-56 h-[760px] w-[760px] rounded-full bg-yellow-300/20 blur-[160px]"
        />

        {/* Warm Secondary Glow */}
        <motion.div
          animate={{
            x: [0, -25, 20, 0],
            y: [0, 20, -15, 0],
            scale: [1, 0.96, 1.05, 1],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-64 -left-56 h-[620px] w-[620px] rounded-full bg-amber-200/20 blur-[155px]"
        />

        {/* Center White Light */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-[130px]" />

        {/* Fine Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.30]
            bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)]
            bg-[size:5rem_5rem]
          "
        />

        {/* Soft Radial Fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.35)_65%,rgba(255,255,255,0.8)_100%)]" />

        {/* Small decorative dots */}
        <div className="absolute left-[8%] top-[25%] h-1 w-1 rounded-full bg-yellow-400/60" />
        <div className="absolute right-[12%] top-[38%] h-1.5 w-1.5 rounded-full bg-yellow-500/40" />
        <div className="absolute bottom-[22%] left-[42%] h-1 w-1 rounded-full bg-slate-300" />
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
            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.05,
              }}
              className="relative flex h-10 w-10 items-center justify-center rounded-[13px] bg-slate-950 shadow-[0_12px_30px_rgba(15,23,42,0.16)]"
            >
              <Sparkles className="h-4 w-4 text-yellow-400" />

              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-yellow-400 ring-4 ring-[#fcfcfa]" />
            </motion.div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-950">
                SQL Centrix
              </p>

              <p className="mt-0.5 text-[8px] font-medium text-slate-400">
                Revenue-driven growth
              </p>
            </div>
          </motion.div>

          {/* Revenue Badge */}

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
            HERO AREA
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

              {/* Sub Heading */}

              <div className="mb-7 flex items-center gap-3">

                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-[2px] rounded-full bg-yellow-500"
                />

                <span className="text-[10px] font-black uppercase tracking-[0.26em] text-yellow-600 sm:text-xs">
                  Sub Heading
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              </div>

              {/* Main Heading */}

              <h1 className="max-w-[760px] text-[clamp(3.4rem,6.3vw,6.9rem)] font-black leading-[0.88] tracking-[-0.078em] text-slate-950">

                Nothing But{" "}

                <span className="relative inline-block">

                  <span className="relative z-10 text-yellow-500">
                    Sales Qualified Leads.
                  </span>

                  {/* Yellow Marker */}

                  <motion.span
                    initial={{
                      width: 0,
                      opacity: 0,
                    }}
                    animate={{
                      width: "68%",
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.75,
                      ease: "easeOut",
                    }}
                    className="absolute -bottom-3 left-0 h-2.5 rounded-full bg-yellow-300/60"
                  />

                  {/* Soft Glow */}

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
                      scale: [1, 1.5, 1],
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

                {/* Trust */}

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
                RIGHT PREMIUM ORBIT
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

              {/* Ambient center */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.45, 0.7, 0.45],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/20 blur-[90px]"
              />

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

                <div className="absolute left-1/2 -top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-yellow-400 shadow-[0_0_25px_rgba(234,179,8,0.65)]" />

                <div className="absolute bottom-[14%] left-[7%] h-2 w-2 rounded-full bg-slate-300" />

                <div className="absolute right-[10%] top-[19%] h-2 w-2 rounded-full bg-yellow-500" />
              </motion.div>

              {/* Middle Orbit */}

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

              {/* Inner Orbit */}

              <div className="absolute left-1/2 top-1/2 h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-200/60" />

              {/* =================================================
                  MAIN CARD
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
                whileHover={{
                  scale: 1.015,
                  boxShadow:
                    "0 45px 110px rgba(15,23,42,0.17)",
                }}
                className="absolute left-1/2 top-1/2 z-20 w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] border border-white/90 bg-white/85 p-5 shadow-[0_40px_100px_rgba(15,23,42,0.14)] backdrop-blur-2xl transition-shadow duration-500"
              >

                {/* Top */}

                <div className="flex items-center justify-between px-1">

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Growth System
                    </p>

                    <p className="mt-1 text-base font-black tracking-tight text-slate-950">
                      Qualified Pipeline
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600 ring-1 ring-yellow-200"
                  >
                    <TrendingUp className="h-4 w-4" />

                    <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-white" />
                  </motion.div>
                </div>

                {/* Dashboard */}

                <div className="relative mt-5 h-[205px] overflow-hidden rounded-[1.8rem] bg-slate-950">

                  {/* Grid */}

                  <div
                    className="
                      absolute inset-0 opacity-[0.13]
                      bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
                      bg-[size:38px_38px]
                    "
                  />

                  {/* Orb */}

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
                    className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-400"
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-transparent to-black/50" />

                  {/* Data bars */}

                  <div className="absolute bottom-7 left-7 right-7 flex items-end gap-2 opacity-60">

                    <span className="h-7 w-2 rounded-full bg-white/20" />
                    <span className="h-11 w-2 rounded-full bg-white/30" />
                    <span className="h-16 w-2 rounded-full bg-yellow-300/60" />
                    <span className="h-12 w-2 rounded-full bg-yellow-400/80" />
                    <span className="h-20 w-2 rounded-full bg-yellow-400" />
                    <span className="h-24 w-2 rounded-full bg-yellow-300" />
                  </div>

                  {/* Center */}

                  <div className="absolute inset-0 flex flex-col items-center justify-center">

                    <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/50">
                      Results
                    </p>

                    <motion.p
                      animate={{
                        scale: [1, 1.025, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="mt-1 text-[4.5rem] font-black leading-none tracking-[-0.09em] text-white"
                    >
                      SQL
                    </motion.p>

                    <div className="mt-4 h-1 w-16 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                  </div>

                  {/* Pulse */}

                  <motion.div
                    animate={{
                      opacity: [0.2, 0.8, 0.2],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                    className="absolute bottom-7 left-7 h-2 w-2 rounded-full bg-yellow-400"
                  />
                </div>

                {/* Stats */}

                <div className="mt-4 grid grid-cols-2 gap-3">

                  <motion.div
                    whileHover={{ y: -3 }}
                    className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3"
                  >

                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>

                    <p className="mt-3 text-sm font-black text-slate-900">
                      Qualified
                    </p>

                    <p className="mt-0.5 text-[8px] text-slate-400">
                      Opportunities
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -3 }}
                    className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3"
                  >

                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <MousePointer2 className="h-4 w-4" />
                    </div>

                    <p className="mt-3 text-sm font-black text-slate-900">
                      Revenue
                    </p>

                    <p className="mt-0.5 text-[8px] text-slate-400">
                      Focused Growth
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* =================================================
                  LEAD QUALITY
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
                whileHover={{
                  scale: 1.04,
                }}
                className="absolute left-0 top-[17%] z-30 rounded-2xl border border-yellow-200/80 bg-white/90 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.1)] backdrop-blur-xl"
              >

                <div className="flex items-center gap-2.5">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-slate-950">
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
                  TARGET CARD
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
                whileHover={{
                  scale: 1.04,
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
                  CONVERSION CARD
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
                whileHover={{
                  y: -3,
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
                  GROWTH CHIP
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
          BOTTOM ALIGNMENT
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