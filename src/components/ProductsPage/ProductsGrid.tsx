"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { CircleCheckFill, HeartFill, ShoppingCart } from "@gravity-ui/icons"
import Link from "next/link"

interface Product {
    _id: string
    title: string
    slug: string
    category: string
    price: string
    originalPrice: string
    features: string[]
    img: string
    badge: string
    badgeBg: string
    badgeText: string
    stock: string
}

interface ProductsResponse {
    items: Product[]
    total: number
    page: number
    limit: number
    totalPages: number
}

const PAGE_SIZE = 8

export default function ProductsGrid() {
    const searchParams = useSearchParams()
    const paramsString = searchParams.toString()
    const currentPage = Number(searchParams.get("page")) || 1

    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true)
                setError(null)

                const params = new URLSearchParams(searchParams.toString())
                params.set("page", String(currentPage))
                params.set("limit", String(PAGE_SIZE))

                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?${params.toString()}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                if (!res.ok) {
                    throw new Error("Failed to fetch products")
                }

                const data: ProductsResponse = await res.json()
                setProducts(data.items)
            } catch (err) {
                console.error("Error fetching products:", err)
                setError("Failed to load products. Please try again later.")
            } finally {
                setIsLoading(false)
            }
        }

        fetchProducts()
    }, [paramsString, currentPage])

    if (error) {
        return (
            <div className="text-center text-[#ff4d6d] font-semibold py-20">
                <p>{error}</p>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="bg-[#1f1f27] rounded-2xl border border-[#464554]/20 overflow-hidden">
                            <div className="h-48 w-full bg-linear-to-r from-[#292932] via-[#34343d] to-[#292932] bg-size-[200%_100%] animate-pulse" />
                            <div className="p-4 space-y-3">
                                <div className="h-4 w-24 bg-[#292932] rounded-full animate-pulse" />
                                <div className="h-6 w-full bg-[#292932] rounded-lg animate-pulse" />
                                <div className="space-y-1.5">
                                    <div className="h-3 w-3/4 bg-[#292932] rounded animate-pulse" />
                                    <div className="h-3 w-1/2 bg-[#292932] rounded animate-pulse" />
                                </div>
                                <div className="pt-4 flex justify-between items-center border-t border-[#464554]/30">
                                    <div className="h-8 w-20 bg-[#292932] rounded-lg animate-pulse" />
                                    <div className="h-10 w-10 bg-[#292932] rounded-xl animate-pulse" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    if (products.length === 0) {
        return (
            <div className="text-center text-[#8c8a9e] py-20">
                <p>No products found.</p>
            </div>
        )
    }

    return (
        <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {products.map((product) => (
                    <Link
                        href={`products/${product.slug}`}
                        key={product._id}
                        className="group bg-[#1f1f27] rounded-2xl shadow-[0_4px_12px_rgba(15,23,42,0.05)] border border-[#464554]/20 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(15,23,42,0.1)] flex flex-col h-full"
                    >
                        <div className="relative h-48 w-full bg-[#292932] overflow-hidden">
                            <img
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                alt={product.title}
                                src={product.img}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
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
                        <div className="p-4 flex flex-col grow">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[12px] font-bold text-[#ffb783] uppercase tracking-tighter">
                                    {product.category}
                                </span>
                                <span className="w-1 h-1 rounded-full bg-[#464554]" />
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
                                        <CircleCheckFill className="w-3.5 h-3.5 text-[#c0c1ff] shrink-0" /> {feat}
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
                    </Link>
                ))}
            </div>
        </div>
    )
}
