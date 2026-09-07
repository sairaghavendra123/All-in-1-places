import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Utensils } from 'lucide-react';
import { POPULAR_STREET_FOODS } from '../data/foodData';

export default function PopularStreetFoods({ onOpenChaiMenu, onOpenJuiceMenu, onOpenDrySnacksMenu, onOpenChickenPakodaMenu, onOpenIceCreamMenu, onOpenPaniPuriMenu, onOpenBajjiMixtureMenu, onOpenShawarmaMenu }) {
  return (
    <section id="street-foods" className="py-24 bg-[#140A07] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9E3B24]">
            Culinary Selection
          </span>
          <h2 className="font-festive text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Popular Telugu Dishes
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Discover authentic delicacies and street food culture from across Andhra Pradesh and Telangana.
          </p>
        </div>

        {/* Popular Dishes Image-First Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POPULAR_STREET_FOODS.map((item, index) => {
            const isChaiItem = item.id === 'irani-chai-osmania';
            const isJuiceItem = item.id === 'fruit-juices';
            const isChegodiluItem = item.id === 'chegodilu';
            const isPakodaItem = item.id === 'chicken-pakoda';
            const isIceCreamItem = item.id === 'ice-creams';
            const isPaniPuriItem = item.id === 'pani-puri';
            const isBajjiMixtureItem = item.id === 'bajji-mixture';
            const isShawarmaItem = item.id === 'shawarma';
            const isInteractive = isChaiItem || isJuiceItem || isChegodiluItem || isPakodaItem || isIceCreamItem || isPaniPuriItem || isBajjiMixtureItem || isShawarmaItem;

            const handleCardClick = () => {
              if (isChaiItem && onOpenChaiMenu) onOpenChaiMenu();
              if (isJuiceItem && onOpenJuiceMenu) onOpenJuiceMenu();
              if (isChegodiluItem && onOpenDrySnacksMenu) onOpenDrySnacksMenu();
              if (isPakodaItem && onOpenChickenPakodaMenu) onOpenChickenPakodaMenu();
              if (isIceCreamItem && onOpenIceCreamMenu) onOpenIceCreamMenu();
              if (isPaniPuriItem && onOpenPaniPuriMenu) onOpenPaniPuriMenu();
              if (isBajjiMixtureItem && onOpenBajjiMixtureMenu) onOpenBajjiMixtureMenu();
              if (isShawarmaItem && onOpenShawarmaMenu) onOpenShawarmaMenu();
            };

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={isInteractive ? handleCardClick : undefined}
                className={`bg-[#1C0D07] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:border-[#9E3B24]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${
                  isInteractive ? 'cursor-pointer' : ''
                }`}
              >
                {/* LARGE FOOD IMAGE */}
                <div className="relative h-60 w-full overflow-hidden bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C0D07] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md bg-[#140A07]/80 backdrop-blur-md text-amber-200/90 text-xs font-medium border border-white/10">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Location Badge */}
                    <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#9E3B24]" />
                      <span className="truncate">{item.origin}</span>
                    </div>

                    {/* Dish Title */}
                    <h3 className="font-festive text-xl font-bold text-white group-hover:text-amber-200 transition-colors mb-2">
                      {item.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Explore Dish Action */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#9E3B24] group-hover:text-amber-300 flex items-center gap-1 transition-colors">
                      <span>Explore Dish</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {isInteractive && (
                      <span className="text-[10px] text-stone-400 font-mono bg-white/5 px-2 py-0.5 rounded">
                        Menu Card Inside
                      </span>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
