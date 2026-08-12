import Link from "next/link";

export default function CollectiveHeader() {
  return (
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
  );
}
