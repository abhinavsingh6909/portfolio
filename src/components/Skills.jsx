
import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "../data/constants";

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-black/50 relative transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Proficiency</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {SKILLS.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 transition-colors shadow-none"
                        >
                            <h3 className="text-xl font-bold text-blue-400 mb-6">{category.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default border border-transparent"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
