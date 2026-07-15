import React from "react"
import Image from "next/image"
import { ArrowRight, CircleCheckFill, ShoppingCart } from "@gravity-ui/icons"
import Link from "next/link"

export default async function FeaturedProducts() {
    // const products = [
    //     {
    //         id: 1,
    //         title: "Gmail Old Account (2020)",
    //         category: "Gmail",
    //         price: "৳ 120.00",
    //         features: ["Instant delivery", "Full inbox access"],
    //         img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvW4-sySzTc79mmMjM-EjhdUQPF9jcI-s8CDTtmao_wegPTUp3NnxWKFVTF4TJU2DoSs7Piar868HmMKj0-7f45c6IEGa4cRvGmO2_RWWJH5swIneDvOxYkPVBwe8_6cVOaqKhkIXV7ZOVDCAzYI0KwTIWR00hUlYHGFkLZ4-apDcQbiXwrFDkHi0-n8Q8SaYVWTuqcu4QGO1aqVrNor7s16m6kgG-4oN-c_IQnih4b9qEWpSD1pb0nA",
    //         popular: true
    //     },
    //     {
    //         id: 2,
    //         title: "Capcut Pro - 1 Year",
    //         category: "Editing",
    //         price: "৳ 450.00",
    //         features: ["All premium effects", "Direct email login"],
    //         img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP280-L5PfrwzJSIhLqOplUFlks8Uz2L9PS5e-fuxgDe_pKJE1_EhGmGIntDdfT7OfE2z9j2zHQX5X1w7HI5Tv8SLyhnU7qMRGgkL-pvNR4MHMFlV1Tt3IFmhqMV39FuRZx9doxSniiBeh5-YEy_udiiEWAw3ZF1reXaGJyvqPEqbN6mxeHgkIqzayVfduBlPuCmw12PHlS1lEVf7jCvufuv55mMK3Cg2OFQjNhKgUyUSBFf9vLHCWoA"
    //     },
    //     {
    //         id: 3,
    //         title: "Nord VPN - Unlimited",
    //         category: "Security",
    //         price: "৳ 320.00",
    //         features: ["High-speed servers", "24/7 Warranty cover"],
    //         img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZsUiCPo2iImFkPI15bZKcobUwqs9oxFfxmFSf8ptgY59f-EsHIrGHLzuZk1XHgoaIpmPclasppY-Q3ezEr-D9k-zDQC2uTt66B13vyW8PJ9WCHYtX4laRmXiQvPtDhyqN3yl08LZyydAvEWB4Rtz49CsMXsLpZbNKR78B_JN4C0mVTDAmpCn5vQv_5fa4rYWQdYgnNLn_0fXEC4-aeN6UDEVklItwZaQxJUb1wdmGMOG6Rbt2CCVvjA"
    //     },
    //     {
    //         id: 4,
    //         title: "Netflix 4K Shared",
    //         category: "Streaming",
    //         price: "৳ 280.00",
    //         features: ["Ultra HD Streaming", "Instant Replacement"],
    //         img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj5iW7bASzq67zbD82Yc1bSYv3yZzzKTiv0yBZmfGolpoqLqnyvZGCCeNRcLCoeWtX7gFOiCBOwaflz8cwngZeKmvrmHoW9iPk3eHuP5E0GJN9BjEs2R-ook9PqehW7c2BCKUEs73OrteuG3G_V6EcMqMNXQgvMiT7fogS0rHXD5onpiGSCmlVV-fRsGdVPLnqOHxHGhxhrpokTPjnFBuMuhjkH0bboiI6i1m9_uuHzsk2-iuVtsr_0g"
    //     }
    // ]

    interface Product {
        _id: string
        title: string
        category: string
        price: number
        originalPrice: number
        features: string[]
        img: string
        badge: string
        popular: boolean
        stock: string
        slug: string
    }

    let products: Product[] = []
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/latest`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            cache: "no-store"
        })
        products = await data.json()
    } catch (error) {
        console.error("Error fetching products:", error)
        return (
            <section className="py-20 px-8 max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="font-['Geist'] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#e4e1ed]">
                            Featured Products
                        </h2>
                        <p className="text-[#c7c4d7] mt-2">The most trusted accounts in our inventory today.</p>
                    </div>
                    <button className="flex items-center gap-2 text-[#c0c1ff] font-bold hover:underline">
                        View Catalog <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
                <p className="text-[#c7c4d7] text-center ">Failed to load products. Please try again later.</p>
            </section>
        )
    }

    return (
        <section className="py-20 px-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="font-['Geist'] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#e4e1ed]">
                        Featured Products
                    </h2>
                    <p className="text-[#c7c4d7] mt-2">The most trusted accounts in our inventory today.</p>
                </div>
                <button className="flex items-center gap-2 text-[#c0c1ff] font-bold hover:underline">
                    View Catalog <ArrowRight className="w-4 h-4" />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product: Product) => (
                    <Link
                        href={`/products/${product.slug}`}
                        key={product._id}
                        className="group flex flex-col h-full bg-[#1f1f27] rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(15,23,42,0.1)] shadow-[0_4px_12px_rgba(15,23,42,0.05)] border border-[#464554]/10 relative"
                    >
                        {product.popular && (
                            <div className="absolute top-4 left-4 z-10">
                                <span className="px-3 py-1 bg-orange-500 text-white text-[10px] font-bold uppercase rounded-md shadow-sm">
                                    Popular
                                </span>
                            </div>
                        )}
                        <div className="aspect-video relative overflow-hidden bg-[#1f1f27]">
                            <Image
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                alt={product.title}
                                src={product.img}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="p-6 flex flex-col grow">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">
                                    IN STOCK
                                </span>
                                <span className="text-[#c7c4d7] text-[12px]">Category: {product.category}</span>
                            </div>
                            <h3 className="font-['Geist'] text-[24px] font-semibold leading-[1.3] text-[#e4e1ed] mb-2">
                                {product.title}
                            </h3>
                            <div className="space-y-2 mb-6">
                                {product.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-center gap-2 text-[13px] text-[#c7c4d7]">
                                        <CircleCheckFill className="w-4.5 h-4.5 text-green-600 shrink-0" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center justify-between border-t border-[#464554]/20 pt-4 mt-auto">
                                <span className="text-2xl font-bold text-[#e4e1ed]">{product.price}</span>
                                <button className="p-3 bg-[#c0c1ff]/10 text-[#c0c1ff] rounded-xl hover:bg-[#c0c1ff] hover:text-white transition-all">
                                    <ShoppingCart className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

