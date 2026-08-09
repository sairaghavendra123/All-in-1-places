import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, Award, BookOpen, Utensils, ShieldCheck, Flame } from 'lucide-react';

export default function FoodModal({ city, onClose }) {
  if (!city) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-3xl w-full bg-[#2B160C] rounded-3xl overflow-hidden border border-amber-500/50 shadow-2xl shadow-black my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#1C0D07]/80 text-amber-200 hover:text-white flex items-center justify-center border border-amber-500/40 shadow-lg hover:scale-110 transition-transform"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Banner Image */}
          <div className="relative h-64 sm:h-72">
            <img
              src={city.image}
              alt={city.famousFood}
              className="w-full h-full object-cover filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B160C] via-[#2B160C]/40 to-transparent"></div>
            
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-[#7A1C1C]/90 text-amber-100 text-xs font-bold shadow-md">
                {city.state}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#A32828]/90 text-amber-100 text-xs font-bold shadow-md">
                {city.category}
              </span>
            </div>

            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5" />
                {city.city} Food Heritage
              </span>
              <h2 className="font-festive text-3xl sm:text-4xl font-extrabold text-amber-100 drop-shadow-md">
                {city.famousFood}
              </h2>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
            
            {/* Informational Non-Commercial Banner */}
            <div className="bg-amber-950/60 p-3 rounded-2xl border border-amber-500/30 flex items-center gap-2.5 text-xs text-amber-200">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Cultural & Educational Guide • No Online Ordering or Cart System</span>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5" />
                Dish Overview & Taste Profile
              </h3>
              <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed">
                {city.description}
              </p>
            </div>

            {/* Why Famous Quote */}
            <div className="bg-[#1C0D07] p-4 rounded-2xl border border-amber-500/25">
              <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                Why It Holds Culinary Fame:
              </h4>
              <p className="text-amber-200/90 text-xs sm:text-sm italic">
                "{city.whyFamous}"
              </p>
            </div>

            {/* History */}
            <div>
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                History & Cultural Roots
              </h3>
              <p className="text-amber-200/80 text-xs sm:text-sm leading-relaxed">
                {city.history}
              </p>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                Key Authentic Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {city.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-100 text-xs font-medium"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Best Time */}
            <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between text-xs text-amber-300">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span><strong className="text-amber-200">Best Time to Enjoy:</strong> {city.bestTimeToEat}</span>
              </div>
            </div>

          </div>

          {/* Footer Action */}
          <div className="p-4 bg-[#1C0D07] border-t border-amber-500/30 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#7A1C1C] to-[#A32828] text-amber-100 text-xs font-bold shadow-md hover:scale-105 transition-transform"
            >
              Close Dish Profile
            </button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
