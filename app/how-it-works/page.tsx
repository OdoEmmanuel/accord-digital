import WorksHero from "@/components/common/heros/WorksHero";
import ProcessSteps from "@/components/howitworkspage/ProcessSteps";
import WhyProcessStandsOut from "@/components/howitworkspage/WhyProcessStandsOut";
import WhatYouNeed from "@/components/howitworkspage/WhatYouNeed";
import ReadyToBegin from "@/components/howitworkspage/ReadyToBegin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how to get started with Accord's digital financial services. Simple steps to open an account, verify your identity, and access our comprehensive financial solutions.",
};

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
