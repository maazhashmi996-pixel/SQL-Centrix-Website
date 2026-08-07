"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useSpring, useTransform, animate } from "framer-motion";
import { 
  HiOutlineSparkles, 
  HiOutlineArrowRight, 
  HiOutlineBadgeCheck, 
  HiOutlineLightningBolt, 
  HiOutlineCheckCircle,
  HiOutlineArrowDown
} from "react-icons/hi";

const caseStudiesData = [
  {
    title: "Building an End-to-End Customer Acquisition & Sales System",
    industry: "Digital Marketing & Advertising",
    description: "Desiro partnered with SQL Centrix to build more than a lead generation campaign. We designed a complete customer acquisition system that connected performance marketing with sales operations and customer success. From Meta advertising and WhatsApp lead generation to Bitrix24 CRM implementation, sales pipeline automation, and onboarding workflows, every stage was built to help the business convert more enquiries into long-term clients.",
    metrics: [
      { value: "+7,914", label: "WhatsApp Conversations" },
      { value: "+435K", label: "People Reached" },
      { value: "+1.7M", label: "Impressions Delivered" },
      { value: "0.66", label: "Lowest Cost per Conversation (AED)" },
    ],
  },
  {
    title: "Scaling an E-Commerce Brand Through Performance Marketing",
    industry: "E-Commerce & Beauty",
    description: "Kryalon Store partnered with SQL Centrix to build a scalable performance marketing system focused on profitable customer acquisition. Rather than simply launching advertisements, we developed a structured framework for creative testing, audience targeting, campaign optimization, and conversion tracking. By continuously analyzing performance data and refining campaigns, we helped the brand scale online sales while maintaining efficient advertising costs through a data-driven optimization process.",
    metrics: [
      { value: "+856", label: "Purchases" },
      { value: "+5.8M", label: "Impressions Delivered" },
      { value: "+73K", label: "Website Clicks" },
      { value: "0.76", label: "Average CPM (AED)" },
    ],
  },
  {
    title: "Building a Scalable Performance Marketing System",
    industry: "Beauty & Cosmetics",
    description: "EVE Beauty partnered with SQL Centrix to build a scalable customer acquisition system across multiple beauty brands. Rather than simply managing paid advertisements, we developed a structured performance marketing framework that combined creative strategy, audience research, campaign architecture, and continuous optimization. Through ongoing creative testing, media buying, and data-driven decision making, every campaign was designed to improve customer acquisition efficiency while supporting long-term e-commerce growth.",
    metrics: [
      { value: "$3,000", label: "Advertising Spend" },
      { value: "+19.5M", label: "Paid Impressions" },
      { value: "364,999", label: "Website Clicks" },
      { value: "+7M", label: "2-Second Video Views" },
    ],
  },
  {
    title: "Driving High-Intent B2B Search Demand Through Google Ads",
    industry: "Telecommunications & Enterprise Connectivity",
    description: "ZAM UK VODA partnered with SQL Centrix to strengthen its Google Search presence and capture high-intent business enquiries within the telecommunications sector. Rather than focusing on broad awareness, the objective was to place the brand in front of decision-makers actively searching for connectivity and communication solutions, ensuring advertising spend generated qualified opportunities instead of low-quality traffic.",
    metrics: [
      { value: "+3.48K", label: "Clicks" },
      { value: "+125K", label: "Impressions" },
      { value: "$17.2K", label: "Ad Investment Managed" },
      { value: "$4.94", label: "Average Cost Per Click" },
    ],
  },
];

const diagramSteps = [
  {
    title: "Brand Strategy",
    description: "Defining your unique market positioning, core messaging, and ideal customer profile to establish a powerful foundation."
  },
  {
    title: "Website",
    description: "Engineering high-converting, lightning-fast digital experiences designed to turn casual visitors into high-intent prospects."
  },
  {
    title: "SEO & AI Search",
    description: "Optimizing your digital presence for traditional engines and next-gen AI platforms (ChatGPT, Perplexity) to capture organic demand."
  },
  {
    title: "Content Marketing",
    description: "Deploying authoritative, targeted content that educates buyers, addresses pain points, and builds undeniable industry trust."
  },
  {
    title: "Social Media",
    description: "Executing strategic brand touchpoints across social channels to maximize visibility, engagement, and community trust."
  },
  {
    title: "Advertising",
    description: "Scaling high-ROI paid campaigns across Google, Meta, and LinkedIn engineered exclusively for lower-funnel conversions."
  },
  {
    title: "Authority Building",
    description: "Establishing market leadership through PR, case studies, and digital proof that removes all friction from the buying decision."
  },
  {
    title: "Sales Qualified Leads",
    description: "Delivering vetted, high-value prospective clients directly to your sales team with clear intent to buy."
  }
];

