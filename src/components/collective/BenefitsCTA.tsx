import Link from "next/link";

export default function BenefitsCTA() {
  return (
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
  );
}
