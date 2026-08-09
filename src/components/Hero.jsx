import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Flame, MapPin, Sparkles, Utensils, BookOpen, ShieldCheck, Store } from 'lucide-react';

export default function Hero({ onOpenShutterModal }) {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Warm Festival Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg.jpg"
          alt="Telugu Food Festival Street"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
        />
        {/* Layered Gradient Overlays for Festival Warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C0D07] via-[#1C0D07]/60 to-[#1C0D07]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B160C]/70 via-transparent to-[#2B160C]/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent"></div>
      </div>

      {/* Floating Decorative Spice & Food Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 text-4xl animate-float opacity-30">🌶️</div>
        <div className="absolute top-1/3 right-12 text-4xl animate-float-delayed opacity-30">🍲</div>
        <div className="absolute bottom-1/4 left-1/5 text-4xl animate-float opacity-20">🍃</div>
        <div className="absolute top-2/3 right-1/4 text-4xl animate-float-delayed opacity-20">🥮</div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Festival Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#7A1C1C]/90 via-[#C2510B]/90 to-[#245428]/90 border border-amber-400/50 text-amber-200 text-xs sm:text-sm font-semibold shadow-gold mb-6"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Authentic Telugu Food Festival Guide</span>
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '8s' }} />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-festive text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white drop-shadow-2xl mb-4"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
            ALL IN ONE PLACES
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <p className="text-lg sm:text-2xl md:text-3xl text-amber-100/90 font-serif italic tracking-wide text-gold-glow">
            "Discover the Famous Foods in Andhra Pradesh"
          </p>
          <p className="text-xs sm:text-sm md:text-base font-sans not-italic text-amber-300 font-bold uppercase tracking-[0.25em] mt-3 bg-amber-500/10 py-1.5 px-4 rounded-full inline-block border border-amber-500/30">
            One Destination • Endless Telugu Flavours
          </p>
        </motion.div>

        {/* Informational Banner Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-amber-900/40 border border-amber-500/30 text-amber-200/80 text-xs sm:text-sm mb-10"
        >
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Preserving Cultural Culinary History • Demonstration & Discovery Only</span>
        </motion.div>

        {/* Primary Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={onOpenShutterModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#7A1C1C] via-[#922A2A] to-[#D4AF37] text-white font-bold text-base sm:text-lg border border-amber-300/40 shadow-festive hover:shadow-red-900/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group animate-pulse"
          >
            <Store className="w-5 h-5 text-amber-100 group-hover:rotate-12 transition-transform" />
            <span>6–7 Shutter Layout</span>
          </button>

          <a
            href="#explore"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#7A1C1C] via-[#922A2A] to-[#5C1D24] text-amber-50 font-bold text-base sm:text-lg shadow-festive hover:shadow-red-900/50 hover:scale-105 transition-all duration-300 border border-amber-400/40 flex items-center justify-center gap-3 group"
          >
            <Utensils className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
            <span>Explore Foods</span>
          </a>

          <a
            href="#map"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#2B160C]/90 hover:bg-[#422416] text-amber-200 font-semibold text-base sm:text-lg border border-amber-500/40 hover:border-amber-400 shadow-wood hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <Compass className="w-5 h-5 text-amber-400" />
            <span>Interactive Map</span>
          </a>

          <a
            href="#gallery"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-semibold text-base sm:text-lg border border-amber-500/30 hover:border-amber-400 shadow-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <BookOpen className="w-5 h-5 text-amber-300" />
            <span>Food Gallery</span>
          </a>
        </motion.div>

        {/* Quick Highlights / Stats Counter */}
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
