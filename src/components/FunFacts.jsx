import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Award, FileText, Leaf, Flame, Smile, Sparkles } from 'lucide-react';
import { FUN_FACTS } from '../data/foodData';

const iconMap = {
  FileText: FileText,
  Leaf: Leaf,
  Award: Award,
  Flame: Flame,
  Smile: Smile
};

export default function FunFacts() {
  return (
    <section className="py-20 bg-[#1A0D07] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
            <span>Interactive Food Trivia</span>
          </div>
          <h2 className="font-festive text-3xl sm:text-5xl font-bold text-white mb-4">
            Did You Know?
          </h2>
          <p className="text-amber-100/70 text-sm sm:text-base leading-relaxed">
            Discover fascinating trivia and hidden secrets behind Andhra Pradesh's most legendary culinary creations!
          </p>
        </div>

        {/* Fun Facts Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FUN_FACTS.map((fact, index) => {
            const IconComp = iconMap[fact.icon] || Lightbulb;
            return (
              <motion.div
                key={fact.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="telugu-card rounded-3xl p-6 flex flex-col justify-between border border-amber-500/30 relative overflow-hidden group hover:border-amber-400/80"
              >
                {/* Glowing Corner Badge */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/20 to-transparent rounded-bl-full pointer-events-none"></div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#7A1C1C] to-[#E66B19] flex items-center justify-center text-amber-200 shadow-md group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                        Fact #{index + 1}
                      </span>
                      <h3 className="font-festive text-lg font-bold text-amber-100">
                        {fact.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 text-xs font-semibold border border-amber-500/20">
                      {fact.highlight}
                    </span>
                  </div>

                  <p className="text-amber-100/80 text-xs sm:text-sm leading-relaxed">
                    "{fact.fact}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-500/15 flex items-center justify-between text-[11px] text-amber-300/60">
                  <span>Telugu Culinary Trivia</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 opacity-60" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
