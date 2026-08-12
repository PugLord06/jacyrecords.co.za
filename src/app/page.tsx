import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
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

      {/* Studio Intro / Bento Grid */}
      <section className="px-margin-edge py-stack-lg max-w-[1440px] mx-auto border-t border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Main Feature Box */}
          <div className="col-span-1 md:col-span-8 bg-surface-container border border-outline-variant rounded-xl p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-container to-deep-void opacity-80 z-0"></div>
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:opacity-50 transition-opacity duration-500 z-0"
              alt="Studio"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTDNPxw3LKJfhjxvuBDYtDXz4oJkpdblQCF3iUwk8wq3awGwUMFYpCQKeElnw_tZfxzIFubp1LAhN37dA_Rp0_rIDZjVerN4_n9pglayVZuGsUFyiKRoiOefvJMHQFOUPYC29mNhkan98SMpcDjHNfZOkgKKrfuwMGWOGClQBkcO9dzDwb4d-shKBKbrDDJf9aCak-bfBWKKlMCyCktO8LYS2xBhj_DNM29hgFt6LrRD6WZtNxJwTH25jYG0U4WzDT9g"
            />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h2 className="font-headline-xl text-headline-xl text-primary mb-4">
                THE LAB
              </h2>
              <p className="font-body-md text-body-md text-on-surface max-w-lg mb-6">
                State-of-the-art analog gear meets cutting-edge digital
                processing. Designed for zero latency and maximum vibe. This is
                where the magic happens, late into the night.
              </p>
              <Link
                href="/services"
                className="font-label-bold text-label-bold text-white flex items-center gap-2 hover:text-electric-purple transition-colors w-fit"
              >
                TAKE A TOUR{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          {/* Secondary Boxes */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-gutter">
            {/* Stats / Mini Feature */}
            <div className="bg-surface-container border border-outline-variant rounded-xl p-8 flex-1 flex flex-col justify-center items-center text-center hover:border-primary transition-colors">
              <span
                className="material-symbols-outlined text-6xl text-electric-purple mb-4 glow-effect"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                album
              </span>
              <h3 className="font-headline-lg text-headline-lg text-white mb-2">
                ??
              </h3>
              <p className="font-label-bold text-label-bold text-muted-gray uppercase">
                Releases This Year
              </p>
            </div>
            {/* Services Tags */}
            <div className="bg-surface-container border border-outline-variant rounded-xl p-8 flex-1 flex flex-col justify-center">
              <h3 className="font-headline-lg text-headline-lg text-white mb-4">
                SPECIALTIES
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="border border-white/30 text-white font-label-sm text-label-sm px-3 py-1 rounded bg-transparent hover:border-primary hover:text-primary transition-colors cursor-default">
                  MIXING
                </span>
                <span className="border border-white/30 text-white font-label-sm text-label-sm px-3 py-1 rounded bg-transparent hover:border-primary hover:text-primary transition-colors cursor-default">
                  MASTERING
                </span>
                <span className="border border-white/30 text-white font-label-sm text-label-sm px-3 py-1 rounded bg-transparent hover:border-primary hover:text-primary transition-colors cursor-default">
                  VOCAL PROD
                </span>
                <span className="border border-white/30 text-white font-label-sm text-label-sm px-3 py-1 rounded bg-transparent hover:border-primary hover:text-primary transition-colors cursor-default">
                  BEATMAKING
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </main>
  );
}
