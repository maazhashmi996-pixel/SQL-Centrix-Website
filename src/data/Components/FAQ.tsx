// // "use client";
// // import React, { useRef } from "react";
// // import { motion, useScroll, useTransform, useInView } from "framer-motion";

// // const processSteps = [
// //   {
// //     step: "01",
// //     title: "Discovery & Strategy",
// //     description: "We analyze your brand, target audience, and competitors to build a custom roadmap.",
// //   },
// //   {
// //     step: "02",
// //     title: "Execution & Setup",
// //     description: "Our experts set up high-converting marketing funnels, campaigns, and tracking systems.",
// //   },
// //   {
// //     step: "03",
// //     title: "Optimization & Scaling",
// //     description: "We continuously test creatives, audiences, and bids to maximize your ROAS.",
// //   },
// //   {
// //     step: "04",
// //     title: "Reporting & Growth",
// //     description: "Receive transparent, data-driven performance reports and scale your revenue aggressively.",
// //   },
// // ];

// // export default function ProcessSection() {
// //   const containerRef = useRef<HTMLDivElement>(null);

// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start 0.4", "end 0.8"],
// //   });

// //   const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

// //   return (
// //     <section
// //       ref={containerRef}
// //       id="process"
// //       className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white border-b border-purple-100/80"
// //     >
// //       <div className="max-w-7xl mx-auto px-6 relative z-10">
// //         {/* Section Header */}
// //         <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
// //           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md">
// //             Our Strategy
// //           </div>
// //           <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
// //             Performance Systems & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800">Marketing Process</span>
// //           </h2>
// //           <p className="text-slate-600 text-lg leading-relaxed">
// //             Our team of digital growth experts follow a strategic framework to deliver measurable results and scale revenue. Explore our insights and <a href="/blogs" className="text-purple-600 font-semibold underline hover:text-purple-800 transition-colors">blogs</a> for more details.
// //           </p>
// //         </div>

// //         {/* Snake Layout Wrapper */}
// //         <div className="relative max-w-6xl mx-auto py-8">
// //           {/* Desktop Curved Path SVG Line */}
// //           <svg
// //             className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block"
// //             viewBox="0 0 1000 1230"
// //             fill="none"
// //             preserveAspectRatio="none"
// //           >
// //             {/* Base Light-Gray Snake Line */}
// //             <path
// //               d="M 600 120 
// //                  C 600 240, 400 240, 400 420 
// //                  C 400 600, 600 600, 600 780 
// //                  C 600 960, 400 960, 400 1140"
// //               stroke="#E9D5FF"
// //               strokeWidth="4"
// //               strokeLinecap="round"
// //               fill="none"
// //             />
// //             {/* Scroll-Driven Animated Purple/Indigo Gradient Line */}
// //             <motion.path
// //               d="M 600 120 
// //                  C 600 240, 400 240, 400 420 
// //                  C 400 600, 600 600, 600 780 
// //                  C 600 960, 400 960, 400 1140"
// //               stroke="url(#purpleGradient)"
// //               strokeWidth="5"
// //               strokeLinecap="round"
// //               fill="none"
// //               style={{ pathLength }}
// //             />
// //             <defs>
// //               <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
// //                 <stop offset="0%" stopColor="#9333ea" />
// //                 <stop offset="100%" stopColor="#4f46e5" />
// //               </linearGradient>
// //             </defs>
// //           </svg>

// //           {/* Process Steps */}
// //           <div className="space-y-36 relative z-10">
// //             {processSteps.map((step, idx) => {
// //               const isNodeOnRight = idx % 2 === 0;

// //               return (
// //                 <div
// //                   key={step.step}
// //                   className="relative flex flex-col md:flex-row items-center justify-between"
// //                 >
// //                   {/* Left Slot */}
// //                   <div className="w-full md:w-[45%] flex justify-end pr-0 md:pr-10">
// //                     {isNodeOnRight && <ProcessCard step={step} />}
// //                   </div>

// //                   {/* Numbered Node Badge */}
// //                   <div
// //                     className={`my-6 md:my-0 md:absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 ${
// //                       isNodeOnRight ? "md:left-[60%]" : "md:left-[40%]"
// //                     }`}
// //                   >
// //                     <div className="w-16 h-16 rounded-full bg-white border-2 border-purple-500 p-1 shadow-lg shadow-purple-500/20 flex items-center justify-center">
// //                       <div className="w-full h-full rounded-full border border-purple-200 flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 font-black text-purple-700 text-lg">
// //                         {step.step}
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Right Slot */}
// //                   <div className="w-full md:w-[45%] flex justify-start pl-0 md:pl-10">
// //                     {!isNodeOnRight && <ProcessCard step={step} />}
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // // Card Sub-component with opacity and slight vertical shift on scroll
// // function ProcessCard({
// //   step,
// // }: {
// //   step: { step: string; title: string; description: string };
// // }) {
// //   const cardRef = useRef<HTMLDivElement>(null);

