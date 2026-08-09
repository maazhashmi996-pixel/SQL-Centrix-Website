// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { ArrowRight, Sparkles, Play, Pause, Volume2, VolumeX } from "lucide-react";

// export default function Solution() {
//   const containerRef = useRef(null);
//   const bgVideoRef = useRef<HTMLVideoElement>(null);
//   const isInView = useInView(containerRef, { amount: 0.2, once: true });

//   const [isBgPlaying, setIsBgPlaying] = useState(true);
//   const [isBgMuted, setIsBgMuted] = useState(true);
//   const [videoError, setVideoError] = useState(false);

//   useEffect(() => {
//     if (bgVideoRef.current) {
//       bgVideoRef.current.play().catch(() => {
//         setVideoError(true);
//       });
//     }
//   }, []);

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
//   const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });
  
//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2deg", "-2deg"]);
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2deg", "2deg"]);

//   const spotlightX = useMotionValue(0);
//   const spotlightY = useMotionValue(0);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;
    
//     x.set(mouseX / width - 0.5);
//     y.set(mouseY / height - 0.5);
    
//     spotlightX.set(mouseX);
//     spotlightY.set(mouseY);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   const toggleBgPlay = () => {
//     if (bgVideoRef.current) {
//       if (isBgPlaying) {
//         bgVideoRef.current.pause();
//       } else {
//         bgVideoRef.current.play().catch(() => {});
//       }
//       setIsBgPlaying(!isBgPlaying);
//     }
//   };

//   const toggleBgMute = () => {
//     if (bgVideoRef.current) {
//       bgVideoRef.current.muted = !isBgMuted;
//       setIsBgMuted(!isBgMuted);
//     }
//   };

//   return (
//     <section 
//       ref={containerRef}
//       id="pross"
//       className="py-28 lg:py-36 bg-gradient-to-b from-yellow-50/40 via-white to-yellow-50/20 text-slate-900 relative overflow-hidden border-b border-yellow-500/10 perspective-[1200px]"
//     >
//       <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
//         {!videoError ? (
//           <video 
//             ref={bgVideoRef}
//             autoPlay 
//             loop 
//             muted={isBgMuted} 
//             playsInline
//             onError={() => setVideoError(true)}
//             className="w-full h-full object-cover opacity-15 scale-105 filter blur-[2px]"
//           >
//             <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         ) : (
//           <div className="w-full h-full bg-gradient-to-tr from-yellow-100/40 to-amber-100/30" />
//         )}
//         <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />
//       </div>

//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none overflow-hidden z-0">
//         <motion.div 
//           animate={{ scale: [1, 1.1, 0.95, 1], opacity: [0.25, 0.45, 0.25] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//           className="w-full h-full bg-gradient-to-tr from-yellow-300/20 via-amber-400/15 to-yellow-200/20 blur-[150px] rounded-full"
//         />
//       </div>

//       {!videoError && (
//         <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-yellow-200 text-slate-700 shadow-xl">
//           <span className="text-[10px] font-mono tracking-wider text-yellow-800 pr-1 hidden sm:inline">BG VIDEO</span>
//           <button 
//             onClick={toggleBgMute}
//             className="w-7 h-7 rounded-full bg-yellow-50 hover:bg-yellow-100 text-yellow-800 flex items-center justify-center transition-colors cursor-pointer border border-yellow-200"
//             aria-label="Toggle Background Video Mute"
//           >
//             {isBgMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
//           </button>
//           <button 
//             onClick={toggleBgPlay}
//             className="w-7 h-7 rounded-full bg-yellow-50 hover:bg-yellow-100 text-yellow-800 flex items-center justify-center transition-colors cursor-pointer border border-yellow-200"
//             aria-label="Toggle Background Video Play"
//           >
//             {isBgPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
//           </button>
//         </div>
//       )}

//       <div className="max-w-4xl mx-auto w-full px-6 relative z-10">
        
//         <motion.div 
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//           initial={{ opacity: 0, y: 30, scale: 0.98 }}
//           animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
//           transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//           className="p-8 sm:p-14 lg:p-16 rounded-[3rem] bg-gradient-to-b from-white/95 via-white/90 to-yellow-50/30 border border-yellow-200/80 shadow-[0_30px_70px_rgba(234,179,8,0.12)] backdrop-blur-2xl relative overflow-hidden group text-center space-y-12"
//         >
          
