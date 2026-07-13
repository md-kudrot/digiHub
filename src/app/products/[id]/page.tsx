"use client"
import { useState, ChangeEvent } from "react"

export default function ProductDetailsPage() {
    const [quantity, setQuantity] = useState<number | "">(1)
    const [activeTab, setActiveTab] = useState("overview")

    const basePrice = 10
    const baseOriginalPrice = 20

    const numericQuantity = typeof quantity === "number" ? quantity : 1
    const total = (basePrice * numericQuantity).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    const originalTotal = (baseOriginalPrice * numericQuantity).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })

    const handleIncrement = () => {
        setQuantity((prev) => (typeof prev === "number" ? prev + 1 : 1))
    }

    const handleDecrement = () => {
        setQuantity((prev) => {
            if (typeof prev !== "number") return 1
            return prev > 1 ? prev - 1 : 1
        })
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        if (val === "") {
            setQuantity("")
            return
        }
        const parsed = parseInt(val, 10)
        if (!isNaN(parsed) && parsed >= 1) {
            setQuantity(parsed)
        }
    }

    const handleBlur = () => {
        if (quantity === "") {
            setQuantity(1)
        }
    }

    const iconStyle = {
        fontFamily: '"Material Symbols Outlined"',
        fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
    }
    const iconStyleFilled = {
        fontFamily: '"Material Symbols Outlined"',
        fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
    }

    return (
        <div className="bg-[#13131b] font-['Inter'] text-[#e4e1ed] min-h-screen w-full relative pb-24 md:pb-12">
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />

            {/* Main Content Container */}
            <main className="max-w-[67%] mx-auto px-4 md:px-8 pt-24">
                {/* Top Hero Section (Image + Product Info) */}
                <section className="py-6 md:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        {/* Left Column: Product Graphic Container (Vertical as shown in image) */}
                        <div className="lg:col-span-5 relative group w-full max-w-[420px] mx-auto lg:mx-0">
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#22222a] shadow-lg transition-all duration-200 ease-out flex items-center justify-center border border-[#464554]/20 p-6">
                                <img
                                    className="w-full h-auto object-contain rounded-xl"
                                    alt="Premium Gmail Account Bundle"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkfh6tZqTuTskJI8VP4LxzSZjdlUiksjOlX1WjBWMYu9Wdbrjisq7Xq1nPmdr5XYjKpuY_8lrOwjrcvgu_8r3fLDk1090OmFvrf__FpKFN23UuNEK6orAuD1nQbM4saqW_V9MBiXeJB2gVpUPpFOKBS4rS8zXUoY55irNnfoWFO-0Ji4_EHkhJnTOQhbP_Rr_m7ugFvgb0TCOlCe1BUnweYI2talyGULJZIcsfyKNixzBPv98QXP_Efg"
                                />
                            </div>

                            {/* Verified Stock Badge Overlap */}
                            <div className="absolute -bottom-4 -right-4 z-10">
                                <div className="bg-[#292932]/95 backdrop-blur-md border border-[#464554]/30 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                                    <div className="bg-emerald-500/10 text-emerald-400 p-1.5 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[20px]" style={iconStyleFilled}>
                                            verified
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-semibold text-emerald-400/80 tracking-wide font-['Geist'] uppercase">
                                            Verified Stock
                                        </p>
                                        <p className="text-[18px] font-bold text-white font-['Geist'] leading-tight">
                                            450+ Units
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Key Details & Purchase Options */}
                        <div className="lg:col-span-7 flex flex-col gap-6 w-full mt-6 lg:mt-0">
                            <nav className="flex gap-2 text-[#c7c4d7] text-[13px] font-semibold uppercase tracking-wider font-['Geist']">
                                <span>Accounts</span>
                                <span className="text-[#464554]">/</span>
                                <span className="text-[#c0c1ff]">Google Services</span>
                            </nav>

                            <h1 className="text-[36px] md:text-[44px] font-bold text-white leading-[1.15] font-['Geist'] tracking-tight">
                                Premium Gmail Account Bundle
                            </h1>

                            <div className="flex flex-wrap items-center gap-3 text-[#c7c4d7]">
                                <span className="text-[13px] font-semibold bg-[#1b1b23] px-3 py-1 rounded-lg font-['Geist'] border border-[#464554]/30">
                                    ID: GM-99203-PR
                                </span>
                                <div className="flex items-center gap-1 text-[13px]">
                                    <span
                                        className="material-symbols-outlined text-[#ffb783] text-[18px]"
                                        style={iconStyleFilled}
                                    >
                                        star
                                    </span>
                                    <span className="font-bold text-white">4.9</span>
                                    <span className="text-[#8c8a9e]">(128 Reviews)</span>
                                </div>
                            </div>

                            {/* Pricing Box */}
                            <div className="bg-[#1b1b23] p-5 rounded-2xl border border-[#464554]/20">
                                <div className="flex items-baseline gap-3">
                                    <span className="text-[36px] md:text-[42px] font-bold text-white font-['Geist']">
                                        ৳{total}
                                    </span>
                                    <span className="text-[#8c8a9e] line-through text-[16px]">৳{originalTotal}</span>
                                </div>
                                <p className="text-[#8c8a9e] text-[14px] mt-1">
                                    Bulk purchase discount applied automatically.
                                </p>
                            </div>

                            {/* Feature Badges Grid */}
                            <div className="grid grid-cols-3 gap-3">
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-2 p-3 bg-white text-black rounded-xl">
                                    <span
                                        className="material-symbols-outlined text-indigo-600 text-[20px] mt-0.5"
                                        style={iconStyle}
                                    >
                                        bolt
                                    </span>
                                    <div className="flex flex-col text-center md:text-left">
                                        <span className="text-[12px] font-medium text-gray-500">Delivery</span>
                                        <span className="font-bold text-[12px] -mt-0.5">Instant</span>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-2 p-3 bg-white text-black rounded-xl">
                                    <span
                                        className="material-symbols-outlined text-indigo-600 text-[20px] mt-0.5"
                                        style={iconStyle}
                                    >
                                        security
                                    </span>
                                    <div className="flex flex-col text-center md:text-left">
                                        <span className="text-[12px] font-medium text-gray-500">Warranty</span>
                                        <span className="font-bold text-[12px] -mt-0.5">24/7 Policy</span>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-2 p-3 bg-white text-black rounded-xl">
                                    <span
                                        className="material-symbols-outlined text-indigo-600 text-[20px] mt-0.5"
                                        style={iconStyle}
                                    >
                                        check_circle
                                    </span>
                                    <div className="flex flex-col text-center md:text-left">
                                        <span className="text-[12px] font-medium text-gray-500">Status</span>
                                        <span className="font-bold text-[12px] text-emerald-600 -mt-0.5">
                                            OTP Ready
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Quantity Selector & Action Button */}
                            <div className="space-y-5 mt-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-white text-[15px]">Select Quantity</span>
                                    <div className="flex items-center border border-[#464554]/40 rounded-xl overflow-hidden bg-[#1b1b23]">
                                        <button
                                            onClick={handleDecrement}
                                            className="px-3 py-2 hover:bg-[#292932] transition-colors text-[#e4e1ed]"
                                        >
                                            <span className="material-symbols-outlined text-[14px]" style={iconStyle}>
                                                remove
                                            </span>
                                        </button>
                                        <input
                                            type="number"
                                            value={quantity}
                                            min="1"
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className="w-12 text-center bg-transparent border-none focus:ring-0 font-bold text-white outline-none text-[15px]"
                                        />
                                        <button
                                            onClick={handleIncrement}
                                            className="px-3 py-2 hover:bg-[#292932] transition-colors text-[#e4e1ed]"
                                        >
                                            <span className="material-symbols-outlined text-[14px]" style={iconStyle}>
                                                add
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between border-t border-[#464554]/20 pt-4">
                                    <span className="text-[13px] font-semibold text-[#8c8a9e] uppercase tracking-wider font-['Geist']">
                                        TOTAL PRICE
                                    </span>
                                    <span className="text-[28px] font-bold text-white font-['Geist']">৳{total}</span>
                                </div>

                                <button className="w-full md:w-auto px-10 py-3.5 bg-gradient-to-r from-[#9aa3ff] to-[#a3baff] text-slate-900 font-bold rounded-xl text-[15px] transition-all hover:opacity-90">
                                    Login to Purchase
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom Tabs Section (Full Width) */}
                <section className="py-8 border-t border-[#464554]/20 w-full mt-4">
                    <div className="border-b border-[#464554]/20 mb-8 w-full">
                        <div className="flex gap-8 overflow-x-auto pb-[-1px] scrollbar-hide">
                            <button
                                className={`border-b-2 font-bold pb-3 whitespace-nowrap transition-colors text-[15px] ${
                                    activeTab === "overview"
                                        ? "border-[#c0c1ff] text-white"
                                        : "border-transparent text-[#8c8a9e] hover:text-white"
                                }`}
                                onClick={() => setActiveTab("overview")}
                            >
                                Overview
                            </button>
                            <button
                                className={`border-b-2 font-bold pb-3 whitespace-nowrap transition-colors text-[15px] ${
                                    activeTab === "specs"
                                        ? "border-[#c0c1ff] text-white"
                                        : "border-transparent text-[#8c8a9e] hover:text-white"
                                }`}
                                onClick={() => setActiveTab("specs")}
                            >
                                Key Specifications
                            </button>
                            <button
                                className={`border-b-2 font-bold pb-3 whitespace-nowrap transition-colors text-[15px] ${
                                    activeTab === "reviews"
                                        ? "border-[#c0c1ff] text-white"
                                        : "border-transparent text-[#8c8a9e] hover:text-white"
                                }`}
                                onClick={() => setActiveTab("reviews")}
                            >
                                Reviews (128)
                            </button>
                        </div>
                    </div>

                    {activeTab === "overview" && (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Left Details */}
                            <div className="lg:col-span-8 space-y-6">
                                <h3 className="text-[22px] font-bold text-white">
                                    High-Quality Digital Infrastructure
                                </h3>
                                <p className="text-[#8c8a9e] leading-[1.6] text-[15px]">
                                    Our Premium Gmail Bundle provides high-authority accounts created under strictly
                                    monitored environments. Ideal for marketing automation, outreach campaigns, and
                                    secure cloud storage. Every account in this bundle is verified via a unique OTP and
                                    maintains a high reputation score with search engines.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-4 p-4 border border-[#464554]/20 bg-[#1b1b23] rounded-xl">
                                        <div className="bg-[#8083ff]/10 p-2 rounded-lg shrink-0 flex items-center justify-center text-[#c0c1ff]">
                                            <span className="material-symbols-outlined" style={iconStyle}>
                                                history
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-[15px]">Aged Accounts</h4>
                                            <p className="text-[12px] text-[#8c8a9e] mt-1">
                                                All accounts are 6+ months old for maximum stability.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 border border-[#464554]/20 bg-[#1b1b23] rounded-xl">
                                        <div className="bg-[#8083ff]/10 p-2 rounded-lg shrink-0 flex items-center justify-center text-[#c0c1ff]">
                                            <span className="material-symbols-outlined" style={iconStyle}>
                                                public
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-[15px]">Global Compatibility</h4>
                                            <p className="text-[12px] text-[#8c8a9e] mt-1">
                                                Compatible with any residential or mobile proxy service.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Highlights Panel */}
                            <div className="lg:col-span-4">
                                <div className="bg-[#1b1b23] p-6 rounded-2xl border border-[#464554]/20">
                                    <h4 className="font-bold mb-4 text-white text-[16px]">Quick Highlights</h4>
                                    <ul className="space-y-3.5">
                                        {[
                                            "Instant Dashboard Delivery",
                                            "Recovery Email Attached",
                                            "No Phone Verification Needed",
                                            "Clean Login History"
                                        ].map((text, i) => (
                                            <li key={i} className="flex items-center gap-2.5 text-[14px]">
                                                <span
                                                    className="material-symbols-outlined text-emerald-400 text-[18px]"
                                                    style={iconStyle}
                                                >
                                                    check_circle
                                                </span>
                                                <span className="text-[#e4e1ed]">{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "specs" && (
                        <div className="max-w-3xl divide-y divide-[#464554]/20 w-full">
                            {[
                                { title: "Validity", desc: "Lifetime Access (Subject to Google TOS)" },
                                { title: "Delivery Method", desc: "Automatic CSV download via Dashboard" },
                                { title: "Access Type", desc: "Full Credentials (Email + Password + Recovery)" },
                                { title: "Quantity", desc: "5 Accounts per Bundle" },
                                { title: "IP Restriction", desc: "No Restriction (Global usage allowed)" }
                            ].map((spec, i) => (
                                <div key={i} className="grid grid-cols-1 md:grid-cols-3 py-3.5 text-[14px]">
                                    <span className="font-bold text-[#8c8a9e]">{spec.title}</span>
                                    <span className="md:col-span-2 text-white mt-1 md:mt-0">{spec.desc}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "reviews" && (
                        <div className="space-y-6 max-w-4xl">
                            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-[#1b1b23] rounded-2xl border border-[#464554]/20">
                                <div className="text-center shrink-0">
                                    <p className="text-[44px] font-bold text-white leading-none">4.9</p>
                                    <div className="flex justify-center text-[#ffb783] mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className="material-symbols-outlined text-[18px]"
                                                style={iconStyleFilled}
                                            >
                                                star
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-[11px] mt-2 text-[#8c8a9e]">128 Verified Ratings</p>
                                </div>
                                <div className="flex-1 space-y-2.5 w-full text-[12px]">
                                    {[
                                        { star: "5 Star", w: "w-[92%]", p: "92%" },
                                        { star: "4 Star", w: "w-[6%]", p: "6%" },
                                        { star: "3 Star", w: "w-[2%]", p: "2%" }
                                    ].map((row, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <span className="w-10 text-[#e4e1ed]">{row.star}</span>
                                            <div className="flex-1 h-1.5 bg-[#292932] rounded-full overflow-hidden">
                                                <div className={`h-full bg-[#c0c1ff] ${row.w} rounded-full`}></div>
                                            </div>
                                            <span className="w-8 text-[#8c8a9e] text-right">{row.p}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* User Reviews */}
                            <div className="space-y-4 divide-y divide-[#464554]/20">
                                {[
                                    {
                                        name: "Ariful Karim",
                                        initial: "AK",
                                        time: "2 days ago",
                                        comment:
                                            "Instant delivery! The accounts worked perfectly for my outreach campaign. Highly recommend this seller for quality accounts."
                                    },
                                    {
                                        name: "Sarah Miller",
                                        initial: "SM",
                                        time: "1 week ago",
                                        comment:
                                            "Great value for the price. The OTP verification was already sorted which saved me tons of time."
                                    }
                                ].map((rev, i) => (
                                    <div key={i} className={`${i > 0 ? "pt-4" : ""}`}>
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-[#292932] border border-[#464554]/30 flex items-center justify-center font-bold text-[#c0c1ff] text-[13px]">
                                                    {rev.initial}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-white text-[14px]">{rev.name}</p>
                                                    <p className="text-[11px] text-[#8c8a9e]">{rev.time}</p>
                                                </div>
                                            </div>
                                            <div className="flex text-[#ffb783]">
                                                {[...Array(5)].map((_, i) => (
                                                    <span
                                                        key={i}
                                                        className="material-symbols-outlined text-[14px]"
                                                        style={iconStyleFilled}
                                                    >
                                                        star
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-[#e4e1ed] text-[14px] leading-relaxed pl-12">
                                            {rev.comment}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </section>
            </main>

            {/* Sticky CTA (Mobile Only Bottom Bar) */}
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#1f1f27]/95 backdrop-blur-md px-6 py-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] z-50 flex items-center justify-between border-t border-[#464554]/30">
                <div>
                    <p className="text-[11px] text-[#8c8a9e] font-semibold">Total Price</p>
                    <p className="text-[18px] font-bold text-[#c0c1ff]">৳{total}</p>
                </div>
                <button className="px-6 py-2 bg-gradient-to-r from-[#9aa3ff] to-[#a3baff] text-slate-900 font-bold rounded-xl text-[14px]">
                    Purchase
                </button>
            </div>
        </div>
    )
}

