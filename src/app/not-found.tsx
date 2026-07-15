"use client"
import Link from "next/link"
import { ArrowLeft, House } from "@gravity-ui/icons"

export default function NotFound() {
    return (
        <div className="bg-[#13131b] font-['Inter'] text-[#e4e1ed] min-h-screen w-full flex items-center justify-center p-6 relative overflow-hidden">
            {/* Decorative Blur Background Elements */}
            <div className="absolute top-[-20%] left-[-10%] w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[#4648d4]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[#2170e4]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

            <div className="text-center max-w-[500px] z-10 flex flex-col items-center gap-4">
                {/* Large 404 Text with Gradient */}
                <h1 className="text-[100px] md:text-[140px] font-extrabold leading-none tracking-tighter bg-gradient-to-r from-[#c0c1ff] via-white to-[#4648d4] bg-clip-text text-transparent font-['Geist'] select-none">
                    404
                </h1>

                {/* Error Message */}
                <h2 className="text-[22px] md:text-[26px] font-bold text-white font-['Geist'] tracking-tight">
                    Page Not Found
                </h2>

                <p className="text-[#8c8a9e] text-[14px] md:text-[15px] leading-relaxed px-4">
                    The page you are looking for might have been removed, had its name changed, or is temporarily
                    unavailable. Let's get you back on track.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full mt-4 justify-center">
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#9aa3ff] to-[#a3baff] text-slate-900 font-bold rounded-xl text-[14px] md:text-[15px] transition-all hover:opacity-90 active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                        <House className="w-[18px] h-[18px]" />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto px-6 py-3 bg-[#1b1b23] border border-[#464554]/40 hover:bg-[#23232d] text-white font-semibold rounded-xl text-[14px] md:text-[15px] transition-all active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-[18px] h-[18px]" />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}
