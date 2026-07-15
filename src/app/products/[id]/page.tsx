"use client"
import React, { useState, useEffect, ChangeEvent, use } from "react"
import { useRouter } from "next/navigation"
import { authClient } from "@/lib/auth-client"
import { CircleCheckFill, Minus, Plus, ShieldCheck, StarFill, ThunderboltFill } from "@gravity-ui/icons"

interface Product {
    _id: string
    title: string
    slug: string
    category: string
    price: number
    originalPrice: number
    features: string[]
    img: string
    badge: string
    stock: string
    description?: string
}

interface PageProps {
    params: Promise<{ id: string }>
}

export default function ProductDetailsPage({ params }: PageProps) {
    const { id: productId } = use(params)
    const router = useRouter()
    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const [quantity, setQuantity] = useState<number | "">(1)
    const [activeTab, setActiveTab] = useState("overview")

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data: tokenData } = await authClient.token()

                if (!tokenData?.token) {
                    setError("You must be logged in to view product details")
                    router.push("/login")
                    return
                }
                setLoading(true)
                setError(null)
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}`, {
                    headers: {
                        Authorization: `Bearer ${tokenData.token}`
                    }
                })

                if (!res.ok) {
                    throw new Error("Product not found")
                }

                const data: Product = await res.json()
                setProduct(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : "Something went wrong")
            } finally {
                setLoading(false)
            }
        }

        fetchProduct()
    }, [productId, router])

    const basePrice = product?.price ?? 0
    const baseOriginalPrice = product?.originalPrice ?? 0

    const numericQuantity = typeof quantity === "number" ? quantity : 1
    const total = (basePrice * numericQuantity).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    const originalTotal = (baseOriginalPrice * numericQuantity).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })

    const handleIncrement = () => setQuantity((q) => (typeof q === "number" ? q + 1 : 1))
    const handleDecrement = () => setQuantity((q) => (typeof q === "number" ? Math.max(1, q - 1) : 1))

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value)
        if (Number.isNaN(val) || val < 1) {
            setQuantity(1)
        } else {
            setQuantity(Math.floor(val))
        }
    }

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center bg-[#13131b] text-white">Loading...</div>
    }

    if (error || !product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#13131b] text-white">
                {error ?? "Product not found"}
            </div>
        )
    }

    return (
        <div className="bg-[#13131b] font-['Inter'] text-[#e4e1ed] min-h-screen w-full relative pb-24 md:pb-12">
            {/* Main Content Container */}
            <main className="max-w-[67%] mx-auto px-4 md:px-8 pt-24">
                {/* Top Hero Section (Image + Product Info) */}
                <section className="py-6 md:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        {/* Left Column: Product Graphic Container */}
                        <div className="lg:col-span-5 relative group w-full max-w-105 mx-auto lg:mx-0">
                            <div className="aspect-4/5 rounded-3xl overflow-hidden bg-[#22222a] shadow-lg transition-all duration-200 ease-out flex items-center justify-center border border-[#464554]/20 p-6">
                                <img
                                    className="w-full h-auto object-contain rounded-xl"
                                    alt={product.title}
                                    src={product.img}
                                    width={640}
                                    height={800}
                                />
                            </div>

                            {/* Verified Stock Badge Overlap */}
                            <div className="absolute -bottom-4 -right-4 z-10">
                                <div className="bg-[#292932]/95 backdrop-blur-md border border-[#464554]/30 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                                    <div className="bg-emerald-500/10 text-emerald-400 p-1.5 rounded-full flex items-center justify-center">
                                        <CircleCheckFill className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-semibold text-emerald-400/80 tracking-wide font-['Geist'] uppercase">
                                            {product.stock}
                                        </p>
                                        <p className="text-[18px] font-bold text-white font-['Geist'] leading-tight">
                                            {product.badge}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Key Details & Purchase Options */}
                        <div className="lg:col-span-7 flex flex-col gap-6 w-full mt-6 lg:mt-0">
                            <nav className="flex gap-2 text-[#c7c4d7] text-[13px] font-semibold uppercase tracking-wider font-['Geist']">
                                <span>Products</span>
                                <span className="text-[#464554]">/</span>
                                <span className="text-[#c0c1ff]">{product.category}</span>
                            </nav>

                            <h1 className="text-[36px] md:text-[44px] font-bold text-white leading-[1.15] font-['Geist'] tracking-tight">
                                {product.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-3 text-[#c7c4d7]">
                                <span className="text-[13px] font-semibold bg-[#1b1b23] px-3 py-1 rounded-lg font-['Geist'] border border-[#464554]/30">
                                    ID: {product._id}
                                </span>
                                <div className="flex items-center gap-1 text-[13px]">
                                    <StarFill className="text-[#ffb783] w-[18px] h-[18px]" />
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
                                {product.features.slice(0, 3).map((feature, i) => {
                                    const icons = [
                                        <ThunderboltFill key="bolt" className="text-indigo-600 text-[20px] mt-0.5" />,
                                        <ShieldCheck key="security" className="text-indigo-600 text-[20px] mt-0.5" />,
                                        <CircleCheckFill key="check" className="text-indigo-600 text-[20px] mt-0.5" />
                                    ]
                                    return (
                                        <div
                                            key={i}
                                            className="flex flex-col md:flex-row items-center md:items-start gap-2 p-3 bg-white text-black rounded-xl"
                                        >
                                            {icons[i] ?? (
                                                <CircleCheckFill className="text-indigo-600 text-[20px] mt-0.5" />
                                            )}
                                            <div className="flex flex-col text-center md:text-left">
                                                <span className="text-[12px] font-medium text-gray-500">Feature</span>
                                                <span className="font-bold text-[12px] -mt-0.5">{feature}</span>
                                            </div>
                                        </div>
                                    )
                                })}
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
                                            <Minus className="w-[14px] h-[14px]" />
                                        </button>
                                        <input
                                            type="number"
                                            value={quantity}
                                            min="1"
                                            onChange={handleInputChange}
                                            onBlur={(e) => handleInputChange(e as ChangeEvent<HTMLInputElement>)}
                                            className="w-12 text-center bg-transparent border-none focus:ring-0 font-bold text-white outline-none text-[15px]"
                                        />
                                        <button
                                            onClick={handleIncrement}
                                            className="px-3 py-2 hover:bg-[#292932] transition-colors text-[#e4e1ed]"
                                        >
                                            <Plus className="w-[14px] h-[14px]" />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between border-t border-[#464554]/20 pt-4">
                                    <span className="text-[13px] font-semibold text-[#8c8a9e] uppercase tracking-wider font-['Geist']">
                                        TOTAL PRICE
                                    </span>
                                    <span className="text-[28px] font-bold text-white font-['Geist']">৳{total}</span>
                                </div>

                                <button className="w-full md:w-auto px-10 py-3.5 bg-linear-to-r from-[#9aa3ff] to-[#a3baff] text-slate-900 font-bold rounded-xl text-[15px] transition-all hover:opacity-90">
                                    Purchase
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
                                <h3 className="text-[22px] font-bold text-white">{product.title}</h3>
                                <p className="text-[#8c8a9e] leading-[1.6] text-[15px]">
                                    {product.description ??
                                        `${product.title} — ${product.category} category theke, high quality o verified. Instant delivery, warranty soho purchase korte paren.`}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {product.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-4 p-4 border border-[#464554]/20 bg-[#1b1b23] rounded-xl"
                                        >
                                            <div className="bg-[#8083ff]/10 p-2 rounded-lg shrink-0 flex items-center justify-center text-[#c0c1ff]">
                                                <CircleCheckFill className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-[15px]">{feature}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Highlights Panel */}
                            <div className="lg:col-span-4">
                                <div className="bg-[#1b1b23] p-6 rounded-2xl border border-[#464554]/20">
                                    <h4 className="font-bold mb-4 text-white text-[16px]">Quick Highlights</h4>
                                    <ul className="space-y-3.5">
                                        {product.features.map((text, i) => (
                                            <li key={i} className="flex items-center gap-2.5 text-[14px]">
                                                <CircleCheckFill className="text-emerald-400 w-[18px] h-[18px]" />
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
                                { title: "Category", desc: product.category },
                                { title: "Stock Status", desc: product.stock },
                                { title: "Badge", desc: product.badge },
                                { title: "Price", desc: `৳${product.price}` },
                                { title: "Original Price", desc: `৳${product.originalPrice}` }
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
                                            <StarFill key={i} className="w-[18px] h-[18px]" />
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
                                                    <StarFill key={i} className="w-[14px] h-[14px]" />
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
                <button className="px-6 py-2 bg-linear-to-r from-[#9aa3ff] to-[#a3baff] text-slate-900 font-bold rounded-xl text-[14px]">
                    Purchase
                </button>
            </div>
        </div>
    )
}
