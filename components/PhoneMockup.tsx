import React from 'react';
import { Search, Menu, Heart, Share2, Hexagon, Zap, Gift, Calendar } from 'lucide-react';

export const MarketplacePhone = () => (
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

export const CommunityPhone = () => (
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
                        <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
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
