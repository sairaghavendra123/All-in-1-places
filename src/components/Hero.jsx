import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenShutterModal }) {
  return (
    <section id="hero" className="relative min-h-[72vh] sm:min-h-[78vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#140A07]">
      {/* Authentic Food Photography Background Fill with Subtle Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg.jpg"
          alt="Authentic Telugu Culinary Spread"
          className="w-full h-full object-cover object-center filter brightness-75 contrast-105"
        />
        {/* Soft Dark Vignette Overlay ensuring food remains clearly visible while guaranteeing crisp text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140A07] via-[#140A07]/50 to-[#140A07]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#140A07]/60 via-transparent to-[#140A07]/60"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Centered Elegant Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-festive text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md leading-tight"
        >
          Discover the Taste of Telugu
        </motion.h1>

        {/* Short Concise Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm sm:text-base md:text-lg text-stone-200 font-sans font-normal max-w-xl mx-auto leading-relaxed"
        >
          Explore authentic dishes, rich culinary traditions and the food culture of Andhra Pradesh and Telangana.
        </motion.p>

        {/* Exactly Two Refined Primary Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2"
        >
          <a
            href="#street-foods"
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#9E3B24] hover:bg-[#832E1A] text-white font-bold text-sm shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Explore Dishes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#cities"
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-black/40 hover:bg-black/60 text-stone-200 font-semibold text-sm border border-white/20 backdrop-blur-sm shadow-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-amber-300" />
            <span>Explore Places</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
