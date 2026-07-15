"use client"
import { useState, FormEvent, ChangeEvent } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { authClient } from "@/lib/auth-client"
import { Envelope, Eye, EyeSlash, Lock, LogoGooglePlay } from "@gravity-ui/icons"

export default function LoginPage() {
    const [formData, setFormData] = useState({ email: "", password: "" })
    const [rememberMe, setRememberMe] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const email = formData.get("email")
        const password = formData.get("password")

        if (typeof email !== "string" || typeof password !== "string") {
            alert("Invalid form data")
            return
        }

        const { data, error } = await authClient.signIn.email({
            email,
            password
        })

        if (error) {
            alert(error.message)
            return
        }

        alert("Logged in successfully!")
        router.push("/")
    }

    return (
        <div className="bg-[#13131b] font-['Inter'] text-[#e4e1ed] min-h-screen w-full flex items-center justify-center p-4 relative overflow-x-hidden">
            {/* Decorative Blur Backgrounds */}
            <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#4648d4]/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#2170e4]/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

            <div className="w-full max-w-[420px] bg-[#1b1b23] border border-[#464554]/20 p-6 md:p-8 rounded-2xl shadow-2xl relative z-10 mx-auto">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-[26px] md:text-[30px] font-bold text-white font-['Geist'] tracking-tight mb-1">
                        Welcome Back
                    </h1>
                    <p className="text-[#8c8a9e] text-[13px] md:text-[14px]">Log in to manage your premium assets.</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Field */}
                    <div className="space-y-1">
                        <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                            Email Address
                        </label>
                        <div className="relative flex items-center">
                            <Envelope className="absolute left-3.5 text-[#8c8a9e] w-[18px] h-[18px]" />
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full pl-11 pr-4 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white placeholder-[#464554] text-[14px] md:text-[15px] transition-all"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-1">
                        <div className="flex justify-between items-center">
                            <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                                Password
                            </label>
                            <Link href="/forgot-password" className="text-[12px] text-[#c0c1ff] hover:underline">
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="relative flex items-center">
                            <Lock className="absolute left-3.5 text-[#8c8a9e] w-[18px] h-[18px]" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full pl-11 pr-11 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white placeholder-[#464554] text-[14px] md:text-[15px] transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3.5 text-[#8c8a9e] hover:text-white flex items-center justify-center focus:outline-none select-none"
                            >
                                {showPassword ? (
                                    <EyeSlash className="w-[18px] h-[18px]" />
                                ) : (
                                    <Eye className="w-[18px] h-[18px]" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center gap-2 pt-0.5">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="w-3.5 h-3.5 rounded bg-[#13131b] border-[#464554]/40 text-[#4648d4] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                        />
                        <label htmlFor="rememberMe" className="text-[13px] text-[#8c8a9e] select-none cursor-pointer">
                            Remember this device
                        </label>
                    </div>

                    {/* Action Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-[#9aa3ff] to-[#a3baff] text-slate-900 font-bold rounded-xl text-[14px] md:text-[15px] transition-all hover:opacity-90 active:scale-[0.99]"
                    >
                        Sign In
                    </button>
                </form>

                {/* Divider / Google Button */}
                <div className="relative my-4 flex py-0.5 items-center">
                    <div className="flex-grow border-t border-[#464554]/20"></div>
                    <span className="flex-shrink mx-3 text-[#8c8a9e] text-[12px] uppercase tracking-wider font-['Geist'] font-medium">
                        Or
                    </span>
                    <div className="flex-grow border-t border-[#464554]/20"></div>
                </div>

                <button
                    type="button"
                    onClick={() => console.log("Google login clicked")}
                    className="w-full flex items-center justify-center gap-2.5 py-2.5 bg-[#13131b] border border-[#464554]/40 hover:bg-[#1a1a24] text-white font-semibold rounded-xl text-[14px] md:text-[15px] transition-all active:scale-[0.99]"
                >
                    <LogoGooglePlay className="w-4 h-4 md:w-5 md:h-5" />
                    Continue with Google
                </button>

                {/* Footer Link */}
                <div className="text-center mt-5 pt-5 border-t border-[#464554]/20 text-[13px] md:text-[14px] text-[#8c8a9e]">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-[#c0c1ff] font-semibold hover:underline">
                        Create an account
                    </Link>
                </div>
            </div>
        </div>
    )
}
