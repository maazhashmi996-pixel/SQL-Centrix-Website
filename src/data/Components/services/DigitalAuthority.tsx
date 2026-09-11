
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Search,
  Brain,
  Network,
  FileText,
  Newspaper,
  ShieldCheck,
  BookOpen,
  Star,
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

const authorityServices = [
  {
    icon: Sparkles,
    title: "Brand Strategy",
    heading: "Decide What Your Business Should Be Known For",
    description:
      "A business becomes difficult to trust when its positioning is difficult to understand. We establish the strategic foundation behind your brand—what you stand for, who you serve, what makes you different, and why your market should care.",
    builds: [
      "Brand Positioning",
      "Value Propositions",
      "Messaging Frameworks",
      "Brand Differentiation",
      "Market Positioning",
    ],
    result:
      "A business customers can understand quickly and remember clearly.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    heading: "Be Found When Demand Already Exists",
    description:
      "Your customers are searching for solutions. The question is whether they find you or someone else. We build SEO around commercial search intent—not traffic for traffic's sake. Technical foundations, content, structured data, and search strategy work together to increase visibility for searches that matter to your business.",
    builds: [
      "Technical SEO",
      "Search Intent Strategy",
      "On-Page SEO",
      "Content SEO",
      "Structured Data",
      "Search Visibility",
    ],
    result:
      "More opportunities to be discovered when customers are actively looking for what you offer.",
  },
  {
    icon: Brain,
    title: "AI Search Optimization",
    heading: "Become Part Of The Answer",
    description:
      "Search is no longer limited to ten blue links. Customers increasingly use AI platforms to research companies, compare solutions, and ask for recommendations. We structure your digital presence so AI systems can better understand your business, expertise, services, and relevance—helping your brand compete in this new layer of discovery.",
    builds: [
      "AI Search Optimization",
      "GEO",
      "LLMO",
      "Answer-Focused Content",
      "Semantic Optimization",
      "AI-Focused Entity Signals",
    ],
    result:
      "A stronger presence wherever customers go to find answers—not just where they search traditionally.",
  },
  {
    icon: Network,
    title: "Entity SEO & Knowledge Graphs",
    heading: "Make Your Business Clearly Understood",
    description:
      "Search engines and AI systems need more than keywords. They need to understand what your business is, what it does, what it is associated with, and why those associations are credible. We strengthen your digital entity through structured information, schema, consistent brand data, and meaningful connections across the web.",
    builds: [
      "Entity SEO",
      "Schema Strategy",
      "Structured Data",
      "Entity Relationships",
      "Knowledge Graph Signals",
      "Digital Identity",
    ],
    result:
      "A clearer digital identity that search and AI systems can understand with greater confidence.",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    heading: "Don't Just Publish. Build Expertise.",
    description:
      "Content should do more than keep your website active. It should answer customer questions, demonstrate expertise, support search visibility, and move prospects closer to trusting your business. We build content around what your market wants to know and what your business needs to be known for.",
    builds: [
      "SEO Content",
      "Thought Leadership",
      "Educational Content",
      "Industry Resources",
      "Website Content",
      "Conversion Content",
    ],
    result:
      "A body of knowledge that builds authority while supporting your wider growth system.",
  },
  {
    icon: Newspaper,
    title: "Digital PR",
    heading: "Let Other People Validate Your Authority",
    description:
      "Your business saying it's credible is one thing. Other credible sources recognizing it is another. We use Digital PR to build meaningful third-party recognition through relevant publications, industry platforms, media opportunities, and authoritative mentions.",
    builds: [
      "Digital PR Campaigns",
      "Media Outreach",
      "Authority Placements",
      "Industry Recognition",
      "Strategic Backlinks",
      "Brand Mentions",
    ],
    result:
      "Greater credibility, stronger recognition, and a wider digital footprint.",
  },
  {
    icon: BookOpen,
    title: "Wikipedia Consulting",
    heading: "Build A Stronger Knowledge Presence",
    description:
      "For businesses that meet Wikipedia's notability requirements, a properly developed presence can become an important part of their wider digital knowledge ecosystem. We provide strategic consulting around eligibility, sourcing, editorial preparation, and compliance with Wikipedia's standards.",
    builds: [
      "Notability Assessment",
      "Source Strategy",
      "Editorial Preparation",
      "Knowledge Presence Strategy",
      "Wikipedia Consulting",
    ],
    result:
      "A stronger and more structured representation of your business within the wider information ecosystem.",
  },
  {
    icon: ShieldCheck,
    title: "Reputation Management",
    heading: "Control The Impression Customers Get Before They Contact You",
    description:
      "Your sales team isn't the first person a prospect encounters. Your search results, reviews, business profiles, media mentions, and public information often are. We help businesses monitor and strengthen those touchpoints so the digital impression surrounding your company supports—not undermines—the buying decision.",
    builds: [
      "Reputation Monitoring",
      "Review Strategy",
      "Search Reputation",
      "Digital Presence Management",
      "Reputation Response Strategy",
    ],
    result:
      "Greater confidence before the first conversation ever happens.",
  },
];

