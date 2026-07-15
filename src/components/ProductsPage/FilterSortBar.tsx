"use client"
import { useEffect, useRef, useState } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Boxes3, ChevronDown, StarFill, TagDollar } from "@gravity-ui/icons"

const CATEGORIES = [
    "VPN Services",
    "Google Accounts",
    "Video Editing",
    "Streaming",
    "AI Tools",
    "Design Tools",
    "Productivity",
    "Social Media Accounts"
]

const QUICK_CHIPS = ["VPN Services", "Google Accounts", "Streaming"]

const SORT_OPTIONS = [
    { label: "Newest Arrivals", sortBy: "createdAt", sortOrder: "desc" },
    { label: "Price: Low to High", sortBy: "price", sortOrder: "asc" },
    { label: "Price: High to Low", sortBy: "price", sortOrder: "desc" },
    { label: "Best Selling", sortBy: "createdAt", sortOrder: "desc" }
]

export default function FilterSortBar() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const activeCategory = searchParams.get("category") || ""
    const activeMinPrice = searchParams.get("minPrice") || ""
    const activeMaxPrice = searchParams.get("maxPrice") || ""
    const activeAvailability = searchParams.get("availability") || ""
    const activeSortBy = searchParams.get("sortBy") || "createdAt"
    const activeSortOrder = searchParams.get("sortOrder") || "desc"

    const [categoryOpen, setCategoryOpen] = useState(false)
    const [priceOpen, setPriceOpen] = useState(false)
    const [availabilityOpen, setAvailabilityOpen] = useState(false)

    const [minPriceInput, setMinPriceInput] = useState(activeMinPrice)
    const [maxPriceInput, setMaxPriceInput] = useState(activeMaxPrice)

    const categoryRef = useRef<HTMLDivElement>(null)
    const priceRef = useRef<HTMLDivElement>(null)
    const availabilityRef = useRef<HTMLDivElement>(null)

    // Dropdown-er baire click korle bondho hobe
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) setCategoryOpen(false)
            if (priceRef.current && !priceRef.current.contains(e.target as Node)) setPriceOpen(false)
            if (availabilityRef.current && !availabilityRef.current.contains(e.target as Node))
                setAvailabilityOpen(false)
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const updateParams = (updates: Record<string, string | null>) => {
        const params = new URLSearchParams(searchParams.toString())

        Object.entries(updates).forEach(([key, value]) => {
            if (value === null || value === "") {
                params.delete(key)
            } else {
                params.set(key, value)
            }
        })

        params.set("page", "1") // filter/sort change hole page 1-e reset hobe
        params.set("limit", "8") // ensure UI shows 8 items per page when filters change
        const query = params.toString()
        const url = query ? `${pathname}?${query}` : pathname
        // Debug log to help trace issues in dev console
        if (process.env.NODE_ENV === "development") {
            console.debug("Navigating to:", url)
        }
        // use replace so the new filter state is applied immediately without stacking history entries
        router.replace(url)
    }

    const handleCategorySelect = (category: string) => {
        const valueToSet = category === "" ? null : category === activeCategory ? null : category
        updateParams({ category: valueToSet })
        setCategoryOpen(false)
    }

    const handlePriceApply = () => {
        updateParams({
            minPrice: minPriceInput || null,
            maxPrice: maxPriceInput || null
        })
        setPriceOpen(false)
    }

    const handlePriceClear = () => {
        setMinPriceInput("")
        setMaxPriceInput("")
        updateParams({ minPrice: null, maxPrice: null })
        setPriceOpen(false)
    }

    const handleAvailabilitySelect = (value: string) => {
        updateParams({ availability: value === activeAvailability ? null : value })
        setAvailabilityOpen(false)
    }

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = SORT_OPTIONS[Number(e.target.value)]
        updateParams({ sortBy: selected.sortBy, sortOrder: selected.sortOrder })
    }

    const currentSortIndex = SORT_OPTIONS.findIndex(
        (opt) => opt.sortBy === activeSortBy && opt.sortOrder === activeSortOrder
    )

    const priceLabel =
        activeMinPrice || activeMaxPrice ? `৳${activeMinPrice || "0"} - ৳${activeMaxPrice || "∞"}` : "Price Range"

    return (
        <div className="bg-[#1f1f27] p-[16px] rounded-2xl shadow-sm border border-[#464554] mb-[24px] sticky top-24 z-40">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[24px]">
                {/* Filters */}
                <div className="flex flex-wrap items-center gap-3">
                    {/* Category Dropdown */}
                    <div className="relative" ref={categoryRef}>
                        <div
                            onClick={() => setCategoryOpen((v) => !v)}
                            className="flex items-center gap-2 px-4 py-2 bg-[#1b1b23] border border-[#464554] rounded-full cursor-pointer hover:bg-[#1f1f27] transition-colors"
                        >
                            <Boxes3 className="w-4 h-4 text-[#c0c1ff]" />
                            <span className="font-['Geist'] text-[14px] font-semibold leading-[1.4] tracking-[0.05em] text-[#e4e1ed]">
                                Category: {activeCategory || "All"}
                            </span>
                            <ChevronDown className="w-4 h-4 text-[#c7c4d7]" />
                        </div>
                        {categoryOpen && (
                            <div className="absolute top-full left-0 mt-2 w-56 bg-[#1b1b23] border border-[#464554] rounded-xl shadow-xl overflow-hidden z-50">
                                <button
                                    onClick={() => handleCategorySelect("")}
                                    className={`w-full text-left px-4 py-2.5 text-[14px] font-['Geist'] hover:bg-[#292932] transition-colors ${
                                        !activeCategory ? "text-[#c0c1ff] font-semibold" : "text-[#e4e1ed]"
                                    }`}
                                >
                                    All
                                </button>
                                {CATEGORIES.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => handleCategorySelect(cat)}
                                        className={`w-full text-left px-4 py-2.5 text-[14px] font-['Geist'] hover:bg-[#292932] transition-colors ${
                                            activeCategory === cat ? "text-[#c0c1ff] font-semibold" : "text-[#e4e1ed]"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Price Range Dropdown */}
                    <div className="relative" ref={priceRef}>
                        <div
                            onClick={() => setPriceOpen((v) => !v)}
                            className="flex items-center gap-2 px-4 py-2 bg-[#1b1b23] border border-[#464554] rounded-full cursor-pointer hover:bg-[#1f1f27] transition-colors"
                        >
                            <TagDollar className="w-4 h-4 text-[#c0c1ff]" />
                            <span className="font-['Geist'] text-[14px] font-semibold leading-[1.4] tracking-[0.05em] text-[#e4e1ed]">
                                {priceLabel}
                            </span>
                            <ChevronDown className="w-4 h-4 text-[#c7c4d7]" />
                        </div>
                        {priceOpen && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-[#1b1b23] border border-[#464554] rounded-xl shadow-xl p-4 z-50 space-y-3">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        value={minPriceInput}
                                        onChange={(e) => setMinPriceInput(e.target.value)}
                                        className="w-full bg-[#292932] text-[#e4e1ed] border border-[#464554] rounded-lg px-3 py-2 text-[13px] outline-none focus:border-[#c0c1ff]"
                                    />
                                    <span className="text-[#8c8a9e]">-</span>
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        value={maxPriceInput}
                                        onChange={(e) => setMaxPriceInput(e.target.value)}
                                        className="w-full bg-[#292932] text-[#e4e1ed] border border-[#464554] rounded-lg px-3 py-2 text-[13px] outline-none focus:border-[#c0c1ff]"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={handlePriceApply}
                                        className="flex-1 bg-[#c0c1ff] text-[#13131b] rounded-lg py-2 text-[13px] font-semibold hover:opacity-90 transition-opacity"
                                    >
                                        Apply
                                    </button>
                                    <button
                                        onClick={handlePriceClear}
                                        className="flex-1 border border-[#464554] text-[#c7c4d7] rounded-lg py-2 text-[13px] font-semibold hover:bg-[#292932] transition-colors"
                                    >
                                        Clear
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Availability Dropdown */}
                    <div className="relative" ref={availabilityRef}>
                        <div
                            onClick={() => setAvailabilityOpen((v) => !v)}
                            className="flex items-center gap-2 px-4 py-2 bg-[#1b1b23] border border-[#464554] rounded-full cursor-pointer hover:bg-[#1f1f27] transition-colors"
                        >
                            <StarFill className="w-4 h-4 text-[#c0c1ff]" />
                            <span className="font-['Geist'] text-[14px] font-semibold leading-[1.4] tracking-[0.05em] text-[#e4e1ed]">
                                {activeAvailability || "Availability"}
                            </span>
                            <ChevronDown className="w-4 h-4 text-[#c7c4d7]" />
                        </div>
                        {availabilityOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-[#1b1b23] border border-[#464554] rounded-xl shadow-xl overflow-hidden z-50">
                                {["In Stock", "Unlimited", "Limited"].map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => handleAvailabilitySelect(opt)}
                                        className={`w-full text-left px-4 py-2.5 text-[14px] font-['Geist'] hover:bg-[#292932] transition-colors ${
                                            activeAvailability === opt
                                                ? "text-[#c0c1ff] font-semibold"
                                                : "text-[#e4e1ed]"
                                        }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="h-8 w-px bg-[#464554] mx-2"></div>

                    {/* Quick Category Chips */}
                    <div className="flex overflow-x-auto gap-2">
                        {QUICK_CHIPS.map((chip) => (
                            <span
                                key={chip}
                                onClick={() => handleCategorySelect(chip)}
                                className={
                                    activeCategory === chip
                                        ? "px-4 py-2 bg-[#c0c1ff] text-[#13131b] rounded-full font-['Geist'] text-[14px] font-semibold leading-[1.4] tracking-[0.05em] cursor-pointer"
                                        : "px-4 py-2 bg-[#292932] text-[#c7c4d7] rounded-full font-['Geist'] text-[14px] font-semibold leading-[1.4] tracking-[0.05em] cursor-pointer hover:bg-[#1f1f27] transition-colors"
                                }
                            >
                                {chip}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Sorting */}
                <div className="flex items-center gap-3 min-w-[200px]">
                    <span className="font-['Geist'] text-[14px] font-semibold leading-[1.4] tracking-[0.05em] text-[#c7c4d7] whitespace-nowrap">
                        Sort by:
                    </span>

                    <select
                        value={currentSortIndex === -1 ? 0 : currentSortIndex}
                        onChange={handleSortChange}
                        className="bg-[#1b1b23] text-[#e4e1ed] border border-[#464554] rounded-xl px-4 py-2 font-['Geist'] text-[14px] font-semibold leading-[1.4] tracking-[0.05em] focus:ring-2 focus:ring-[#c0c1ff] focus:border-[#c0c1ff] outline-none "
                    >
                        {SORT_OPTIONS.map((opt, idx) => (
                            <option key={opt.label} value={idx}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

