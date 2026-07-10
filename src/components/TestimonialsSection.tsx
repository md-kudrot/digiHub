import React from "react"
import { StarFill } from "@gravity-ui/icons"

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Tanvir Ahmed",
            role: "Freelancer",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyRC1jcxOE9MjGA0gpRCeCC4oDPjrVI6vplh1X61RvCQcab9iVbAZoggvVmfUh7oR7S_53j8X3Nvt6cVIplKAK5iFs9PvSkyEZBbLCrMFbI_TcduIRKU0y_yK14TjZbBiIxTaFUME9G6DHTiFXx4yPEAT5EMwFZdrABH5BfZJYnDtfCibpW_mZPyvELeS4zP36MykhpdOEg5mCaQ_wNJOCnE5C_5AtoGzS56sdmFbSFBEc63Xcfn0pwQ",
            text: '"The delivery was literally instant. I paid via BKash and had my Canva Team account details in my inbox before I could even refresh the page!"'
        },
        {
            name: "Marium Sultana",
            role: "Agency Owner",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFzh0Ih0WIWBriqlS79qWLqwCSRdmE8L19MTQP4X_LaTrKL6K0unsuEVR0RSGvpHrh7Ix5vdg96pFjYe5h-5d3SGfX0IaZ1OZXnNswUDMk1ZHsZ6PX6TlFlqSfxMyNXjQW-vrVWm7DEHzUkIwToEIm4Vwon4jhle9pBRLT40D1IwRuI9Rp1DYMNvbpf3-uRUkIWKmgBeGoDLeS-4VggX4ByM6JyUzmO8DfICutkyZnv0-qi0WSr63cgg",
            text: '"Customer service is top-notch. I had a small issue with my Netflix login, and they fixed it via WhatsApp in under 5 minutes. Best marketplace in BD."'
        },
        {
            name: "Rakibul Islam",
            role: "Digital Marketer",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuASlzH0nH2TUU4CczjZKDUF3Y923honjXrLUsPcbsh8Vxi5CjoGvq5I4xgjNkJmNBbA1bYgBxwBDUO0yutyeLA9W14VT8EYlq_f7TcSd6zKm0luhZQeS-qK6ucbZU-QSwCBWmREOrLHhUNyNnvZ0lhxSRHQyU8lujUxjmICa5fa0vjmnbAhS043tRj5ZrZApddany3ZiMU4D5u3aOFf0SZDBMpHOOEp_xbZOW5K-zlYXXzKn0cb5rAX_g",
            text: '"Nexus is my go-to for old Gmail accounts. The quality is consistent, and the bulk pricing is very fair for resellers like me."'
        }
    ]

    return (
        <section className="py-20 px-[32px] max-w-[1280px] mx-auto">
            <h2 className="font-['Geist'] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#e4e1ed] text-center mb-16">
                Loved by Thousands
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, idx) => (
                    <div
                        key={idx}
                        className="p-8 bg-[#1f1f27] rounded-3xl shadow-[0_4px_12px_rgba(15,23,42,0.05)] border border-[#464554]/10"
                    >
                        <div className="flex gap-1 text-yellow-500 mb-4">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <StarFill key={s} className="w-5 h-5" />
                            ))}
                        </div>
                        <p className="text-[#c7c4d7] italic mb-8 font-['Inter'] text-[18px] leading-[1.6]">{t.text}</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img className="w-full h-full object-cover" alt={t.name} src={t.img} />
                            </div>
                            <div>
                                <div className="font-bold text-[#e4e1ed]">{t.name}</div>
                                <div className="text-[12px] leading-[1.4] text-[#c7c4d7]">{t.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

