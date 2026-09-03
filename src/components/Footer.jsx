import React from 'react';
import { Utensils, Heart, Sparkles, MapPin, ShieldCheck, ChevronUp } from 'lucide-react';

export default function Footer({ onCategoryClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 relative z-10 pt-16 pb-12 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#9E3B24] via-[#C85A32] to-[#D4AF37] p-0.5 shadow-md">
                <div className="w-full h-full bg-stone-900 rounded-full flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <span className="font-festive text-xl font-bold text-white">
                  ALL IN ONE PLACES
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-[#9E3B24] font-bold">
                  Telugu Culinary Discovery
                </span>
              </div>
            </a>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              <strong className="text-amber-200 font-semibold block mb-1">One Destination • Endless Telugu Flavours</strong>
              Discover the Famous Foods in Andhra Pradesh. Dedicated to preserving ancient recipes, street food culture, and traditional cooking heritage.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-stone-800/80 border border-stone-700 text-amber-300 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Educational & Discovery Guide</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-festive text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#cuisine" className="hover:text-white transition-colors">Regional Cuisine</a></li>
              <li><a href="#street-foods" className="hover:text-white transition-colors">Popular Dishes</a></li>
              <li><a href="#cities" className="hover:text-white transition-colors">Explore By City</a></li>
              <li><a href="#map" className="hover:text-white transition-colors">Interactive Map</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Food Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Food Categories */}
          <div className="space-y-3">
            <h4 className="font-festive text-xs font-bold text-white uppercase tracking-wider">
              Food Categories
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#cities" onClick={() => onCategoryClick('all')} className="hover:text-white transition-colors">All Specialties</a></li>
              <li><a href="#cities" onClick={() => onCategoryClick('Traditional Sweet')} className="hover:text-white transition-colors">Traditional Sweets</a></li>
              <li><a href="#cities" onClick={() => onCategoryClick('Street Foods')} className="hover:text-white transition-colors">Street Foods</a></li>
              <li><a href="#cities" onClick={() => onCategoryClick('Beverages')} className="hover:text-white transition-colors">Beverages & Drinks</a></li>
            </ul>
          </div>

          {/* Col 4: Top Featured Cities */}
          <div className="space-y-3">
            <h4 className="font-festive text-xs font-bold text-white uppercase tracking-wider">
              Featured Cities
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#cities" className="hover:text-white transition-colors">Vijayawada (Punugulu)</a></li>
              <li><a href="#cities" className="hover:text-white transition-colors">Bhimavaram (Bajji Mixture)</a></li>
              <li><a href="#cities" className="hover:text-white transition-colors">Athreyapuram (Pootharekulu)</a></li>
              <li><a href="#cities" className="hover:text-white transition-colors">Kakinada (Gottam Kaja)</a></li>
              <li><a href="#cities" className="hover:text-white transition-colors">Guntur (Mirchi Bajji)</a></li>
              <li><a href="#cities" className="hover:text-white transition-colors">Rajahmundry (Rose Milk)</a></li>
              <li><a href="#cities" className="hover:text-white transition-colors">Machilipatnam (Badam Milk)</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          
          <div>
            <p>© {new Date().getFullYear()} ALL IN ONE PLACES. Traditional Telugu Culinary Heritage Guide.</p>
            <p className="text-[11px] text-stone-500 mt-0.5">Designed for Andhra Pradesh Food Discovery Culture.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a 
              href="mailto:sairaghavendra937@gmail.com" 
              className="text-amber-300 font-semibold hover:text-white transition-colors flex items-center gap-1.5 bg-stone-800 px-3.5 py-1.5 rounded-full border border-stone-700"
            >
              <span>✉️ sairaghavendra937@gmail.com</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 transition-all hover:scale-110"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