// //   const isInView = useInView(cardRef, {
// //     margin: "-30% 0px -30% 0px",
// //   });

// //   return (
// //     <motion.div
// //       ref={cardRef}
// //       animate={{
// //         opacity: isInView ? 1 : 0.2,
// //         y: isInView ? 0 : 20,
// //       }}
// //       transition={{ duration: 0.3, ease: "easeOut" }}
// //       className="w-full max-w-md bg-white/90 rounded-3xl p-8 shadow-[0_15px_30px_-10px_rgba(147,51,234,0.08)] border border-purple-100 backdrop-blur-xl relative overflow-hidden group hover:border-purple-300 transition-all duration-300"
// //     >
// //       <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-80" />
// //       <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors mb-3 tracking-tight">
// //         {step.title}
// //       </h3>
// //       <p className="text-slate-600 text-sm leading-relaxed">
// //         {step.description}
// //       </p>
// //     </motion.div>
// //   );
// // }




// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { Sparkles, Compass, Cpu, TrendingUp, BarChart3, ArrowUpRight } from "lucide-react";

// const processSteps = [
//   {
//     step: "01",
//     title: "Discovery & Strategy",
//     description: "We analyze your brand ecosystem, target audience, and competitive positioning in Lahore and global markets to construct a custom roadmap.",
//     icon: Compass,
//     badge: "Phase 1: Foundation",
//   },
//   {
//     step: "02",
//     title: "Execution & Setup",
//     description: "Our engineers build high-converting marketing funnels, immersive landing page interfaces, and precise tracking mechanisms.",
//     icon: Cpu,
//     badge: "Phase 2: Architecture",
//   },
//   {
//     step: "03",
//     title: "Optimization & Scaling",
//     description: "We continuously test creative variations, hyper-targeted audience segments, and bid adjustments to maximize your ROAS.",
//     icon: TrendingUp,
//     badge: "Phase 3: Acceleration",
//   },
//   {
//     step: "04",
//     title: "Reporting & Growth",
//     description: "Receive transparent, data-driven intelligence reports with real-time dashboards to aggressively scale your revenue pipeline.",
//     icon: BarChart3,
//     badge: "Phase 4: Dominance",
//   },
// ];

// export default function ProcessSection() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 0.3", "end 0.75"],
//   });

//   const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <section
//       ref={containerRef}
//       id="process"
//       className="relative py-32 px-6 lg:px-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-amber-50/20 border-b border-amber-100/60 selection:bg-amber-500 selection:text-slate-950"
//     >
//       {/* Absolute Luxurious Light Ambient Backlights */}
//       <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-300/20 via-yellow-200/20 to-amber-200/10 blur-[180px] rounded-full pointer-events-none" />

//       {/* Ultra-Fine Clean Grid Texture */}
//       <div className="absolute inset-0 bg-[radial-gradient(#f59e0b0d_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
//           <motion.div 
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-md"
//           >
//             <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
//             <span>Our Elite Strategy Framework</span>
//           </motion.div>

//           <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
//             Performance Systems & <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700">
//               Marketing Process
//             </span>
//           </h2>

//           <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
//             Our team of digital growth experts follow a strict multi-stage framework to deliver measurable results. Explore our insights and <a href="/blogs" className="text-amber-600 font-bold underline hover:text-amber-800 transition-colors">blogs</a> for deep-dive tutorials.
//           </p>
//         </div>

//         {/* Snake Layout Wrapper */}
//         <div className="relative max-w-6xl mx-auto py-8">
          
//           {/* Desktop Curved Path SVG Line */}
//           <svg
//             className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block"
//             viewBox="0 0 1000 1230"
//             fill="none"
//             preserveAspectRatio="none"
//           >
//             {/* Base Light-Gray Snake Line */}
//             <path
//               d="M 600 120 
//                  C 600 240, 400 240, 400 420 
//                  C 400 600, 600 600, 600 780 
//                  C 600 960, 400 960, 400 1140"
//               stroke="#FDE68A"
//               strokeWidth="4"
//               strokeLinecap="round"
//               fill="none"
//             />
//             {/* Scroll-Driven Animated Amber/Yellow Gradient Line */}
//             <motion.path
//               d="M 600 120 
//                  C 600 240, 400 240, 400 420 
//                  C 400 600, 600 600, 600 780 
//                  C 600 960, 400 960, 400 1140"
//               stroke="url(#amberGradientAdvanced)"
//               strokeWidth="5"
//               strokeLinecap="round"
//               fill="none"
//               style={{ pathLength }}
//             />
//             <defs>
//               <linearGradient id="amberGradientAdvanced" x1="0%" y1="0%" x2="0%" y2="100%">
//                 <stop offset="0%" stopColor="#d97706" />
//                 <stop offset="50%" stopColor="#f59e0b" />
//                 <stop offset="100%" stopColor="#b45309" />
//               </linearGradient>
//             </defs>
//           </svg>

