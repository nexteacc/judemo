import React, { useRef } from 'react';
import { Search, Menu, Heart, Share2, Hexagon, Zap, Gift, Calendar } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Sub-components for Reusability ---

const MarketplacePhone = () => (
  <div className="relative w-[300px] sm:w-[320px] h-[600px] sm:h-[640px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden z-10 mx-auto">
    {/* Dynamic Island / Notch */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-xl z-20"></div>

    {/* Screen Content - Dark Mode App UI */}
    <div className="w-full h-full bg-[#121212] text-white flex flex-col relative overflow-y-auto hide-scrollbar">
      {/* Header */}
      <div className="p-6 pt-12 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent absolute w-full z-10">
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-tight">泽麟</span>
        </div>
        <div className="flex gap-4">
          <Search size={20} strokeWidth={2} />
          <Menu size={20} strokeWidth={2} />
        </div>
      </div>

      {/* Hero Image in App */}
      <div className="h-3/5 w-full bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&w=1000&auto=format&fit=crop)' }}>
        <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-[#121212] via-[#121212]/90 to-transparent">
          <div className="flex justify-between items-end mb-2">
            <div>
              <span className="inline-block px-2 py-0.5 rounded bg-brand-yellow/20 text-brand-yellow text-[10px] font-bold mb-2 border border-brand-yellow/20">即将发售</span>
              <h3 className="text-3xl font-bold font-mono tracking-tight text-white">23:59:59</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10">
              <Share2 size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions - Floating Card */}
      <div className="px-4 -mt-8 relative z-10">
        <div className="bg-[#1E1E1E] rounded-2xl p-5 flex justify-between shadow-xl border border-white/5">
          {[
            { icon: Calendar, color: 'text-blue-400', bg: 'bg-blue-400/10', label: '每日签到' },
            { icon: Zap, color: 'text-red-400', bg: 'bg-red-400/10', label: '活动入口' },
            { icon: Hexagon, color: 'text-brand-yellow', bg: 'bg-yellow-400/10', label: '首发藏品' },
            { icon: Gift, color: 'text-purple-400', bg: 'bg-purple-400/10', label: '积分抽奖' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center ${item.color}`}>
                <item.icon size={20} strokeWidth={2} />
              </div>
              <span className="text-[10px] text-gray-400 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* List Placeholders */}
      <div className="p-4 space-y-3">
        <div className="h-24 bg-[#1E1E1E] rounded-xl border border-white/5 animate-pulse"></div>
        <div className="h-24 bg-[#1E1E1E] rounded-xl border border-white/5 animate-pulse"></div>
      </div>
    </div>
  </div>
);

const CommunityPhone = () => (
  <div className="relative w-[300px] sm:w-[320px] h-[600px] sm:h-[640px] bg-white rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden z-10 mx-auto">
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-xl z-20"></div>

    {/* Light Mode App UI */}
    <div className="w-full h-full bg-[#FAFAFA] text-black flex flex-col relative overflow-y-auto hide-scrollbar">
      <div className="p-6 pt-14 bg-white pb-3 shadow-sm sticky top-0 z-20">
        <div className="flex justify-center gap-8 text-sm font-medium">
          <span className="border-b-[3px] border-brand-yellow pb-2 font-bold text-black">发现</span>
          <span className="text-gray-400 pb-2">关注</span>
          <span className="text-gray-400 pb-2">全部</span>
        </div>
      </div>

      {/* Feed Item */}
      <div className="p-5 bg-white mt-2 pb-6 border-b border-gray-100">
        <div className="flex gap-3 mb-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border border-gray-100 shadow-sm">
             <img src="/1024x1024logo.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-sm font-bold flex items-center gap-1.5 text-black">官方小助手 <span className="bg-blue-50 text-blue-600 border border-blue-100 text-[9px] px-1.5 py-0.5 rounded font-medium">官方</span></h4>
            <p className="text-[10px] text-gray-400 mt-0.5">1分钟前 · 北京</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed tracking-wide">
          欢迎加入泽麟！签到互动赚积分换好礼，攒经验值升级解锁优先购等特权，创新RWA让数字收藏绑定现实权益...
        </p>

        {/* Vote Widget */}
        <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold bg-black text-white px-2.5 py-1 rounded">积分玩法真的零撸吗？</span>
            <span className="text-[10px] text-gray-400 bg-white border border-gray-200 px-2 py-0.5 rounded-full">投票</span>
          </div>
          <div className="space-y-3">
            <div className="h-9 bg-yellow-50 rounded-lg flex items-center px-3 relative overflow-hidden border border-brand-yellow/20">
              <div className="absolute left-0 top-0 h-full w-[70%] bg-brand-yellow/20"></div>
              <span className="relative z-10 text-xs text-yellow-900 flex justify-between w-full font-bold px-1">
                <span>真真真的</span> <span>70%</span>
              </span>
            </div>
            <div className="h-9 bg-white rounded-lg flex items-center px-3 border border-gray-200">
              <span className="text-xs text-gray-500 flex justify-between w-full px-1">
                <span>还需观望</span> <span>30%</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-gray-400 text-xs mt-2 border-t border-gray-50 pt-3">
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5 hover:text-red-500 transition-colors cursor-pointer"><Heart size={16} className="text-red-500 fill-red-500" /> 888</span>
            <span className="flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer"><Share2 size={16} /> 241</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);


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
         <div className="absolute left-0 top-0 bottom-0 w-12 z-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
         <div className="absolute right-0 top-0 bottom-0 w-12 z-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>

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
              className="absolute -right-20 top-24 bg-white border border-gray-100 p-5 rounded-2xl w-56 shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20 transform transition-transform duration-500 hover:-translate-y-1"
           >
              <div className="flex items-center gap-3 mb-2">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow"></span>
                  </div>
                  <span className="text-xs text-black font-bold tracking-wide">时刻准备，从不错过</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">实时倒计时提醒，第一时间获取最新数字权益与资产。</p>
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
               className="absolute -left-20 top-24 bg-white border border-gray-100 p-5 rounded-2xl w-56 shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20 transform transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-2">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow"></span>
                  </div>
                  <span className="text-xs text-black font-bold tracking-wide">学习指南</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">官方教程汇聚，助你快速了解泽麟生态玩法。</p>
           </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default AppShowcase;