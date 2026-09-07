import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, MapPin, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenShutterModal }) {
  return (
    <section id="hero" className="relative min-h-[85vh] pt-36 pb-20 flex items-center justify-center overflow-hidden bg-[#140A07]">
      {/* Background Image with Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg.jpg"
          alt="Telugu Culinary Heritage"
          className="w-full h-full object-cover object-center filter brightness-65 contrast-110"
        />
        {/* Soft Vignette Overlay ensuring food remains clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140A07] via-[#140A07]/60 to-[#140A07]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#140A07]/70 via-transparent to-[#140A07]/70"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-festive text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg leading-tight"
        >
          Discover the Taste of Telugu
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-stone-300 font-sans font-normal max-w-2xl mx-auto leading-relaxed"
        >
          Explore authentic dishes, rich culinary traditions and the food culture of Andhra Pradesh and Telangana.
        </motion.p>

        {/* Exactly Two Primary Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="#street-foods"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#9E3B24] hover:bg-[#832E1A] text-white font-bold text-base shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Explore Dishes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#cities"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-sm shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-amber-300" />
            <span>Explore Places</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
