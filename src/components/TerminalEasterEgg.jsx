import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Minimize2 } from "lucide-react";
import { PROFILE, PROJECTS } from "../data/portfolioData";

export default function TerminalEasterEgg({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "⚡ Abhinav Singh DevOS Terminal v2.6.0 [Interactive Mode]",
    },
    {
      type: "system",
      text: "Type 'help' to inspect available system commands, or 'exit' to close.",
    },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  const handleCommand = (e) => {
    if (e.key !== "Enter") return;
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: "user", text: `$ ${inputVal}` }];
    setInputVal("");

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `AVAILABLE COMMANDS:
  whoami             - Display candidate profile & credentials
  stack              - Query primary languages, frameworks & databases
  dsa                - Show problem solving telemetry & LeetCode breakdown
  projects           - List featured production platforms
  sudo hire-abhinav  - Initiate engineering recruitment protocol
  joke               - Fetch an authentic computer science joke
  clear              - Wipe terminal buffer
  exit               - Terminate console session`,
        });
        break;

      case "whoami":
        newHistory.push({
          type: "output",
          text: `CANDIDATE: Abhinav Singh
ROLE: Software Engineer / Full-Stack Developer
EDUCATION: B.Tech CSE (Delhi Technical Campus, GGSIPU, 2025) · CGPA: 7.98
LOCATION: Delhi, India
CORE FOCUS: High-performance web applications, resilient backend architectures, DSA & LLD.`,
        });
        break;

      case "stack":
        newHistory.push({
          type: "output",
          text: `TECHNICAL ECOSYSTEM:
- Languages: Java, JavaScript (ES6+), C++, SQL
- Frontend: React 19, Modern CSS, Tailwind CSS, Vite
- Backend: Node.js, Express.js, RESTful Architecture, JWT, Bcrypt
- Databases: MongoDB, MySQL
- Core CS: Data Structures & Algorithms (600+ solved), OOP, Low-Level Design (LLD)`,
        });
        break;

      case "dsa":
        newHistory.push({
          type: "output",
          text: `ALGORITHMIC RIGOR:
- LeetCode Solved: 600+ problems
- Profile: https://leetcode.com/u/abhinav--singh/
- Primary categories: Arrays, Sliding Window, Monotonic Stacks, BST, Graphs, Dynamic Programming.`,
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: PROJECTS.map(
            (p, i) => `0${i + 1}. ${p.title} - ${p.category} (${p.techStack.slice(0, 3).join(", ")})`
          ).join("\n"),
        });
        break;

      case "sudo hire-abhinav":
        newHistory.push({
          type: "output",
          text: `[AUTH GRANTED: ROOT ACCESS ACCEPTED]
Candidate status: AVAILABLE FOR INTERVIEWS.
Target roles: Software Engineer, Full-Stack Developer, Backend Systems.
Contact email: abhinavsingh280803@gmail.com
Scheduled action: Sending invitation to review resume & arrange introductory chat!`,
        });
        break;

      case "joke":
        const jokes = [
          "There are 10 types of people in the world: those who understand binary, and those who don't.",
          "Why do Java programmers wear glasses? Because they don't C#.",
          "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
          "There are two hard problems in computer science: cache invalidation, naming things, and off-by-one errors.",
        ];
        newHistory.push({
          type: "output",
          text: jokes[Math.floor(Math.random() * jokes.length)],
        });
        break;

      case "clear":
        setHistory([]);
        return;

      case "exit":
        onClose();
        return;

      default:
        newHistory.push({
          type: "error",
          text: `command not found: ${cmd}. Type 'help' to see valid commands.`,
        });
        break;
    }

    setHistory(newHistory);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative z-10 w-full max-w-2xl bg-[#090b0e] border border-white/15 rounded-xl shadow-2xl overflow-hidden font-mono text-xs flex flex-col h-[480px]"
          >
            {/* Terminal Window Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d0f14] border-b border-white/8 select-none">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ef4444]/80 inline-block cursor-pointer" onClick={onClose} />
                <span className="h-3 w-3 rounded-full bg-[#f59e0b]/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-[#10b981]/80 inline-block" />
                <span className="ml-2 text-white/50 text-[11px]">
                  abhinav@dev-console: ~
                </span>
              </div>

              <button
                onClick={onClose}
                className="text-white/40 hover:text-white transition-colors cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>

            {/* Terminal Log Screen */}
            <div className="flex-1 p-4 overflow-y-auto space-y-2 text-white/85">
              {history.map((line, idx) => (
                <div
                  key={idx}
                  className={`leading-relaxed whitespace-pre-wrap ${
                    line.type === "system"
                      ? "text-[#38bdf8]"
                      : line.type === "user"
                      ? "text-[#e07a5f] font-semibold"
                      : line.type === "error"
                      ? "text-[#ef4444]"
                      : "text-white/80"
                  }`}
                >
                  {line.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Terminal Prompt Input */}
            <div className="p-3 bg-[#0d0f14] border-t border-white/8 flex items-center gap-2">
              <span className="text-[#10b981] font-bold">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="type a command (e.g. 'help', 'sudo hire-abhinav')..."
                autoFocus
                className="flex-1 bg-transparent border-0 outline-none text-white font-mono placeholder-white/30"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
