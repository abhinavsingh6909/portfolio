import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Terminal, Sparkles, Check } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function Hero({ onOpenResume, onCopyEmail, hasCopiedEmail }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Calculate normalized offset from center (-1 to 1)
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle radial glow that gently moves with cursor */}
      <motion.div
        animate={{
          x: mousePos.x * 25,
          y: mousePos.y * 25,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 200 }}
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-gradient-to-tr from-[#e07a5f]/10 via-[#f59e0b]/5 to-transparent blur-[120px] rounded-full"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col justify-between">
        {/* Top Telemetry Line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-mono border-b border-white/8 pb-4"
        >
          <div className="flex items-center gap-2 text-white/70">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
            </span>
            <span className="tracking-widest uppercase text-white/80">
              {PROFILE.availability}
            </span>
          </div>

          <div className="flex items-center gap-4 text-white/40 tracking-wider">
            <span>DELHI, IN</span>
            <span className="text-white/20">•</span>
            <span>600+ LEETCODE SOLVED</span>
            <span className="text-white/20">•</span>
            <span className="text-[#e07a5f]">2026 CYCLE</span>
          </div>
        </motion.div>

        {/* Hero Title Block */}
        <div className="my-auto py-6 sm:py-10">
          {/* Small Status Subhead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-[1px] w-6 bg-[#e07a5f]" />
            <p className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-[#e07a5f]">
              {PROFILE.statusLine}
            </p>
          </motion.div>

          {/* Main Large Editorial Typography */}
          <motion.div
            style={{
              x: mousePos.x * 6,
              y: mousePos.y * 4,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 250 }}
            className="space-y-1 sm:space-y-3"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase font-display leading-[0.95]"
            >
              I BUILD PRODUCTS,
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white/40 hover:text-white transition-colors duration-500 uppercase font-display leading-[0.95]"
            >
              NOT JUST WEBSITES.
            </motion.h1>
          </motion.div>

          {/* Hero Narrative Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 text-base sm:text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed"
          >
            Hi, I'm <span className="text-white font-medium">Abhinav Singh</span> — a software engineer uniting{" "}
            <span className="text-white border-b border-white/20">systems engineering</span>,{" "}
            <span className="text-white border-b border-white/20">product thinking</span>, and{" "}
            <span className="text-white border-b border-white/20">meticulous frontend craft</span>. Focused on creating resilient web architectures and interactive products that scale.
          </motion.p>

          {/* CTAs and Interactive Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            {/* Primary Work CTA */}
            <button
              onClick={scrollToWork}
              className="group relative px-6 py-3.5 rounded-lg bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all duration-200 hover:bg-white/90 shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <span>VIEW MY WORK</span>
              <ArrowDown
                size={14}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </button>

            {/* Let's Connect CTA */}
            <button
              onClick={scrollToContact}
              className="px-6 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-mono text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>LET'S CONNECT</span>
              <ArrowUpRight size={14} className="text-[#e07a5f]" />
            </button>

            {/* Quick Email Copy Button */}
            <button
              onClick={onCopyEmail}
              className="px-4 py-3.5 rounded-lg bg-transparent hover:bg-white/5 border border-white/10 text-white/70 hover:text-white font-mono text-xs tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer"
              title="Copy direct email address"
            >
              {hasCopiedEmail ? (
                <>
                  <Check size={14} className="text-[#10b981]" />
                  <span className="text-[#10b981]">EMAIL COPIED</span>
                </>
              ) : (
                <>
                  <Terminal size={14} className="text-white/40" />
                  <span className="truncate max-w-[170px] sm:max-w-none">
                    {PROFILE.email}
                  </span>
                </>
              )}
            </button>
          </motion.div>
        </div>

        {/* Bottom Interactive Spec Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-6 border-t border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-white/45"
        >
          <div className="flex items-center gap-3">
            <span className="text-[#e07a5f] font-semibold">// ENGINEERING CORE:</span>
            <span>JAVA • REACT • NODE • MONGODB • SQL • DSA</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-white/35">
            <Sparkles size={12} className="text-[#e07a5f]" />
            <span>INTERACTIVE EDITORIAL INTERFACE • SCROLL TO EXPLORE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
