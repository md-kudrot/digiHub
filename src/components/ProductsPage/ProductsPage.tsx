import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ProductsPageHeader from './ProductsPageHeader';
import FilterSortBar from './FilterSortBar';
import ProductsGrid from './ProductsGrid';
import Pagination from './Pagination';

export default function ProductsPage() {
  return (
    <div className="bg-[#13131b] text-[#e4e1ed] font-['Inter'] text-[16px] leading-[1.6] overflow-x-hidden min-h-screen">
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-[1280px] mx-auto px-[32px]">
          <ProductsPageHeader />
          <FilterSortBar />
          <ProductsGrid />
          <Pagination />
        </div>
      </main>
      <Footer />
    </div>
  );
}
