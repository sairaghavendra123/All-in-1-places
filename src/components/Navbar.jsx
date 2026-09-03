import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Utensils, MapPin, Compass, Award, Sparkles, Store, ChevronLeft, ChevronRight, Flame, Cookie, Coffee, GlassWater, Camera, HelpCircle, Phone, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activeCategory, setActiveCategory, onOpenShutterModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  const dashboardOptions = [
    { id: 'home', name: 'Home', href: '#hero', icon: Sparkles },
    { id: 'all', name: 'All Specialties', category: 'all', href: '#cities', icon: Utensils },
    { id: 'shutter', name: '6–7 Shutter Layout', action: onOpenShutterModal, icon: Store, isSpecial: true },
    { id: 'Traditional Sweet', name: 'Traditional Sweets', category: 'Traditional Sweet', href: '#cities', icon: Cookie },
    { id: 'Street Foods', name: 'Street Foods', category: 'Street Foods', href: '#street-foods', icon: Utensils },
    { id: 'Beverages', name: 'Beverages & Drinks', category: 'Beverages', href: '#cities', icon: GlassWater },
    { id: 'map', name: 'Interactive Map', href: '#map', icon: Compass },
    { id: 'gallery', name: 'Food Gallery', href: '#gallery', icon: Camera },
    { id: 'about', name: 'About Project', href: '#about', icon: Info },
    { id: 'contact', name: 'Contact Us', href: '#contact', icon: Phone },
  ];

  const handleOptionClick = (opt) => {
    setIsOpen(false);
    if (opt.action) {
      opt.action();
      return;
    }
    if (opt.category) {
      setActiveCategory(opt.category);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Mango Leaf Thoranam Top Banner */}
      <div className="thoranam-header text-center py-1 px-4 relative z-10 flex items-center justify-between text-xs font-semibold tracking-wider text-amber-100 shadow-md">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span>One Destination • Endless Telugu Flavours</span>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-black/30 px-2.5 py-0.5 rounded-full border border-amber-400/30">
          <Award className="w-3.5 h-3.5 text-amber-300" />
          <span>Educational & Discovery Guide</span>
        </div>
      </div>

      {/* Decorative Thoranam Garland Trim */}
      <div className="thoranam-garland w-full shadow-inner opacity-90"></div>

      {/* Main Header Navbar */}
      <nav className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md border-b border-stone-200/80 py-2.5' 
          : 'bg-[#FAF7F2]/90 backdrop-blur-sm py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#9E3B24] via-[#C85A32] to-[#D4AF37] p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#FAF7F2] rounded-full flex items-center justify-center">
                <Utensils className="w-5 h-5 text-[#9E3B24] group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="font-festive text-xl sm:text-2xl font-bold tracking-wider text-stone-900">
                ALL IN ONE PLACES
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-[#9E3B24] font-bold">
                Telugu Food Heritage Guide
              </span>
            </div>
          </a>

          {/* Action Badge & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenShutterModal}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#9E3B24] hover:bg-[#832E1A] text-white text-xs font-bold shadow-md hover:scale-105 transition-all duration-300"
            >
              <Store className="w-3.5 h-3.5" />
              <span>6–7 Shutter Layout</span>
            </button>

            <a
              href="#map"
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4D3E] hover:bg-[#143B2F] text-white text-xs font-semibold shadow-md hover:scale-105 transition-all duration-300"
            >
              <Compass className="w-4 h-4 text-emerald-200" />
              <span>Explore Map</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg bg-stone-100 text-stone-800 hover:bg-stone-200 border border-stone-200 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* TOP HORIZONTAL SCROLLBAR OPTIONS TRACK */}
        <div className="w-full mt-2 pt-2 border-t border-stone-200/60 bg-[#F3ECE2]/80 backdrop-blur-md relative">
          <div className="max-w-7xl mx-auto px-4 relative flex items-center">
            
            {/* Scroll Left Button */}
            <button
              onClick={scrollLeft}
              className="hidden sm:flex z-10 p-1.5 rounded-full bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 shadow-sm transition-colors mr-2 flex-shrink-0"
              aria-label="Scroll options left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Scrolling Track Container */}
            <div
              ref={scrollContainerRef}
              className="horizontal-scroll-container flex items-center gap-2 py-1.5 px-1 overflow-x-auto w-full no-scrollbar"
            >
              {dashboardOptions.map((opt) => {
                const IconComp = opt.icon;
                const isActive = opt.category ? activeCategory === opt.category : false;
                
                return (
                  <a
                    key={opt.id}
                    href={opt.href || '#'}
                    onClick={(e) => {
                      if (!opt.href) e.preventDefault();
                      handleOptionClick(opt);
                    }}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                      opt.isSpecial
                        ? 'bg-[#9E3B24] text-white font-bold shadow-sm hover:scale-105'
                        : isActive
                        ? 'bg-[#1B4D3E] text-white font-bold shadow-sm'
                        : 'bg-white/90 text-stone-700 hover:text-stone-900 hover:bg-white border border-stone-200/80'
                    }`}
                  >
                    <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-amber-200' : 'text-stone-500'}`} />
                    <span>{opt.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Scroll Right Button */}
            <button
              onClick={scrollRight}
              className="hidden sm:flex z-10 p-1.5 rounded-full bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 shadow-sm transition-colors ml-2 flex-shrink-0"
              aria-label="Scroll options right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-white border-b border-stone-200 shadow-xl overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2">
                {dashboardOptions.map((opt) => (
                  <a
                    key={opt.id}
                    href={opt.href || '#'}
                    onClick={(e) => {
                      if (!opt.href) e.preventDefault();
                      handleOptionClick(opt);
                    }}
                    className="px-4 py-3 rounded-xl text-base font-medium text-stone-800 hover:text-[#9E3B24] hover:bg-stone-50 border border-transparent hover:border-stone-200 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <opt.icon className="w-4 h-4 text-[#9E3B24]" />
                      <span>{opt.name}</span>
                    </div>
                    <MapPin className="w-4 h-4 text-stone-400" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
