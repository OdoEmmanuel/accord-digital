import BusinessHero from "@/components/common/heros/BusinessHero";
import BusinessSolutionsCards from "@/components/businesspage/BusinessSolutionsCards";
import WhySMEsChooseUs from "@/components/businesspage/WhySMEsChooseUs";
import IndustriesWeServe from "@/components/businesspage/IndustriesWeServe";
import BusinessStats from "@/components/businesspage/BusinessStats";
import BusinessCTA from "@/components/businesspage/BusinessCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Solutions",
  description:
    "Tailored financial solutions for SMEs and enterprises. Access business banking, payment processing, working capital, and industry-specific solutions to grow your business.",
};

export default function BusinessSolutions() {
  return (
    <main>
      <BusinessHero />
      <BusinessSolutionsCards />
      <WhySMEsChooseUs />
      <IndustriesWeServe />
      <BusinessStats />
      <BusinessCTA />
    </main>
  );
}
