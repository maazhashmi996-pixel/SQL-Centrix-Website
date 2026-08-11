






"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* =========================================
          BACKGROUND VIDEO
      ========================================= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="mixkit-brainstorming-over-the-meeting-table-46680-hd-ready.mp4"
          type="video/mp4"
        />
      </video>

      {/* =========================================
          CINEMATIC BLACK GRADIENT
      ========================================= */}
      <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.28)_98%,rgba(0,0,0,0.12)_70%,rgba(0,0,0,0)_100%)]" />

      {/* =========================================
          SOFTER SIDE GRADIENT
      ========================================= */}
     <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.22)_0%,transparent_45%,rgba(0,0,0,0.22)_100%)]" />
      {/* =========================================
          YELLOW CINEMATIC GLOW
      ========================================= */}
      <motion.div
        animate={{
          opacity: [0.18, 0.3, 0.18],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-[140px]"
      />

      {/* =========================================
          SOFT VIGNETTE
      ========================================= */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.72)_100%)]" />

      {/* =========================================
          CONTENT
      ========================================= */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">

          {/* =====================================
              HEADING
          ===================================== */}
          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px]"
          >
            Nothing But{" "}
            <span className="relative inline-block text-yellow-300">
              Sales Qualified Leads.

              {/* Animated Underline */}
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "62%" }}
                transition={{
                  duration: 1,
                  delay: 1,
                  ease: "easeOut",
                }}
                className="absolute -bottom-2 left-0 h-[4px] rounded-full bg-yellow-300/80 shadow-[0_0_20px_rgba(253,224,71,0.55)] sm:-bottom-3"
              />
            </span>
          </motion.h1>

          {/* =====================================
              SUB HEADING
          ===================================== */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="mt-8 text-lg font-bold tracking-tight text-white sm:text-xl md:text-2xl"
          >
            Sub Heading
          </motion.h2>

          {/* =====================================
              DESCRIPTION
          ===================================== */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="mt-6 max-w-4xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8 md:text-lg"
          >
            At{" "}
            <span className="font-bold text-white">
              SQL Centrix
            </span>
            , every strategy, campaign, website, advertisement, and piece of
            content has one objective: Bringing your business,
            <span className="font-semibold text-yellow-300">
              {" "}qualified opportunities that convert into revenue.
            </span>
          </motion.p>

          {/* =====================================
              RESULT STATEMENTS
          ===================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="mt-9 space-y-3"
          >
            <p className="text-lg font-medium tracking-tight text-white sm:text-xl md:text-2xl">
              Marketing is the process. SQL’s are the results.
            </p>

            <p className="text-base text-white/65 sm:text-lg md:text-xl">
              At SQL Centrix the results are our starting point.
            </p>
          </motion.div>

          {/* =====================================
              CTA
          ===================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.55,
              ease: "easeOut",
            }}
            className="mt-10"
          >

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.04,
                y: -4,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-yellow-300/50 bg-white px-7 py-4 text-sm font-black text-black shadow-[0_15px_50px_rgba(250,204,21,0.22)] transition-all duration-300 hover:bg-yellow-400 hover:text-white sm:px-9 sm:py-4.5 sm:text-base"
            >
              {/* Button Shine */}
              <span className="absolute inset-y-0 -left-[120%] w-[45%] skew-x-[-20deg] bg-white/50 transition-all duration-700 group-hover:left-[130%]" />

              <span className="relative z-10">
                Get Your Free Growth Strategy
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          BOTTOM CINEMATIC LINE
      ========================================= */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.8,
          ease: "easeOut",
        }}
        className="absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 origin-center bg-gradient-to-r from-transparent via-yellow-300/70 to-transparent"
      />

    </section>
  );
}