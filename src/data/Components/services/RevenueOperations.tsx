"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Database,
  Users,
  Filter,
  GitBranch,
  MessageCircle,
  Zap,
  BarChart3,
  Target,
  Search,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const services = [
  {
    title: "CRM Implementation",
    subtitle: "Give Your Sales Team One Source Of Truth",
    icon: Database,
    intro:
      "A CRM should tell your team more than who your customers are. It should tell them:",
    points: [
      "Who needs to be contacted?",
      "Who owns the opportunity?",
      "What stage is the deal in?",
      "What happened previously?",
      "What needs to happen next?",
    ],
    build: [
      "CRM Implementation",
      "CRM Structure",
      "Lead & Contact Management",
      "Deal Management",
      "Activity Tracking",
      "Workflow Configuration",
      "CRM Integrations",
    ],
    result:
      "A centralized sales environment where opportunities are visible, organized, and actionable.",
    iconBg: "bg-yellow-50",
  },
  {
    title: "Sales Pipeline Design",
    subtitle: "Turn Your Sales Process Into A Manageable Journey",
    icon: GitBranch,
    intro:
      "A pipeline should reflect your actual sales process. We map the stages an opportunity moves through—from initial enquiry and qualification to proposal, negotiation, and closing—so your team knows exactly where every opportunity stands.",
    build: [
      "Sales Pipeline Architecture",
      "Pipeline Stages",
      "Qualification Stages",
      "Deal Movement",
      "Follow-Up Processes",
      "Sales Workflows",
      "Process Mapping",
    ],
    result:
      "A clear sales journey that makes opportunities easier to manage, measure, and move forward.",
    iconBg: "bg-yellow-50",
  },
  {
    title: "Lead Management",
    subtitle: "Make Sure Opportunities Don't Disappear Between The Stages",
    icon: Target,
    intro:
      "The moment a lead enters your business, ownership and action need to be clear. We create processes for assigning, qualifying, prioritizing, tracking, and following up with leads so valuable opportunities don't get lost in operational gaps.",
    build: [
      "Lead Assignment",
      "Lead Qualification",
      "Lead Prioritization",
      "Follow-Up Processes",
      "Lead Status Management",
      "Sales Activity Tracking",
    ],
    result:
      "Greater control over your leads and fewer opportunities lost through poor follow-up or unclear ownership.",
    iconBg: "bg-yellow-50",
  },
  {
    title: "WhatsApp Integration",
    subtitle: "Turn Conversations Into Part Of Your Sales System",
    icon: MessageCircle,
    intro:
      "For many businesses, WhatsApp is where the actual sales conversation happens. But when different sales agents manage conversations independently, management can lose visibility over leads, follow-ups, and sales activity.",
    extra:
      "We integrate WhatsApp into your wider sales operation, allowing multiple agents to work within a structured environment while conversations remain connected to the sales process.",
    build: [
      "WhatsApp CRM Integration",
      "Multi-Agent Workflows",
      "Conversation Management",
      "Lead Assignment",
      "Conversation Monitoring",
      "Sales Communication Processes",
    ],
    result:
      "A WhatsApp sales channel that can be managed as part of your business—not as a collection of individual chats.",
    iconBg: "bg-yellow-50",
  },
  {
    title: "Sales Automation",
    subtitle: "Keep The Process Moving Without Relying On Manual Follow-Up",
    icon: Zap,
    intro:
      "Sales teams should spend their time having valuable conversations—not repeatedly performing administrative tasks.",
    extra:
      "We automate appropriate parts of the sales workflow, helping your team manage notifications, assignments, follow-ups, tasks, and pipeline movement more consistently.",
    build: [
      "Lead Routing",
      "Automated Notifications",
      "Follow-Up Workflows",
      "Task Automation",
      "Pipeline Automation",
      "Internal Process Flows",
    ],
    result:
      "A more consistent sales process with less manual administration and fewer operational gaps.",
    iconBg: "bg-yellow-50",
  },
  {
    title: "Sales Quality Assurance",
    subtitle: "Know How Your Opportunities Are Actually Being Handled",
    icon: ShieldCheck,
    intro:
      "Lead volume doesn't tell you whether your sales operation is working. You also need to understand what happens after the lead arrives.",
    extra:
      "We establish processes for monitoring conversations, follow-ups, pipeline movement, and sales execution so management can identify where opportunities are being mishandled or lost.",
    build: [
      "Sales QA Processes",
      "Conversation Monitoring",
      "Follow-Up Monitoring",
      "Pipeline Audits",
      "Sales Process Reviews",
      "Performance Tracking",
    ],
    result:
      "Greater visibility into sales execution and the ability to correct problems before they become lost revenue.",
    iconBg: "bg-yellow-50",
  },
  {
    title: "Sales Reporting",
    subtitle: "See Where Your Revenue Process Is Breaking Down",
    icon: BarChart3,
    intro:
      "A useful sales system should help you understand more than lead volume. It should help answer:",
    points: [
      "Which opportunities are moving?",
      "Where are deals getting stuck?",
      "How quickly are leads being handled?",
      "Which sources are producing valuable opportunities?",
      "Where is the sales process losing potential revenue?",
    ],
    build: [
      "Pipeline Reporting",
      "Lead Source Tracking",
      "Sales Performance Reports",
      "Conversion Tracking",
      "Activity Reporting",
      "Revenue Visibility",
    ],
    result:
      "A clearer picture of how opportunities move through your business and where improvement is needed.",
    iconBg: "bg-yellow-50",
  },
];

