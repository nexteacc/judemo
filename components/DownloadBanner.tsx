import React from 'react';
import { Smartphone, QrCode } from 'lucide-react';
import { motion } from 'framer-motion';

const DownloadBanner: React.FC = () => {
  return (
    <div className="w-full bg-white py-20 px-4">
       <motion.div 
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="max-w-6xl mx-auto relative group"
       >
           {/* Yellow Gradient Background Blur - Breathing Animation */}
           <motion.div 
                animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 rounded-[2.5rem] blur-3xl"
           ></motion.div>
           
           <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-[2rem] px-8 py-12 md:px-16 md:py-16 flex flex-col lg:flex-row items-center justify-between shadow-2xl overflow-hidden border border-yellow-300/50">
                
                {/* Text Content */}
                <div className="mb-10 lg:mb-0 z-10 text-center lg:text-left max-w-2xl">
                    <h3 className="text-2xl md:text-4xl font-extrabold text-brand-black mb-4 leading-tight">
                        下载聚藏Art，<br/>
                        开启您的数字资产之旅
                    </h3>
                    <p className="text-brand-black/80 text-base md:text-lg font-bold max-w-lg mx-auto lg:mx-0">
                        融合文化、价值与创意的数字世界，让每一次收藏都更有意义。
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 z-10 w-full lg:w-auto">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-3 bg-brand-black hover:bg-gray-900 text-white px-8 py-4 rounded-xl border border-brand-black transition-colors shadow-xl"
                    >
                        <QrCode size={20} className="text-brand-yellow" />
                        <div className="flex flex-col items-start">
                            <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Download</span>
                            <span className="text-sm font-bold">扫码下载</span>
                        </div>
                    </motion.button>
                    
                    <div className="flex flex-col gap-3">
                        <motion.button 
                             whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
                             whileTap={{ scale: 0.95 }}
                             className="flex items-center justify-center bg-white text-brand-black py-3 rounded-xl border border-white/20 shadow-lg w-full sm:w-40 px-4"
                        >
                            <div className="flex items-center gap-3 w-28">
                                <Smartphone size={18} className="flex-shrink-0" />
                                <span className="text-xs font-bold">iOS 下载</span>
                            </div>
                        </motion.button>
                        <motion.button 
                             whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
                             whileTap={{ scale: 0.95 }}
                             className="flex items-center justify-center bg-white text-brand-black py-3 rounded-xl border border-white/20 shadow-lg w-full sm:w-40 px-4"
                        >
                            <div className="flex items-center gap-3 w-28">
                                <Smartphone size={18} className="flex-shrink-0" />
                                <span className="text-xs font-bold">Android 下载</span>
                            </div>
                        </motion.button>
                    </div>
                </div>

                {/* Decoration Circles */}
                <div className="absolute -right-20 -bottom-32 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute left-20 -top-32 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
           </div>
       </motion.div>
    </div>
  );
};

export default DownloadBanner;