"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Users,
  MessageCircle,
  ClipboardCheck,
  HeartHandshake,
  RefreshCw,
  TrendingUp,
  UserPlus,
  Workflow,
  Star,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

const services = [
  {
    title: "Customer Onboarding",
    subtitle: "Start The Relationship Properly",
    icon: UserPlus,
    intro:
      "The transition from sales to service can make or break the customer's first impression. Information needs to move with the customer. Responsibilities need to be clear. Expectations need to be established. The customer needs to know what happens next.",
    extra:
      "We create structured onboarding workflows that connect the sale to service delivery.",
    build: [
      "Customer Onboarding Workflows",
      "Sales-to-Service Handoffs",
      "Customer Information Collection",
      "Internal Task Flows",
      "Welcome Processes",
      "Onboarding Checkpoints",
    ],
    result:
      "A smoother transition from closed deal to active customer.",
  },
  {
    title: "Client Servicing",
    subtitle: "Make The Customer Experience Consistent",
    icon: HeartHandshake,
    intro:
      "Customers shouldn't have to figure out how your business works every time they need something.",
    extra:
      "We create structured servicing processes that define how requests, communication, updates, issues, and responsibilities are managed throughout the relationship.",
    build: [
      "Client Servicing Processes",
      "Communication Workflows",
      "Account Management",
      "Request Management",
      "Escalation Processes",
      "Service Workflows",
    ],
    result:
      "A more organized customer experience with clearer ownership and fewer service gaps.",
  },
  {
    title: "Customer Communication",
    subtitle: "Keep Customers Informed Before They Have To Ask",
    icon: MessageCircle,
    intro: "Silence creates uncertainty.",
    extra:
      "A customer shouldn't have to repeatedly contact your team just to find out what's happening. We build communication processes around the important moments in the customer journey, helping teams provide relevant updates, follow-ups, notifications, and information at the right time.",
    build: [
      "Customer Communication Workflows",
      "Status Updates",
      "Follow-Up Processes",
      "Notifications",
      "Communication Standards",
      "Customer Touchpoints",
    ],
    result:
      "Better communication, fewer unnecessary follow-ups, and greater customer confidence.",
  },
  {
    title: "Quality Assurance",
    subtitle: "Protect The Experience Your Sales Team Promised",
    icon: ShieldCheck,
    intro:
      "Acquisition creates the expectation. Sales creates the promise. Customer success has to deliver it.",
    extra:
      "We establish quality assurance processes that help businesses monitor service delivery, identify issues, maintain standards, and address problems before they damage the relationship.",
    build: [
      "Service QA Processes",
      "Customer Feedback Systems",
      "Quality Checks",
      "Issue Tracking",
      "Escalation Workflows",
      "Performance Monitoring",
    ],
    result:
      "A more consistent service experience and greater control over customer satisfaction.",
  },
  {
    title: "Customer Retention",
    subtitle: "Don't Wait Until The Customer Is Leaving",
    icon: RefreshCw,
    intro:
      "Retention shouldn't begin when a customer announces they're leaving.",
    extra:
      "It should be built into the relationship from the beginning. We help businesses identify the signals, behaviours, and customer touchpoints that influence retention, then build processes that allow teams to respond before valuable relationships deteriorate.",
    build: [
      "Retention Strategies",
      "Customer Health Monitoring",
      "Feedback Processes",
      "Engagement Workflows",
      "Churn Prevention",
      "Retention Touchpoints",
    ],
    result:
      "Earlier intervention, stronger relationships, and greater potential customer lifetime value.",
  },
  {
    title: "Repeat Business",
    subtitle: "Turn Existing Customers Into New Revenue Opportunities",
    icon: TrendingUp,
    intro:
      "Your existing customers already know your business. They've experienced your service. They understand your value. And if the relationship is strong, they may have a reason to buy again.",
    extra:
      "We identify opportunities around renewals, additional services, upgrades, cross-selling, repeat purchases, and referrals.",
    build: [
      "Renewal Processes",
      "Upsell Opportunities",
      "Cross-Sell Strategies",
      "Repeat Purchase Journeys",
      "Referral Systems",
      "Customer Growth Opportunities",
    ],
    result:
      "More opportunities to generate revenue from relationships you've already earned.",
  },
  {
    title: "Customer Growth",
    subtitle: "The Best Customer Isn't Always A New Customer",
    icon: Users,
    intro: "Growth doesn't always require finding someone new.",
    extra:
      "A satisfied customer can become: A repeat customer. A larger account. A referral source. A long-term partner. We build customer growth opportunities around the relationship you've already established, helping your business increase value without treating every interaction as a sales pitch.",
    build: [
      "Account Growth Strategies",
      "Expansion Opportunities",
      "Cross-Sell & Upsell Journeys",
      "Referral Opportunities",
      "Customer Engagement Strategies",
      "Lifetime Value Growth",
    ],
    result:
      "A customer base that has the potential to become a growth engine for your business.",
  },
];

