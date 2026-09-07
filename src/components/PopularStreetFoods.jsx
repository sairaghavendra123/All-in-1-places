import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { POPULAR_STREET_FOODS } from '../data/foodData';

export default function PopularStreetFoods({
  onOpenChaiMenu,
  onOpenJuiceMenu,
  onOpenDrySnacksMenu,
  onOpenChickenPakodaMenu,
  onOpenIceCreamMenu,
  onOpenPaniPuriMenu,
  onOpenBajjiMixtureMenu,
  onOpenShawarmaMenu,
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Traditional Sweets', 'Street Foods', 'Beverages & Drinks'];

  // Featured Dish (Athreyapuram Pootharekulu / Guntur Mirchi Bajji)
  const featuredDish = POPULAR_STREET_FOODS.find((item) => item.id === 'chegodilu') || POPULAR_STREET_FOODS[0];

  // Filtered dishes for cards section
  const filteredDishes = selectedCategory === 'All'
    ? POPULAR_STREET_FOODS
    : POPULAR_STREET_FOODS.filter((item) => {
        if (selectedCategory === 'Traditional Sweets') return item.category === 'Traditional Sweet';
        if (selectedCategory === 'Street Foods') return item.category === 'Street Foods';
        if (selectedCategory === 'Beverages & Drinks') return item.category === 'Beverages';
        return true;
      });

  const handleDishClick = (item) => {
    if (item.id === 'irani-chai-osmania' && onOpenChaiMenu) onOpenChaiMenu();
    if (item.id === 'fruit-juices' && onOpenJuiceMenu) onOpenJuiceMenu();
    if (item.id === 'chegodilu' && onOpenDrySnacksMenu) onOpenDrySnacksMenu();
    if (item.id === 'chicken-pakoda' && onOpenChickenPakodaMenu) onOpenChickenPakodaMenu();
    if (item.id === 'ice-creams' && onOpenIceCreamMenu) onOpenIceCreamMenu();
    if (item.id === 'pani-puri' && onOpenPaniPuriMenu) onOpenPaniPuriMenu();
    if (item.id === 'bajji-mixture' && onOpenBajjiMixtureMenu) onOpenBajjiMixtureMenu();
    if (item.id === 'shawarma' && onOpenShawarmaMenu) onOpenShawarmaMenu();
  };

  return (
    <section id="street-foods" className="py-24 bg-[#140A07] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* 1. Section Introduction */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300 font-mono">
            EXPLORE TELUGU FLAVOURS
          </span>
          <h2 className="font-festive text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
            Discover the Dishes <br className="hidden sm:inline" /> That Define Telugu Cuisine
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
            Explore iconic dishes, traditional sweets, street foods and regional favourites from Andhra Pradesh and Telangana.
          </p>
        </div>

        {/* 2. Featured Food Area (2-Column Banner on Desktop, 55-60% Image Width) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1C0D07] rounded-3xl overflow-hidden border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center group"
        >
          {/* LEFT: 55-60% Large Food Image */}
          <div className="lg:col-span-7 h-72 sm:h-96 lg:h-[420px] relative overflow-hidden bg-stone-900">
            <img
              src={featuredDish.image}
              alt={featuredDish.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C0D07] via-transparent to-transparent opacity-70 lg:hidden" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-[#9E3B24] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                Featured Specialty
              </span>
            </div>
          </div>

          {/* RIGHT: 40-45% Content Details */}
          <div className="lg:col-span-5 p-6 sm:p-10 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300/90 font-mono">
              TRADITIONAL SPECIALTY
            </span>

            <h3 className="font-festive text-2xl sm:text-4xl font-bold text-white group-hover:text-amber-200 transition-colors">
              {featuredDish.name}
            </h3>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              {featuredDish.description}
            </p>

            <div className="flex items-center gap-2 text-xs text-stone-400">
              <MapPin className="w-4 h-4 text-[#9E3B24]" />
              <span className="font-medium">{featuredDish.origin}</span>
            </div>

            <button
              onClick={() => handleDishClick(featuredDish)}
              className="pt-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9E3B24] hover:text-amber-300 transition-colors group/btn"
            >
              <span>Explore Dish</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* 3. Category Filter Selector Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-400 font-mono">
            <Filter className="w-4 h-4 text-[#9E3B24]" />
            <span>Filter Categories:</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#9E3B24] text-white shadow-md'
                    : 'bg-white/5 text-stone-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Popular Dishes Grid (Desktop Multi-Column, Mobile Horizontal Scrollable Track) */}
        <div className="space-y-6">
          <h3 className="font-festive text-2xl font-bold text-white tracking-tight uppercase">
            Popular Dishes
          </h3>

          <div className="horizontal-scroll-container md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-auto no-scrollbar pb-4">
            {filteredDishes.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => handleDishClick(item)}
                className="bg-[#1C0D07] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:border-[#9E3B24]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer min-w-[260px] sm:min-w-0 flex-shrink-0"
              >
                {/* LARGE FOOD IMAGE (Target Height 280-320px) */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-90"
                  />
                  {/* Subtle Image Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C0D07] via-[#1C0D07]/30 to-transparent opacity-90" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#140A07]/80 backdrop-blur-md text-amber-200 text-[10px] font-semibold border border-white/10 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  {/* Dish Name inside lower image area */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h4 className="font-festive text-lg sm:text-xl font-bold text-white group-hover:text-amber-200 transition-colors drop-shadow">
                      {item.name}
                    </h4>
                  </div>
                </div>

                {/* Compact Card Details Footer */}
                <div className="p-4 flex items-center justify-between border-t border-white/5 bg-[#1C0D07]">
                  <div className="flex items-center gap-1.5 text-xs text-stone-400">
                    <MapPin className="w-3.5 h-3.5 text-[#9E3B24]" />
                    <span className="truncate max-w-[140px]">{item.origin}</span>
                  </div>

                  <span className="text-xs font-bold text-[#9E3B24] group-hover:text-amber-300 flex items-center gap-1 transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
