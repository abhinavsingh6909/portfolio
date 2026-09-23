import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  ExternalLink,
  Cpu,
  Layers,
  Search,
  Share2,
  GitBranch,
  Hash,
  Columns,
  RotateCcw,
  TrendingUp,
  Network,
  Sparkles,
} from "lucide-react";
import { DSA_DATA } from "../data/portfolioData";

export default function DsaSection() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const iconMap = {
    Columns: Columns,
    Hash: Hash,
    GitBranch: GitBranch,
    Layers: Layers,
    Search: Search,
    Network: Network,
    TrendingUp: TrendingUp,
    Share2: Share2,
    Cpu: Cpu,
    RotateCcw: RotateCcw,
  };

  const activeCategory = DSA_DATA.categories[selectedCategoryIndex];

  return (
    <section id="dsa" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/8 pb-8 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#e07a5f] tracking-widest uppercase mb-3">
            <Code2 size={14} />
            <span>03 // ALGORITHMIC RIGOR · PROBLEM SOLVING</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            How I Think.
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="text-3xl font-display font-bold text-white tracking-tight">
              {DSA_DATA.totalSolved}
            </div>
            <div className="text-xs font-mono text-white/50 leading-tight">
              <span>LEETCODE</span>
              <br />
              <span className="text-[#10b981]">PROBLEMS SOLVED</span>
            </div>
          </div>

          <a
            href={DSA_DATA.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-white tracking-wider uppercase transition-all"
          >
            <span>VERIFY PROFILE</span>
            <ExternalLink size={13} className="text-[#e07a5f]" />
          </a>
        </div>
      </div>

      {/* Subhead philosophy */}
      <p className="text-base sm:text-lg text-white/70 font-light max-w-3xl leading-relaxed mb-12">
        {DSA_DATA.subheadline}
      </p>

      {/* Interactive Problem Solving Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Categories Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {DSA_DATA.categories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Cpu;
            const isSelected = selectedCategoryIndex === idx;

            return (
              <motion.div
                key={cat.name}
                onClick={() => setSelectedCategoryIndex(idx)}
                whileHover={{ y: -2 }}
                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 ${
                  isSelected
                    ? "bg-[#13161f] border-white/30 shadow-lg"
                    : "bg-white/[0.02] border-white/6 hover:bg-white/[0.04] hover:border-white/15"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`p-2 rounded-lg border ${
                        isSelected
                          ? "bg-[#e07a5f]/15 border-[#e07a5f]/40 text-[#e07a5f]"
                          : "bg-white/5 border-white/10 text-white/60"
                      }`}
                    >
                      <IconComponent size={16} />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      {cat.name}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-white/30">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs text-white/60 font-light line-clamp-2">
                  {cat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Category Deep Dive Panel */}
        <div className="lg:col-span-4 bg-[#0d0f14] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 sticky top-24 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/8 pb-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#e07a5f]">
              PATTERN ANALYSIS
            </span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">
              CORE RIGOR
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              {activeCategory.name}
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              {activeCategory.description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/8 space-y-1.5">
            <div className="text-[11px] font-mono tracking-wider uppercase text-white/40 flex items-center gap-1.5">
              <Sparkles size={12} className="text-[#38bdf8]" />
              <span>ALGORITHMIC INTUITION</span>
            </div>
            <p className="text-xs font-mono text-[#38bdf8] leading-relaxed">
              {activeCategory.highlight}
            </p>
          </div>

          <div className="pt-2 border-t border-white/8 text-[11px] font-mono text-white/40 space-y-2">
            <div>// TIME / SPACE COMPLEXITY:</div>
            <div className="text-white/70">
              Optimized for minimal auxiliary space and amortized runtime bounds.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
