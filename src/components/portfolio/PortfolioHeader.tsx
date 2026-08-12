export default function PortfolioHeader() {
  return (
    <>
      <header className="mb-stack-lg text-center md:text-left pt-12">
        <h1 className="font-display-lg text-display-lg text-white uppercase mb-4 tracking-tighter text-3d">
          THE VAULT
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-4 border-primary-container pl-4 bg-deep-void/50 p-4 rounded-r-lg">
          A curated collection of sonic landscapes, visual narratives, and
          industry-defining collaborations crafted in the shadows of Jacy
          Records.
        </p>
      </header>

      {/* Filter Categories (Chips) */}
      <div className="flex flex-wrap gap-4 mb-stack-lg justify-center md:justify-start">
        <button className="px-6 py-2 border border-primary text-primary font-label-bold text-label-bold bg-surface-container hover:bg-primary-container hover:text-white transition-all duration-300 rounded-sm">
          ALL PROJECTS
        </button>
        <button className="px-6 py-2 border border-outline-variant text-on-surface-variant font-label-bold text-label-bold hover:border-primary hover:text-primary transition-all duration-300 rounded-sm bg-surface-container/50">
          MUSIC PRODUCTION
        </button>
        <button className="px-6 py-2 border border-outline-variant text-on-surface-variant font-label-bold text-label-bold hover:border-primary hover:text-primary transition-all duration-300 rounded-sm bg-surface-container/50">
          COMMERCIALS
        </button>
        <button className="px-6 py-2 border border-outline-variant text-on-surface-variant font-label-bold text-label-bold hover:border-primary hover:text-primary transition-all duration-300 rounded-sm bg-surface-container/50">
          ARTIST SPOTLIGHTS
        </button>
      </div>
    </>
  );
}
