import React from "react"
import { ChevronLeft, ChevronRight } from "@gravity-ui/icons"

export default function Pagination() {
    return (
        <div className="flex items-center justify-center gap-2 mt-[24px]">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#464554] hover:bg-[#1f1f27] transition-colors group">
                <ChevronLeft className="w-5 h-5 text-[#c7c4d7] group-hover:text-[#c0c1ff]" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#c0c1ff] text-[#13131b] font-bold">
                1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#464554] text-[#c7c4d7] hover:bg-[#1f1f27] transition-colors">
                2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#464554] text-[#c7c4d7] hover:bg-[#1f1f27] transition-colors">
                3
            </button>
            <span className="text-[#908fa0] mx-2">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#464554] text-[#c7c4d7] hover:bg-[#1f1f27] transition-colors">
                12
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#464554] hover:bg-[#1f1f27] transition-colors group">
                <ChevronRight className="w-5 h-5 text-[#c7c4d7] group-hover:text-[#c0c1ff]" />
            </button>
        </div>
    )
}

