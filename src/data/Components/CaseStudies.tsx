"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useSpring, useTransform, animate } from "framer-motion";
import { 
  HiOutlineSparkles, 
  HiOutlineArrowRight, 
  HiOutlineLightningBolt, 
  HiOutlineArrowDown,
  HiOutlineChevronDown
} from "react-icons/hi";

const diagramSteps = [
  { title: "Brand Strategy" },
  { title: "Website" },
  { title: "SEO & AI Search" },
  { title: "Content Marketing" },
  { title: "Social Media" },
  { title: "Advertising" },
  { title: "Authority Building" },
  { title: "Sales Qualified Leads" }
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

const faqData = [
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

function FaqItem({ faq, idx }: { faq: any; idx: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-amber-500/20 rounded-2xl bg-white overflow-hidden transition-all duration-300 shadow-xs hover:border-amber-400">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 focus:outline-none cursor-pointer gap-4"
      >
        <span className="text-base sm:text-lg flex items-center gap-3">
          <span className="text-amber-600 font-mono text-sm">#{String(idx + 1).padStart(2, '0')}</span>
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-amber-500 text-slate-950" : ""}`}>
          <HiOutlineChevronDown className="w-4 h-4" />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 mt-2">
          <p className="pt-4">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-30 px-6 lg:px-20 bg-white text-slate-900 relative overflow-hidden border-b border-amber-500/20 selection:bg-amber-500 selection:text-slate-950">
      
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-yellow-500/5 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-amber-400/10 via-yellow-400/5 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b12_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-28">

        <div className="pt-6 border-t border-slate-200/80 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              <HiOutlineSparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              Complete Growth Systems
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
               How Everything Works Together <span className="text-amber-600">(Diagram)</span>
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Instead of selling individual services we build complete growth systems.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-slate-50/80 border border-amber-500/20 rounded-[2.5rem] p-8 sm:p-12 shadow-sm space-y-6 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600" />
            
            <div className="space-y-4">
              {diagramSteps.map((step, sIdx) => {
                const isLast = sIdx === diagramSteps.length - 1;
                return (
                  <React.Fragment key={sIdx}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`p-5 rounded-2xl border transition-all shadow-xs mx-auto max-w-md ${
                        isLast 
                          ? "bg-slate-900 text-amber-400 border-amber-500/50 shadow-md font-extrabold text-xl" 
                          : "bg-white text-slate-800 border-amber-200/80 font-bold text-lg hover:border-amber-400"
                      }`}
                    >
                      {step.title}
                    </motion.div>
                    {!isLast && (
                      <div className="flex justify-center text-amber-600 my-1">
                        <HiOutlineArrowDown className="w-5 h-5 animate-bounce" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            <div className="pt-8 text-center border-t border-slate-200/80 space-y-6">
              <p className="text-slate-700 font-medium text-sm sm:text-base italic">
                Every touchpoint moves prospects closer to becoming customers.
              </p>
              
              <div className="space-y-3 max-w-md mx-auto">
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer"
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              <HiOutlineSparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              Strategic Advantage
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
               Why Businesses Choose SQL Centrix
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Your business doesn't need every marketing service. It needs the right combination of strategies that generate Sales Qualified Leads and support sustainable growth.
            </p>
            <p className="text-sm font-semibold text-amber-700 pt-1">
              Whether that's
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-amber-500/30 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_40px_rgba(245,158,11,0.06)] space-y-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {businessServicesList.map((service, sIdx) => (
                <div key={sIdx} className="flex items-center gap-3 p-4 rounded-2xl bg-amber-50/45 border border-amber-200/60 text-slate-800 text-sm font-bold hover:border-amber-400 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-50/80 via-yellow-50/50 to-amber-50/30 border border-amber-200 text-center space-y-2">
              <p className="text-lg font-bold text-amber-800">
                The services are simply the tools
              </p>
              <p className="text-xl font-black text-slate-900">
                Sales Qualified Leads remain the primary objective
              </p>
            </div>

            <div className="pt-8 border-t border-slate-100 text-center space-y-6 max-w-xl mx-auto">
              <div className="space-y-2">
                <p className="text-xl font-bold text-slate-800 tracking-tight">
                 Let's discuss your growth goals. 
                </p>
              </div>

              <div className="space-y-2">
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-base shadow-md transition-all group/btn border border-amber-300/30 cursor-pointer"
                >
                  <span>Speak With Our Team </span>
                  <HiOutlineArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-200/85 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
           
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
               Frequently Asked Questions
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Everything you need to know about working with SQL Centrix and our growth frameworks.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, idx) => (
              <FaqItem key={idx} faq={faq} idx={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
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
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full shadow-xs">
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





