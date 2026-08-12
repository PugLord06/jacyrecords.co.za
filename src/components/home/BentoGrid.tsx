"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BentoGrid() {
  const containerRef = useRef<HTMLElement>(null);
  const parallaxImgRef = useRef<HTMLImageElement>(null);
  const gridItemRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Scroll Reveal Stagger
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Parallax mouse effect on main grid item
      if (gridItemRef.current && parallaxImgRef.current) {
        const item = gridItemRef.current;
        const img = parallaxImgRef.current;

        item.addEventListener("mousemove", (e) => {
          const rect = item.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;

          gsap.to(img, {
            x: x * 30, // move up to 30px
            y: y * 30,
            duration: 0.5,
            ease: "power2.out",
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(img, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="px-margin-edge py-stack-lg max-w-[1440px] mx-auto border-t border-outline-variant"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Main Feature Box */}
        <div
          ref={gridItemRef}
          className="bento-item col-span-1 md:col-span-8 bg-surface-container border border-outline-variant rounded-xl p-8 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-surface-container to-deep-void opacity-80 z-0 pointer-events-none"></div>
          <img
            ref={parallaxImgRef}
            className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] object-cover opacity-30 mix-blend-luminosity group-hover:opacity-50 transition-opacity duration-500 z-0"
            alt="Studio"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTDNPxw3LKJfhjxvuBDYtDXz4oJkpdblQCF3iUwk8wq3awGwUMFYpCQKeElnw_tZfxzIFubp1LAhN37dA_Rp0_rIDZjVerN4_n9pglayVZuGsUFyiKRoiOefvJMHQFOUPYC29mNhkan98SMpcDjHNfZOkgKKrfuwMGWOGClQBkcO9dzDwb4d-shKBKbrDDJf9aCak-bfBWKKlMCyCktO8LYS2xBhj_DNM29hgFt6LrRD6WZtNxJwTH25jYG0U4WzDT9g"
          />
          <div className="relative z-10 h-full flex flex-col justify-end pointer-events-none">
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
              className="font-label-bold text-label-bold text-white flex items-center gap-2 hover:text-electric-purple transition-colors w-fit pointer-events-auto"
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
          <div className="bento-item bg-surface-container border border-outline-variant rounded-xl p-8 flex-1 flex flex-col justify-center items-center text-center hover:border-primary transition-colors">
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
          <div className="bento-item bg-surface-container border border-outline-variant rounded-xl p-8 flex-1 flex flex-col justify-center">
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
  );
}
