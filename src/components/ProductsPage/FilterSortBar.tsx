import React from "react"
import { Boxes3, ChevronDown, StarFill, TagDollar } from "@gravity-ui/icons"

export default function FilterSortBar() {
    return (
        <div className="bg-[#1f1f27] p-[16px] rounded-2xl shadow-sm border border-[#464554] mb-[24px] sticky top-24 z-40">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[24px]">
                {/* Filters */}
                <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#1b1b23] border border-[#464554] rounded-full cursor-pointer hover:bg-[#1f1f27] transition-colors">
                        <Boxes3 className="w-4 h-4 text-[#c0c1ff]" />
                        <span className="font-['Geist'] text-[14px] font-semibold leading-[1.4] tracking-[0.05em] text-[#e4e1ed]">
                            Category: All
                        </span>
                        <ChevronDown className="w-4 h-4 text-[#c7c4d7]" />
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#1b1b23] border border-[#464554] rounded-full cursor-pointer hover:bg-[#1f1f27] transition-colors">
                        <TagDollar className="w-4 h-4 text-[#c0c1ff]" />
                        <span className="font-['Geist'] text-[14px] font-semibold leading-[1.4] tracking-[0.05em] text-[#e4e1ed]">
                            Price Range
                        </span>
                        <ChevronDown className="w-4 h-4 text-[#c7c4d7]" />
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#1b1b23] border border-[#464554] rounded-full cursor-pointer hover:bg-[#1f1f27] transition-colors">
                        <StarFill className="w-4 h-4 text-[#c0c1ff]" />
                        <span className="font-['Geist'] text-[14px] font-semibold leading-[1.4] tracking-[0.05em] text-[#e4e1ed]">
                            Availability
                        </span>
                        <ChevronDown className="w-4 h-4 text-[#c7c4d7]" />
                    </div>
                    <div className="h-8 w-px bg-[#464554] mx-2"></div>
                    <div className="flex gap-2">
                        <span className="px-4 py-2 bg-[#c0c1ff] text-[#13131b] rounded-full font-['Geist'] text-[14px] font-semibold leading-[1.4] tracking-[0.05em] cursor-pointer">
                            VPN
                        </span>
                        <span className="px-4 py-2 bg-[#292932] text-[#c7c4d7] rounded-full font-['Geist'] text-[14px] font-semibold leading-[1.4] tracking-[0.05em] cursor-pointer hover:bg-[#1f1f27] transition-colors">
                            Gmail
                        </span>
                        <span className="px-4 py-2 bg-[#292932] text-[#c7c4d7] rounded-full font-['Geist'] text-[14px] font-semibold leading-[1.4] tracking-[0.05em] cursor-pointer hover:bg-[#1f1f27] transition-colors">
                            Streaming
                        </span>
                    </div>
                </div>
                {/* Sorting */}
                <div className="flex items-center gap-3 min-w-[200px]">
                    <span className="font-['Geist'] text-[14px] font-semibold leading-[1.4] tracking-[0.05em] text-[#c7c4d7] whitespace-nowrap">
                        Sort by:
                    </span>
                    <select className="bg-[#1b1b23] text-[#e4e1ed] border border-[#464554] rounded-xl px-4 py-2 font-['Geist'] text-[14px] font-semibold leading-[1.4] tracking-[0.05em] focus:ring-2 focus:ring-[#c0c1ff] focus:border-[#c0c1ff] outline-none">
                        <option>Newest Arrivals</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Best Selling</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

