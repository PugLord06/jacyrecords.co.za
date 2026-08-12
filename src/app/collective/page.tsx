import Link from "next/link";

export default function Collective() {
  return (
    <main className="flex-grow w-full overflow-x-hidden">
      {/* Header Section */}
      <header className="relative w-full pt-[120px] pb-stack-lg border-b border-outline-variant">
        <div
          className="absolute inset-0 pointer-events-none opacity-30 z-0"
          style={{
            backgroundSize: "40px 40px",
            backgroundImage:
              "linear-gradient(to right, rgba(76, 67, 83, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(76, 67, 83, 0.2) 1px, transparent 1px)",
          }}
        ></div>
        <div className="max-w-[1440px] mx-auto px-margin-edge md:px-[40px] px-[20px] flex flex-col md:flex-row gap-gutter items-center relative z-10">
          <div className="w-full md:w-1/2">
            <p className="font-label-bold text-label-bold text-electric-purple mb-4 tracking-[0.2em] uppercase">
              The Inner Circle
            </p>
            <h1
              className="font-display-lg text-display-lg text-on-surface mb-stack-sm md:text-[96px] text-[64px] uppercase leading-none"
              style={{ textShadow: "4px 4px 0px #7B2CBF" }}
            >
              The Jacy
              <br />
              Collective
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-stack-md">
              We are a syndicate of nocturnal creators. Artists, producers,
              engineers, and visionaries united under one heavily distorted
              roof. We don't just make tracks; we engineer the sonic future.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary-container text-deep-void font-headline-lg text-headline-lg px-8 py-4 border-2 border-primary-container hover:bg-surface hover:text-primary-container transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(123,44,191,0.6)]"
            >
              APPLY FOR AUDITION{" "}
              <span
                className="material-symbols-outlined ml-2"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="w-full md:w-1/2 relative h-[500px] flex items-center justify-center mt-stack-md md:mt-0">
            {/* Abstract visual representation of the collective */}
            <div className="absolute w-[300px] h-[300px] bg-electric-purple/20 blur-[100px] rounded-full"></div>
            <div className="relative w-full h-full border border-outline-variant bg-surface p-4 shadow-[8px_8px_0px_#240046] hover:shadow-[12px_12px_0px_#240046] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
              <img
                alt="The Collective"
                className="w-full h-full object-cover grayscale sepia hue-rotate-[250deg] saturate-[300%] brightness-80 contrast-150 group-hover:grayscale-0 group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6cpGncMduryDzphYo-9H91WbD2Hiz9rTLlfg3fWkH4x9wF04gXnZsrUjFaSWHkdffj040oCf6Dbawfn1QOXgTjT0swzRpQa_C0ZAtzEGYnf9dafcCA7ByBEreeDdiGvZRcfFDgZN5Mc7eD1ZqyyQAQQP7bUdbuwvqpvFQQdxuLMGeVXsp_iX4DGefbmvJxeMhi0D2ZgaiiTxOu8hvjOaYdi3dAYfFST1ZmGvkZB26Kr-yqMiFepl3"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Role Spotlight / Bento Grid */}
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

      {/* Member Roster / Avatars */}
      <section className="py-stack-lg bg-deep-void border-t border-outline-variant">
        <div className="max-w-[1440px] mx-auto px-margin-edge md:px-[40px] px-[20px]">
          <div className="flex justify-between items-end mb-stack-md">
            <div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase md:text-[64px] text-[48px]">
                Current Roster
              </h2>
              <div className="h-1 w-24 bg-electric-purple mt-2"></div>
            </div>
            <p className="font-label-bold text-label-bold text-muted-gray hidden md:block">
              02 / THE SYNDICATE
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter">
            {/* Member 1 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-square border border-outline-variant bg-surface mb-3 overflow-hidden relative shadow-[8px_8px_0px_#240046] group-hover:shadow-[12px_12px_0px_#240046] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <img
                  alt="Coming Soon"
                  className="w-full h-full object-cover opacity-30 grayscale sepia hue-rotate-[250deg] saturate-[300%] brightness-80 contrast-150 group-hover:grayscale-0 group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBcBxf4QOhVAiWx369FrQGRtPLJ6BNr9cjTHBUrkrkkdPEQxVuUp-MvCyYR016taR7o4-2_elzMxCgAvDTTaX3J74EMxfdpnAtm-FLBP2vePh_MsB6Fn1XSE6QP8H13RL1jjoYTRA8m250fxrjvV6wc4ped91w6LbantkoLB5MdSH9JNi-rzaEL15nWdWfRhXt3Rwa7q33Hr-9Lo84HKzZZO5tuDMQPclI63AQQPT3Pwqq24W5m3t9"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-void via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-2 right-2">
                  <span className="font-label-sm text-label-sm bg-surface text-primary px-2 py-1 border border-primary">
                    TBA
                  </span>
                </div>
              </div>
              <h4 className="font-headline-lg text-headline-lg text-[20px] text-on-surface uppercase group-hover:text-electric-purple transition-colors">
                COMING SOON...
              </h4>
            </div>

            {/* Member 2 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-square border border-outline-variant bg-surface mb-3 overflow-hidden relative shadow-[8px_8px_0px_#240046] group-hover:shadow-[12px_12px_0px_#240046] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <img
                  alt="Coming Soon"
                  className="w-full h-full object-cover opacity-30 grayscale sepia hue-rotate-[250deg] saturate-[300%] brightness-80 contrast-150 group-hover:grayscale-0 group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9XUUXDP3c_i9PgkVs3jqT23sIY9UgkMRs0vDPAbzIuBD73uT3tsvROW7-NDTSsbtrQAb595o1mj6EyQbVUqPuBmNijhENU8O4ZBoPa1weT9qNjm8QdHLSwuPLFP06ZvoBpFb6YmtJx1WLUsuDpgXFYWvsG0sDnVQeh2Nmb2tMbti5eS0_YXJD7EU5lP3x_3OP1gPw648sHE9pibETGQAMFUXniOtvb4erdBElD_-iR94YO9iMJqay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-void via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-2 right-2">
                  <span className="font-label-sm text-label-sm bg-surface text-primary px-2 py-1 border border-primary">
                    TBA
                  </span>
                </div>
              </div>
              <h4 className="font-headline-lg text-headline-lg text-[20px] text-on-surface uppercase group-hover:text-electric-purple transition-colors">
                COMING SOON...
              </h4>
            </div>

            {/* Member 3 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-square border border-outline-variant bg-surface mb-3 overflow-hidden relative shadow-[8px_8px_0px_#240046] group-hover:shadow-[12px_12px_0px_#240046] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <img
                  alt="Coming Soon"
                  className="w-full h-full object-cover opacity-30 grayscale sepia hue-rotate-[250deg] saturate-[300%] brightness-80 contrast-150 group-hover:grayscale-0 group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB01llp__yJD-6SiP0F5I5Jh5gu_QK81BHBluOeL0dSlTVtavh6lhZS9-c6RkkCW8tQDXRXsBpJgzZR6TKo6RqiI0CJgJXGVExcYqgxjZvvO8uso_1lxf6REiMxnklR6t40iicQEYxRInDeL72LbsclfLyijIXY1hgsLlQao2NZzJiHBl4OP-JqU2oXr0KuGBRNcJ4nPPwXkwyOM45nyljZ7-6Qj16Pyb1AzOT2dBenSipsPDrWMhm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-void via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-2 right-2">
                  <span className="font-label-sm text-label-sm bg-surface text-primary px-2 py-1 border border-primary">
                    TBA
                  </span>
                </div>
              </div>
              <h4 className="font-headline-lg text-headline-lg text-[20px] text-on-surface uppercase group-hover:text-electric-purple transition-colors">
                COMING SOON...
              </h4>
            </div>

            {/* Member 4 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-square border border-outline-variant bg-surface mb-3 overflow-hidden relative shadow-[8px_8px_0px_#240046] group-hover:shadow-[12px_12px_0px_#240046] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <img
                  alt="Coming Soon"
                  className="w-full h-full object-cover opacity-30 grayscale sepia hue-rotate-[250deg] saturate-[300%] brightness-80 contrast-150 group-hover:grayscale-0 group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBobp6PaM7b20ucfXuUhalOBpIsfTsUyPJNVDn_wRaA_Duot24WRYzlA26ikUGFNqylwKOCJxeBmuDmP5R_EBWWhlRfD7GHiU7kXS2k2rmceIxeuO22rKzvTKV-epBk7nMLOB160Gc-zNB-XHWYiUeimYMBHIxsIlseHZ64OaJXWpHPBrwMUZcQUtuutlox6kbvcHnb4AICL60h1THuU-KVM5z_8fmKsLJAgpPRpCEt3FNm9lsVfmy4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-void via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-2 right-2">
                  <span className="font-label-sm text-label-sm bg-surface text-primary px-2 py-1 border border-primary">
                    TBA
                  </span>
                </div>
              </div>
              <h4 className="font-headline-lg text-headline-lg text-[20px] text-on-surface uppercase group-hover:text-electric-purple transition-colors">
                COMING SOON...
              </h4>
            </div>

            {/* Open Slot */}
            <div className="group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
              <Link href="/contact">
                <div className="w-full aspect-square border border-dashed border-outline-variant bg-surface-container-low mb-3 flex flex-col items-center justify-center relative hover:border-electric-purple transition-colors">
                  <span
                    className="material-symbols-outlined text-4xl text-outline mb-2 group-hover:text-electric-purple"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    add
                  </span>
                  <span className="font-label-bold text-label-bold text-outline group-hover:text-electric-purple">
                    NEXT INTAKE
                  </span>
                </div>
                <h4 className="font-headline-lg text-headline-lg text-[20px] text-outline uppercase">
                  YOU?
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Member Benefits & Join CTA */}
      <section className="py-stack-lg bg-surface border-t border-outline-variant relative overflow-hidden" id="join">
        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundSize: "40px 40px",
            backgroundImage:
              "linear-gradient(to right, rgba(76, 67, 83, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(76, 67, 83, 0.2) 1px, transparent 1px)",
          }}
        ></div>
        <div className="max-w-[1440px] mx-auto px-margin-edge md:px-[40px] px-[20px] relative z-10 flex flex-col md:flex-row gap-stack-md">
          {/* Benefits Column */}
          <div className="w-full md:w-1/2">
            <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase mb-stack-sm md:text-[64px] text-[48px]">
              The Arsenal
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 p-4 border border-outline-variant bg-surface-container-highest hover:bg-surface-variant transition-colors group">
                <span
                  className="material-symbols-outlined text-3xl text-electric-purple group-hover:drop-shadow-[0_0_15px_rgba(123,44,191,0.6)]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  speaker
                </span>
                <div>
                  <h4 className="font-headline-lg text-headline-lg text-[24px] text-on-surface uppercase">
                    Studio Access
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    24/7 access to our state-of-the-art facility. High-end
                    analog gear meets digital precision.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 border border-outline-variant bg-surface-container-highest hover:bg-surface-variant transition-colors group">
                <span
                  className="material-symbols-outlined text-3xl text-electric-purple group-hover:drop-shadow-[0_0_15px_rgba(123,44,191,0.6)]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  sync_alt
                </span>
                <div>
                  <h4 className="font-headline-lg text-headline-lg text-[24px] text-on-surface uppercase">
                    Cross-Collaboration
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Instant connection with our roster. Need a guitar riff? Need
                    a mix down? The network provides.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 border border-outline-variant bg-surface-container-highest hover:bg-surface-variant transition-colors group">
                <span
                  className="material-symbols-outlined text-3xl text-electric-purple group-hover:drop-shadow-[0_0_15px_rgba(123,44,191,0.6)]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  trending_up
                </span>
                <div>
                  <h4 className="font-headline-lg text-headline-lg text-[24px] text-on-surface uppercase">
                    Distribution &amp; Push
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Leverage our established channels. Priority placement,
                    playlist pitching, and aggressive marketing.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA / Discord Block */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="bg-deep-void border-2 border-electric-purple p-8 relative shadow-[8px_8px_0px_#240046] hover:shadow-[12px_12px_0px_#240046] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4">
                <span
                  className="material-symbols-outlined text-4xl text-electric-purple opacity-50"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  forum
                </span>
              </div>
              <span className="font-label-bold text-label-bold text-electric-purple tracking-widest uppercase mb-2 block">
                Intake 04 is imminent
              </span>
              <h3 className="font-display-lg text-display-lg text-on-surface uppercase leading-none mb-4 text-[64px]">
                Enter The
                <br />
                Discord
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-sm">
                We don't accept standard resumes. Join our private Discord
                server. Drop your stems, share your mixes, network with the
                current roster. Show us what you can build in the dark.
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center bg-electric-purple text-deep-void font-headline-lg text-[24px] px-8 py-4 shadow-[6px_6px_0px_#240046] hover:shadow-[4px_4px_0px_#240046] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all uppercase tracking-wide hover:bg-primary-container hover:drop-shadow-[0_0_15px_rgba(123,44,191,0.6)]"
              >
                <span
                  className="material-symbols-outlined mr-2"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  tag
                </span>
                Join The Server
              </Link>
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-label-sm text-label-sm text-muted-gray">
                  42 Members currently online
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
