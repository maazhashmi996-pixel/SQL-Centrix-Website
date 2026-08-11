"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Target,
  MousePointer2,
  Layout,
  MessageSquareText,
  Zap,
  Users,
  BarChart3,
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const services = [
  {
    title: "Website Development",
    icon: Layout,
    description:
      "Your website is often where customers decide whether to continue with your business. We build websites around your customer's questions, buying journey, business objectives, and conversion points—not simply around pages and design elements.",
    intro:
      "Every important page has a job: Inform. Build trust. Remove uncertainty. Drive action.",
    items: [
      "Website Strategy",
      "Website Development",
      "Information Architecture",
      "Service Pages",
      "Conversion-Focused Pages",
      "Mobile Experiences",
      "CMS Implementation",
    ],
    result:
      "A website designed to move visitors toward meaningful business actions.",
  },
  {
    title: "Landing Pages",
    icon: MousePointer2,
    description:
      "A campaign creates the opportunity. The landing page has to capitalize on it. Instead of sending every visitor to the same generic page, we create focused experiences around the specific audience, offer, campaign, and action.",
    intro: "",
    items: [
      "Lead Generation Pages",
      "Campaign Landing Pages",
      "Offer Pages",
      "Service Landing Pages",
      "Paid Media Landing Pages",
      "Conversion Funnels",
    ],
    result:
      "A focused journey that connects the promise of your campaign to the action you want the customer to take.",
  },
  {
    title: "Conversion Copywriting",
    icon: MessageSquareText,
    description:
      "Good conversion copy isn't about saying more. It's about answering the right questions at the right moment. We develop messaging that clarifies your value, addresses objections, communicates outcomes, establishes relevance, and gives prospects a clear reason to take the next step.",
    intro: "",
    items: [
      "Value Propositions",
      "Headlines",
      "Website Copy",
      "Landing Page Copy",
      "Offer Messaging",
      "Objection Handling",
      "Calls To Action",
    ],
    result:
      "Clearer messaging that helps prospects understand why they should move forward.",
  },
  {
    title: "UX & UI",
    icon: Zap,
    description:
      "Every unnecessary step creates another opportunity for a customer to leave. Confusing navigation, buried information, complicated forms, weak hierarchy, and unclear calls to action can all interrupt the journey. We design experiences around how customers actually navigate, evaluate, and act.",
    intro: "",
    items: [
      "Customer Journeys",
      "UX Strategy",
      "UI Design",
      "Navigation Systems",
      "Conversion Paths",
      "Mobile Experiences",
      "Interaction Design",
    ],
    result:
      "A simpler experience that helps customers find what matters and take action faster.",
  },
  {
    title: "Trust & Proof",
    icon: ShieldCheck,
    description:
      "Customers hesitate when they don't have enough evidence. Before making contact, they may want to see: Results. Experience. Customer proof. Expertise. Credibility. We strategically integrate the trust signals relevant to your business into the customer journey so prospects don't have to take your claims at face value.",
    intro: "",
    items: [
      "Case Studies",
      "Testimonials",
      "Reviews",
      "Social Proof",
      "Results & Data",
      "Trust Signals",
      "Credibility Sections",
    ],
    result:
      "Less uncertainty and more confidence at the point of decision.",
  },
  {
    title: "Lead Capture",
    icon: Users,
    description:
      "Once a prospect is ready, don't make them work to contact you. We build conversion points around the way your customers prefer to engage—whether that's a form, WhatsApp conversation, consultation, booking, or another relevant action.",
    intro: "",
    items: [
      "Lead Forms",
      "WhatsApp Conversion",
      "Consultation Booking",
      "Contact Flows",
      "Enquiry Systems",
      "Lead Capture Mechanisms",
      "Conversion CTAs",
    ],
    result:
      "A clearer path from customer interest to a sales opportunity.",
  },
  {
    title: "Conversion Rate Optimization",
    icon: BarChart3,
    description:
      "Before spending more to generate additional traffic, we look at what happens to the traffic you're already receiving. Where are people leaving? What information are they missing? Which pages create friction? Which messages aren't resonating? Which conversion points are being ignored? We use customer behaviour, analytics, testing, and performance data to identify and improve the points where opportunities are being lost.",
    intro: "",
    items: [
      "Page Structure",
      "Messaging",
      "CTAs",
      "Forms",
      "Landing Pages",
      "User Journeys",
      "Conversion Points",
    ],
    result:
      "More opportunities from the traffic and demand you're already generating.",
  },
];

