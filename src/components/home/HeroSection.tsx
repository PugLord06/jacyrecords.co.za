import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-margin-edge py-stack-lg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-primary-container rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-electric-purple rounded-full mix-blend-screen filter blur-[120px] opacity-50"></div>
      </div>
      <div className="relative z-10 text-center max-w-[1200px] mx-auto flex flex-col items-center">
        <h1 className="font-display-lg text-display-lg text-white mb-stack-sm uppercase text-3d transition-all duration-300">
          JACY RECORDS
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-stack-md mx-auto text-center">
          Where raw energy meets refined production. We build anthems for the
          digital age, crafting sonic landscapes that cut through the noise
          and demand attention.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-primary-container text-deep-void font-headline-lg text-headline-lg px-10 py-4 rounded btn-3d tracking-wider flex items-center gap-2">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              play_arrow
            </span>
            LISTEN NOW
          </button>
          <Link
            href="/collective"
            className="bg-transparent border-2 border-white text-white font-headline-lg text-headline-lg px-10 py-4 rounded hover:bg-white hover:text-deep-void transition-colors btn-3d tracking-wider"
          >
            EXPLORE ROSTER
          </Link>
        </div>
      </div>
      {/* Floating Elements / Visual Interest */}
      <div className="absolute bottom-10 w-full flex justify-center animate-bounce z-10">
        <span className="material-symbols-outlined text-primary text-4xl">
          keyboard_arrow_down
        </span>
      </div>
    </section>
  );
}
