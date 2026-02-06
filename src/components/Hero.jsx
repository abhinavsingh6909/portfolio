import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { USER_DETAILS } from "../data/constants";
import FloatingShapes from "./3d/FloatingShapes";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* 3D Background */}
      <FloatingShapes />

      {/* Background Gradient Orbs (Fallback/Enhanced Depth) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 text-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-auto"
        >
          <h2 className="text-blue-600 dark:text-blue-400 font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
            Hello, call me
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            Abhinav Singh
          </h1>
          <h3 className="text-2xl md:text-3xl text-slate-600 dark:text-gray-400 mb-8 font-light">
            I build{" "}
            <span className="text-blue-600 dark:text-white font-semibold">
              premium web experiences
            </span>
          </h3>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-gray-400 mb-10 leading-relaxed">
            {USER_DETAILS.bio}
          </p>

          <div className="flex justify-center gap-6">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-600/25 cursor-pointer"
            >
              View Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-3 bg-gray-200 dark:bg-white/5 hover:bg-gray-300 dark:hover:bg-white/10 text-gray-900 dark:text-white border border-gray-300 dark:border-white/10 rounded-full font-medium transition-all cursor-pointer backdrop-blur-sm"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
