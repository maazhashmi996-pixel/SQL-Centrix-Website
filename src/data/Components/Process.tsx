"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { 
  HiOutlineSearch, 
  HiOutlineSpeakerphone, 
  HiOutlineDocumentText, 
  HiOutlineShare, 
  HiOutlineBadgeCheck, 
  HiOutlineTemplate, 
  HiOutlineGlobe,
  HiOutlineSparkles,
  HiOutlineArrowRight
} from "react-icons/hi";

const services = [
  {
    title: "Brand Positioning",
    desc: "Before customers buy from you. They need to trust you. We build memorable brands that create confidence from the very first interaction.",
    icon: HiOutlineBadgeCheck,
  },
  {
    title: "High-Converting Websites",
    desc: "Your website shouldn't just look good. It should educate visitors and build trust by answering the questions they are looking for and convert visitors into qualified enquiries.",
    icon: HiOutlineTemplate,
  },
  {
    title: "Search Visibility",
    desc: "Customers can't buy from businesses they can't find. We improve your visibility across search engines and AI-powered search through structured content and technical excellence.",
    icon: HiOutlineSearch,
  },
  {
    title: "Paid Media",
    desc: "Sometimes customers are already searching. We create paid advertising campaigns focused on attracting the right audience not just generating traffic.",
    icon: HiOutlineSpeakerphone,
  },
  {
    title: "Content Strategy",
    desc: "People buy from businesses they understand. We develop content that educates, builds authority, and supports customers throughout their buying journey.",
    icon: HiOutlineDocumentText,
  },
  {
    title: "Social Media & Community Growth",
    desc: "We create social media experiences that strengthen your reputation and keep your business visible where your audience spends their time.",
    icon: HiOutlineShare,
  },
  {
    title: "Authority Building",
    desc: "Strengthening your digital authority through strategic content, digital PR, guest posting, and Wikipedia consulting will help your business become a trusted name online.",
    icon: HiOutlineGlobe,
  },
];

const brands = [
  { name: "ACME Corp", color: "text-amber-600 hover:text-amber-700" },
  { name: "Apex Global", color: "text-yellow-600 hover:text-yellow-700" },
  { name: "Vortex AI", color: "text-orange-600 hover:text-orange-700" },
  { name: "Nexus Tech", color: "text-yellow-700 hover:text-yellow-800" },
  { name: "Synergy Labs", color: "text-amber-700 hover:text-amber-800" },
  { name: "Pioneer Media", color: "text-yellow-500 hover:text-yellow-600" },
  { name: "Zenith Group", color: "text-orange-500 hover:text-orange-600" },
  { name: "Quantum Systems", color: "text-amber-500 hover:text-amber-600" },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.1, once: true });

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section ref={containerRef} id="process" className="py-6 bg-[#FAFAFA] text-slate-900 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10 space-y-24">
        
        {/* Section 4: The SQL Centrix Philosophy */}
        <div className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-14 border border-yellow-500/20 shadow-xl shadow-yellow-500/5">
          <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
          
          <div className="space-y-10 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-700 text-xs font-bold uppercase tracking-widest">
                <HiOutlineSparkles className="w-4 h-4 text-yellow-600" />
                Section 4
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                 The SQL Centrix Philosophy
              </h2>
            </div>

            <div className="space-y-8 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-xl sm:text-2xl font-semibold text-yellow-700 leading-snug">
                  Most businesses invest in marketing activities. We invest in business outcomes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4 relative group hover:border-slate-300 transition-colors">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Instead of asking:</span>
                  <p className="text-xl sm:text-2xl font-bold text-slate-700 italic">
                    "How many clicks did we get?"
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-yellow-50 border border-yellow-500/30 space-y-4 relative group hover:border-yellow-500/50 transition-colors">
                  <span className="text-xs font-bold uppercase tracking-wider text-yellow-700">We ask:</span>
                  <p className="text-xl sm:text-2xl font-extrabold text-yellow-800">
                    "How many qualified customers are ready to buy?"
                  </p>
                </div>
              </div>

              <div className="text-center pt-2">
                <p className="text-slate-500 italic text-base sm:text-lg">
                  Because clicks don't grow businesses. Customers do.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: The Process (Applying The Philosophy) */}
        <div className="space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-700 text-xs font-bold uppercase tracking-widest">
              <HiOutlineSparkles className="w-4 h-4 text-yellow-600" />
              Section 5
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
               The Process (Applying The Philosophy)
            </h2>

            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-700 tracking-tight">
              How We Generate Sales Qualified Leads
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Sales don't happen because of one marketing channel. They happen because every digital touchpoint works together. That's exactly how SQL Centrix operates.
            </p>
          </div>

          {/* Premium Light Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => {
              const IconComponent = item.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] border border-slate-200 hover:border-yellow-500/50 hover:bg-white hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-50 border border-yellow-200 text-yellow-600 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 shadow-xs">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-yellow-700 transition-colors tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-8 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-yellow-700 transition-colors">
                      SQL Centrix Standard
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-yellow-500 group-hover:text-white group-hover:border-yellow-500 transition-all">
                      <HiOutlineArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trusted By Ticker with Unique Brand Colors */}
        <div className="pt-7 border-t border-slate-200 overflow-hidden relative">
          <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
          
          <div className="flex items-center gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap px-2">
              Trusted By
            </span>
            <div className="flex overflow-hidden w-full">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-12 whitespace-nowrap min-w-max"
              >
                {[...brands, ...brands].map((brand, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2.5 transition-colors font-bold text-lg tracking-wider px-4 cursor-pointer ${brand.color}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current opacity-70" />
                    {brand.name}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}