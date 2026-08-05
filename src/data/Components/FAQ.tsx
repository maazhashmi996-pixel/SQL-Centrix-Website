"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We analyze your brand, target audience, and competitors to build a custom roadmap.",
  },
  {
    step: "02",
    title: "Execution & Setup",
    description: "Our experts set up high-converting marketing funnels, campaigns, and tracking systems.",
  },
  {
    step: "03",
    title: "Optimization & Scaling",
    description: "We continuously test creatives, audiences, and bids to maximize your ROAS.",
  },
  {
    step: "04",
    title: "Reporting & Growth",
    description: "Receive transparent, data-driven performance reports and scale your revenue aggressively.",
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.4", "end 0.8"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white border-b border-purple-100/80"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md">
            Our Strategy
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Performance Systems & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800">Marketing Process</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Our team of digital growth experts follow a strategic framework to deliver measurable results and scale revenue. Explore our insights and <a href="/blogs" className="text-purple-600 font-semibold underline hover:text-purple-800 transition-colors">blogs</a> for more details.
          </p>
        </div>

        {/* Snake Layout Wrapper */}
        <div className="relative max-w-6xl mx-auto py-8">
          {/* Desktop Curved Path SVG Line */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 1000 1230"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Base Light-Gray Snake Line */}
            <path
              d="M 600 120 
                 C 600 240, 400 240, 400 420 
                 C 400 600, 600 600, 600 780 
                 C 600 960, 400 960, 400 1140"
              stroke="#E9D5FF"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Scroll-Driven Animated Purple/Indigo Gradient Line */}
            <motion.path
              d="M 600 120 
                 C 600 240, 400 240, 400 420 
                 C 400 600, 600 600, 600 780 
                 C 600 960, 400 960, 400 1140"
              stroke="url(#purpleGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
          </svg>

          {/* Process Steps */}
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
                    {isNodeOnRight && <ProcessCard step={step} />}
                  </div>

                  {/* Numbered Node Badge */}
                  <div
                    className={`my-6 md:my-0 md:absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 ${
                      isNodeOnRight ? "md:left-[60%]" : "md:left-[40%]"
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-purple-500 p-1 shadow-lg shadow-purple-500/20 flex items-center justify-center">
                      <div className="w-full h-full rounded-full border border-purple-200 flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 font-black text-purple-700 text-lg">
                        {step.step}
                      </div>
                    </div>
                  </div>

                  {/* Right Slot */}
                  <div className="w-full md:w-[45%] flex justify-start pl-0 md:pl-10">
                    {!isNodeOnRight && <ProcessCard step={step} />}
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

// Card Sub-component with opacity and slight vertical shift on scroll
function ProcessCard({
  step,
}: {
  step: { step: string; title: string; description: string };
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(cardRef, {
    margin: "-30% 0px -30% 0px",
  });

  return (
    <motion.div
      ref={cardRef}
      animate={{
        opacity: isInView ? 1 : 0.2,
        y: isInView ? 0 : 20,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full max-w-md bg-white/90 rounded-3xl p-8 shadow-[0_15px_30px_-10px_rgba(147,51,234,0.08)] border border-purple-100 backdrop-blur-xl relative overflow-hidden group hover:border-purple-300 transition-all duration-300"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-80" />
      <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors mb-3 tracking-tight">
        {step.title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}