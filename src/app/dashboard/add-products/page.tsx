"use client"

import { useState, useEffect, FormEvent, ChangeEvent } from "react"
import { useRouter } from "next/navigation"

interface ItemFormData {
    title: string
    shortDescription: string
    fullDescription: string
    price: string
    date: string
    priority: "low" | "medium" | "high"
    imageUrl: string
}

export default function AddItemPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)

    const [formData, setFormData] = useState<ItemFormData>({
        title: "",
        shortDescription: "",
        fullDescription: "",
        price: "",
        date: "",
        priority: "medium",
        imageUrl: ""
    })

    // Authentication Guard
    // useEffect(() => {
    //     // বাস্তব প্রজেক্টে এখানে আপনার Auth Token বা Session চেক করবেন (যেমন: Cookies বা LocalStorage)
    //     const isAuthenticated = localStorage.getItem("isLoggedIn") === "true"

    //     if (!isAuthenticated) {
    //         router.push("/login")
    //     } else {
    //         setLoading(false)
    //     }
    // }, [router])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        console.log("Submitting new item:", formData)

        // API Call Logic Here
        // const res = await fetch('/api/items', { method: 'POST', body: JSON.stringify(formData) })

        alert("Item added successfully!")
        router.push("/dashboard")
    }

    const iconStyle = {
        fontFamily: '"Material Symbols Outlined"',
        fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
    }

    if (false) {
        return (
            <div className="bg-[#13131b] min-h-screen w-full flex items-center justify-center text-[#c0c1ff]">
                <div className="animate-pulse font-['Geist'] font-bold text-lg">Verifying session...</div>
            </div>
        )
    }

    return (
        <div className="bg-[#13131b] font-['Inter'] text-[#e4e1ed] min-h-screen w-full flex items-center justify-center p-4 relative overflow-x-hidden">
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
                            placeholder="e.g., Old Aged Outlook Account Bundle"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white placeholder-[#464554] text-[14px] transition-all"
                        />
                    </div>

                    {/* Short Description */}
                    <div className="space-y-1">
                        <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                            Short Description *
                        </label>
                        <input
                            type="text"
                            name="shortDescription"
                            required
                            placeholder="Brief catchphrase or technical summary"
                            value={formData.shortDescription}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white placeholder-[#464554] text-[14px] transition-all"
                        />
                    </div>

                    {/* Full Description */}
                    <div className="space-y-1">
                        <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                            Full Description
                        </label>
                        <textarea
                            name="fullDescription"
                            rows={4}
                            placeholder="Detailed specifications, history, and usage conditions of the item..."
                            value={formData.fullDescription}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white placeholder-[#464554] text-[14px] transition-all resize-none"
                        />
                    </div>

                    {/* Grid Metadata Row: Price, Date & Priority */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Price Field */}
                        <div className="space-y-1">
                            <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                                Price (BDT) *
                            </label>
                            <input
                                type="number"
                                name="price"
                                required
                                placeholder="৳0.00"
                                value={formData.price}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white placeholder-[#464554] text-[14px] transition-all"
                            />
                        </div>

                        {/* Date Field */}
                        <div className="space-y-1">
                            <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                                Release Date *
                            </label>
                            <input
                                type="date"
                                name="date"
                                required
                                value={formData.date}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white placeholder-[#464554] text-[14px] transition-all custom-calendar-dark"
                            />
                        </div>

                        {/* Priority Field */}
                        <div className="space-y-1">
                            <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                                Priority Status
                            </label>
                            <select
                                name="priority"
                                value={formData.priority}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white text-[14px] transition-all cursor-pointer"
                            >
                                <option value="low" className="bg-[#1b1b23]">
                                    Low Priority
                                </option>
                                <option value="medium" className="bg-[#1b1b23]">
                                    Medium Priority
                                </option>
                                <option value="high" className="bg-[#1b1b23]">
                                    High Priority
                                </option>
                            </select>
                        </div>
                    </div>

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
                                name="imageUrl"
                                placeholder="https://example.com/image.png"
                                value={formData.imageUrl}
                                onChange={handleInputChange}
                                className="w-full pl-11 pr-4 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white placeholder-[#464554] text-[14px] transition-all"
                            />
                        </div>
                    </div>

                    {/* Submit Action Button */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-2 bg-gradient-to-r from-[#9aa3ff] to-[#a3baff] text-slate-900 font-bold rounded-xl text-[14px] md:text-[15px] transition-all hover:opacity-90 active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                        <span className="material-symbols-outlined text-[20px] font-bold" style={iconStyle}>
                            add_circle
                        </span>
                        Submit & Add Item
                    </button>
                </form>
            </div>
        </div>
    )
}
