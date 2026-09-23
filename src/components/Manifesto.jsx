import React from "react";
import { motion } from "framer-motion";
import { MANIFESTO } from "../data/portfolioData";
import { Compass } from "lucide-react";

export default function Manifesto() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-y border-white/8 relative bg-[#090b0e]">
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#e07a5f] uppercase mb-10">
          <Compass size={14} />
          <span>00 // ENGINEERING PHILOSOPHY</span>
        </div>

        {/* Big Editorial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-display font-medium text-white tracking-tight leading-[1.25]">
            "{MANIFESTO.quote}"
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-white/8">
            <div className="md:col-span-4 text-xs font-mono uppercase tracking-widest text-white/40">
              CRAFT & ARCHITECTURE
            </div>
            <div className="md:col-span-8">
              <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                {MANIFESTO.body}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
