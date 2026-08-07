"use client";
import React, { useState, useEffect } from "react";
import { motion, useSpring, useTransform, animate } from "framer-motion";
import { ArrowUpRight, Sparkles, Shield, TrendingUp, Award, Layers } from "lucide-react";

// Reusable animated number counter component
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useSpring(0, { stiffness: 60, damping: 20 });
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, { duration: 2.5, ease: "easeOut" });
    return controls.stop;
  }, [count, value]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      setDisplayValue(v);
    });
  }, [rounded]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const brands = [
    { name: "Shopify", color: "text-emerald-600 hover:text-emerald-500" },
    { name: "Mindbody", color: "text-purple-600 hover:text-purple-500" },
    { name: "MetLife", color: "text-blue-600 hover:text-blue-500" },
    { name: "Ramp", color: "text-slate-900 hover:text-indigo-600" },
    { name: "Marriott", color: "text-rose-700 hover:text-rose-600" },
    { name: "Figma", color: "text-orange-600 hover:text-orange-500" },
    { name: "Woo", color: "text-violet-600 hover:text-violet-500" },
    { name: "Coinbase", color: "text-blue-500 hover:text-blue-400" },
    { name: "Google", color: "text-red-500 hover:text-blue-600" },
    { name: "Amazon", color: "text-amber-600 hover:text-amber-500" },
  ];

  return (
    <section className="relative h-screen w-full flex flex-col justify-between bg-white text-slate-900 overflow-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* Exact Stripe-Style Dynamic Moving Diagonal Mesh Background */}
      <div className="absolute top-0 right-0 w-full lg:w-[1200px] h-full pointer-events-none overflow-hidden z-0">
        
        {/* Primary Flowing Curved Diagonal Ribbon */}
        <motion.div 
          animate={{ 
            x: [0, 40, -20, 0], 
            y: [0, -30, 20, 0],
            scale: [1, 1.05, 0.97, 1],
            rotate: [-15, -12, -18, -15] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[1100px] h-[1100px] bg-gradient-to-tr from-purple-300/40 via-pink-400/50 to-amber-300/60 blur-[100px] rounded-[35%] transform origin-top-right" 
        />

        {/* Secondary Vibrant Wave for Stripe Effect */}
        <motion.div 
          animate={{ 
            x: [-30, 30, -15, -30], 
            y: [30, -20, 30, 30],
            scale: [0.95, 1.08, 1, 0.95],
            opacity: [0.7, 1, 0.8, 0.7] 
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-10 w-[900px] h-[900px] bg-gradient-to-br from-pink-400/50 via-orange-400/40 to-yellow-300/70 blur-[110px] rounded-full transform" 
        />
        
        {/* Soft Background Glow for Balance */}
        <motion.div 
          animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-40 w-[600px] h-[600px] bg-indigo-300/30 blur-[130px] rounded-full"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto w-full z-10 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto">
        
        {/* Left Column: Official Content & Editorial Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-5 lg:space-y-6 text-left"
        >
          
          {/* Glowing/Clean Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold tracking-widest uppercase shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-spin" style={{ animationDuration: "10s" }} />
            <span>SQL Centrix &bull; Growth Partner</span>
          </motion.div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              NOTHING BUT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 font-serif italic font-normal tracking-normal">
                Sales Qualified
              </span> <br />
              LEADS.
            </h1>

            <p className="text-slate-600 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              At SQL Centrix, every strategy, campaign, website, advertisement, and piece of content has one objective: Bringing your business, qualified opportunities that convert into revenue. Marketing is the process. SQL’s are the results. At SQL Centrix the results are our starting point.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
            <motion.a
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)" }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-600/25 transition-all duration-300 group text-sm cursor-pointer relative overflow-hidden"
            >
              <span>Get Your Free Growth Strategy</span>
              <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02, backgroundColor: "rgba(241, 245, 249, 1)" }}
              whileTap={{ scale: 0.97 }}
              href="https://my-portfolio-beige-gamma-24.vercel.app/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-700 font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 border border-slate-200 text-sm cursor-pointer"
            >
              <span>Explore Portfolio</span>
            </motion.a>
          </div>

          {/* Micro Trust Proof with Animated Counters */}
          <div className="grid grid-cols-3 gap-6 pt-3 border-t border-slate-200 max-w-lg text-left">
            <div>
              <div className="text-lg sm:text-xl font-black text-slate-900 font-mono">
                +<Counter value={340} suffix="%" />
              </div>
              <div className="text-[11px] text-slate-500 font-medium mt-0.5">Pipeline Velocity</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-slate-900 font-mono">
                <Counter value={4} />.<Counter value={8} />x
              </div>
              <div className="text-[11px] text-slate-500 font-medium mt-0.5">Average ROAS</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-slate-900 font-mono">
                <Counter value={99} />.<Counter value={4} />%
              </div>
              <div className="text-[11px] text-slate-500 font-medium mt-0.5">Retention Rate</div>
            </div>
          </div>

        </motion.div>

        {/* Right Column: Clean Light-Mode Showcase Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="lg:col-span-5 relative z-10"
        >
          <div className="relative p-3 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-slate-100 shadow-2xl border border-slate-200/80 backdrop-blur-2xl">
            <div className="bg-white/90 backdrop-blur-md rounded-[2rem] p-5 sm:p-6 space-y-3.5 relative overflow-hidden shadow-sm border border-slate-100">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold shadow-sm">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-wide">Live Growth Pipeline</h3>
                    <p className="text-[10px] text-slate-500">SQL Centrix Intelligence Hub</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-[10px] font-mono font-bold">
                  SECURE
                </span>
              </div>

              {/* Visual Mini Metrics List */}
              <div className="space-y-2.5">
                <motion.div 
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                      <Shield className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Technical SEO Architecture</div>
                      <div className="text-[10px] text-slate-500">Top-tier search rankings achieved</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-indigo-600 font-mono">Rank #1</span>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">PPC Ad Scaling</div>
                      <div className="text-[10px] text-slate-500">Cost-per-acquisition minimized</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-purple-600 font-mono">4.8x ROAS</span>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center font-bold">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">UI/UX Web Engineering</div>
                      <div className="text-[10px] text-slate-500">High-converting luxury interfaces</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-pink-600 font-mono">99.4% Conv</span>
                </motion.div>
              </div>

              {/* Card Footer Status */}
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>SYSTEM STATUS: OPTIMAL</span>
                <span className="text-emerald-600 flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  LIVE
                </span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Moving Brands Row with Color Variations and Entry Animations */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full border-t border-slate-200 bg-white/90 backdrop-blur-md py-4 overflow-hidden relative z-20 shrink-0"
      >
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-16 whitespace-nowrap shrink-0 px-8"
          >
            {[...brands, ...brands].map((brand, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={`flex items-center justify-center font-extrabold text-lg tracking-tight uppercase font-sans cursor-pointer transition-colors duration-300 ${brand.color}`}
              >
                {brand.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}