"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, useSpring, animate } from "framer-motion";
import { 
  FiZap, 
  FiCompass, 
  FiCpu, 
  FiTrendingUp, 
  FiBarChart2, 
  FiArrowUpRight 
} from "react-icons/fi";

const processSteps = [
  {
    step: "01",
    title: "Who We Are & Our Track Record",
    description: "With 10+ years of combined experience across 25+ industries and 500+ performance-driven campaigns launched, we engineer predictable growth systems for businesses throughout Pakistan, UAE, Saudi Arabia, the UK, and the USA.",
    icon: FiCompass,
    badge: "Company Overview",
    type: "overview",
  },
  {
    step: "02",
    title: "Desiro LLC",
    subtitle: "Building an End-to-End Customer Acquisition & Sales System",
    industry: "Digital Marketing & Advertising",
    description: "Desiro partnered with SQL Centrix to build more than a lead generation campaign. We designed a complete customer acquisition system that connected performance marketing with sales operations and customer success. From Meta advertising and WhatsApp lead generation to Bitrix24 CRM implementation, sales pipeline automation, and onboarding workflows, every stage was built to help the business convert more enquiries into long-term clients.",
    metrics: [
      { value: "7,914+", label: "WhatsApp Conversations" },
      { value: "435K+", label: "People Reached" },
      { value: "1.7M+", label: "Impressions Delivered" },
      { value: "0.66", label: "Lowest Cost per Conversation (AED)" },
    ],
    services: "Performance Marketing • Creative Strategy • Bitrix24 CRM • WhatsApp Integration • Sales Pipeline Design • Lead Management • Customer Onboarding • Client Servicing",
    icon: FiCpu,
    badge: "Digital Marketing & Advertising",
    type: "casestudy",
  },
  {
    step: "03",
    title: "Kryalon Store & EVE Beauty",
    subtitle: "Scaling E-Commerce & Beauty Brands Through Performance Marketing",
    industry: "E-Commerce & Beauty",
    description: "Partnered with SQL Centrix to build scalable performance marketing systems focused on profitable customer acquisition. We developed structured frameworks for creative testing, audience targeting, campaign optimization, and conversion tracking across TikTok and multi-brand campaigns.",
    metrics: [
      { value: "856+", label: "Purchases" },
      { value: "19.5M+", label: "Paid Impressions" },
      { value: "73K+", label: "Website Clicks" },
      { value: "0.76", label: "Average CPM (AED)" },
    ],
    services: "TikTok Advertising • Creative Strategy • Performance Marketing • Conversion Tracking • Campaign Optimization • Analytics • Media Buying • Audience Research",
    icon: FiTrendingUp,
    badge: "E-Commerce & Beauty",
    type: "casestudy",
  },
  {
    step: "04",
    title: "ZAM UK VODA",
    subtitle: "Driving High-Intent B2B Search Demand Through Google Ads",
    industry: "Telecommunications & Enterprise Connectivity",
    description: "ZAM UK VODA partnered with SQL Centrix to strengthen its Google Search presence and capture high-intent business enquiries within the telecommunications sector. Rather than focusing on broad awareness, the objective was to place the brand in front of decision-makers actively searching for connectivity and communication solutions.",
    metrics: [
      { value: "3.48K+", label: "Clicks" },
      { value: "125K+", label: "Impressions" },
      { value: "$17.2K", label: "Ad Investment Managed" },
      { value: "$4.94", label: "Average Cost Per Click" },
    ],
    services: "Google Ads Strategy • Search Campaign Management • Keyword Research • Ad Copywriting • Bid Optimization • Performance Monitoring • Search Intent Targeting • Campaign Reporting",
    icon: FiBarChart2,
    badge: "Enterprise Connectivity",
    type: "casestudy",
  },
];

