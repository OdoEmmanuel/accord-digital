import AboutHero from "@/components/common/heros/AboutHero";
import LeadershipSection from "@/components/aboutpage/LeadershipSection";
import MissionVisionSection from "@/components/aboutpage/MissionVisionSection";
import OurStorySection from "@/components/aboutpage/OurStorySection";
import ValuesSection from "@/components/aboutpage/ValuesSection";
import MarketImpactSection from "@/components/aboutpage/MarketImpactSection";
import RegulatoryComplianceSection from "@/components/aboutpage/RegulatoryComplianceSection";

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
