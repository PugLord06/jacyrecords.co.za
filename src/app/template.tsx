"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Template({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Entrance animation: columns start fully covering screen, scale down to top
      gsap.fromTo(
        ".page-transition-layer",
        { scaleY: 1 },
        {
          scaleY: 0,
          transformOrigin: "top",
          duration: 0.8,
          stagger: 0.1,
          ease: "power4.inOut",
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div className="fixed inset-0 z-[9999] pointer-events-none flex">
        <div className="page-transition-layer flex-1 bg-electric-purple scale-y-0 origin-bottom"></div>
        <div className="page-transition-layer flex-1 bg-[#1A1A1A] scale-y-0 origin-bottom"></div>
        <div className="page-transition-layer flex-1 bg-electric-purple scale-y-0 origin-bottom"></div>
        <div className="page-transition-layer flex-1 bg-[#1A1A1A] scale-y-0 origin-bottom"></div>
        <div className="page-transition-layer flex-1 bg-electric-purple scale-y-0 origin-bottom"></div>
      </div>
      {children}
    </div>
  );
}
