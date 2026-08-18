"use client"
import { authClient } from "@/lib/auth-client"
import { Bars, ShoppingCart, Xmark } from "@gravity-ui/icons"
import Link from "next/link"

interface NavbarProps {
    isMobileMenuOpen: boolean
    setIsMobileMenuOpen: (open: boolean) => void
}

export default function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen }: NavbarProps) {
    const { data: session } = authClient.useSession()

    const user = session?.userlo
    return (
        <header className="fixed md:sticky top-0 w-full z-50 bg-[#13131b]/80 backdrop-blur-md border-b border-[#464554]/30 h-20 flex items-center justify-between px-6 md:px-8">
            <div className="flex items-center gap-4">
                {/* Mobile Logo */}
                <Link href="/" className="md:hidden font-['Geist'] text-[32px] font-bold text-[#c0c1ff]">
                    Dgihub
                </Link>
                <h2 className="hidden md:block text-[18px] font-bold text-white font-['Geist']">Client Portal</h2>
            </div>

            {/* Top Right User Section */}
            <div className="flex items-center gap-4">
                <Link
                    href="/products"
                    className="hidden sm:flex items-center gap-2 text-[13px] font-semibold text-[#c0c1ff] hover:underline"
                >
                    <ShoppingCart className="w-4 h-4" />
                    Back to Store
                </Link>

                <div className="hidden sm:block text-right">
                    <p className="text-[14px] font-bold text-white font-['Geist']">{user?.name}</p>
                </div>

                <Link
                    href="/dashboard/profile"
                    className="w-10 h-10 rounded-full border border-[#464554]/60 overflow-hidden bg-[#1b1b23] hover:border-[#c0c1ff] transition-all"
                >
                    <img
                        src={user?.image || "https://placehold.co/100x100?text=User+Avatar&font=inter"}
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                    />
                </Link>

                {/* Hamburger Button for Mobile */}
                <button
                    className="md:hidden text-[#c0c1ff] p-2 cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <Xmark className="w-6 h-6" /> : <Bars className="w-6 h-6" />}
                </button>
            </div>
        </header>
    )
}
