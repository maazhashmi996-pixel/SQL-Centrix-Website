"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function Conclusion() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 text-slate-950 sm:px-8 lg:px-12">

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -25, 20, 0],
            scale: [1, 1.08, 0.98, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            -top-40
            h-[520px]
            w-[520px]
            rounded-full
            bg-yellow-300/20
            blur-[130px]
          "
        />

        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 20, -15, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-52
            -left-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-amber-200/20
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[850px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-yellow-100/30
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.45]
            bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)]
            bg-[size:5rem_5rem]
          "
        />
      </div>


      <div className="relative z-10 mx-auto max-w-6xl">







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
  className="mb-16"
>
  {/* Label */}
  <div className="mb-7 flex items-center gap-3">
    <motion.span
      initial={{ width: 0 }}
      whileInView={{ width: 45 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.2,
      }}
      className="h-[2px] rounded-full bg-yellow-500"
    />

    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-950 sm:text-xs">
      Conclusion
    </span>
  </div>

  {/* Heading */}
  <h2
    className="
      max-w-5xl
      text-5xl
      font-black
      leading-[0.92]
      tracking-[-0.065em]
      text-slate-950
      sm:text-6xl
      lg:text-8xl
    "
  >
    <span className="block text-slate-950">
      Stop Chasing
    </span>

    <span className="relative mt-2 pb-3 inline-block text-yellow-400 sm:mt-3">
      Marketing
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: "easeOut",
        }}
        className="
          absolute
          -bottom-2
          left-0
          h-[5px]
          rounded-full
          bg-yellow-300
          sm:-bottom-3
        "
      />
    </span>

    <span className="ml-3 text-yellow-400 sm:ml-4">
      Strategies
    </span>
  </h2>
</motion.div>






        <motion.div
          initial={{
            opacity: 0,
            y: 45,
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
            duration: 0.9,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-slate-200
            bg-white/90
            p-7
            shadow-[0_25px_80px_rgba(15,23,42,0.08)]
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-yellow-300
            hover:shadow-[0_30px_90px_rgba(234,179,8,0.12)]
            sm:p-10
            lg:p-14
          "
        >

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-80
              w-80
              rounded-full
              bg-yellow-300/15
              blur-[100px]
              transition-transform
              duration-1000
              group-hover:scale-125
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-20
              h-64
              w-64
              rounded-full
              bg-amber-200/20
              blur-[90px]
            "
          />


          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-[3px]
              bg-gradient-to-r
              from-transparent
              via-yellow-400
              to-transparent
            "
          />


          <div className="relative z-10 max-w-4xl">


            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mb-6 flex items-start gap-4"
            >
              

              <h3
                className="
                  text-2xl
                  font-black
                  leading-tight
                  tracking-[-0.035em]
                  text-slate-950
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Start Building a Marketing System
              </h3>
            </motion.div>


            <p
              className="
                max-w-3xl
                text-base
                leading-7
                text-slate-600
                sm:text-lg
                sm:leading-8
              "
            >
              At SQL Centrix, we don't believe businesses need more marketing
              for the sake of marketing.
            </p>


            <p
              className="
                mt-5
                max-w-3xl
                text-base
                leading-7
                text-slate-600
                sm:text-lg
                sm:leading-8
              "
            >
              They need predictable systems that generate qualified
              opportunities, accelerate growth, and drive measurable business
              results.
            </p>


            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="
                relative
                mt-9
                overflow-hidden
                rounded-2xl
                border
                border-yellow-200
                bg-gradient-to-r
                from-yellow-50
                via-white
                to-yellow-50/50
                p-5
                shadow-[0_12px_35px_rgba(234,179,8,0.06)]
                sm:p-6
              "
            >

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  top-0
                  w-[3px]
                  bg-gradient-to-b
                  from-yellow-300
                  via-yellow-500
                  to-yellow-300
                "
              />

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-slate-950">
                  <CheckCircle2 className="h-4 w-4" />
                </div>

                <p
                  className="
                    text-lg
                    font-black
                    leading-7
                    tracking-tight
                    text-slate-950
                    sm:text-xl
                    lg:text-2xl
                  "
                >
                  Let's Build a Growth System That Delivers Sales Qualified
                  Leads
                </p>
              </div>
            </motion.div>


            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="mt-9"
            >
              

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
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-2xl
                  border
                  border-yellow-400
                  bg-white
                  px-7
                  py-4
                  text-sm
                  font-black
                  text-slate-950
                  shadow-[0_15px_40px_rgba(15,23,42,0.08)]
                  transition-all
                  duration-300
                  hover:bg-yellow-400
                  hover:text-white
                  hover:shadow-[0_20px_50px_rgba(234,179,8,0.25)]
                "
              >

                <span
                  className="
                    absolute
                    inset-y-0
                    -left-[120%]
                    w-1/3
                    skew-x-[-20deg]
                    bg-white/60
                    transition-all
                    duration-700
                    group-hover/btn:left-[130%]
                  "
                />

                <span className="relative z-10">
                  Let's Build a Growth System
                </span>

                <span
                  className="
                    relative
                    z-10
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-950
                    text-white
                    transition-transform
                    duration-300
                    group-hover/btn:translate-x-1
                  "
                >
                  <ArrowRight className="h-4 w-4" />
                </span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>


        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="
            mt-14
            h-px
            origin-left
            bg-gradient-to-r
            from-yellow-400
            via-slate-200
            to-transparent
          "
        />
      </div>
    </section>
  );
}