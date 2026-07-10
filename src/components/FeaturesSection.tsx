import React from "react"
import { ClockArrowRotateLeft, Headphones, ShieldCheck, ThunderboltFill } from "@gravity-ui/icons"

export default function FeaturesSection() {
    const features = [
        {
            Icon: ThunderboltFill,
            title: "Instant Delivery",
            desc: "Your credentials arrive in your dashboard within 30 seconds of payment confirmation."
        },
        {
            Icon: Headphones,
            title: "24/7 Live Support",
            desc: "Our expert team is always online to help you with any issues or queries via WhatsApp."
        },
        {
            Icon: ShieldCheck,
            title: "Secure Payment",
            desc: "We use SSL encryption and trusted gateways like BKash and Nagad for all transactions."
        },
        {
            Icon: ClockArrowRotateLeft,
            title: "Warranty Policy",
            desc: "All products come with a replacement guarantee for the duration of the subscription."
        }
    ]

    return (
        <section className="py-20 bg-[#1b1b23]">
            <div className="px-[32px] max-w-[1280px] mx-auto text-center mb-16">
                <h2 className="font-['Geist'] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#e4e1ed] mb-4">
                    The Nexus Advantage
                </h2>
                <p className="text-[#c7c4d7] max-w-2xl mx-auto">
                    We&apos;ve built our reputation on trust and speed. Join thousands of satisfied customers who rely
                    on us for their digital needs.
                </p>
            </div>
            <div className="px-[32px] max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((f, idx) => (
                    <div
                        key={idx}
                        className="bg-[#1f1f27] p-8 rounded-2xl shadow-[0_4px_12px_rgba(15,23,42,0.05)] text-center flex flex-col items-center gap-4 border border-[#1f1f27]"
                    >
                        <div className="w-16 h-16 bg-[#c0c1ff]/10 text-[#c0c1ff] rounded-full flex items-center justify-center">
                            <f.Icon className="w-8 h-8" />
                        </div>
                        <h4 className="font-['Geist'] text-[24px] font-semibold leading-[1.3] text-[#e4e1ed]">
                            {f.title}
                        </h4>
                        <p className="text-[#c7c4d7] text-sm">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

