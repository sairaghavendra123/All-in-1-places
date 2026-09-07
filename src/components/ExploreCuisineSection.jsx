import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ExploreCuisineSection() {
  const regions = [
    {
      id: 'andhra',
      name: 'ANDHRA PRADESH',
      tagline: 'Coastal flavours, bold spices and diverse regional traditions.',
      image: '/hero_bg.jpg',
      cta: 'Explore Andhra →',
      route: '#street-foods',
    },
    {
      id: 'telangana',
      name: 'TELANGANA',
      tagline: 'Rustic flavours, rich traditions and distinctive regional cuisine.',
      image: '/irani_chai.jpg',
      cta: 'Explore Telangana →',
      route: '#street-foods',
    },
  ];

  return (
    <section id="regions" className="py-28 sm:py-32 bg-[#140A07] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* 1. Section Introduction */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300 font-mono">
            EXPLORE BY REGION
          </span>
          <h2 className="font-festive text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
            Two Regions. <br className="hidden sm:inline" /> One Rich Culinary Heritage.
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
            Discover the distinctive flavours, ingredients and food traditions of Andhra Pradesh and Telangana.
          </p>
        </div>

        {/* 2. Main Layout: Two Large Visual Region Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {regions.map((region, index) => (
            <motion.a
              key={region.id}
              href={region.route}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#1C0D07] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group flex flex-col justify-end min-h-[440px] sm:min-h-[480px] relative cursor-pointer hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Image-First Background with Cover Object-Fit */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-stone-900">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-80 group-hover:brightness-90"
                />
                {/* Subtle Bottom Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140A07] via-[#140A07]/50 to-transparent opacity-95" />
              </div>

              {/* Card Content Sitting Over Image */}
              <div className="relative z-10 p-8 sm:p-10 space-y-4">
                <h3 className="font-festive text-3xl sm:text-4xl font-bold text-white tracking-wider group-hover:text-amber-200 transition-colors uppercase">
                  {region.name}
                </h3>

                <p className="text-stone-200 text-sm sm:text-base leading-relaxed font-sans max-w-md">
                  {region.tagline}
                </p>

                <div className="pt-2 flex items-center">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#9E3B24] group-hover:bg-[#832E1A] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all duration-300">
                    <span>{region.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
