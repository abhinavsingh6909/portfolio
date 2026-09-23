import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Layers, Sparkles } from "lucide-react";
import { PROJECTS } from "../data/portfolioData";
import CaseStudyModal from "./CaseStudyModal";

export default function Projects({ setCursorText }) {
  const [activeProject, setActiveProject] = useState(null);

  const handleMouseEnter = () => {
    if (setCursorText) setCursorText("VIEW");
  };

  const handleMouseLeave = () => {
    if (setCursorText) setCursorText("");
  };

  return (
    <section id="work" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 border-b border-white/8 pb-8 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#e07a5f] tracking-widest uppercase mb-3">
            <Layers size={14} />
            <span>01 // PRODUCTION WORK & CASE STUDIES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            Featured Projects.
          </h2>
        </div>

        <p className="text-sm sm:text-base text-white/60 font-light max-w-md leading-relaxed">
          Engineered under real constraints. Click any project to inspect the full case study including architecture, engineering decisions, and trade-offs.
        </p>
      </div>

      {/* Projects Showcase Container */}
      <div className="space-y-24 sm:space-y-32">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Media Preview Column */}
              <div
                className={`lg:col-span-7 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  onClick={() => setActiveProject(project)}
                  className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#090b0e] h-[320px] sm:h-[400px] lg:h-[430px] w-full flex items-center justify-center p-3 sm:p-4 cursor-pointer transition-all duration-500 group-hover:border-white/25 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                >
                  {/* Ambient Blurred Background (fills frame with project tones, zero cropping of actual photo) */}
                  <div
                    className="absolute inset-0 bg-cover bg-center blur-2xl opacity-25 scale-110 pointer-events-none"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />

                  {/* Clean Browser / Studio Mockup Frame */}
                  <div className="relative z-10 w-full h-full flex flex-col rounded-xl overflow-hidden border border-white/12 bg-black/60 backdrop-blur-md shadow-2xl">
                    {/* Frame Top Bar */}
                    <div className="flex items-center justify-between px-3.5 py-2 bg-white/[0.04] border-b border-white/8 select-none shrink-0">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-white/25" />
                        <span className="h-2 w-2 rounded-full bg-white/25" />
                        <span className="h-2 w-2 rounded-full bg-white/25" />
                      </div>
                      <span className="text-[10px] font-mono text-white/50 tracking-wider truncate max-w-[200px]">
                        {project.slug}.preview
                      </span>
                      <span className="h-2 w-2 rounded-full bg-[#10b981]/80" />
                    </div>

                    {/* Frame Content: The Full Image with object-contain */}
                    <div className="relative flex-1 w-full h-full flex items-center justify-center p-2 sm:p-3 overflow-hidden bg-black/40">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-h-full max-w-full object-contain rounded-md transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  {/* Floating Top Badge */}
                  <div className="absolute top-5 left-5 z-20 flex items-center gap-2 pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-widest text-white uppercase shadow-lg">
                      {project.featuredBadge}
                    </span>
                  </div>

                  {/* Hover Overlay Pill */}
                  <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="px-5 py-2.5 rounded-full bg-white text-black font-mono font-semibold text-xs tracking-wider flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span>INSPECT CASE STUDY</span>
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Info Column */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {/* Number & Category */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#e07a5f] tracking-widest">
                    0{index + 1} //
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                    {project.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-3">
                  <h3
                    onClick={() => setActiveProject(project)}
                    className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight group-hover:text-white transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/8 text-[11px] font-mono text-white/70 tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/8">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-white hover:text-[#e07a5f] transition-colors cursor-pointer uppercase py-1"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight size={13} className="text-[#e07a5f]" />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-white transition-colors py-1"
                    >
                      <ExternalLink size={13} />
                      <span>LIVE</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-white transition-colors py-1"
                    >
                      <Github size={13} />
                      <span>CODE</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={activeProject}
        isOpen={activeProject !== null}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
