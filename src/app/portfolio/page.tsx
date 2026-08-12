import Link from "next/link";

export default function Portfolio() {
  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-5 md:px-margin-edge py-stack-lg">
      {/* Header Section */}
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

      {/* Brutalist Staggered Grid Portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[minmax(300px,auto)] md:auto-rows-[450px]">
        {/* Large Featured Project */}
        <article className="portfolio-card md:col-span-7 md:row-span-1 bg-surface-container border-2 border-outline-variant relative overflow-hidden group cursor-pointer hover:border-primary-container hover:drop-shadow-[0_0_15px_rgba(123,44,191,0.6)] transition-all duration-500 rounded-lg">
          <img
            className="absolute inset-0 w-full h-full object-cover mix-blend-hard-light opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale sepia hue-rotate-[250deg] saturate-[300%] contrast-150 group-hover:grayscale-[50%] group-hover:saturate-[200%] group-hover:contrast-[120%]"
            alt="Project"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaeIfbs70KAwWdArF-emTP2OvdScTr2dL9PyyKO1b6NZe25-4VtdlGmpqUryDxk_gQZn3IiQyEepSUAxyA-Xa29zqR8YY4Jy9PycKM7haIoS1GAHX5XxCL_-uNfiVUseCldkfnDBm16Ruxu1dTkJKQ0N-1iwYSMxKsI71jet9XkO2tOOhKWZcUDXX9bPur6bE9USkrbDbrbVdlHei6q5pLPcO6BnoH7Bwm_vwC4b9tb6plrQ7R0CoG"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-void via-deep-void/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex gap-2 mb-3">
              <span className="px-3 py-1 border border-primary-container text-white font-label-sm text-label-sm uppercase bg-black/70 backdrop-blur-sm">
                Music Production
              </span>
              <span className="px-3 py-1 border border-primary-container text-white font-label-sm text-label-sm uppercase bg-black/70 backdrop-blur-sm">
                Album Mix
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-white uppercase tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
              NIGHT RIDER LP
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-w-xl">
              Full production and mixing for the critically acclaimed synth-wave
              album, featuring heavy analog bass and crystalline highs.
            </p>
          </div>
        </article>

        {/* Medium Project Square - Staggered */}
        <article className="portfolio-card md:col-span-5 md:row-span-1 bg-surface-container border-2 border-outline-variant relative overflow-hidden group cursor-pointer hover:border-primary-container hover:drop-shadow-[0_0_15px_rgba(123,44,191,0.6)] transition-all duration-500 rounded-lg md:mt-12">
          <img
            className="absolute inset-0 w-full h-full object-cover mix-blend-hard-light opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale sepia hue-rotate-[250deg] saturate-[300%] contrast-150 group-hover:grayscale-[50%] group-hover:saturate-[200%] group-hover:contrast-[120%]"
            alt="Project"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWwTU6hfI6PZtLz_zapFVKF_qT019l-f82ZoV2rwc7xEX9YGrvuNtAzVBQ7TDAGFK-MH9XsmI09TFvwjgS5XKiuRV-S-mrLMpqv57TfNh7b0NJTMeWLgYpXuvlsZoh54PuDpE1teGw0lCU40AVUig-R9G8eNvvXp5XiTdRFgsHUp4xDksryJF2dQBuNs74xdB2H0d-170Dk9fmMyyE3y6pC1w_ndJk2cBBbXos1BopCkX0lXwDUKhk"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-void via-deep-void/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-block px-3 py-1 border border-primary-container text-white font-label-sm text-label-sm uppercase bg-black/70 backdrop-blur-sm mb-3">
              Music Video
            </span>
            <h2 className="font-headline-lg text-headline-lg text-white uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
              URBAN DECAY
            </h2>
          </div>
        </article>

        {/* Medium Project Vertical - Staggered */}
        <article className="portfolio-card md:col-span-4 md:row-span-1 bg-surface-container border-2 border-outline-variant relative overflow-hidden group cursor-pointer hover:border-primary-container hover:drop-shadow-[0_0_15px_rgba(123,44,191,0.6)] transition-all duration-500 rounded-lg md:-mt-12">
          <img
            className="absolute inset-0 w-full h-full object-cover mix-blend-hard-light opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale sepia hue-rotate-[250deg] saturate-[300%] contrast-150 group-hover:grayscale-[50%] group-hover:saturate-[200%] group-hover:contrast-[120%]"
            alt="Project"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOEkB6u73zJtsHaKhYj7uFIYeH7mNzbwKc7cJpcxosjnSM7F4lyKvKp9ss0a8u_u2HLpqe1Q9zTX6M4PPUHv5daQygBaD77z_qS9DyWp2YiF3cpVpUgdVfTr0Wl053nvLKGHbeWJ5g4o15o_E5VyiCQdxPHz7_426tn33wDC3B9m_g8PuvbktTOzRKDc_01mPcUAvy0RqvXW3nmQ1Bf90GfLZHguMloRs84GYXGKrBMr7pdCZuxeNR"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-void via-deep-void/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-block px-3 py-1 border border-primary-container text-white font-label-sm text-label-sm uppercase bg-black/70 backdrop-blur-sm mb-3">
              Commercials
            </span>
            <h2 className="font-headline-lg text-headline-lg text-white uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
              VELOCITY CAMPAIGN
            </h2>
          </div>
        </article>

        {/* Wide Project */}
        <article className="portfolio-card md:col-span-8 md:row-span-1 bg-surface-container border-2 border-outline-variant relative overflow-hidden group cursor-pointer hover:border-primary-container hover:drop-shadow-[0_0_15px_rgba(123,44,191,0.6)] transition-all duration-500 rounded-lg">
          <img
            className="absolute inset-0 w-full h-full object-cover object-[center_20%] mix-blend-hard-light opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale sepia hue-rotate-[250deg] saturate-[300%] contrast-150 group-hover:grayscale-[50%] group-hover:saturate-[200%] group-hover:contrast-[120%]"
            alt="Project"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyxry7qROYI3HXHaSAUUQBOM5dlfIGCVsyXrpA_t3w0gRiXxWB7znDkU3FgnfHiralbxgBkACGX4asmL5qwl2Iv8sA7qftDIHBp8qAKIG7ijXBkW5Q4yOrtgP2CSIlu2xLO-aoVLBspWA7IqZfPciC11K19KN7WH7SNukAy6b3medlRqPoE8s4jNsOsy55iRfubCPlkCG8ztH3VTTTM0zhQNK2p_YbdcBLDv8dnh6pDcG4RtrlespB"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-void via-deep-void/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex gap-2 mb-3">
              <span className="px-3 py-1 border border-primary-container text-white font-label-sm text-label-sm uppercase bg-black/70 backdrop-blur-sm">
                Artist Spotlights
              </span>
              <span className="px-3 py-1 border border-primary-container text-white font-label-sm text-label-sm uppercase bg-black/70 backdrop-blur-sm">
                Live Tour
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-white uppercase tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
              ECHOES WORLD TOUR
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-w-xl">
              Complete audio engineering and live recording strategy for a
              40-city international stadium tour.
            </p>
          </div>
        </article>
      </div>

      {/* CTA Section */}
      <div className="mt-stack-lg border-2 border-primary-container bg-surface-container p-stack-md md:p-stack-lg text-center relative overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-primary-container/10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-primary-container"></div>
        <div className="relative z-10 flex flex-col items-center">
          <h3 className="font-display-lg text-headline-xl-mobile md:text-display-lg text-white uppercase mb-6 tracking-tighter">
            READY TO RECORD?
          </h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl mx-auto">
            Bring your vision into the shadows and let us forge it into
            something unforgettable.
          </p>
          <Link
            href="/contact"
            className="bg-primary-container text-deep-void font-headline-lg text-headline-lg px-12 py-4 shadow-[8px_8px_0px_#7b2cbf] hover:shadow-[4px_4px_0px_#7b2cbf] hover:translate-x-1 hover:translate-y-1 transition-all rounded-sm uppercase tracking-wider flex items-center gap-2"
          >
            INITIATE AUDITION{" "}
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
