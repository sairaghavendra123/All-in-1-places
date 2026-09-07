import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Compass } from 'lucide-react';

export default function Hero({ onOpenShutterModal }) {
  return (
    <section id="hero" className="relative min-h-[75vh] sm:min-h-[80vh] md:min-h-[78vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#140A07]">
      {/* Authentic Food Photography Background Fill with Subtle Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg.jpg"
          alt="Authentic Telugu Culinary Feast"
          className="w-full h-full object-cover object-center filter brightness-70 contrast-105"
        />
        {/* Soft Vignette Overlay ensuring food remains clearly visible while text is 100% crisp */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140A07] via-[#140A07]/50 to-[#140A07]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#140A07]/70 via-transparent to-[#140A07]/70"></div>
      </div>

      {/* Floating UI Elements */}
      <div className="absolute top-28 left-6 sm:left-12 z-20 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-amber-200 text-xs font-mono">
        <span className="w-2 h-2 rounded-full bg-[#9E3B24] animate-ping"></span>
        <span>ANDHRA PRADESH • Traditional Cuisine</span>
      </div>

      <div className="absolute bottom-8 right-6 sm:right-12 z-20 hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs font-mono">
        <span className="text-[#9E3B24] font-bold">01</span>
        <span className="text-stone-400">/</span>
        <span className="text-stone-400">04</span>
        <div className="flex items-center gap-1 ml-2">
          <span className="w-2 h-2 rounded-full bg-[#9E3B24]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <span className="px-4 py-1.5 rounded-full bg-[#9E3B24]/20 border border-[#9E3B24]/40 text-amber-300 text-xs font-semibold uppercase tracking-[0.2em]">
            TELUGU FOOD DISCOVERY
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-festive text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md leading-tight uppercase"
        >
          Discover the Taste of <br className="hidden sm:inline" />
          <span className="text-amber-200">Telugu</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-stone-200 font-sans font-normal max-w-xl mx-auto leading-relaxed"
        >
          Explore authentic dishes, rich culinary traditions and the food culture of Andhra Pradesh and Telangana.
        </motion.p>

        {/* Primary & Secondary Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2"
        >
          <a
            href="#street-foods"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#9E3B24] hover:bg-[#832E1A] text-white font-bold text-sm shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Explore Dishes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#cities"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-black/40 hover:bg-black/60 text-stone-200 font-semibold text-sm border border-white/20 backdrop-blur-sm shadow-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-amber-300" />
            <span>Explore Places</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
