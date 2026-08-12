"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RoleSpotlight() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".role-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        rotationX: 15,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        transformOrigin: "bottom center",
      });
    },
    { scope: containerRef }
  );

  const roles = [
    {
      title: "ARTIST",
      desc: "For rappers, singers & recording artists.",
      icon: "mic_external_on",
      colSpan: "md:col-span-12",
      hue: "hue-rotate-0",
    },
    {
      title: "PRODUCER",
      desc: "For beatmakers & producers.",
      icon: "graphic_eq",
      colSpan: "md:col-span-6",
      hue: "hue-rotate-15",
    },
    {
      title: "WRITER",
      desc: "For songwriters, lyricists & topliners.",
      icon: "edit_note",
      colSpan: "md:col-span-6",
      hue: "hue-rotate-30",
    },
    {
      title: "CREATIVE",
      desc: "For designers, editors, photographers & other creatives.",
      icon: "palette",
      colSpan: "md:col-span-4",
      hue: "hue-rotate-[60deg]",
    },
    {
      title: "ENGINEER",
      desc: "For mixing, mastering & audio engineers.",
      icon: "tune",
      colSpan: "md:col-span-4",
      hue: "hue-rotate-[90deg]",
    },
    {
      title: "DIRECTOR",
      desc: "For people involved in videos, visual direction & creative projects.",
      icon: "movie",
      colSpan: "md:col-span-4",
      hue: "hue-rotate-[180deg]",
    },
    {
      title: "RECORDS MEMBER",
      desc: "The overall role everyone accepted into the collective gets.",
      icon: "stars",
      colSpan: "md:col-span-12",
      hue: "hue-rotate-[270deg]",
    },
  ];

  return (
    <section ref={containerRef} className="py-stack-lg bg-surface relative perspective-[1000px]">
      <div className="max-w-[1440px] mx-auto px-margin-edge md:px-[40px] px-[20px]">
        <div className="flex justify-between items-end mb-stack-md">
          <div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase md:text-[64px] text-[48px]">
              Role Spotlight
            </h2>
            <div className="h-1 w-24 bg-electric-purple mt-2"></div>
          </div>
          <p className="font-label-bold text-label-bold text-muted-gray hidden md:block">
            01 / ARCHITECTURE
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className={`role-card ${role.colSpan} bg-surface-container-low border border-outline-variant p-8 flex flex-col justify-center relative overflow-hidden group cursor-pointer shadow-[4px_4px_0px_#240046] hover:shadow-[12px_12px_0px_#240046] transition-all duration-500`}
            >
              {/* Hover Image Reveal */}
              <div className="absolute inset-0 z-0">
                <img
                  alt={role.title}
                  className={`w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-700 grayscale sepia saturate-[200%] ${role.hue} group-hover:scale-110 transform-gpu`}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgCnsAM9G-TDvxhhIO618FiLUrxhccjtfxNHrP8R5Hr7DvQnW-c0_Wqg3sdF16GBEo4j6VFDvNDWVVoInRw8odBoY5C61n3jyjaIdq2bYhsLPMt4xaAfSFSIGAc2h1Rl0QnhJgoblCRL7Z-WB5qXNjUsLRt-7m4x5n1_fRq01Ls30JmEFt0zpcGndcyBrXJK2zyjhNPTAr9_SQLDBqt5BTaxJG59VBYqdwbkutKeQVP0jmthV9iPAf"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-void/90 via-deep-void/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-start gap-2 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="w-12 h-12 bg-deep-void flex items-center justify-center rounded-sm border border-outline-variant/30 group-hover:border-electric-purple/50 transition-colors">
                  <span
                    className="material-symbols-outlined text-2xl text-electric-purple group-hover:animate-pulse"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {role.icon}
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase m-0 mt-2">
                  {role.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-sm group-hover:text-white transition-colors duration-300">
                  {role.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
