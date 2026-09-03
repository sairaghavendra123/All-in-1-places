import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Flame, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

export default function ExploreCuisineSection({ onCategorySelect }) {
  const regions = [
    {
      id: 'andhra',
      name: 'Andhra Pradesh',
      tagline: 'Coastal Spices, Godavari Sweets & Fiery Harvests',
      image: '/athreyapuram_pootharekulu.jpg',
      badge: 'Coastal & Delta Heritage',
      description: 'Famous for GI-tagged Athreyapuram Pootharekulu, Kakinada Gottam Kaja, Vijayawada Punugulu, and Guntur Mirchi Bajji. Known worldwide for rich pure ghee sweets and aromatic chillies.',
      highlights: ['GI-Tagged Pootharekulu', 'Guntur Chilli Harvest', 'Godavari Riverbank Flavors', 'Vijayawada Street Culture'],
      accentColor: 'from-[#9E3B24] to-[#B85338]',
      badgeBg: 'bg-[#9E3B24]/10 text-[#9E3B24] border-[#9E3B24]/20'
    },
    {
      id: 'telangana',
      name: 'Telangana',
      tagline: 'Royal Deccan Heritage, Warangal Spices & Millet Traditions',
      image: '/irani_chai.jpg',
      badge: 'Deccan & Nizam Heritage',
      description: 'Famous for rich Irani Chai paired with Osmania biscuits, royal Deccan spices, wholesome millet rotis, and vibrant evening street culture across historic hubs.',
      highlights: ['Irani Chai & Osmania Ritual', 'Royal Deccan Spices', 'Traditional Millet Breads', 'Historic Street Stalls'],
      accentColor: 'from-[#1B4D3E] to-[#2E7D32]',
      badgeBg: 'bg-[#1B4D3E]/10 text-[#1B4D3E] border-[#1B4D3E]/20'
    }
  ];

  return (
    <section id="cuisine" className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9E3B24]/10 border border-[#9E3B24]/20 text-[#9E3B24] text-xs font-semibold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Regional Culinary Traditions</span>
          </div>
          <h2 className="font-festive text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-5">
            Explore Telugu Cuisine
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Immerse yourself in the distinct culinary heritage of Telugu lands—from the fiery spice markets of Coastal Andhra to the royal tea rooms of Deccan Telangana.
          </p>
        </div>

        {/* Region Showcase Grid (2 Large Premium Visual Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {regions.map((region, idx) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group bg-white rounded-3xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Top Image Banner Area with Subtle Zoom */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-stone-100">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent" />
                
                {/* Region Badge */}
                <div className="absolute top-5 left-5">
                  <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold border backdrop-blur-md bg-white/90 text-stone-900 shadow-sm`}>
                    {region.badge}
                  </span>
                </div>

                {/* Region Overlay Title */}
                <div className="absolute bottom-5 left-6 right-6">
                  <h3 className="font-festive text-3xl sm:text-4xl font-bold text-white mb-1">
                    {region.name}
                  </h3>
                  <p className="text-amber-200/90 text-xs sm:text-sm font-serif italic">
                    "{region.tagline}"
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {region.description}
                </p>

                {/* Highlights Pills */}
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-3">
                    Signature Culinary Notes
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {region.highlights.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-xl bg-stone-100 text-stone-700 text-xs font-medium border border-stone-200/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-stone-100">
                  <a
                    href="#cities"
                    onClick={() => onCategorySelect && onCategorySelect(region.name)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#9E3B24] hover:text-[#7A2A17] group/link"
                  >
                    <span>Discover {region.name} Cities & Food Stalls</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
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
