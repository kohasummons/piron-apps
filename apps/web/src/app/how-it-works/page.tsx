import Header from "@/components/marketing/Header";
import { HowItWorksHero } from "@/components/marketing/how-it-works-hero";
import { HowItWorksFlow } from "@/components/marketing/how-it-works-flow";
import { HowItWorksFeatures } from "@/components/marketing/how-it-works-features";
import { HowItWorksRetailInstitutional } from "@/components/marketing/how-it-works-retail-institutional";
import { HowItWorksRisk } from "@/components/marketing/how-it-works-risk";
import { HowItWorksJourney } from "@/components/marketing/how-it-works-journey";
import { Footer } from "@/components/marketing/footer";

export default function HowItWorksPage() {
  return (
    <div className="bg-black min-h-screen w-full">
      <Header />
      <div
        className="relative w-full"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0),
            linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.05) 49%, rgba(255,255,255,0.05) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.05) 49%, rgba(255,255,255,0.05) 51%, transparent 52%)
          `,
          backgroundSize: "20px 20px, 40px 40px, 40px 40px",
        }}
      >
        <HowItWorksHero />
      </div>

      <HowItWorksFlow />
      <HowItWorksFeatures />
      <HowItWorksRetailInstitutional />
      <HowItWorksRisk />
      <HowItWorksJourney />
      <Footer />
    </div>
  );
}
