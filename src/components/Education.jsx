
import React from "react";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <section id="education" className="py-20 bg-zinc-900/30 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 border-l-2 border-blue-600/30 space-y-10"
                    >
                        <div className="relative">
                            <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-black box-content shadow-sm" />
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Bachelor of Technology (B.Tech)</h3>
                            <p className="text-blue-600 dark:text-blue-400 mt-1 font-medium">Guru Gobind Singh Indraprastha University (GGSIPU)</p>
                            <p className="text-slate-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">
                                Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management Systems, OOPs.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