const retentionSteps = [
  { label: "Sales Closing", icon: CheckCircle2 },
  { label: "Customer Onboarding", icon: UserPlus },
  { label: "Service Delivery", icon: Workflow },
  { label: "Client Servicing", icon: HeartHandshake },
  { label: "Quality Assurance", icon: ShieldCheck },
  { label: "Customer Engagement", icon: MessageCircle },
  { label: "Retention", icon: RefreshCw },
  { label: "Repeat Business", icon: TrendingUp },
  { label: "Customer Growth", icon: Star },
];

const growthSteps = [
  "Digital Authority makes you trusted.",
  "Customer Acquisition brings the right people in.",
  "Conversion turns interest into an opportunity.",
  "Revenue Operations turns the opportunity into a customer.",
  "Customer Success keeps the relationship valuable.",
  "Retention → Repeat Business → Customer Growth",
];

export default function CustomerSuccess() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900 selection:bg-yellow-300 selection:text-slate-950">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden px-6 py-20 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.45, 0.7, 0.45],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-100/60 blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, 25, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-40 h-72 w-72 rounded-full bg-yellow-50 blur-3xl"
          />

          <motion.div
            animate={{
              y: [0, -12, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-10 top-24 h-2 w-2 rounded-full bg-yellow-400"
          />

          <motion.div
            animate={{
              y: [0, 12, 0],
              opacity: [0.25, 0.7, 0.25],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-20 top-52 h-3 w-3 rounded-full bg-yellow-300"
          />
        </div>

        <div className="relative mx-auto max-w-[1180px] text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.span
              whileHover={{ y: -2, scale: 1.02 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-yellow-400 shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Customer Success & Retention
            </motion.span>

            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              Turn Customers Into{" "}
              <span className="relative text-yellow-400">
                Long-Term Revenue

                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className="absolute -bottom-2 left-0 h-1 w-full origin-left rounded-full bg-yellow-300/70"
                />
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-4xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Winning a customer is not the end of growth. It's the point
              where your business has the opportunity to build a relationship
              that generates retention, repeat business, referrals, and
              greater customer lifetime value.
            </p>

            <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-slate-600 md:text-xl">
              But that doesn't happen automatically. Customers need to be
              onboarded properly, serviced consistently, kept informed, and
              given a reason to continue doing business with you.
            </p>

            <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-slate-600 md:text-xl">
              SQL Centrix builds the systems behind that relationship—connecting
              customer onboarding, client servicing, communication, quality
              assurance, retention, and repeat-business opportunities into one
              customer success process.
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-lg font-medium leading-relaxed text-slate-700 md:text-xl">
              Because acquiring the customer creates revenue once. Keeping and
              growing the relationship creates revenue repeatedly.
            </p>

            <motion.a
              href="#contact"
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-xl border border-amber-400 bg-white px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-[0_10px_30px_rgba(234,179,8,0.25)] transition-all duration-300 hover:bg-yellow-500 hover:text-white hover:shadow-[0_18px_45px_rgba(234,179,8,0.32)]"
            >
              <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 opacity-0 blur-sm transition-all duration-[1200ms] group-hover:left-[120%] group-hover:opacity-100" />

              <span className="relative z-10">
                Build My Customer Success System
              </span>

              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CUSTOMER SUCCESS STARTS AFTER THE SALE
      ===================================================== */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                Customer Success
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                Customer Success Starts{" "}
                <span className="text-yellow-400">After The Sale</span>
              </h2>

              <p className="mb-7 mt-6 leading-relaxed text-slate-600">
                The moment a customer says yes, a new set of expectations
                begins.
              </p>

              <p className="mb-5 font-semibold text-slate-700">
                They want to know:
              </p>

              <div className="space-y-3">
                {[
                  "What happens next?",
                  "Who will manage us?",
                  "How will the service be delivered?",
                  "Who do we contact if something goes wrong?",
                  "Are we getting the value we expected?",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.45,
                    }}
                    whileHover={{
                      x: 5,
                    }}
                    className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 transition-all hover:border-yellow-100 hover:bg-white"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-yellow-300" />

                    <span className="font-medium text-slate-700">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-10"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-100/60 blur-3xl" />

              <div className="relative">
                <motion.div
                  animate={{
                    rotate: [0, 4, -4, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100"
                >
                  <ClipboardCheck className="h-6 w-6 text-yellow-400" />
                </motion.div>

                <p className="leading-relaxed text-slate-600">
                  Your customer experience needs to answer those questions
                  consistently.
                </p>

                <p className="mt-5 leading-relaxed text-slate-600">
                  We turn what happens after the sale into a structured process
                  rather than leaving it dependent on individual employees,
                  scattered conversations, or informal follow-ups.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CUSTOMER SUCCESS SYSTEM
      ===================================================== */}
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              The Customer{" "}
              <span className="text-yellow-400">Success System</span>
            </h2>

            <p className="mt-6 leading-relaxed text-slate-600">
              Customer success connects delivery with the commercial value of
              the relationship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {retentionSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.label}
                  initial={{
                    opacity: 0,
                    y: 25,
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
                    delay: index * 0.06,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.015,
                  }}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-yellow-300 hover:shadow-[0_18px_40px_rgba(234,179,8,0.12)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-yellow-100 bg-yellow-50 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-yellow-400" />
                  </div>

                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="font-bold text-slate-800">
                      {step.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-slate-600">
            The objective isn't simply to keep customers happy. It's to build
            relationships{" "}
            <span className="text-yellow-400">
              that remain commercially valuable over time.
            </span>
          </p>

          <div className="mt-8 text-center">
            <motion.a
              href="#contact"
              whileHover={{ x: 4 }}
              className="group inline-flex items-center gap-2 text-sm font-extrabold text-yellow-400 transition-colors hover:text-yellow-700"
            >
              Get Your Customer Success Assessment

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
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
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:border-yellow-200 hover:shadow-[0_25px_70px_rgba(15,23,42,0.08)] md:p-10 lg:p-12"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-yellow-100/40 blur-3xl"
                  />

                  <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
                    <div>
                      <div className="mb-6 flex items-start gap-4">
                        <motion.div
                          whileHover={{
                            rotate: 5,
                            scale: 1.08,
                          }}
                          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-yellow-100 bg-yellow-50"
                        >
                          <Icon className="h-7 w-7 text-yellow-400" />
                        </motion.div>

                        <div>
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-300">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <h3 className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <h4 className="mb-5 text-xl font-extrabold text-slate-800 md:text-2xl">
                        {service.subtitle}
                      </h4>

                      <p className="mb-5 leading-relaxed text-slate-600">
                        {service.intro}
                      </p>

                      {service.extra && (
                        <p className="leading-relaxed text-slate-600">
                          {service.extra}
                        </p>
                      )}
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
                      <h5 className="mb-6 text-sm font-black uppercase tracking-widest text-slate-900">
                        We Build
                      </h5>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {service.build.map((item, itemIndex) => (
                          <motion.div
                            key={item}
                            initial={{
                              opacity: 0,
                              x: 10,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              delay: itemIndex * 0.04,
                            }}
                            whileHover={{
                              x: 4,
                            }}
                            className="group/item flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all hover:border-yellow-200 hover:shadow-sm"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400 transition-transform group-hover/item:scale-110" />

                            <span className="text-sm font-semibold text-slate-700">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-7 border-t border-slate-200 pt-6">
                        <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">
                          The Result
                        </span>

                        <p className="mt-2 font-medium leading-relaxed text-slate-700">
                          {service.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FROM CUSTOMER TO LONG-TERM REVENUE
      ===================================================== */}
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100"
            >
              <TrendingUp className="h-7 w-7 text-yellow-600" />
            </motion.div>

            <h2 className="mb-6 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              From Customer To{" "}
              <span className="text-yellow-300">Long-Term Revenue</span>
            </h2>

            <p className="leading-relaxed text-slate-600">
              Customer success completes the journey that began with your
              marketing.
            </p>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-3">
            {growthSteps.map((item, index) => (
              <motion.div
                key={item}
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
                  delay: index * 0.07,
                  duration: 0.5,
                }}
                whileHover={{
                  x: 6,
                  scale: 1.01,
                }}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:border-yellow-200 hover:shadow-md"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-100 text-xs font-black text-yellow-400 transition-transform duration-300 group-hover:scale-110">
                  {index + 1}
                </div>

                <span className="font-medium text-slate-700">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center text-lg font-extrabold text-slate-900 md:text-xl">
            That's the complete SQL{" "}
            <span className="text-yellow-400">Centrix growth system.</span>
          </p>
        </div>
      </section>

      {/* =====================================================
          ONE CUSTOMER SYSTEM
      ===================================================== */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1000px] text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
              One Customer System. One Long-Term Objective.
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              One Customer System.{" "}
              <span className="text-yellow-300">
                One Long-Term Objective.
              </span>
            </h2>

            <p className="mb-4 mt-8 leading-relaxed text-slate-600">
              Customer onboarding is not separate from servicing. Servicing is
              not separate from retention.{" "}
              <span className="text-yellow-300">
                Retention is not separate from repeat business.
              </span>
            </p>

            <p className="mb-8 font-medium leading-relaxed text-slate-700">
              They're connected stages of the same relationship.
            </p>

            <motion.div
              whileHover={{
                y: -5,
              }}
              className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-[0_25px_70px_rgba(15,23,42,0.15)] md:p-12"
            >
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-3xl"
              />

              <div className="relative">
                <p className="mb-5 leading-relaxed text-slate-300">
                  SQL Centrix brings them together so your business can move
                  beyond:
                </p>

                <p className="mb-7 text-xl font-black leading-tight text-white md:text-3xl">
                  "How do we get more customers?"
                </p>

                <p className="mb-5 leading-relaxed text-slate-300">
                  and start asking:
                </p>

                <p className="text-xl font-black leading-tight text-yellow-400 md:text-3xl">
                  "How do we create more value from every customer we win?"
                </p>
              </div>
            </motion.div>

            <p className="mt-8 leading-relaxed text-slate-600">
              Because sustainable growth isn't only about acquiring more.
            </p>

            <p className="mt-4 leading-relaxed text-slate-600">
              It's about making the customers you already have worth more over
              time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section
        id="contact"
        className="bg-white px-6 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-[1000px]">
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-14 text-center shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:px-14 md:py-16"
          >
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.25, 0.5, 0.25],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-3xl"
            />

            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="mx-auto mb-6 h-7 w-7 text-yellow-400" />
              </motion.div>

              <h2 className="mb-6 text-3xl font-black tracking-tight text-white md:text-5xl">
                Ready To Build A Customer Base That Grows With You?
              </h2>

              <p className="mx-auto mb-9 max-w-2xl leading-relaxed text-slate-300">
                We'll identify the gaps in your onboarding, servicing,
                retention, and customer growth processes and show you where
                your existing customer relationships can create greater
                long-term value.
              </p>

              <motion.a
                href="#"
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-white px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-[0_10px_30px_rgba(250,204,21,0.25)] transition-all duration-300 hover:bg-yellow-500 hover:text-white hover:shadow-[0_18px_45px_rgba(250,204,21,0.35)]"
              >
                <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 opacity-0 blur-sm transition-all duration-[1200ms] group-hover:left-[120%] group-hover:opacity-100" />

                <span className="relative z-10">
                  Book Your Customer Success Strategy Session
                </span>

                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}