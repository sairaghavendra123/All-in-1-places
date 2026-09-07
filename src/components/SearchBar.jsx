import React from 'react';
import { Search, Filter, RefreshCw, Sparkles, MapPin } from 'lucide-react';
import { CATEGORIES_LIST } from '../data/foodData';

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  selectedRegion,
  setSelectedRegion,
  onResetFilters
}) {
  return (
    <div className="relative z-20 max-w-6xl mx-auto px-4 -mt-10 mb-16">
      <div className="bg-[#2B160C]/95 backdrop-blur-xl border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80">
        
        {/* Top Search Input & Region Filter Row */}
        <div className="flex flex-col lg:flex-row items-center gap-4 mb-6">
          
          {/* Main Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search foods (e.g. Pootharekulu, Haleem, Punugulu), cities (Vijayawada, Guntur)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-[#1C0D07] border border-amber-500/30 text-amber-100 placeholder-amber-200/40 text-sm sm:text-base focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-400/60 hover:text-amber-300 text-xs font-bold bg-amber-500/10 w-6 h-6 rounded-full flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>

          {/* Region Filter */}
          <div className="flex items-center p-1 bg-[#1C0D07] rounded-2xl border border-amber-500/30 w-full lg:w-auto">
            {['All Cities', 'Andhra Pradesh'].map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region === 'All Cities' ? 'All' : region)}
                className={`flex-1 lg:flex-none px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                  (selectedRegion === 'All' && region === 'All Cities') || selectedRegion === region
                    ? 'bg-gradient-to-r from-[#7A1C1C] to-[#A32828] text-amber-100 shadow-md border border-amber-400/30'
                    : 'text-amber-200/60 hover:text-amber-200 hover:bg-amber-500/10'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{region}</span>
              </button>
            ))}
          </div>

          {/* Reset Filters Button */}
          {(searchQuery || activeCategory !== 'all' || selectedRegion !== 'All') && (
            <button
              onClick={onResetFilters}
              className="px-4 py-3 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap self-stretch lg:self-auto justify-center"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          )}

        </div>

        {/* Horizontal Scrollable Category Pills Track */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-wider text-amber-300/70 font-semibold">
            <Filter className="w-3.5 h-3.5 text-amber-400" />
            <span>Filter by Category (Scroll Horizontal):</span>
          </div>

          <div className="horizontal-scroll-container flex items-center gap-2 pb-2 overflow-x-auto w-full no-scrollbar">
            {CATEGORIES_LIST.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 flex-shrink-0 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#7A1C1C] to-[#D4AF37] text-amber-50 shadow-festive border border-amber-300/50 font-bold scale-105'
                    : 'bg-[#1C0D07]/90 text-amber-100/80 hover:text-amber-200 hover:bg-amber-500/20 border border-amber-500/20'
                }`}
              >
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
