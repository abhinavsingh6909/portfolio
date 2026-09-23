import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command, FileText, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function Navbar({
  onOpenResume,
  onOpenCommandPalette,
  onTriggerTerminal,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    const newCount = logoClicks + 1;
    setLogoClicks(newCount);
    if (newCount >= 5) {
      if (onTriggerTerminal) onTriggerTerminal();
      setLogoClicks(0);
    } else {
      setTimeout(() => setLogoClicks(0), 3000);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "WORK", href: "#work" },
    { label: "UNDER THE SURFACE", href: "#architecture" },
    { label: "DSA", href: "#dsa" },
    { label: "STACK", href: "#stack" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#07080a]/85 backdrop-blur-md border-b border-white/8 py-3.5 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleLogoClick}
              className="group relative flex items-center justify-center h-9 w-9 rounded-lg bg-white/5 border border-white/10 hover:border-white/25 transition-all text-white font-mono font-bold text-sm tracking-wider cursor-pointer"
              title="Abhinav Singh (Tip: Click 5 times for Developer Console)"
            >
              <span className="group-hover:text-[#e07a5f] transition-colors">
                {PROFILE.monogram}
              </span>
              <span className="absolute -bottom-1 -right-1 h-1.5 w-1.5 rounded-full bg-[#10b981]" />
            </button>

            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
                {PROFILE.name}
              </span>
              <span className="text-[10px] font-mono text-white/45 tracking-widest uppercase">
                Software Engineer
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[11px] font-mono tracking-widest text-white/60 hover:text-white transition-colors uppercase relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#e07a5f] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Command Palette Button */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white text-xs font-mono transition-all cursor-pointer"
              title="Open Command Navigator (⌘K)"
            >
              <Command size={13} />
              <span className="text-[11px] font-mono">⌘K</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-mono tracking-wider transition-all cursor-pointer hover:border-white/30"
            >
              <FileText size={13} className="text-[#e07a5f]" />
              <span>RESUME</span>
            </button>

            {/* Connect CTA */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-white text-black hover:bg-white/90 text-xs font-medium tracking-wide transition-all cursor-pointer shadow-sm"
            >
              <span>CONNECT</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              className="p-2 rounded-md bg-white/5 border border-white/10 text-white/70"
            >
              <Command size={16} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-white/5 border border-white/10 text-white/80 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#07080a]/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 sm:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-5">
              <div className="text-[10px] font-mono tracking-widest text-[#e07a5f] uppercase">
                // NAVIGATION
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-base font-medium tracking-wide text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2.5 px-4 rounded-lg bg-white/5 border border-white/15 text-white text-xs font-mono tracking-wider flex items-center justify-center gap-2"
                >
                  <FileText size={14} className="text-[#e07a5f]" />
                  VIEW RESUME (PDF)
                </button>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="w-full py-2.5 px-4 rounded-lg bg-white text-black text-xs font-semibold tracking-wider flex items-center justify-center gap-1"
                >
                  LET'S CONNECT
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
