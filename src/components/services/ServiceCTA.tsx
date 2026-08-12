import TransitionLink from "@/components/ui/TransitionLink";

export default function ServiceCTA() {
  return (
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
      <TransitionLink
        href="/contact"
        className="inline-block bg-primary-container text-deep-void font-headline-lg text-headline-lg px-12 py-5 rounded btn-3d tracking-widest uppercase hover:scale-105 transition-transform duration-300"
      >
        BOOK A SESSION
      </TransitionLink>
    </section>
  );
}