const businessServicesList = [
  "SEO",
  "AI Search Optimization",
  "Website Development",
  "Paid Ads Management",
  "Social Media Management",
  "Influencer Marketing",
  "Content Strategy",
  "Branding",
  "Creative Design",
  "Video Production",
  "Content Writing"
];

const faqsData = [
  {
    question: "Why is SQL Centrix different from other marketing agencies?",
    answer: "Because our success isn't measured by impressions, followers, or traffic alone. Every strategy we build is designed to generate Sales Qualified Leads—qualified prospects who are genuinely ready to engage with your business."
  },
  {
    question: "Can SQL Centrix work with existing marketing teams?",
    answer: "Absolutely. We can complement your internal team by providing specialized expertise, strategic guidance, or managing specific growth initiatives while keeping everyone aligned around the same goal: generating more Sales Qualified Leads."
  },
  {
    question: "What is a Sales Qualified Lead (SQL), and how does SQL Centrix generate them?",
    answer: "A Sales Qualified Lead (SQL) is a prospective client who has been vetted, meets your specific ideal customer profile (ICP), and exhibits clear intent to buy. Unlike traditional marketing agencies that focus on vanity metrics like impressions or clicks, SQL Centrix builds integrated digital growth systems—combining brand positioning, high-converting websites, paid media, and SEO—to bring you qualified opportunities ready for sales conversion."
  },
  {
    question: "How does SQL Centrix differ from traditional digital marketing agencies?",
    answer: "Most marketing agencies sell isolated services (like social media management or basic traffic campaigns). We invest in business outcomes. Our process starts at the end goal: revenue generation. Every strategy, piece of content, and ad campaign we run is engineered as part of a complete ecosystem designed exclusively to yield Sales Qualified Leads."
  },
  {
    question: "What is AI Search Optimization, and why is it important for lead generation?",
    answer: "AI Search Optimization (LLMO/GEO) ensures your brand is indexed, cited, and recommended by AI engines (like ChatGPT, Gemini, and Perplexity) as well as traditional search engines like Google. As buyers increasingly rely on AI tools to research solutions, structured and authoritative content positions your business as the primary recommended answer."
  },
  {
    question: "Can SQL Centrix collaborate with our in-house marketing team?",
    answer: "Yes. We regularly operate alongside internal marketing teams. Whether acting as an extended performance arm, providing high-level strategy, or handling specific execution channels like search visibility, digital PR, or advertising, we align all efforts toward a single goal: increasing your SQL volume."
  },
  {
    question: "How long does it take to see results from an SQL Centrix growth system?",
    answer: "Timelines depend on the channel mix. Paid media (Google Ads, targeted social campaigns) can generate qualified inbound enquiries within days, while organic strategies like SEO, authority building, and content marketing compound over 3 to 6 months to establish long-term market dominance."
  },
  {
    question: "Which industries does SQL Centrix specialize in?",
    answer: "We work primarily with B2B companies, high-ticket service providers, technology platforms, and growth-stage enterprises. If your business relies on high-value sales cycles where lead quality matters significantly more than volume, our SQL framework is built for you."
  }
];

