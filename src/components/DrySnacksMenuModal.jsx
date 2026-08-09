import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';

export const DRY_SNACKS_MENU_SECTIONS = [
  {
    id: 'chegodilu',
    icon: '🌾',
    title: 'Chegodilu Varieties',
    subtitle: 'deep-fried rice rings',
    items: [
      'Chegodilu',
      'Spicy Chegodilu',
      'Butter Chegodilu',
      'Garlic Chegodilu',
      'Sesame Chegodilu'
    ]
  },
  {
    id: 'murukku',
    icon: '🥨',
    title: 'Murukku & Chakli',
    subtitle: 'spiral-pressed & crisp',
    items: [
      'Jantikalu (Murukku)',
      'Janthikalu (Spicy)',
      'Murukulu',
      'Chakli',
      'Karapoosa'
    ]
  },
  {
    id: 'mixtures',
    icon: '🍿',
    title: 'Mixtures',
    subtitle: 'house-tossed blends',
    items: [
      'Ribbon Pakodi',
      'Boondi Mixture',
      'Kara Mixture',
      'Corn Flakes Mixture',
      'Peanut Masala Mixture',
      'Atukulu Mixture (Poha Mixture)',
      'Curry Leaves Mixture',
      'Cashew Mixture'
    ]
  },
  {
    id: 'peanuts',
    icon: '🥜',
    title: 'Peanuts',
    subtitle: 'roasted to order',
    items: [
      'Masala Peanuts',
      'Salted Peanuts'
    ]
  }
];

export default function DrySnacksMenuModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('chegodilu');

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

        {/* Vintage Dry Snacks Menu Card Container */}
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
              
              {/* Animated Steam / Snack SVG Graphic */}
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
                Dry Snacks Corner
              </span>

              {/* Decorative Tagline Line */}
              <div className="flex items-center justify-center gap-3 mt-4">
                <span className="h-[1px] w-8 sm:w-12 bg-[#2A1810]/20"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C08A34]"></span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A4632]">
                  Crunchy, Roasted & Traditional
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C08A34]"></span>
                <span className="h-[1px] w-8 sm:w-12 bg-[#2A1810]/20"></span>
              </div>

            </div>

            {/* CATEGORY NAV TABS */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6 pb-4 border-b border-[#2A1810]/15">
              {DRY_SNACKS_MENU_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setActiveTab(sec.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                    activeTab === sec.id
                      ? 'bg-[#C08A34] text-[#F7EFDB] shadow-md border border-[#8E6524]'
                      : 'bg-[#2A1810]/5 text-[#5A4632] hover:bg-[#C08A34]/20 border border-[#2A1810]/15'
                  }`}
                >
                  <span className="text-base">{sec.icon}</span>
                  <span>{sec.title}</span>
                </button>
              ))}
            </div>

            {/* ACTIVE SECTION ITEMS DISPLAY (2 Column Compact Layout) */}
            <div className="max-h-[50vh] overflow-y-auto pr-1 custom-scrollbar">
              {DRY_SNACKS_MENU_SECTIONS.filter(s => s.id === activeTab).map((sec) => (
                <div key={sec.id} className="space-y-4">
                  
                  <div className="flex items-baseline justify-between mb-4 border-b border-[#2A1810]/15 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{sec.icon}</span>
                      <h3 className="font-festive text-xl font-bold text-[#2A1810]">
                        {sec.title}
                      </h3>
                    </div>
                    <span className="font-serif italic text-xs sm:text-sm text-[#5A4632]">
                      {sec.subtitle}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {sec.items.map((itemName, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 pb-2.5 border-b border-dashed border-[#2A1810]/15"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B0402C] flex-shrink-0"></span>
                        <span className="font-festive font-semibold text-base text-[#2A1810]">
                          {itemName}
                        </span>
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
                <span className="font-serif italic text-xs text-[#8E6524]">🥨 ALL IN ONE PLACE 🥨</span>
                <span className="h-[1px] w-12 bg-[#2A1810]/20"></span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#5A4632]/80 block mb-4">
                One Corner · Every Crunch · Always Traditional
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
