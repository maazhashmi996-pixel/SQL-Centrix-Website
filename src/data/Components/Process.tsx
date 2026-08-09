// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { motion, useInView } from "framer-motion";
// import { 
//   HiOutlineSearch, 
//   HiOutlineSpeakerphone, 
//   HiOutlineDocumentText, 
//   HiOutlineShare, 
//   HiOutlineBadgeCheck, 
//   HiOutlineTemplate, 
//   HiOutlineGlobe,
//   HiOutlineSparkles,
//   HiOutlineArrowRight
// } from "react-icons/hi";

// const services = [
//   {
//     title: "Brand Positioning",
//     desc: "Before customers buy from you. They need to trust you. We build memorable brands that create confidence from the very first interaction.",
//     icon: HiOutlineBadgeCheck,
//   },
//   {
//     title: "High-Converting Websites",
//     desc: "Your website shouldn't just look good. It should educate visitors and build trust by answering the questions they are looking for and convert visitors into qualified enquiries.",
//     icon: HiOutlineTemplate,
//   },
//   {
//     title: "Search Visibility",
//     desc: "Customers can't buy from businesses they can't find. We improve your visibility across search engines and AI-powered search through structured content and technical excellence.",
//     icon: HiOutlineSearch,
//   },
//   {
//     title: "Paid Media",
//     desc: "Sometimes customers are already searching. We create paid advertising campaigns focused on attracting the right audience not just generating traffic.",
//     icon: HiOutlineSpeakerphone,
//   },
//   {
//     title: "Content Strategy",
//     desc: "People buy from businesses they understand. We develop content that educates, builds authority, and supports customers throughout their buying journey.",
//     icon: HiOutlineDocumentText,
//   },
//   {
//     title: "Social Media & Community Growth",
//     desc: "We create social media experiences that strengthen your reputation and keep your business visible where your audience spends their time.",
//     icon: HiOutlineShare,
//   },
//   {
//     title: "Authority Building",
//     desc: "Strengthening your digital authority through strategic content, digital PR, guest posting, and Wikipedia consulting will help your business become a trusted name online.",
//     icon: HiOutlineGlobe,
//   },
// ];

// const brands = [
//   { name: "ACME Corp", color: "text-amber-600 hover:text-amber-700" },
//   { name: "Apex Global", color: "text-yellow-600 hover:text-yellow-700" },
//   { name: "Vortex AI", color: "text-orange-600 hover:text-orange-700" },
//   { name: "Nexus Tech", color: "text-yellow-700 hover:text-yellow-800" },
//   { name: "Synergy Labs", color: "text-amber-700 hover:text-amber-800" },
//   { name: "Pioneer Media", color: "text-yellow-500 hover:text-yellow-600" },
//   { name: "Zenith Group", color: "text-orange-500 hover:text-orange-600" },
//   { name: "Quantum Systems", color: "text-amber-500 hover:text-amber-600" },
// ];

// export default function Process() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(containerRef, { amount: 0.1, once: true });

