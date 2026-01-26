import ServicesHero from "@/components/common/heros/ServicesHero";
import ServiceSection from "@/components/servicepage/ServiceSection";
import WhyChooseSection from "@/components/servicepage/WhyChooseSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Accord's comprehensive financial services including digital banking, asset management, SME banking, investment banking, and financial advisory solutions.",
};

export default function Services() {
  return (
    <main>
      <ServicesHero />
      <ServiceSection />
      <WhyChooseSection />
    </main>
  );
}
