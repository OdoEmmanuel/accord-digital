import WorksHero from "@/components/common/heros/WorksHero";
import ProcessSteps from "@/components/howitworkspage/ProcessSteps";
import WhyProcessStandsOut from "@/components/howitworkspage/WhyProcessStandsOut";
import WhatYouNeed from "@/components/howitworkspage/WhatYouNeed";
import ReadyToBegin from "@/components/howitworkspage/ReadyToBegin";

export default function HowItWorks() {
  return (
    <main>
      <WorksHero />
      <ProcessSteps />
      <WhyProcessStandsOut />
      <WhatYouNeed />
      <ReadyToBegin />
    </main>
  );
}