const flowSteps = [
  {
    label: "Lead Capture",
    icon: Target,
  },
  {
    label: "CRM",
    icon: Database,
  },
  {
    label: "Lead Assignment",
    icon: Users,
  },
  {
    label: "Qualification",
    icon: Filter,
  },
  {
    label: "Sales Pipeline",
    icon: GitBranch,
  },
  {
    label: "Follow-Up",
    icon: MessageCircle,
  },
  {
    label: "Quality Assurance",
    icon: ShieldCheck,
  },
  {
    label: "Sales Closing",
    icon: CheckCircle2,
  },
  {
    label: "Revenue",
    icon: TrendingUp,
  },
];

export default function RevenueOperations() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-yellow-300 selection:text-slate-950">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden px-6 py-20 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-100/60 blur-3xl" />

          <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-yellow-50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1180px] text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="mb-7 text-4xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              Turn Qualified Opportunities
              <br />
              <span className="text-yellow-300">
                Into Revenue
              </span>
            </h1>

            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Generating a qualified enquiry is only part of the growth
              equation. If leads are sitting in inboxes, WhatsApp chats,
              spreadsheets, or disconnected systems, your business can
              generate demand without having a reliable way to turn that
              demand into revenue.
            </p>

            <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Revenue Operations is where we connect the systems behind your
              sales process. SQL Centrix brings together CRM, lead management,
              sales pipelines, WhatsApp, automation, sales processes, and
              quality assurance to{" "}
              <span className="text-yellow-400">
                create a structured path from incoming opportunity to closed
                business.
              </span>
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-lg font-medium leading-relaxed text-slate-700 md:text-xl">
              Because a lead has no commercial value if your business can't
              manage what happens next.
            </p>

            <a
              href="#contact"
              className="mt-10 hover:text-white inline-flex items-center gap-3 rounded-xl bg-white border border-yellow-300 px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-[0_10px_30px_rgba(234,179,8,0.25)] transition-all hover:bg-yellow-500"
            >
              <span>Build My Revenue Operations System</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          REVENUE STARTS
      ===================================================== */}

      <section className="border-y border-slate-200 bg-slate-50 px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                Revenue Operations
              </span>

              <h2 className="mt-4 mb-7  text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                Revenue Starts With
                <br />
                <span className="text-yellow-300">
                  What Happens After
                  <br />
                  The Lead
                </span>
              </h2>

              <p className="mb-7 leading-relaxed text-slate-600">
                Most businesses focus heavily on generating leads. Far fewer
                build the infrastructure required to manage them properly.
              </p>

              <p className="mb-5 font-semibold text-slate-700">
                A new enquiry needs to be:
              </p>

              <div className="space-y-3">
                {[
                  "Captured.",
                  "Assigned.",
                  "Qualified.",
                  "Followed up.",
                  "Moved through the pipeline.",
                  "Reviewed.",
                  "Closed.",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-yellow-500" />

                    <span className="font-medium text-slate-700">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100">
                <ClipboardCheck className="h-6 w-6 text-yellow-400" />
              </div>

              <p className="mb-6 leading-relaxed text-slate-600">
                We build the operational system that makes each of those stages
                visible and manageable.
              </p>

              <p className="font-medium leading-relaxed text-slate-700">
                The result is a sales process that doesn't depend on memory,
                individual spreadsheets, or disconnected conversations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          REVENUE OPERATIONS SYSTEM
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
            <h2 className="mt-4 mb-6 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              The Revenue Operations System
            </h2>

            <p className="leading-relaxed text-slate-600">
              Revenue Operations connects your marketing activity with the
              people and processes{" "}
              <span className="text-yellow-300">
                responsible for generating revenue.
              </span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {flowSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.label}
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
                    delay: index * 0.05,
                  }}
                >
                  <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-yellow-300 hover:shadow-lg">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-yellow-100 bg-yellow-50">
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
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-slate-600">
            The technology is only one part of the system. The real objective
            is operational control over every sales opportunity.
          </p>

          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-yellow-400 transition-colors hover:text-yellow-700"
            >
              Get Your Revenue Operations Assessment
              <ArrowRight className="h-4 w-4" />
            </a>
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
                <motion.div
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  variants={fadeUp}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(15,23,42,0.07)] md:p-10 lg:p-12"
                >
                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
                    <div>
                      <div className="mb-6 flex items-start gap-4">
                        <div
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-yellow-100 ${service.iconBg}`}
                        >
                          <Icon className="h-7 w-7 text-yellow-300" />
                        </div>

                        <div>
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <h3 className="text-2xl font-black tracking-tight text-yellow-300 md:text-3xl">
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

                      {service.points && (
                        <div className="space-y-2.5">
                          {service.points.map((point) => (
                            <div
                              key={point}
                              className="flex items-center gap-3 text-sm text-slate-700"
                            >
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-yellow-300" />
                              {point}
                            </div>
                          ))}
                        </div>
                      )}

                      {service.extra && (
                        <p className="mt-5 leading-relaxed text-slate-600">
                          {service.extra}
                        </p>
                      )}
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
                      <h5 className="mb-6 text-sm font-black uppercase tracking-widest text-slate-900">
                        We Build
                      </h5>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {service.build.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-300" />

                            <span className="text-sm font-semibold text-slate-700">
                              {item}
                            </span>
                          </div>
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SALES REPORTING
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
            className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
          >
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-100 bg-yellow-50">
                <BarChart3 className="h-7 w-7 text-yellow-400" />
              </div>

              <h2 className="mb-6 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                Sales Reporting
              </h2>

              <h3 className="mb-5 text-xl font-extrabold text-slate-800 md:text-2xl">
                See Where Your Revenue{" "}
                <span className="text-yellow-300">
                  Process Is Breaking Down
                </span>
              </h3>

              <p className="mb-7 leading-relaxed text-slate-600">
                A useful sales system should help you understand more than lead
                volume. It should help answer:
              </p>

              <div className="space-y-3">
                {[
                  "Which opportunities are moving?",
                  "Where are deals getting stuck?",
                  "How quickly are leads being handled?",
                  "Which sources are producing valuable opportunities?",
                  "Where is the sales process losing potential revenue?",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-[0_25px_70px_rgba(15,23,42,0.18)] md:p-10">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400">
                <Search className="h-6 w-6 text-slate-950" />
              </div>

              <p className="mb-7 leading-relaxed text-slate-300">
                We build reporting around the information your management team
                needs to make better decisions.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Pipeline Reporting",
                  "Lead Source Tracking",
                  "Sales Performance Reports",
                  "Conversion Tracking",
                  "Activity Reporting",
                  "Revenue Visibility",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-yellow-400" />

                    <span className="text-sm text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-yellow-300">
                  The Result
                </span>

                <p className="mt-2 leading-relaxed text-slate-300">
                  A clearer picture of how opportunities move through your
                  business and{" "}
                  <span className="text-yellow-300">
                    where improvement is needed.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FROM LEAD TO REVENUE
      ===================================================== */}

      <section className="border-y border-slate-200 bg-slate-50 px-6 py-20 lg:py-28">
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
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100">
              <TrendingUp className="h-7 w-7 text-yellow-400" />
            </div>

            <h2 className="mb-6 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              From Lead To Revenue
            </h2>

            <p className="leading-relaxed text-slate-600">
              Revenue Operations is the bridge between your acquisition{" "}
              <span className="text-yellow-400">
                system and your actual business results.
              </span>
            </p>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-3">
            {[
              "Marketing generates attention.",
              "Conversion creates the enquiry.",
              "CRM captures the opportunity.",
              "Lead management creates ownership.",
              "The sales pipeline creates progression.",
              "WhatsApp and other communication channels support the conversation.",
              "Quality assurance protects execution.",
              "Sales closes the opportunity.",
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
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-100 text-xs font-black text-yellow-400">
                  {index + 1}
                </div>

                <span className="font-medium text-slate-700">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center text-lg font-extrabold text-slate-900 md:text-xl">
            That's when a marketing-generated{" "}
            <span className="text-yellow-300">lead becomes revenue.</span>
          </p>
        </div>
      </section>

      {/* =====================================================
          ONE REVENUE SYSTEM
      ===================================================== */}

      <section className="px-6 py-20 lg:py-28">
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
              One Revenue System. Not Disconnected Tools
            </span>

            <h2 className="mt-4 mb-8 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              One Revenue System.  Not{" "} <br />
              <span className="text-yellow-300">
                 Disconnected Tools
              </span>
            </h2>

            <p className="mb-4 leading-relaxed text-slate-600">
              CRM isn't the strategy. WhatsApp isn't the strategy. A sales
              pipeline isn't the strategy. Automation isn't the strategy.
            </p>

            <p className="mb-8 font-medium leading-relaxed text-yellow-400">
              They are components of a larger operational system.
            </p>

            <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-[0_25px_70px_rgba(15,23,42,0.15)] md:p-12">
              <p className="mb-5 leading-relaxed text-slate-300">
                SQL Centrix connects those components around one commercial
                objective:
              </p>

              <p className="text-xl font-black leading-tight text-white md:text-3xl">
                Give your business a structured, measurable path from
              <span className="text-yellow-300">  qualified opportunity to closed revenue</span>
              </p>
            </div>

            <p className="mt-8 leading-relaxed text-slate-600">
              Because generating more leads won't fix a sales process that
              can't handle them.
            </p>

            <p className="mt-4 leading-relaxed text-slate-600">
              The next stage is making sure the customers you win don't stop
              being valuable after the first transaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        id="contact"
        className="bg-slate-50 px-6 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-[1000px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-14 text-center shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:px-14 md:py-16"
          >
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-3xl" />

            <div className="relative">

              <h2 className="mb-6 text-3xl font-black tracking-tight text-white md:text-5xl">
                Ready To Build A Sales System <br /> <span className="text-yellow-400"> That Can Scale?</span>
              </h2>

              <p className="mx-auto mb-9 max-w-2xl leading-relaxed text-slate-300">
                We'll identify the gaps between your leads, sales team, CRM,
                communication channels, and closing process and show you where
                opportunities may be getting lost.
              </p>

              <a
                href="#"
                className="group relative inline-flex items-center gap-3 hover:text-white overflow-hidden rounded-xl bg-white border border-amber-300 px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-[0_10px_30px_rgba(250,204,21,0.25)] transition-all duration-300 hover:bg-yellow-500 hover:shadow-[0_18px_45px_rgba(234,179,8,0.32)]"
              >
                <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/55 opacity-0 blur-sm transition-all duration-[1200ms] group-hover:left-[120%] group-hover:opacity-100" />

                <span className="relative z-10">
                  Book Your Revenue Operations Strategy Session
                </span>

                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}