//           <motion.div 
//             className="absolute pointer-events-none -inset-px rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
//             style={{
//               background: useTransform(
//                 [spotlightX, spotlightY],
//                 ([latestX, latestY]) => `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(234, 179, 8, 0.08), transparent 80%)`
//               )
//             }}
//           />

//           <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 opacity-95 shadow-md" />

//           {/* Badge & Main Title */}
//           <div className="space-y-6 relative z-10">
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//               transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
//               className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-yellow-100/80 border border-yellow-300 text-yellow-900 text-xs font-black uppercase tracking-widest shadow-md mx-auto backdrop-blur-md"
//             >
//               <Sparkles className="w-4 h-4 text-yellow-600 animate-pulse" />
//               3. The Solution (Brand Positioning)
//             </motion.div>

//             <motion.h2 
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]"
//             >
//                The Solution <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-600 font-serif italic font-normal tracking-normal">(Brand Positioning)</span>
//             </motion.h2>

//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="text-lg sm:text-xl text-slate-700 font-semibold leading-relaxed max-w-2xl mx-auto"
//             >
//               At SQL Centrix, every campaign is designed around one objective
//             </motion.p>

//             <motion.div 
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="p-6 rounded-2xl bg-gradient-to-r from-yellow-50 via-amber-50/50 to-yellow-50 border border-yellow-200/80 shadow-inner max-w-2xl mx-auto"
//             >
//               <motion.span 
//                 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-700 block leading-tight"
//                 animate={{ scale: [1, 1.02, 1] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               >
//                 Generate Qualified Leads that help your business grow
//               </motion.span>
//             </motion.div>
//           </div>

//           {/* Interactive Structured Card for Headline & CTA */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             className="pt-6 border-t border-yellow-100 space-y-8 relative z-10 max-w-xl mx-auto bg-white/60 p-8 rounded-3xl border border-yellow-200/60 shadow-lg backdrop-blur-md"
//           >
//             <div className="space-y-2 text-center">
//               <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-md bg-yellow-100 text-yellow-800 border border-yellow-300">
//                 Headline
//               </span>
//               <p className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
//                 Ready to build a marketing system focused
//               </p>
//             </div>

//             <div className="space-y-3 text-center pt-2">
//               <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-md bg-yellow-100 text-yellow-800 border border-yellow-300 inline-block">
//                 CTA Button
//               </span>
//               <div className="pt-2">
//                 <motion.a
//                   whileHover={{ scale: 1.04, boxShadow: "0 15px 35px rgba(234, 179, 8, 0.35)" }}
//                   whileTap={{ scale: 0.97 }}
//                   href="#contact"
//                   className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-950 font-black px-8 py-4 rounded-2xl shadow-xl shadow-yellow-500/30 transition-all duration-300 text-sm sm:text-base group cursor-pointer w-full sm:w-auto border border-yellow-300"
//                 >
//                   <span>Book a Free Strategy Call</span>
//                   <div className="w-6 h-6 rounded-xl bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
//                     <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//                   </div>
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>

//         </motion.div>

//       </div>
//     </section>
//   );
// }























"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";

