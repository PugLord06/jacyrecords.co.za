export default function PortfolioGrid() {
  return (
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
  );
}
