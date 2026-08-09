import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Crown, Cookie, Utensils, Coffee, GlassWater, Sparkles, ChevronRight } from 'lucide-react';
import { CATEGORIES_LIST } from '../data/foodData';

const iconMap = {
  Sparkles: Sparkles,
  Flame: Flame,
  Crown: Crown,
  Cookie: Cookie,
  Utensils: Utensils,
  Coffee: Coffee,
  GlassWater: GlassWater
};

export default function FoodCategories({ activeCategory, setActiveCategory }) {
  // Exclude 'all' for the grid display
  const categoryGrid = CATEGORIES_LIST.filter((c) => c.id !== 'all');

  return (
    <section id="explore" className="py-16 bg-[#170B06] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Culinary Genres</span>
          </div>
          <h2 className="font-festive text-3xl sm:text-5xl font-bold text-white mb-4">
            Food Categories
          </h2>
          <p className="text-amber-100/70 text-sm sm:text-base leading-relaxed">
            Explore the diverse spectrum of Telugu food—from royal Nizam gravies and fiery Andhra pickles to paper-thin sweets and cooling street drinks.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryGrid.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Sparkles;
            const isSelected = activeCategory === cat.id;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                onClick={() => {
                  setActiveCategory(cat.id);
                  document.getElementById('cities')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`cursor-pointer p-6 rounded-3xl transition-all duration-300 relative overflow-hidden border flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#7A1C1C] via-[#C2510B] to-[#2B160C] border-amber-400/80 shadow-gold scale-[1.02]'
                    : 'bg-[#2B160C]/80 hover:bg-[#3E2117] border-amber-500/30 hover:border-amber-400/60 shadow-wood'
                }`}
              >
                {/* Background Icon Watermark */}
                <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 text-amber-500/5 group-hover:text-amber-500/10 transition-colors pointer-events-none">
                  <IconComponent className="w-full h-full" />
                </div>

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-amber-400 text-amber-950 shadow-md'
                        : 'bg-amber-500/10 text-amber-300 group-hover:bg-amber-500/20'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full bg-[#1C0D07]/80 text-amber-300 text-xs font-semibold border border-amber-500/20">
                      {cat.count}+ Dishes
                    </span>
                  </div>

                  <h3 className="font-festive text-2xl font-bold text-amber-100 mb-2 group-hover:text-amber-300 transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-amber-200/70 text-xs leading-relaxed mb-6">
                    {cat.id === 'Andhra Specials' && 'Fiery coastal fish curries, sour Gongura pachadis, and chilli stuffed mirchi bajjis.'}
                    {cat.id === 'Traditional Sweet' && 'Paper-thin Pootharekulu, syrup soaked Gottam Kaja, and sacred Tirupati Laddus.'}
                    {cat.id === 'Street Foods' && 'Pani puri, spicy chicken pakodas, and RK Beach puffed rice mixtures.'}
                    {cat.id === 'Snacks' && 'Golden fluffy Mysuru bondas, Punugulu, and crisp Rayalaseema Uggani bajjis.'}
                    {cat.id === 'Beverages' && 'Rajahmundry chilled Rose Milk, pot kulfi, and classic Hyderabadi Irani Chai.'}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-amber-500/20 text-xs font-semibold text-amber-300">
                  <span>Browse Category</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