//           {/* Process Steps List */}
//           <div className="space-y-36 relative z-10">
//             {processSteps.map((step, idx) => {
//               const isNodeOnRight = idx % 2 === 0;

//               return (
//                 <div
//                   key={step.step}
//                   className="relative flex flex-col md:flex-row items-center justify-between"
//                 >
//                   {/* Left Slot */}
//                   <div className="w-full md:w-[45%] flex justify-end pr-0 md:pr-10">
//                     {isNodeOnRight && <ProcessCard step={step} direction="left" />}
//                   </div>

//                   {/* Advanced Glowing Numbered Node Badge */}
//                   <div
//                     className={`my-6 md:my-0 md:absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 ${
//                       isNodeOnRight ? "md:left-[60%]" : "md:left-[40%]"
//                     }`}
//                   >
//                     <div className="w-20 h-20 rounded-full bg-white border-2 border-amber-500/40 p-1.5 shadow-[0_0_30px_rgba(245,158,11,0.25)] flex items-center justify-center backdrop-blur-md">
//                       <div className="w-full h-full rounded-full border border-amber-200 flex items-center justify-center bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 font-mono font-black text-slate-950 text-lg shadow-inner">
//                         {step.step}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Right Slot */}
//                   <div className="w-full md:w-[45%] flex justify-start pl-0 md:pl-10">
//                     {!isNodeOnRight && <ProcessCard step={step} direction="right" />}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// // Premium Light-Theme Glass Process Card Sub-component with Side Scroll Animations
// function ProcessCard({
//   step,
//   direction,
// }: {
//   step: { step: string; title: string; description: string; icon: any; badge: string };
//   direction: "left" | "right";
// }) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(cardRef, {
//     margin: "-30% 0px -30% 0px",
//     once: true,
//   });

//   const IconComponent = step.icon;

//   return (
//     <motion.div
//       ref={cardRef}
//       initial={{
//         opacity: 0,
//         x: direction === "left" ? -80 : 80, // Left cards slide from left, right cards from right
//       }}
//       animate={{
//         opacity: isInView ? 1 : 0,
//         x: isInView ? 0 : direction === "left" ? -80 : 80,
//       }}
//       whileHover={{ 
//         y: -6, 
//         borderColor: "rgba(245, 158, 11, 0.5)",
//         boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.15)"
//       }}
//       transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//       className="w-full max-w-md bg-white/95 hover:bg-white rounded-[2.2rem] p-8 shadow-[0_15px_35px_-10px_rgba(245,158,11,0.06)] border border-amber-200/80 backdrop-blur-2xl relative overflow-hidden group text-left space-y-5"
//     >
//       {/* Top Gradient Line Accent */}
//       <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 opacity-80 group-hover:opacity-100 transition-opacity" />

//       {/* Card Header row with badge & icon */}
//       <div className="flex items-center justify-between">
//         <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-900 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full shadow-sm">
//           {step.badge}
//         </span>
//         <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-sm">
//           <IconComponent className="w-4 h-4" />
//         </div>
//       </div>

//       <div className="space-y-2.5">
//         <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors tracking-tight flex items-center justify-between">
//           <span>{step.title}</span>
//           <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-amber-600 -translate-x-2 group-hover:translate-x-0 duration-300" />
//         </h3>
//         <p className="text-slate-600 text-sm leading-relaxed font-normal">
//           {step.description}
//         </p>
//       </div>

//     </motion.div>
//   );
// }












