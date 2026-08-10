

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";

export default function Solution() {
  const containerRef = useRef<HTMLElement | null>(null);
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);

  const isInView = useInView(containerRef, {
    amount: 0.2,
    once: true,
  });

  const [isBgPlaying, setIsBgPlaying] = useState(true);
  const [isBgMuted, setIsBgMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  /* =====================================================
     MOUSE 3D
  ====================================================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 180,
    damping: 28,
  });

  const springY = useSpring(mouseY, {
    stiffness: 180,
    damping: 28,
  });

  const rotateX = useTransform(
    springY,
    [-0.5, 0.5],
    ["1.5deg", "-1.5deg"]
  );

  const rotateY = useTransform(
    springX,
    [-0.5, 0.5],
    ["-1.5deg", "1.5deg"]
  );

  /* =====================================================
     SPOTLIGHT
  ====================================================== */

  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const spotlight = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) =>
      `radial-gradient(
        420px circle at ${x}px ${y}px,
        rgba(234,179,8,0.10),
        transparent 72%
      )`
  );

  /* =====================================================
     VIDEO
  ====================================================== */

  useEffect(() => {
    if (!bgVideoRef.current) return;

    bgVideoRef.current.play().catch(() => {
      setVideoError(true);
      setIsBgPlaying(false);
    });
  }, []);

  const toggleBgPlay = () => {
    if (!bgVideoRef.current) return;

    if (isBgPlaying) {
      bgVideoRef.current.pause();
      setIsBgPlaying(false);
    } else {
      bgVideoRef.current
        .play()
        .then(() => setIsBgPlaying(true))
        .catch(() => {});
    }
  };

  const toggleBgMute = () => {
    if (!bgVideoRef.current) return;

    const nextMuted = !isBgMuted;

    bgVideoRef.current.muted = nextMuted;
    setIsBgMuted(nextMuted);
  };

  /* =====================================================
     MOUSE MOVE
  ====================================================== */

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x / rect.width - 0.5);
    mouseY.set(y / rect.height - 0.5);

    spotlightX.set(x);
    spotlightY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#fcfcfb]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {!videoError && (
        <video
          ref={bgVideoRef}
          autoPlay
          loop
          muted={isBgMuted}
          playsInline
          onError={() => setVideoError(true)}
          className="
            pointer-events-none
            absolute
            inset-0
            h-full
            w-full
            scale-110
            object-cover
            opacity-[0.035]
            blur-[2px]
          "
        />
      )}

      {/* Yellow ambient glow */}

      <motion.div
        animate={{
          x: [0, 35, -25, 0],
          y: [0, -25, 25, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-52
          -top-48
          h-[620px]
          w-[620px]
          rounded-full
          bg-yellow-300/15
          blur-[150px]
        "
      />

      <motion.div
        animate={{
          x: [0, -25, 25, 0],
          y: [0, 20, -25, 0],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-56
          -left-52
          h-[520px]
          w-[520px]
          rounded-full
          bg-amber-200/15
          blur-[140px]
        "
      />

      {/* subtle grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.22]
          [background-image:linear-gradient(to_right,rgba(15,23,42,0.028)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.028)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      {/* =====================================================
          VIDEO CONTROL
      ====================================================== */}

      {!videoError && (
        <div
          className="
            absolute
            bottom-5
            right-5
            z-40
            flex
            items-center
            gap-1
            rounded-full
            border
            border-slate-200
            bg-white/90
            p-1.5
            shadow-[0_10px_30px_rgba(15,23,42,0.08)]
            backdrop-blur-xl
          "
        >
          <span className="hidden px-2 text-[9px] font-black uppercase tracking-[0.16em] text-slate-400 sm:block">
            BG VIDEO
          </span>

          <button
            onClick={toggleBgMute}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-yellow-200
              bg-yellow-50
              text-yellow-700
              transition-all
              hover:bg-yellow-100
            "
            aria-label="Toggle Background Video Mute"
          >
            {isBgMuted ? (
              <VolumeX className="h-3.5 w-3.5" />
            ) : (
              <Volume2 className="h-3.5 w-3.5" />
            )}
          </button>

          <button
            onClick={toggleBgPlay}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-yellow-200
              bg-yellow-50
              text-yellow-700
              transition-all
              hover:bg-yellow-100
            "
            aria-label="Toggle Background Video Play"
          >
            {isBgPlaying ? (
              <Pause className="h-3.5 w-3.5" />
            ) : (
              <Play className="ml-0.5 h-3.5 w-3.5" />
            )}
          </button>
        </div>
      )}

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-6 lg:px-0">
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 35,
                }
          }
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[34px]
            border
            border-slate-200
            bg-white/95
            shadow-[0_35px_100px_rgba(15,23,42,0.075)]
            backdrop-blur-2xl
          "
        >
          {/* =================================================
              MOUSE SPOTLIGHT
          ================================================== */}

          <motion.div
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
            style={{
              background: spotlight,
            }}
          />

          {/* =================================================
              TOP ACCENT
          ================================================== */}

          <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500" />

          {/* =================================================
              DECORATIVE CORNERS
          ================================================== */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-yellow-200/40" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-yellow-200/30" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-yellow-200/30" />

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-[72px]">
      

          
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="
                mx-auto
                mt-7
                max-w-2xl
                text-center
                text-base
                font-medium
                leading-7
                text-slate-600
                sm:text-lg
              "
            >
              At SQL Centrix, every campaign is designed around one objective
            </motion.p>

            {/* =================================================
                CORE STATEMENT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              whileHover={{
                y: -3,
                boxShadow:
                  "0 24px 60px rgba(234,179,8,0.12)",
              }}
              className="
                relative
                mx-auto
                mt-9
                max-w-3xl
                overflow-hidden
                rounded-[26px]
                border
                border-yellow-200
                bg-gradient-to-br
                from-yellow-50
                via-white
                to-amber-50
                px-6
                py-8
                text-center
                shadow-[0_15px_45px_rgba(234,179,8,0.07)]
                transition-shadow
                duration-500
                sm:px-10
                sm:py-10
              "
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-yellow-300/20 blur-[45px]" />

              <div className="pointer-events-none absolute -bottom-16 -left-10 h-28 w-28 rounded-full bg-amber-300/10 blur-[45px]" />
<motion.span
  initial={{ opacity: 0, y: 14 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="
    relative
    block
    w-full
    overflow-hidden
    rounded-[24px]
    border
    border-yellow-400/50
    shadow-[0_20px_60px_rgba(250,204,21,0.12)]
  "
  style={{
    backgroundImage: "url('6.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Dark Overlay */}
  <span
    className="
      absolute
      inset-0
      bg-black/45
    "
  />

  {/* Premium Gradient Overlay */}
  <span
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-black/60
      via-black/30
      to-black/40
    "
  />

  {/* Subtle Yellow Glow */}
  <span
    className="
      absolute
      inset-0
      bg-gradient-to-br
      from-yellow-400/10
      via-transparent
      to-yellow-500/5
    "
  />

  {/* Content */}
  <span
    className="
      relative
      z-10
      flex
      min-h-[125px]
      w-full
      items-center
      justify-center
      px-6
      py-8
      text-center
      text-xl
      font-black
      leading-tight
      tracking-[-0.025em]
      text-white
      drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)]
      sm:text-2xl
      lg:min-h-[145px]
      lg:px-10
      lg:text-[28px]
    "
  >
    Generate Qualified Leads that help your business grow
  </span>

  {/* Premium Accent Line */}
  <motion.span
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.9,
      delay: 0.35,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="
      absolute
      bottom-0
      left-0
      z-20
      h-[4px]
      w-full
      origin-left
      bg-gradient-to-r
      from-yellow-300
      via-yellow-400
      to-transparent
      shadow-[0_0_14px_rgba(250,204,21,0.8)]
    "
  />

  {/* Accent Dot */}
  <motion.span
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.4,
      delay: 0.8,
    }}
    className="
      absolute
      right-3
      top-3
      z-30
      h-2
      w-2
      rounded-full
      bg-yellow-400
      shadow-[0_0_16px_rgba(250,204,21,1)]
    "
  />
