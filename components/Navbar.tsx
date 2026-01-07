import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: '[关于泽麟]', href: '#' },
    { name: '[下载泽麟]', href: '#' },
    { name: '[问题与帮助]', href: '#' },
    { name: '[加入泽麟]', href: '#' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10 shadow-sm' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-12 sm:h-12 overflow-hidden flex items-center justify-center">
            <img src="/1024x1024logo.png" alt="泽麟 Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-serif font-bold tracking-tight hidden sm:block text-white">ZELIN</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white font-semibold hover:bg-brand-yellow/20 px-2 rounded-md text-sm tracking-widest transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-4 shadow-xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 font-semibold hover:text-white hover:bg-white/10 text-center py-2 rounded"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;