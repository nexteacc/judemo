import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6 md:py-8 group first:border-t">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none px-2 md:px-4"
        onClick={onClick}
      >
        <span className={`text-base md:text-xl font-medium tracking-wide transition-colors duration-300 pr-4 md:pr-8 ${isOpen ? 'text-brand-black' : 'text-gray-800 group-hover:text-brand-black'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'bg-brand-yellow border-brand-yellow text-black rotate-180' : 'bg-transparent border-gray-300 text-gray-500 group-hover:border-black group-hover:text-black'}`}>
           {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out px-2 md:px-4 ${
          isOpen ? 'max-h-96 opacity-100 mt-4 md:mt-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-700 leading-relaxed font-normal text-sm md:text-lg max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "JuCoin 是什么？与聚藏 Art 有什么关系？",
      answer: "JuCoin 成立于 2013 年，前身为“比特币交易网（BtcTrade.com）”，是全球最早的虚拟货币交易平台之一。聚藏 Art 是 JuCoin 生态旗下首个数字资产项目，由 JuCoin 提供技术、合规及生态支持，致力于构建合规、安全、透明的数字资产收藏与交易环境。"
    },
    {
      question: "聚藏 Art 的 RWA 技术是如何实现的？",
      answer: "聚藏 Art 是一个融合文化、价值与创意的数字世界。它不仅仅是一个NFT市场，更是链接物理世界权益与数字资产的桥梁。通过独创的RWA（现实世界资产）绑定技术，确保每一份数字藏品背后都有真实的价值支撑，例如绑定限量版实体艺术品、品牌会员权益或线下活动门票。"
    },
    {
      question: "如何加入创作者计划？",
      answer: "我们欢迎全球艺术家、品牌方和IP持有者加入。您可以通过网页底部的“商务合作”联系我们的生态团队，提交您的作品集或品牌介绍，审核通过后即可开启您的数字资产发行之旅，并获得官方的流量扶持与技术支持。"
    }
  ];

  return (
    <div>
      <h2 className="text-3xl md:text-5xl font-medium text-center mb-12 md:mb-20 tracking-wider text-brand-black px-4">常见问题解答</h2>
      <div className="w-full max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;