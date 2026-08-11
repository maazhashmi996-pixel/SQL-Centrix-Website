"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Users,
  Target,
  Megaphone,
  Share2,
  Award,
  FileText,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const services = [
  {
    icon: Users,
    title: "Audience Strategy: Know Who You're Trying To Acquire",
    description:
      "Not every person in your market is your customer. We define the audiences that matter based on your business model, offer, market, customer characteristics, buying intent, and commercial value.",
    items: [
      "Ideal Customer Profiles",
      "Audience Segmentation",
      "Market Research",
      "Customer Personas",
      "Buying Behaviour Analysis",
      "Competitor Analysis",
    ],
  },
  {
    icon: Target,
    title: "Offer & Messaging: Give A Reason To Respond",
    description:
      "We develop acquisition messaging around the problems your customers want solved, the outcomes they want, and the reasons they should choose your business, adapted to each stage of the buying journey.",
    items: [
      "Offer Strategy",
      "Value Propositions",
      "Campaign Messaging",
      "Ad Copy & Hooks",
      "Calls To Action",
    ],
  },
  {
    icon: Megaphone,
    title: "Creative Strategy: Turn Offer Into Notice",
    description:
      "Your audience sees hundreds of messages daily. We develop creative systems around different problems, motivations, formats, and testing frameworks to find what resonates.",
    items: [
      "Creative Concepts",
      "Static & Video Ads",
      "UGC-Style Creative",
      "Hooks & Angles",
      "Creative Testing",
    ],
  },
  {
    icon: Award,
    title: "Performance Marketing: Put Budget Behind Scale",
    description:
      "Paid media gives you control over who sees your business. We manage paid acquisition around audience quality, campaign objectives, creative performance, and commercial outcomes.",
    items: [
      "Meta & Google Ads",
      "TikTok & LinkedIn Ads",
      "YouTube Ads",
      "Retargeting & Architecture",
    ],
  },
  {
    icon: Share2,
    title: "Social Media: Build Demand Before Search",
    description:
      "Stay present while prospects discover problems and form preferences. We use social content to build familiarity, demonstrate expertise, and support wider acquisition campaigns.",
    items: [
      "Social Strategy",
      "Content Planning",
      "Platform Management",
      "Short-Form Content",
    ],
  },
  {
    icon: FileText,
    title: "Content-Led Acquisition: Reach Early",
    description:
      "Strategic content allows your business to enter the customer journey earlier by answering questions, educating prospects, and creating familiarity before buying decisions.",
    items: [
      "Educational Content",
      "Thought Leadership",
      "Lead Magnets & Resources",
      "Comparison Content",
    ],
  },
];

