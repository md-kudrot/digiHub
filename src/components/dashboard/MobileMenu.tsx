"use client"
import { authClient } from "@/lib/auth-client"
import Link from "next/link"
import { redirect } from "next/navigation"

interface MenuItem {
    id: string
    label: string
    icon: string
    href: string
}

interface MobileMenuProps {
    menuItems: MenuItem[]
    pathname: string
    setIsMobileMenuOpen: (open: boolean) => void
    iconStyle: object
}

export default function MobileMenu({ menuItems, pathname, setIsMobileMenuOpen, iconStyle }: MobileMenuProps) {
    const { data: session, refetch } = authClient.useSession()

    // console.log(session?.user)
    const user = session?.user
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
        <div className="md:hidden fixed top-20 left-0 w-full bg-[#13131b] border-b border-[#464554]/30 px-6 py-4 flex flex-col gap-3 z-40">
            {menuItems.map((item) => {
                const isActive = pathname === item.href
                return (
                    <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold font-['Geist'] text-[14px] tracking-[0.05em] transition-all ${
                            isActive ? "bg-[#1b1b23] text-[#c0c1ff]" : "text-[#8c8a9e]"
                        }`}
                    >
                        <span className="material-symbols-outlined text-[18px]" style={iconStyle}>
                            {item.icon}
                        </span>
                        {item.label}
                    </Link>
                )
            })}
            <button
                className="flex items-center cursor-pointer gap-3 px-4 py-3 text-rose-400 font-bold font-['Geist'] text-[14px] tracking-[0.05em] border-t border-[#464554]/20 pt-4 mt-1"
                onClick={handleSignOut}
            >
                <span className="material-symbols-outlined text-[18px]" style={iconStyle}>
                    logout
                </span>
                Logout
            </button>
        </div>
    )
}
