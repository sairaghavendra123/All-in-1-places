import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Sparkles, MapPin, Lightbulb, Compass } from 'lucide-react';
import { POPULAR_STREET_FOODS } from '../data/foodData';

export default function PopularStreetFoods({ onOpenChaiMenu, onOpenJuiceMenu, onOpenDrySnacksMenu, onOpenChickenPakodaMenu, onOpenIceCreamMenu, onOpenPaniPuriMenu, onOpenBajjiMixtureMenu, onOpenShawarmaMenu }) {
  return (
    <section id="street-foods" className="py-20 bg-[#170B06] relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>Telugu Night Market Culture</span>
          </div>
          <h2 className="font-festive text-3xl sm:text-5xl font-bold text-white mb-4">
            Popular Street Foods
          </h2>
          <p className="text-amber-100/70 text-sm sm:text-base leading-relaxed">
            From sizzling highway food stalls to bustling evening street corners, experience the beloved street flavors that fuel daily life in Andhra Pradesh.
          </p>
        </div>

        {/* Street Foods Grid */}
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={isInteractive ? handleCardClick : undefined}
                className={`telugu-card rounded-3xl overflow-hidden flex flex-col group relative ${
                  isInteractive ? 'cursor-pointer hover:border-amber-400 ring-2 ring-amber-500/30' : ''
                }`}
              >
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B160C] via-[#2B160C]/20 to-transparent"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    {isInteractive && (
                      <span className="px-3 py-1 rounded-full bg-[#C08A34] text-[#2A1810] text-xs font-bold shadow-lg animate-bounce">
                        📖 Menu Card Inside
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full bg-[#7A1C1C]/90 text-amber-50 text-xs font-semibold shadow-md">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-festive text-2xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  <p className="text-amber-100/80 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Origin */}
                  <div className="flex items-start gap-2 text-xs text-amber-300/80 bg-[#1C0D07]/60 p-3 rounded-2xl border border-amber-500/15">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-amber-300 uppercase text-[10px]">Street Hub:</span>
                      <span>{item.origin}</span>
                    </div>
                  </div>

                  {/* Fun Fact Callout */}
                  <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-3.5 rounded-2xl border border-amber-400/30 flex items-start gap-2.5">
                    <Lightbulb className="w-4 h-4 text-amber-300 shrink-0 mt-0.5 animate-bounce" style={{ animationDuration: '3s' }} />
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                        Telugu Fun Fact:
                      </span>
                      <p className="text-amber-100/90 text-xs italic">
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
