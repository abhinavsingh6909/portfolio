import React from "react";
import { motion } from "framer-motion";
import { User, Music, Palette, Dumbbell, BookOpen, Terminal, CheckCircle2 } from "lucide-react";
import { PROFILE, BEYOND_CODE, CURRENT_BUILDING } from "../data/portfolioData";
import profileImg from "../assets/profile.png";

export default function AboutSection({ onOpenResume }) {
  const iconMap = {
    Piano: Music,
    "Drawing & Visual Arts": Palette,
    "Fitness & Discipline": Dumbbell,
    "Continuous Learning": BookOpen,
  };

  return (
    <section id="about" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/8 pb-8 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#e07a5f] tracking-widest uppercase mb-3">
            <User size={14} />
            <span>07 // EDITORIAL BIOGRAPHY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            About Abhinav.
          </h2>
        </div>

        <p className="text-sm sm:text-base text-white/60 font-light max-w-md leading-relaxed">
          The human behind the systems: why I build, what drives my standards, and what I focus on outside the compiler.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Portrait & Live Status Panel */}
        <div className="lg:col-span-5 space-y-8">
          {/* Portrait Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d0f14] max-w-md">
            <img
              src={profileImg}
              alt={PROFILE.name}
              className="w-full h-auto object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
              <span className="text-white font-medium">{PROFILE.name}</span>
              <span className="text-white/60">{PROFILE.education.degree}</span>
            </div>
          </div>

          {/* Currently Building Status Panel */}
          <div className="p-6 rounded-2xl bg-[#0d0f14] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/8 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-white/70">
                <Terminal size={14} className="text-[#10b981]" />
                <span className="tracking-widest uppercase">CURRENTLY BUILDING</span>
              </div>
              <span className="text-[10px] font-mono text-white/40">
                LOG: {CURRENT_BUILDING.lastUpdated}
              </span>
            </div>

            <div className="space-y-2.5">
              {CURRENT_BUILDING.focusAreas.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs font-mono text-white/80">
                  <span className="text-[#e07a5f] mt-0.5">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-white/8 text-[11px] font-mono text-white/40 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
              <span>ACTIVE SYSTEM STATUS: ALL ROADMAPS ON TRACK</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Bio & Beyond Code */}
        <div className="lg:col-span-7 space-y-12">
          {/* Bio Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg text-white/75 font-light leading-relaxed">
            <p>
              I like understanding <span className="text-white font-normal">how things work from first principles</span> — breaking complicated architectural problems into smaller, manageable primitives, and turning ambitious concepts into resilient software.
            </p>

            <p>
              I began with modern frontend engineering, obsessing over interaction ergonomics, typography hierarchy, and sub-second page performance. That naturally expanded into full-stack engineering — architecting relational schemas, designing idempotent REST APIs, and securing distributed payment flows.
            </p>

            <p>
              Today, I am deliberately reinforcing the core foundations of computer science: <span className="text-white font-normal">Data Structures & Algorithms</span> (with 600+ LeetCode problems solved), Object-Oriented Design, Low-Level Design (LLD), and high-throughput Java concurrency.
            </p>

            {/* Core Values Chips */}
            <div className="pt-4 border-t border-white/8 flex flex-wrap gap-2 text-xs font-mono">
              <span className="text-white/40 mr-2 uppercase self-center">// VALUES:</span>
              {["CLARITY", "CRAFT", "PERFORMANCE", "USER EXPERIENCE", "SYSTEM RESILIENCE", "CONTINUOUS LEARNING"].map((v) => (
                <span key={v} className="px-3 py-1 rounded bg-white/5 border border-white/8 text-white/80">
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Beyond Code Section */}
          <div className="space-y-6 pt-8 border-t border-white/8">
            <div>
              <div className="text-xs font-mono tracking-widest uppercase text-[#e07a5f] mb-2">
                // BEYOND THE TERMINAL
              </div>
              <h3 className="text-2xl font-display font-semibold text-white">
                Human Dimensions.
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BEYOND_CODE.map((item) => {
                const Icon = iconMap[item.title] || Music;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl bg-white/[0.02] border border-white/8 space-y-2 hover:border-white/15 transition-all"
                  >
                    <div className="flex items-center gap-2.5 text-white font-medium text-sm">
                      <div className="p-1.5 rounded-md bg-white/5 text-[#e07a5f]">
                        <Icon size={14} />
                      </div>
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-white/60 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
