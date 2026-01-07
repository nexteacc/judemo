import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MarketplacePhone, CommunityPhone } from './PhoneMockup';


const AppShowcase: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create Parallax Effect: Left phone moves slower, Right phone moves faster (or reverse)
  // Input range [0, 1] maps to scroll progress. Output range maps to Y pixels.
  const yLeft = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yRight = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="w-full py-10 overflow-hidden">

      {/* 
        ========================================
        MOBILE VIEW: Horizontal Auto-Scrolling 
        ========================================
      */}
      <div className="lg:hidden relative w-full">
        {/* Gradient Masks for fade effect at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 z-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 z-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

        <motion.div
          className="flex gap-10 w-max pl-4"
          animate={{ x: ["0%", "-50%"] }} // Animate halfway (width of one set) then reset
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25 // Slow speed for showcase
          }}
        >
          {/* Duplicate items to create infinite loop effect */}
          <div className="transform scale-90 sm:scale-100 flex gap-10">
            <MarketplacePhone />
            <CommunityPhone />
          </div>
          {/* Clone Set */}
          <div className="transform scale-90 sm:scale-100 flex gap-10">
            <MarketplacePhone />
            <CommunityPhone />
          </div>
        </motion.div>
      </div>


      {/* 
        ========================================
        DESKTOP VIEW: Vertical Parallax Grid
        ========================================
      */}
      <div className="hidden lg:grid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid-cols-2 gap-20 items-center">

        {/* Left Phone Wrapper */}
        <motion.div
          style={{ y: yLeft, opacity }}
          className="relative mx-auto lg:ml-auto lg:mr-0 group perspective-1000"
        >
          <div className="transform transition-transform duration-700 hover:rotate-y-3 hover:scale-[1.02]">
            <MarketplacePhone />
          </div>

          {/* Floating Label Left */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -right-20 top-24 bg-black border border-white/10 p-5 rounded-2xl w-56 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 transform transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow"></span>
              </div>
              <span className="text-xs text-white font-bold tracking-wide">时刻准备，从不错过</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">实时倒计时提醒，第一时间获取最新数字权益与资产。</p>
          </motion.div>
        </motion.div>


        {/* Right Phone Wrapper */}
        <motion.div
          style={{ y: yRight, opacity }}
          className="relative mx-auto lg:mr-auto lg:ml-0 group perspective-1000 lg:mt-32"
        >
          <div className="transform transition-transform duration-700 hover:rotate-y-[-3deg] hover:scale-[1.02]">
            <CommunityPhone />
          </div>

          {/* Floating Label Right */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute -left-20 top-24 bg-black border border-white/10 p-5 rounded-2xl w-56 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 transform transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow"></span>
              </div>
              <span className="text-xs text-white font-bold tracking-wide">学习指南</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">官方教程汇聚，助你快速了解泽麟生态玩法。</p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default AppShowcase;