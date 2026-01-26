import PrivacyHero from "@/components/common/heros/PrivacyHero";
import PrivacyPolicyContent from "@/components/privacypage/PrivacyPolicyContent";
import PrivacyCTA from "@/components/privacypage/PrivacyCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Accord's privacy policy to understand how we collect, use, and protect your personal information. Your privacy and data security are our top priorities.",
};

export default function PrivacyPolicy() {
  return (
    <main>
      <PrivacyHero />
      <PrivacyPolicyContent />
      <PrivacyCTA />
    </main>
  );
}
