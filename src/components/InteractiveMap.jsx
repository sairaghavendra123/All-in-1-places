import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Compass, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { CITIES_DATA } from '../data/foodData';

export default function InteractiveMap({ onSelectCity }) {
  const [selectedCityId, setSelectedCityId] = useState('vijayawada');

  const selectedCity = CITIES_DATA.find((c) => c.id === selectedCityId) || CITIES_DATA[0];

  return (
    <section id="map" className="py-24 sm:py-32 bg-[#140A07] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* 1. Section Introduction */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300 font-mono">
            DISCOVER BY LOCATION
          </span>
          <h2 className="font-festive text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
            Find the Flavours <br className="hidden sm:inline" /> of Telugu Land
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
            Explore the dishes, ingredients and culinary traditions that make every part of Andhra Pradesh and Telangana unique.
          </p>
        </div>

        {/* 2. Map & Details Split Composition (65/35 Desktop Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: 65-70% Interactive Map Canvas */}
          <div className="lg:col-span-7 bg-[#1C0D07] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative flex flex-col justify-between overflow-hidden">
            
            {/* Header controls strip */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#9E3B24] animate-ping" />
                <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
                  INTERACTIVE CULINARY MAP
                </span>
              </div>
              <span className="text-xs text-stone-400 font-medium">
                {CITIES_DATA.length} Regional Food Hubs
              </span>
            </div>

            {/* Map SVG Canvas Area */}
            <div className="relative min-h-[380px] sm:min-h-[460px] w-full bg-[#140A07] rounded-2xl border border-white/10 p-4 flex items-center justify-center overflow-hidden">
              
              {/* Stylized Coastline & Region Outline SVG */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 800 600" fill="none">
                <path d="M 150,200 Q 550,150 750,300 Q 700,550 400,520 Q 200,500 150,200 Z" fill="#9E3B24" stroke="#FDFBF7" strokeWidth="1.5" strokeDasharray="6 6" />
              </svg>

              {/* Background Watermark Label */}
              <div className="absolute top-8 text-white/5 text-4xl sm:text-6xl font-bold font-festive tracking-widest pointer-events-none uppercase">
                TELUGU LAND
              </div>

              {/* City Map Pins */}
              {CITIES_DATA.map((city) => {
                const isSelected = city.id === selectedCityId;
                return (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCityId(city.id)}
                    style={{ left: `${city.coordinates.x}%`, top: `${city.coordinates.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
                  >
                    {/* Active Pulsing Ring */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeMapPin"
                        className="absolute -inset-3 rounded-full bg-[#9E3B24]/40 border border-[#9E3B24] animate-ping"
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}

                    {/* Marker Pin Button */}
                    <div
                      className={`relative z-10 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 shadow-xl ${
                        isSelected
                          ? 'bg-[#9E3B24] text-white scale-110 border border-amber-300/50 shadow-lg'
                          : 'bg-[#140A07]/90 hover:bg-[#9E3B24] text-stone-200 border border-white/10 hover:scale-105'
                      }`}
                    >
                      <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-200' : 'text-[#9E3B24]'}`} />
                      <span className="whitespace-nowrap font-sans">{city.city}</span>
                    </div>

                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-[#140A07] text-amber-100 text-[11px] px-3 py-1 rounded-lg border border-white/10 whitespace-nowrap z-30 shadow-xl font-medium">
                      {city.famousFood}
                    </div>
                  </button>
                );
              })}

            </div>

            {/* Quick Location Select Pills Strip */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {CITIES_DATA.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setSelectedCityId(city.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCityId === city.id
                      ? 'bg-[#9E3B24] text-white shadow-md'
                      : 'bg-white/5 text-stone-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {city.city}
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT: 30-35% Selected Location Information Panel */}
          <div className="lg:col-span-5 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCity.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[#1C0D07] rounded-3xl p-6 sm:p-8 flex-1 flex flex-col justify-between border border-white/10 shadow-2xl relative overflow-hidden group"
              >
                <div>
                  {/* Location Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#9E3B24] text-white text-xs font-bold uppercase tracking-wider">
                      {selectedCity.state}
                    </span>
                    <span className="text-xs text-amber-300/80 font-mono uppercase tracking-wider font-semibold">
                      {selectedCity.category}
                    </span>
                  </div>

                  {/* Famous Dish Name & Location Subtitle */}
                  <h3 className="font-festive text-2xl sm:text-3xl font-bold text-white group-hover:text-amber-200 transition-colors uppercase leading-tight mb-1">
                    {selectedCity.famousFood}
                  </h3>
                  <div className="text-stone-300 font-medium text-xs sm:text-sm mb-5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#9E3B24]" />
                    <span>Famous Specialty of {selectedCity.city}</span>
                  </div>

                  {/* Food Image Preview */}
                  <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-lg bg-stone-900">
                    <img
                      src={selectedCity.image}
                      alt={selectedCity.famousFood}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C0D07] via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Description */}
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {selectedCity.description}
                  </p>

                  {/* Why Famous / History Excerpt */}
                  {selectedCity.whyFamous && (
                    <div className="mb-4 bg-[#140A07]/80 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                      <span className="block text-[10px] uppercase tracking-wider text-amber-300/80 font-bold mb-0.5 font-mono">
                        Why It Is Famous
                      </span>
                      <p className="text-stone-300 text-xs italic leading-relaxed">
                        "{selectedCity.whyFamous}"
                      </p>
                    </div>
                  )}

                  {/* Key Ingredients */}
                  <div className="mb-6">
                    <span className="block text-[10px] uppercase tracking-wider text-amber-300/80 font-bold mb-2 font-mono">
                      Key Ingredients:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCity.ingredients.map((ing, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-stone-200 text-xs"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-stone-400 font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#9E3B24]" />
                    <span className="truncate max-w-[130px]">{selectedCity.bestTimeToEat}</span>
                  </div>

                  <button
                    onClick={() => onSelectCity(selectedCity)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#9E3B24] hover:bg-[#832E1A] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all group/btn"
                  >
                    <span>Explore Dish</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
