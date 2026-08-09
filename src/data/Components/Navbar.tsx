// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 15);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "#" },
//     { name: "Services", href: "#process" },
//     { name: "About", href: "#case-studies" },
//     { name: "Blogs", href: "#pross" },
//   ];

//   return (
//     <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
//       scrolled 
//         ? "bg-white/95 backdrop-blur-md border-b border-amber-300 shadow-[0_10px_30px_rgba(251,191,36,0.08)] py-3" 
//         : "bg-white border-b border-amber-200/60 py-2"
//     }`}>
//       <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 flex items-center justify-between">
        
//         <div className="flex items-center">
//           <a href="#" className="flex items-center gap-3.5 focus:outline-none group">
//             <div className="relative p-0.5 rounded-2xl bg-gradient-to-tr from-amber-400 via-yellow-400 to-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.2)] group-hover:shadow-[0_0_25px_rgba(251,191,36,0.35)] transition-all duration-300 group-hover:scale-105">
//               <div className="bg-white px-3.5 py-2.5 rounded-[14px] flex items-center justify-center overflow-hidden">
//                 <img
//                   src="logo2.jpg" 
//                   alt="SQL Centrix Logo" 
//                   className="h-8 md:h-9 w-auto object-contain scale-125 transform transition-transform"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-base font-black tracking-tight text-slate-900 flex items-center gap-1">
//                 SQL <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400">Centrix</span>
//               </span>
//               <span className="text-[10px] uppercase font-bold tracking-widest text-amber-500 -mt-0.5 flex items-center gap-1">
//                 <Sparkles className="w-2.5 h-2.5 text-yellow-400 animate-pulse" />
//                 Growth Partner
//               </span>
//             </div>
//           </a>
//         </div>
        
//         <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700">
//           {navLinks.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="transition-colors hover:text-amber-500 py-1"
//             >
//               {item.name}
//             </a>
//           ))}
//         </nav>

//         <div className="hidden md:block">
//           <motion.a
//             href="#contact"
//             animate={{
//               boxShadow: [
//                 "0 0 15px rgba(251,191,36,0.3)",
//                 "0 0 25px rgba(253,224,71,0.5)",
//                 "0 0 15px rgba(251,191,36,0.3)",
//               ],
//             }}
//             transition={{
//               duration: 2.5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 hover:from-amber-500 hover:to-yellow-400 text-slate-950 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all duration-300 border border-amber-200 shadow-lg"
//           >
//             <span>Get Started</span>
//             <ArrowRight className="w-3.5 h-3.5" />
//           </motion.a>
//         </div>

//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="p-2 rounded-xl bg-amber-50/50 border border-amber-200 text-slate-800 hover:bg-amber-100/60 transition-colors focus:outline-none"
//             aria-label="Toggle Menu"
//           >
//             {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//           </button>
//         </div>

//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.25 }}
//             className="md:hidden w-full bg-white border-b border-amber-200 overflow-hidden px-6 py-5 shadow-xl"
//           >
//             <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
//               {navLinks.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   onClick={() => setIsOpen(false)}
//                   className="px-3 py-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition"
//                 >
//                   {item.name}
//                 </a>
//               ))}
              
//               <div className="pt-2">
//                 <a
//                   href="#contact"
//                   onClick={() => setIsOpen(false)}
//                   className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 text-slate-950 text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-all border border-amber-200 shadow-lg"
//                 >
//                   <span>Get Started</span>
//                   <ArrowRight className="w-3.5 h-3.5" />
//                 </a>
//               </div>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }










