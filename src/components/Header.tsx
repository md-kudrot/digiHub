"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    // ইউজার লগইন স্টেট টেস্ট করার জন্য (True হলে অ্যাভাটার দেখাবে, False হলে বাটন)
    // const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const pathname = usePathname()

    return (
        <header className="fixed top-0 w-full z-50 bg-[#13131b] backdrop-blur-md border-b border-[#464554]/30">
            <div className="flex items-center justify-between px-[32px] h-20 max-w-[1280px] mx-auto">
                <div className="flex items-center gap-8">
                    <Link
                        className="font-['Geist'] text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#c0c1ff]"
                        href="/"
                    >
                        Nexus.
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link
                            className={`text-[#c0c1ff] font-bold border-b-2 ${pathname === "/" ? "border-[#c0c1ff]" : "border-transparent"}  font-['Geist'] text-[14px] leading-[1.4] tracking-[0.05em]`}
                            href="/"
                        >
                            Home
                        </Link>
                        <Link
                            className={`text-[#c0c1ff] font-bold border-b-2 ${pathname === "/products" ? "border-[#c0c1ff]" : "border-transparent"}  font-['Geist'] text-[14px] leading-[1.4] tracking-[0.05em]`}
                            href="/products"
                        >
                            Products
                        </Link>
                        <Link
                            className={`text-[#c0c1ff] font-bold border-b-2 ${pathname === "/categories" ? "border-[#c0c1ff]" : "border-transparent"}  font-['Geist'] text-[14px] leading-[1.4] tracking-[0.05em]`}
                            href="/categories"
                        >
                            Categories
                        </Link>
                    </nav>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">
                    {/* Desktop View */}
                    <div className="hidden md:flex items-center gap-4">
                        {isLoggedIn ? (
                            /* User Profile Avatar */
                            <Link
                                href="/profile"
                                className="w-10 h-10 rounded-full border border-[#464554]/60 overflow-hidden hover:border-[#c0c1ff] transition-all focus:outline-none"
                            >
                                <img
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                    alt="User Avatar"
                                    className="w-full h-full object-cover bg-[#1b1b23]"
                                />
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="px-6 py-2 rounded-xl text-[#c0c1ff] font-bold hover:bg-[#1b1b23] transition-all font-['Geist'] text-[14px] leading-[1.4] tracking-[0.05em]"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="px-6 py-2 rounded-xl bg-gradient-to-br from-[#4648d4] to-[#2170e4] text-white font-bold hover:opacity-90 shadow-sm transition-all font-['Geist'] text-[14px] leading-[1.4] tracking-[0.05em]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Hamburger Menu Icon for Mobile */}
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
                            /* মোবাইলে লগইন থাকলে হ্যামবার্গারের পাশাপাশি ছোট করে অ্যাভাটারও দেখা যাবে */
                            <div className="flex items-center gap-3">
                                {isLoggedIn && (
                                    <div className="w-8 h-8 rounded-full border border-[#464554]/60 overflow-hidden">
                                        <img
                                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                            alt="User Avatar"
                                            className="w-full h-full object-cover bg-[#1b1b23]"
                                        />
                                    </div>
                                )}
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
                            </div>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#13131b] border-b border-[#464554]/30 px-[32px] py-4 flex flex-col gap-4">
                    <Link
                        className={`text-[#c0c1ff] font-bold border-b-2 ${pathname === "/" ? "border-[#c0c1ff]" : "border-transparent"} pb-1 font-['Geist'] text-[14px] leading-[1.4] tracking-[0.05em]`}
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className={`text-[#c0c1ff] font-bold border-b-2 ${pathname === "/products" ? "border-[#c0c1ff]" : "border-transparent"} pb-1 font-['Geist'] text-[14px] leading-[1.4] tracking-[0.05em]`}
                        href="/products"
                    >
                        Products
                    </Link>
                    <Link
                        className={`text-[#c0c1ff] font-bold border-b-2 ${pathname === "/categories" ? "border-[#c0c1ff]" : "border-transparent"} pb-1 font-['Geist'] text-[14px] leading-[1.4] tracking-[0.05em]`}
                        href="/categories"
                    >
                        Categories
                    </Link>

                    <div className="flex flex-col gap-3 mt-2 border-t border-[#464554]/30 pt-4">
                        {isLoggedIn ? (
                            <Link
                                href="/profile"
                                className="w-full px-6 py-3 rounded-xl bg-[#1b1b23] border border-[#464554]/30 text-[#c0c1ff] font-bold font-['Geist'] text-[14px] leading-[1.4] tracking-[0.05em] flex items-center gap-3"
                            >
                                <div className="w-6 h-6 rounded-full overflow-hidden border border-[#464554]/60">
                                    <img
                                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                        alt="Avatar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                My Profile
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="w-full px-6 py-3 rounded-xl text-[#c0c1ff] font-bold hover:bg-[#1b1b23] transition-all font-['Geist'] text-[14px] leading-[1.4] tracking-[0.05em]"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="w-full px-6 py-3 rounded-xl bg-gradient-to-br from-[#4648d4] to-[#2170e4] text-white font-bold hover:opacity-90 shadow-sm transition-all font-['Geist'] text-[14px] leading-[1.4] tracking-[0.05em]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    )
}