export default function ConversionSystems() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdf7] text-slate-900 selection:bg-yellow-300 selection:text-slate-950">

      {/* HERO */}
      <section className="relative px-6 py-20 lg:py-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-300/15 blur-[110px]" />
        </motion.div>

        <div className="relative mx-auto max-w-[1180px] text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            {/* <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-yellow-700 shadow-[0_8px_25px_rgba(234,179,8,0.12)] cursor-default"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Service Page 3: Conversion Systems
            </motion.span> */}

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-7 max-w-5xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-7xl"
            >
              Turn Customer Interest Into{" "}
              <span className="text-yellow-300">
                Sales Opportunities
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl"
            >
              Getting the right people to your business doesn't guarantee
              they will contact you. A prospect can click your advertisement,
              find your website, read your content, and still leave without
              taking action. That's where conversion begins. SQL Centrix
              builds the systems that turn attention into action—combining
              website strategy, landing pages, conversion copy, UX, lead
              capture, and conversion optimization around one objective:
              Make it easier for the right customer to say yes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
            <motion.a
  href="#contact"
  whileHover={{ y: -4, scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden hover:text-white rounded-xl border border-yellow-400 bg-white px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-[0_12px_30px_rgba(234,179,8,0.18)] hover:bg-yellow-400 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(234,179,8,0.28)]"
>
  {/* Gray Shine */}
  <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 opacity-0 blur-sm transition-all duration-[1200ms] group-hover:left-[120%] group-hover:opacity-100" />

  <span className="relative z-10">
    Build My Conversion System
  </span>

  <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CUSTOMER JOURNEY */}
      <section className="border-t border-yellow-100 bg-white px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-yellow-400">
                <Target className="h-4 w-4" />
                Customer Journey
              </span>

              <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                Conversion Starts With  <span className="text-yellow-400">The Customer Journey</span>
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600">
                A conversion isn't created by a button. It's created by
                everything that happens before the button is clicked.
              </p>

              <p className="mt-5 font-semibold text-slate-800">
                A prospect needs to understand:
              </p>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-5 space-y-3"
              >
                {[
                  "What do you offer?",
                  "Is it relevant to me?",
                  "Why should I trust you?",
                  "Why should I choose you?",
                  "What happens if I take the next step?",
                ].map((question) => (
                  <motion.div
                    key={question}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                    }}
                    whileHover={{ scale: 1.01, x: 4 }}
                    className="flex items-center gap-3 rounded-xl border border-yellow-100 bg-[#fffdf7] px-4 py-3 shadow-[0_7px_22px_rgba(234,179,8,0.08)] transition-all"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-yellow-500" />
                    <span className="text-sm font-semibold text-slate-700">
                      {question}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <p className="mt-6 leading-relaxed text-slate-600">
                We structure the digital experience around those questions
                so prospects can move from interest to action with less
                uncertainty and friction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="rounded-3xl border border-yellow-200 bg-[#fffdf7] p-7 shadow-[0_15px_45px_rgba(234,179,8,0.13)] md:p-9"
            >
              <h3 className="text-2xl font-black text-slate-950">
                The Conversion System
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Every conversion experience should move the customer
                somewhere.
              </p>

              <div className="mt-7 space-y-2">
                {[
                  "Customer Intent",
                  "Offer & Positioning",
                  "Website Experience",
                  "Conversion Messaging",
                  "Trust & Proof",
                  "Call To Action",
                  "Lead Capture",
                  "Sales Opportunity",
                ].map((item, index) => (
                  <React.Fragment key={item}>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      whileHover={{ scale: 1.02 }}
                      className={`rounded-xl border px-4 py-3 text-center text-sm font-bold transition-all ${
                        index === 7
                          ? "border-yellow-300 bg-yellow-400 text-slate-950 shadow-[0_10px_28px_rgba(234,179,8,0.22)]"
                          : "border-yellow-100 bg-white text-slate-700 shadow-[0_6px_18px_rgba(234,179,8,0.06)]"
                      }`}
                    >
                      {item}
                    </motion.div>

                    {index < 7 && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 + 0.02 }}
                        className="text-center text-yellow-300 font-bold"
                      >
                        ↓
                      </motion.div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <p className="mt-7 text-sm leading-relaxed text-slate-600">
                The objective isn't simply to make a website look better.
                It's to make the path to becoming a customer clearer.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-yellow-400 transition-colors hover:text-yellow-500"
            >
              Get Your Conversion Assessment
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group rounded-3xl border border-yellow-100 bg-white p-7 shadow-[0_10px_30px_rgba(234,179,8,0.09)] transition-all duration-300 hover:border-yellow-300 hover:shadow-[0_20px_50px_rgba(234,179,8,0.2)] md:p-9"
                >
                  <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

                    <div>
                      <div className="flex items-center gap-4">
                        <motion.div 
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-50 text-yellow-400 shadow-[0_7px_20px_rgba(234,179,8,0.12)] transition-transform"
                        >
                          <Icon className="h-5 w-5" />
                        </motion.div>

                        <h3 className="text-2xl font-black text-slate-950">
                          {service.title}
                        </h3>
                      </div>

                      <p className="mt-5 leading-relaxed text-slate-600">
                        {service.description}
                      </p>

                      {service.intro && (
                        <p className="mt-5 font-semibold leading-relaxed text-slate-800">
                          {service.intro}
                        </p>
                      )}
                    </div>

                    <div>
                      <p className="mb-4 text-xs font-black uppercase tracking-[0.15em] text-yellow-300">
                        We Build
                      </p>

                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {service.items.map((item) => (
                          <motion.div
                            key={item}
                            whileHover={{ scale: 1.02, x: 3 }}
                            className="flex items-center gap-2 rounded-xl border border-slate-100 bg-[#fffdf7] px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition-all"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-yellow-500" />
                            {item}
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-6 rounded-2xl border border-yellow-100 bg-yellow-50/70 p-5">
                        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-400">
                          The Result
                        </p>

                        <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-700">
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

      {/* CONVERSION JOURNEY */}
      <section className="border-t border-yellow-100 bg-white px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1180px]">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-xs font-black uppercase tracking-[0.15em] text-yellow-400">
              The Conversion Journey
            </span>

            <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">
              The Conversion Journey
            </h2>

            <p className="mt-5 leading-relaxed text-slate-600">
              Your acquisition system brings the right people to you.
              Conversion gives them a reason to continue.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-2xl">
            {[
              "The audience arrives.",
              "The message creates relevance.",
              "The website explains the value.",
              "The proof creates confidence.",
              "The experience removes friction.",
              "The CTA creates action.",
              "The lead capture creates an opportunity.",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -25 : 25,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="mb-3 flex items-center gap-4 rounded-2xl border border-yellow-100 bg-[#fffdf7] px-5 py-4 shadow-[0_8px_24px_rgba(234,179,8,0.07)] transition-all"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-xs font-black text-slate-950 shadow-sm">
                  {index + 1}
                </span>

                <span className="text-sm font-semibold text-slate-700">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl text-center">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="leading-relaxed text-slate-600 font-medium"
            >
              But generating an enquiry isn't the end of the process.
              It's where your sales system takes over.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ONE SYSTEM */}
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1000px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-yellow-200 bg-white p-8 text-center shadow-[0_18px_50px_rgba(234,179,8,0.13)] md:p-12"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-yellow-400 cursor-default"
            >
              <Sparkles className="h-3.5 w-3.5" />
              One Conversion System. One Objective.
            </motion.span>

            <p className="mx-auto mt-7 max-w-3xl leading-relaxed text-slate-600">
              A website, landing page, copy, UX, forms, and CRO should never
              operate as isolated activities. They are different parts of the
              same conversion experience. We bring them together around one
              commercial question:
            </p>

            <h3 className="mx-auto mt-7 max-w-3xl text-2xl font-black leading-tight text-slate-950 md:text-4xl">
              How do we turn more of the right <span className="text-yellow-300"> attention into genuine sales
              opportunities?</span>
            </h3>

            <div className="mx-auto mt-7 max-w-2xl space-y-2 text-sm font-semibold text-slate-600">
              <p>Because getting traffic is an acquisition problem.</p>
              <p>Getting that traffic to take action is a conversion problem.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-yellow-100 bg-yellow-50 px-6 py-20 lg:py-28"
      >
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/25 blur-[120px]"
        />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Ready To Turn More Interest   <span className="text-yellow-300"> Into Opportunities?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-slate-600">
            We'll identify where prospects are dropping out of your customer
            journey and what needs to change to create a clearer path from
            first interaction to qualified enquiry.
          </p>
<motion.div
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="group inline-block mt-9"
>
  <a
    href="#contact"
    className="relative inline-flex items-center gap-3 overflow-hidden rounded-xl border hover:bg-yellow-400 border-yellow-400 bg-white px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-[0_12px_30px_rgba(234,179,8,0.18)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(234,179,8,0.32)]"
  >
    {/* Gray Shine */}
    <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/45 opacity-0 blur-sm transition-all duration-[1200ms] group-hover:left-[120%] group-hover:opacity-100" />

    <span className="relative z-10">
      Book Your Conversion Strategy Session
    </span>

    <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  </a>
</motion.div>
        </motion.div>
      </section>

    </main>
  );
}