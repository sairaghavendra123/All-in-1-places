import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Flame, Sparkles, BookOpen, ChevronRight, Layers } from 'lucide-react';

export default function FeaturedCities({ cities, onSelectCity }) {
  return (
    <section id="cities" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Regional Food Heritage</span>
          </div>
          <h2 className="font-festive text-3xl sm:text-5xl font-bold text-white mb-4">
            Famous Foods City-Wise
          </h2>
          <p className="text-amber-100/70 text-sm sm:text-base leading-relaxed font-sans">
            Every city in Andhra Pradesh boasts a unique culinary signature passed down through centuries. Click any card to explore recipes, history, and ingredients.
          </p>
        </div>

        {/* Cities Grid */}
        {cities.length === 0 ? (
          <div className="text-center py-16 bg-[#2B160C]/60 rounded-3xl border border-amber-500/20 max-w-md mx-auto">
            <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-3 opacity-60" />
            <h3 className="text-xl font-bold text-amber-200 mb-1">No Dishes Found</h3>
            <p className="text-amber-100/60 text-sm">Try clearing your search query or selecting a different category filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((city, index) => (
              <motion.div
                key={city.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="telugu-card rounded-3xl overflow-hidden flex flex-col group relative"
              >
                {/* City Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={city.image}
                    alt={`${city.famousFood} from ${city.city}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B160C] via-[#2B160C]/30 to-transparent"></div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-[#1C0D07]/80 backdrop-blur-md border border-amber-400/30 text-amber-200 text-xs font-semibold flex items-center gap-1.5 shadow-md">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      {city.city} ({city.state === 'Andhra Pradesh' ? 'AP' : 'TS'})
                    </span>

                    <span className="px-3 py-1 rounded-full bg-[#7A1C1C]/90 backdrop-blur-md border border-amber-400/40 text-amber-100 text-xs font-semibold shadow-md">
                      {city.category}
                    </span>
                  </div>

                  {/* Food Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-festive text-2xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors drop-shadow-md">
                      {city.famousFood}
                    </h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  {/* Description */}
                  <p className="text-amber-100/80 text-sm leading-relaxed line-clamp-2">
                    {city.description}
                  </p>

                  {/* Why Famous Quote */}
                  <div className="bg-[#1C0D07]/60 p-3 rounded-2xl border border-amber-500/20">
                    <span className="block text-[11px] uppercase tracking-wider text-amber-400/80 font-semibold mb-0.5">
                      Why It Is Famous:
                    </span>
                    <p className="text-amber-200/90 text-xs italic line-clamp-2">
                      "{city.whyFamous}"
                    </p>
                  </div>

                  {/* Ingredients Preview Tags */}
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-amber-300/60 font-semibold mb-2">
                      Key Ingredients:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {city.ingredients.slice(0, 4).map((ing, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-200 text-[11px]"
                        >
                          {ing}
                        </span>
                      ))}
                      {city.ingredients.length > 4 && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/5 text-amber-300/60 text-[10px]">
                          +{city.ingredients.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Best Time & Details Action Button */}
                  <div className="pt-3 border-t border-amber-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-amber-300/70">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span className="truncate max-w-[150px]">{city.bestTimeToEat}</span>
                    </div>

                    <button
                      onClick={() => onSelectCity(city)}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7A1C1C] to-[#A32828] hover:from-[#A32828] hover:to-[#D4AF37] text-amber-100 text-xs font-semibold shadow-md flex items-center gap-1.5 transition-all group-hover:translate-x-1"
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
