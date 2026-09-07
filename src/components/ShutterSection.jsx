import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const SHUTTER_STORIES = [
  {
    number: 1,
    title: 'Shutter 1 — Beverages & Express',
    category: 'Beverages & Express',
    image: '/irani_chai.jpg',
    description: 'Quick-turnaround thirst quenchers and traditional brewed morning & evening beverages.',
    items: ['Filter Coffee', 'Tea', 'Sugandhi Soda', 'Goli Soda', 'Fresh Juices']
  },
  {
    number: 2,
    title: 'Shutter 2 — Andhra Veg Hot Snacks',
    category: 'Andhra Veg Hot Snacks',
    image: '/guntur_mirchi_bajji.jpg',
    description: 'Piping-hot deep-fried vegetarian street fritters served with chutneys and chopped onions.',
    items: ['Guntur Mirchi Bajji', 'Vijayawada Punugulu', 'Tomato Bajji', 'Aratikaya Bajji']
  },
  {
    number: 3,
    title: 'Shutter 3 — Rayalaseema & Chaat Counter',
    category: 'Rayalaseema & Chaat Counter',
    image: '/bhimavaram_bajji_mixture.jpg',
    description: 'Savory Rayalaseema regional tiffins, street mixtures, and chat delicacies.',
    items: ['Uggani-Bajji Combo', 'Alasanda Vada', 'Masala Batani', 'Bajji Mixture']
  },
  {
    number: 4,
    title: 'Shutter 4 — Hot Non-Veg Fry Counter',
    category: 'Hot Non-Veg Fry Counter',
    image: '/chicken_pakoda.jpg',
    description: 'Spicy double-fried chicken pakodas, bamboo chicken, and crispy non-veg appetizers.',
    items: ['Chicken Pakoda', 'Araku Bongu Chicken', 'Egg Bonda', 'Liver Fry']
  },
  {
    number: 5,
    title: 'Shutter 5 — Authentic Sweets Counter',
    category: 'Authentic Sweets Counter',
    image: '/athreyapuram_pootharekulu.jpg',
    description: 'Heritage sweet recipes, syrup-soaked kajas, paper sweets, and warm festive delicacies.',
    items: ['Atreyapuram Pootharekulu', 'Kakinada Kaja', 'Madugula Halwa', 'Hot Boorelu / Bobbatlu']
  },
  {
    number: 6,
    title: 'Shutter 6 — Dry Snacks & Takeaway Gift Packs',
    category: 'Dry Snacks & Takeaway Gift Packs',
    image: '/chegodilu.jpg',
    description: 'Crunchy festive savories, savory rings, and packaged gift hampers for visitors to take home.',
    items: ['Chegodilu', 'Chekkalu', 'Karam Gavvalu', 'Packed Sweets']
  },
  {
    number: 7,
    title: 'Shutter 7 — Ice Creams & Cool Desserts',
    category: 'Ice Creams & Cool Desserts',
    image: '/ice_creams.jpg',
    description: 'Chilled sundaes, earthenware matka kulfi, and fresh fruit dessert bowls.',
    items: ['Artisanal local ice creams', 'Kulfi', 'Fruit Bowls']
  }
];

export default function ShutterSection({ onOpenShutterModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SHUTTER_STORIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === SHUTTER_STORIES.length - 1 ? 0 : prev + 1));
  };

  const currentStory = SHUTTER_STORIES[currentIndex];

  return (
    <section id="shutter-experience" className="py-24 sm:py-32 bg-[#140A07] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* 1. Section Introduction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300 font-mono">
              6–7 SHUTTER
            </span>
            <h2 className="font-festive text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
              A Different Way to <br className="hidden sm:inline" /> Discover Telugu Food
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
              Explore Telugu food and culture through a visual storytelling experience.
            </p>
          </div>

          {/* Carousel Arrow Navigation & Counter */}
          <div className="flex items-center gap-4 self-start md:self-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-300">
              {String(currentIndex + 1).padStart(2, '0')} / {String(SHUTTER_STORIES.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Story"
                className="p-3 rounded-full bg-white/5 hover:bg-[#9E3B24] border border-white/10 text-white transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Story"
                className="p-3 rounded-full bg-white/5 hover:bg-[#9E3B24] border border-white/10 text-white transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Visual Hero Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1C0D07] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative min-h-[480px] sm:min-h-[540px] flex flex-col justify-between p-6 sm:p-10 group"
        >
          {/* Background Image with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStory.number}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute inset-0 z-0 overflow-hidden bg-stone-900"
            >
              <img
                src={currentStory.image}
                alt={currentStory.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-85 group-hover:brightness-95"
              />
              {/* Subtle Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#140A07] via-[#140A07]/50 to-transparent opacity-95" />
            </motion.div>
          </AnimatePresence>

          {/* Top Floating Badge */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-3.5 py-1.5 rounded-full bg-[#140A07]/80 backdrop-blur-md border border-white/10 text-amber-200 text-xs font-mono uppercase tracking-widest shadow-md">
              VISUAL STORIES • TELUGU CUISINE
            </span>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#9E3B24]/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Counter #{currentStory.number}</span>
            </span>
          </div>

          {/* Bottom Editorial Content Overlay */}
          <div className="relative z-10 space-y-4 max-w-2xl mt-auto pt-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStory.number}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-3"
              >
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-300 block">
                  {currentStory.category}
                </span>

                <h3 className="font-[#Cinzel] font-festive text-3xl sm:text-5xl font-bold text-white group-hover:text-amber-200 transition-colors uppercase leading-tight">
                  {currentStory.title}
                </h3>

                <p className="text-stone-200 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
                  {currentStory.description}
                </p>

                {/* Food Item Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {currentStory.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-[#140A07]/80 backdrop-blur-md text-amber-100 text-xs font-medium border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Single CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenShutterModal}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#9E3B24] hover:bg-[#832E1A] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all duration-300 group/btn hover:scale-102"
              >
                <span>Explore 6–7 Shutter</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
