import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturedProducts from './FeaturedProducts';
import FeaturesSection from './FeaturesSection';
import StatsSection from './StatsSection';
import TestimonialsSection from './TestimonialsSection';
import PricingSection from './PricingSection';
import FaqSection from './FaqSection';
import Footer from './Footer';

export default function NexusMarketplace() {
  return (
    <div className="bg-[#13131b] text-[#e4e1ed] font-['Inter'] text-[16px] leading-[1.6] overflow-x-hidden min-h-screen">
      <Header />
      <main className="mt-20">
        <HeroSection />
        <FeaturedProducts />
        <FeaturesSection />
        <StatsSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
