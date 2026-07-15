"use client"
import React, { useState } from "react"
import { usePathname } from "next/navigation"
import Sidebar from "@/components/dashboard/Sidebar"
import Navbar from "@/components/dashboard/Navbar"
import MobileMenu from "@/components/dashboard/MobileMenu"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const iconStyle = {
        fontFamily: '"Material Symbols Outlined"',
        fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
    }

    const menuItems = [
        { id: "add", label: "Add Product", icon: "add", href: "/dashboard/add-products" },
        { id: "manage", label: "Manage Products", icon: "inventory", href: "/dashboard/manage-products" },
        { id: "Profile", label: "Profile", icon: "person", href: "/dashboard/profile" }
    ]

    return (
        <div className="bg-[#13131b] text-[#e4e1ed] min-h-screen w-full flex flex-col md:flex-row relative overflow-x-hidden">
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />

            {/* Desktop Sidebar Component */}
            <Sidebar menuItems={menuItems} pathname={pathname} iconStyle={iconStyle} />

            {/* Main Container */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top Navbar Component */}
                <Navbar
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    iconStyle={iconStyle}
                />

                {/* Mobile Dropdown Navigation Component */}
                {isMobileMenuOpen && (
                    <MobileMenu
                        menuItems={menuItems}
                        pathname={pathname}
                        setIsMobileMenuOpen={setIsMobileMenuOpen}
                        iconStyle={iconStyle}
                    />
                )}

                {/* Dynamic Inner Content Pages */}
                <main className="flex-1 pt-20 md:pt-0">{children}</main>
            </div>
        </div>
    )
}
