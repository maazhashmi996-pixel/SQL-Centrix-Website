"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
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
      className="relative min-h-screen overflow-hidden bg-white py-20 sm:py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
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

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-amber-100/40 blur-[130px]" />

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

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-6 lg:px-0">
        <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h2
              className="
                max-w-xl
                text-5xl
                font-black
                leading-[0.92]
                tracking-[-0.06em]
                text-slate-950
                sm:text-6xl
                md:text-7xl
              "
            >
              The
              <span className="relative inline-block pl-3 text-yellow-500">
                Problem
                <span className="absolute -bottom-2 left-0 h-1.5 w-16 rounded-full bg-yellow-400" />
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              mx-auto
              flex
              aspect-square
              w-full
              max-w-[560px]
              items-center
              justify-center
              overflow-visible
            "
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[7%] rounded-full border border-dashed border-yellow-300/60"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[18%] rounded-full border border-slate-200"
            />

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
                h-32
                w-32
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
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-100 sm:mb-3 sm:h-10 sm:w-10">
                <AlertTriangle className="h-4 w-4 text-yellow-600 sm:h-5 sm:w-5" />
              </div>

              <span className="text-[8px] font-black uppercase tracking-[0.18em] text-slate-400 sm:text-[9px] sm:tracking-[0.22em]">
                The real issue
              </span>

              <span className="mt-1 text-xs font-black text-slate-950 sm:text-sm">
                No Business
              </span>

              <div className="mt-2 h-1 w-7 rounded-full bg-yellow-400 sm:mt-3 sm:w-8" />
            </motion.div>

            {problems.map((item, idx) => {
              const positions = [
                "left-[0%] top-[14%] sm:left-[7%] sm:top-[18%]",
                "right-[0%] top-[16%] sm:right-[3%] sm:top-[20%]",
                "right-[-4%] top-[51%] sm:right-[-1%] sm:top-[53%]",
                "right-[5%] bottom-[3%] sm:right-[12%] sm:bottom-[7%]",
                "left-[5%] bottom-[3%] sm:left-[12%] sm:bottom-[7%]",
                "left-[-4%] top-[51%] sm:left-[-1%] sm:top-[53%]",
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
                      max-w-[135px]
                      items-center
                      gap-2
                      rounded-2xl
                      border
                      bg-white
                      px-2.5
                      py-2
                      shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                      transition-all
                      duration-300
                      sm:max-w-[190px]
                      sm:gap-2.5
                      sm:px-3
                      sm:py-2.5
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
                        h-7
                        w-7
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        transition-all
                        sm:h-8
                        sm:w-8
                        ${
                          isHovered
                            ? "bg-emerald-50"
                            : "bg-slate-50"
                        }
                      `}
                    >
                      <CheckCircle2
                        className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
                          isHovered
                            ? "text-emerald-500"
                            : "text-slate-400"
                        }`}
                      />
                    </div>

                    <span className="text-[9px] font-bold leading-3.5 text-slate-700 sm:text-[11px] sm:leading-4">
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
            mt-16
            overflow-hidden
            rounded-[30px]
            border
            border-yellow-500/40
            p-6
            shadow-[0_30px_80px_rgba(15,23,42,0.18)]
            sm:mt-20
            sm:p-8
            md:mt-24
            md:p-10
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-black
            "
          />

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

          <div className="relative z-10 flex items-center justify-center">
            <span
              className="
                max-w-2xl
                text-center
                text-sm
                font-black
                leading-6
                text-white
                drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]
                sm:text-base
                sm:leading-7
                md:text-xl
              "
            >
              But none of them matter if they don't generate business. !
            </span>
          </div>

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