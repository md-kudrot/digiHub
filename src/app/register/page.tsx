"use client"
import { useState, FormEvent, ChangeEvent } from "react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { authClient } from "@/lib/auth-client"
import { Envelope, Eye, EyeSlash, Lock, LogoGooglePlay, Person } from "@gravity-ui/icons"

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    type RegisterFormData = {
        username: string
        email: string
        password: string
        confirmPassword: string
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)

        const user = Object.fromEntries(form.entries()) as RegisterFormData

        if (user.password !== user.confirmPassword) {
            alert("Passwords don't match!")
            return
        }

        console.log("Registration submitted:", user)

        const { data, error } = await authClient.signUp.email({
            name: user.username, // username -> name
            email: user.email,
            password: user.password
        })

        if (data) {
            redirect("/")
        }

        if (error) {
            alert("Signup error: " + error.message)
        }
    }

    return (
        <div className="bg-[#13131b] py-30 font-['Inter'] text-[#e4e1ed] w-full flex items-center justify-center p-4 relative overflow-x-hidden">
            {/* Decorative Blur Backgrounds */}
            <div className="absolute top-[-10%] right-[-10%] w-[300px]  bg-[#4648d4]/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[300px]   bg-[#2170e4]/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

            <div className="w-full max-w-[440px] bg-[#1b1b23] border border-[#464554]/20 p-6 md:p-8 rounded-2xl shadow-2xl relative z-10 mx-auto">
                {/* Header */}
                <div className="text-center mb-5">
                    <h1 className="text-[26px] md:text-[30px] font-bold text-white font-['Geist'] tracking-tight mb-1">
                        Create Account
                    </h1>
                    <p className="text-[#8c8a9e] text-[13px] md:text-[14px]">
                        Join us to get instant access to premium assets.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Username Field */}
                    <div className="space-y-1">
                        <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                            Full Name
                        </label>
                        <div className="relative flex items-center">
                            <Person className="absolute left-3.5 text-[#8c8a9e] w-[18px] h-[18px]" />
                            <input
                                type="text"
                                name="username"
                                required
                                placeholder="John Doe"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="w-full pl-11 pr-4 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white placeholder-[#464554] text-[14px] md:text-[15px] transition-all"
                            />
                        </div>
                    </div>

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
                        <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                            Password
                        </label>
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

                    {/* Confirm Password Field */}
                    <div className="space-y-1">
                        <label className="text-[12px] font-semibold text-[#c7c4d7] uppercase tracking-wider font-['Geist'] block">
                            Confirm Password
                        </label>
                        <div className="relative flex items-center">
                            <Lock className="absolute left-3.5 text-[#8c8a9e] w-[18px] h-[18px]" />
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                required
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className="w-full pl-11 pr-11 py-2.5 bg-[#13131b] border border-[#464554]/40 rounded-xl focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] text-white placeholder-[#464554] text-[14px] md:text-[15px] transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3.5 text-[#8c8a9e] hover:text-white flex items-center justify-center focus:outline-none select-none"
                            >
                                {showConfirmPassword ? (
                                    <EyeSlash className="w-[18px] h-[18px]" />
                                ) : (
                                    <Eye className="w-[18px] h-[18px]" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Terms Agreement */}
                    <p className="text-[12px] text-[#8c8a9e] pt-0.5 leading-normal">
                        By registering, you agree to our{" "}
                        <Link href="/terms" className="text-[#c0c1ff] hover:underline">
                            Terms
                        </Link>{" "}
                        &{" "}
                        <Link href="/privacy" className="text-[#c0c1ff] hover:underline">
                            Privacy
                        </Link>
                        .
                    </p>

                    {/* Action Button */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-1 bg-gradient-to-r from-[#9aa3ff] to-[#a3baff] text-slate-900 font-bold rounded-xl text-[14px] md:text-[15px] transition-all hover:opacity-90 active:scale-[0.99]"
                    >
                        Create Account
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
                    Already have an account?{" "}
                    <Link href="/login" className="text-[#c0c1ff] font-semibold hover:underline">
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    )
}