// Reusable counter component for metrics inside case studies
function MetricCounter({ value }: { value: string }) {
  const numericVal = parseFloat(value.replace(/[^0-9.]/g, ""));
  const hasPlus = value.startsWith("+") || value.endsWith("+");
  const hasDollar = value.startsWith("$");
  const hasX = value.endsWith("x");
  const hasPercent = value.endsWith("%");

  const count = useSpring(0, { stiffness: 50, damping: 20 });
  const rounded = useTransform(count, (latest) => {
    if (value.includes(".")) {
      return latest.toFixed(2);
    }
    return Math.round(latest).toString();
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView && !isNaN(numericVal)) {
      animate(count, numericVal, { duration: 2.2, ease: "easeOut" });
    } else if (!isInView) {
      count.set(0);
    }
  }, [isInView, numericVal, count]);

  if (isNaN(numericVal)) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref} className="inline-flex items-center gap-0.5">
      {hasDollar && "$"}
      {!hasDollar && value.startsWith("$") && "$"}
      <motion.span>{rounded}</motion.span>
      {hasPlus && "+"}
      {value.includes("AED") && " AED"}
      {hasPercent && "%"}
      {hasX && "x"}
    </span>
  );
}

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.3", "end 0.75"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative py-24 bg-white border-b border-amber-500/20 selection:bg-amber-500 selection:text-slate-950"
    >
      {/* Absolute Luxurious Light Ambient Backlights (Amber/Yellow Theme) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-amber-600/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Ultra-Fine Clean Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b12_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Container - Strictly Aligned with Navbar & Hero (max-w-7xl, px-6 lg:px-12) */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-widest shadow-xs backdrop-blur-md"
          >
            <FiZap className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            <span>10. Case Studies & Track Record</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Stop Chasing Marketing Strategies. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 font-serif italic font-normal tracking-normal">
              Start Building a Marketing System.
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            At SQL Centrix, we don't believe businesses need more marketing for the sake of marketing. Across 500+ campaigns globally, we engineer predictable systems that generate qualified opportunities. Explore our <a href="/blogs" className="text-amber-600 font-bold underline hover:text-amber-800 transition-colors">blogs</a> for expert insights.
          </p>
        </div>

        {/* Snake Layout Wrapper */}
        <div className="relative max-w-6xl mx-auto py-8">
          
          {/* Desktop Curved Path SVG Line */}
          <svg
            className="absolute bottom-40 left-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 1000 1230"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Base Light-Amber Snake Line */}
            <path
              d="M 600 120 
                 C 600 240, 400 240, 400 420 
                 C 400 600, 600 600, 600 780 
                 C 600 960, 400 960, 400 1140"
              stroke="#fde68a"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Scroll-Driven Animated Gradient Line */}
            <motion.path
              d="M 600 120 
                 C 600 240, 400 240, 400 420 
                 C 400 600, 600 600, 600 780 
                 C 600 960, 400 960, 400 1140"
              stroke="url(#amberGradientAdvanced)"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="amberGradientAdvanced" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
          </svg>

          {/* Process Steps List */}
          <div className="space-y-36 relative z-10">
            {processSteps.map((step, idx) => {
              const isNodeOnRight = idx % 2 === 0;

              return (
                <div
                  key={step.step}
                  className="relative flex flex-col md:flex-row items-center justify-between"
                >
                  {/* Left Slot */}
                  <div className="w-full md:w-[45%] flex justify-end pr-0 md:pr-10">
                    {isNodeOnRight && <ProcessCard step={step} direction="left" />}
                  </div>

                  {/* Advanced Glowing Numbered Node Badge */}
                  <div
                    className={`my-6 md:my-0 md:absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 ${
                      isNodeOnRight ? "md:left-[60%]" : "md:left-[40%]"
                    }`}
                  >
                    <div className="w-20 h-20 rounded-full bg-white border-2 border-amber-200 p-1.5 shadow-[0_0_30px_rgba(245,158,11,0.2)] flex items-center justify-center backdrop-blur-md">
                      <div className="w-full h-full rounded-full border border-amber-100 flex items-center justify-center bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 font-mono font-black text-slate-950 text-lg shadow-inner">
                        {step.step}
                      </div>
                    </div>
                  </div>

                  {/* Right Slot */}
                  <div className="w-full md:w-[45%] flex justify-start pl-0 md:pl-10">
                    {!isNodeOnRight && <ProcessCard step={step} direction="right" />}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

// Premium Light-Theme Glass Process Card Sub-component with Side Scroll Animations
function ProcessCard({
  step,
  direction,
}: {
  step: any;
  direction: "left" | "right";
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    margin: "-30% 0px -30% 0px",
    once: true,
  });

  const IconComponent = step.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        x: direction === "left" ? -80 : 80,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : direction === "left" ? -80 : 80,
      }}
      whileHover={{ 
        y: -6, 
        borderColor: "rgba(245, 158, 11, 0.5)",
        boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.15)"
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-lg bg-white hover:bg-amber-50/10 rounded-[2.2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-amber-500/25 backdrop-blur-2xl relative overflow-hidden group text-left space-y-5"
    >
      {/* Top Gradient Line Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 opacity-80 group-hover:opacity-100 transition-opacity" />

      {/* Card Header row with badge & icon */}
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full shadow-xs">
          {step.badge}
        </span>
        <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-500 group-hover:text-slate-950 transition-all duration-300 shadow-xs">
          <IconComponent className="w-5 h-5" />
        </div>
      </div>

      <div className="space-y-2.5">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors tracking-tight flex items-center justify-between">
          <span>{step.title}</span>
          <FiArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-amber-600 -translate-x-2 group-hover:translate-x-0 duration-300" />
        </h3>

        {step.subtitle && (
          <h4 className="text-sm font-semibold text-amber-800 tracking-tight">
            {step.subtitle}
          </h4>
        )}

        <p className="text-slate-600 text-sm leading-relaxed font-normal">
          {step.description}
        </p>

        {/* Render Metrics Grid if available */}
        {step.metrics && (
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Business Outcomes</div>
            <div className="grid grid-cols-2 gap-3">
              {step.metrics.map((m: any, mIdx: number) => (
                <div key={mIdx} className="p-3 rounded-xl bg-amber-50/40 border border-amber-100 space-y-0.5">
                  <div className="text-base font-black text-slate-900 font-mono tracking-tight">
                    <MetricCounter value={m.value} />
                  </div>
                  <div className="text-[11px] font-medium text-slate-600 leading-tight">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Render Services Delivered if available */}
        {step.services && (
          <div className="space-y-1.5 pt-2">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Services Delivered</div>
            <p className="text-xs text-slate-700 font-medium leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200/60">
              {step.services}
            </p>
          </div>
        )}
      </div>

      {/* Button link view full case study */}
      {step.type === "casestudy" && (
        <div className="pt-2">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 hover:text-amber-800 uppercase tracking-wider group/link transition-colors cursor-pointer"
          >
            <span>View Full Case Study</span>
            <FiArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
      )}

    </motion.div>
  );
}