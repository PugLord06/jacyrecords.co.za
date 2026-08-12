import ServiceHero from "@/components/services/ServiceHero";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceCTA from "@/components/services/ServiceCTA";

export default function Services() {
  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-5 md:px-margin-edge pt-stack-lg pb-stack-lg flex flex-col gap-stack-lg">
      <ServiceHero />
      <ServiceGrid />
      <ServiceCTA />
    </main>
  );
}
