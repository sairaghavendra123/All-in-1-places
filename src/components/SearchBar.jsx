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
    <div className="relative z-20 max-w-6xl mx-auto px-4 -mt-10 mb-20">
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-xl">
        
        {/* Top Search Input & Region Filter Row */}
        <div className="flex flex-col lg:flex-row items-center gap-4 mb-6">
          
          {/* Main Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9E3B24]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. Pootharekulu, Punugulu), cities (Vijayawada, Guntur)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 text-sm sm:text-base focus:outline-none focus:border-[#9E3B24] focus:bg-white focus:ring-2 focus:ring-[#9E3B24]/10 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs font-bold bg-stone-200 w-6 h-6 rounded-full flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>

          {/* Region Filter */}
          <div className="flex items-center p-1 bg-stone-100 rounded-2xl border border-stone-200/80 w-full lg:w-auto">
            {['All Cities', 'Andhra Pradesh'].map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region === 'All Cities' ? 'All' : region)}
                className={`flex-1 lg:flex-none px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                  (selectedRegion === 'All' && region === 'All Cities') || selectedRegion === region
                    ? 'bg-[#9E3B24] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
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
              className="px-4 py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap self-stretch lg:self-auto justify-center"
            >
              <RefreshCw className="w-4 h-4 text-[#9E3B24]" />
              <span>Reset</span>
            </button>
          )}

        </div>

        {/* Horizontal Scrollable Category Pills Track */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-wider text-stone-500 font-bold">
            <Filter className="w-3.5 h-3.5 text-[#9E3B24]" />
            <span>Filter by Category:</span>
          </div>

          <div className="horizontal-scroll-container flex items-center gap-2 pb-2 overflow-x-auto w-full no-scrollbar">
            {CATEGORIES_LIST.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 flex-shrink-0 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#1B4D3E] text-white shadow-sm font-bold scale-105'
                    : 'bg-stone-50 text-stone-700 hover:text-stone-900 hover:bg-stone-100 border border-stone-200/80'
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
