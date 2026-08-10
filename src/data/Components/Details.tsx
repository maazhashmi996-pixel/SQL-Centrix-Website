"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  Megaphone,
  Globe2,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

/* =====================================================
   COUNTER
===================================================== */

interface CountUpProps {
  value: string | number;
}

function CountUp({ value }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = Number(value);
    const duration = 1800;
    const pause = 1200;

    let animationFrame: number;
    let pauseTimeout: ReturnType<typeof setTimeout>;

    const animate = () => {
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        const eased = 1 - Math.pow(1 - progress, 3);

        setCount(Math.floor(end * eased));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCounter);
        } else {
          setCount(end);

          pauseTimeout = setTimeout(() => {
            setCount(0);

            pauseTimeout = setTimeout(() => {
              animate();
            }, 250);
          }, pause);
        }
      };

      animationFrame = requestAnimationFrame(updateCounter);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(pauseTimeout);
    };
  }, [value]);

  return <>{count}+</>;
}

/* =====================================================
   DETAILS
===================================================== */

export default function Details() {
  const stats = [
    {
      icon: BriefcaseBusiness,
      label: "Combined Years of Experience",
      value: "10",
      description: "Years of expertise",
    },
    {
      icon: Building2,
      label: "Industries We Served",
      value: "25",
      description: "From Fintech to Real Estate",
    },
    {
      icon: Megaphone,
      label: "Marketing Channels Managed",
      value: "10",
      description:
        "TikTok, YouTube, Meta, Google, LinkedIn, Reddit & more",
    },
    {
      icon: Globe2,
      label: "Businesses Worked With",
      value: "50",
      description:
        "Pakistan, UAE, Saudi Arabia, UK & USA",
    },
    {
      icon: Rocket,
      label: "Campaigns Launched",
      value: "500",
      description:
        "Performance-driven campaigns delivered",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-950
        py-24
        sm:py-28
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[url('/6.webp')]
          bg-cover
          bg-center
          bg-no-repeat
        "
      />

      {/* =====================================================
          BLACK PREMIUM GRADIENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-black/90
          via-black/60
          to-black/20
        "
      />

      {/* =====================================================
          SECOND BLACK DEPTH
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-black/70
          via-black/20
          to-black/50
        "
      />

      {/* =====================================================
          YELLOW BOTTOM GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-48
          bg-gradient-to-t
          from-yellow-400/10
          via-transparent
          to-transparent
        "
      />

      {/* =====================================================
          AMBIENT YELLOW LIGHT
      ===================================================== */}

      <motion.div
        animate={{
          x: [0, 50, -25, 0],
          y: [0, -25, 20, 0],
          scale: [1, 1.1, 0.96, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-yellow-400/10
          blur-[130px]
        "
      />

      <motion.div
        animate={{
          x: [0, -40, 25, 0],
          y: [0, 20, -15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-yellow-300/10
          blur-[130px]
        "
      />

      {/* =====================================================
          SUBTLE GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.12]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:5rem_5rem]
        "
      />

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mb-14
            flex
            flex-col
            items-center
            text-center
          "
        >
          {/* Label */}

          <div className="mb-5 flex items-center gap-3">
            <span
              className="
                h-[2px]
                w-10
                rounded-full
                bg-yellow-400
              "
            />

            <span
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.3em]
                text-yellow-300
                sm:text-xs
              "
            >
              SQL Centrix
            </span>

            <span
              className="
                h-[2px]
                w-10
                rounded-full
                bg-yellow-400
              "
            />
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              font-black
              tracking-[-0.055em]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Who We Are
          </h2>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-white/65
              sm:text-base
            "
          >
            Experience, reach and performance that help
            businesses turn marketing into measurable growth.
          </p>

          {/* Animated Line */}

          <div
            className="
              relative
              mt-6
              h-1
              w-24
              overflow-hidden
              rounded-full
              bg-white/10
            "
          >
            <motion.div
              initial={{
                x: "-100%",
              }}
              whileInView={{
                x: "0%",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-yellow-400
                via-amber-300
                to-yellow-400
              "
            />
          </div>
        </motion.div>

        {/* =====================================================
            COUNTERS
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
          "
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-white/20
                  bg-white/[0.08]
                  p-5
                  shadow-[0_20px_60px_rgba(0,0,0,0.20)]
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:border-yellow-300/50
                  hover:bg-white/[0.14]
                  hover:shadow-[0_25px_70px_rgba(234,179,8,0.20)]
                "
              >
                {/* =================================================
                    CARD INNER SHINE
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/[0.08]
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* =================================================
                    CARD GLOW
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-yellow-300/10
                    blur-[55px]
                    transition-all
                    duration-700
                    group-hover:scale-150
                    group-hover:bg-yellow-300/25
                  "
                />

                {/* Number */}

                <span
                  className="
                    absolute
                    right-4
                    top-4
                    text-[10px]
                    font-black
                    tracking-[0.2em]
                    text-white/25
                    transition-colors
                    group-hover:text-yellow-300
                  "
                >
                  0{index + 1}
                </span>

                {/* =================================================
                    ICON
                ================================================= */}

                <div
                  className="
                    relative
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-yellow-300/30
                    bg-yellow-400/10
                    text-yellow-300
                    shadow-[0_0_25px_rgba(250,204,21,0.08)]
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:border-yellow-300
                    group-hover:bg-yellow-400
                    group-hover:text-slate-950
                    group-hover:shadow-[0_0_30px_rgba(250,204,21,0.30)]
                  "
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="relative mt-7">
                  {/* Label */}

                  <p
                    className="
                      min-h-[48px]
                      text-xs
                      font-bold
                      leading-5
                      text-white/85
                    "
                  >
                    {item.label}
                  </p>

                  {/* Counter */}

                  <div className="mt-3 flex items-end">
                    <motion.span
                      className="
                        text-4xl
                        font-black
                        tracking-[-0.07em]
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-yellow-300
                        sm:text-5xl
                      "
                    >
                      <CountUp value={item.value} />
                    </motion.span>
                  </div>

                  {/* Description */}

                  <p
                    className="
                      mt-3
                      min-h-[66px]
                      text-[11px]
                      leading-5
                      text-white/55
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* =================================================
                    ARROW
                ================================================= */}

                <div
                  className="
                    absolute
                    bottom-4
                    right-4
                    flex
                    h-7
                    w-7
                    translate-y-2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/10
                    text-white/50
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    group-hover:border-yellow-300
                    group-hover:bg-yellow-400
                    group-hover:text-slate-950
                  "
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>

                {/* =================================================
                    BOTTOM YELLOW ACCENT
                ================================================= */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-0
                    bg-gradient-to-r
                    from-yellow-400
                    via-amber-300
                    to-yellow-400
                    shadow-[0_0_15px_rgba(250,204,21,0.45)]
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}