function MetricCounter({ value }: { value: string }) {
  const numericVal = parseFloat(value.replace(/[^0-9.]/g, ""));
  const hasPlus = value.startsWith("+");
  const hasX = value.endsWith("x");
  const hasPercent = value.endsWith("%");

  const count = useSpring(0, { stiffness: 50, damping: 20 });
  const rounded = useTransform(count, (latest) => {
    if (value.includes(".")) {
      return latest.toFixed(2);
    }
    return Math.round(latest).toString();
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView && !isNaN(numericVal)) {
      animate(count, numericVal, { duration: 2.2, ease: "easeOut" });
    } else if (!isInView) {
      count.set(0);
    }
  }, [isInView, numericVal, count]);

  if (isNaN(numericVal)) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref} className="inline-flex items-center gap-0.5">
      {value.startsWith("$") && "$"}
      {hasPlus && "+"}
      <motion.span>{rounded}</motion.span>
      {value.includes("AED") && " AED"}
      {hasPercent && "%"}
      {hasX && "x"}
    </span>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 px-6 lg:px-20 bg-white text-slate-900 relative overflow-hidden border-b border-amber-500/20 selection:bg-amber-500 selection:text-slate-950">
      
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-yellow-500/5 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-amber-400/10 via-yellow-400/5 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b12_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-32">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
            <HeaderCopy />

            <motion.div 
              initial={{ opacity: 0, rotateY: 25, x: -30 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformPerspective: 1000 }}
              className="p-8 rounded-[2.5rem] bg-white text-slate-900 space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden border border-amber-500/30 backdrop-blur-xl group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-yellow-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600" />

              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-sm">
                <HiOutlineBadgeCheck className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold tracking-tight text-slate-900">Ready to scale your brand?</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Let's design a custom growth roadmap tailored specifically for your business objectives in Lahore and globally.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <HiOutlineCheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Dedicated Growth Team & Strategy</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <HiOutlineCheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Guaranteed Transparent Reporting</span>
                </div>
              </div>

              <motion.a 
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(245, 158, 11, 0.25)" }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm shadow-md transition-all duration-300 group/btn border border-amber-300/30 cursor-pointer"
              >
                <span>Book a Strategy Call</span>
                <HiOutlineArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </motion.a>
            </motion.div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudiesData.map((cs, idx) => (
              <CaseStudyCard key={idx} cs={cs} idx={idx} />
            ))}
          </div>

        </div>

        <div className="pt-16 border-t border-slate-200/80 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider">
              <HiOutlineSparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              Company Overview
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Who We Are & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600">Our Track Record</span>
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Delivering data-driven results across multiple industries and global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { label: "Combined Experience", value: "10+ Years" },
              { label: "Industries Served", value: "25+ (Fintech to Real Estate)" },
              { label: "Channels Managed", value: "TikTok, YouTube, Meta, Google, LinkedIn & More" },
              { label: "Businesses Worked With", value: "50+ Global Partners" },
              { label: "Campaigns Launched", value: "500+ Performance Campaigns" },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-amber-500/20 shadow-sm space-y-2 text-center">
                <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-16 border-t border-slate-200/80 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider">
              <HiOutlineSparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              Expert Answers
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600">Questions</span>
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Everything you need to know about our SQL methodology and partnership approach.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqsData.map((faq, fIdx) => (
              <div key={fIdx} className="p-6 rounded-2xl bg-white border border-amber-500/20 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-900">{faq.question}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-16 border-t border-slate-200/80 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider">
              <HiOutlineSparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              Complete Growth Systems
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              How Everything Works Together <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600">(Ecosystem Blueprint)</span>
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Instead of selling isolated services, we architect connected growth ecosystems where every tier amplifies the next.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-50/80 border border-slate-200/90 rounded-[2.5rem] p-8 sm:p-12 shadow-sm space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {diagramSteps.map((step, sIdx) => {
                const isLast = sIdx === diagramSteps.length - 1;
                return (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`p-6 rounded-2xl border transition-all flex flex-col justify-between space-y-3 shadow-xs ${
                      isLast 
                        ? "md:col-span-2 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white border-amber-500/50 shadow-md" 
                        : "bg-white text-slate-900 border-slate-200/80 hover:border-amber-400"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg ${isLast ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" : "bg-amber-50 text-amber-800 border border-amber-200/80"}`}>
                        #{String(sIdx + 1).padStart(2, '0')}
                      </span>
                      {!isLast && (
                        <span className="text-amber-600">
                          <HiOutlineArrowDown className="w-4 h-4 animate-bounce" />
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold tracking-tight mb-1 ${isLast ? "text-amber-400 text-xl" : "text-slate-900"}`}>
                        {step.title}
                      </h4>
                      <p className={`text-xs sm:text-sm leading-relaxed ${isLast ? "text-slate-300" : "text-slate-600"}`}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-8 text-center border-t border-slate-200/80 space-y-6">
              <p className="text-slate-700 font-medium text-sm sm:text-base italic">
                Every integrated touchpoint moves high-intent prospects closer to becoming loyal, high-value customers.
              </p>
              
              <div className="space-y-3 max-w-xl mx-auto p-6 rounded-2xl bg-white border border-amber-200 shadow-xs">
                <h4 className="text-sm font-bold uppercase tracking-wider text-amber-800">Curious how this works for your business?</h4>
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-slate-950 text-white font-bold text-sm transition-all shadow-sm cursor-pointer"
                >
                  <span>Let's Talk Strategy</span>
                  <HiOutlineArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-200/85 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider">
              <HiOutlineSparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              Strategic Advantage
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Why Businesses Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600">SQL Centrix</span>
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Your business doesn't need every marketing service under the sun. It needs the precise combination of strategies that generate Sales Qualified Leads and support sustainable revenue growth.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-amber-500/30 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_40px_rgba(245,158,11,0.06)] space-y-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {businessServicesList.map((service, sIdx) => (
                <div key={sIdx} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-slate-800 text-sm font-semibold hover:border-amber-400 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-50/80 via-yellow-50/50 to-amber-50/30 border border-amber-200 text-center space-y-2">
              <p className="text-sm font-bold text-amber-900 uppercase tracking-wide">The Core Objective</p>
              <p className="text-lg font-extrabold text-slate-900">
                The services are simply the tools • Sales Qualified Leads remain the primary objective
              </p>
            </div>

            <div className="pt-8 border-t border-slate-100 text-center space-y-6 max-w-xl mx-auto">
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Let's discuss your growth goals.</h4>
                <p className="text-2xl font-black text-slate-900 tracking-tight">
                  Ready to transform your digital pipeline?
                </p>
              </div>

              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-base shadow-md transition-all group/btn border border-amber-300/30 cursor-pointer"
              >
                <span>Speak With Our Team</span>
                <HiOutlineArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function HeaderCopy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false }); 

  return (
    <div ref={ref} className="space-y-4 text-left">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, y: -20 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: -20 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-md"
      >
        <HiOutlineSparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
        <span>Proven Results & Case Studies</span>
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(10px)" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]"
      >
        Performance Systems <br />
        Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 font-serif italic font-normal tracking-normal">Global</span> Partners.
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal"
      >
        Discover how our data-driven growth frameworks scale revenue and accelerate user acquisition with absolute precision.
      </motion.p>
    </div>
  );
}

function CaseStudyCard({ cs, idx }: { cs: any; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    margin: "-15% 0px -15% 0px",
    once: false,
  });

  const initialX = idx % 2 === 0 ? -60 : 60;
  const initialY = 50;

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, x: initialX, y: initialY, rotateZ: idx % 2 === 0 ? -3 : 3 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, rotateZ: 0 } : { opacity: 0, x: initialX, y: initialY, rotateZ: idx % 2 === 0 ? -3 : 3 }}
      transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        borderColor: "rgba(245, 158, 11, 0.6)",
        boxShadow: "0 30px 60px -15px rgba(245, 158, 11, 0.18)"
      }}
      className="bg-white rounded-[2.2rem] p-7 border border-amber-500/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)] backdrop-blur-xl flex flex-col justify-between space-y-6 group transition-all duration-300 relative overflow-hidden text-left"
    >
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full shadow-xs">
            <HiOutlineLightningBolt className="w-3 h-3 text-amber-600 animate-pulse" />
            {cs.industry}
          </span>
          <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/80">
            #{String(idx + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug tracking-tight">
          {cs.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed">
          {cs.description}
        </p>
      </div>

      <div className="space-y-4 pt-4 border-t border-slate-100">
        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Key Business Outcomes</div>
        
        <div className="grid grid-cols-2 gap-3">
          {cs.metrics.map((m: any, mIdx: number) => (
            <div key={mIdx} className="p-3 rounded-xl bg-amber-50/40 border border-amber-100 space-y-1">
              <div className="text-lg font-black text-slate-900 font-mono tracking-tight">
                <MetricCounter value={m.value} />
              </div>
              <div className="text-[11px] font-medium text-slate-600 leading-tight">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}