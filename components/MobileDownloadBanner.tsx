import React from 'react';
import { X } from 'lucide-react';

interface MobileDownloadBannerProps {
    isVisible: boolean;
    onClose: () => void;
}

const MobileDownloadBanner: React.FC<MobileDownloadBannerProps> = ({ isVisible, onClose }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-[60] flex md:hidden items-center justify-between bg-black px-4 py-3 border-b border-white/10 shadow-sm">
            {/* Left: Logo + Text */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 border border-white/20 shadow-sm">
                    <img src="/logo.jpg" alt="泽麟 Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                    <h3 className="text-sm font-bold text-white leading-tight">泽麟 App</h3>
                    <p className="text-[10px] text-gray-400 leading-tight">连接文化与价值的数字生态</p>
                </div>
            </div>

            {/* Right: Download Button + Close */}
            <div className="flex items-center gap-2">
                <button className="px-4 py-1.5 bg-brand-yellow text-black text-xs font-bold rounded-full hover:bg-brand-yellow-dark transition-colors shadow-sm">
                    下载
                </button>
                <button
                    onClick={onClose}
                    className="p-1 text-gray-400 hover:text-white transition-colors"
                    aria-label="关闭"
                >
                    <X size={18} />
                </button>
            </div>
        </div>
    );
};

export default MobileDownloadBanner;
