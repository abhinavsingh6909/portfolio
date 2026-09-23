import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Copy, Check, Terminal, Sparkles } from "lucide-react";
import { CODE_SNIPPETS } from "../data/portfolioData";

export default function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const snippet = CODE_SNIPPETS[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/8 bg-[#07080a] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/8 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#e07a5f] tracking-widest uppercase mb-3">
              <Code size={14} />
              <span>04 // CODE AS CRAFT</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
              Code as Design.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/60 font-light max-w-md leading-relaxed">
            Clean abstractions, resilient interfaces, and zero unnecessary boilerplate. A selection of real-world implementation snippets.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {CODE_SNIPPETS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(idx);
                setCopied(false);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer border ${
                activeTab === idx
                  ? "bg-white/10 border-white/30 text-white shadow-md"
                  : "bg-white/[0.02] border-white/6 text-white/50 hover:text-white hover:border-white/15"
              }`}
            >
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Code Frame */}
        <div className="rounded-2xl border border-white/10 bg-[#0d0f14] overflow-hidden shadow-2xl">
          {/* Editor Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/8 bg-black/40 text-xs font-mono text-white/50">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <span className="text-white/80 font-medium">{snippet.title}</span>
              <span className="text-white/30">•</span>
              <span className="text-[10px] text-[#e07a5f] uppercase tracking-wider">
                {snippet.language}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer text-[11px]"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-[#10b981]" />
                  <span className="text-[#10b981]">COPIED</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>COPY CODE</span>
                </>
              )}
            </button>
          </div>

          {/* Code Viewer Body */}
          <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm text-white/85 overflow-x-auto leading-relaxed bg-[#0a0c10]">
            <pre>
              <code>{snippet.code}</code>
            </pre>
          </div>

          {/* Caption Footer */}
          <div className="px-6 py-4 border-t border-white/8 bg-black/30 flex items-center gap-2 text-xs font-mono text-white/50">
            <Sparkles size={13} className="text-[#e07a5f]" />
            <span>{snippet.caption}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
