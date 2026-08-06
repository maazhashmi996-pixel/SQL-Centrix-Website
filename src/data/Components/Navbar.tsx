"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-amber-200/50 shadow-[0_10px_30px_rgba(234,179,8,0.04)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Luxury Logo Container */}
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-3.5 focus:outline-none group relative">
            {/* Glowing Backdrop Aura */}
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-yellow-400/20 to-amber-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
            
            {/* Logo Image Wrapper */}
            <div className="relative flex items-center justify-center px-3 py-1.5 rounded-2xl bg-white border border-amber-200/80 shadow-[0_4px_20px_rgba(234,179,8,0.08)] transition-transform duration-300 group-hover:scale-105">
              <img
                src="logo2.jpg" 
                alt="SQL Centrix Logo" 
                className="h-15 md:h-11 w-auto object-contain"
              />
            </div>

            {/* Brand Text */}
            <div className="hidden sm:flex flex-col">
              <span className="text-base font-black tracking-tight text-slate-900 flex items-center gap-1">
                SQL <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600">Centrix</span>
              </span>
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-amber-600/90 -mt-1">
                Growth Partner
              </span>
            </div>
          </a>
        </div>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-9 text-sm font-semibold text-slate-600">
          <a href="#" className="relative py-2 text-amber-600 transition-colors hover:text-amber-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-amber-500 after:to-yellow-500 after:rounded-full">
            Home
          </a>
          <a href="#process" className="relative py-2 transition-colors hover:text-amber-600 group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#case-studies" className="relative py-2 transition-colors hover:text-amber-600 group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#pross" className="relative py-2 transition-colors hover:text-amber-600 group">
            Blogs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* High-End CTA Button (Desktop) */}
        <div className="hidden md:block">
          <motion.a
            whileHover={{ scale: 1.04, boxShadow: "0 20px 40px -10px rgba(234, 179, 8, 0.4)" }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-950 text-sm font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/25 transition-all duration-300 border border-amber-400/30 group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </motion.a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl bg-amber-50/80 text-amber-700 hover:bg-amber-100 transition-colors focus:outline-none border border-amber-200/60 shadow-sm"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-amber-100 overflow-hidden px-6 py-6 shadow-2xl"
          >
            <nav className="flex flex-col space-y-3.5 text-base font-semibold text-slate-700">
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl bg-amber-50 text-amber-700 transition"
              >
                Home
              </a>
              <a
                href="#process"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl hover:bg-amber-50/70 hover:text-amber-600 transition"
              >
                Services
              </a>
              <a
                href="#case-studies"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl hover:bg-amber-50/70 hover:text-amber-600 transition"
              >
                About
              </a>
              <a
                href="#pross"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl hover:bg-amber-50/70 hover:text-amber-600 transition"
              >
                Blogs
              </a>
              <div className="pt-3">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold py-3.5 rounded-xl shadow-lg shadow-amber-500/25"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}