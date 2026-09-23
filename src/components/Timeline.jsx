import React from "react";
import { motion } from "framer-motion";
import { Milestone, GraduationCap, Briefcase, Code, Sparkles } from "lucide-react";
import { TIMELINE } from "../data/portfolioData";

export default function Timeline() {
  return (
    <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/8 bg-[#090b0e] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/8 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#e07a5f] tracking-widest uppercase mb-3">
              <Milestone size={14} />
              <span>06 // TRAJECTORY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
              Engineering Journey.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/60 font-light max-w-md leading-relaxed">
            Deliberate progression from theoretical computer science foundations to shipping production software and mastering systems engineering.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-32 space-y-12 sm:space-y-16 py-4">
          {TIMELINE.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Year marker on the left for desktop */}
              <div className="sm:absolute sm:-left-32 sm:top-0 text-xs font-mono font-bold text-[#e07a5f] tracking-widest mb-1 sm:mb-0">
                {item.year}
              </div>

              {/* Dot on the timeline */}
              <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#090b0e] border-2 border-white/40 group-hover:border-[#e07a5f] group-hover:bg-[#e07a5f] transition-all" />

              {/* Milestone Content Card */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/8 group-hover:border-white/15 transition-all space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-display font-semibold text-white">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-white/40">
                    {item.institution}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
