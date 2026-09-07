import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, MapPin, Sparkles } from 'lucide-react';
import { FOOD_GALLERY } from '../data/foodData';

export default function FoodGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryFilter, setGalleryFilter] = useState('All');

  const filterTabs = ['All', 'Traditional Sweet', 'Street Foods', 'Beverages'];

  const filteredGallery = galleryFilter === 'All'
    ? FOOD_GALLERY
    : FOOD_GALLERY.filter((item) => {
        if (galleryFilter === 'Traditional Sweet') return item.category === 'Traditional Sweet';
        if (galleryFilter === 'Street Foods') return item.category === 'Street Foods';
        if (galleryFilter === 'Beverages') return item.category === 'Beverages';
        return true;
      });

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#140A07] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* 1. Section Introduction */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300 font-mono">
            THE TASTE OF TELUGU
          </span>
          <h2 className="font-festive text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
            A Feast for the Eyes
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
            From fiery regional favourites to timeless traditional dishes, explore the flavours that define Telugu cuisine.
          </p>
        </div>

        {/* 2. Filter Category Selector Bar */}
        <div className="flex flex-wrap justify-center gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setGalleryFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                galleryFilter === tab
                  ? 'bg-[#9E3B24] text-white shadow-md'
                  : 'bg-white/5 text-stone-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 3. Asymmetric Magazine Editorial Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start">
          {filteredGallery.map((item, index) => {
            const isFeatured = index === 0 && galleryFilter === 'All';

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedImage(item)}
                className={`group rounded-3xl overflow-hidden cursor-pointer border border-white/10 shadow-2xl bg-[#1C0D07] relative flex flex-col justify-end transition-all duration-300 hover:-translate-y-1.5 ${
                  isFeatured
                    ? 'md:col-span-2 md:row-span-2 h-[420px] sm:h-[500px]'
                    : 'h-[260px] sm:h-[280px]'
                }`}
              >
                {/* Full Cover Image */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-95"
                  />
                  {/* Bottom Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140A07] via-[#140A07]/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                </div>

                {/* Top Badges for Featured Card */}
                {isFeatured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#9E3B24] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                      Featured Photography
                    </span>
                  </div>
                )}

                {/* Minimal Content Overlay */}
                <div className="relative z-10 p-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#9E3B24]" />
                      {item.city}
                    </span>
                    <span className="p-1.5 rounded-full bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <h3 className={`font-festive font-bold text-white group-hover:text-amber-200 transition-colors uppercase leading-tight ${
                    isFeatured ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
                  }`}>
                    {item.title}
                  </h3>

                  {isFeatured && (
                    <p className="text-stone-300 text-xs sm:text-sm line-clamp-2 pt-1 font-sans">
                      {item.caption}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* 4. Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#1C0D07] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white hover:bg-[#9E3B24] flex items-center justify-center border border-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-80 sm:h-[480px] bg-stone-900">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C0D07] via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-6 sm:p-8 space-y-3 bg-[#1C0D07]">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#9E3B24] text-white text-xs font-bold uppercase tracking-wider">
                    {selectedImage.city}
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-300">
                    {selectedImage.category}
                  </span>
                </div>

                <h3 className="font-festive text-2xl sm:text-3xl font-bold text-white uppercase">
                  {selectedImage.title}
                </h3>

                <p className="text-stone-300 text-sm leading-relaxed font-sans">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
