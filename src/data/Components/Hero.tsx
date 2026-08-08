"use client";
import React, { useState, useEffect } from "react";
import { motion, useSpring, useTransform, animate } from "framer-motion";
import { ArrowUpRight, Shield, TrendingUp, Award, Layers } from "lucide-react";

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
    { name: "Shopify", color: "text-rose-500 hover:text-rose-400" },
    { name: "Mindbody", color: "text-blue-500 hover:text-blue-400" },
    { name: "MetLife", color: "text-emerald-500 hover:text-emerald-400" },
    { name: "Ramp", color: "text-violet-500 hover:text-violet-400" },
    { name: "Marriott", color: "text-amber-500 hover:text-amber-400" },
    { name: "Figma", color: "text-cyan-500 hover:text-cyan-400" },
    { name: "Woo", color: "text-indigo-500 hover:text-indigo-400" },
    { name: "Coinbase", color: "text-yellow-500 hover:text-yellow-400" },
    { name: "Google", color: "text-blue-600 hover:text-blue-500" },
    { name: "Amazon", color: "text-orange-500 hover:text-orange-400" },
  ];

  return (
    <section className="relative min-h-[calc(100vh-5rem)] w-full flex flex-col justify-between bg-white text-slate-900 overflow-hidden selection:bg-yellow-300 selection:text-slate-900  pt-12">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-full lg:w-[1000px] h-full pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ 
            x: [0, 20, -10, 0], 
            y: [0, -15, 10, 0],
            scale: [1, 1.03, 0.98, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-[800px] h-[800px] bg-gradient-to-tr from-yellow-200/50 via-amber-200/40 to-yellow-100/20 blur-[130px] rounded-full transform origin-top-right" 
        />
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto">
        
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6 lg:space-y-7 text-left"
        >
          
          <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black leading-[1.05]">
  Nothing But <span className="text-yellow-500 drop-shadow-sm">Sales Qualified Leads.</span>
</h1>

            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-yellow-600">Sub Heading</h2>
              <p className="text-slate-700 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
                At SQL Centrix, every strategy, campaign, website, advertisement, and piece of content has one objective: Bringing your business, qualified opportunities that convert into revenue.
              </p>
              <p className="text-slate-700 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
                Marketing is the process. SQL’s are the results.
              </p>
              <p className="text-slate-700 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
                At SQL Centrix the results are our starting point.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
            <motion.a
              whileHover={{ scale: 1.03, boxShadow: "0 14px 35px rgba(234, 179, 8, 0.35)" }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-extrabold px-7 py-4 rounded-2xl shadow-lg shadow-yellow-500/20 transition-all duration-300 group text-sm cursor-pointer relative overflow-hidden"
            >
              <span>Get Your Free Growth Strategy</span>
              <div className="w-6 h-6 rounded-xl bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-slate-950" />
              </div>
            </motion.a>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-5 border-t border-yellow-200/80 max-w-lg text-left">
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono tracking-tight">
                +<Counter value={340} suffix="%" />
              </div>
              <div className="text-xs text-slate-600 font-medium mt-0.5">Pipeline Velocity</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono tracking-tight">
                <Counter value={4} />.<Counter value={8} />x
              </div>
              <div className="text-xs text-slate-600 font-medium mt-0.5">Average ROAS</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono tracking-tight">
                <Counter value={99} />.<Counter value={4} />%
              </div>
              <div className="text-xs text-slate-600 font-medium mt-0.5">Retention Rate</div>
            </div>
          </div>

        </motion.div>

        {/* Right Column - Interactive Card Hub */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="lg:col-span-5 relative z-10"
        >
          <div className="relative p-3.5 rounded-[2.5rem] bg-gradient-to-tr from-yellow-400/15 via-amber-300/10 to-white shadow-2xl border border-yellow-200/60 backdrop-blur-2xl">
            <div className="bg-white/95 backdrop-blur-md rounded-[2rem] p-6 space-y-4 relative overflow-hidden shadow-xl border border-yellow-100">
              
              <div className="flex items-center justify-between border-b border-yellow-100 pb-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-yellow-50 flex items-center justify-center text-yellow-600 font-bold shadow-sm border border-yellow-200/50">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-wide">Live Growth Pipeline</h3>
                    <p className="text-[11px] text-yellow-600 font-medium">SQL Centrix Intelligence Hub</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-[10px] font-mono font-bold tracking-wider">
                  SECURE
                </span>
              </div>

              <div className="space-y-3">
                <motion.div 
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="p-3.5 rounded-2xl bg-yellow-50/40 hover:bg-yellow-50/80 border border-yellow-100/80 flex items-center justify-between transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-yellow-100/80 text-yellow-700 flex items-center justify-center font-bold">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Technical SEO Architecture</div>
                      <div className="text-[11px] text-slate-500">Top-tier search rankings achieved</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-yellow-600 font-mono bg-yellow-100/60 px-2 py-1 rounded-lg">Rank #1</span>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="p-3.5 rounded-2xl bg-yellow-50/40 hover:bg-yellow-50/80 border border-yellow-100/80 flex items-center justify-between transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-100/80 text-amber-700 flex items-center justify-center font-bold">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">PPC Ad Scaling</div>
                      <div className="text-[11px] text-slate-500">Cost-per-acquisition minimized</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-600 font-mono bg-amber-100/60 px-2 py-1 rounded-lg">4.8x ROAS</span>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="p-3.5 rounded-2xl bg-yellow-50/40 hover:bg-yellow-50/80 border border-yellow-100/80 flex items-center justify-between transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-yellow-100/80 text-yellow-700 flex items-center justify-center font-bold">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">UI/UX Web Engineering</div>
                      <div className="text-[11px] text-slate-500">High-converting luxury interfaces</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-yellow-600 font-mono bg-yellow-100/60 px-2 py-1 rounded-lg">99.4% Conv</span>
                </motion.div>
              </div>

              <div className="pt-3 border-t border-yellow-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>SYSTEM STATUS: OPTIMAL</span>
                <span className="text-yellow-600 flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 animate-ping" />
                  LIVE
                </span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>

      {/* Brands Ticker Marquee with Multi-Colored Brand Logos */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full border-t border-yellow-200/80 bg-white/90 backdrop-blur-md py-5 overflow-hidden relative z-20 shrink-0 mt-8 shadow-sm"
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