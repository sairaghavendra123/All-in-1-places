import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Flame, Leaf, Award, ShieldAlert } from 'lucide-react';
import { FOOD_STORIES } from '../data/foodData';

export default function FoodStories() {
  return (
    <section id="stories" className="py-20 bg-[#170B06] relative z-10 overflow-hidden">
      
      {/* Decorative Thoranam Garland Line */}
      <div className="thoranam-garland w-full mb-12 opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Culinary Heritage & Traditions</span>
          </div>
          <h2 className="font-festive text-3xl sm:text-5xl font-bold text-white mb-4">
            Telugu Food Culture & Stories
          </h2>
          <p className="text-amber-100/70 text-sm sm:text-base leading-relaxed">
            Behind every dish lies centuries of royal Nizam patronage, Kakatiya dynasty recipes, coastal fishing traditions, and sacred temple prasadam rituals.
          </p>
        </div>

        {/* Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FOOD_STORIES.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="telugu-card rounded-3xl overflow-hidden flex flex-col group border border-amber-500/30"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B160C] via-[#2B160C]/30 to-transparent"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-amber-400 font-semibold mb-1">
                    {story.subtitle}
                  </span>
                  <h3 className="font-festive text-xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-amber-200/80 text-xs leading-relaxed mt-3">
                    {story.content}
                  </p>
                </div>

                <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between text-xs text-amber-300">
                  <span className="flex items-center gap-1">
                    <Leaf className="w-3.5 h-3.5 text-green-400" />
                    Traditional Heritage
                  </span>
                  <span className="italic text-[11px] text-amber-400/80">Passed down 500+ years</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arati Aaku (Banana Leaf) Dining Rules Feature Box */}
        <div className="mt-16 bg-[#2B160C]/90 rounded-3xl p-8 border border-amber-500/40 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/3 relative h-64 rounded-2xl overflow-hidden border border-amber-500/30">
              <img
                src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80"
                alt="Banana Leaf Feast"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C0D07] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="px-3 py-1 rounded-full bg-[#245428] text-amber-100 text-xs font-bold shadow-md">
                  Arati Aaku Bhojanam
                </span>
              </div>
            </div>

            <div className="w-full lg:w-2/3 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Flame className="w-4 h-4" />
                <span>Sacred Dining Etiquette</span>
              </div>
              <h3 className="font-festive text-2xl sm:text-3xl font-bold text-amber-100">
                The Anatomy of a Traditional Telugu Banana Leaf Feast
              </h3>
              <p className="text-amber-200/80 text-sm leading-relaxed">
                In Telugu custom, eating on a clean banana leaf isn't just eco-friendly—it's a precise culinary science. The top edge of the leaf receives pickles, gun powder (Pappula Podi), salt, and sweets. The bottom center receives steaming hot rice topped with ghee, followed by Pappu (dal), Sambar, Rasam, and finally soothing Perugu (curd).
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs">
                  🌱 Rich in natural Polyphenols
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs">
                  🍯 Fold leaf towards top when satisfied
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs">
                  🌶️ Always ends with digestive Majjiga (Buttermilk)
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
