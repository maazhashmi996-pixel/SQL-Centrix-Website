"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="
            relative overflow-hidden rounded-[30px]
            border border-slate-200
            bg-white
            shadow-[0_25px_80px_rgba(15,23,42,0.08)]
          "
        >
          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300" />

          <div className="border-b border-slate-100 px-6 py-8 sm:px-9">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h1 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Let's Build Your Growth System
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Tell us a little about your business and growth goals so we can
                recommend the<span className="text-yellow-400"> right strategy and share insights relevant to your
                objectives.</span>
              </p>
            </motion.div>
          </div>

          <div className="px-6 py-8 sm:px-9 sm:py-10">
            {submitted ? (
              <div className="flex min-h-[300px] items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                  <Check className="h-7 w-7" />
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-800">
                    Business Email
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="Please enter your business email address."
                    className="
                      h-12 w-full rounded-xl
                      border border-slate-200
                      bg-slate-50/60
                      px-4
                      text-sm text-slate-900
                      outline-none
                      transition-all duration-300
                      placeholder:text-slate-400
                      hover:border-slate-300
                      focus:border-yellow-400
                      focus:bg-white
                      focus:ring-4
                      focus:ring-yellow-400/10
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-800">
                    Where is your business located?
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <select
                      required
                      defaultValue=""
                      className="
                        h-12 w-full appearance-none rounded-xl
                        border border-slate-200
                        bg-slate-50/60
                        px-4 pr-11
                        text-sm text-slate-900
                        outline-none
                        transition-all duration-300
                        hover:border-slate-300
                        focus:border-yellow-400
                        focus:bg-white
                        focus:ring-4
                        focus:ring-yellow-400/10
                      "
                    >
                      <option value="" disabled>
                        Select Country
                      </option>
                      <option value="PK">Pakistan</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="OTHER">Other</option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-800">
                    I am a:
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <select
                      required
                      defaultValue=""
                      className="
                        h-12 w-full appearance-none rounded-xl
                        border border-slate-200
                        bg-slate-50/60
                        px-4 pr-11
                        text-sm text-slate-900
                        outline-none
                        transition-all duration-300
                        hover:border-slate-300
                        focus:border-yellow-400
                        focus:bg-white
                        focus:ring-4
                        focus:ring-yellow-400/10
                      "
                    >
                      <option value="" disabled>
                        Select Role
                      </option>
                      <option value="Business Owner">Business Owner</option>
                      <option value="Founder">Founder</option>
                      <option value="Marketing Manager">
                        Marketing Manager
                      </option>
                      <option value="Sales Manager">Sales Manager</option>
                      <option value="CEO">CEO</option>
                      <option value="Startup">Startup</option>
                      <option value="Enterprise Representative">
                        Enterprise Representative
                      </option>
                      <option value="Other">Other</option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-800">
                    My business is interested in:
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <select
                      required
                      defaultValue=""
                      className="
                        h-12 w-full appearance-none rounded-xl
                        border border-slate-200
                        bg-slate-50/60
                        px-4 pr-11
                        text-sm text-slate-900
                        outline-none
                        transition-all duration-300
                        hover:border-slate-300
                        focus:border-yellow-400
                        focus:bg-white
                        focus:ring-4
                        focus:ring-yellow-400/10
                      "
                    >
                      <option value="" disabled>
                        Select an Option
                      </option>
                      <option value="Sales Qualified Lead Generation">
                        Sales Qualified Lead Generation
                      </option>
                      <option value="Performance Marketing">
                        Performance Marketing
                      </option>
                      <option value="SEO & AEO">SEO & AEO</option>
                      <option value="Website Design & Development">
                        Website Design & Development
                      </option>
                      <option value="CRM & Sales Automation">
                        CRM & Sales Automation
                      </option>
                      <option value="Conversion Rate Optimization (CRO)">
                        Conversion Rate Optimization (CRO)
                      </option>
                      <option value="Social Media Marketing">
                        Social Media Marketing
                      </option>
                      <option value="Brand Strategy">
                        Brand Strategy
                      </option>
                      <option value="Full Growth System">
                        Full Growth System
                      </option>
                      <option value="Not Sure — I Need a Strategy Session">
                        Not Sure — I Need a Strategy Session
                      </option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>

                <div className="space-y-4 border-t border-slate-100 pt-6">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      className="
                        mt-0.5 h-4 w-4 shrink-0
                        accent-yellow-400
                        cursor-pointer
                      "
                    />

                    <span className="text-xs leading-5 text-black">
                      By submitting this form, you consent to SQL Centrix
                      storing and processing the information  <span className="text-yellow-400">provided to
                      respond to your enquiry and deliver the services or
                      information you requested.</span>
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      className="
                        mt-0.5 h-4 w-4 shrink-0
                        accent-yellow-400
                        cursor-pointer
                      "
                    />

                    <span className="text-xs leading-5 text-black">
                      I would also like to receive growth insights, marketing
                      strategies, case studies, and updates from SQL Centrix.
                    </span>
                  </label>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                  <p className="text-xs leading-5 text-black">
                    We respect your privacy and are committed to protecting
                    your personal information. <span className="text-yellow-400"> Please review our Privacy Policy
                    to learn how we collect, use, and safeguard your personal
                    information. You can unsubscribe from our communications at
                    any time.</span>
                  </p>

                  <p className="mt-3 text-xs leading-5 text-black">
                    By clicking "Submit," you consent to SQL Centrix storing
                    and processing your information for  <span className="text-yellow-400"> the purpose of
                    contacting you regarding your enquiry and providing the
                    requested information.</span>
                  </p>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    group relative flex h-13 w-full
                    items-center justify-center gap-3
                    overflow-hidden rounded-xl
                    border border-yellow-400
                    bg-yellow-400
                    px-6
                    text-sm font-black uppercase tracking-[0.08em]
                    text-slate-950
                    shadow-[0_12px_30px_rgba(234,179,8,0.20)]
                    transition-all duration-300
                    hover:bg-yellow-300
                    hover:shadow-[0_18px_40px_rgba(234,179,8,0.28)]
                  "
                >
                  <span
                    className="
                      absolute inset-y-0 -left-20 w-16
                      rotate-12
                      bg-white/40
                      blur-md
                      transition-all duration-700
                      group-hover:left-[110%]
                    "
                  />

                  <span className="relative">Submit</span>

                  <span
                    className="
                      relative flex h-8 w-8
                      items-center justify-center
                      rounded-lg
                      bg-slate-950/10
                      transition-all duration-300
                      group-hover:bg-slate-950/15
                    "
                  >
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}