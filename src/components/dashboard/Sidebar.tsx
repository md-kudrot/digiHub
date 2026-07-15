"use client"
import { authClient } from "@/lib/auth-client"
import { ArrowRightFromSquare } from "@gravity-ui/icons"
import Link from "next/link"
import { redirect } from "next/navigation"
import { ComponentType, SVGProps } from "react"

interface MenuItem {
    id: string
    label: string
    icon: ComponentType<SVGProps<SVGSVGElement>>
    href: string
}

interface SidebarProps {
    menuItems: MenuItem[]
    pathname: string
}

export default function Sidebar({ menuItems, pathname }: SidebarProps) {
    const { refetch } = authClient.useSession()
    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    refetch()
                    redirect("/login")
                }
            }
        })
    }
    return (
        <aside className="hidden md:flex flex-col w-64  border-r border-[#464554]/20 p-6 shrink-0 z-20 sticky top-0 h-full">
            <div className="mb-8">
                <Link href="/" className="font-['Geist'] text-[32px] tracking-[-0.02em] font-bold text-[#c0c1ff]">
                    Nexus.
                </Link>
                <p className="text-[11px] text-[#8c8a9e] tracking-widest uppercase font-semibold mt-1 font-['Geist']">
                    Dashboard
                </p>
            </div>

            {/* Sidebar Navigation */}
            <nav className="flex-1 space-y-1.5">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href
                    const Icon = item.icon
                    return (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-[14px] font-['Geist'] transition-all ${
                                isActive
                                    ? "bg-gradient-to-r from-[#4648d4]/20 to-[#2170e4]/10 border border-[#c0c1ff]/30 text-white"
                                    : "text-[#8c8a9e] hover:bg-[#13131b] hover:text-white"
                            }`}
                        >
                            <Icon className="w-5 h-5" />
                            {item.label}
                        </Link>
                    )
                })}
            </nav>

            {/* Sidebar Footer / Logout */}
            <div className="pt-4 border-t border-[#464554]/20">
                <button
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-rose-400 font-medium text-[14px] font-['Geist'] hover:bg-rose-500/10 transition-all"
                >
                    <ArrowRightFromSquare className="w-5 h-5" />
                    Logout
                </button>
            </div>
        </aside>
    )
}
