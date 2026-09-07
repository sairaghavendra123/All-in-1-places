import React from 'react';
import { Search, Filter, RefreshCw, MapPin } from 'lucide-react';
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
    <div className="relative z-20 max-w-5xl mx-auto px-4 -mt-12 mb-16">
      <div className="bg-[#FAF7F2] text-stone-900 border border-stone-200/80 rounded-3xl p-6 sm:p-7 shadow-xl shadow-black/40">
        
        {/* Top Row: Primary Search Input & Secondary Region Selector */}
        <div className="flex flex-col lg:flex-row items-center gap-3.5 mb-5">
          
          {/* PRIMARY: Visually Dominant Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9E3B24]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search foods (Pootharekulu, Punugulu...), cities (Vijayawada, Guntur)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border border-stone-300 text-stone-900 placeholder-stone-400 text-sm sm:text-base font-sans shadow-sm focus:outline-none focus:border-[#9E3B24] focus:ring-2 focus:ring-[#9E3B24]/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs font-bold bg-stone-100 w-6 h-6 rounded-full flex items-center justify-center border border-stone-300"
              >
                ✕
              </button>
            )}
          </div>

          {/* SECONDARY: Region Filter Tabs */}
          <div className="flex items-center p-1 bg-stone-200/70 rounded-2xl border border-stone-300/80 w-full lg:w-auto">
            {['All Cities', 'Andhra Pradesh'].map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region === 'All Cities' ? 'All' : region)}
                className={`flex-1 lg:flex-none px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 ${
                  (selectedRegion === 'All' && region === 'All Cities') || selectedRegion === region
                    ? 'bg-[#9E3B24] text-white shadow-sm font-bold'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{region}</span>
              </button>
            ))}
          </div>

          {/* Reset Filters Button */}
          {(searchQuery || activeCategory !== 'all' || selectedRegion !== 'All') && (
            <button
              onClick={onResetFilters}
              className="px-4 py-3 rounded-2xl bg-stone-200 hover:bg-stone-300 text-stone-700 border border-stone-300 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap self-stretch lg:self-auto justify-center"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}

        </div>

        {/* TERTIARY: Compact Category Filter Pills Track */}
        <div>
          <div className="flex items-center gap-1.5 mb-2.5 text-xs font-bold uppercase tracking-wider text-stone-500">
            <Filter className="w-3.5 h-3.5 text-[#9E3B24]" />
            <span>Filter Category:</span>
          </div>

          <div className="horizontal-scroll-container flex items-center gap-2 pb-1 overflow-x-auto w-full no-scrollbar">
            {CATEGORIES_LIST.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 flex-shrink-0 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#9E3B24] text-white font-bold shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300'
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
