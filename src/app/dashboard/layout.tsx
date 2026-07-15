"use client"
import React, { useState } from "react"
import { usePathname } from "next/navigation"
import Sidebar from "@/components/dashboard/Sidebar"
import Navbar from "@/components/dashboard/Navbar"
import MobileMenu from "@/components/dashboard/MobileMenu"
import { Boxes3, Person, Plus } from "@gravity-ui/icons"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const menuItems = [
        { id: "add", label: "Add Product", icon: Plus, href: "/dashboard/add-products" },
        { id: "manage", label: "Manage Products", icon: Boxes3, href: "/dashboard/manage-products" },
        { id: "profile", label: "Profile", icon: Person, href: "/dashboard/profile" }
    ]

    return (
        <div className="bg-[#13131b] text-[#e4e1ed] min-h-screen w-full flex flex-col md:flex-row relative overflow-x-hidden">
            {/* Desktop Sidebar Component */}
            <Sidebar menuItems={menuItems} pathname={pathname} />

            {/* Main Container */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top Navbar Component */}
                <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

                {/* Mobile Dropdown Navigation Component */}
                {isMobileMenuOpen && (
                    <MobileMenu menuItems={menuItems} pathname={pathname} setIsMobileMenuOpen={setIsMobileMenuOpen} />
                )}

                {/* Dynamic Inner Content Pages */}
                <main className="flex-1 pt-20 md:pt-0">{children}</main>
            </div>
        </div>
    )
}
