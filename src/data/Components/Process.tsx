"use client";
import React, { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Globe, Search, Megaphone, FileText, Share2, Award, Layout, Sparkles, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Brand Positioning",
    desc: "We build memorable brands that create confidence from the very first interaction before customers buy.",
    icon: Award,
    tag: "Strategy",
  },
  {
    title: "High-Converting Websites",
    desc: "Websites that educate visitors, answer critical questions, and convert traffic into qualified enquiries.",
    icon: Layout,
    tag: "Development",
  },
  {
    title: "Search Visibility",
    desc: "Improve visibility across search engines and AI-powered search through structured technical excellence.",
    icon: Search,
    tag: "SEO & AI",
  },
  {
    title: "Paid Media",
    desc: "Targeted paid advertising campaigns focused on attracting the right audience, not just generating empty traffic.",
    icon: Megaphone,
    tag: "Acquisition",
  },
  {
    title: "Content Strategy",
    desc: "Develop content that educates, builds authority, and supports customers throughout their unique buying journey.",
    icon: FileText,
    tag: "Editorial",
  },
  {
    title: "Social Media & Community",
    desc: "Social media experiences that strengthen your reputation and maintain active visibility where your audience spends time.",
    icon: Share2,
    tag: "Engagement",
  },
  {
    title: "Authority Building",
    desc: "Strategic content, digital PR, guest posting, and Wikipedia consulting to turn your business into a trusted name online.",
    icon: Globe,
    tag: "PR & Trust",
  },
];

export default function Process() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.1, once: true });

  return (
    <section id="process" className="py-32 px-6 bg-gradient-to-b from-white via-purple-50/40 to-white relative overflow-hidden border-b border-purple-100/60">
      
      {/* Dynamic Background Ambient Glows */}
      <motion.div 
        animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/15 blur-[160px] rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-indigo-400/15 blur-[160px] rounded-full pointer-events-none"
      />

      <div ref={containerRef} className="relative max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
            Our Expertise
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            How We Generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800">Sales Qualified Leads</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed"
          >
            Sales don't happen because of one marketing channel. They happen because every digital touchpoint works together seamlessly.
          </motion.p>
        </div>

        {/* Services Grid with Mouse Parallax Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const isFeatured = idx === 0;
            return <ParallaxCard key={idx} item={item} idx={idx} isFeatured={isFeatured} isInView={isInView} />;
          })}
        </div>

      </div>
    </section>
  );
}

// --- Individual Card Component with Smooth Mouse Parallax Tilt Effect ---
function ParallaxCard({ item, idx, isFeatured, isInView }: { item: any; idx: number; isFeatured: boolean; isInView: boolean }) {
  const IconComponent = item.icon;
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for mouse coordinates relative to the card center (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the 3D tilt rotation
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Convert tilt ranges to degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Subtle interior elements shift for depth parallax
  const iconX = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);
  const iconY = useTransform(mouseYSpring, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
      transition={{ duration: 0.5, delay: idx * 0.07 }}
      whileHover={{
        borderColor: "rgba(168, 85, 247, 0.6)",
        boxShadow: "0 30px 60px -15px rgba(76, 29, 149, 0.3)",
      }}
      className={`bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 p-8 rounded-[2.5ref] rounded-[2.5rem] border border-purple-500/25 shadow-2xl shadow-purple-950/30 relative overflow-hidden backdrop-blur-xl transition-all duration-200 flex flex-col justify-between group cursor-pointer ${
        isFeatured ? "lg:col-span-2 md:col-span-2" : ""
      }`}
    >
      {/* Top Border Shimmer Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Ambient Card Hover Glow */}
      <div className="absolute -right-16 -bottom-16 w-44 h-44 bg-purple-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/30 transition-all duration-700" />
      
      {/* Floating Decorative Watermark Icon in background */}
      <div className="absolute right-6 top-6 text-white/[0.03] group-hover:text-purple-500/[0.08] transition-colors duration-500 pointer-events-none">
        <IconComponent className="w-32 h-32 -rotate-12 translate-x-4 -translate-y-4" />
      </div>

      <div className="space-y-6 relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="flex items-center justify-between">
          {/* Icon container with parallax shifting */}
          <motion.div 
            style={{ x: iconX, y: iconY }}
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/30 to-indigo-600/30 border border-purple-400/30 text-purple-300 flex items-center justify-center shadow-inner group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-400 transition-colors duration-300"
          >
            <IconComponent className="w-7 h-7" />
          </motion.div>

          {/* Category Tag & Arrow indicator */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-900/60 border border-purple-500/30 text-purple-300">
              {item.tag}
            </span>
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors tracking-tight">
            {item.title}
          </h3>
          <p className="text-purple-200/80 text-sm md:text-base leading-relaxed max-w-xl">
            {item.desc}
          </p>
        </div>
      </div>

      {/* Bottom subtle interactive indicator line */}
      <div className="pt-6 mt-6 border-t border-purple-900/60 flex items-center justify-between text-xs font-semibold text-purple-400/70 group-hover:text-purple-300 transition-colors relative z-10" style={{ transform: "translateZ(20px)" }}>
        <span>Explore service capabilities</span>
        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
      </div>
    </motion.div>
  );
}