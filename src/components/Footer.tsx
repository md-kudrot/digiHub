import React from "react"
import Link from "next/link"
import { PaperPlane, Person, Persons } from "@gravity-ui/icons"

export default function Footer() {
    return (
        <footer className="bg-[#0d0d15] border-t border-[#464554]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px] px-[32px] py-12 max-w-[1280px] mx-auto">
                <div className="flex flex-col gap-4">
                    <Link
                        className="font-['Geist'] text-[24px] font-semibold leading-[1.3] font-bold text-[#c0c1ff]"
                        href="#"
                    >
                        DigiHub.
                    </Link>
                    <p className="text-[#c7c4d7] text-sm">
                        Providing high-quality digital assets and premium subscriptions with trust and speed since 2021.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <Link
                            className="w-10 h-10 rounded-full bg-[#292932] flex items-center justify-center hover:bg-[#c0c1ff] hover:text-white transition-all"
                            href="#"
                        >
                            <Person className="w-5 h-5" />
                        </Link>
                        <Link
                            className="w-10 h-10 rounded-full bg-[#292932] flex items-center justify-center hover:bg-[#c0c1ff] hover:text-white transition-all"
                            href="#"
                        >
                            <Persons className="w-5 h-5" />
                        </Link>
                        <Link
                            className="w-10 h-10 rounded-full bg-[#292932] flex items-center justify-center hover:bg-[#c0c1ff] hover:text-white transition-all"
                            href="#"
                        >
                            <PaperPlane className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-[#e4e1ed] mb-6">Quick Links</h4>
                    <ul className="space-y-3">
                        <li>
                            <Link className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-all text-sm" href="#">
                                Marketplace
                            </Link>
                        </li>
                        <li>
                            <Link className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-all text-sm" href="#">
                                Seller Portal
                            </Link>
                        </li>
                        <li>
                            <Link className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-all text-sm" href="#">
                                Reseller Pricing
                            </Link>
                        </li>
                        <li>
                            <Link className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-all text-sm" href="#">
                                Live Support
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-[#e4e1ed] mb-6">Categories</h4>
                    <ul className="space-y-3">
                        <li>
                            <Link className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-all text-sm" href="#">
                                Gmail Accounts
                            </Link>
                        </li>
                        <li>
                            <Link className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-all text-sm" href="#">
                                Streaming Services
                            </Link>
                        </li>
                        <li>
                            <Link className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-all text-sm" href="#">
                                VPN & Security
                            </Link>
                        </li>
                        <li>
                            <Link className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-all text-sm" href="#">
                                Graphics & Video
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-[#e4e1ed] mb-6">Legal & Support</h4>
                    <ul className="space-y-3">
                        <li>
                            <Link className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-all text-sm" href="#">
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-all text-sm" href="#">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-all text-sm" href="#">
                                Warranty Policy
                            </Link>
                        </li>
                        <li>
                            <Link className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-all text-sm" href="#">
                                Seller FAQ
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="px-[32px] py-8 border-t border-[#464554]/30 text-center text-[12px] leading-[1.4] text-[#c7c4d7]">
                © 2024 Digital Marketplace. All rights reserved. Professional Digital Asset Platform.
            </div>
        </footer>
    )
}

