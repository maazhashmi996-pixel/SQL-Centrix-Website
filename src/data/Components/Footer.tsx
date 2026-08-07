"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { HiOutlineSparkles, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineOfficeBuilding, HiOutlineCheckCircle, HiOutlinePaperAirplane } from "react-icons/hi";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["1.5deg", "-1.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-1.5deg", "1.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <footer 
      ref={containerRef}
      id="contact" 
      className="relative pt-32 pb-20 px-6 lg:px-20 bg-white overflow-hidden text-slate-900 border-t border-amber-500/20 selection:bg-amber-500 selection:text-slate-950"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,158,11,0.12),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b12_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-20 border-b border-slate-200/80">
          
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-md">
                <HiOutlineSparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                <span>SEND US A MESSAGE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Let's discuss your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 font-serif italic font-normal tracking-normal">
                  growth goals.
                </span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Fill out the form below, and our team will get in touch with you shortly to discuss your requirements and the best way to help your business grow.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: HiOutlineOfficeBuilding, title: "Company Entity", value: "SQL Centrix Pvt. Ltd.", isAddress: false },
                { icon: HiOutlinePhone, title: "Direct Phone", value: "+92 320 6495098", isAddress: false },
                { icon: HiOutlineLocationMarker, title: "Office Headquarters", value: "House# 4, Ittehad Colony Allama Iqbal Town, Lahore, 54000", isAddress: true }
              ].map((item, idx) => (
                <div key={idx} className={`flex ${item.isAddress ? 'items-start' : 'items-center'} gap-4.5 p-5 rounded-2xl bg-white border border-amber-500/20 shadow-sm backdrop-blur-xl`}>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{item.title}</div>
                    <div className="text-slate-900 font-bold text-sm sm:text-base mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Social Links</div>
              <div className="flex items-center gap-3">
                {[
                  { icon: FaInstagram, href: "https://www.instagram.com/", label: "Instagram" },
                  { icon: FaLinkedinIn, href: "linkedin.com/feed", label: "Linkedin" },
                  { icon: FaFacebookF, href: "https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Foidc%2F%3Fapp_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignupviafb%252F%26response_type%3Dcode%26scope%3Dopenid%2Bemail%2Bprofile%2Blinking%26state%3DATqqRMnmsoZJ3WdUuA4YPqvQzonAdiu9QHJ9q6pVLKwRh94X4IGUuq0wAcWmJnDTi5qmpmnFzN76nHbxQs6cgcpyNDTDpT_X7ObeEKhH36R3CRicp-7uHxeD1kgeaSAwJGtmbLsRR8qkvHTZd31qPBLZOoDyfWL4o9-oxDAE8QsIHcuFP9KvOQJuhjjJMWWbgjdET27u20vE0qcdKxhJi2LTJWTzzhVu2OILpK4_fa_a7d3g48dbIkpiZdY0Ot0bwXjIw_1nYlftneENueEEsHf5qw", label: "Facebook" },
                  { icon: FaTiktok, href: "https://www.tiktok.com/en/", label: "Tiktok" },
                  { icon: FaYoutube, href: "https://www.youtube.com/", label: "Youtube" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-slate-950 hover:border-transparent transition-all duration-300 shadow-sm"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-amber-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.06)] space-y-6 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600" />

              {isSubmitted && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm font-semibold flex items-center gap-3">
                  <HiOutlineCheckCircle className="w-5 h-5 text-amber-600 animate-bounce" />
                  <span>Thank you! Your message has been received.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">First Name*</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-900 focus:border-amber-500 outline-none transition-all shadow-xs" required />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Last Name*</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-900 focus:border-amber-500 outline-none transition-all shadow-xs" required />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Email Address*</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-900 focus:border-amber-500 outline-none transition-all shadow-xs" required />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Phone Number*</label>
                <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-900 focus:border-amber-500 outline-none transition-all shadow-xs" required />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Organization</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-900 focus:border-amber-500 outline-none transition-all shadow-xs" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Purpose*</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-900 focus:border-amber-500 outline-none transition-all shadow-xs" required />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Message</label>
                <textarea rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-900 focus:border-amber-500 outline-none transition-all resize-none shadow-xs"></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-4.5 rounded-2xl shadow-md flex items-center justify-center gap-3 transition-all duration-300 border border-amber-300/30 cursor-pointer">
                <span>Speak With Our Team</span>
                <HiOutlinePaperAirplane className="w-4 h-4 -rotate-45" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}