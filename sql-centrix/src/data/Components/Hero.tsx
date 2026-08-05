"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Sparkles, ArrowRight, TrendingUp, ShieldCheck, Globe, Award } from "lucide-react";

// Reusable animated counter component that counts up when in view
function Counter({ value, suffix = "+" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { damping: 40, stiffness: 100 });
  
  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      motionVal.set(value);
    }
  }, [isInView, motionVal, value]);

  useEffect(() => {
    return springVal.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springVal]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFFFFF] text-[#0F172A] py-28 px-6 border-b border-[#E2E8F0]">
      
      {/* Dynamic Animated Background Blobs using Blue & Violet theme */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.7, scale: 1.15 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-[#2563EB]/10 blur-[150px] rounded-full pointer-events-none"
      />
      <motion.div 
        initial={{ opacity: 0.2, x: -80, y: 50 }}
        animate={{ opacity: 0.6, x: 90, y: -60 }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#7C3AED]/10 blur-[130px] rounded-full pointer-events-none"
      />

      {/* Background Decorative Subtle Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb06_1px,transparent_1px),linear-gradient(to_bottom,#2563eb06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center space-y-8 w-full z-10">
        
        {/* Floating Animated Badge with Pulse */}
        <motion.div 
          initial={{ opacity: 0, y: -25, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 rounded-full bg-[#F8FAFC] px-4 py-2 text-xs font-bold text-[#2563EB] border border-[#E2E8F0] shadow-sm backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping" />
          <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>Nothing But Sales Qualified Leads</span>
        </motion.div>

        {/* Dynamic Title with Smooth Staggered Animation */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-[1.12]"
        >
          Marketing is the process. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#5b46f5] to-[#7C3AED]">
            SQLs are the results.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed font-normal"
        >
          At SQL Centrix, every strategy, campaign, website, and advertisement has one objective: Bringing your business qualified opportunities that convert into revenue. <strong className="text-[#0F172A] font-semibold">The results are our starting point.</strong>
        </motion.p>

        {/* Interactive Action Buttons with Blue Gradient & Lift Effect */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 20px 35px -5px rgba(37, 99, 235, 0.35)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:opacity-95 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-[#2563EB]/25 transition-all duration-300 group"
          >
            <span>Get Your Free Growth Strategy</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#process"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#FFFFFF] hover:bg-[#F8FAFC] text-[#0F172A] font-medium px-7 py-4 rounded-xl transition-all duration-300 border border-[#E2E8F0] shadow-sm hover:border-[#2563EB]/50"
          >
            Explore How It Works
          </motion.a>
        </motion.div>

        {/* Enhanced Metrics Cards with Animated Counters & Hover Lift */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-5 border-t border-[#E2E8F0] mt-12 max-w-5xl mx-auto text-left"
        >
          
          <motion.div 
            whileHover={{ y: -6, boxShadow: "0 20px 30px -10px rgba(37, 99, 235, 0.12)", borderColor: "rgba(37, 99, 235, 0.3)" }}
            className="space-y-2 bg-[#FFFFFF] p-5 rounded-2xl border border-[#E2E8F0] shadow-[0_10px_25px_rgba(0,0,0,0.03)] transition-all duration-300 group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#0F172A]">
                <Counter value={10} /> <span className="text-[#2563EB] text-base font-bold">Years</span>
              </div>
              <div className="text-xs text-[#64748B] font-semibold uppercase tracking-wider mt-0.5">Combined Experience</div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6, boxShadow: "0 20px 30px -10px rgba(37, 99, 235, 0.12)", borderColor: "rgba(37, 99, 235, 0.3)" }}
            className="space-y-2 bg-[#FFFFFF] p-5 rounded-2xl border border-[#E2E8F0] shadow-[0_10px_25px_rgba(0,0,0,0.03)] transition-all duration-300 group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#0F172A]">
                <Counter value={500} />
              </div>
              <div className="text-xs text-[#64748B] font-semibold uppercase tracking-wider mt-0.5">Campaigns Delivered</div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6, boxShadow: "0 20px 30px -10px rgba(37, 99, 235, 0.12)", borderColor: "rgba(37, 99, 235, 0.3)" }}
            className="space-y-2 bg-[#FFFFFF] p-5 rounded-2xl border border-[#E2E8F0] shadow-[0_10px_25px_rgba(0,0,0,0.03)] transition-all duration-300 group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#0F172A]">
                <Counter value={25} />
              </div>
              <div className="text-xs text-[#64748B] font-semibold uppercase tracking-wider mt-0.5">Industries Served</div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6, boxShadow: "0 20px 30px -10px rgba(37, 99, 235, 0.12)", borderColor: "rgba(37, 99, 235, 0.3)" }}
            className="space-y-2 bg-[#FFFFFF] p-5 rounded-2xl border border-[#E2E8F0] shadow-[0_10px_25px_rgba(0,0,0,0.03)] transition-all duration-300 group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#0F172A]">
                <Counter value={50} />
              </div>
              <div className="text-xs text-[#64748B] font-semibold uppercase tracking-wider mt-0.5">Global Partners</div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}