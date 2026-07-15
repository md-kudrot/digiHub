"use client"

import { useEffect, useState } from "react"
import { Eye, TrashBin } from "@gravity-ui/icons"
import Link from "next/link"
import { authClient } from "@/lib/auth-client"

interface Product {
    _id: string
    title: string
    slug: string
    stock?: string
    price: string
}

interface ProductsResponse {
    items: Product[]
    total: number
    page: number
    limit: number
    totalPages: number
}

export default function SimpleProductsPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [deletingId, setDeletingId] = useState<string | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true)
                setError(null)

                // Manage page-e shob product dekhano dorkar, tai boro limit
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?limit=100`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                if (!res.ok) {
                    throw new Error("Failed to fetch products")
                }

                const data: ProductsResponse = await res.json()
                setProducts(data.items ?? [])
            } catch (err) {
                console.error("Error fetching products:", err)
                setError("Failed to load products. Please try again later.")
            } finally {
                setIsLoading(false)
            }
        }

        fetchProducts()
    }, [])

    const handleDelete = async (id: string, title: string) => {
        const confirmed = window.confirm(`Delete "${title}"? This cannot be undone.`)
        if (!confirmed) return

        setDeletingId(id)

        try {
            // const session = await authClient.getSession()
            // console.log("Session Data:", session.data?.session.token)
            const { data: tokenData } = await authClient.token()
            // console.log("Token Data:", tokenData?.token)
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${tokenData?.token}`
                }
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data?.message || "Failed to delete product")
            }

            // UI theke sathe sathe soray dilam — abar fetch korte hobe na
            setProducts((prev) => prev.filter((p) => p._id !== id))
        } catch (err) {
            alert(err instanceof Error ? err.message : "Something went wrong while deleting")
        } finally {
            setDeletingId(null)
        }
    }

    return (
        <div className="container mx-auto p-6 space-y-6 bg-transparent">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#c0c1ff]/20 pb-4">
                <div>
                    <h2 className="text-2xl font-bold text-[#c0c1ff]">Product Inventory</h2>
                    <p className="text-xs text-[#c0c1ff]/70 mt-1">Simple view of your products and stock levels.</p>
                </div>
                <span className="bg-[#c0c1ff]/10 text-[#c0c1ff] text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#c0c1ff]/20">
                    Total: {products.length} Products
                </span>
            </div>

            {error && (
                <div className="px-4 py-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-sm font-medium">
                    {error}
                </div>
            )}

            {/* Table/List View */}
            <div className="bg-transparent border border-[#c0c1ff]/20 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#c0c1ff]/5 text-[#c0c1ff]/80 text-xs uppercase tracking-wider font-semibold border-b border-[#c0c1ff]/20">
                            <th className="px-6 py-4">Product Name</th>
                            <th className="px-6 py-4">Stock</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#c0c1ff]/10 text-[#c0c1ff]/90">
                        {isLoading && (
                            <>
                                {[1, 2, 3, 4].map((i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-4">
                                            <div className="h-4 w-40 bg-[#c0c1ff]/10 rounded animate-pulse" />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="h-4 w-20 bg-[#c0c1ff]/10 rounded animate-pulse" />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="h-4 w-24 bg-[#c0c1ff]/10 rounded animate-pulse ml-auto" />
                                        </td>
                                    </tr>
                                ))}
                            </>
                        )}

                        {!isLoading && !error && products.length === 0 && (
                            <tr>
                                <td colSpan={3} className="px-6 py-10 text-center text-[#c0c1ff]/50 text-sm">
                                    No products found. Add your first item to get started.
                                </td>
                            </tr>
                        )}

                        {!isLoading &&
                            products.map((product) => (
                                <tr key={product._id} className="hover:bg-[#c0c1ff]/5 transition-colors">
                                    {/* Product Name */}
                                    <td className="px-6 py-4 text-sm font-medium">{product.title}</td>

                                    {/* Stock */}
                                    <td className="px-6 py-4 text-sm">
                                        {product.stock && product.stock !== "0" ? (
                                            <span className="text-[#c0c1ff] font-semibold">{product.stock}</span>
                                        ) : (
                                            <span className="text-rose-400 font-semibold opacity-80">Out of Stock</span>
                                        )}
                                    </td>

                                    {/* Action Buttons */}
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-3">
                                            {/* View Details Button */}
                                            <Link
                                                href={`/products/${product.slug}`}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#c0c1ff]/10 hover:bg-[#c0c1ff]/20 text-[#c0c1ff] text-xs font-medium rounded-lg transition-colors border border-[#c0c1ff]/20"
                                                title="View Details"
                                            >
                                                <Eye width={14} height={14} />
                                                View Details
                                            </Link>

                                            {/* Delete Button */}
                                            <button
                                                onClick={() => handleDelete(product._id, product.title)}
                                                disabled={deletingId === product._id}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-medium rounded-lg transition-all border border-rose-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                <TrashBin width={14} height={14} />
                                                <span>{deletingId === product._id ? "Deleting..." : "Delete"}</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
