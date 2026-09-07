import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils, Compass, Store } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activeCategory, setActiveCategory, onOpenShutterModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Explore', href: '#street-foods' },
    { name: 'Cities', href: '#cities' },
    { name: 'Map', href: '#map' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-[#140A07]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-3' 
          : 'bg-[#140A07]/80 backdrop-blur-sm py-4 border-b border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* LEFT: Refined Logo & Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-[#9E3B24] p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#140A07] rounded-full flex items-center justify-center">
                <Utensils className="w-4 h-4 text-amber-300" />
              </div>
            </div>
            <div>
              <span className="font-festive text-lg sm:text-xl font-bold tracking-wider text-white">
                ALL IN ONE PLACES
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-amber-300/80 font-medium">
                TELUGU FOOD DISCOVERY
              </span>
            </div>
          </a>

          {/* CENTER: Text Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-300 hover:text-amber-200 transition-colors relative py-1 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9E3B24] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* RIGHT: Single Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#street-foods"
              className="px-5 py-2.5 rounded-xl bg-[#9E3B24] hover:bg-[#832E1A] text-white text-xs font-bold shadow-md hover:scale-105 transition-all duration-300"
            >
              Explore Food
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-stone-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#140A07] border-b border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="px-6 py-5 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-stone-200 hover:text-amber-300 transition-colors py-1"
                  >
                    {link.name}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenShutterModal();
                  }}
                  className="w-full py-2.5 rounded-xl bg-white/10 text-amber-300 font-semibold text-sm border border-white/15 flex items-center justify-center gap-2"
                >
                  <Store className="w-4 h-4" />
                  <span>6–7 Shutter Layout</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
