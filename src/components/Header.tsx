import React from "react"
import Link from "next/link"

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-[#13131b] backdrop-blur-md border-b border-[#464554]/30">
            <div className="flex items-center justify-between px-[32px] h-20 max-w-[1280px] mx-auto">
                <div className="flex items-center gap-8">
                    <Link
                        className="font-['Geist'] text-[28px] leading-[1.1] tracking-[-0.02em] font-bold text-[#c0c1ff]"
                        href="#"
                    >
                        DigiHub.
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link
                            className="text-[#c0c1ff] font-bold border-b-2 border-[#c0c1ff] pb-1 font-['Geist'] text-[14px] leading-[1.4] tracking-[0.05em]"
                            href="#"
                        >
                            Home
                        </Link>
                        <Link
                            className="text-[#c7c4d7] font-medium hover:text-[#c0c1ff] transition-colors duration-200 font-['Geist'] text-[14px] leading-[1.4] tracking-[0.05em]"
                            href="#"
                        >
                            Products
                        </Link>
                        <Link
                            className="text-[#c7c4d7] font-medium hover:text-[#c0c1ff] transition-colors duration-200 font-['Geist'] text-[14px] leading-[1.4] tracking-[0.05em]"
                            href="#"
                        >
                            Categories
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <button className="px-6 py-2 rounded-xl text-[#c0c1ff] font-bold hover:bg-[#1b1b23] transition-all font-['Geist'] text-[14px] leading-[1.4] tracking-[0.05em]">
                        Login
                    </button>
                    <button className="px-6 py-2 rounded-xl bg-gradient-to-br from-[#4648d4] to-[#2170e4] text-white font-bold hover:opacity-90 shadow-sm transition-all font-['Geist'] text-[14px] leading-[1.4] tracking-[0.05em]">
                        Register
                    </button>
                </div>
            </div>
        </header>
    )
}

