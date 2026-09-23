import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ArrowRight, Play, Terminal, Layers, CheckCircle2, RefreshCw } from "lucide-react";
import { ARCHITECTURE_FLOWS } from "../data/portfolioData";

export default function ArchitectureInspector() {
  const [selectedFlowIndex, setSelectedFlowIndex] = useState(0);
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedStep, setSimulatedStep] = useState(null);

  const currentFlow = ARCHITECTURE_FLOWS[selectedFlowIndex];
  const currentNode = currentFlow.nodes[activeNodeIndex] || currentFlow.nodes[0];

  const handleSimulate = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulatedStep(0);
    setActiveNodeIndex(0);

    currentFlow.nodes.forEach((_, idx) => {
      setTimeout(() => {
        setSimulatedStep(idx);
        setActiveNodeIndex(idx);
        if (idx === currentFlow.nodes.length - 1) {
          setTimeout(() => {
            setIsSimulating(false);
            setSimulatedStep(null);
          }, 1200);
        }
      }, idx * 900);
    });
  };

  return (
    <section id="architecture" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-y border-white/8 bg-[#090b0e] relative overflow-hidden">
      {/* Background grid accent */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/8 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#e07a5f] tracking-widest uppercase mb-3">
              <Cpu size={14} />
              <span>02 // UNDER THE SURFACE · ARCHITECTURE INSPECTOR</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
              Systems Architecture.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm text-white/60 font-light max-w-sm leading-relaxed">
              Most portfolios only display UI mockups. Click nodes or simulate execution to explore request lifecycles and architectural trade-offs.
            </p>

            <button
              onClick={handleSimulate}
              disabled={isSimulating}
              className={`px-4 py-2.5 rounded-lg border text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                isSimulating
                  ? "bg-[#10b981]/20 border-[#10b981]/40 text-[#10b981]"
                  : "bg-white/5 hover:bg-white/10 border-white/20 text-white"
              }`}
            >
              {isSimulating ? (
                <>
                  <RefreshCw size={13} className="animate-spin" />
                  <span>STEPPING... [{simulatedStep + 1}/{currentFlow.nodes.length}]</span>
                </>
              ) : (
                <>
                  <Play size={13} className="text-[#10b981]" />
                  <span>SIMULATE PIPELINE</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Pipeline Selector Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
          {ARCHITECTURE_FLOWS.map((flow, idx) => (
            <button
              key={flow.id}
              onClick={() => {
                setSelectedFlowIndex(idx);
                setActiveNodeIndex(0);
                setIsSimulating(false);
                setSimulatedStep(null);
              }}
              className={`px-4 py-2.5 rounded-lg border text-xs font-mono tracking-wider transition-all cursor-pointer ${
                selectedFlowIndex === idx
                  ? "bg-white/10 border-white/30 text-white shadow-lg"
                  : "bg-white/[0.02] border-white/6 text-white/50 hover:text-white hover:border-white/15"
              }`}
            >
              <span className="text-[#e07a5f] mr-2">#{idx + 1}</span>
              <span>{flow.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Architecture Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Node Flow Visualizer */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-white/40 pb-2 border-b border-white/6">
              <span>PIPELINE EXECUTION NODES</span>
              <span>CLICK NODE TO INSPECT</span>
            </div>

            <div className="space-y-2.5">
              {currentFlow.nodes.map((node, idx) => {
                const isActive = activeNodeIndex === idx;
                const isSimActive = simulatedStep === idx;

                return (
                  <motion.div
                    key={node.id}
                    onClick={() => {
                      setActiveNodeIndex(idx);
                      if (isSimulating) setIsSimulating(false);
                    }}
                    animate={{
                      scale: isActive ? 1.01 : 1,
                    }}
                    className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer relative overflow-hidden ${
                      isSimActive
                        ? "bg-[#10b981]/10 border-[#10b981]/60 shadow-[0_0_25px_rgba(16,185,129,0.2)]"
                        : isActive
                        ? "bg-[#13161f] border-white/30 shadow-xl"
                        : "bg-white/[0.02] border-white/6 hover:bg-white/[0.04] hover:border-white/15"
                    }`}
                  >
                    {/* Active indicator bar */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e07a5f]" />
                    )}

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center h-6 w-6 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono font-bold text-white/70">
                          {idx + 1}
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-white tracking-wide">
                            {node.name}
                          </div>
                          <div className="text-[11px] font-mono text-white/40">
                            {node.type}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {isSimActive && (
                          <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
                          </span>
                        )}
                        <ArrowRight
                          size={14}
                          className={`transition-colors ${
                            isActive ? "text-[#e07a5f]" : "text-white/20"
                          }`}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Node Detail & Code Inspector Drawer */}
          <div className="lg:col-span-5 bg-[#0d0f14] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            {/* Stage Header */}
            <div className="space-y-2 border-b border-white/8 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#e07a5f]">
                  STAGE {activeNodeIndex + 1} OF {currentFlow.nodes.length}
                </span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">
                  {currentNode.type}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                {currentNode.name}
              </h3>
            </div>

            {/* Stage Description */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-white/40">
                ENGINEERING SPECIFICATION
              </div>
              <p className="text-sm text-white/75 font-light leading-relaxed">
                {currentNode.details}
              </p>
            </div>

            {/* Code Snippet Box */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-white/40">
                <div className="flex items-center gap-1.5">
                  <Terminal size={12} className="text-[#38bdf8]" />
                  <span>IMPLEMENTATION SNIPPET</span>
                </div>
                <span>SOURCE</span>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/8 font-mono text-xs text-white/80 overflow-x-auto leading-relaxed">
                <pre>
                  <code>{currentNode.code}</code>
                </pre>
              </div>
            </div>

            {/* Architecture Context Banner */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-white/40">
              <CheckCircle2 size={13} className="text-[#10b981]" />
              <span>SYSTEM: {currentFlow.system}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
