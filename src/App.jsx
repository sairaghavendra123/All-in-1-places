import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import FeaturedCities from './components/FeaturedCities';
import PopularStreetFoods from './components/PopularStreetFoods';
import InteractiveMap from './components/InteractiveMap';
import FoodCategories from './components/FoodCategories';
import FoodGallery from './components/FoodGallery';
import FoodModal from './components/FoodModal';
import ShutterAllocationModal from './components/ShutterAllocationModal';
import ChaiMenuModal from './components/ChaiMenuModal';
import JuiceMenuModal from './components/JuiceMenuModal';
import DrySnacksMenuModal from './components/DrySnacksMenuModal';
import ChickenPakodaMenuModal from './components/ChickenPakodaMenuModal';
import IceCreamMenuModal from './components/IceCreamMenuModal';
import PaniPuriMenuModal from './components/PaniPuriMenuModal';
import BajjiMixtureMenuModal from './components/BajjiMixtureMenuModal';
import ShawarmaMenuModal from './components/ShawarmaMenuModal';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { CITIES_DATA } from './data/foodData';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCityModal, setSelectedCityModal] = useState(null);
  const [isShutterModalOpen, setIsShutterModalOpen] = useState(false);
  const [isChaiModalOpen, setIsChaiModalOpen] = useState(false);
  const [isJuiceModalOpen, setIsJuiceModalOpen] = useState(false);
  const [isDrySnacksModalOpen, setIsDrySnacksModalOpen] = useState(false);
  const [isChickenPakodaModalOpen, setIsChickenPakodaModalOpen] = useState(false);
  const [isIceCreamModalOpen, setIsIceCreamModalOpen] = useState(false);
  const [isPaniPuriModalOpen, setIsPaniPuriModalOpen] = useState(false);
  const [isBajjiMixtureModalOpen, setIsBajjiMixtureModalOpen] = useState(false);
  const [isShawarmaModalOpen, setIsShawarmaModalOpen] = useState(false);

  // Filter cities based on search, category, and region
  const filteredCities = useMemo(() => {
    return CITIES_DATA.filter((item) => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.famousFood.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category filter
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;

      // Region filter
      const matchesRegion =
        selectedRegion === 'All' || item.state === selectedRegion;

      return matchesSearch && matchesCategory && matchesRegion;
    });
  }, [searchQuery, activeCategory, selectedRegion]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setSelectedRegion('All');
  };

  return (
    <div className="min-h-screen bg-[#1C0D07] text-[#FFF8F0] selection:bg-[#7A1C1C] selection:text-white font-sans">
      
      {/* Navigation Bar */}
      <Navbar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        onOpenShutterModal={() => setIsShutterModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenShutterModal={() => setIsShutterModalOpen(true)} />

        {/* Search & Filtering Control Panel */}
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          onResetFilters={handleResetFilters}
        />

        {/* Featured Cities Showcase */}
        <FeaturedCities
          cities={filteredCities}
          onSelectCity={(city) => setSelectedCityModal(city)}
        />

        {/* Popular Street Foods */}
        <PopularStreetFoods
          onOpenChaiMenu={() => setIsChaiModalOpen(true)}
          onOpenJuiceMenu={() => setIsJuiceModalOpen(true)}
          onOpenDrySnacksMenu={() => setIsDrySnacksModalOpen(true)}
          onOpenChickenPakodaMenu={() => setIsChickenPakodaModalOpen(true)}
          onOpenIceCreamMenu={() => setIsIceCreamModalOpen(true)}
          onOpenPaniPuriMenu={() => setIsPaniPuriModalOpen(true)}
          onOpenBajjiMixtureMenu={() => setIsBajjiMixtureModalOpen(true)}
          onOpenShawarmaMenu={() => setIsShawarmaModalOpen(true)}
        />

        {/* Interactive AP & TS Map */}
        <InteractiveMap
          onSelectCity={(city) => setSelectedCityModal(city)}
        />

        {/* Food Categories */}
        <FoodCategories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Food Gallery */}
        <FoodGallery />

        {/* About Section */}
        <AboutSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onCategoryClick={(cat) => {
          setActiveCategory(cat);
          document.getElementById('cities')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Modal Dialog for Dish Details */}
      {selectedCityModal && (
        <FoodModal
          city={selectedCityModal}
          onClose={() => setSelectedCityModal(null)}
        />
      )}

      {/* Modal Dialog for Shutter Menu Allocation Guide */}
      <ShutterAllocationModal
        isOpen={isShutterModalOpen}
        onClose={() => setIsShutterModalOpen(false)}
      />

      {/* Modal Dialog for Chai & Coffee Corner Menu Card */}
      <ChaiMenuModal
        isOpen={isChaiModalOpen}
        onClose={() => setIsChaiModalOpen(false)}
      />

      {/* Modal Dialog for Juices & Milkshakes Corner Menu Card */}
      <JuiceMenuModal
        isOpen={isJuiceModalOpen}
        onClose={() => setIsJuiceModalOpen(false)}
      />

      {/* Modal Dialog for Dry Snacks Corner Menu Card */}
      <DrySnacksMenuModal
        isOpen={isDrySnacksModalOpen}
        onClose={() => setIsDrySnacksModalOpen(false)}
      />

      {/* Modal Dialog for Chicken Pakoda Corner Menu Card */}
      <ChickenPakodaMenuModal
        isOpen={isChickenPakodaModalOpen}
        onClose={() => setIsChickenPakodaModalOpen(false)}
      />

      {/* Modal Dialog for Ice Cream Corner Menu Card */}
      <IceCreamMenuModal
        isOpen={isIceCreamModalOpen}
        onClose={() => setIsIceCreamModalOpen(false)}
      />

      {/* Modal Dialog for Pani Puri & Chaat Corner Menu Card */}
      <PaniPuriMenuModal
        isOpen={isPaniPuriModalOpen}
        onClose={() => setIsPaniPuriModalOpen(false)}
      />

      {/* Modal Dialog for Bajji Mixture Corner Menu Card */}
      <BajjiMixtureMenuModal
        isOpen={isBajjiMixtureModalOpen}
        onClose={() => setIsBajjiMixtureModalOpen(false)}
      />

      {/* Modal Dialog for Shawarma Corner Menu Card */}
      <ShawarmaMenuModal
        isOpen={isShawarmaModalOpen}
        onClose={() => setIsShawarmaModalOpen(false)}
      />

      {/* Floating WhatsApp Quick Action Button (FAB) */}
      <a
        href="https://wa.me/918309179296"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white font-bold text-xs sm:text-sm shadow-2xl shadow-emerald-900/60 border border-emerald-300/40 hover:scale-110 transition-all duration-300 animate-bounce"
        style={{ animationDuration: '3s' }}
        title="Direct WhatsApp Chat: +91 8309179296"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-100"></span>
        </span>
        <span className="font-sans tracking-wide">WhatsApp Us</span>
        <span className="text-[11px] bg-black/30 px-2 py-0.5 rounded-full font-mono text-emerald-200">8309179296</span>
      </a>

    </div>
  );
}
