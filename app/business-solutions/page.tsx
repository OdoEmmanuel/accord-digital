"use client";

import BusinessHero from "@/components/common/heros/BusinessHero";
import BusinessSolutionsCards from "@/components/businesspage/BusinessSolutionsCards";
import WhySMEsChooseUs from "@/components/businesspage/WhySMEsChooseUs";
import IndustriesWeServe from "@/components/businesspage/IndustriesWeServe";
import BusinessStats from "@/components/businesspage/BusinessStats";
import BusinessCTA from "@/components/businesspage/BusinessCTA";

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
