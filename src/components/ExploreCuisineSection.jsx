import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ExploreCuisineSection() {
  const regions = [
    {
      id: 'andhra',
      name: 'Andhra Pradesh',
      title: 'Coastal Spices & Rice Heritage',
      description: 'Famous for fiery Guntur chillies, aromatic Godavari sweets like Pootharekulu, coastal seafood, and flavorful rice meals.',
      image: '/hero_bg.jpg',
      specialties: ['Guntur Mirchi Bajji', 'Athreyapuram Pootharekulu', 'Kakinada Gottam Kaja', 'Bhimavaram Bajji Mixture'],
      route: '#street-foods',
    },
    {
      id: 'telangana',
      name: 'Telangana',
      title: 'Deccan Royal Flavors & Irani Culture',
      description: 'Renowned for Hyderabad Irani Chai, Osmania biscuits, millet rotis, spicy mutton curries, and rich Nizam culinary culture.',
      image: '/irani_chai.jpg',
      specialties: ['Irani Chai & Osmania', 'Hyderabadi Haleem', 'Jowar Roti & Naatu Kodi', 'Telangana Sakinalu'],
      route: '#street-foods',
    },
  ];

  return (
    <section id="regions" className="py-20 bg-[#170B07] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9E3B24]">
            REGIONAL DIVERSITY
          </span>
          <h2 className="font-festive text-3xl sm:text-4xl font-bold text-white tracking-tight uppercase">
            Explore By Region
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Taste the distinct culinary identities of Andhra Pradesh and Telangana.
          </p>
        </div>

        {/* Region Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regions.map((region, index) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#1C0D07] rounded-3xl overflow-hidden border border-white/10 shadow-xl group flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C0D07] via-[#1C0D07]/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-[#9E3B24] text-white text-xs font-bold uppercase tracking-wider mb-2 inline-block shadow-md">
                    {region.name}
                  </span>
                  <h3 className="font-festive text-2xl sm:text-3xl font-bold text-white group-hover:text-amber-200 transition-colors">
                    {region.title}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-stone-300 text-sm leading-relaxed">
                  {region.description}
                </p>

                {/* Regional Highlights */}
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-amber-300/90 mb-3">
                    Famous Regional Flavors:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {region.specialties.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-stone-200 text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Explore Action Link */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={region.route}
                    className="text-xs font-bold text-[#9E3B24] hover:text-amber-300 flex items-center gap-1.5 transition-colors group/link uppercase tracking-wider"
                  >
                    <span>Explore {region.name} Dishes</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
