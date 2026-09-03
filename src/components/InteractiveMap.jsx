import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Compass, Sparkles, ChevronRight, Clock, Award, Info, Flame } from 'lucide-react';
import { CITIES_DATA } from '../data/foodData';

export default function InteractiveMap({ onSelectCity }) {
  const [selectedCityId, setSelectedCityId] = useState('vijayawada');

  const selectedCity = CITIES_DATA.find((c) => c.id === selectedCityId) || CITIES_DATA[0];

  return (
    <section id="map" className="py-20 sm:py-28 bg-[#FAF7F2] relative z-10 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B4D3E]/10 border border-[#1B4D3E]/20 text-[#1B4D3E] text-xs font-semibold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Culinary Map</span>
          </div>
          <h2 className="font-festive text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Andhra Pradesh Food Map
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Click on any city pin across Andhra Pradesh to unlock its legendary traditional dish, rich historical origin, and secret ingredients!
          </p>
        </div>

        {/* Interactive Map & Detail View Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Vector SVG Map Container */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xl relative flex flex-col justify-between overflow-hidden">
            
            {/* Map Header Controls */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#9E3B24] animate-ping"></span>
                <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                  Interactive Map Canvas
                </span>
              </div>
              <span className="text-xs text-stone-500 font-medium">
                Showing 7 Primary Andhra Pradesh Culinary Hubs
              </span>
            </div>

            {/* Simulated Geographic AP Map Layout with SVG Paths & Pins */}
            <div className="relative min-h-[420px] sm:min-h-[480px] w-full bg-[#F5F0E8] rounded-2xl border border-stone-200/80 p-4 flex items-center justify-center overflow-hidden">
              
              {/* Decorative State Outline Background Graphics */}
              <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 800 600" fill="none">
                <path d="M 150,200 Q 550,150 750,300 Q 700,550 400,520 Q 200,500 150,200 Z" fill="#1B4D3E" stroke="#9E3B24" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              {/* State Label */}
              <div className="absolute top-12 text-stone-300/80 text-3xl font-bold font-festive tracking-widest pointer-events-none uppercase">
                Andhra Pradesh
              </div>

              {/* City Interactive Pins */}
              {CITIES_DATA.map((city) => {
                const isSelected = city.id === selectedCityId;
                return (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCityId(city.id)}
                    style={{ left: `${city.coordinates.x}%`, top: `${city.coordinates.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
                  >
                    {/* Pulsing ring around selected pin */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeMapPin"
                        className="absolute -inset-3 rounded-full bg-amber-400/40 border-2 border-amber-300 animate-ping"
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}

                    {/* Marker Button Icon */}
                    <div
                      className={`relative z-10 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 shadow-xl ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#7A1C1C] to-[#D4AF37] text-amber-100 scale-125 ring-2 ring-amber-300 shadow-red-900/50'
                          : 'bg-[#2B160C]/90 hover:bg-[#7A1C1C] text-amber-200/90 border border-amber-500/40 hover:scale-110'
                      }`}
                    >
                      <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-200' : 'text-amber-400'}`} />
                      <span className="whitespace-nowrap">{city.city}</span>
                    </div>

                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-[#1C0D07] text-amber-100 text-[11px] px-2.5 py-1 rounded-md border border-amber-400/40 whitespace-nowrap z-30 shadow-lg">
                      {city.famousFood}
                    </div>
                  </button>
                );
              })}

            </div>

            {/* Quick City Selection Buttons Strip below map */}
            <div className="mt-6 flex flex-wrap gap-2">
              {CITIES_DATA.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setSelectedCityId(city.id)}
                  className={`px-3 py-1 rounded-xl text-xs font-medium transition-all ${
                    selectedCityId === city.id
                      ? 'bg-amber-500 text-amber-950 font-bold shadow-md'
                      : 'bg-[#1C0D07] text-amber-200/60 hover:text-amber-200 hover:bg-amber-500/10 border border-amber-500/20'
                  }`}
                >
                  {city.city}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Selected City Food Spotlight Drawer */}
          <div className="lg:col-span-5 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCity.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="telugu-card rounded-3xl p-6 sm:p-8 flex-1 flex flex-col justify-between border border-amber-500/40 relative overflow-hidden"
              >
                {/* Background Food Watermark */}
                <div className="absolute top-0 right-0 w-64 h-64 -mr-16 -mt-16 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  {/* City Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#7A1C1C]/90 text-amber-200 text-xs font-bold uppercase tracking-wider">
                      {selectedCity.state}
                    </span>
                    <span className="text-xs text-amber-300/80 font-medium">
                      Category: {selectedCity.category}
                    </span>
                  </div>

                  <h3 className="font-festive text-3xl font-extrabold text-amber-100 mb-1">
                    {selectedCity.famousFood}
                  </h3>
                  <div className="text-amber-400 font-semibold text-sm mb-4 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-300" />
                    <span>Famous Specialty of {selectedCity.city}</span>
                  </div>

                  {/* Food Image Preview */}
                  <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 border border-amber-500/30 shadow-lg">
                    <img
                      src={selectedCity.image}
                      alt={selectedCity.famousFood}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C0D07] via-transparent to-transparent"></div>
                  </div>

                  {/* Description */}
                  <p className="text-amber-100/90 text-sm leading-relaxed mb-4">
                    {selectedCity.description}
                  </p>

                  {/* Historical Origin */}
                  <div className="mb-4 bg-[#1C0D07]/80 p-4 rounded-2xl border border-amber-500/20">
                    <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      Historical Heritage & Origin
                    </h4>
                    <p className="text-amber-200/80 text-xs leading-relaxed">
                      {selectedCity.history}
                    </p>
                  </div>

                  {/* Key Ingredients */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
                      Authentic Ingredients:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCity.ingredients.map((ing, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/25 text-amber-100 text-xs"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between">
                  <div className="text-xs text-amber-300/70 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{selectedCity.bestTimeToEat}</span>
                  </div>

                  <button
                    onClick={() => onSelectCity(selectedCity)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7A1C1C] via-[#A32828] to-[#D4AF37] hover:scale-105 text-amber-100 text-xs font-bold shadow-festive flex items-center gap-2 transition-all"
                  >
                    <span>Full Dish Profile</span>
                    <ChevronRight className="w-4 h-4" />
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