</motion.span>
            </motion.div>

            {/* =================================================
                LOWER AREA
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="
                mx-auto
                mt-12
                max-w-3xl
                border-t
                border-slate-200
                pt-10
              "
            >
              <div className="grid gap-9 md:grid-cols-[1fr_auto] md:items-end">
                {/* Headline */}

                <div className="text-center md:text-left">
                  <span
                    className="
                      inline-flex
                      rounded-lg
                      border
                      border-yellow-200
                      bg-yellow-50
                      px-3
                      py-1.5
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.16em]
                      text-yellow-800
                    "
                  >
                    Headline
                  </span>

                  <p className="mt-4 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                    Ready to build a marketing system focused
                  </p>
                </div>

                {/* CTA */}

                <div className="text-center md:text-right">
                

                  <div>
                    <motion.a
  href="#contact"
  whileHover={{
    y: -4,
    scale: 1.02,
  }}
  whileTap={{
    scale: 0.97,
  }}
  className="
    group/btn
    relative
    inline-flex
    w-full
    items-center
    justify-center
    gap-3
    overflow-hidden
    rounded-2xl
    bg-white
    px-7
    py-4
    text-sm
    font-black
    text-slate-950
    shadow-[0_14px_35px_rgba(15,23,42,0.12)]
    transition-all
    duration-300
    border border-yellow-400
    hover:border-yellow-400
    hover:bg-yellow-400
    hover:shadow-[0_18px_42px_rgba(234,179,8,0.28)]
    sm:w-auto
  "
>
  {/* Shine Effect */}
  <span
    className="
      pointer-events-none
      absolute
      inset-y-0
      -left-[120%]
      w-[45%]
      skew-x-[-20deg]
      bg-gradient-to-r
      from-transparent
      via-white/70
      to-transparent
      transition-all
      duration-700
      ease-out
      group-hover/btn:left-[130%]
    "
  />

  {/* Button Content */}
  <span className="relative z-10">
    Book a Free Strategy Call
  </span>

  <span
    className="
      relative
      z-10
      flex
      h-7
      w-7
      items-center
      justify-center
      rounded-sm
      bg-black
      text-white
      transition-all
      duration-300
      group-hover/btn:black
      hover:rounded-xl
    "
  >
    <ArrowRight
      className="
        h-4
        w-4
        transition-transform
        duration-300
        group-hover/btn:translate-x-1
      "
    />
  </span>
</motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              BOTTOM ACCENT
          ================================================== */}

          <div className="absolute bottom-0 left-1/2 h-[3px] w-16 -translate-x-1/2 rounded-t-full bg-yellow-400" />
        </motion.div>
      </div>
    </section>
  );
}