import React, { useRef } from 'react';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef(null);

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Calculate position relative to center (-1 to 1)
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  // Configuration for smooth spring animation
  const springConfig = { damping: 25, stiffness: 150 };

  // Calculate transforms
  const xRange = useTransform(mouseX, [-0.5, 0.5], [-25, 25]);
  const yRange = useTransform(mouseY, [-0.5, 0.5], [-25, 25]);
  const xInverseRange = useTransform(mouseX, [-0.5, 0.5], [15, -15]);
  const yInverseRange = useTransform(mouseY, [-0.5, 0.5], [15, -15]);

  // Apply springs to transforms
  const moveX = useSpring(xRange, springConfig);
  const moveY = useSpring(yRange, springConfig);
  const moveXInverse = useSpring(xInverseRange, springConfig);
  const moveYInverse = useSpring(yInverseRange, springConfig);

  // Rotation transforms (Defined at top level)
  // Input: Mouse position [-0.5, 0.5] -> Output: Degrees [-5, 5]
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white py-20 [perspective:2000px]"
    >
      {/* Background Particles/Noise - Parallax Layer (Back) */}
      <div className="absolute inset-0 opacity-30 pointer-events-none select-none z-0">
        <motion.div
          style={{ x: moveXInverse, y: moveYInverse }}
          className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-brand-yellow/5 rounded-full blur-[100px]"
        />
        <motion.div
          style={{ x: moveX, y: moveY }}
          className="absolute bottom-[10%] right-[10%] w-[40rem] h-[40rem] bg-brand-yellow/5 rounded-full blur-[120px]"
        />
      </div>

      {/* Main 3D Object Wrapper - Separating Entry Animation from Parallax */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mb-12 select-none"
      >
        {/* Inner Parallax Container - Handles Mouse Interaction */}
        <motion.div
          style={{
            x: moveX,
            y: moveY,
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: "preserve-3d" // Essential for 3D feel
          }}
          className="w-full max-w-[500px] aspect-square flex items-center justify-center"
        >
          {/* Image - Handles Infinite Floating/Breathing Animation */}
          <motion.img
            animate={{
              translateY: [0, -20, 0],
              rotate: [0, 2, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut"
            }}
            src="/Gemini_Generated_Image_wwh29gwwh29gwwh2 (1).png"
            alt="Golden Qilin"
            className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(234,179,8,0.3)]"
          />
          {/* Glow Effect attached to the object */}
          <div className="absolute inset-0 bg-brand-yellow/20 blur-[100px] rounded-full -z-10 scale-75"></div>
        </motion.div>
      </motion.div>

      {/* Text Content */}
      <div className="relative z-20 text-center px-4 max-w-7xl mx-auto flex flex-col items-center">

        {/* Title Reveal */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[0.15em] sm:tracking-[0.25em] text-brand-black leading-tight whitespace-nowrap"
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
          className="text-xs sm:text-sm md:text-base font-bold font-mono text-gray-600 tracking-[0.3em] uppercase mb-16"
        >
          Zelin · The Digital Asset Ecosystem
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-4 rounded-full border border-brand-black hover:border-brand-yellow transition-colors duration-300 overflow-hidden bg-white/50 backdrop-blur-sm"
        >
          <span className="relative z-10 text-sm md:text-base tracking-[0.2em] font-extrabold text-brand-black group-hover:text-black transition-colors pl-1">
            进入泽麟
          </span>
          <div className="absolute inset-0 bg-brand-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 -z-0"></div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;