export default function CustomerAcquisition() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900 selection:bg-yellow-400 selection:text-slate-950">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-yellow-100 bg-gradient-to-b from-yellow-50/80 via-white to-white">

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[850px] -translate-x-1/2 rounded-full bg-yellow-300/15 blur-[120px]"
        />

        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-[8%] top-[25%] h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.7)]" />
          <div className="absolute right-[10%] top-[35%] h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.7)]" />
          <div className="absolute bottom-[18%] left-[18%] h-1.5 w-1.5 rounded-full bg-yellow-400" />
        </div>

        <div className="relative mx-auto max-w-[1180px] px-6 py-24 text-center lg:py-36">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            {/* <motion.span
              whileHover={{ y: -2, scale: 1.03 }}
              className="inline-flex cursor-default items-center gap-2 rounded-full border border-yellow-200 bg-white px-5 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-yellow-300 shadow-[0_8px_30px_rgba(234,179,8,0.12)]"
            >
              <Sparkles className="h-4 w-4 text-yellow-300" />
              Service Page 2: Customer Acquisition
            </motion.span> */}

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mx-auto mt-8 max-w-5xl text-4xl font-black leading-[1.04] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-7xl"
            >
              Reach The People{" "}
              <span className="relative inline-block text-yellow-300">
                Most Likely To Buy
                <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-yellow-400/70" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl"
            >
              Being visible is only the beginning. Your business can have
              strong authority, great content, and an impressive digital
              presence—but if the right people aren't discovering you, none
              of it creates enough opportunity.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-slate-700 md:text-lg"
            >
              Customer Acquisition is where we turn your market position into
              active demand by putting your business in front of the people
              most likely to become customers. We don't chase reach for the
              sake of reach; we build acquisition around the people you
              actually want to sell to.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="group relative mt-10 inline-flex items-center hover:text-white gap-3 overflow-hidden rounded-xl border border-yellow-400 bg-white px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-[0_14px_35px_rgba(234,179,8,0.24)] transition-all duration-300 hover:bg-yellow-300 hover:shadow-[0_20px_45px_rgba(234,179,8,0.32)]"
            >
              <span className="absolute inset-y-0 -left-[80%] w-1/2 -skew-x-12 bg-yellow-100/70 blur-sm transition-all duration-700 group-hover:left-[130%]" />

              <span className="relative z-10">
                Build My Customer Acquisition Strategy
              </span>

              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          ACQUISITION STARTS
      ===================================================== */}
      <section className="relative mx-auto max-w-[1180px] px-6 py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
              Acquisition Starts With  The Right Customer
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Acquisition Starts<span className="text-yellow-300">  With The Right Customer </span>  
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              The biggest acquisition mistake is starting with the channel.
              Businesses ask: "Should we run Meta Ads?", "Should we use
              Google?", "Should we do TikTok?"
            </p>

            <p className="mt-4 font-semibold leading-8 text-slate-800">
              We start somewhere else: Who are we trying to acquire? We
              identify the audience, understand their needs and buying
              behaviour, determine where they spend attention, and then choose
              the channels and messages capable of reaching them.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Audience Intelligence",
                "Offer & Messaging",
                "Creative Strategy",
                "Performance Marketing",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 4, y: -2 }}
                  className="group flex items-center gap-3 rounded-xl border border-yellow-100 bg-white px-4 py-4 shadow-[0_8px_25px_rgba(234,179,8,0.07)] transition-all duration-300 hover:border-yellow-200 hover:shadow-[0_14px_35px_rgba(234,179,8,0.14)]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-50">
                    <CheckCircle2 className="h-5 w-5 text-yellow-300 transition-transform group-hover:scale-110" />
                  </span>

                  <span className="text-sm font-bold text-slate-800">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SYSTEM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-[2rem] border border-yellow-200 bg-white p-8 shadow-[0_20px_60px_rgba(234,179,8,0.12)] transition-shadow duration-500 hover:shadow-[0_25px_75px_rgba(234,179,8,0.18)] sm:p-10"
          >
            <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-yellow-300/15 blur-3xl" />

            <div className="relative">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-300 shadow-[0_8px_25px_rgba(234,179,8,0.12)]">
                  <ShieldCheck className="h-6 w-6 text-yellow-300" />
                </div>

                <h3 className="text-xl font-black text-slate-950">
                  The Customer Acquisition System
                </h3>
              </div>

              <ul className="space-y-5 text-sm leading-7 text-slate-700">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-yellow-300" />
                  <span>
                    <strong>Audience Intelligence:</strong> Understand who
                    you're trying to reach.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-yellow-300" />
                  <span>
                    <strong>Offer & Messaging:</strong> Give them a reason to
                    care.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-yellow-300" />
                  <span>
                    <strong>Creative & Channel:</strong> Turn messages into
                    notices and scale through distribution.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="relative border-y border-yellow-100 bg-yellow-50/25">
        <div className="mx-auto max-w-[1180px] px-6 py-20 lg:py-28">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
              Detailed Services
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Find Your Highest-Value Acquisition Opportunities
            </h2>

            <p className="mt-5 text-slate-600">
              A comprehensive framework designed to scale your business
              opportunities efficiently.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -7,
                    transition: { duration: 0.25 },
                  }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-yellow-100 bg-white p-8 shadow-[0_12px_35px_rgba(234,179,8,0.07)] transition-all duration-300 hover:border-yellow-200 hover:shadow-[0_25px_55px_rgba(234,179,8,0.16)]"
                >
                  <div className="absolute left-0 top-0 h-1 w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full" />

                  <div className="flex items-start gap-5">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-300 shadow-[0_8px_25px_rgba(234,179,8,0.1)]"
                    >
                      <Icon className="h-6 w-6 text-yellow-300" />
                    </motion.div>

                    <div>
                      <h3 className="text-xl font-black leading-snug text-slate-950">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-7 border-t border-yellow-100 pt-5">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-300">
                      We Build
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <motion.div
                          key={item}
                          whileHover={{ x: 3 }}
                          className="flex items-start gap-2 text-xs font-semibold text-slate-600"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-300" />
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section
        id="contact"
        className="relative overflow-hidden bg-white"
      >
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300 blur-[130px]"
        />

        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 8, scale: 1.08 }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950 shadow-[0_15px_35px_rgba(234,179,8,0.25)]"
          >
            <Sparkles className="h-7 w-7" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-7 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl"
          >
            Ready To Acquire  <span className="text-yellow-300"> Better Customers?</span>
          </motion.h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">
            We'll identify the audiences, offers, channels, and creative
            opportunities that can build a stronger acquisition system around
            your business.
          </p>

       <motion.a
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ y: -4, scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  href="#contact"
  className="group relative mt-9 inline-flex items-center gap-3 overflow-hidden rounded-xl border border-yellow-400 bg-white px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-[0_14px_35px_rgba(234,179,8,0.22)] transition-all duration-300 hover:bg-yellow-300 hover:text-white hover:shadow-[0_20px_45px_rgba(234,179,8,0.32)]"
>
  {/* Hover Shine */}
  <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/45 opacity-0 blur-sm transition-all duration-[1200ms] group-hover:left-[120%] group-hover:opacity-100" />

  <span className="relative z-10">
    Book Your Customer Acquisition Strategy Session
  </span>

  <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</motion.a>
        </div>
      </section>
    </main>
  );
}