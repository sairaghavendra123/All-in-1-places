import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, Coffee, Utensils, Sparkles, CheckCircle2 } from 'lucide-react';

export const CHAI_MENU_SECTIONS = [
  {
    id: 'coffee',
    icon: '☕',
    title: 'Signature Coffee',
    subtitle: 'roasted & poured fresh',
    items: [
      { name: 'Madras Degree Filter Coffee', desc: 'Authentic South Indian decoction brew served rich & frothy' },
      { name: 'Classic Andhra Filter Coffee', desc: 'Strong traditional roast simmered with fresh whole milk' },
      { name: 'Special Black Coffee', desc: 'Pure, bold, single-origin dark roast' },
      { name: 'Chilled Classic Cold Coffee', desc: 'Rich, creamy espresso blend served over ice' },
    ]
  },
  {
    id: 'chai',
    icon: '🫖',
    title: 'Specialty Chai',
    subtitle: 'slow-simmered, house blended',
    items: [
      { name: 'Allam Bellam Chai', desc: 'Signature fiery crushed ginger & natural jaggery tea' },
      { name: 'Irani Masala Chai', desc: 'Rich, slow-simmered dum-style milk tea' },
      { name: 'Elachi Special Chai', desc: 'Fragrant green cardamom-infused milk tea' },
      { name: 'Classic Allam Chai', desc: 'Fresh pounded ginger tea for an instant energy boost' },
      { name: 'Andhra Masala Chai', desc: 'Brewed with a house blend of whole aromatic spices' },
    ]
  },
  {
    id: 'herbal',
    icon: '🍃',
    title: 'Light & Herbal Teas',
    subtitle: 'gentle & aromatic',
    items: [
      { name: 'Fresh Lemon Tea', desc: 'Tangy black tea infused with fresh citrus juice' },
      { name: 'Honey Lemon Green Tea', desc: 'Light, antioxidant-rich green tea with pure honey' },
      { name: 'Lemongrass Black Tea', desc: 'Aromatic, soothing herbal black brew' },
      { name: 'Classic Black Tea', desc: 'Pure brewed tea leaves served hot and clear' },
    ]
  },
  {
    id: 'comfort',
    icon: '🥛',
    title: 'Hot Comfort Drinks',
    subtitle: 'creamy & warming',
    items: [
      { name: 'Hot Saffron Badam Milk', desc: 'Rich milk infused with crushed almonds, cardamom & saffron' },
      { name: 'Hot Malt Drink', desc: 'Classic Horlicks / Boost option' },
      { name: 'Creamy Hot Chocolate', desc: 'Warm, velvety cocoa milk drink' },
    ]
  }
];