//   const [isMounted, setIsMounted] = useState(false);
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   return (
//     <section ref={containerRef} id="process" className="py-6 bg-[#FAFAFA] text-slate-900 relative overflow-hidden">
      
//       {/* Background Glows */}
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/10 blur-[150px] pointer-events-none rounded-full" />

//       <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10 space-y-24">
        
//         {/* Section 4: The SQL Centrix Philosophy */}
//         <div className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-14 border border-yellow-500/20 shadow-xl shadow-yellow-500/5">
//           <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
          
//           <div className="space-y-10 max-w-4xl mx-auto">
//             <div className="text-center space-y-4">
//               <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-700 text-xs font-bold uppercase tracking-widest">
//                 <HiOutlineSparkles className="w-4 h-4 text-yellow-600" />
//                 Section 4
//               </span>
//               <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
//                  The SQL Centrix Philosophy
//               </h2>
//             </div>

//             <div className="space-y-8 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
//               <div className="text-center max-w-2xl mx-auto">
//                 <p className="text-xl sm:text-2xl font-semibold text-yellow-700 leading-snug">
//                   Most businesses invest in marketing activities. We invest in business outcomes.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
//                 <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4 relative group hover:border-slate-300 transition-colors">
//                   <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Instead of asking:</span>
//                   <p className="text-xl sm:text-2xl font-bold text-slate-700 italic">
//                     "How many clicks did we get?"
//                   </p>
//                 </div>

//                 <div className="p-8 rounded-3xl bg-yellow-50 border border-yellow-500/30 space-y-4 relative group hover:border-yellow-500/50 transition-colors">
//                   <span className="text-xs font-bold uppercase tracking-wider text-yellow-700">We ask:</span>
//                   <p className="text-xl sm:text-2xl font-extrabold text-yellow-800">
//                     "How many qualified customers are ready to buy?"
//                   </p>
//                 </div>
//               </div>

//               <div className="text-center pt-2">
//                 <p className="text-slate-500 italic text-base sm:text-lg">
//                   Because clicks don't grow businesses. Customers do.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Section 5: The Process (Applying The Philosophy) */}
//         <div className="space-y-16">
//           <div className="text-center space-y-4 max-w-3xl mx-auto">
//             <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-700 text-xs font-bold uppercase tracking-widest">
//               <HiOutlineSparkles className="w-4 h-4 text-yellow-600" />
//               Section 5
//             </span>
            
//             <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
//                The Process (Applying The Philosophy)
//             </h2>

//             <h3 className="text-2xl sm:text-3xl font-bold text-yellow-700 tracking-tight">
//               How We Generate Sales Qualified Leads
//             </h3>

//             <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
//               Sales don't happen because of one marketing channel. They happen because every digital touchpoint works together. That's exactly how SQL Centrix operates.
//             </p>
//           </div>

//           {/* Premium Light Grid Layout */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((item, idx) => {
//               const IconComponent = item.icon;

//               return (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                   transition={{ duration: 0.4, delay: idx * 0.05 }}
//                   className="bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] border border-slate-200 hover:border-yellow-500/50 hover:bg-white hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
//                 >
//                   <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

//                   <div className="space-y-6">
//                     <div className="w-14 h-14 rounded-2xl bg-yellow-50 border border-yellow-200 text-yellow-600 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 shadow-xs">
//                       <IconComponent className="w-7 h-7" />
//                     </div>

//                     <div className="space-y-3">
//                       <h4 className="text-xl font-bold text-slate-900 group-hover:text-yellow-700 transition-colors tracking-tight">
//                         {item.title}
//                       </h4>
//                       <p className="text-slate-600 text-sm leading-relaxed font-normal">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="pt-6 mt-8 border-t border-slate-100 flex items-center justify-between">
//                     <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-yellow-700 transition-colors">
//                       SQL Centrix Standard
//                     </span>
//                     <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-yellow-500 group-hover:text-white group-hover:border-yellow-500 transition-all">
//                       <HiOutlineArrowRight className="w-4 h-4" />
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Trusted By Ticker with Unique Brand Colors */}
//         <div className="pt-7 border-t border-slate-200 overflow-hidden relative">
//           <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
//           <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
          
//           <div className="flex items-center gap-6">
//             <span className="text-xs font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap px-2">
//               Trusted By
//             </span>
//             <div className="flex overflow-hidden w-full">
//               <motion.div
//                 animate={{ x: ["0%", "-50%"] }}
//                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                 className="flex items-center gap-12 whitespace-nowrap min-w-max"
//               >
//                 {[...brands, ...brands].map((brand, i) => (
//                   <div
//                     key={i}
//                     className={`flex items-center gap-2.5 transition-colors font-bold text-lg tracking-wider px-4 cursor-pointer ${brand.color}`}
//                   >
//                     <span className="w-2 h-2 rounded-full bg-current opacity-70" />
//                     {brand.name}
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  HiOutlineSearch,
  HiOutlineSpeakerphone,
  HiOutlineDocumentText,
  HiOutlineShare,
  HiOutlineBadgeCheck,
  HiOutlineTemplate,
  HiOutlineGlobe,
  HiOutlineSparkles,
  HiOutlineArrowRight,
} from "react-icons/hi";

const services = [
  {
    title: "Brand Positioning",
    desc: "Before customers buy from you. They need to trust you. We build memorable brands that create confidence from the very first interaction.",
    icon: HiOutlineBadgeCheck,
  },
  {
    title: "High-Converting Websites",
    desc: "Your website shouldn't just look good. It should educate visitors and build trust by answering the questions they are looking for and convert visitors into qualified enquiries.",
    icon: HiOutlineTemplate,
  },
  {
    title: "Search Visibility",
    desc: "Customers can't buy from businesses they can't find. We improve your visibility across search engines and AI-powered search through structured content and technical excellence.",
    icon: HiOutlineSearch,
  },
  {
    title: "Paid Media",
    desc: "Sometimes customers are already searching. We create paid advertising campaigns focused on attracting the right audience not just generating traffic.",
    icon: HiOutlineSpeakerphone,
  },
  {
    title: "Content Strategy",
    desc: "People buy from businesses they understand. We develop content that educates, builds authority, and supports customers throughout their buying journey.",
    icon: HiOutlineDocumentText,
  },
  {
    title: "Social Media & Community Growth",
    desc: "We create social media experiences that strengthen your reputation and keep your business visible where your audience spends their time.",
    icon: HiOutlineShare,
  },
  {
    title: "Authority Building",
    desc: "Strengthening your digital authority through strategic content, digital PR, guest posting, and Wikipedia consulting will help your business become a trusted name online.",
    icon: HiOutlineGlobe,
  },
];

