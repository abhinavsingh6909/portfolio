import React, { useState } from "react";
import { motion } from "framer-motion";
import { Network, Check, Sparkles } from "lucide-react";
import { SKILLS_ECOSYSTEM } from "../data/portfolioData";

export default function SkillsEcosystem() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", ...SKILLS_ECOSYSTEM.map((c) => c.category)];

  const displayedEcosystem =
    activeCategory === "ALL"
      ? SKILLS_ECOSYSTEM
      : SKILLS_ECOSYSTEM.filter((c) => c.category === activeCategory);

  return (
    <section id="stack" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/8 pb-8 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#e07a5f] tracking-widest uppercase mb-3">
            <Network size={14} />
            <span>05 // ARCHITECTURAL TOOLING</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            Technology Ecosystem.
          </h2>
        </div>

        <p className="text-sm sm:text-base text-white/60 font-light max-w-md leading-relaxed">
          No arbitrary 90% progress bars. A structured map of languages, frameworks, databases, and engineering principles deployed in production.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer border ${
              activeCategory === cat
                ? "bg-white/10 border-white/30 text-white shadow-md"
                : "bg-white/[0.02] border-white/6 text-white/50 hover:text-white hover:border-white/15"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Ecosystem System Matrix */}
      <div className="space-y-10">
        {displayedEcosystem.map((group) => (
          <div key={group.category} className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#e07a5f]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e07a5f]" />
              <span>{group.category}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {group.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -2 }}
                  className={`p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between gap-2.5 ${
                    skill.highlight
                      ? "bg-[#0d0f14] border-white/12 hover:border-white/25 shadow-sm"
                      : "bg-white/[0.02] border-white/6 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white tracking-wide">
                      {skill.name}
                    </span>
                    {skill.highlight && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                    )}
                  </div>

                  <span className="text-xs font-mono text-white/50">
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
