import Link from "next/link";

export default function Services() {
  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-5 md:px-margin-edge pt-stack-lg pb-stack-lg flex flex-col gap-stack-lg">
      {/* Hero Section for Services */}
      <section className="flex flex-col items-start gap-stack-md relative z-10">
        <div className="inline-flex items-center gap-2 border border-outline text-primary px-4 py-2 font-label-bold text-label-bold uppercase tracking-widest bg-surface-container-low/50 backdrop-blur-sm">
          <span
            className="material-symbols-outlined text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            graphic_eq
          </span>
          STUDIO SERVICES
        </div>
        <h1 className="font-display-lg text-display-lg text-on-background uppercase tracking-tighter max-w-4xl leading-[0.9]">
          ENGINEERED <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-purple to-primary">
            FOR IMPACT.
          </span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4 border-l-4 border-electric-purple pl-4">
          We provide end-to-end sonic architecture and visual identity for
          artists ready to dominate the digital landscape. High-fidelity
          production meets brutalist brand strategy.
        </p>
      </section>

      {/* Services Grid (Bento/Asymmetric style) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
        {/* Service 1: Music Production (Large Feature) */}
        <article className="col-span-1 md:col-span-7 bg-[#0F0F0F] border border-[#240046] hover:border-[#7b2cbf] transition-all duration-300 shadow-[8px_8px_0px_#240046] hover:shadow-[12px_12px_0px_#240046] hover:-translate-y-1 p-8 md:p-12 flex flex-col justify-between group overflow-hidden relative min-h-[400px]">
          <div
            className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity group-hover:opacity-40 transition-opacity duration-500 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApwoWzA-rJ3yrtYrlg5VW1YBODB24d_RgkOuM6NNdkVcjGHPH_fZVD5PjtjL0SXzKfT9i1x8aNNxi1cHEyX-Qt2EBHuX8JYY8u_f7XC7-74VyQfMTADDUJzl3xfAnvfk9yFQwth61VDgrpebllO8lHqvDOUu30PijSh8u2gP2dZdqM_IrweI9gRE9VCZ2aVkbXfZVKKSyngEnrbyMa3OqF836TgYLGrUEaxZma8hOME5v6BV8EbmJi')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent z-0"></div>
          <div className="relative z-10 flex justify-between items-start mb-12">
            <div className="p-4 bg-deep-void border border-[#240046] inline-block shadow-[4px_4px_0px_#240046]">
              <span
                className="material-symbols-outlined text-electric-purple text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                mic
              </span>
            </div>
            <span className="font-label-bold text-label-bold text-outline uppercase">
              01
            </span>
          </div>
          <div className="relative z-10">
            <h2 className="font-headline-lg text-headline-lg text-on-background uppercase mb-4 group-hover:text-electric-purple transition-colors">
              Music Production
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-md">
              From raw concept to final arrangement. We architect beats and compose instrumentation tailored to your aggressive, high-energy persona.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 border border-outline text-on-surface font-label-sm text-label-sm bg-deep-void/50">
                BEATMAKING
              </span>
              <span className="px-3 py-1 border border-outline text-on-surface font-label-sm text-label-sm bg-deep-void/50">
                COMPOSITION
              </span>
              <span className="px-3 py-1 border border-outline text-on-surface font-label-sm text-label-sm bg-deep-void/50">
                SOUND DESIGN
              </span>
            </div>
          </div>
        </article>

        {/* Service 2: Mixing & Mastering (Tall Feature) */}
        <article className="col-span-1 md:col-span-5 bg-[#0F0F0F] border border-[#240046] hover:border-[#7b2cbf] transition-all duration-300 shadow-[8px_8px_0px_#240046] hover:shadow-[12px_12px_0px_#240046] hover:-translate-y-1 p-8 md:p-12 flex flex-col justify-between group">
          <div className="flex justify-between items-start mb-12">
            <div className="p-4 bg-deep-void border border-[#240046] inline-block shadow-[4px_4px_0px_#240046]">
              <span
                className="material-symbols-outlined text-electric-purple text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                tune
              </span>
            </div>
            <span className="font-label-bold text-label-bold text-outline uppercase">
              02
            </span>
          </div>
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-background uppercase mb-4 group-hover:text-electric-purple transition-colors">
              Mixing &amp; Mastering
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Achieve cinematic depth and competitive loudness. We refine
              frequencies, control dynamics, and master for digital streaming
              platforms with uncompromising precision.
            </p>
            <button className="inline-flex items-center gap-2 text-primary font-label-bold text-label-bold hover:text-white transition-colors">
              HEAR SAMPLES{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>
        </article>

        {/* Service 3: Artist Branding (Standard) */}
        <article className="col-span-1 md:col-span-6 bg-[#0F0F0F] border border-[#240046] hover:border-[#7b2cbf] transition-all duration-300 shadow-[8px_8px_0px_#240046] hover:shadow-[12px_12px_0px_#240046] hover:-translate-y-1 p-8 md:p-12 flex flex-col justify-between group">
          <div className="flex justify-between items-start mb-12">
            <div className="p-4 bg-deep-void border border-[#240046] inline-block shadow-[4px_4px_0px_#240046]">
              <span
                className="material-symbols-outlined text-electric-purple text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                brush
              </span>
            </div>
            <span className="font-label-bold text-label-bold text-outline uppercase">
              03
            </span>
          </div>
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-background uppercase mb-4 group-hover:text-electric-purple transition-colors">
              Artist Branding
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Visual identity built for the modern edge. Logos, album art, and
              typography that match the intensity of your sound. Brutalist,
              high-contrast, unforgettable.
            </p>
          </div>
        </article>

        {/* Service 4: Social Strategy (Standard) */}
        <article className="col-span-1 md:col-span-6 bg-[#0F0F0F] border border-[#240046] hover:border-[#7b2cbf] transition-all duration-300 shadow-[8px_8px_0px_#240046] hover:shadow-[12px_12px_0px_#240046] hover:-translate-y-1 p-8 md:p-12 flex flex-col justify-between group">
          <div className="flex justify-between items-start mb-12">
            <div className="p-4 bg-deep-void border border-[#240046] inline-block shadow-[4px_4px_0px_#240046]">
              <span
                className="material-symbols-outlined text-electric-purple text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                share
              </span>
            </div>
            <span className="font-label-bold text-label-bold text-outline uppercase">
              04
            </span>
          </div>
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-background uppercase mb-4 group-hover:text-electric-purple transition-colors">
              Social Strategy
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Dominate the algorithm. We design aggressive rollout plans,
              short-form video concepts, and engagement tactics tailored for
              TikTok and Instagram.
            </p>
          </div>
        </article>
      </section>

      {/* CTA Section */}
      <section className="mt-stack-md py-stack-lg border-t border-outline-variant flex flex-col items-center text-center gap-6 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-5">
          <span className="font-display-lg text-[200px] text-primary whitespace-nowrap">
            JACY RECORDS
          </span>
        </div>
        <h2 className="font-headline-xl text-headline-xl text-on-background uppercase relative z-10">
          READY TO <br />{" "}
          <span className="text-electric-purple">ELEVATE?</span>
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg relative z-10">
          Book a consultation to discuss your project scale, aesthetic goals,
          and production needs.
        </p>
        <Link
          href="/contact"
          className="mt-4 bg-primary-container text-deep-void font-label-bold text-label-bold px-8 py-4 border border-outline btn-3d hover:drop-shadow-[0_0_15px_#7B2CBF] transition-all relative z-10 inline-flex items-center gap-2"
        >
          AUDITION NOW{" "}
          <span className="material-symbols-outlined">arrow_outward</span>
        </Link>
      </section>
    </main>
  );
}
