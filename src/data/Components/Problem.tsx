


"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  XCircle,
  AlertTriangle,
  Activity,
  ArrowUpRight,
} from "lucide-react";

const problems = [
  "Brand awareness is important",
  "Beautiful websites are important",
  "SEO is important",
  "Advertising is important",
  "Social media is important",
  "Content is important",
];

export default function Problem() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="problem"
      className="relative min-h-screen overflow-hidden bg-white py-24 md:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Soft yellow glow */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            x: [0, 40, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[45%] top-[15%] h-[600px] w-[600px] rounded-full bg-yellow-200/20 blur-[150px]"
        />

        {/* Side glow */}
        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-amber-100/40 blur-[130px]" />

        {/* Subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.25]
            [background-image:linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-6 lg:px-0">

        {/* ===================================================
            TOP
        =================================================== */}

        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

           

            {/* Heading */}

            <h2 className="max-w-xl text-5xl font-black leading-[0.92] tracking-[-0.06em] text-slate-950 sm:text-6xl md:text-7xl">

              The
              <span className="relative pl-3 inline-block text-yellow-500">
                Problem
                <span className="absolute -bottom-2   left-0 h-1.5 w-16 rounded-full bg-yellow-400" />
              </span>
            </h2>

           
          </motion.div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto flex aspect-square w-full max-w-[560px] items-center justify-center"
          >
            {/* Outer circle */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[7%] rounded-full border border-dashed border-yellow-300/60"
            />

            {/* Second circle */}

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[18%] rounded-full border border-slate-200"
            />

            {/* Yellow orbit dots */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[7%]"
            >
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.8)]" />
            </motion.div>

            {/* Center */}

            <motion.div
              animate={{
                boxShadow: [
                  "0 20px 60px rgba(250,204,21,0.12)",
                  "0 25px 90px rgba(250,204,21,0.25)",
                  "0 20px 60px rgba(250,204,21,0.12)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-20
                flex
                h-40
                w-40
                flex-col
                items-center
                justify-center
                rounded-full
                border
                border-yellow-200
                bg-white
                text-center
                sm:h-48
                sm:w-48
              "
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
              </div>

              <span className="text-[9px] font-black uppercase tracking-[0.22em] text-slate-400">
                The real issue
              </span>

              <span className="mt-1 text-sm font-black text-slate-950">
                No Business
              </span>

              <div className="mt-3 h-1 w-8 rounded-full bg-yellow-400" />
            </motion.div>

            {/* Problem Nodes */}

            {problems.map((item, idx) => {
              const positions = [
                "left-[7%] top-[18%]",
                "right-[3%] top-[20%]",
                "right-[-1%] top-[53%]",
                "right-[12%] bottom-[7%]",
                "left-[12%] bottom-[7%]",
                "left-[-1%] top-[53%]",
              ];

              const isHovered = hoveredIdx === idx;

              return (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.35 + idx * 0.08,
                  }}
                  onHoverStart={() => setHoveredIdx(idx)}
                  onHoverEnd={() => setHoveredIdx(null)}
                  whileHover={{
                    scale: 1.06,
                  }}
                  className={`absolute ${positions[idx]} z-30`}
                >
                  <div
                    className={`
                      relative
                      flex
                      max-w-[170px]
                      items-center
                      gap-2.5
                      rounded-2xl
                      border
                      bg-white
                      px-3
                      py-2.5
                      shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                      transition-all
                      duration-300
                      sm:max-w-[190px]
                      ${
                        isHovered
                          ? "border-yellow-300 shadow-[0_15px_40px_rgba(234,179,8,0.18)]"
                          : "border-slate-200"
                      }
                    `}
                  >
                    <div
                      className={`
                        flex
                        h-8
                        w-8
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        transition-all
                        ${
                          isHovered
                            ? "bg-rose-50"
                            : "bg-slate-50"
                        }
                      `}
                    >
                      <XCircle
                        className={`h-4 w-4 ${
                          isHovered
                            ? "text-rose-500"
                            : "text-slate-400"
                        }`}
                      />
                    </div>

                    <span className="text-[10px] font-bold leading-4 text-slate-700 sm:text-[11px]">
                      {item}
                    </span>

                    {isHovered && (
                      <motion.div
                        layoutId="active-dot"
                        className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]"
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ===================================================
            FINAL MESSAGE
        =================================================== */}

     <motion.div
  initial={{
    opacity: 0,
    y: 35,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
  }}
  transition={{
    duration: 0.8,
    delay: 0.2,
  }}
  className="
    relative
    mt-20
    overflow-hidden
    rounded-[30px]
    border
    border-yellow-500/40
    p-27
    shadow-[0_30px_80px_rgba(15,23,42,0.18)]
    md:mt-24
    md:p-10
  "
>
  {/* =========================================
      BUSINESS MEETING BACKGROUND IMAGE
  ========================================= */}

  <img
    src="6.webp"
    alt="Business meeting"
    className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
    "
  />

  {/* =========================================
      BLACK + YELLOW GRADIENT OVERLAY
  ========================================= */}

  <div
    className="
      absolute
      inset-0
    bg-[linear-gradient(135deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.68)_50%,rgba(0,0,0,0.78)_100%)]
    "
  />

  {/* =========================================
      SOFT YELLOW GLOW
  ========================================= */}

  <motion.div
    animate={{
      opacity: [0.15, 0.3, 0.15],
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      pointer-events-none
      absolute
      -right-20
      -top-20
      h-64
      w-64
      rounded-full
      bg-yellow-400
      blur-[100px]
    "
  />

  {/* =========================================
      CONTENT
  ========================================= */}

  <div className="relative z-10 flex items-center justify-center">
    <span
      className="
        max-w-2xl
        text-center
        text-base
        font-black
        leading-7
        text-white
        drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]
        md:text-xl
      "
    >
      But none of them matter if they don't generate business.
    </span>
  </div>

  {/* =========================================
      BOTTOM ACCENT
  ========================================= */}

  <motion.div
    initial={{
      width: 0,
    }}
    whileInView={{
      width: "100%",
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: 1,
      delay: 0.5,
      ease: "easeOut",
    }}
    className="
      absolute
      bottom-0
      left-0
      h-[3px]
      bg-gradient-to-r
      from-transparent
      via-yellow-500
      to-transparent
    "
  />
</motion.div>
       
             </div>
    </section>
  );
}