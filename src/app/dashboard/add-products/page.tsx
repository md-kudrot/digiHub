"use client"

import { useState, FormEvent, ChangeEvent, KeyboardEvent } from "react"
import { useRouter } from "next/navigation"
import { authClient } from "@/lib/auth-client"

interface ProductFormData {
    title: string
    category: string
    price: string
    originalPrice: string
    features: string[]
    img: string
    badgePreset: string
    stockType: "In Stock" | "Unlimited" | "Limited"
    stockCount: string
}

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

// Badge preset — label + Tailwind color pair, tomar existing seed data-r style onujayi
const BADGE_PRESETS: Record<string, { label: string; badgeBg: string; badgeText: string }> = {
    premium: { label: "Premium", badgeBg: "bg-[#adc6ff]", badgeText: "text-[#002e6a]" },
    popular: { label: "Popular", badgeBg: "bg-[#ffb783]", badgeText: "text-[#4f2500]" },
    new: { label: "New Arrival", badgeBg: "bg-[#b9f6ca]", badgeText: "text-[#0b3d0b]" },
    trending: { label: "Trending", badgeBg: "bg-[#d0bcff]", badgeText: "text-[#3a0091]" },
    fullSuite: { label: "Full Suite", badgeBg: "bg-[#ffccbc]", badgeText: "text-[#5d1a00]" },
    limited: { label: "Limited Stock", badgeBg: "bg-[#c0c1ff]", badgeText: "text-[#13131b]" }
}

function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
}

