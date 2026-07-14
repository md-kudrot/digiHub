"use client"
import Link from "next/link"

interface NavbarProps {
    isMobileMenuOpen: boolean
    setIsMobileMenuOpen: (open: boolean) => void
    iconStyle: object
}

export default function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen, iconStyle }: NavbarProps) {
    return (
        <header className="fixed md:sticky top-0 w-full z-50 bg-[#13131b]/80 backdrop-blur-md border-b border-[#464554]/30 h-20 flex items-center justify-between px-6 md:px-8">
            <div className="flex items-center gap-4">
                {/* Mobile Logo */}
                <Link href="/" className="md:hidden font-['Geist'] text-[32px] font-bold text-[#c0c1ff]">
                    Nexus.
                </Link>
                <h2 className="hidden md:block text-[18px] font-bold text-white font-['Geist']">Client Portal</h2>
            </div>

            {/* Top Right User Section */}
            <div className="flex items-center gap-4">
                <Link
                    href="/products"
                    className="hidden sm:flex items-center gap-2 text-[13px] font-semibold text-[#c0c1ff] hover:underline"
                >
                    <span className="material-symbols-outlined text-[16px]" style={iconStyle}>
                        shopping_cart
                    </span>
                    Back to Store
                </Link>

                <div className="hidden sm:block text-right">
                    <p className="text-[14px] font-bold text-white font-['Geist']">MD Kamrujjaman</p>
                    <p className="text-[11px] text-[#8c8a9e]">Premium Buyer</p>
                </div>

                <Link
                    href="/dashboard/settings"
                    className="w-10 h-10 rounded-full border border-[#464554]/60 overflow-hidden bg-[#1b1b23] hover:border-[#c0c1ff] transition-all"
                >
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                    />
                </Link>

                {/* Hamburger Button for Mobile */}
                <button
                    className="md:hidden text-[#c0c1ff] p-2 cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </header>
    )
}
