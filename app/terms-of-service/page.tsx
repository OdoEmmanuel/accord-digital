import TermsHero from "@/components/common/heros/TermsHero";
import TermsOfServiceContent from "@/components/termspage/TermsOfServiceContent";
import PrivacyCTA from "@/components/privacypage/PrivacyCTA";

export default function TermsOfService() {
  return (
    <main>
      <TermsHero />
      <TermsOfServiceContent />
      <PrivacyCTA />
    </main>
  );
}
