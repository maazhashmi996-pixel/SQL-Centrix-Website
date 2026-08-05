"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-purple-100/60 shadow-[0_4px_20px_rgba(147,51,234,0.03)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Clean Logo Container with Soft Glow */}
        <div className="flex items-center">
          <a href="#" className="flex items-center focus:outline-none group">
            <img
              src="2.png" 
              alt="SQL Centrix Logo" 
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>
        
        {/* Premium Minimal Nav Links with Animated Underline Effect */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#" className="relative py-2 text-purple-700 font-semibold transition-colors hover:text-purple-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-indigo-600 after:rounded-full">
            Home
          </a>
          <a href="#process" className="relative py-2 transition-colors hover:text-purple-600 group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 rounded-full transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#case-studies" className="relative py-2 transition-colors hover:text-purple-600 group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 rounded-full transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#pross" className="relative py-2 transition-colors hover:text-purple-600 group">
            Blogs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 rounded-full transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* High-End Gradient CTA Button */}
        <div>
          <motion.a
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.3)" }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-lg shadow-purple-600/20 transition-all duration-300 border border-purple-400/20"
          >
            Get Started
          </motion.a>
        </div>

      </div>
    </header>
  );
}