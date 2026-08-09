import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Store, Coffee, Flame, Utensils, Zap, Crown, Gift, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export const SHUTTER_DATA = [
  {
    number: 1,
    title: 'Shutter 1 (Beverages & Express)',
    category: 'Beverages & Express',
    icon: Coffee,
    badgeColor: 'from-amber-600 to-yellow-500',
    borderColor: 'border-amber-500/40',
    items: ['Filter Coffee', 'Tea', 'Sugandhi Soda', 'Goli Soda', 'Fresh Juices'],
    description: 'Quick-turnaround thirst quenchers and traditional brewed morning & evening beverages.'
  },
  {
    number: 2,
    title: 'Shutter 2 (Andhra Veg Hot Snacks)',
    category: 'Andhra Veg Hot Snacks',
    icon: Flame,
    badgeColor: 'from-orange-600 to-red-600',
    borderColor: 'border-orange-500/40',
    items: ['Guntur Mirchi Bajji', 'Vijayawada Punugulu', 'Tomato Bajji', 'Aratikaya Bajji'],
    description: 'Piping-hot deep-fried vegetarian street fritters served with chutneys and chopped onions.'
  },
  {
    number: 3,
    title: 'Shutter 3 (Rayalaseema & Chaat Counter)',
    category: 'Rayalaseema & Chaat Counter',
    icon: Utensils,
    badgeColor: 'from-amber-700 to-orange-500',
    borderColor: 'border-amber-600/40',
    items: ['Uggani-Bajji Combo', 'Alasanda Vada', 'Masala Batani', 'Bajji Mixture'],
    description: 'Savory Rayalaseema regional tiffins, street mixtures, and chat delicacies.'
  },
  {
    number: 4,
    title: 'Shutter 4 (Hot Non-Veg Fry Counter)',
    category: 'Hot Non-Veg Fry Counter',
    icon: Zap,
    badgeColor: 'from-red-700 to-rose-600',
    borderColor: 'border-red-500/40',
    items: ['Chicken Pakoda', 'Araku Bongu Chicken', 'Egg Bonda', 'Liver Fry'],
    description: 'Spicy double-fried chicken pakodas, bamboo chicken, and crispy non-veg appetizers.'
  },
  {
    number: 5,
    title: 'Shutter 5 (Authentic Sweets Counter)',
    category: 'Authentic Sweets Counter',
    icon: Crown,
    badgeColor: 'from-yellow-600 to-amber-500',
    borderColor: 'border-yellow-500/40',
    items: ['Atreyapuram Pootharekulu', 'Kakinada Kaja', 'Madugula Halwa', 'Hot Boorelu / Bobbatlu'],
    description: 'Heritage sweet recipes, syrup-soaked kajas, paper sweets, and warm festive delicacies.'
  },
  {
    number: 6,
    title: 'Shutter 6 (Dry Snacks & Takeaway Gift Packs)',
    category: 'Dry Snacks & Takeaway Gift Packs',
    icon: Gift,
    badgeColor: 'from-emerald-700 to-teal-600',
    borderColor: 'border-emerald-500/40',
    items: ['Chegodilu', 'Chekkalu', 'Karam Gavvalu', 'Packed Sweets'],
    description: 'Crunchy festive savories, savory rings, and packaged gift hampers for visitors to take home.'
  },
  {
    number: 7,
    title: 'Shutter 7 (Ice Creams & Cool Desserts)',
    category: 'Ice Creams & Cool Desserts',
    icon: Sparkles,
    badgeColor: 'from-cyan-600 to-blue-600',
    borderColor: 'border-cyan-500/40',
    items: ['Artisanal local ice creams', 'Kulfi', 'Fruit Bowls'],
    description: 'Chilled sundaes, earthenware matka kulfi, and fresh fruit dessert bowls.'
  }
];

export default function ShutterAllocationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        
        {/* Backdrop click to dismiss */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-[#211008] border-2 border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header Bar with Thoranam Style Background */}
          <div className="bg-gradient-to-r from-[#7A1C1C] via-[#A32828] to-[#7A1C1C] p-6 sm:p-8 text-white relative">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-amber-200/80 hover:text-white bg-black/30 hover:bg-black/50 p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-amber-500/20 rounded-xl border border-amber-400/30 text-amber-300">
                <Store className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">
                Feature Suggestion Guide
              </span>
            </div>

            <h2 className="font-festive text-2xl sm:text-4xl font-bold text-amber-100">
              How to Allocate Your 6–7 Shutters with the Expanded Menu
            </h2>
            <p className="text-amber-200/80 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
              Recommended food festival layout & counter allocation strategy for high crowd throughput and organized kitchen operations.
            </p>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SHUTTER_DATA.map((shutter) => {
                const IconComponent = shutter.icon;
                return (
                  <div
                    key={shutter.number}
                    className={`bg-[#2D170D] rounded-2xl p-5 border ${shutter.borderColor} shadow-lg hover:border-amber-400/60 transition-all duration-300 relative group`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-xl bg-gradient-to-br ${shutter.badgeColor} flex items-center justify-center font-festive font-extrabold text-white text-sm shadow-md`}>
                          #{shutter.number}
                        </span>
                        <div>
                          <h3 className="font-festive text-base sm:text-lg font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                            {shutter.title}
                          </h3>
                        </div>
                      </div>
                      <IconComponent className="w-5 h-5 text-amber-400/60 group-hover:text-amber-300 transition-colors" />
                    </div>

                    <p className="text-amber-200/60 text-xs mb-3 italic">
                      {shutter.description}
                    </p>

                    {/* Food Items Pill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-amber-500/10">
                      {shutter.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-500/10 border border-amber-500/20 text-amber-200"
                        >
                          <CheckCircle2 className="w-3 h-3 text-amber-400" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Recommendation Tip Banner */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200/90 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Store className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>
                  <strong>Pro-Tip:</strong> Placing Beverage Shutter #1 near the entrance and Sweets Shutter #6 near the exit optimizes guest flow!
                </span>
              </div>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7A1C1C] to-[#A32828] text-amber-100 font-bold text-xs hover:from-[#A32828] hover:to-[#D4AF37] transition-all flex items-center gap-1.5 flex-shrink-0 shadow-md"
              >
                <span>Got It</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
