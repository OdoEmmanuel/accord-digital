import HeroSection from "@/components/common/heros/HeroSection";
import StatsSection from "@/components/homepage/StatsSection";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import CTASection from "@/components/homepage/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
