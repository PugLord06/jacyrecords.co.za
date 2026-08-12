"use client";

import TransitionLink from "@/components/ui/TransitionLink";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-stack-lg px-margin-edge border-t border-outline-variant bg-surface relative overflow-hidden">
      <div className="cta-content max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display-lg text-display-lg text-on-surface uppercase mb-6 tracking-tighter">
          Ready to make noise?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl mx-auto">
          Join the collective. We're always looking for visionary artists, producers, and creatives who refuse to blend in.
        </p>
        <TransitionLink
          href="/contact"
          className="inline-block bg-primary-container text-deep-void font-headline-lg text-headline-lg px-12 py-5 rounded btn-3d tracking-widest uppercase hover:scale-105 transition-transform duration-300"
        >
          SUBMIT YOUR WORK
        </TransitionLink>
      </div>
      
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-electric-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}