"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#process" },
    { name: "About", href: "#case-studies" },
    { name: "Blogs", href: "#pross" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
        scrolled
          ? "border-slate-200/80 bg-white/90 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          : "border-slate-200/60 bg-white"
      }`}
    >
      {/* Top Accent */}
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <div
        className={`relative mx-auto flex w-full max-w-[1180px] items-center justify-between transition-all duration-500 ${
          scrolled ? "h-[72px]" : "h-[88px]"
        }`}
      >
        {/* ===================================================
            LOGO
        =================================================== */}

        <motion.a
          href="#"
          whileHover={{ y: -1 }}
          className="group flex items-center gap-3.5"
        >
          {/* Logo Box */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-yellow-300/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative rounded-[17px] bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-300 p-[1.5px] shadow-[0_8px_25px_rgba(245,158,11,0.12)] transition-all duration-300 group-hover:shadow-[0_10px_30px_rgba(245,158,11,0.25)]">
              <div className="flex h-[54px] w-[70px] items-center justify-center overflow-hidden rounded-[15px] bg-white">
                <img
                  src="/logo2.jpg"
                  alt="SQL Centrix Logo"
                  className="h-9 w-auto scale-[1.15] object-contain transition-transform duration-500 group-hover:scale-[1.22]"
                />
              </div>
            </div>
          </div>

          {/* Brand */}
          <div className="hidden flex-col sm:flex">
            <div className="flex items-center gap-1 text-[17px] font-black tracking-[-0.03em] text-slate-950">
              <span>SQL</span>
              <span className="text-yellow-500">Centrix</span>
            </div>

            <div className="mt-0.5 flex items-center gap-1.5 text-[8px] font-extrabold uppercase tracking-[0.18em] text-yellow-600">
              <Sparkles className="h-2.5 w-2.5 text-yellow-400" />
              Growth Partner
            </div>
          </div>
        </motion.a>

        {/* ===================================================
            DESKTOP NAV
        =================================================== */}

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ y: -1 }}
              className="group relative rounded-xl px-4 py-2.5 text-[13px] font-semibold text-slate-600 transition-all duration-300 hover:bg-yellow-50 hover:text-slate-950"
            >
              <span>{item.name}</span>

              <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-5" />
            </motion.a>
          ))}
        </nav>

        {/* ===================================================
            YELLOW CTA BUTTON
        =================================================== */}

        <div className="hidden md:block">
          <motion.a
            href="#contact"
            whileHover={{
              y: -3,
              scale: 1.025,
            }}
            whileTap={{
              scale: 0.96,
            }}
            animate={{
              boxShadow: [
                "0 8px 20px rgba(250, 204, 21, 0.18)",
                "0 12px 32px rgba(250, 204, 21, 0.30)",
                "0 8px 20px rgba(250, 204, 21, 0.18)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl border border-yellow-300 bg-yellow-400 px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-950 transition-colors duration-300 hover:bg-yellow-500"
          >
            {/* Shine */}
            <span className="absolute inset-y-0 -left-[80%] w-1/2 -skew-x-[20deg] bg-white/30 transition-all duration-700 group-hover:left-[130%]" />

            <span className="relative z-10">
              Get Started
            </span>

            <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-lg bg-slate-950 text-yellow-400 transition-all duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </motion.a>
        </div>

        {/* ===================================================
            MOBILE MENU BUTTON
        =================================================== */}

        <div className="flex items-center md:hidden">
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-200 bg-yellow-50 text-slate-800 shadow-[0_5px_20px_rgba(15,23,42,0.06)] transition-all hover:border-yellow-300 hover:bg-yellow-100"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden border-t border-yellow-100 bg-white md:hidden"
          >
            <div className="mx-auto w-full max-w-[1180px] px-5 py-5">
              {/* Mobile Header */}

              <div className="mb-4 flex items-center justify-between rounded-2xl border border-yellow-100 bg-yellow-50/70 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-slate-950">
                    <Sparkles className="h-3.5 w-3.5" />
                  </span>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-900">
                      SQL Centrix
                    </p>

                    <p className="text-[8px] text-slate-500">
                      Growth Partner
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-white px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-yellow-600 shadow-sm">
                  Menu
                </span>
              </div>

              {/* Mobile Links */}

              <nav className="flex flex-col gap-1">
                {navLinks.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-yellow-50 hover:text-slate-950"
                  >
                    <span>{item.name}</span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-all group-hover:bg-yellow-400 group-hover:text-slate-950">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* Mobile Yellow CTA */}

              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.97 }}
                className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl border border-yellow-300 bg-yellow-400 px-5 py-3.5 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-950 shadow-[0_10px_25px_rgba(250,204,21,0.20)] transition-colors hover:bg-yellow-500"
              >
                <span>Get Started</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-950 text-yellow-400">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}