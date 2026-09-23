import React from "react";
import { ArrowUp, Github, Linkedin, ExternalLink } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/8 py-16 px-4 sm:px-6 lg:px-8 bg-[#050608] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Branding */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-sm font-semibold tracking-wider uppercase font-display text-white">
              {PROFILE.name}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs font-mono text-white/50 tracking-widest uppercase">
              SOFTWARE ENGINEER
            </span>
          </div>

          <p className="text-xs text-white/40 font-mono">
            Built with curiosity, caffeine & an unreasonable number of browser tabs. © 2026
          </p>
        </div>

        {/* Center / Right Links */}
        <div className="flex items-center gap-6 text-xs font-mono text-white/60">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href={PROFILE.leetcode}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LEETCODE
          </a>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer ml-2"
            title="Return to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
