import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export default function Portfolio() {
  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-5 md:px-margin-edge py-stack-lg">
      <PortfolioHeader />
      <PortfolioGrid />
      <PortfolioCTA />
    </main>
  );
}
