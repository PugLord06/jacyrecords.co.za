import TransitionLink from "@/components/ui/TransitionLink";

export default function Portfolio() {
  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-margin-edge md:px-[40px] px-[20px] py-stack-lg md:py-[120px] py-[80px] flex flex-col items-center justify-center relative min-h-[75vh]">
      <div
        className="absolute inset-0 opacity-50 z-0 pointer-events-none"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(123, 44, 191, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(123, 44, 191, 0.15) 1px, transparent 1px)",
        }}
      ></div>
      <div className="z-10 relative bg-[#0F0F0F]/80 border-2 border-[#240046] shadow-[12px_12px_0px_#240046] p-stack-md md:p-stack-lg flex flex-col items-center text-center max-w-4xl w-full backdrop-blur-sm">
        <span className="font-label-bold text-label-bold text-primary tracking-[0.2em] uppercase mb-4 block">
          PORTFOLIO & ARCHIVE
        </span>
        <h1
          className="font-display-lg text-display-lg text-on-surface uppercase mb-6 leading-none tracking-tighter"
          style={{ textShadow: "6px 6px 0px #7B2CBF, -2px -2px 0px #240046" }}
        >
          COMING SOON
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl text-xl">
          We are currently curating the archive. The portfolio will feature recent projects, studio sessions, and the latest releases from the Jacy Records collective. Stay connected on our Discord for exclusive drops.
        </p>
        <TransitionLink
          href="/"
          className="bg-surface-container-low text-on-surface border border-outline-variant hover:border-primary-container shadow-[8px_8px_0px_#240046] hover:shadow-[6px_6px_0px_#240046] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[8px] active:translate-y-[8px] transition-all duration-200 inline-flex items-center justify-center px-12 py-6 font-headline-lg text-headline-lg text-2xl uppercase tracking-wider"
        >
          RETURN TO BASE
        </TransitionLink>
      </div>
    </main>
  );
}
