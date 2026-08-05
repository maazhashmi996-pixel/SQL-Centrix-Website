"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-[0_4px_20px_rgba(147,51,234,0.03)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Luxury Logo Container with Glow Effect */}
        <div className="flex items-center">
          <a href="#" className="flex items-center focus:outline-none group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300" />
            <img
              src="2.png" 
              alt="SQL Centrix Logo" 
              className="relative h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>
        
        {/* Desktop Navigation Links with Smooth Underline Animation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#" className="relative py-2 text-purple-700 font-semibold transition-colors hover:text-purple-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-indigo-600 after:rounded-full">
            Home
          </a>
          <a href="#process" className="relative py-2 transition-colors hover:text-purple-600 group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#case-studies" className="relative py-2 transition-colors hover:text-purple-600 group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#pross" className="relative py-2 transition-colors hover:text-purple-600 group">
            Blogs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* High-End CTA Button (Desktop) */}
        <div className="hidden md:block">
          <motion.a
            whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -5px rgba(147, 51, 234, 0.4)" }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:opacity-95 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-lg shadow-purple-600/25 transition-all duration-300 border border-purple-400/30 group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors focus:outline-none border border-purple-200/60"
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
            className="md:hidden bg-white border-b border-purple-100 overflow-hidden px-6 py-6 shadow-2xl"
          >
            <nav className="flex flex-col space-y-4 text-base font-medium text-slate-700">
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-purple-50 text-purple-700 font-semibold transition"
              >
                Home
              </a>
              <a
                href="#process"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition"
              >
                Services
              </a>
              <a
                href="#case-studies"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition"
              >
                About
              </a>
              <a
                href="#pross"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition"
              >
                Blogs
              </a>
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-purple-600/25"
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