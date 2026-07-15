import FaqSection from "@/components/FaqSection"
import FeaturedProducts from "@/components/FeaturedProducts"
import FeaturesSection from "@/components/FeaturesSection"
import HeroSection from "@/components/HeroSection"
import PricingSection from "@/components/PricingSection"
import StatsSection from "@/components/StatsSection"
import TestimonialsSection from "@/components/TestimonialsSection"

export default function Home() {
    return (
        <main className="mt-20">
            <HeroSection />
            <FeaturedProducts />
            <FeaturesSection />
            <StatsSection />
            <TestimonialsSection />
            <PricingSection />
            <FaqSection />
        </main>
    )
}

