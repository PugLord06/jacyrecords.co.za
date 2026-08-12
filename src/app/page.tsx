import HeroSection from "@/components/home/HeroSection";
import BentoGrid from "@/components/home/BentoGrid";
import FounderSection from "@/components/home/FounderSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BentoGrid />
      <FounderSection />
      <CTASection />
    </main>
  );
}