export default function Solution() {
  const containerRef = useRef<HTMLElement | null>(null);
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);

  const isInView = useInView(containerRef, {
    amount: 0.2,
    once: true,
  });

  const [isBgPlaying, setIsBgPlaying] = useState(true);
  const [isBgMuted, setIsBgMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  /* =====================================================
     MOUSE 3D
  ====================================================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 180,
    damping: 28,
  });

  const springY = useSpring(mouseY, {
    stiffness: 180,
    damping: 28,
  });

  const rotateX = useTransform(
    springY,
    [-0.5, 0.5],
    ["1.5deg", "-1.5deg"]
  );

  const rotateY = useTransform(
    springX,
    [-0.5, 0.5],
    ["-1.5deg", "1.5deg"]
  );

  /* =====================================================
     SPOTLIGHT
  ====================================================== */

  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const spotlight = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) =>
      `radial-gradient(
        420px circle at ${x}px ${y}px,
        rgba(234,179,8,0.10),
        transparent 72%
      )`
  );

  /* =====================================================
     VIDEO
  ====================================================== */

  useEffect(() => {
    if (!bgVideoRef.current) return;

    bgVideoRef.current.play().catch(() => {
      setVideoError(true);
      setIsBgPlaying(false);
    });
  }, []);

  const toggleBgPlay = () => {
    if (!bgVideoRef.current) return;

    if (isBgPlaying) {
      bgVideoRef.current.pause();
      setIsBgPlaying(false);
    } else {
      bgVideoRef.current
        .play()
        .then(() => setIsBgPlaying(true))
        .catch(() => {});
    }
  };

  const toggleBgMute = () => {
    if (!bgVideoRef.current) return;

    const nextMuted = !isBgMuted;

    bgVideoRef.current.muted = nextMuted;
    setIsBgMuted(nextMuted);
  };

  /* =====================================================
     MOUSE MOVE
  ====================================================== */

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x / rect.width - 0.5);
    mouseY.set(y / rect.height - 0.5);

    spotlightX.set(x);
    spotlightY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#fcfcfb]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {!videoError && (
        <video
          ref={bgVideoRef}
          autoPlay
          loop
          muted={isBgMuted}
          playsInline
          onError={() => setVideoError(true)}
          className="
            pointer-events-none
            absolute
            inset-0
            h-full
            w-full
            scale-110
            object-cover
            opacity-[0.035]
            blur-[2px]
          "
        />
      )}

      {/* Yellow ambient glow */}

      <motion.div
        animate={{
          x: [0, 35, -25, 0],
          y: [0, -25, 25, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-52
          -top-48
          h-[620px]
          w-[620px]
          rounded-full
          bg-yellow-300/15
          blur-[150px]
        "
      />

      <motion.div
        animate={{
          x: [0, -25, 25, 0],
          y: [0, 20, -25, 0],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-56
          -left-52
          h-[520px]
          w-[520px]
          rounded-full
          bg-amber-200/15
          blur-[140px]
        "
      />

      {/* subtle grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.22]
          [background-image:linear-gradient(to_right,rgba(15,23,42,0.028)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.028)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      {/* =====================================================
          VIDEO CONTROL
      ====================================================== */}

      {!videoError && (
        <div
          className="
            absolute
            bottom-5
            right-5
            z-40
            flex
            items-center
            gap-1
            rounded-full
            border
            border-slate-200
            bg-white/90
            p-1.5
            shadow-[0_10px_30px_rgba(15,23,42,0.08)]
            backdrop-blur-xl
          "
        >
          <span className="hidden px-2 text-[9px] font-black uppercase tracking-[0.16em] text-slate-400 sm:block">
            BG VIDEO
          </span>

          <button
            onClick={toggleBgMute}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-yellow-200
              bg-yellow-50
              text-yellow-700
              transition-all
              hover:bg-yellow-100
            "
            aria-label="Toggle Background Video Mute"
          >
            {isBgMuted ? (
              <VolumeX className="h-3.5 w-3.5" />
            ) : (
              <Volume2 className="h-3.5 w-3.5" />
            )}
          </button>

          <button
            onClick={toggleBgPlay}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-yellow-200
              bg-yellow-50
              text-yellow-700
              transition-all
              hover:bg-yellow-100
            "
            aria-label="Toggle Background Video Play"
          >
            {isBgPlaying ? (
              <Pause className="h-3.5 w-3.5" />
            ) : (
              <Play className="ml-0.5 h-3.5 w-3.5" />
            )}
          </button>
        </div>
      )}

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-6 lg:px-0">
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 35,
                }
          }
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[34px]
            border
            border-slate-200
            bg-white/95
            shadow-[0_35px_100px_rgba(15,23,42,0.075)]
            backdrop-blur-2xl
          "
        >
          {/* =================================================
              MOUSE SPOTLIGHT
          ================================================== */}

          <motion.div
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
            style={{
              background: spotlight,
            }}
          />

          {/* =================================================
              TOP ACCENT
          ================================================== */}

          <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500" />

          {/* =================================================
              DECORATIVE CORNERS
          ================================================== */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-yellow-200/40" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-yellow-200/30" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-yellow-200/30" />

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-[72px]">
            {/* =================================================
                BADGE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: -15,
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
                  bg-yellow-50/90
                  px-4
                  py-2
                  shadow-[0_6px_20px_rgba(234,179,8,0.08)]
                  backdrop-blur-md
                "
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-yellow-400 opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-yellow-500" />
                </span>

                <Sparkles className="h-3.5 w-3.5 text-yellow-600" />

                <span className="text-[10px] font-black uppercase tracking-[0.17em] text-yellow-800 sm:text-[11px]">
                  3. The Solution (Brand Positioning)
                </span>
              </div>
            </motion.div>

            {/* =================================================
                HEADING
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
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
                duration: 0.7,
                delay: 0.2,
              }}
              className="mx-auto mt-8 max-w-4xl text-center"
            >
              <h2
                className="
                  text-[clamp(2.5rem,5vw,4.8rem)]
                  font-black
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-slate-950
                "
              >
                The Solution{" "}
                <span className="font-serif font-normal italic text-yellow-600">
                  (Brand Positioning)
                </span>
              </h2>
            </motion.div>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
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
                duration: 0.6,
                delay: 0.3,
              }}
              className="
                mx-auto
                mt-7
                max-w-2xl
                text-center
                text-base
                font-medium
                leading-7
                text-slate-600
                sm:text-lg
              "
            >
              At SQL Centrix, every campaign is designed around one objective
            </motion.p>

            {/* =================================================
                CORE STATEMENT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              whileHover={{
                y: -3,
                boxShadow:
                  "0 24px 60px rgba(234,179,8,0.12)",
              }}
              className="
                relative
                mx-auto
                mt-9
                max-w-3xl
                overflow-hidden
                rounded-[26px]
                border
                border-yellow-200
                bg-gradient-to-br
                from-yellow-50
                via-white
                to-amber-50
                px-6
                py-8
                text-center
                shadow-[0_15px_45px_rgba(234,179,8,0.07)]
                transition-shadow
                duration-500
                sm:px-10
                sm:py-10
              "
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-yellow-300/20 blur-[45px]" />

              <div className="pointer-events-none absolute -bottom-16 -left-10 h-28 w-28 rounded-full bg-amber-300/10 blur-[45px]" />

              <motion.span
                animate={{
                  opacity: [0.88, 1, 0.88],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  block
                  text-xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-yellow-600
                  sm:text-2xl
                  lg:text-[28px]
                "
              >
                Generate Qualified Leads that help your business grow
              </motion.span>
            </motion.div>

            {/* =================================================
                LOWER AREA
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
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
                duration: 0.7,
                delay: 0.5,
              }}
              className="
                mx-auto
                mt-12
                max-w-3xl
                border-t
                border-slate-200
                pt-10
              "
            >
              <div className="grid gap-9 md:grid-cols-[1fr_auto] md:items-end">
                {/* Headline */}

                <div className="text-center md:text-left">
                  <span
                    className="
                      inline-flex
                      rounded-lg
                      border
                      border-yellow-200
                      bg-yellow-50
                      px-3
                      py-1.5
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.16em]
                      text-yellow-800
                    "
                  >
                    Headline
                  </span>

                  <p className="mt-4 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                    Ready to build a marketing system focused
                  </p>
                </div>

                {/* CTA */}

                <div className="text-center md:text-right">
                  <span
                    className="
                      mb-3
                      inline-flex
                      rounded-lg
                      border
                      border-yellow-200
                      bg-yellow-50
                      px-3
                      py-1.5
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.16em]
                      text-yellow-800
                    "
                  >
                    CTA Button
                  </span>

                  <div>
                    <motion.a
                      href="#contact"
                      whileHover={{
                        y: -4,
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="
                        group/btn
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-2xl
                        border
                        border-yellow-400
                        bg-yellow-400
                        px-7
                        py-4
                        text-sm
                        font-black
                        text-slate-950
                        shadow-[0_14px_35px_rgba(234,179,8,0.20)]
                        transition-all
                        duration-300
                        hover:bg-yellow-500
                        hover:shadow-[0_18px_42px_rgba(234,179,8,0.28)]
                        sm:w-auto
                      "
                    >
                      <span>Book a Free Strategy Call</span>

                      <span
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-xl
                          bg-slate-950/10
                          transition-all
                          duration-300
                          group-hover/btn:bg-slate-950/15
                        "
                      >
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              BOTTOM ACCENT
          ================================================== */}

          <div className="absolute bottom-0 left-1/2 h-[3px] w-16 -translate-x-1/2 rounded-t-full bg-yellow-400" />
        </motion.div>
      </div>
    </section>
  );
}