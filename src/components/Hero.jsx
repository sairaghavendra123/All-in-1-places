import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Utensils, BookOpen, ShieldCheck, Store, MapPin, Award } from 'lucide-react';

export default function Hero({ onOpenShutterModal }) {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-36 pb-20 flex items-center justify-center overflow-hidden bg-[#FAF7F2]">
      {/* Background Image Frame with Cinematic Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg.jpg"
          alt="Telugu Culinary Heritage Background"
          className="w-full h-full object-cover object-center filter brightness-50 contrast-125 scale-105"
        />
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/75 to-[#1C1917]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/80 via-transparent to-[#1C1917]/80"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Culture Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-200 text-xs sm:text-sm font-semibold shadow-md mb-6"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Authentic Telugu Food Discovery Platform</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-festive text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white drop-shadow-2xl mb-4"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
            ALL IN ONE PLACES
          </span>
        </motion.h1>

        {/* Taglines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-amber-100/90 font-serif italic tracking-wide">
            "Discover the Famous Foods in Andhra Pradesh"
          </p>
          <p className="text-xs sm:text-sm font-sans not-italic text-amber-300 font-bold uppercase tracking-[0.25em] mt-4 bg-white/10 backdrop-blur-sm py-2 px-5 rounded-full inline-block border border-white/15">
            ONE DESTINATION • ENDLESS TELUGU FLAVOURS
          </p>
        </motion.div>

        {/* Primary Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14"
        >
          <button
            onClick={onOpenShutterModal}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#9E3B24] hover:bg-[#832E1A] text-white font-bold text-base sm:text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <Store className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
            <span>6–7 Shutter Layout</span>
          </button>

          <a
            href="#explore"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#1B4D3E] hover:bg-[#143B2F] text-white font-bold text-base sm:text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <Utensils className="w-5 h-5 text-emerald-200 group-hover:rotate-12 transition-transform" />
            <span>Explore Foods</span>
          </a>

          <a
            href="#map"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base sm:text-lg border border-white/25 backdrop-blur-md shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <Compass className="w-5 h-5 text-amber-300" />
            <span>Interactive Map</span>
          </a>
        </motion.div>

        {/* Key Feature Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <div className="p-4 rounded-2xl bg-[#2B160C]/80 border border-amber-500/20 backdrop-blur-sm">
            <span className="block font-festive text-3xl font-extrabold text-amber-300">15+</span>
            <span className="text-xs uppercase tracking-wider text-amber-200/70 font-medium">Famous Cities</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#2B160C]/80 border border-amber-500/20 backdrop-blur-sm">
            <span className="block font-festive text-3xl font-extrabold text-amber-300">50+</span>
            <span className="text-xs uppercase tracking-wider text-amber-200/70 font-medium">Authentic Recipes</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#2B160C]/80 border border-amber-500/20 backdrop-blur-sm">
            <span className="block font-festive text-3xl font-extrabold text-amber-300">100%</span>
            <span className="text-xs uppercase tracking-wider text-amber-200/70 font-medium">Andhra Pradesh</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#2B160C]/80 border border-amber-500/20 backdrop-blur-sm">
            <span className="block font-festive text-3xl font-extrabold text-amber-300">100%</span>
            <span className="text-xs uppercase tracking-wider text-amber-200/70 font-medium">Heritage Culture</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
