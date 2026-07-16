import React, { Suspense } from "react"
import Header from "../Header"
import Footer from "../Footer"
import ProductsPageHeader from "./ProductsPageHeader"
import FilterSortBar from "./FilterSortBar"
import ProductsGrid from "./ProductsGrid"
import Pagination from "./Pagination"

export default function ProductsPage() {
    return (
        <div className="bg-[#13131b] text-[#e4e1ed] font-['Inter'] text-[16px] leading-[1.6] overflow-x-hidden min-h-screen">
            <Header />
            <main className="pt-28 pb-20">
                <div className="max-w-[1280px] mx-auto px-[32px]">
                    <ProductsPageHeader />
                    <Suspense fallback={<div className="h-20" />}>
                        <FilterSortBar />
                    </Suspense>
                    <Suspense fallback={<ProductsGridSkeleton />}>
                        <ProductsGrid />
                    </Suspense>
                    <Suspense fallback={null}>
                        <Pagination />
                    </Suspense>
                </div>
            </main>
            <Footer />
        </div>
    )
}

function ProductsGridSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="bg-[#1f1f27] rounded-2xl border border-[#464554]/20 overflow-hidden">
                    <div className="h-48 w-full bg-[#292932] animate-pulse" />
                    <div className="p-4 space-y-3">
                        <div className="h-4 w-24 bg-[#292932] rounded-full animate-pulse" />
                        <div className="h-6 w-full bg-[#292932] rounded-lg animate-pulse" />
                    </div>
                </div>
            ))}
        </div>
    )
}

