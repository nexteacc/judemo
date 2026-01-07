import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black py-12 md:py-20">

      {/* Background Particles/Noise - Static Layer */}
      <div className="absolute inset-0 opacity-30 pointer-events-none select-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-brand-yellow/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[40rem] h-[40rem] bg-brand-yellow/10 rounded-full blur-[120px]" />
      </div>

      {/* Text Content */}
      <div className="relative z-20 text-center px-4 max-w-7xl mx-auto flex flex-col items-center">

        {/* Title Reveal */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[0.15em] sm:tracking-[0.25em] text-white leading-tight whitespace-nowrap"
          >
            泽聚万象 · 麟启新生
          </motion.h1>
        </div>

        {/* Accent Line Scale */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-16 h-[3px] bg-brand-yellow mt-8 mb-8 rounded-full origin-center"
        ></motion.div>

        {/* Subtitle Fade */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xs sm:text-sm md:text-base font-bold font-mono text-gray-400 tracking-[0.3em] uppercase mb-16"
        >
          Zelin <span className="hidden sm:inline">·</span><br className="block sm:hidden" /> The Digital Asset Ecosystem
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-4 rounded-full border border-white/20 hover:border-brand-yellow transition-colors duration-300 overflow-hidden bg-black/50 backdrop-blur-sm"
        >
          <span className="relative z-10 text-sm md:text-base tracking-[0.2em] font-extrabold text-white group-hover:text-black transition-colors pl-1">
            进入泽麟
          </span>
          <div className="absolute inset-0 bg-brand-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 -z-0"></div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;