"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Sparkles, Compass, Cpu, TrendingUp, BarChart3, ArrowUpRight } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Brand Positioning",
    description: "Before customers buy from you, they need to trust you. We build memorable brands that create confidence from the very first interaction.",
    icon: Compass,
    badge: "Phase 1: Foundation",
  },
  {
    step: "02",
    title: "High-Converting Websites",
    description: "Your website shouldn't just look good. It should educate visitors, answer questions, and convert traffic into qualified enquiries.",
    icon: Cpu,
    badge: "Phase 2: Architecture",
  },
  {
    step: "03",
    title: "Search Visibility",
    description: "Customers can't buy from businesses they can't find. We improve your visibility across search engines and AI-powered search.",
    icon: TrendingUp,
    badge: "Phase 3: Acceleration",
  },
  {
    step: "04",
    title: "Paid Media & Content",
    description: "We create targeted advertising campaigns and authoritative content that guides prospects through their complete buying journey.",
    icon: BarChart3,
    badge: "Phase 4: Dominance",
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.3", "end 0.75"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative py-32 px-6 lg:px-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-amber-50/20 border-b border-amber-100/60 selection:bg-amber-500 selection:text-slate-950"
    >
      {/* Absolute Luxurious Light Ambient Backlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-300/20 via-yellow-200/20 to-amber-200/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Ultra-Fine Clean Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b0d_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            <span>How We Generate Sales Qualified Leads</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Sales don't happen because of one channel. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700">
              Every digital touchpoint works together.
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            At SQL Centrix, we don't believe businesses need more marketing for the sake of marketing. They need predictable systems that generate qualified opportunities. Explore our <a href="/blogs" className="text-amber-600 font-bold underline hover:text-amber-800 transition-colors">blogs</a> for deep-dive tutorials.
          </p>
        </div>

        {/* Snake Layout Wrapper */}
        <div className="relative max-w-6xl mx-auto py-8">
          
          {/* Desktop Curved Path SVG Line */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 1000 1230"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Base Light-Gray Snake Line */}
            <path
              d="M 600 120 
                 C 600 240, 400 240, 400 420 
                 C 400 600, 600 600, 600 780 
                 C 600 960, 400 960, 400 1140"
              stroke="#FDE68A"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Scroll-Driven Animated Amber/Yellow Gradient Line */}
            <motion.path
              d="M 600 120 
                 C 600 240, 400 240, 400 420 
                 C 400 600, 600 600, 600 780 
                 C 600 960, 400 960, 400 1140"
              stroke="url(#amberGradientAdvanced)"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="amberGradientAdvanced" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>
          </svg>

          {/* Process Steps List */}
          <div className="space-y-36 relative z-10">
            {processSteps.map((step, idx) => {
              const isNodeOnRight = idx % 2 === 0;

              return (
                <div
                  key={step.step}
                  className="relative flex flex-col md:flex-row items-center justify-between"
                >
                  {/* Left Slot */}
                  <div className="w-full md:w-[45%] flex justify-end pr-0 md:pr-10">
                    {isNodeOnRight && <ProcessCard step={step} direction="left" />}
                  </div>

                  {/* Advanced Glowing Numbered Node Badge */}
                  <div
                    className={`my-6 md:my-0 md:absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 ${
                      isNodeOnRight ? "md:left-[60%]" : "md:left-[40%]"
                    }`}
                  >
                    <div className="w-20 h-20 rounded-full bg-white border-2 border-amber-500/40 p-1.5 shadow-[0_0_30px_rgba(245,158,11,0.25)] flex items-center justify-center backdrop-blur-md">
                      <div className="w-full h-full rounded-full border border-amber-200 flex items-center justify-center bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 font-mono font-black text-slate-950 text-lg shadow-inner">
                        {step.step}
                      </div>
                    </div>
                  </div>

                  {/* Right Slot */}
                  <div className="w-full md:w-[45%] flex justify-start pl-0 md:pl-10">
                    {!isNodeOnRight && <ProcessCard step={step} direction="right" />}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

// Premium Light-Theme Glass Process Card Sub-component with Side Scroll Animations
function ProcessCard({
  step,
  direction,
}: {
  step: { step: string; title: string; description: string; icon: any; badge: string };
  direction: "left" | "right";
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    margin: "-30% 0px -30% 0px",
    once: true,
  });

  const IconComponent = step.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        x: direction === "left" ? -80 : 80,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : direction === "left" ? -80 : 80,
      }}
      whileHover={{ 
        y: -6, 
        borderColor: "rgba(245, 158, 11, 0.5)",
        boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.15)"
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-md bg-white/95 hover:bg-white rounded-[2.2rem] p-8 shadow-[0_15px_35px_-10px_rgba(245,158,11,0.06)] border border-amber-200/80 backdrop-blur-2xl relative overflow-hidden group text-left space-y-5"
    >
      {/* Top Gradient Line Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 opacity-80 group-hover:opacity-100 transition-opacity" />

      {/* Card Header row with badge & icon */}
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-900 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full shadow-sm">
          {step.badge}
        </span>
        <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-sm">
          <IconComponent className="w-4 h-4" />
        </div>
      </div>

      <div className="space-y-2.5">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors tracking-tight flex items-center justify-between">
          <span>{step.title}</span>
          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-amber-600 -translate-x-2 group-hover:translate-x-0 duration-300" />
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed font-normal">
          {step.description}
        </p>
      </div>

    </motion.div>
  );
}