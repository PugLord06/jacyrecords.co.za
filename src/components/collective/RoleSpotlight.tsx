export default function RoleSpotlight() {
  return (
    <section className="py-stack-lg bg-surface relative">
      <div className="max-w-[1440px] mx-auto px-margin-edge md:px-[40px] px-[20px]">
        <div className="flex justify-between items-end mb-stack-md">
          <div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase md:text-[64px] text-[48px]">
              Role Spotlight
            </h2>
            <div className="h-1 w-24 bg-electric-purple mt-2"></div>
          </div>
          <p className="font-label-bold text-label-bold text-muted-gray hidden md:block">
            01 / ARCHITECTURE
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[200px]">
          {/* Artist (Large) */}
          <div className="md:col-span-8 row-span-2 bg-surface-container-low border border-outline-variant p-6 flex flex-col justify-end relative overflow-hidden group hover:border-primary-container transition-colors duration-300 shadow-[8px_8px_0px_#240046] hover:shadow-[12px_12px_0px_#240046] hover:-translate-x-1 hover:-translate-y-1">
            <div className="absolute inset-0 z-0">
              <img
                alt="Artist Role"
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale sepia hue-rotate-[250deg] saturate-[300%] brightness-80 contrast-150 group-hover:grayscale-0 group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgCnsAM9G-TDvxhhIO618FiLUrxhccjtfxNHrP8R5Hr7DvQnW-c0_Wqg3sdF16GBEo4j6VFDvNDWVVoInRw8odBoY5C61n3jyjaIdq2bYhsLPMt4xaAfSFSIGAc2h1Rl0QnhJgoblCRL7Z-WB5qXNjUsLRt-7m4x5n1_fRq01Ls30JmEFt0zpcGndcyBrXJK2zyjhNPTAr9_SQLDBqt5BTaxJG59VBYqdwbkutKeQVP0jmthV9iPAf"
              />
            </div>
            <div className="absolute top-6 right-6 z-10 bg-surface/80 backdrop-blur px-3 py-1 border border-outline-variant">
              <span className="font-label-sm text-label-sm text-primary">01</span>
            </div>
            <div className="relative z-10">
              <span
                className="material-symbols-outlined text-4xl text-electric-purple mb-2"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                mic_external_on
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-2">
                The Artist
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                The frontline communicators. Our artists are selected for
                their unique sonic signature and uncompromising vision. We
                provide the infrastructure for radical expression.
              </p>
            </div>
          </div>

          {/* Producer (Square) */}
          <div className="md:col-span-4 row-span-2 bg-surface-container-highest border border-outline-variant p-6 flex flex-col relative group hover:bg-surface-variant transition-colors duration-300">
            <div className="flex-grow">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-4"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                graphic_eq
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-2">
                The Producer
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The architects of sound. Crafting the heavy, low-end driven
                instrumentals that define the aesthetic. They manipulate
                frequency to alter reality.
              </p>
            </div>
            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="font-label-sm text-label-sm px-2 py-1 border border-outline text-on-surface">
                BEATS
              </span>
              <span className="font-label-sm text-label-sm px-2 py-1 border border-outline text-on-surface">
                SOUND DESIGN
              </span>
              <span className="font-label-sm text-label-sm px-2 py-1 border border-outline text-on-surface">
                SYNTHESIS
              </span>
            </div>
          </div>

          {/* Engineer */}
          <div className="md:col-span-4 row-span-1 bg-surface-container-low border border-outline-variant p-6 flex items-center gap-4 group hover:border-primary-container transition-colors duration-300">
            <div className="w-16 h-16 bg-surface flex items-center justify-center border border-outline-variant group-hover:bg-primary-container/20 transition-colors">
              <span
                className="material-symbols-outlined text-3xl text-electric-purple"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                tune
              </span>
            </div>
            <div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface text-[24px] uppercase">
                The Engineer
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
                Surgical precision. Mixing and mastering the chaos into
                pristine, club-ready audio.
              </p>
            </div>
          </div>

          {/* Director */}
          <div className="md:col-span-4 row-span-1 bg-surface-container-low border border-outline-variant p-6 flex items-center gap-4 group hover:border-primary-container transition-colors duration-300">
            <div className="w-16 h-16 bg-surface flex items-center justify-center border border-outline-variant group-hover:bg-primary-container/20 transition-colors">
              <span
                className="material-symbols-outlined text-3xl text-electric-purple"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                movie
              </span>
            </div>
            <div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface text-[24px] uppercase">
                The Director
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
                Visual translation. Turning audio waves into cinematic,
                high-contrast imagery.
              </p>
            </div>
          </div>

          {/* Writer / Creative */}
          <div className="md:col-span-4 row-span-1 bg-surface-container-low border border-outline-variant p-6 flex items-center gap-4 group hover:border-primary-container transition-colors duration-300">
            <div className="w-16 h-16 bg-surface flex items-center justify-center border border-outline-variant group-hover:bg-primary-container/20 transition-colors">
              <span
                className="material-symbols-outlined text-3xl text-electric-purple"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                edit_note
              </span>
            </div>
            <div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface text-[24px] uppercase">
                Writer/Creative
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
                The conceptual core. Lyrics, branding, and narrative
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
