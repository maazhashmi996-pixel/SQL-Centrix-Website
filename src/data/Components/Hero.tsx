"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, BarChart3 } from "lucide-react";

export default function Hero() {
  // Typing effect hook / logic for the main title
  const fullText = "We Drive Real Growth for Ambitious Businesses.";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % 1;
      const fullWord = fullText;

      if (isDeleting) {
        setDisplayedText(fullWord.substring(0, displayedText.length - 1));
        setTypingSpeed(40);
      } else {
        setDisplayedText(fullWord.substring(0, displayedText.length + 1));
        setTypingSpeed(80);
      }

      if (!isDeleting && displayedText === fullWord) {
        // Pause at the end before restarting (optional, or remove timeout to not loop)
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#FAF8FF] to-[#F4EEFF] text-slate-900 px-6 lg:px-16 border-b border-purple-100/80">
      
      {/* Luxury Ambient Glow Blobs */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.5, scale: 1.2 }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-purple-600/15 via-indigo-500/10 to-amber-500/10 blur-[170px] rounded-full pointer-events-none"
      />

      {/* Ultra-Subtle Luxury Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7c3aed07_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed07_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Container - Split Screen Grid (Left Content, Right Professional Image Card) */}
      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 pt-10">
        
        {/* Left Column: Text Content & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Top Orange/Amber Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-xs font-bold text-white shadow-[0_6px_20px_rgba(249,115,22,0.25)]"
          >
            <Star className="w-3.5 h-3.5 fill-white text-white" />
            <span className="tracking-wide uppercase font-extrabold text-[11px]">
              Certified Digital Marketing Agency Lahore
            </span>
          </motion.div>

          {/* Heading with Typing Effect */}
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 min-h-[140px] md:min-h-[160px] leading-[1.15]"
            >
              <span className="text-slate-900">
                {displayedText.includes("for Ambitious Businesses.") 
                  ? displayedText.split("for Ambitious Businesses.")[0] 
                  : displayedText}
              </span>
              {displayedText.includes("for Ambitious Businesses.") && (
                <br className="hidden sm:block" />
              )}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-900">
                {displayedText.includes("for Ambitious Businesses.") ? "for Ambitious Businesses." : ""}
              </span>
              <span className="inline-block w-1.5 h-10 md:h-12 bg-purple-600 ml-1 animate-pulse align-middle" />
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-sm md:text-base text-slate-600 max-w-xl leading-relaxed font-normal pt-2"
            >
              AR Productions delivers data-driven SEO, high-converting PPC campaigns, and scroll-stopping web design for companies ready to scale. We help brands attract the right traffic, convert more visitors, and turn clicks into customers.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-1"
          >
            <motion.a
              whileHover={{ scale: 1.04, boxShadow: "0 20px 45px -10px rgba(147, 51, 234, 0.4)" }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 text-white font-bold px-7 py-3.5 rounded-2xl shadow-xl shadow-purple-600/30 transition-all duration-300 group border border-purple-500/30 text-sm"
            >
              <span>Get Your Free Growth Strategy</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.03, y: -2, backgroundColor: "rgba(255, 255, 255, 1)", borderColor: "rgba(147, 51, 234, 0.5)" }}
              whileTap={{ scale: 0.96 }}
              href="#process"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white/90 text-slate-800 font-semibold px-6 py-3.5 rounded-2xl transition-all duration-300 border border-purple-200/80 shadow-[0_10px_25px_rgba(147,51,234,0.06)] backdrop-blur-md text-sm"
            >
              Explore How It Works
            </motion.a>
          </motion.div>

        </div>

        {/* Right Column: Professional Agency Team Image Card */}
        <motion.div 
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative p-2 rounded-[32px] bg-gradient-to-tr from-purple-500/30 via-indigo-500/20 to-amber-400/30 shadow-[0_25px_60px_rgba(147,51,234,0.15)]">
            <div className="overflow-hidden rounded-[26px] bg-slate-900 border border-white/20 relative group">
              
              {/* Professional Agency Team Image */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="AR Productions Team Working" 
                className="w-full h-[400px] md:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Floating Live Badge inside Image */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-white/40 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-600/30 shrink-0">
                    <BarChart3 className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-900 flex items-center gap-1">
                      <span>Verified SQL Pipeline</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" />
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">3.4x Average ROAS Increase</div>
                  </div>
                </div>
                <span className="bg-purple-100 text-purple-700 text-xs font-black px-2.5 py-1 rounded-lg">
                  +340%
                </span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}