import CollectiveHeader from "@/components/collective/CollectiveHeader";
import RoleSpotlight from "@/components/collective/RoleSpotlight";
import RosterGrid from "@/components/collective/RosterGrid";
import BenefitsCTA from "@/components/collective/BenefitsCTA";

export default function Collective() {
  return (
    <main className="flex-grow w-full overflow-x-hidden">
      <CollectiveHeader />
      <RoleSpotlight />
      <RosterGrid />
      <BenefitsCTA />
    </main>
  );
}
