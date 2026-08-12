"use client";

import TransitionLink from "@/components/ui/TransitionLink";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PortfolioCTA() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      if (!btnRef.current) return;
      const btn = btnRef.current;

      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
          scale: 1.05,
          boxShadow: "12px 12px 0px #7b2cbf",
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          scale: 1,
          boxShadow: "8px 8px 0px #7b2cbf",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    },
    { scope: btnRef }
  );

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
        <TransitionLink
          href="/contact"
          className="bg-primary-container text-deep-void font-headline-lg text-headline-lg px-12 py-4 shadow-[8px_8px_0px_#7b2cbf] transition-colors rounded-sm uppercase tracking-wider flex items-center gap-2"
        >
          INITIATE AUDITION{" "}
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            arrow_forward
          </span>
        </TransitionLink>
      </div>
    </div>
  );
}