export default function ChaiMenuModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('coffee');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        
        {/* Backdrop Click Dismiss */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Vintage Chai & Coffee Menu Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 25 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative w-full max-w-2xl bg-[#F7EFDB] text-[#2A1810] border-4 border-[#C08A34]/50 rounded-2xl shadow-2xl overflow-hidden z-10 my-6 p-1 sm:p-2"
        >
          {/* Inner Vintage Gold Line Inset Border */}
          <div className="relative border-2 border-[#C08A34]/40 rounded-xl p-5 sm:p-8 bg-[#F7EFDB] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/30 via-transparent to-transparent">
            
            {/* Top Navigation Controls (Mobile & Desktop) */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={onClose}
                className="text-[#4A2E1C] hover:text-[#2A1810] bg-[#C08A34]/20 hover:bg-[#C08A34]/35 px-3.5 py-1.5 rounded-full transition-colors z-20 flex items-center gap-1.5 text-xs font-bold shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                onClick={onClose}
                className="text-[#4A2E1C] hover:text-[#2A1810] bg-[#C08A34]/20 hover:bg-[#C08A34]/35 p-2 rounded-full transition-colors z-20 shadow-sm"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* HERO / HEADER SECTION */}
            <div className="text-center mb-6">
              
              {/* Animated Steam SVG Graphic */}
              <div className="w-24 h-14 mx-auto mb-2 relative">
                <svg viewBox="0 0 120 74" className="w-full h-full">
                  <path className="animate-pulse fill-none stroke-[#8E6524] stroke-[2.5] stroke-linecap-round opacity-75" d="M45 70 C 40 55, 55 50, 50 35 C 46 22, 56 18, 52 6" />
                  <path className="animate-pulse fill-none stroke-[#8E6524] stroke-[2.5] stroke-linecap-round opacity-75" d="M60 70 C 55 56, 70 49, 64 34 C 60 21, 70 16, 66 4" />
                  <path className="animate-pulse fill-none stroke-[#8E6524] stroke-[2.5] stroke-linecap-round opacity-75" d="M75 70 C 70 55, 85 50, 79 35 C 75 22, 84 18, 80 6" />
                </svg>
              </div>

              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#B0402C] block mb-1">
                Est. On The Street Corner
              </span>

              <h1 className="font-festive text-3xl sm:text-5xl font-bold tracking-tight text-[#2A1810] uppercase">
                ALL IN ONE PLACE
              </h1>

              <span className="font-serif italic text-lg sm:text-xl text-[#8E6524] block mt-1">
                The Chai & Coffee Corner
              </span>

              {/* Decorative Tagline Line */}
              <div className="flex items-center justify-center gap-3 mt-4">
                <span className="h-[1px] w-8 sm:w-12 bg-[#2A1810]/20"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C08A34]"></span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A4632]">
                  Brewed Fresh, Served Hot
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C08A34]"></span>
                <span className="h-[1px] w-8 sm:w-12 bg-[#2A1810]/20"></span>
              </div>

            </div>

            {/* CATEGORY NAV TABS */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6 pb-4 border-b border-[#2A1810]/15">
              {CHAI_MENU_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setActiveTab(sec.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                    activeTab === sec.id
                      ? 'bg-[#C08A34] text-[#F7EFDB] shadow-md border border-[#8E6524]'
                      : 'bg-[#2A1810]/5 text-[#5A4632] hover:bg-[#C08A34]/20 border border-[#2A1810]/15'
                  }`}
                >
                  <span>{sec.icon}</span>
                  <span>{sec.title}</span>
                </button>
              ))}
            </div>

            {/* ACTIVE SECTION MENU ITEMS DISPLAY */}
            <div className="max-h-[50vh] overflow-y-auto pr-1 custom-scrollbar">
              {CHAI_MENU_SECTIONS.filter(s => s.id === activeTab).map((sec) => (
                <div key={sec.id} className="space-y-4">
                  
                  <div className="flex items-baseline justify-between mb-3 border-b border-[#2A1810]/15 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{sec.icon}</span>
                      <h3 className="font-festive text-xl font-bold text-[#2A1810]">
                        {sec.title}
                      </h3>
                    </div>
                    <span className="font-serif italic text-xs text-[#5A4632]">
                      {sec.subtitle}
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {sec.items.map((item, idx) => (
                      <div key={idx} className="pb-3 border-b border-dashed border-[#2A1810]/15 last:border-none">
                        <div className="flex items-center gap-2 font-festive font-semibold text-base text-[#2A1810]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B0402C]"></span>
                          <span>{item.name}</span>
                        </div>
                        <p className="text-xs text-[#5A4632] pl-3.5 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>

            {/* VINTAGE MENU FOOTER */}
            <div className="mt-6 pt-4 border-t border-[#2A1810]/15 text-center">
              <div className="flex items-center justify-center gap-3 mb-1">
                <span className="h-[1px] w-12 bg-[#2A1810]/20"></span>
                <span className="font-serif italic text-xs text-[#8E6524]">☕ ALL IN ONE PLACE ☕</span>
                <span className="h-[1px] w-12 bg-[#2A1810]/20"></span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#5A4632]/80 block mb-4">
                One Corner · Every Craving · Always Fresh
              </span>

              {/* Bottom Mobile & Desktop Back Action */}
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#B0402C] hover:bg-[#8E2F1F] text-[#F7EFDB] text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Main Menu</span>
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
