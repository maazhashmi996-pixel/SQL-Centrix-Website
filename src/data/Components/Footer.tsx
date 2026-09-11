"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  HiOutlineSparkles,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
  HiOutlineCheckCircle,
  HiOutlinePaperAirplane,
} from "react-icons/hi";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 180,
    damping: 25,
  });

  const springY = useSpring(mouseY, {
    stiffness: 180,
    damping: 25,
  });

  const rotateX = useTransform(
    springY,
    [-0.5, 0.5],
    ["1deg", "-1deg"]
  );

  const rotateY = useTransform(
    springX,
    [-0.5, 0.5],
    ["-1deg", "1deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(
      (e.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (e.clientY - rect.top) / rect.height - 0.5
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      icon: FaInstagram,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/",
      icon: FaLinkedinIn,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      icon: FaFacebookF,
    },
    {
      name: "Tiktok",
      href: "https://www.tiktok.com/",
      icon: FaTiktok,
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/",
      icon: FaYoutube,
    },
  ];

  return (
    <footer
      ref={containerRef}
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#fffdf8]
        px-6
        pt-28
        pb-8
        text-slate-900
        lg:px-20
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_0%,rgba(250,204,21,0.09),transparent_38%)]
        "
      />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[360px]
          w-[360px]
          rounded-full
          bg-yellow-300/10
          blur-[120px]
        "
      />

      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-amber-200/10
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-30
          [background-image:linear-gradient(rgba(234,179,8,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.035)_1px,transparent_1px)]
          [background-size:60px_60px]
          [mask-image:linear-gradient(to_bottom,black,transparent_85%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className="
            grid
            grid-cols-1
            gap-14
            border-b
            border-slate-200/80
            pb-20
            lg:grid-cols-12
            lg:items-center
            lg:gap-20
          "
        >

          {/* FORM — MOVED TO LEFT */}
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
              x: 60,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7 lg:order-1"
          >
            <form
              onSubmit={handleSubmit}
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-slate-200/80
                bg-white/90
                p-7
                shadow-[0_30px_80px_rgba(15,23,42,0.08)]
                backdrop-blur-2xl
                sm:p-10
                lg:p-11
              "
            >
              <motion.div
                animate={{
                  backgroundPosition: [
                    "0% 50%",
                    "100% 50%",
                    "0% 50%",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-[3px]
                  bg-[linear-gradient(90deg,#f59e0b,#facc15,#eab308,#f59e0b)]
                  bg-[length:200%_100%]
                "
              />

              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-32
                  -top-32
                  h-72
                  w-72
                  rounded-full
                  bg-yellow-300/20
                  blur-[90px]
                "
              />

              <div className="relative z-10">
                <div className="mb-8">
                  <div
                    className="
                      mb-2
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-yellow-600
                    "
                  >
                    Get In Touch
                  </div>

                  <h3
                    className="
                      text-3xl
                      font-black
                      tracking-[-0.03em]
                      text-slate-950
                    "
                  >
                    Form
                  </h3>
                </div>

                {isSubmitted && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -10,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    className="
                      mb-6
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-yellow-200
                      bg-yellow-50
                      p-4
                      text-sm
                      font-semibold
                      text-yellow-900
                    "
                  >
                    <HiOutlineCheckCircle className="h-5 w-5 text-yellow-600" />

                    <span>
                      Thank you! Your message has been received.
                    </span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {[
                    {
                      label: "First Name*",
                      type: "text",
                      required: true,
                    },
                    {
                      label: "Last Name*",
                      type: "text",
                      required: true,
                    },
                    {
                      label: "Email Address*",
                      type: "email",
                      required: true,
                    },
                    {
                      label: "Phone Number*",
                      type: "tel",
                      required: true,
                    },
                    {
                      label: "Organization",
                      type: "text",
                      required: false,
                    },
                    {
                      label: "Purpose*",
                      type: "text",
                      required: true,
                    },
                  ].map((field, index) => (
                    <motion.div
                      key={field.label}
                      initial={{
                        opacity: 0,
                        y: 15,
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
                        duration: 0.45,
                        delay: 0.3 + index * 0.06,
                      }}
                      className="space-y-2"
                    >
                      <label
                        className="
                          block
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-slate-600
                        "
                      >
                        {field.label}
                      </label>

                      <input
                        type={field.type}
                        required={field.required}
                        className="
                          w-full
                          rounded-xl
                          border
                          border-slate-200
                          bg-slate-50/60
                          px-4
                          py-3.5
                          text-sm
                          font-medium
                          text-slate-900
                          outline-none
                          transition-all
                          duration-300
                          hover:border-slate-300
                          focus:border-yellow-400
                          focus:bg-white
                          focus:ring-4
                          focus:ring-yellow-400/10
                          focus:shadow-[0_8px_25px_rgba(234,179,8,0.07)]
                        "
                      />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
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
                    duration: 0.5,
                    delay: 0.7,
                  }}
                  className="mt-5 space-y-2"
                >
                  <label
                    className="
                      block
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-slate-600
                    "
                  >
                    Message
                  </label>

                  <textarea
                    rows={4}
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50/60
                      px-4
                      py-3.5
                      text-sm
                      font-medium
                      text-slate-900
                      outline-none
                      transition-all
                      duration-300
                      hover:border-slate-300
                      focus:border-yellow-400
                      focus:bg-white
                      focus:ring-4
                      focus:ring-yellow-400/10
                      focus:shadow-[0_8px_25px_rgba(234,179,8,0.07)]
                    "
                  />
                </motion.div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="
                    group
                    relative
                    mt-6
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    overflow-hidden
                    rounded-xl
                    border
                    border-yellow-300
                    bg-gradient-to-r
                    from-amber-400
                    via-yellow-400
                    to-amber-500
                    py-4
                    font-bold
                    text-slate-950
                    shadow-[0_10px_30px_rgba(234,179,8,0.18)]
                    transition-shadow
                    duration-300
                    hover:shadow-[0_18px_40px_rgba(234,179,8,0.28)]
                  "
                >
                  {/* shine */}
                  <motion.span
                    animate={{
                      x: ["-130%", "220%"],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      repeatDelay: 2.5,
                    }}
                    className="
                      absolute
                      inset-y-0
                      w-16
                      rotate-12
                      bg-white/30
                      blur-md
                    "
                  />

                  <span className="relative z-10">
                    Submit
                  </span>

                  <motion.span
                    whileHover={{
                      x: 4,
                      y: -3,
                    }}
                    className="relative z-10"
                  >
                    <HiOutlinePaperAirplane
                      className="
                        h-4
                        w-4
                        -rotate-45
                      "
                    />
                  </motion.span>
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* CONTACT INFO — MOVED TO RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5 lg:order-2"
          >
            <div className="space-y-8">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
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
                  delay: 0.15,
                }}
                className="
                  relative
                  inline-flex
                  items-center
                  gap-2.5
                  overflow-hidden
                  rounded-full
                  border
                  border-yellow-300/60
                  bg-white/80
                  px-4
                  py-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-yellow-800
                  shadow-[0_8px_30px_rgba(234,179,8,0.08)]
                  backdrop-blur-xl
                "
              >
                <motion.span
                  animate={{
                    x: ["-120%", "220%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="
                    absolute
                    inset-y-0
                    w-12
                    rotate-12
                    bg-white/50
                    blur-md
                  "
                />

              

                <span className="relative">
                  SEND US A MESSAGE
                </span>
              </motion.div>

              <motion.div
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
                  duration: 0.7,
                  delay: 0.25,
                }}
              >
                <h2
                  className="
                    text-5xl
                    font-black
                    leading-[0.95]
                    tracking-[-0.055em]
                    text-slate-950
                    sm:text-6xl
                    lg:text-[68px]
                  "
                >
                  Contact
                </h2>

                <div className="mt-6 flex items-center gap-3">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={
                      isInView
                        ? { width: 52 }
                        : {}
                    }
                    transition={{
                      duration: 0.8,
                      delay: 0.55,
                    }}
                    className="
                      block
                      h-[4px]
                      rounded-full
                      bg-yellow-400
                    "
                  />

                  <span className="h-[4px] w-3 rounded-full bg-yellow-200" />
                  <span className="h-[4px] w-1.5 rounded-full bg-yellow-100" />
                </div>

                <p
                  className="
                    mt-6
                    max-w-xl
                    text-[15px]
                    leading-7
                    text-slate-600
                    sm:text-base
                  "
                >
                  Fill out the form below, and our team will get in touch with
                  you shortly to discuss your requirements and the best way to
                  help your business grow.
                </p>
              </motion.div>

              <div className="space-y-3">
                {[
                  {
                    icon: HiOutlineOfficeBuilding,
                    title: "Company Entity",
                    value: "SQL Centrix Pvt. Ltd.",
                  },
                  {
                    icon: HiOutlinePhone,
                    title: "Direct Phone",
                    value: "+92 320 6495098",
                  },
                  {
                    icon: HiOutlineLocationMarker,
                    title: "Office Headquarters",
                    value:
                      "House# 4, Ittehad Colony Allama Iqbal Town, Lahore, 54000",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: -25,
                    }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.55,
                      delay: 0.35 + index * 0.1,
                    }}
                    whileHover={{
                      x: 5,
                    }}
                    className="
                      group
                      relative
                      flex
                      items-start
                      gap-4
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200/80
                      bg-white/70
                      p-4
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-yellow-300/70
                      hover:bg-white
                      hover:shadow-[0_15px_40px_rgba(234,179,8,0.10)]
                    "
                  >
                    <div
                      className="
                        absolute
                        -right-10
                        -top-10
                        h-24
                        w-24
                        rounded-full
                        bg-yellow-300/10
                        blur-2xl
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />

                    <motion.div
                      whileHover={{
                        rotate: 6,
                        scale: 1.08,
                      }}
                      className="
                        relative
                        z-10
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-yellow-200
                        bg-yellow-50
                        text-yellow-600
                        shadow-sm
                      "
                    >
                      <item.icon className="h-5 w-5" />
                    </motion.div>

                    <div className="relative z-10 pt-0.5">
                      <div
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-slate-400
                        "
                      >
                        {item.title}
                      </div>

                      <div
                        className="
                          mt-1
                          text-sm
                          font-bold
                          leading-6
                          text-slate-900
                        "
                      >
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
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
                  delay: 0.8,
                }}
              >
                <div
                  className="
                    mb-3
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-slate-400
                  "
                >
                  Social Links
                </div>

                <div className="flex flex-wrap gap-2">
                  {socials.map((social, index) => {
                    const Icon = social.icon;

                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        initial={{
                          opacity: 0,
                          scale: 0.85,
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
                          duration: 0.4,
                          delay: 0.85 + index * 0.06,
                        }}
                        whileHover={{
                          y: -4,
                          scale: 1.04,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        className="
                          group
                          inline-flex
                          items-center
                          gap-2
                          rounded-xl
                          border
                          border-slate-200
                          bg-white
                          px-3.5
                          py-2.5
                          text-[11px]
                          font-bold
                          text-slate-600
                          shadow-[0_5px_18px_rgba(15,23,42,0.04)]
                          transition-all
                          duration-300
                          hover:border-yellow-300
                          hover:bg-yellow-400
                          hover:text-slate-950
                          hover:shadow-[0_12px_25px_rgba(234,179,8,0.20)]
                        "
                      >
                        <Icon
                          className="
                            h-3.5
                            w-3.5
                            text-yellow-600
                            transition-all
                            duration-300
                            group-hover:rotate-6
                            group-hover:text-slate-950
                          "
                        />

                        <span>{social.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
            delay: 1,
          }}
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            pt-7
            text-center
            sm:flex-row
            sm:text-left
          "
        >
          <p className="text-xs font-medium text-slate-400">
            © {new Date().getFullYear()} SQL Centrix Pvt. Ltd. All rights reserved.
          </p>

          <div
            className="
              flex
              items-center
              gap-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-slate-400
            "
          >
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-yellow-400
              "
            />

            Premium Digital Solutions
          </div>
        </motion.div>

      </div>
    </footer>
  );
}