import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Flame, Sparkles, BookOpen, ChevronRight, Layers } from 'lucide-react';

export default function FeaturedCities({ cities, onSelectCity }) {
  return (
    <section id="cities" className="py-20 sm:py-28 bg-[#FAF7F2] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9E3B24]/10 border border-[#9E3B24]/20 text-[#9E3B24] text-xs font-semibold uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Regional Food Destinations</span>
          </div>
          <h2 className="font-festive text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Explore By City
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Every city in Telugu lands boasts a unique culinary signature passed down through generations. Click any city card to explore its famous delicacies, heritage history, and recipes.
          </p>
        </div>

        {/* Cities Grid */}
        {cities.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 shadow-sm max-w-md mx-auto">
            <Sparkles className="w-12 h-12 text-[#9E3B24] mx-auto mb-3 opacity-60" />
            <h3 className="text-xl font-bold text-stone-900 mb-1">No Dishes Found</h3>
            <p className="text-stone-500 text-sm">Try clearing your search query or selecting a different category filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {cities.map((city, index) => (
              <motion.div
                key={city.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between group"
              >
                {/* City Image Header */}
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <img
                    src={city.image}
                    alt={`${city.famousFood} from ${city.city}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"></div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-stone-900 text-xs font-bold flex items-center gap-1.5 shadow-sm backdrop-blur-sm">
                      <MapPin className="w-3.5 h-3.5 text-[#9E3B24]" />
                      {city.city} ({city.state === 'Andhra Pradesh' ? 'AP' : 'TS'})
                    </span>

                    <span className="px-3 py-1 rounded-full bg-[#1B4D3E] text-white text-xs font-semibold shadow-sm">
                      {city.category}
                    </span>
                  </div>

                  {/* Food Name Overlay */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="font-festive text-2xl font-bold text-white group-hover:text-amber-200 transition-colors drop-shadow-md">
                      {city.famousFood}
                    </h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  {/* Description */}
                  <p className="text-stone-600 text-sm leading-relaxed line-clamp-2">
                    {city.description}
                  </p>

                  {/* Why Famous Quote */}
                  <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200/60">
                    <span className="block text-[11px] uppercase tracking-wider text-[#9E3B24] font-bold mb-0.5">
                      Why It Is Famous:
                    </span>
                    <p className="text-stone-700 text-xs italic line-clamp-2">
                      "{city.whyFamous}"
                    </p>
                  </div>

                  {/* Ingredients Preview Tags */}
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-stone-400 font-bold mb-2">
                      Key Ingredients:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {city.ingredients.slice(0, 4).map((ing, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-full bg-stone-100 border border-stone-200/60 text-stone-700 text-[11px]"
                        >
                          {ing}
                        </span>
                      ))}
                      {city.ingredients.length > 4 && (
                        <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-500 text-[10px]">
                          +{city.ingredients.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Best Time & Details Action Button */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-stone-500">
                      <Clock className="w-3.5 h-3.5 text-[#9E3B24]" />
                      <span className="truncate max-w-[150px]">{city.bestTimeToEat}</span>
                    </div>

                    <button
                      onClick={() => onSelectCity(city)}
                      className="px-4 py-2 rounded-xl bg-[#9E3B24] hover:bg-[#832E1A] text-white text-xs font-bold shadow-sm flex items-center gap-1.5 transition-all group-hover:translate-x-1"
                    >
                      <span>Explore Dish</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
