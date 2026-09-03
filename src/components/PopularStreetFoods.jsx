import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Sparkles, MapPin, Lightbulb, Compass } from 'lucide-react';
import { POPULAR_STREET_FOODS } from '../data/foodData';

export default function PopularStreetFoods({ onOpenChaiMenu, onOpenJuiceMenu, onOpenDrySnacksMenu, onOpenChickenPakodaMenu, onOpenIceCreamMenu, onOpenPaniPuriMenu, onOpenBajjiMixtureMenu, onOpenShawarmaMenu }) {
  return (
    <section id="street-foods" className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B4D3E]/10 border border-[#1B4D3E]/20 text-[#1B4D3E] text-xs font-semibold uppercase tracking-widest mb-4">
            <Utensils className="w-3.5 h-3.5" />
            <span>Heritage Culinary Selection</span>
          </div>
          <h2 className="font-festive text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Popular Telugu Dishes
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            From iconic street delicacies to traditional snacks, discover the mouthwatering flavours that define everyday Telugu culinary culture.
          </p>
        </div>

        {/* Popular Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
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
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={isInteractive ? handleCardClick : undefined}
                className={`bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between group ${
                  isInteractive ? 'cursor-pointer' : ''
                }`}
              >
                {/* Image Container with Subtle Zoom */}
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"></div>
                  
                  {/* Category Pill & Interactive Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    {isInteractive && (
                      <span className="px-3 py-1 rounded-full bg-[#9E3B24] text-white text-xs font-bold shadow-md">
                        📖 Menu Card
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full bg-white/90 text-stone-900 text-xs font-semibold shadow-sm backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="font-festive text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Origin */}
                  <div className="flex items-start gap-2 text-xs text-stone-600 bg-stone-50 p-3 rounded-2xl border border-stone-200/60">
                    <MapPin className="w-4 h-4 text-[#9E3B24] shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-stone-800 uppercase text-[10px]">Location / Origin:</span>
                      <span>{item.origin}</span>
                    </div>
                  </div>

                  {/* Fun Fact Callout */}
                  <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-stone-200/80 flex items-start gap-2.5">
                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-stone-800 tracking-wider">
                        Culinary Heritage Note:
                      </span>
                      <p className="text-stone-600 text-xs italic">
                        "{item.funFact}"
                      </p>
                    </div>
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
