import PrivacyHero from "@/components/common/heros/PrivacyHero";
import PrivacyPolicyContent from "@/components/privacypage/PrivacyPolicyContent";
import PrivacyCTA from "@/components/privacypage/PrivacyCTA";

export default function PrivacyPolicy() {
  return (
    <main>
      <PrivacyHero />
      <PrivacyPolicyContent />
      <PrivacyCTA />
    </main>
  );
}
