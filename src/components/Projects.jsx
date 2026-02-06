
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../data/constants";
import { ExternalLink, X } from "lucide-react";

const Projects = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section id="projects" className="py-20 bg-black relative transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project) => (
                        <motion.div
                            layoutId={project.id}
                            key={project.id}
                            onClick={() => setSelectedId(project.id)}
                            className="cursor-pointer group bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative"
                            whileHover={{ y: -5 }}
                        >
                            <motion.div className="relative h-48 overflow-hidden">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                                    <span className="text-white font-semibold flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                        View Details <ExternalLink size={16} />
                                    </span>
                                </div>
                            </motion.div>

                            <motion.div className="p-6">
                                <motion.h3 className="text-xl font-bold text-white mb-2">
                                    {project.title}
                                </motion.h3>
                                <motion.p className="text-gray-400 text-sm line-clamp-3">
                                    {project.description}
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm p-4">
                            {PROJECTS.map(
                                (project) =>
                                    project.id === selectedId && (
                                        <motion.div
                                            layoutId={selectedId}
                                            key={project.id}
                                            className="bg-zinc-900 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedId(null);
                                                }}
                                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full z-10 transition-colors"
                                            >
                                                <X size={20} />
                                            </button>

                                            <motion.div className="relative h-64 md:h-80">
                                                <motion.img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                                <motion.div className="absolute bottom-6 left-6 right-6">
                                                    <motion.h3 className="text-3xl font-bold text-white mb-2">
                                                        {project.title}
                                                    </motion.h3>
                                                </motion.div>
                                            </motion.div>

                                            <motion.div className="p-8">
                                                <motion.p className="text-gray-300 text-lg leading-relaxed mb-6">
                                                    {project.description}
                                                </motion.p>

                                                <div className="mb-8">
                                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Technologies</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tech.map((tech) => (
                                                            <span key={tech} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <motion.a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors w-full md:w-auto justify-center shadow-lg shadow-blue-500/20"
                                                >
                                                    View Live Project <ExternalLink size={18} />
                                                </motion.a>
                                            </motion.div>
                                        </motion.div>
                                    )
                            )}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