const brands = [
  { name: "ACME Corp", color: "text-amber-600 hover:text-amber-700" },
  { name: "Apex Global", color: "text-yellow-600 hover:text-yellow-700" },
  { name: "Vortex AI", color: "text-orange-600 hover:text-orange-700" },
  { name: "Nexus Tech", color: "text-yellow-700 hover:text-yellow-800" },
  { name: "Synergy Labs", color: "text-amber-700 hover:text-amber-800" },
  { name: "Pioneer Media", color: "text-yellow-500 hover:text-yellow-600" },
  { name: "Zenith Group", color: "text-orange-500 hover:text-orange-600" },
  { name: "Quantum Systems", color: "text-amber-500 hover:text-amber-600" },
];

export default function Process() {
  const containerRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(containerRef, {
    amount: 0.08,
    once: true,
  });

  const [isMounted, setIsMounted] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 25,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement>,
    element: HTMLElement
  ) => {
    const rect = element.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#fafaf8] py-24 sm:py-32 lg:py-40"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            inset-0
            opacity-[0.22]
            [background-image:linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)]
            [background-size:70px_70px]
            [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_78%)]
          "
        />

        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 25, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[35%]
            top-[5%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-yellow-300/[0.08]
            blur-[160px]
          "
        />

        <motion.div
          animate={{
            x: [0, -35, 25, 0],
            y: [0, 25, -20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-64
            top-[50%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-amber-200/[0.08]
            blur-[150px]
          "
        />

        <motion.div
          animate={{
            y: [0, -30, 30, 0],
            scale: [1, 1.05, 0.97, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-64
            bottom-[5%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-yellow-200/[0.08]
            blur-[150px]
          "
        />
      </div>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-6">
        <div className="space-y-32 lg:space-y-44">

          {/* =================================================
              SECTION 4
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-slate-200/80
              bg-white
              shadow-[0_35px_100px_rgba(15,23,42,0.07)]
            "
          >
            {/* Top yellow beam */}

            <div className="absolute left-1/2 top-0 h-[3px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

            {/* Decorative circles */}

            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-yellow-200/50" />

            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-yellow-200/40" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-yellow-100/40 blur-3xl" />

            <div className="relative px-6 py-16 sm:px-12 lg:px-20 lg:py-24">

              {/* Badge */}

              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="flex justify-center"
              >
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2.5
                    rounded-full
                    border
                    border-yellow-200
                    bg-yellow-50
                    px-4
                    py-2
                    shadow-sm
                  "
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-yellow-400 opacity-60" />
                    <span className="relative h-2 w-2 rounded-full bg-yellow-500" />
                  </span>

                  <HiOutlineSparkles className="h-4 w-4 text-yellow-600" />

                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-800 sm:text-[11px]">
                    Section 4
                  </span>
                </div>
              </motion.div>

              {/* Heading */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                }}
                className="mx-auto mt-7 max-w-4xl text-center"
              >
                <h2
                  className="
                    text-4xl
                    font-black
                    tracking-[-0.055em]
                    text-slate-950
                    sm:text-6xl
                  "
                >
                  The SQL Centrix Philosophy
                </h2>
              </motion.div>

              {/* Philosophy statement */}

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                }}
                className="mx-auto mt-12 max-w-3xl text-center"
              >
                <div className="relative px-5">
                  <span className="absolute -left-2 -top-8 text-7xl font-serif leading-none text-yellow-300/60">
                    “
                  </span>

                  <p className="relative text-xl font-bold leading-relaxed tracking-tight text-yellow-700 sm:text-2xl">
                    Most businesses invest in marketing activities. We invest
                    in business outcomes.
                  </p>
                </div>
              </motion.div>

              {/* Comparison */}

              <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">

                {/* Left */}

                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-slate-200
                    bg-[#f7f7f5]
                    p-8
                    sm:p-10
                  "
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-slate-200/50 blur-3xl transition-all duration-500 group-hover:bg-slate-300/50" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                        Instead of asking:
                      </span>

                      <span className="text-xs font-black text-slate-300">
                        01
                      </span>
                    </div>

                    <p className="mt-8 text-2xl font-bold leading-tight tracking-tight text-slate-700">
                      "How many clicks did we get?"
                    </p>

                    <div className="mt-8 h-[3px] w-10 rounded-full bg-slate-300 transition-all duration-500 group-hover:w-20" />
                  </div>
                </motion.div>

                {/* Right */}

                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-yellow-200
                    bg-gradient-to-br
                    from-yellow-50
                    via-white
                    to-amber-50
                    p-8
                    shadow-[0_20px_50px_rgba(234,179,8,0.07)]
                    sm:p-10
                  "
                >
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-200/40 blur-3xl transition-all duration-500 group-hover:bg-yellow-300/50" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-[0.18em] text-yellow-700">
                        We ask:
                      </span>

                      <span className="text-xs font-black text-yellow-300">
                        02
                      </span>
                    </div>

                    <p className="mt-8 text-2xl font-black leading-tight tracking-tight text-yellow-800">
                      "How many qualified customers are ready to buy?"
                    </p>

                    <div className="mt-8 h-[3px] w-10 rounded-full bg-yellow-400 transition-all duration-500 group-hover:w-20" />
                  </div>
                </motion.div>
              </div>

              {/* Bottom statement */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.45,
                }}
                className="mt-10 text-center"
              >
                <p className="text-sm italic text-slate-500 sm:text-base">
                  Because clicks don't grow businesses. Customers do.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* =================================================
              SECTION 5 HEADER
          ================================================== */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
              }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="inline-flex items-center gap-2.5 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2">
                <HiOutlineSparkles className="h-4 w-4 text-yellow-600" />

                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-800">
                  Section 5
                </span>
              </div>

              <h2
                className="
                  mt-7
                  text-4xl
                  font-black
                  tracking-[-0.055em]
                  text-slate-950
                  sm:text-6xl
                "
              >
                The Process (Applying The Philosophy)
              </h2>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-yellow-700 sm:text-3xl">
                How We Generate Sales Qualified Leads
              </h3>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Sales don't happen because of one marketing channel. They
                happen because every digital touchpoint works together. That's
                exactly how SQL Centrix operates.
              </p>
            </motion.div>

            {/* =================================================
                SERVICES
            ================================================== */}

            <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {services.map((item, idx) => {
                const IconComponent = item.icon;
                const isActive = activeCard === idx;

                return (
                  <motion.article
                    key={idx}
                    initial={{
                      opacity: 0,
                      y: 45,
                    }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            y: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.65,
                      delay: idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      y: -10,
                    }}
                    onMouseEnter={() => setActiveCard(idx)}
                    onMouseLeave={() => setActiveCard(null)}
                    onMouseMove={(e) =>
                      handleMouseMove(
                        e,
                        e.currentTarget as HTMLElement
                      )
                    }
                    className={`
                      group
                      relative
                      min-h-[390px]
                      overflow-hidden
                      rounded-[32px]
                      border
                      bg-white
                      p-7
                      shadow-[0_15px_45px_rgba(15,23,42,0.045)]
                      transition-all
                      duration-500
                      sm:p-8
                      ${
                        isActive
                          ? "border-yellow-300 shadow-[0_30px_80px_rgba(234,179,8,0.11)]"
                          : "border-slate-200"
                      }
                    `}
                  >
                    {/* Mouse spotlight */}

                    {isActive && (
                      <motion.div
                        className="pointer-events-none absolute inset-0 opacity-100"
                        style={{
                          background: `radial-gradient(
                            300px circle at ${smoothX.get()}px ${smoothY.get()}px,
                            rgba(250,204,21,0.10),
                            transparent 70%
                          )`,
                        }}
                      />
                    )}

                    {/* Yellow corner */}

                    <motion.div
                      animate={{
                        scale: isActive ? 1 : 0.8,
                        opacity: isActive ? 1 : 0,
                      }}
                      className="
                        pointer-events-none
                        absolute
                        -right-16
                        -top-16
                        h-44
                        w-44
                        rounded-full
                        bg-yellow-200/40
                        blur-3xl
                      "
                    />

                    {/* Top line */}

                    <div
                      className={`
                        absolute
                        left-8
                        right-8
                        top-0
                        h-[3px]
                        origin-center
                        rounded-full
                        bg-gradient-to-r
                        from-transparent
                        via-yellow-400
                        to-transparent
                        transition-transform
                        duration-500
                        ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0"
                        }
                      `}
                    />

                    <div className="relative flex h-full flex-col justify-between">

                      {/* Card top */}

                      <div>
                        <div className="flex items-center justify-between">
                          <span
                            className={`
                              text-[11px]
                              font-black
                              tracking-[0.18em]
                              transition-colors
                              ${
                                isActive
                                  ? "text-yellow-500"
                                  : "text-slate-300"
                              }
                            `}
                          >
                            0{idx + 1}
                          </span>

                          <motion.div
                            animate={{
                              rotate: isActive ? 6 : 0,
                              scale: isActive ? 1.08 : 1,
                            }}
                            className={`
                              flex
                              h-14
                              w-14
                              items-center
                              justify-center
                              rounded-[20px]
                              border
                              transition-all
                              duration-300
                              ${
                                isActive
                                  ? "border-yellow-400 bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-400/20"
                                  : "border-yellow-200 bg-yellow-50 text-yellow-600"
                              }
                            `}
                          >
                            <IconComponent className="h-7 w-7" />
                          </motion.div>
                        </div>

                        <div className="mt-9">
                          <h4
                            className={`
                              text-xl
                              font-black
                              leading-tight
                              tracking-tight
                              transition-colors
                              duration-300
                              sm:text-[22px]
                              ${
                                isActive
                                  ? "text-yellow-700"
                                  : "text-slate-900"
                              }
                            `}
                          >
                            {item.title}
                          </h4>

                          <p className="mt-4 text-sm leading-6 text-slate-600">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      {/* Card footer */}

                      <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                        <span
                          className={`
                            text-[9px]
                            font-black
                            uppercase
                            tracking-[0.16em]
                            transition-colors
                            ${
                              isActive
                                ? "text-yellow-700"
                                : "text-slate-400"
                            }
                          `}
                        >
                          SQL Centrix Standard
                        </span>

                        <motion.div
                          animate={{
                            x: isActive ? 3 : 0,
                            rotate: isActive ? -3 : 0,
                          }}
                          className={`
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            transition-all
                            ${
                              isActive
                                ? "border-yellow-400 bg-yellow-400 text-slate-950"
                                : "border-slate-200 bg-slate-50 text-slate-400"
                            }
                          `}
                        >
                          <HiOutlineArrowRight className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}

              {/* =================================================
                  FEATURE CARD
              ================================================== */}

              <motion.div
                initial={{ opacity: 0, y: 45 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.58,
                }}
                className="
                  relative
                  flex
                  min-h-[390px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-yellow-300
                  bg-gradient-to-br
                  from-yellow-50
                  via-white
                  to-amber-50
                  p-8
                  shadow-[0_20px_60px_rgba(234,179,8,0.08)]
                  lg:col-span-3
                  lg:min-h-[230px]
                "
              >
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl" />

                <div className="relative flex h-full flex-col justify-between lg:flex-row lg:items-center lg:gap-12">

                  <div className="max-w-2xl">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-400/20">
                      <HiOutlineSparkles className="h-6 w-6" />
                    </div>

                    <h4 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                      SQL Centrix
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Sales Qualified Leads.
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-3 lg:mt-0">
                    <span className="text-[10px] font-black uppercase tracking-[0.18em] text-yellow-700">
                      Growth
                    </span>

                    <div className="h-px w-14 bg-yellow-300" />

                    <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                      Results
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* =================================================
              TRUSTED BY
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="
              relative
              overflow-hidden
              border-y
              border-slate-200
              py-8
            "
          >
            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-[#fafaf8] to-transparent sm:w-36" />

            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-[#fafaf8] to-transparent sm:w-36" />

            <div className="flex items-center gap-7">
              <div className="relative z-30 shrink-0">
                <span
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-2
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.18em]
                    text-slate-400
                    shadow-sm
                  "
                >
                  Trusted By
                </span>
              </div>

              <div className="min-w-0 flex-1 overflow-hidden">
                <motion.div
                  animate={{
                    x: ["0%", "-50%"],
                  }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex min-w-max items-center gap-12 whitespace-nowrap"
                >
                  {[...brands, ...brands].map((brand, i) => (
                    <div
                      key={i}
                      className={`
                        flex
                        items-center
                        gap-2.5
                        text-sm
                        font-black
                        tracking-wide
                        transition-colors
                        sm:text-base
                        ${brand.color}
                      `}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                      {brand.name}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}













