"use client"
import { useEffect, useState } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight } from "@gravity-ui/icons"

export default function Pagination() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const currentPage = Number(searchParams.get("page")) || 1
    const [totalPages, setTotalPages] = useState(1)

    // totalPages sudhu janar jonno halka fetch — real product list ProductsGrid theke ashe
    useEffect(() => {
        const fetchTotalPages = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?page=1&limit=8`)
                if (!res.ok) return
                const data = await res.json()
                setTotalPages(data.totalPages || 1)
            } catch (err) {
                console.error("Error fetching total pages:", err)
            }
        }

        fetchTotalPages()
    }, [])

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages || page === currentPage) return
        const params = new URLSearchParams(searchParams.toString())
        params.set("page", String(page))
        router.push(`${pathname}?${params.toString()}`)
    }

    // Page number list banano: first, last, current-er ashe-pashe, baki jaygay "..."
    const getPageNumbers = (): (number | "ellipsis")[] => {
        const pages: (number | "ellipsis")[] = []

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i)
            return pages
        }

        pages.push(1)

        if (currentPage > 3) pages.push("ellipsis")

        const start = Math.max(2, currentPage - 1)
        const end = Math.min(totalPages - 1, currentPage + 1)
        for (let i = start; i <= end; i++) pages.push(i)

        if (currentPage < totalPages - 2) pages.push("ellipsis")

        pages.push(totalPages)

        return pages
    }

    if (totalPages <= 1) return null

    return (
        <div className="flex items-center justify-center gap-2 mt-[24px]">
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#464554] hover:bg-[#1f1f27] transition-colors group disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            >
                <ChevronLeft className="w-5 h-5 text-[#c7c4d7] group-hover:text-[#c0c1ff]" />
            </button>

            {getPageNumbers().map((page, idx) =>
                page === "ellipsis" ? (
                    <span key={`ellipsis-${idx}`} className="text-[#908fa0] mx-2">
                        ...
                    </span>
                ) : (
                    <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={
                            page === currentPage
                                ? "w-10 h-10 flex items-center justify-center rounded-xl bg-[#c0c1ff] text-[#13131b] font-bold"
                                : "w-10 h-10 flex items-center justify-center rounded-xl border border-[#464554] text-[#c7c4d7] hover:bg-[#1f1f27] transition-colors"
                        }
                    >
                        {page}
                    </button>
                )
            )}

            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#464554] hover:bg-[#1f1f27] transition-colors group disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            >
                <ChevronRight className="w-5 h-5 text-[#c7c4d7] group-hover:text-[#c0c1ff]" />
            </button>
        </div>
    )
}

