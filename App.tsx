import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AppShowcase from './components/AppShowcase';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import DownloadBanner from './components/DownloadBanner';
import MobileDownloadBanner from './components/MobileDownloadBanner';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-yellow selection:text-black overflow-x-hidden">
      <MobileDownloadBanner isVisible={isBannerVisible} onClose={() => setIsBannerVisible(false)} />
      <Navbar scrolled={scrolled} isBannerVisible={isBannerVisible} />

      <main>
        <Hero />

        {/* Section 1: Introduction to Ecosystem */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Features />
        </div>

        {/* Section 2: App Showcase */}
        <div className="bg-black py-24 relative overflow-hidden">
          {/* Background decoration - subtle grid instead of carbon fibre */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
          </div>
          <AppShowcase />
        </div>

        {/* Section 3: FAQ */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FAQ />
        </div>

        {/* Sticky-like Bottom Banner for Download */}
        <DownloadBanner />

      </main>

      <Footer />
    </div>
  );
};

export default App;