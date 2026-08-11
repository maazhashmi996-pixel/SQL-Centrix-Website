"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#problem" },
    { name: "Blogs", href: "#case-studies" },
  ];

  const serviceLinks = [
    {
      name: "Digital Authority",
      href: "/services/digital-authority",
      desc: "Build trust before the lead",
    },
    {
      name: "Customer Acquisition",
      href: "/services/customer-acquisition",
      desc: "Reach the people most likely to buy",
    },
    {
      name: "Conversion Systems",
      href: "/services/conversion-systems",
      desc: "Turn interest into sales opportunities",
    },
    {
      name: "Revenue Operations",
      href: "/services/revenue-operations",
      desc: "Turn qualified opportunities into revenue",
    },
    {
      name: "Customer Success & Retention",
      href: "/services/customer-success",
      desc: "Turn customers into long-term revenue",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white transition-all duration-500">
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      <div
        className={`relative mx-auto flex w-full max-w-[1180px] items-center justify-between transition-all duration-500 ${
          scrolled ? "h-[72px]" : "h-[88px]"
        }`}
      >
        {/* LOGO */}
        <motion.a
          href="#"
          whileHover={{ y: -1 }}
          className="group flex items-center gap-3.5"
        >
          <div className="flex h-[72px] w-[158px] items-center justify-center overflow-hidden bg-white">
            <img
              src="/logo2.jpg"
              alt="SQL Centrix Logo"
              className="h-29 w-[167px] mr-9 bg-transparent"
            />
          </div>
        </motion.a>

        {/* DESKTOP NAV */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ y: -1 }}
              className="group relative rounded-xl px-4 py-2.5 text-[13px] font-semibold text-slate-600 transition-all duration-300 hover:bg-yellow-50 hover:text-slate-950"
            >
              <span>{item.name}</span>

              <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-5" />
            </motion.a>
          ))}

          {/* SERVICES */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <motion.button
              whileHover={{ y: -1 }}
              onClick={() =>
                setServicesDropdownOpen((prev) => !prev)
              }
              className="group relative flex items-center gap-1 rounded-xl px-4 py-2.5 text-[13px] font-semibold text-slate-600 transition-all duration-300 hover:bg-yellow-50 hover:text-slate-950"
            >
              <span>Services</span>

              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  servicesDropdownOpen
                    ? "rotate-180 text-slate-950"
                    : "text-slate-400"
                }`}
              />

              <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-5" />
            </motion.button>

            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                    scale: 0.98,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full mt-2 w-80 -translate-x-1/2 rounded-2xl border border-yellow-200 bg-white p-2 shadow-[0_15px_35px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex flex-col gap-1">
                    {serviceLinks.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        onClick={() =>
                          setServicesDropdownOpen(false)
                        }
                        className="group flex flex-col rounded-xl px-3.5 py-2.5 transition-all hover:bg-yellow-50"
                      >
                        <span className="text-xs font-bold text-slate-800 transition-colors group-hover:text-slate-950">
                          {service.name}
                        </span>

                        <span className="text-[10px] text-slate-500">
                          {service.desc}
                        </span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* DESKTOP GET STARTED */}
        <div className="hidden md:block">
          <motion.a
            href="#contact"
            whileHover={{
              y: -3,
              scale: 1.025,
            }}
            whileTap={{
              scale: 0.96,
            }}
            animate={{
              boxShadow: [
                "0 8px 20px rgba(250, 204, 21, 0.18)",
                "0 12px 32px rgba(250, 204, 21, 0.30)",
                "0 8px 20px rgba(250, 204, 21, 0.18)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl border border-yellow-300 bg-white px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-950 transition-colors duration-300 hover:bg-yellow-400 hover:text-white"
          >
            <span className="absolute inset-y-0 -left-[80%] w-1/2 -skew-x-[20deg] bg-white/30 transition-all duration-700 group-hover:left-[130%]" />

            <span className="relative z-10">
              Get Started
            </span>

            <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-lg bg-slate-950 text-white transition-all duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </motion.a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex items-center md:hidden">
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-200 bg-yellow-50 text-slate-800 shadow-[0_5px_20px_rgba(15,23,42,0.06)] transition-all hover:border-yellow-300 hover:bg-yellow-100"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden border-t border-yellow-100 bg-white md:hidden"
          >
            <div className="mx-auto w-full max-w-[1180px] px-5 py-5">
              {/* MOBILE HEADER */}
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-yellow-100 bg-yellow-50/70 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-slate-950">
                    <Sparkles className="h-3.5 w-3.5" />
                  </span>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-900">
                      SQL Centrix
                    </p>

                    <p className="text-[8px] text-slate-500">
                      Growth Partner
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-white px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-yellow-600 shadow-sm">
                  Menu
                </span>
              </div>

              <nav className="flex flex-col gap-1">
                {/* NORMAL LINKS */}
                {navLinks.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-yellow-50 hover:text-slate-950"
                  >
                    <span>{item.name}</span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-all group-hover:bg-yellow-400 group-hover:text-slate-950">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </motion.a>
                ))}

                {/* MOBILE SERVICES */}
                <div className="py-2">
                  <p className="mb-1 px-4 text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Services
                  </p>

                  {serviceLinks.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between rounded-xl px-4 py-3 text-xs font-semibold text-slate-700 transition-all hover:bg-yellow-50 hover:text-slate-950"
                    >
                      <span>{service.name}</span>

                      <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-950" />
                    </a>
                  ))}
                </div>
              </nav>

              {/* MOBILE GET STARTED */}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.97 }}
                className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl border border-yellow-300 bg-yellow-400 px-5 py-3.5 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-950 shadow-[0_10px_25px_rgba(250,204,21,0.20)] transition-colors hover:bg-yellow-500"
              >
                <span>Get Started</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-950 text-yellow-400">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}















