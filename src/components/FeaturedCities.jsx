import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

export default function FeaturedCities({ cities, onSelectCity }) {
  const [activeSlide, setActiveSlide] = useState(1);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft } = scrollContainerRef.current;
    const cardWidth = 340; // Approx card width + gap
    const index = Math.round(scrollLeft / cardWidth) + 1;
    const clamped = Math.min(Math.max(index, 1), cities.length || 1);
    setActiveSlide(clamped);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section id="cities" className="py-24 sm:py-32 bg-[#140A07] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Section Header & Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300 font-mono">
              EXPLORE TELUGU CITIES
            </span>
            <h2 className="font-festive text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
              Every City Has a Flavour
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
              Discover the iconic foods and culinary traditions that make Telugu cities unique.
            </p>
          </div>

          {/* Carousel Arrow Controls & Progress Counter */}
          {cities.length > 0 && (
            <div className="flex items-center gap-4 self-start md:self-auto">
              <span className="text-xs font-mono font-bold tracking-widest text-amber-300">
                {String(activeSlide).padStart(2, '0')} / {String(cities.length).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={scrollLeft}
                  aria-label="Previous slide"
                  className="p-3 rounded-full bg-white/5 hover:bg-[#9E3B24] border border-white/10 text-white transition-all hover:scale-105 active:scale-95 shadow-md"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollRight}
                  aria-label="Next slide"
                  className="p-3 rounded-full bg-white/5 hover:bg-[#9E3B24] border border-white/10 text-white transition-all hover:scale-105 active:scale-95 shadow-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Carousel Content Track */}
        {cities.length === 0 ? (
          <div className="text-center py-16 bg-[#1C0D07] rounded-3xl border border-white/10 max-w-md mx-auto">
            <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-3 opacity-60" />
            <h3 className="text-xl font-bold text-white mb-1">No Cities Found</h3>
            <p className="text-stone-400 text-sm">Try clearing your search query or selecting a different filter.</p>
          </div>
        ) : (
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {cities.map((city, index) => (
              <motion.div
                key={city.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => onSelectCity(city)}
                className="bg-[#1C0D07] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group flex flex-col justify-end min-h-[440px] sm:min-h-[480px] w-[82vw] sm:w-[340px] md:w-[360px] flex-shrink-0 relative cursor-pointer hover:-translate-y-1.5 transition-all duration-300 snap-start"
              >
                {/* Full Cover Image */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-stone-900">
                  <img
                    src={city.image}
                    alt={`${city.famousFood} from ${city.city}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-85 group-hover:brightness-95"
                  />
                  {/* Bottom Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140A07] via-[#140A07]/60 to-transparent opacity-95" />
                </div>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#140A07]/80 backdrop-blur-md border border-white/10 text-amber-200 text-xs font-semibold flex items-center gap-1.5 shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-[#9E3B24]" />
                    <span>{city.city} ({city.state === 'Andhra Pradesh' ? 'AP' : 'TS'})</span>
                  </span>

                  <span className="px-3 py-1 rounded-full bg-[#9E3B24]/90 backdrop-blur-md text-white text-xs font-bold tracking-wider shadow-md">
                    {city.category}
                  </span>
                </div>

                {/* Card Content Overlay */}
                <div className="relative z-10 p-6 sm:p-8 space-y-3.5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300/90 font-mono block mb-1">
                      {city.state}
                    </span>
                    <h3 className="font-festive text-2xl sm:text-3xl font-bold text-white group-hover:text-amber-200 transition-colors uppercase leading-tight">
                      {city.famousFood}
                    </h3>
                  </div>

                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {city.description}
                  </p>

                  {city.whyFamous && (
                    <div className="bg-[#140A07]/80 backdrop-blur-md p-3 rounded-xl border border-white/10">
                      <span className="block text-[10px] uppercase tracking-wider text-amber-300/80 font-bold mb-0.5 font-mono">
                        Why Famous
                      </span>
                      <p className="text-stone-300 text-xs italic line-clamp-2">
                        "{city.whyFamous}"
                      </p>
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between border-t border-white/10">
                    <span className="text-xs text-stone-400 font-medium truncate max-w-[140px]">
                      {city.bestTimeToEat}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCity(city);
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#9E3B24] group-hover:bg-[#832E1A] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
