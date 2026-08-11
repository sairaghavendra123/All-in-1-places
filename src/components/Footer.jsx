import React from 'react';
import { Utensils, Heart, Sparkles, MapPin, ShieldCheck, ChevronUp } from 'lucide-react';

export default function Footer({ onCategoryClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#140804] text-amber-100/80 border-t border-amber-500/20 relative z-10 pt-16 pb-12 overflow-hidden">
      
      {/* Decorative Thoranam Garland Line */}
      <div className="thoranam-garland w-full absolute top-0 inset-x-0 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-amber-500/15">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#7A1C1C] via-[#A32828] to-[#D4AF37] p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#1C0D07] rounded-full flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <span className="font-festive text-xl font-bold text-amber-200">
                  ALL IN ONE PLACES
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-amber-400 font-medium">
                  Telugu Culinary Discovery
                </span>
              </div>
            </a>

            <p className="text-amber-200/70 text-xs leading-relaxed max-w-sm">
              <strong className="text-amber-300 font-semibold block mb-1">One Destination • Endless Telugu Flavours</strong>
              Discover the Famous Foods in Andhra Pradesh. Dedicated to preserving ancient recipes, street food culture, and traditional cooking heritage.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-950/80 border border-amber-500/30 text-amber-300 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Educational & Demonstration Project • No Commercial Sales</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-festive text-sm font-bold text-amber-200 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-amber-300 transition-colors">Home</a></li>
              <li><a href="#explore" className="hover:text-amber-300 transition-colors">Explore Foods</a></li>
              <li><a href="#cities" className="hover:text-amber-300 transition-colors">Famous Cities</a></li>
              <li><a href="#street-foods" className="hover:text-amber-300 transition-colors">Popular Street Foods</a></li>
              <li><a href="#map" className="hover:text-amber-300 transition-colors">Interactive AP & TS Map</a></li>
              <li><a href="#gallery" className="hover:text-amber-300 transition-colors">Food Gallery</a></li>
              <li><a href="#funfacts" className="hover:text-amber-300 transition-colors">Did You Know Trivia</a></li>
              <li><a href="#contact" className="hover:text-amber-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Food Categories */}
          <div className="space-y-3">
            <h4 className="font-festive text-sm font-bold text-amber-200 uppercase tracking-wider">
              Food Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#cities" onClick={() => onCategoryClick('Andhra Specials')} className="hover:text-amber-300 transition-colors">Andhra Specials</a></li>
              <li><a href="#cities" onClick={() => onCategoryClick('Traditional Sweet')} className="hover:text-amber-300 transition-colors">Traditional Sweets</a></li>
              <li><a href="#cities" onClick={() => onCategoryClick('Street Foods')} className="hover:text-amber-300 transition-colors">Street Foods</a></li>
              <li><a href="#cities" onClick={() => onCategoryClick('Snacks')} className="hover:text-amber-300 transition-colors">Snacks & Tiffins</a></li>
              <li><a href="#cities" onClick={() => onCategoryClick('Beverages')} className="hover:text-amber-300 transition-colors">Beverages & Drinks</a></li>
            </ul>
          </div>

          {/* Col 4: Top Featured Cities */}
          <div className="space-y-3">
            <h4 className="font-festive text-sm font-bold text-amber-200 uppercase tracking-wider">
              Featured Cities
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#cities" className="hover:text-amber-300 transition-colors">Vijayawada (Challa Punugulu)</a></li>
              <li><a href="#cities" className="hover:text-amber-300 transition-colors">Bhimavaram (Bajji Mixture)</a></li>
              <li><a href="#cities" className="hover:text-amber-300 transition-colors">Athreyapuram (Pootharekulu)</a></li>
              <li><a href="#cities" className="hover:text-amber-300 transition-colors">Kakinada (Gottam Kaja)</a></li>
              <li><a href="#cities" className="hover:text-amber-300 transition-colors">Guntur (Mirchi Bajji)</a></li>
              <li><a href="#cities" className="hover:text-amber-300 transition-colors">Rajahmundry (Rose Milk)</a></li>
              <li><a href="#cities" className="hover:text-amber-300 transition-colors">Bandar / Machilipatnam (Badam Milk)</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-300/60">
          
          <div>
            <p>© {new Date().getFullYear()} ALL IN ONE PLACES. Traditional Telugu Culinary Heritage Guide.</p>
            <p className="text-[11px] text-amber-400/50 mt-0.5">Designed with ❤️ for Andhra Pradesh Food Festival Culture.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a 
              href="mailto:sairaghavendra937@gmail.com" 
              className="text-amber-300 font-semibold hover:text-amber-100 transition-colors flex items-center gap-1.5 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30"
            >
              <span>✉️ sairaghavendra937@gmail.com</span>
            </a>
            <a 
              href="https://wa.me/918309179296" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-300 font-bold hover:text-emerald-100 transition-colors flex items-center gap-1.5 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/40 shadow-sm"
            >
              <span>💬 Chat on WhatsApp</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-all hover:scale-110"
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
