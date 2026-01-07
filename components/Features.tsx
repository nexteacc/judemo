import React from 'react';
import { Wallet, ShieldCheck, Globe, ArrowRight, CreditCard, Coins } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Features: React.FC = () => {
  return (
    <div className="space-y-16">

      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-widest text-brand-black">让数字资产更简单</h2>
        <p className="text-gray-700 font-normal text-lg md:text-xl leading-relaxed">
          更直观的资产发售，更优质的教程与交流，更轻松的价值回报
        </p>
      </motion.div>

      {/* Wallet Cards Section - 2 Columns */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Card 1 - JuPay */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.1)" }}
          className="glass-card rounded-3xl p-10 border border-black/5 hover:border-brand-black transition-colors duration-500 group cursor-pointer relative overflow-hidden bg-white/80 flex flex-col justify-between h-full min-h-[320px]"
        >
          {/* Hover Glow Effect - Radial Gradient */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-300 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div>
            <div className="flex justify-between items-start mb-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-yellow-50 transition-colors">
                  <Wallet className="text-gray-600 group-hover:text-yellow-600 w-5 h-5 transition-colors" />
                </div>
                <span className="text-sm font-bold text-gray-700 tracking-wider">钱包服务</span>
              </div>
              <span className="px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/20 rounded-full text-xs font-bold text-brand-yellow-dark">
                Ju支持
              </span>
            </div>

            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                <div className="w-6 h-6 bg-brand-yellow rounded-md"></div>
              </div>
              <h3 className="text-3xl font-medium text-brand-black">JuPay</h3>
            </div>

            <p className="text-gray-700 font-normal text-lg">一键支付，连接全球的加密生活</p>
          </div>

          <div className="flex justify-end mt-8">
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-brand-black transition-colors duration-300">
              <ArrowRight className="text-gray-600 group-hover:text-white w-5 h-5 transition-colors" />
            </div>
          </div>
        </motion.div>

        {/* Card 2 - Huifu */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.1)" }}
          className="glass-card rounded-3xl p-10 border border-black/5 hover:border-brand-black transition-colors duration-500 group cursor-pointer relative overflow-hidden bg-white/80 flex flex-col justify-between h-full min-h-[320px]"
        >
          {/* Hover Glow Effect - Radial Gradient */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-300 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div>
            <div className="flex justify-between items-start mb-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-50 transition-colors">
                  <CreditCard className="text-gray-600 group-hover:text-blue-500 w-5 h-5 transition-colors" />
                </div>
                <span className="text-sm font-bold text-gray-700 tracking-wider">钱包服务</span>
              </div>
              <span className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-bold text-gray-600">
                战略合作
              </span>
            </div>

            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-brand-yellow rounded-full"></div>
                </div>
              </div>
              <h3 className="text-3xl font-medium text-brand-black">汇付钱包</h3>
            </div>

            <p className="text-gray-700 font-normal text-lg">支持多卡行、快捷支付、高速提现</p>
          </div>

          <div className="flex justify-end mt-8">
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-brand-black transition-colors duration-300">
              <ArrowRight className="text-gray-600 group-hover:text-white w-5 h-5 transition-colors" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bento Grid Features */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16"
      >

        {/* Large Card Left - Energy */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.1)" }}
          className="glass-card rounded-3xl p-10 flex flex-col justify-between h-full min-h-[380px] relative overflow-hidden group hover:border-brand-black/20 transition-colors duration-500 bg-white/80 shadow-sm"
        >
          {/* Hover Glow Effect - Radial Gradient */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-300 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10 max-w-md">
            <h3 className="text-3xl md:text-4xl font-medium mb-6 text-brand-black leading-tight">能量聚集<br />价值生长</h3>
            <p className="text-gray-700 leading-relaxed text-lg">泽麟让你的每一次互动与任务，都能汇聚为真实的价值回报。</p>
          </div>
          {/* Decorative Icon */}
          <motion.div
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 -bottom-8 opacity-100 transition-opacity duration-500 text-brand-yellow transform group-hover:scale-105"
          >
            <Coins size={240} strokeWidth={0.5} className="text-brand-yellow" />
          </motion.div>
        </motion.div>

        {/* Right Column Stack */}
        <div className="flex flex-col gap-8 h-full">

          {/* Top Right - Culture */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-3xl p-8 flex items-center justify-between group hover:shadow-lg transition-all duration-300 bg-white/80 h-full border border-black/5 relative overflow-hidden"
          >
            {/* Hover Glow Effect - Radial Gradient */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-300 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-medium mb-3 text-brand-black">文化共创 多元融合</h3>
              <p className="text-gray-700 text-sm leading-relaxed">携手艺术家与品牌，<br />共建数字文化新生态。</p>
            </div>
            <div className="w-20 h-20 bg-yellow-50 rounded-2xl flex items-center justify-center border border-yellow-100 group-hover:scale-110 transition-transform duration-300">
              <Globe size={32} className="text-brand-yellow-dark" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Bottom Right - Security */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-3xl p-8 flex items-center justify-between group hover:shadow-lg transition-all duration-300 bg-white/80 h-full border border-black/5 relative overflow-hidden"
          >
            {/* Hover Glow Effect - Radial Gradient */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-300 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-medium mb-3 text-brand-black">安全交易 合规保障</h3>
              <p className="text-gray-700 text-sm leading-relaxed">依托 JuPay 与汇付天下，<br />打造可信的交易环境。</p>
            </div>
            <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-200 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck size={32} className="text-gray-600 group-hover:text-brand-black transition-colors" strokeWidth={1.5} />
            </div>
          </motion.div>

        </div>

      </motion.div>

    </div>
  );
};

export default Features;