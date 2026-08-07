"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#process" },
    { name: "About", href: "#case-studies" },
    { name: "Blogs", href: "#pross" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-amber-500/20 shadow-[0_10px_30px_rgba(234,179,8,0.08)] py-3" 
        : "bg-white border-b border-amber-500/10 py-2"
    }`}>
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 flex items-center justify-between">
        
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-3.5 focus:outline-none group">
            <div className="relative p-0.5 rounded-2xl bg-gradient-to-tr from-amber-500 via-yellow-500 to-amber-400 shadow-[0_0_15px_rgba(234,179,8,0.25)] group-hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] transition-all duration-300 group-hover:scale-105">
              <div className="bg-white px-3.5 py-2.5 rounded-[14px] flex items-center justify-center overflow-hidden">
                <img
                  src="logo2.jpg" 
                  alt="SQL Centrix Logo" 
                  className="h-8 md:h-9 w-auto object-contain scale-125 transform transition-transform"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black tracking-tight text-slate-900 flex items-center gap-1">
                SQL <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-500">Centrix</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-600 -mt-0.5 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-yellow-500 animate-pulse" />
                Growth Partner
              </span>
            </div>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition-colors hover:text-amber-600 py-1"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <motion.a
            href="#contact"
            animate={{
              boxShadow: [
                "0 0 15px rgba(234, 179, 8, 0.4)",
                "0 0 25px rgba(250, 204, 21, 0.6)",
                "0 0 15px rgba(234, 179, 8, 0.4)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:to-yellow-600 text-slate-900 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all duration-300 border border-amber-300/40 shadow-lg"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-slate-100 border border-amber-500/30 text-slate-800 hover:bg-slate-200 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden w-full bg-white border-b border-amber-500/20 overflow-hidden px-6 py-5 shadow-xl"
          >
            <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition"
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-900 text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-all border border-amber-300/40 shadow-lg"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}