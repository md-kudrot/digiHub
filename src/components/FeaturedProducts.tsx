import React from "react"
import Image from "next/image"
import { ArrowRight, CircleCheckFill, ShoppingCart } from "@gravity-ui/icons"
import Link from "next/link"

export default async function FeaturedProducts() {
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
                    <Link href="/products" className="flex items-center gap-2 text-[#c0c1ff] font-bold hover:underline">
                        View Catalog <ArrowRight className="w-4 h-4" />
                    </Link>
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
                <Link href="/products" className="flex items-center gap-2 text-[#c0c1ff] font-bold hover:underline">
                    View Catalog <ArrowRight className="w-4 h-4" />
                </Link>
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
                                {product.features?.map((feature, fIdx) => (
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
