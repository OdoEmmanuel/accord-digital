import AboutHero from "@/components/common/heros/AboutHero";
import LeadershipSection from "@/components/aboutpage/LeadershipSection";
import MissionVisionSection from "@/components/aboutpage/MissionVisionSection";
import OurStorySection from "@/components/aboutpage/OurStorySection";
import ValuesSection from "@/components/aboutpage/ValuesSection";
import MarketImpactSection from "@/components/aboutpage/MarketImpactSection";
import RegulatoryComplianceSection from "@/components/aboutpage/RegulatoryComplianceSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Accord's mission to transform financial services across Africa. Meet our leadership team and discover our values, story, and commitment to regulatory compliance.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <LeadershipSection />
      <MissionVisionSection />
      <OurStorySection />
      <ValuesSection />
      <MarketImpactSection />
      <RegulatoryComplianceSection />
    </main>
  );
}
