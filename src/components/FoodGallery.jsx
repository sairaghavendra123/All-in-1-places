import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, X, MapPin, Sparkles } from 'lucide-react';
import { FOOD_GALLERY } from '../data/foodData';

export default function FoodGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryFilter, setGalleryFilter] = useState('All');

  const filterTabs = ['All', 'Andhra Specials', 'Traditional Sweet', 'Street Foods', 'Beverages'];

  const filteredGallery = galleryFilter === 'All'
    ? FOOD_GALLERY
    : FOOD_GALLERY.filter((item) => item.category === galleryFilter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF7F2] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9E3B24]/10 border border-[#9E3B24]/20 text-[#9E3B24] text-xs font-semibold uppercase tracking-widest mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Authentic Food Photography</span>
          </div>
          <h2 className="font-festive text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Andhra Food Gallery
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Feast your eyes on high-definition authentic photographs of traditional dishes from every corner of Andhra Pradesh.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setGalleryFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                galleryFilter === tab
                  ? 'bg-[#9E3B24] text-white shadow-sm font-bold'
                  : 'bg-white text-stone-700 hover:text-stone-900 hover:bg-stone-100 border border-stone-200/80'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedImage(item)}
              className="relative group rounded-3xl overflow-hidden cursor-pointer border border-amber-500/30 shadow-xl bg-[#2B160C] h-72"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C0D07] via-[#1C0D07]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6">
                
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-semibold text-amber-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-300" />
                    {item.city}
                  </span>
                  <span className="p-1.5 rounded-full bg-amber-500/20 text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                <h3 className="font-festive text-lg font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-amber-200/70 text-xs line-clamp-2 mt-1">
                  {item.caption}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#2B160C] rounded-3xl overflow-hidden border border-amber-500/40 shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-amber-200 hover:text-white flex items-center justify-center border border-amber-500/40"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-96 sm:h-[450px]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-[#1C0D07]">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#7A1C1C] text-amber-200 text-xs font-bold">
                    {selectedImage.city} • {selectedImage.category}
                  </span>
                </div>
                <h3 className="font-festive text-2xl font-bold text-amber-100 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-amber-200/80 text-sm">
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
