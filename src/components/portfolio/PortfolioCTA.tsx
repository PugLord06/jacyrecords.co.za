import Link from "next/link";

export default function PortfolioCTA() {
  return (
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
  );
}
