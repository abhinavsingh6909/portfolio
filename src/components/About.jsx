import React from "react";
import { motion } from "framer-motion";
import { USER_DETAILS } from "../data/constants";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-black transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
              <div
                className={`relative bg-zinc-900 border border-white/10 rounded-2xl ${USER_DETAILS.profileImage ? "overflow-hidden" : "p-8 flex items-center justify-center"} aspect-square shadow-lg transition-colors`}
              >
                {USER_DETAILS.profileImage ? (
                  <img
                    src={USER_DETAILS.profileImage}
                    alt={USER_DETAILS.name}
                    className="w-full h-full object-scale-down grayscale-0 hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <div className="text-center">
                    <h3 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-600 select-none opacity-20">
                      AS
                    </h3>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Me
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a passionate{" "}
              <span className="text-blue-400 font-semibold">
                Full Stack Developer
              </span>{" "}
              specialized in the MERN stack. My journey in programming is driven
              by curiosity and a desire to build solutions that matter.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {USER_DETAILS.bio}
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 shadow-sm">
                <h4 className="text-2xl font-bold text-white mb-1">fresh</h4>
                <p className="text-sm text-gray-400">Perspective</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 shadow-sm">
                <h4 className="text-2xl font-bold text-white mb-1">MERN</h4>
                <p className="text-sm text-gray-400">Specialist</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
