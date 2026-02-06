
import React from "react";
import { motion } from "framer-motion";
import { USER_DETAILS } from "../data/constants";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-black to-zinc-900 transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</h2>
                    <p className="text-gray-400 mb-12 text-lg">
                        I'm currently looking for full-time or remote opportunities.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        {USER_DETAILS.socialMatches.map((social) => (
                            <a
                                key={social.id}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-blue-600 hover:border-blue-600 hover:text-white group transition-all"
                            >
                                <social.icon size={24} className="text-gray-300 group-hover:text-white group-hover:scale-110 transition-transform" />
                                <span className="text-white font-medium group-hover:text-white">{social.label}</span>
                            </a>
                        ))}
                    </div>

                    <a
                        href={`mailto:${USER_DETAILS.email}`}
                        className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors transform hover:scale-105"
                    >
                        Say Hello
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
