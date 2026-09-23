import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, ArrowRight, FileText, Mail, Terminal, ExternalLink, Code2, Cpu, User } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenResume,
  onCopyEmail,
  onTriggerTerminal,
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const actions = [
    {
      id: "work",
      label: "Jump to Featured Projects & Case Studies",
      category: "Navigation",
      icon: Code2,
      run: () => {
        const el = document.getElementById("work");
        if (el) {
          const topOffset = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: topOffset, behavior: "smooth" });
        }
      },
    },
    {
      id: "architecture",
      label: "Inspect Systems Architecture (Under The Surface)",
      category: "Navigation",
      icon: Cpu,
      run: () => {
        const el = document.getElementById("architecture");
        if (el) {
          const topOffset = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: topOffset, behavior: "smooth" });
        }
      },
    },
    {
      id: "dsa",
      label: "Explore DSA Journey (600+ LeetCode Solved)",
      category: "Navigation",
      icon: Terminal,
      run: () => {
        const el = document.getElementById("dsa");
        if (el) {
          const topOffset = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: topOffset, behavior: "smooth" });
        }
      },
    },
    {
      id: "stack",
      label: "View Technology Ecosystem & Skills",
      category: "Navigation",
      icon: Cpu,
      run: () => {
        const el = document.getElementById("stack");
        if (el) {
          const topOffset = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: topOffset, behavior: "smooth" });
        }
      },
    },
    {
      id: "about",
      label: "Read Editorial Biography & Beyond Code",
      category: "Navigation",
      icon: User,
      run: () => {
        const el = document.getElementById("about");
        if (el) {
          const topOffset = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: topOffset, behavior: "smooth" });
        }
      },
    },
    {
      id: "resume",
      label: "Open Resume (PDF Viewer & Download)",
      category: "Action",
      icon: FileText,
      run: onOpenResume,
    },
    {
      id: "email",
      label: "Copy Direct Email (abhinavsingh280803@gmail.com)",
      category: "Action",
      icon: Mail,
      run: onCopyEmail,
    },
    {
      id: "terminal",
      label: "Launch Secret Developer Console Terminal",
      category: "Easter Egg",
      icon: Terminal,
      run: onTriggerTerminal,
    },
    {
      id: "github",
      label: "Visit GitHub: github.com/abhinavsingh6909",
      category: "External",
      icon: ExternalLink,
      run: () => window.open(PROFILE.github, "_blank"),
    },
    {
      id: "leetcode",
      label: "Visit LeetCode Profile: leetcode.com/u/abhinav--singh/",
      category: "External",
      icon: ExternalLink,
      run: () => window.open(PROFILE.leetcode, "_blank"),
    },
  ];

  const filtered = actions.filter((act) =>
    act.label.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or toggle
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSelect = (item) => {
    onClose();
    if (item.run) item.run();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-start justify-center pt-20 sm:pt-28 px-4 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Palette Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-xl bg-[#0e1118] border border-white/12 rounded-2xl shadow-2xl overflow-hidden text-white"
          >
            {/* Input Box */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/8">
              <Search size={16} className="text-white/40 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command or jump to section... (e.g. 'work', 'resume', 'terminal')"
                autoFocus
                className="w-full bg-transparent border-0 outline-none text-sm text-white placeholder-white/40 font-sans"
              />
              <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white/50">
                ESC
              </span>
            </div>

            {/* Suggestions List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filtered.length === 0 ? (
                <div className="p-6 text-center text-xs font-mono text-white/40">
                  No matching commands found.
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-colors cursor-pointer ${
                        selectedIndex === idx
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-white/5 text-white/60">
                          <Icon size={14} />
                        </div>
                        <span className="text-xs font-medium tracking-wide">
                          {item.label}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono text-white/40 uppercase">
                        {item.category}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 border-t border-white/6 bg-black/30 flex items-center justify-between text-[11px] font-mono text-white/40">
              <div className="flex items-center gap-2">
                <span>Navigate</span>
                <kbd className="px-1 rounded bg-white/10 text-white/70">↑↓</kbd>
                <span>Select</span>
                <kbd className="px-1 rounded bg-white/10 text-white/70">↵</kbd>
              </div>
              <span>COMMAND NAVIGATOR</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
