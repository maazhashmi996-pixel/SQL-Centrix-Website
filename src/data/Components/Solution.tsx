"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function Solution() {
  const containerRef = useRef(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: true });

  const [isBgPlaying, setIsBgPlaying] = useState(true);
  const [isBgMuted, setIsBgMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (bgVideoRef.current) {
      bgVideoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2deg", "2deg"]);

  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
    
    spotlightX.set(mouseX);
    spotlightY.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const toggleBgPlay = () => {
    if (bgVideoRef.current) {
      if (isBgPlaying) {
        bgVideoRef.current.pause();
      } else {
        bgVideoRef.current.play().catch(() => {});
      }
      setIsBgPlaying(!isBgPlaying);
    }
  };

  const toggleBgMute = () => {
    if (bgVideoRef.current) {
      bgVideoRef.current.muted = !isBgMuted;
      setIsBgMuted(!isBgMuted);
    }
  };

  return (
    <section 
      ref={containerRef}
      id="pross"
      className="py-28 lg:py-36 bg-gradient-to-b from-yellow-50/40 via-white to-yellow-50/20 text-slate-900 relative overflow-hidden border-b border-yellow-500/10 perspective-[1200px]"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {!videoError ? (
          <video 
            ref={bgVideoRef}
            autoPlay 
            loop 
            muted={isBgMuted} 
            playsInline
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover opacity-15 scale-105 filter blur-[2px]"
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-yellow-100/40 to-amber-100/30" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 0.95, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full bg-gradient-to-tr from-yellow-300/20 via-amber-400/15 to-yellow-200/20 blur-[150px] rounded-full"
        />
      </div>

      {!videoError && (
        <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-yellow-200 text-slate-700 shadow-xl">
          <span className="text-[10px] font-mono tracking-wider text-yellow-800 pr-1 hidden sm:inline">BG VIDEO</span>
          <button 
            onClick={toggleBgMute}
            className="w-7 h-7 rounded-full bg-yellow-50 hover:bg-yellow-100 text-yellow-800 flex items-center justify-center transition-colors cursor-pointer border border-yellow-200"
            aria-label="Toggle Background Video Mute"
          >
            {isBgMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
          </button>
          <button 
            onClick={toggleBgPlay}
            className="w-7 h-7 rounded-full bg-yellow-50 hover:bg-yellow-100 text-yellow-800 flex items-center justify-center transition-colors cursor-pointer border border-yellow-200"
            aria-label="Toggle Background Video Play"
          >
            {isBgPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
          </button>
        </div>
      )}

      <div className="max-w-4xl mx-auto w-full px-6 relative z-10">
        
        <motion.div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-14 lg:p-16 rounded-[3rem] bg-gradient-to-b from-white/95 via-white/90 to-yellow-50/30 border border-yellow-200/80 shadow-[0_30px_70px_rgba(234,179,8,0.12)] backdrop-blur-2xl relative overflow-hidden group text-center space-y-12"
        >
          
          <motion.div 
            className="absolute pointer-events-none -inset-px rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            style={{
              background: useTransform(
                [spotlightX, spotlightY],
                ([latestX, latestY]) => `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(234, 179, 8, 0.08), transparent 80%)`
              )
            }}
          />

          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 opacity-95 shadow-md" />

          {/* Badge & Main Title */}
          <div className="space-y-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-yellow-100/80 border border-yellow-300 text-yellow-900 text-xs font-black uppercase tracking-widest shadow-md mx-auto backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-yellow-600 animate-pulse" />
              3. The Solution (Brand Positioning)
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]"
            >
               The Solution <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-600 font-serif italic font-normal tracking-normal">(Brand Positioning)</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-700 font-semibold leading-relaxed max-w-2xl mx-auto"
            >
              At SQL Centrix, every campaign is designed around one objective
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-yellow-50 via-amber-50/50 to-yellow-50 border border-yellow-200/80 shadow-inner max-w-2xl mx-auto"
            >
              <motion.span 
                className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-700 block leading-tight"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Generate Qualified Leads that help your business grow
              </motion.span>
            </motion.div>
          </div>

          {/* Interactive Structured Card for Headline & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-6 border-t border-yellow-100 space-y-8 relative z-10 max-w-xl mx-auto bg-white/60 p-8 rounded-3xl border border-yellow-200/60 shadow-lg backdrop-blur-md"
          >
            <div className="space-y-2 text-center">
              <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-md bg-yellow-100 text-yellow-800 border border-yellow-300">
                Headline
              </span>
              <p className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Ready to build a marketing system focused
              </p>
            </div>

            <div className="space-y-3 text-center pt-2">
              <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-md bg-yellow-100 text-yellow-800 border border-yellow-300 inline-block">
                CTA Button
              </span>
              <div className="pt-2">
                <motion.a
                  whileHover={{ scale: 1.04, boxShadow: "0 15px 35px rgba(234, 179, 8, 0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-950 font-black px-8 py-4 rounded-2xl shadow-xl shadow-yellow-500/30 transition-all duration-300 text-sm sm:text-base group cursor-pointer w-full sm:w-auto border border-yellow-300"
                >
                  <span>Book a Free Strategy Call</span>
                  <div className="w-6 h-6 rounded-xl bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}