import TermsHero from "@/components/common/heros/TermsHero";
import TermsOfServiceContent from "@/components/termspage/TermsOfServiceContent";
import PrivacyCTA from "@/components/privacypage/PrivacyCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review Accord's terms of service to understand the rules and regulations governing the use of our digital financial services platform.",
};

export default function TermsOfService() {
  return (
    <main>
      <TermsHero />
      <TermsOfServiceContent />
      <PrivacyCTA />
    </main>
  );
}
