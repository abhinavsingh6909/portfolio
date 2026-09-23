import React, { useState, useEffect, useCallback } from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Projects from "./components/Projects";
import ArchitectureInspector from "./components/ArchitectureInspector";
import DsaSection from "./components/DsaSection";
import CodeShowcase from "./components/CodeShowcase";
import SkillsEcosystem from "./components/SkillsEcosystem";
import Timeline from "./components/Timeline";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import CommandPalette from "./components/CommandPalette";
import TerminalEasterEgg from "./components/TerminalEasterEgg";
import { PROFILE } from "./data/portfolioData";

export default function App() {
  const [cursorText, setCursorText] = useState("");
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false);

  // Pure canvas particle burst on email copy
  const triggerConfetti = useCallback(() => {
    try {
      const canvas = document.createElement("canvas");
      canvas.style.position = "fixed";
      canvas.style.inset = "0";
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "99999";
      document.body.appendChild(canvas);

      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const colors = ["#e07a5f", "#f59e0b", "#38bdf8", "#10b981", "#ffffff"];
      const particles = Array.from({ length: 48 }, () => ({
        x: canvas.width / 2 + (Math.random() - 0.5) * 160,
        y: canvas.height * 0.75,
        vx: (Math.random() - 0.5) * 9,
        vy: -Math.random() * 11 - 5,
        size: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        rotation: Math.random() * 360,
        vRotation: (Math.random() - 0.5) * 8,
      }));

      let frame = 0;
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.38; // gravity
          p.alpha -= 0.015;
          p.rotation += p.vRotation;
          if (p.alpha > 0) {
            active = true;
            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
            ctx.restore();
          }
        }
        frame++;
        if (active && frame < 95) {
          requestAnimationFrame(animate);
        } else {
          canvas.remove();
        }
      }
      requestAnimationFrame(animate);
    } catch {
      // Fallback
    }
  }, []);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(PROFILE.email);
    setHasCopiedEmail(true);
    triggerConfetti();
    setTimeout(() => {
      setHasCopiedEmail(false);
    }, 3000);
  }, [triggerConfetti]);

  // Global Keyboard Shortcuts (⌘K for command palette, `~` for terminal)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
      if (e.key === "`" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07080a] text-[#f1f5f9] selection:bg-[#e07a5f]/30 selection:text-white">
      {/* Subtle Film Grain Texture */}
      <div className="film-grain" />

      {/* Desktop Custom Trailing Cursor */}
      <CustomCursor cursorText={cursorText} />

      {/* Sticky Top Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onTriggerTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        {/* Section 01: Hero Experience */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onCopyEmail={handleCopyEmail}
          hasCopiedEmail={hasCopiedEmail}
        />

        {/* Section 02: Introduction & Engineering Philosophy Manifesto */}
        <Manifesto />

        {/* Section 03: Featured Production Projects & Case Studies */}
        <Projects setCursorText={setCursorText} />

        {/* Section 04: "Under The Surface" Interactive Systems Architecture Inspector */}
        <ArchitectureInspector />

        {/* Section 05: Algorithmic Problem Solving Rigor (600+ LeetCode) */}
        <DsaSection />

        {/* Section 06: Code as Design */}
        <CodeShowcase />

        {/* Section 07: Technology Ecosystem */}
        <SkillsEcosystem />

        {/* Section 08: Engineering Journey & Timeline */}
        <Timeline />

        {/* Section 09: Editorial Biography & Beyond Code */}
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Section 10: Final Statement & Direct Contact */}
        <ContactSection
          onCopyEmail={handleCopyEmail}
          hasCopiedEmail={hasCopiedEmail}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating ⌘K Quick Navigator Pill (Desktop) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12151d]/90 border border-white/10 backdrop-blur-md text-[11px] font-mono text-white/50 shadow-2xl">
        <span>PRESS</span>
        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-semibold">
          ⌘K
        </kbd>
        <span>NAVIGATOR</span>
      </div>

      {/* Modals & Overlays */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onCopyEmail={handleCopyEmail}
        hasCopiedEmail={hasCopiedEmail}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onCopyEmail={handleCopyEmail}
        onTriggerTerminal={() => setIsTerminalOpen(true)}
      />

      <TerminalEasterEgg
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
