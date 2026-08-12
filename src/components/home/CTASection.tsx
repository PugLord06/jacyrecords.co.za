import Link from "next/link";

export default function CTASection() {
  return (
    <section className="px-margin-edge py-stack-lg my-stack-lg max-w-[1440px] mx-auto bg-surface-container-high border-y border-outline-variant relative overflow-hidden">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #4c4353 25%, transparent 25%, transparent 75%, #4c4353 75%, #4c4353), repeating-linear-gradient(45deg, #4c4353 25%, #131313 25%, #131313 75%, #4c4353 75%, #4c4353)",
          backgroundPosition: "0 0, 10px 10px",
          backgroundSize: "20px 20px",
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        <h2 className="font-display-lg text-display-lg text-white mb-6 uppercase">
          WANT TO JOIN THE COLLECTIVE?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
          Lock in your session. Our calendar fills up fast. Bring your demos,
          stems, or just a concept. We'll handle the rest.
        </p>
        <div className="w-full max-w-md flex flex-col gap-4">
          <Link
            href="/contact"
            className="w-full block bg-primary-container text-deep-void font-headline-lg text-headline-lg px-8 py-4 btn-3d tracking-wider text-center uppercase"
          >
            JOIN THE DISCORD
          </Link>
        </div>
      </div>
    </section>
  );
}
