import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink, Copy, Check, Send, Sparkles } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function ContactSection({ onCopyEmail, hasCopiedEmail }) {
  const roles = [
    "Software Engineering Roles",
    "Full-Stack Development",
    "Backend & Systems Engineering",
    "Remote Opportunities",
    "Product & Technical Collaborations",
  ];

  return (
    <section id="contact" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/8 bg-[#07080a] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#e07a5f] tracking-widest uppercase">
            <Send size={14} />
            <span>08 // INITIATE TRANSMISSION</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight uppercase leading-[0.98] max-w-4xl">
            LET'S BUILD SOMETHING WORTH REMEMBERING.
          </h2>

          <p className="text-base sm:text-xl text-white/60 font-light max-w-2xl leading-relaxed">
            I am actively interviewing and open for software engineering opportunities. Whether you have a team role, an ambitious project, or an engineering challenge to discuss — let's connect.
          </p>
        </div>

        {/* Roles Available Bar */}
        <div className="mb-14 p-6 rounded-2xl bg-white/[0.02] border border-white/8 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-[#e07a5f]">
            // AVAILABLE FOR (2026 CYCLE):
          </div>
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <span
                key={role}
                className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/8 text-xs font-mono text-white/80"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Direct Email Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0d0f14] border border-white/10 space-y-6 flex flex-col justify-between hover:border-white/25 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#e07a5f]/10 text-[#e07a5f] border border-[#e07a5f]/20">
                  <Mail size={20} />
                </div>
                <span className="text-[10px] font-mono text-white/40 uppercase">
                  PRIMARY CHANNEL
                </span>
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-white">
                  Direct Email
                </h3>
                <p className="text-xs font-mono text-white/60 break-all pt-1">
                  {PROFILE.email}
                </p>
              </div>
            </div>

            <button
              onClick={onCopyEmail}
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {hasCopiedEmail ? (
                <>
                  <Check size={14} className="text-[#10b981]" />
                  <span className="text-[#10b981]">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>COPY EMAIL ADDRESS</span>
                </>
              )}
            </button>
          </div>

          {/* GitHub Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0d0f14] border border-white/10 space-y-6 flex flex-col justify-between hover:border-white/25 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-white/5 text-white border border-white/10">
                  <Github size={20} />
                </div>
                <span className="text-[10px] font-mono text-white/40 uppercase">
                  REPOSITORIES
                </span>
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-white">
                  GitHub Profile
                </h3>
                <p className="text-xs font-mono text-white/60 pt-1">
                  github.com/abhinavsingh6909
                </p>
              </div>
            </div>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <span>INSPECT REPOSITORIES</span>
              <ExternalLink size={13} className="text-[#e07a5f]" />
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0d0f14] border border-white/10 space-y-6 flex flex-col justify-between hover:border-white/25 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20">
                  <Linkedin size={20} />
                </div>
                <span className="text-[10px] font-mono text-white/40 uppercase">
                  PROFESSIONAL NETWORK
                </span>
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-white">
                  LinkedIn
                </h3>
                <p className="text-xs font-mono text-white/60 pt-1">
                  linkedin.com/in/abhinav-singh
                </p>
              </div>
            </div>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <span>VIEW PROFILE</span>
              <ExternalLink size={13} className="text-[#38bdf8]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
