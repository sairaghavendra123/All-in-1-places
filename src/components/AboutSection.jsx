import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Sparkles, BookOpen, Utensils } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#170B06] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="telugu-card rounded-3xl p-8 sm:p-12 border border-amber-500/40 relative overflow-hidden shadow-2xl">
          
          {/* Background Watermark */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest">
                <Heart className="w-3.5 h-3.5 text-amber-400" />
                <span>Preserving Telugu Culinary History</span>
              </div>

              <h2 className="font-festive text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                About ALL IN ONE PLACES
              </h2>

              <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed">
                <strong>ALL IN ONE PLACES</strong> is created to document, preserve, and celebrate the rich, diverse culinary heritage of <strong>Andhra Pradesh</strong>.
              </p>

              <p className="text-amber-200/80 text-sm leading-relaxed">
                From paper-thin Pootharekulu in East Godavari to royal Hyderabadi Shahi Haleem, spicy Guntur Mirchi Bajjis, and Rayalaseema Uggani, this platform serves as an interactive cultural food discovery guide for food lovers, tourists, historians, and generations to come.
              </p>

              {/* Informational Project Purpose Banner */}
              <div className="bg-[#1C0D07] p-5 rounded-2xl border border-amber-500/30 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Educational & Demonstration Notice</span>
                </div>
                <p className="text-amber-200/80 text-xs sm:text-sm leading-relaxed">
                  This website is <strong>NOT an online food ordering or e-commerce platform</strong>. Visitors can explore famous foods city-wise, learn recipes, view authentic photography, and understand Telugu food culture. There is <strong>NO shopping cart, NO checkout, NO payment gateway, and NO food delivery system</strong>.
                </p>
              </div>

            </div>

            {/* Right Visual Feature Cards */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="p-6 rounded-2xl bg-[#1C0D07]/90 border border-amber-500/20 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-300 flex items-center justify-center shrink-0">
                  <Utensils className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-festive text-lg font-bold text-amber-100">100% Authentic Data</h3>
                  <p className="text-amber-200/70 text-xs mt-1">Curated city-wise recipes, historical origins, ingredients, and fun facts.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#1C0D07]/90 border border-amber-500/20 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-300 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-festive text-lg font-bold text-amber-100">Cultural Preservation</h3>
                  <p className="text-amber-200/70 text-xs mt-1">Highlighting traditional cooking vessels (Matti Patralu), spices, and festival foods.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#1C0D07]/90 border border-amber-500/20 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-300 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-festive text-lg font-bold text-amber-100">Twin States Coverage</h3>
                  <p className="text-amber-200/70 text-xs mt-1">Interactive map spanning all major cities of Andhra Pradesh.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
