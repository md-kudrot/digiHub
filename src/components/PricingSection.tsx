import React from "react"
import { Ban, CircleCheckFill } from "@gravity-ui/icons"

export default function PricingSection() {
    return (
        <section className="py-20 bg-[#292932]">
            <div className="px-[32px] max-w-[1280px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-['Geist'] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#e4e1ed] mb-4">
                        Bulk Pricing & Plans
                    </h2>
                    <p className="text-[#c7c4d7]">Special tiers for individual buyers and enterprise resellers.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Basic */}
                    <div className="bg-[#1f1f27] rounded-3xl p-8 shadow-[0_4px_12px_rgba(15,23,42,0.05)] border border-[#464554]/20 flex flex-col">
                        <h3 className="font-['Geist'] text-[24px] font-semibold leading-[1.3] mb-2 text-[#e4e1ed]">
                            Starter
                        </h3>
                        <p className="text-[#c7c4d7] text-sm mb-6">Perfect for individual one-time purchases.</p>
                        <div className="text-4xl font-bold mb-8 text-[#e4e1ed]">
                            ৳ 0 <span className="text-lg font-normal text-[#c7c4d7]">/month</span>
                        </div>
                        <ul className="space-y-4 mb-10 flex-grow text-[#c7c4d7]">
                            <li className="flex items-center gap-3 text-sm">
                                <CircleCheckFill className="w-5 h-5 text-[#c0c1ff] shrink-0" /> Instant Auto-Delivery
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <CircleCheckFill className="w-5 h-5 text-[#c0c1ff] shrink-0" /> 24/7 Standard Support
                            </li>
                            <li className="flex items-center gap-3 text-sm opacity-50">
                                <Ban className="w-5 h-5 text-current shrink-0" /> Reseller Dashboard
                            </li>
                            <li className="flex items-center gap-3 text-sm opacity-50">
                                <Ban className="w-5 h-5 text-current shrink-0" /> API Integration
                            </li>
                        </ul>
                        <button className="w-full py-4 rounded-xl border-2 border-[#c0c1ff] text-[#c0c1ff] font-bold hover:bg-[#c0c1ff]/5 transition-all">
                            Get Started
                        </button>
                    </div>

                    {/* Pro */}
                    <div className="bg-[#1f1f27] rounded-3xl p-8 shadow-[0_4px_12px_rgba(15,23,42,0.05)] border-2 border-[#c0c1ff] relative flex flex-col transform scale-105">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-br from-[#4648d4] to-[#2170e4] text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
                            Most Popular
                        </div>
                        <h3 className="font-['Geist'] text-[24px] font-semibold leading-[1.3] mb-2 text-[#c0c1ff]">
                            Pro Reseller
                        </h3>
                        <p className="text-[#c7c4d7] text-sm mb-6">Designed for growing digital shops.</p>
                        <div className="text-4xl font-bold mb-8 text-[#e4e1ed]">
                            ৳ 1,500 <span className="text-lg font-normal text-[#c7c4d7]">/month</span>
                        </div>
                        <ul className="space-y-4 mb-10 flex-grow text-[#c7c4d7]">
                            <li className="flex items-center gap-3 text-sm">
                                <CircleCheckFill className="w-5 h-5 text-[#c0c1ff] shrink-0" /> 5% Bulk Discount
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <CircleCheckFill className="w-5 h-5 text-[#c0c1ff] shrink-0" /> Priority Support
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <CircleCheckFill className="w-5 h-5 text-[#c0c1ff] shrink-0" /> Reseller Dashboard
                            </li>
                            <li className="flex items-center gap-3 text-sm opacity-50">
                                <Ban className="w-5 h-5 text-current shrink-0" /> White-label API
                            </li>
                        </ul>
                        <button className="w-full py-4 rounded-xl bg-gradient-to-br from-[#4648d4] to-[#2170e4] text-white font-bold hover:shadow-lg transition-all">
                            Select Pro
                        </button>
                    </div>

                    {/* Business */}
                    <div className="bg-[#1f1f27] rounded-3xl p-8 shadow-[0_4px_12px_rgba(15,23,42,0.05)] border border-[#464554]/20 flex flex-col">
                        <h3 className="font-['Geist'] text-[24px] font-semibold leading-[1.3] mb-2 text-[#e4e1ed]">
                            Enterprise
                        </h3>
                        <p className="text-[#c7c4d7] text-sm mb-6">High volume solutions for large scales.</p>
                        <div className="text-4xl font-bold mb-8 text-[#e4e1ed]">
                            ৳ 5,000 <span className="text-lg font-normal text-[#c7c4d7]">/month</span>
                        </div>
                        <ul className="space-y-4 mb-10 flex-grow text-[#c7c4d7]">
                            <li className="flex items-center gap-3 text-sm">
                                <CircleCheckFill className="w-5 h-5 text-[#c0c1ff] shrink-0" /> 15% Bulk Discount
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <CircleCheckFill className="w-5 h-5 text-[#c0c1ff] shrink-0" /> Dedicated Manager
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <CircleCheckFill className="w-5 h-5 text-[#c0c1ff] shrink-0" /> Full API Access
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <CircleCheckFill className="w-5 h-5 text-[#c0c1ff] shrink-0" /> Custom Replacement Logic
                            </li>
                        </ul>
                        <button className="w-full py-4 rounded-xl border-2 border-[#464554] text-[#e4e1ed] font-bold hover:bg-[#1f1f27] transition-all">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