export default function AddItemPage() {
    const router = useRouter()

    const [formData, setFormData] = useState<ProductFormData>({
        title: "",
        category: CATEGORIES[0],
        price: "",
        originalPrice: "",
        features: [],
        img: "",
        badgePreset: "premium",
        stockType: "In Stock",
        stockCount: ""
    })

    const [featureInput, setFeatureInput] = useState("")
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Feature tag add/remove logic — Enter chaple ba button e click korle add hobe
    const addFeature = () => {
        const trimmed = featureInput.trim()
        if (!trimmed) return
        setFormData((prev) => ({ ...prev, features: [...prev.features, trimmed] }))
        setFeatureInput("")
    }

    const removeFeature = (index: number) => {
        setFormData((prev) => ({
            ...prev,
            features: prev.features.filter((_, i) => i !== index)
        }))
    }

    const handleFeatureKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault()
            addFeature()
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setError(null)

        if (!formData.title.trim()) {
            setError("Title is required")
            return
        }

        const priceNumber = Number(formData.price)
        if (Number.isNaN(priceNumber) || priceNumber < 0) {
            setError("Enter a valid price")
            return
        }

        const originalPriceNumber = formData.originalPrice ? Number(formData.originalPrice) : priceNumber
        if (Number.isNaN(originalPriceNumber) || originalPriceNumber < 0) {
            setError("Enter a valid original price")
            return
        }

        if (formData.features.length === 0) {
            setError("Add at least one feature")
            return
        }

        setSubmitting(true)

        try {
            const { data: tokenData } = await authClient.token()

            if (!tokenData?.token) {
                setError("You must be logged in to add an item")
                router.push("/login")
                return
            }

            const badge = BADGE_PRESETS[formData.badgePreset]
            const stockCountNumber = formData.stockCount ? Number(formData.stockCount) : null

            const stockLabel =
                formData.stockType === "Limited" && stockCountNumber ? `${stockCountNumber} left` : formData.stockType

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenData.token}`
                },
                body: JSON.stringify({
                    title: formData.title,
                    slug: generateSlug(formData.title),
                    category: formData.category,
                    price: priceNumber,
                    originalPrice: originalPriceNumber,
                    currency: "BDT",
                    features: formData.features,
                    img: formData.img || "https://placehold.co/400x400?text=" + encodeURIComponent(formData.title),
                    badge: badge.label,
                    badgeBg: badge.badgeBg,
                    badgeText: badge.badgeText,
                    stock: stockLabel,
                    stockCount: formData.stockType === "Unlimited" ? null : stockCountNumber,
                    isActive: true
                })
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data?.message || "Failed to add item")
            }

            router.push("/dashboard/manage-products")
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong")
        } finally {
            setSubmitting(false)
        }
    }

    const iconStyle = {
        fontFamily: '"Material Symbols Outlined"',
        fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
    }

    return (
        <div className="bg-[#13131b] font-['Inter'] text-[#e4e1ed] min-h-screen w-full flex items-center justify-center p-2 relative overflow-hidden">
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />

            {/* Background Gradients */}
            <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#4648d4]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#2170e4]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full max-w-[600px] bg-[#1b1b23] border border-[#464554]/20 p-6 md:p-8 rounded-2xl shadow-2xl relative z-10 my-8">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-[24px] md:text-[28px] font-bold text-white font-['Geist'] tracking-tight">
                        Add New Item
                    </h1>
                    <p className="text-[#8c8a9e] text-[13px] md:text-[14px]">
                        Populate the fields below to create a premium asset in the repository.
                    </p>
                </div>

                {/* Error Banner */}
                {error && (
                    <div className="mb-4 px-4 py-3 bg-[#ff4d6d]/10 border border-[#ff4d6d]/30 rounded-xl text-[#ff8fa3] text-[13px] font-medium">
                        {error}
                    </div>
                )}

                {/* Form Structure */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Title Field */}
                    <div className="space-y-1">
                        <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                            Item Title *
                        </label>
                        <input
                            type="text"
                            name="title"
                            required
                            placeholder="e.g., Adobe Creative Cloud - 1 Year"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white placeholder-[#464554] text-[14px] transition-all"
                        />
                    </div>

                    {/* Category */}
                    <div className="space-y-1">
                        <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                            Category *
                        </label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white text-[14px] transition-all cursor-pointer"
                        >
                            {CATEGORIES.map((cat) => (
                                <option key={cat} value={cat} className="bg-[#1b1b23]">
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Grid: Price & Original Price */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                                Price (BDT) *
                            </label>
                            <input
                                type="number"
                                name="price"
                                required
                                min="0"
                                step="0.01"
                                placeholder="850"
                                value={formData.price}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white placeholder-[#464554] text-[14px] transition-all"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                                Original Price (BDT){" "}
                                <span className="text-[#8c8a9e] text-[11px] normal-case">(Optional)</span>
                            </label>
                            <input
                                type="number"
                                name="originalPrice"
                                min="0"
                                step="0.01"
                                placeholder="1200"
                                value={formData.originalPrice}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white placeholder-[#464554] text-[14px] transition-all"
                            />
                        </div>
                    </div>

                    {/* Features — tag input */}
                    <div className="space-y-1">
                        <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                            Features *
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="e.g., Instant Delivery — press Enter to add"
                                value={featureInput}
                                onChange={(e) => setFeatureInput(e.target.value)}
                                onKeyDown={handleFeatureKeyDown}
                                className="flex-1 px-4 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white placeholder-[#464554] text-[14px] transition-all"
                            />
                            <button
                                type="button"
                                onClick={addFeature}
                                className="px-4 py-2.5 bg-[#292932] hover:bg-[#34343d] text-[#c0c1ff] rounded-xl text-[14px] font-semibold transition-colors"
                            >
                                Add
                            </button>
                        </div>
                        {formData.features.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-2">
                                {formData.features.map((feature, idx) => (
                                    <span
                                        key={idx}
                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#292932] text-[#e4e1ed] text-[12px] rounded-full"
                                    >
                                        {feature}
                                        <button
                                            type="button"
                                            onClick={() => removeFeature(idx)}
                                            className="text-[#8c8a9e] hover:text-[#ff4d6d] transition-colors"
                                        >
                                            ×
                                        </button>
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Grid: Badge & Stock */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                                Badge Style
                            </label>
                            <select
                                name="badgePreset"
                                value={formData.badgePreset}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white text-[14px] transition-all cursor-pointer"
                            >
                                {Object.entries(BADGE_PRESETS).map(([key, preset]) => (
                                    <option key={key} value={key} className="bg-[#1b1b23]">
                                        {preset.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                                Stock Status
                            </label>
                            <select
                                name="stockType"
                                value={formData.stockType}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white text-[14px] transition-all cursor-pointer"
                            >
                                <option value="In Stock" className="bg-[#1b1b23]">
                                    In Stock
                                </option>
                                <option value="Unlimited" className="bg-[#1b1b23]">
                                    Unlimited
                                </option>
                                <option value="Limited" className="bg-[#1b1b23]">
                                    Limited (set count)
                                </option>
                            </select>
                        </div>
                    </div>

                    {/* Stock Count — shudhu Limited hole dekhabe */}
                    {formData.stockType === "Limited" && (
                        <div className="space-y-1">
                            <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                                Stock Count *
                            </label>
                            <input
                                type="number"
                                name="stockCount"
                                required
                                min="0"
                                placeholder="e.g., 10"
                                value={formData.stockCount}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white placeholder-[#464554] text-[14px] transition-all"
                            />
                        </div>
                    )}

                    {/* Optional Image URL Field */}
                    <div className="space-y-1">
                        <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                            Asset Image URL <span className="text-[#8c8a9e] text-[11px] normal-case">(Optional)</span>
                        </label>
                        <div className="relative flex items-center">
                            <span
                                className="material-symbols-outlined absolute left-3.5 text-[#8c8a9e] text-[18px]"
                                style={iconStyle}
                            >
                                link
                            </span>
                            <input
                                type="url"
                                name="img"
                                placeholder="https://example.com/image.png"
                                value={formData.img}
                                onChange={handleInputChange}
                                className="w-full pl-11 pr-4 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white placeholder-[#464554] text-[14px] transition-all"
                            />
                        </div>
                    </div>

                    {/* Submit Action Button */}
                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3 mt-2 bg-gradient-to-r from-[#9aa3ff] to-[#a3baff] text-slate-900 font-bold rounded-xl text-[14px] md:text-[15px] transition-all hover:opacity-90 active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
                    >
                        <span className="material-symbols-outlined text-[20px] font-bold" style={iconStyle}>
                            add_circle
                        </span>
                        {submitting ? "Submitting..." : "Submit & Add Item"}
                    </button>
                </form>
            </div>
        </div>
    )
}
