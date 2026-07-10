import React from "react"
import { CircleCheckFill, HeartFill, ShoppingCart } from "@gravity-ui/icons"

export default function ProductsGrid() {
    const products = [
        {
            title: "Nord VPN - Unlimited 1Y",
            category: "VPN Services",
            price: "৳850",
            originalPrice: "৳1,200",
            features: ["60+ Locations", "Instant Delivery"],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc7HBrDHoOv69CowdDz6oGJui6szF3oWd0nLSe5jjUk6cfSGNcnRh_S1yfq70dZUOnMoDiJAg7Mtgd4MlhY5cl0BLm_vfiF0Y3JokZNaPzAEstoPzYQNCidJnr3W9dAW96Ad3ZhCf3zrcn7qEsrjeUe9924lgn24WoKBbw-avwy3k9VdOXtnW69MpoigBLNVGBm6_Tash6krcaibVC4EBRfgfh5FpZbgSzVCS_kXdrygtW5ZzwGBb8ow",
            badge: "Premium",
            badgeBg: "bg-[#adc6ff]",
            badgeText: "text-[#002e6a]",
            stock: "In Stock"
        },
        {
            title: "Gmail Old Account (2020)",
            category: "Google Accounts",
            price: "৳320",
            originalPrice: "৳450",
            features: ["PV Verified", "Recovery Email Included"],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAK3QHGDW_DFPl9A15x3YGnCXBmEsKGhl0ibI5gNmdIZY_YDCGCIhIZTA_Q7o1aK-wLz4VitouxJw7LFwJSZsQzOgEP7vMknuIGWcV4WMEB4x4QmgUk93siG9rsWybACWNRPVP-YNahSW_nTk8wsUYHbxhhNNWVhTdkS_IUxp6G2nij2pLQAyOZlaKS1bjftj_ZEPL2IhsWiea2Mbj1d7szs5P8K86TX9jJLWGN1mnEZvHdBXwheaSug",
            badge: "Aged 2020",
            badgeBg: "bg-[#c0c1ff]",
            badgeText: "text-[#13131b]",
            stock: "24 left"
        },
        {
            title: "Capcut Pro - 1 Year Plan",
            category: "Video Editing",
            price: "৳1,100",
            originalPrice: "৳1,500",
            features: ["All Pro Effects", "Direct Login"],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBr179LmOxrSn6NUTcD10Wc9uGtoQhrvQO9ahnTM2X_Ero-fS8X2F-ekwLXpuFuURfsBvwuzyLwefaH3s63phibCraSgu6pn_111yl2lxsItBo0I-5lSMlDplXFS-j02IiEhNxoPfOqWOCtXG9m5blyfL1QVQzC-9F8wK3fyGa6LPrXJMm1N02c3aWVF7KP3sj_heJkCiYgIu-UlFlvGeLRkSINEVf--hCvx1-K4Z3mgJAkt0ktv6N1g",
            badge: "Popular",
            badgeBg: "bg-[#ffb783]",
            badgeText: "text-[#4f2500]",
            stock: "Unlimited"
        },
        {
            title: "Netflix 4K Shared Profile",
            category: "Streaming",
            price: "৳250",
            originalPrice: "৳350",
            features: ["1 Screen Access", "Full Warranty"],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpSk6BjiHnSuVDOAvSCfkb_J6iPv34lMaIQZsXGv0vrm4ILx1XGqV_4lnbkqV2weVfwZdrjsFBR2vJMKg49Pd-urgsno6XD7JTs3pxu-48Ym20jPv7AN0Qvq86RtnHW9R_XrKkjQPGsDZ8GLVoM9x6NAZ4TSClPbuMisnqPfjHY16j0slyWv6AnBQNEJtDtXwA69MPclu8gJ14Ll5Rgq4Lmdc8JtXlawH2gwd8-_aS9kotfi1J-YKXmA",
            badge: "4K UHD",
            badgeBg: "bg-[#ffb4ab]",
            badgeText: "text-[#690005]",
            stock: "Ready"
        }
    ]

    return (
        <div className="mb-[24px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] mb-[24px]">
                {products.map((product, idx) => (
                    <div
                        key={idx}
                        className="group bg-[#1f1f27] rounded-2xl shadow-[0_4px_12px_rgba(15,23,42,0.05)] border border-[#464554]/20 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(15,23,42,0.1)] flex flex-col h-full"
                    >
                        <div className="relative h-48 w-full bg-[#292932] overflow-hidden">
                            <img
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                alt={product.title}
                                src={product.img}
                            />
                            <div
                                className={`absolute top-3 left-3 ${product.badgeBg} ${product.badgeText} text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider`}
                            >
                                {product.badge}
                            </div>
                            <div className="absolute top-3 right-3 bg-[#13131b]/80 backdrop-blur-md p-1.5 rounded-full shadow-sm hover:bg-[#13131b] cursor-pointer transition-colors">
                                <HeartFill className="w-5 h-5 text-[#c0c1ff]" />
                            </div>
                        </div>
                        <div className="p-[16px] flex flex-col flex-grow">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[12px] font-bold text-[#ffb783] uppercase tracking-tighter">
                                    {product.category}
                                </span>
                                <span className="w-1 h-1 rounded-full bg-[#464554]"></span>
                                <span className="text-[12px] text-green-700 bg-green-50 px-2 py-0.5 rounded-full font-semibold">
                                    {product.stock}
                                </span>
                            </div>
                            <h3 className="font-['Geist'] text-[24px] font-semibold leading-[1.3] text-[#e4e1ed] mb-2">
                                {product.title}
                            </h3>
                            <ul className="text-[12px] text-[#c7c4d7] mb-4 space-y-1">
                                {product.features.map((feat, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-1">
                                        <CircleCheckFill className="w-[14px] h-[14px] text-[#c0c1ff] shrink-0" /> {feat}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto flex items-center justify-between border-t border-[#464554]/30 pt-4">
                                <div>
                                    <span className="text-[12px] text-[#c7c4d7] line-through block">
                                        {product.originalPrice}
                                    </span>
                                    <span className="font-['Geist'] text-[24px] font-semibold leading-[1.3] text-[#c0c1ff]">
                                        {product.price}
                                    </span>
                                </div>
                                <button className="bg-[#c0c1ff] text-[#13131b] p-2.5 rounded-xl hover:bg-[#8083ff] transition-colors">
                                    <ShoppingCart className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Skeleton States Section */}
            <div className="mb-[24px] border-t border-[#464554]/30 pt-[24px]">
                <div className="flex items-center justify-between mb-[16px]">
                    <h2 className="font-['Geist'] text-[24px] font-semibold leading-[1.3] text-[#c7c4d7]">
                        Loading Preview
                    </h2>
                    <span className="text-[12px] px-3 py-1 bg-[#292932] rounded-full font-bold text-[#c0c1ff] animate-pulse">
                        SKELETON LOADERS
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] opacity-60 pointer-events-none">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className={`bg-[#1f1f27] rounded-2xl border border-[#464554]/20 overflow-hidden ${i > 1 ? "hidden md:block" : ""} ${i > 2 ? "lg:block" : ""}`}
                        >
                            <div className="h-48 w-full bg-gradient-to-r from-[#292932] via-[#34343d] to-[#292932] bg-[length:200%_100%] animate-pulse"></div>
                            <div className="p-[16px] space-y-3">
                                <div className="h-4 w-24 bg-[#292932] rounded-full animate-pulse"></div>
                                <div className="h-6 w-full bg-[#292932] rounded-lg animate-pulse"></div>
                                <div className="space-y-1.5">
                                    <div className="h-3 w-3/4 bg-[#292932] rounded animate-pulse"></div>
                                    <div className="h-3 w-1/2 bg-[#292932] rounded animate-pulse"></div>
                                </div>
                                <div className="pt-4 flex justify-between items-center border-t border-[#464554]/30">
                                    <div className="h-8 w-20 bg-[#292932] rounded-lg animate-pulse"></div>
                                    <div className="h-10 w-10 bg-[#292932] rounded-xl animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

