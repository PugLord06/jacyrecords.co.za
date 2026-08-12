export default function ServiceHero() {
  return (
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
  );
}
