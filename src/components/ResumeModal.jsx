import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, FileText, Check, Mail } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose, onCopyEmail, hasCopiedEmail }) {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 lg:p-10 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl h-[88vh] bg-[#0d0f14] border border-white/12 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 bg-[#090b0e]">
              <div className="flex items-center gap-3">
                <FileText size={16} className="text-[#e07a5f]" />
                <span className="text-xs font-mono tracking-widest uppercase text-white/70">
                  ABHINAV SINGH // CURRICULUM VITAE
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download="Abhinav_Singh_Resume.pdf"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-black hover:bg-white/90 text-xs font-medium tracking-wide transition-all"
                >
                  <Download size={13} />
                  <span>DOWNLOAD</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white/80 hover:text-white transition-all"
                >
                  <ExternalLink size={13} />
                  <span className="hidden sm:inline">FULLSCREEN</span>
                </a>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer ml-1"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Resume PDF Viewer Frame */}
            <div className="flex-1 bg-black/60 relative overflow-hidden">
              <iframe
                src="/resume.pdf#toolbar=0&navpanes=0"
                title="Abhinav Singh Resume"
                className="w-full h-full border-0"
              />
            </div>

            {/* Bottom Bar */}
            <div className="px-6 py-3 border-t border-white/8 bg-[#090b0e] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/50">
              <div className="flex items-center gap-2">
                <span>{PROFILE.education.degree}</span>
                <span>•</span>
                <span>CGPA {PROFILE.education.cgpa}</span>
              </div>

              <button
                onClick={onCopyEmail}
                className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                {hasCopiedEmail ? (
                  <>
                    <Check size={12} className="text-[#10b981]" />
                    <span className="text-[#10b981]">EMAIL COPIED</span>
                  </>
                ) : (
                  <>
                    <Mail size={12} />
                    <span>COPY EMAIL: {PROFILE.email}</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
