import HeroSection from "@/components/common/heros/HeroSection";
import StatsSection from "@/components/homepage/StatsSection";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import CTASection from "@/components/homepage/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Empowering individuals, businesses, and institutions across Africa with comprehensive digital financial solutions. Access banking, payments, and investment services.",
};

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
