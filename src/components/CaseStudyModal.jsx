import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Layers, ShieldCheck, CheckCircle2, Lightbulb, AlertTriangle, ArrowRight } from "lucide-react";

export default function CaseStudyModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 lg:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-[#0d0f14] border border-white/12 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 bg-[#090b0e]/80 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: project.accentColor || "#e07a5f" }}
                />
                <span className="text-xs font-mono tracking-widest uppercase text-white/50">
                  CASE STUDY // {project.category}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white/80 hover:text-white transition-all"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white/80 hover:text-white transition-all"
                  >
                    <Github size={12} />
                    <span>CODE</span>
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer ml-1"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-12 divide-y divide-white/8">
              {/* Title & Banner */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="inline-block px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-[#e07a5f] uppercase">
                    {project.timeline}
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-lg text-white/70 font-light max-w-3xl leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Big Preview Image (Uncropped, Full UI with Ambient Backdrop) */}
                {project.image && (
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#090b0e] min-h-[300px] max-h-[520px] w-full flex items-center justify-center p-3 sm:p-5">
                    {/* Ambient blurred backdrop */}
                    <div
                      className="absolute inset-0 bg-cover bg-center blur-3xl opacity-20 scale-110 pointer-events-none"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    {/* Full Uncropped Screenshot */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="relative z-10 max-h-[480px] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
                    />
                  </div>
                )}

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/8 text-xs font-mono text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 01 — OVERVIEW */}
              <div className="pt-8 space-y-4">
                <div className="text-xs font-mono tracking-widest uppercase text-[#e07a5f]">
                  01 // OVERVIEW
                </div>
                <p className="text-base text-white/80 font-light leading-relaxed max-w-4xl">
                  {project.overview}
                </p>
              </div>

              {/* 02 — THE PROBLEM & 03 — THE APPROACH */}
              <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/50">
                    <AlertTriangle size={14} className="text-[#f59e0b]" />
                    <span>02 // THE PROBLEM</span>
                  </div>
                  <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed">
                    {project.theProblem}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/50">
                    <Lightbulb size={14} className="text-[#38bdf8]" />
                    <span>03 // THE APPROACH</span>
                  </div>
                  <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed">
                    {project.theApproach}
                  </p>
                </div>
              </div>

              {/* 04 — ARCHITECTURE */}
              <div className="pt-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#e07a5f]">
                  <Layers size={14} />
                  <span>04 // SYSTEM ARCHITECTURE</span>
                </div>
                <div className="p-5 rounded-xl bg-black/40 border border-white/8 font-mono text-sm text-white/80 leading-relaxed">
                  {project.architecture}
                </div>
              </div>

              {/* 05 — KEY FEATURES */}
              <div className="pt-8 space-y-4">
                <div className="text-xs font-mono tracking-widest uppercase text-white/50">
                  05 // KEY FEATURES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-white/[0.02] border border-white/6 flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-[#10b981] shrink-0 mt-0.5"
                      />
                      <span className="text-xs sm:text-sm text-white/80 leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 06 — ENGINEERING DECISIONS & TRADE-OFFS */}
              <div className="pt-8 space-y-4">
                <div className="text-xs font-mono tracking-widest uppercase text-[#e07a5f]">
                  06 // ENGINEERING DECISIONS & TRADE-OFFS
                </div>
                <div className="space-y-3">
                  {project.engineeringDecisions.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-white/[0.02] border border-white/8 space-y-2"
                    >
                      <div className="text-sm font-semibold text-white flex items-center gap-2">
                        <ArrowRight size={14} className="text-[#e07a5f]" />
                        <span>{item.decision}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed pl-6">
                        {item.tradeOff}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 07 — CHALLENGES */}
              <div className="pt-8 space-y-4">
                <div className="text-xs font-mono tracking-widest uppercase text-white/50">
                  07 // TECHNICAL CHALLENGES
                </div>
                <ul className="space-y-2">
                  {project.challenges.map((ch, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-white/75 font-light flex items-start gap-2.5"
                    >
                      <span className="text-[#f59e0b] font-mono mt-0.5">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 08 — RESULTS / OUTCOME & 09 — WHAT I LEARNED */}
              <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/8">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#10b981]">
                    <ShieldCheck size={14} />
                    <span>08 // OUTCOME & RESULTS</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                    {project.outcome}
                  </p>
                </div>

                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/8">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#38bdf8]">
                    <Lightbulb size={14} />
                    <span>09 // WHAT I LEARNED</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                    {project.whatILearned}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Bottom Footer */}
            <div className="px-6 py-4 border-t border-white/8 bg-[#090b0e] flex items-center justify-between text-xs font-mono text-white/50">
              <span>END OF CASE STUDY</span>
              <button
                onClick={onClose}
                className="hover:text-white transition-colors cursor-pointer"
              >
                CLOSE [ESC]
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
