import React from "react"
import { ChevronDown } from "@gravity-ui/icons"

export default function FaqSection() {
    const faqs = [
        {
            q: "How long does it take to receive my account?",
            a: "Our system is fully automated. As soon as your payment is confirmed, the account details are sent to your registered email and appear in your user dashboard instantly (usually under 30 seconds)."
        },
        {
            q: "What if the account stops working?",
            a: "Every product comes with a specific warranty period. If your account stops working during this time, simply open a ticket or message us on WhatsApp, and we will provide a replacement immediately."
        },
        {
            q: "Can I change the account password?",
            a: 'For "Full Access" accounts, you are encouraged to change the password and add your own recovery details. For "Shared" accounts, changing the password is prohibited as it will lock other users out and void your warranty.'
        },
        {
            q: "Which payment methods do you accept?",
            a: "We currently accept BKash, Nagad, Rocket, and Upay. For international customers, we also accept USDT (Binance Pay) and Litecoin."
        },
        {
            q: "Do you offer refunds?",
            a: "Refunds are only issued if we are unable to fulfill your order or provide a working replacement. Digital goods are generally non-refundable once the credentials have been viewed."
        }
    ]

    return (
        <section className="py-20 px-[32px] max-w-[1280px] mx-auto">
            <div className="max-w-3xl mx-auto">
                <h2 className="font-['Geist'] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#e4e1ed] text-center mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <details
                            key={idx}
                            className="group bg-[#1f1f27] p-6 rounded-2xl border border-[#464554]/30 hover:border-[#c0c1ff] transition-colors cursor-pointer"
                        >
                            <summary className="flex justify-between items-center font-bold text-[#e4e1ed] list-none">
                                {faq.q}
                                <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="mt-4 text-[#c7c4d7]">{faq.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}

