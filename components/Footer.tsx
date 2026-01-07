import React from 'react';
import { Twitter, MessageCircle, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        {/* Changed grid-cols-1 to grid-cols-2 for mobile to allow side-by-side links */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-20">

          {/* Brand Column - Spans full width on mobile (col-span-2), 5 cols on desktop */}
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-12 md:h-12 overflow-hidden flex items-center justify-center">
                <img src="/logo.jpg" alt="泽麟 Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white">ZELIN</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              泽麟是由 JuCoin 生态构建的合规数字资产平台。我们致力于通过技术创新，将文化艺术与数字经济深度融合，为用户提供安全、透明、有价值的收藏体验。
            </p>
          </div>

          {/* Spacer - Hidden on mobile */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Links Columns - Each takes 1 col on mobile (side-by-side), 2 cols on desktop */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-4 md:mb-8 text-sm uppercase tracking-wider">关于我们</h4>
            <ul className="space-y-3 md:space-y-5 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">品牌故事</a></li>
              <li><a href="#" className="hover:text-white transition-colors">团队介绍</a></li>
              <li><a href="#" className="hover:text-white transition-colors">加入我们</a></li>
              <li><a href="#" className="hover:text-white transition-colors">联系方式</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-4 md:mb-8 text-sm uppercase tracking-wider">帮助中心</h4>
            <ul className="space-y-3 md:space-y-5 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">新手指南</a></li>
              <li><a href="#" className="hover:text-white transition-colors">常见问题</a></li>
              <li><a href="#" className="hover:text-white transition-colors">服务协议</a></li>
              <li><a href="#" className="hover:text-white transition-colors">隐私政策</a></li>
            </ul>
          </div>

          {/* Social Column - Spans full width on mobile to sit comfortably below */}
          <div className="col-span-2 md:col-span-2 mt-4 md:mt-0">
            <h4 className="text-white font-bold mb-4 md:mb-8 text-sm uppercase tracking-wider">关注我们</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-all shadow-sm">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-all shadow-sm">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-all shadow-sm">
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Centered on Mobile, Row on Desktop */}
        <div className="border-t border-white/10 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-8">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © 2026 Zelin. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 text-xs text-gray-400 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;