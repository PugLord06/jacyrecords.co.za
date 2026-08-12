import Link from "next/link";

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
      <Link
        href="/contact"
        className="mt-4 bg-primary-container text-deep-void font-label-bold text-label-bold px-8 py-4 border border-outline btn-3d hover:drop-shadow-[0_0_15px_#7B2CBF] transition-all relative z-10 inline-flex items-center gap-2"
      >
        AUDITION NOW{" "}
        <span className="material-symbols-outlined">arrow_outward</span>
      </Link>
    </section>
  );
}