const authoritySystem = [
  "Brand Strategy",
  "Search Visibility",
  "Content",
  "Entity SEO",
  "AI Search",
  "Digital PR",
  "Reputation",
];

const questions = [
  "Who are you?",
  "What do you do?",
  "Why should I trust you?",
  "Why should I choose you?",
];

export default function DigitalAuthority() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900 selection:bg-yellow-300 selection:text-slate-950">

      {/* HERO SECTION */}
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden border-b border-yellow-100 bg-slate-950">
        
        {/* Background Image with lighter linear gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')`
            }}
          />
          {/* Lighter linear gradient for higher clarity and less darkness */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="absolute left-1/2 top-[-100px] h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-yellow-400/15 blur-[130px]" />
          <div className="absolute right-[-100px] top-40 h-[300px] w-[300px] rounded-full bg-yellow-500/10 blur-[110px]" />
          <div className="absolute left-[-100px] top-64 h-[280px] w-[280px] rounded-full bg-yellow-300/10 blur-[110px]" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-[1180px] px-6 py-24 text-center lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-7 inline-flex cursor-default items-center gap-3 rounded-full border border-yellow-300/30 bg-yellow-500/10 px-5 py-2 text-sm font-black tracking-tight text-yellow-300 shadow-[0_8px_25px_rgba(234,179,8,0.15)] backdrop-blur-md"
            >
              {/* <Sparkles className="h-5 w-5 text-yellow-300" /> */}
              Digital Authority
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto max-w-5xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl"
            >
              Become the Business {" "}
              <span className="relative text-yellow-300">
               Customers Find, Trust & Choose
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.7 }}
                  className="absolute -bottom-2 left-0 h-1 w-full origin-left rounded-full bg-yellow-400"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-200"
            >
              Before a customer becomes a lead, they make a judgement about
              your business.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mx-auto mt-6 max-w-2xl space-y-2 text-sm font-medium text-yellow-300"
            >
              {[
                "They search for you.",
                "They compare you.",
                "They look at your website.",
                "They read what others say about you.",
                "They ask AI about your industry.",
              ].map((text, i) => (
                <motion.p key={i} variants={fadeUp}>
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mx-auto mt-8 max-w-3xl text-lg font-semibold leading-8 text-white"
            >
              Every one of those interactions contributes to one decision:
              <br />
              <span className="text-yellow-300">
                Can I trust this business enough to consider buying from them?
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mx-auto mt-6 max-w-3xl leading-7 text-slate-200"
            >
              Digital Authority is how we build that trust before your sales
              team ever enters the conversation.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mx-auto mt-5 max-w-4xl leading-7 text-slate-200"
            >
              SQL Centrix connects brand positioning, search visibility, AI
              search, content, entities, PR, and reputation into one
              authority-building system designed to make your business more
              visible,{" "}
              <span className="font-bold text-yellow-300">
                credible, and commercially relevant.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              <motion.a
                href="#assessment"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-xl border border-yellow-300/50 bg-white px-7 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-[0_12px_30px_rgba(234,179,8,0.25)] transition-all hover:bg-yellow-500 hover:text-white hover:shadow-[0_18px_45px_rgba(234,179,8,0.4)]"
              >
                <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/40 opacity-0 blur-sm transition-all duration-[1200ms] group-hover:left-[120%] group-hover:opacity-100" />

                <span className="relative z-10">
                  Build My Digital Authority
                </span>

                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          DIGITAL AUTHORITY STARTS
      ===================================================== */}
      <section className="bg-white px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid items-center gap-14 lg:grid-cols-2">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                Digital Authority Starts Before The Lead
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Build The Entire Digital   Environment  <span className="text-yellow-400">Surrounding Your Business</span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Most businesses think visibility means ranking on Google. But
                customers don't experience your business through one channel.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                They might discover you through search, encounter your content
                on LinkedIn, see your brand mentioned in an article, ask an AI
                platform about you, visit your website, and then search your
                reputation before deciding whether to contact you.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                That's why we don't treat authority as an SEO problem.  <span className="text-yellow-400">We build
                the entire digital environment surrounding your business.</span>
              </p>

              <p className="mt-6 font-bold text-slate-900">
                We make sure your business can answer:
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-5 grid gap-3 sm:grid-cols-2"
              >
                {questions.map((question) => (
                  <motion.div
                    key={question}
                    variants={{
                      hidden: { opacity: 0, x: -15 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4 },
                      },
                    }}
                    whileHover={{ scale: 1.02, x: 3 }}
                    className="flex items-center gap-3 rounded-xl border border-yellow-100 bg-white px-4 py-4 shadow-[0_8px_24px_rgba(234,179,8,0.08)] transition-all hover:border-yellow-300 hover:shadow-[0_12px_30px_rgba(234,179,8,0.14)]"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-yellow-500" />

                    <span className="text-sm font-semibold text-slate-700">
                      {question}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <p className="mt-6 leading-8 text-slate-600">
                When those answers are consistent across the web, your
                marketing has a stronger foundation to build on.
              </p>
            </motion.div>

            {/* SYSTEM CARD */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-[2rem] border border-yellow-200 bg-white p-7 shadow-[0_22px_65px_rgba(234,179,8,0.12)] transition-shadow duration-500 hover:shadow-[0_30px_80px_rgba(234,179,8,0.18)] sm:p-9"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-yellow-200/30 blur-3xl" />

              <div className="relative">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                  The Digital Authority System
                </span>

                <h3 className="mt-3 text-2xl font-black text-slate-950">
                  Connected Signals. One Authority System.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Digital authority is created through connected signals—not
                  one isolated service.
                </p>

                <div className="mt-7 space-y-2">
                  {authoritySystem.map((item, index) => (
                    <React.Fragment key={item}>
                      <motion.div
                        whileHover={{ scale: 1.02, x: 4 }}
                        className="flex items-center gap-4 rounded-xl border border-yellow-100 bg-white px-4 py-4 shadow-[0_7px_20px_rgba(234,179,8,0.06)] transition-all hover:border-yellow-300 hover:shadow-[0_10px_25px_rgba(234,179,8,0.12)]"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-100 text-xs font-black text-yellow-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="font-bold text-slate-800">
                          {item}
                        </span>
                      </motion.div>

                      {index < authoritySystem.length - 1 && (
                        <div className="ml-8 h-2 w-px bg-yellow-300" />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <motion.a
                  href="#assessment"
                  whileHover={{ x: 4 }}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-yellow-400 transition-colors hover:text-yellow-700"
                >
                  Get Your Digital Authority Assessment
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="border-y border-yellow-100 bg-yellow-50/25">
        <div className="mx-auto max-w-[1180px] px-6 py-20 lg:py-28">

          {/* <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
              Authority Building Services
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
               Digital <span className="text-yellow-300"> Authority Needs</span>
            </h2>
          </div> */}

          <div className="mt-14 space-y-7">
            {authorityServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.2 },
                  }}
                  className="group relative overflow-hidden rounded-[2rem] border border-yellow-100 bg-white p-7 shadow-[0_14px_40px_rgba(234,179,8,0.07)] transition-all duration-500 hover:border-yellow-300 hover:shadow-[0_25px_65px_rgba(234,179,8,0.16)] sm:p-9"
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-yellow-200/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative grid gap-8 lg:grid-cols-[1fr_0.85fr]">

                    <div>
                      <div className="flex items-start gap-4">
                       

                        <div>
                          <span className="text-xs font-black uppercase tracking-wider text-yellow-300">
                            {service.title}
                          </span>

                          <h3 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
                            {service.heading}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-6 leading-8 text-slate-600">
                        {service.description}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-yellow-100 bg-white p-6 shadow-[0_10px_30px_rgba(234,179,8,0.06)]">
                      <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                        We Build
                      </p>

                      <div className="mt-4 grid gap-2 sm:grid-cols-2">
                        {service.builds.map((item) => (
                          <motion.div
                            key={item}
                            whileHover={{
                              scale: 1.02,
                              x: 3,
                            }}
                            className="flex items-start gap-2 rounded-lg px-2 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-yellow-50"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
                            <span>{item}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-6 border-t border-yellow-100 pt-5">
                        <p className="text-xs font-black uppercase tracking-wider text-yellow-400">
                          The Result
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
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
          ONE SYSTEM
      ===================================================== */}
      <section className="bg-white px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-[2rem] border border-yellow-200 bg-white p-8 shadow-[0_22px_65px_rgba(234,179,8,0.11)] sm:p-12 lg:p-16"
          >
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-yellow-200/25 blur-3xl" />

            <div className="relative">
          
              <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                 One System. One <br /> <span className="text-yellow-300"> Position In The Market.</span>
              </h2>

              <div className="mt-10 space-y-4">
                {[
                  "Your brand establishes what you should be known for.",
                  "SEO makes you discoverable.",
                  "Content proves what you know.",
                  "Entity strategy establishes who you are.",
                  "AI optimization makes that knowledge accessible across new search environments.",
                  "Digital PR creates third-party validation.",
                  "Reputation reinforces the customer's final judgement.",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="text-lg font-medium leading-8 text-slate-700"
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

            <div className="group relative mt-10 overflow-hidden rounded-3xl border border-yellow-300/80 bg-white p-7 md:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-[0_20px_50px_rgba(234,179,8,0.20)]">

              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-200/30 blur-3xl transition-all duration-500 group-hover:bg-yellow-300/40" />

              <div className="absolute left-0 top-7 bottom-7 w-1 rounded-r-full bg-yellow-400 transition-all duration-500 group-hover:w-1.5" />

              <div className="relative pl-4">

                <div className="mb-5 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(234,179,8,0.55)]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.18em] text-yellow-600">
                    The Growth Infrastructure
                  </span>
                </div>

                <p className="text-base md:text-lg leading-8 font-semibold text-slate-700">
                  Together, these aren't separate marketing services. They're
                  <span className="text-slate-950"> the infrastructure </span>
                  that determines how your business is
                  <span className="text-yellow-600"> discovered, understood, and trusted.</span>
                </p>

                <div className="my-6 h-px w-full bg-gradient-to-r from-yellow-300 via-yellow-100 to-transparent" />

                <p className="text-base md:text-lg leading-8 text-slate-600">
                  And once customers can find you, understand you, and trust
                  you—the next question is
                  <span className="font-bold text-slate-900">
                    {" "}getting the right ones through the door.
                  </span>
                </p>

              </div>
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section
        id="assessment"
        className="relative overflow-hidden border-t border-yellow-100 bg-white"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200/30 blur-[120px]"
        />

        <div className="relative mx-auto max-w-[900px] px-6 py-24 text-center lg:py-28">

          <motion.div
            whileHover={{
              rotate: 10,
              scale: 1.1,
            }}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950 shadow-[0_12px_30px_rgba(234,179,8,0.28)]"
          >
            <Star className="h-6 w-6" />
          </motion.div>

          <h2 className="mt-7 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Ready To Build Your Digital <span className="text-yellow-400"> Authority?</span> 
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">
            We'll identify where your business is currently losing visibility,
            credibility, and authority—and what needs to change to turn your
            digital presence into a stronger foundation for customer
            acquisition.
          </p>

          <motion.div
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group mt-9 inline-block"
          >
            <a
              href="#contact"
              className="relative inline-flex items-center gap-3 overflow-hidden rounded-xl border border-yellow-400 bg-white px-7 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-[0_12px_30px_rgba(234,179,8,0.18)] transition-all duration-500 hover:bg-yellow-500 hover:text-white hover:shadow-[0_18px_45px_rgba(234,179,8,0.35)]"
            >
              <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 opacity-0 blur-sm transition-all duration-[1200ms] group-hover:left-[120%] group-hover:opacity-100" />

              <span className="relative z-10 transition-colors duration-300" >
                Book Your Digital Authority Strategy Session
              </span>

              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}