"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mic2, AudioWaveform, PenLine, Paintbrush, SlidersHorizontal, Clapperboard } from "lucide-react";

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
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[200px]">
          {/* 1. Artist */}
          <div className="role-card md:col-span-8 row-span-2 bg-surface-container-low border border-outline-variant p-6 flex flex-col justify-end relative overflow-hidden group hover:border-primary-container transition-colors duration-300 shadow-[8px_8px_0px_#240046] hover:shadow-[12px_12px_0px_#240046] hover:-translate-x-1 hover:-translate-y-1">
            <div className="absolute inset-0 z-0">
              <img
                alt="Artist Role"
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale sepia hue-rotate-[250deg] saturate-[300%] brightness-80 contrast-150 group-hover:grayscale-0 group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-105 transform-gpu"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgCnsAM9G-TDvxhhIO618FiLUrxhccjtfxNHrP8R5Hr7DvQnW-c0_Wqg3sdF16GBEo4j6VFDvNDWVVoInRw8odBoY5C61n3jyjaIdq2bYhsLPMt4xaAfSFSIGAc2h1Rl0QnhJgoblCRL7Z-WB5qXNjUsLRt-7m4x5n1_fRq01Ls30JmEFt0zpcGndcyBrXJK2zyjhNPTAr9_SQLDBqt5BTaxJG59VBYqdwbkutKeQVP0jmthV9iPAf"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-void/90 via-deep-void/20 to-transparent"></div>
            </div>
            <div className="absolute top-6 right-6 z-10 bg-surface/80 backdrop-blur px-3 py-1 border border-outline-variant">
              <span className="font-label-sm text-label-sm text-primary">01</span>
            </div>
            <div className="relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-2">
                <Mic2 className="text-electric-purple w-8 h-8 group-hover:animate-pulse" />
                <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase m-0">
                  The Artist
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md group-hover:text-white transition-colors">
                For rappers, singers & recording artists.
              </p>
            </div>
          </div>

          {/* 2. Producer */}
          <div className="role-card md:col-span-4 row-span-2 bg-surface-container-highest border border-outline-variant p-6 flex flex-col relative group hover:bg-surface-variant transition-colors duration-300">
            <div className="flex-grow group-hover:-translate-y-2 transition-transform duration-500">
              <AudioWaveform className="text-primary w-10 h-10 mb-4 group-hover:animate-pulse" />
              <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-2">
                The Producer
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant group-hover:text-white transition-colors">
                For beatmakers & producers.
              </p>
            </div>
            <div className="mt-4 flex gap-2 flex-wrap opacity-50 group-hover:opacity-100 transition-opacity">
              <span className="font-label-sm text-label-sm px-2 py-1 border border-outline text-on-surface">BEATS</span>
              <span className="font-label-sm text-label-sm px-2 py-1 border border-outline text-on-surface">SOUND DESIGN</span>
            </div>
          </div>

          {/* 3. Writer */}
          <div className="role-card md:col-span-6 row-span-1 bg-surface-container-low border border-outline-variant p-6 flex items-center gap-4 group hover:border-primary-container transition-colors duration-300">
            <div className="w-16 h-16 shrink-0 bg-surface flex items-center justify-center border border-outline-variant group-hover:bg-primary-container/20 transition-colors">
              <PenLine className="text-electric-purple w-8 h-8 group-hover:animate-pulse" />
            </div>
            <div className="group-hover:-translate-y-1 transition-transform duration-500">
              <h3 className="font-headline-lg text-headline-lg text-on-surface text-[24px] uppercase">The Writer</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1 group-hover:text-white transition-colors">For songwriters, lyricists & topliners.</p>
            </div>
          </div>

          {/* 4. Creative */}
          <div className="role-card md:col-span-6 row-span-1 bg-surface-container-low border border-outline-variant p-6 flex items-center gap-4 group hover:border-primary-container transition-colors duration-300">
            <div className="w-16 h-16 shrink-0 bg-surface flex items-center justify-center border border-outline-variant group-hover:bg-primary-container/20 transition-colors">
              <Paintbrush className="text-electric-purple w-8 h-8 group-hover:animate-pulse" />
            </div>
            <div className="group-hover:-translate-y-1 transition-transform duration-500">
              <h3 className="font-headline-lg text-headline-lg text-on-surface text-[24px] uppercase">The Creative</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1 group-hover:text-white transition-colors">For designers, editors & photographers.</p>
            </div>
          </div>

          {/* 5. Engineer */}
          <div className="role-card md:col-span-6 row-span-1 bg-surface-container-low border border-outline-variant p-6 flex items-center gap-4 group hover:border-primary-container transition-colors duration-300">
            <div className="w-16 h-16 shrink-0 bg-surface flex items-center justify-center border border-outline-variant group-hover:bg-primary-container/20 transition-colors">
              <SlidersHorizontal className="text-electric-purple w-8 h-8 group-hover:animate-pulse" />
            </div>
            <div className="group-hover:-translate-y-1 transition-transform duration-500">
              <h3 className="font-headline-lg text-headline-lg text-on-surface text-[24px] uppercase">The Engineer</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1 group-hover:text-white transition-colors">For mixing, mastering & audio engineers.</p>
            </div>
          </div>

          {/* 6. Director */}
          <div className="role-card md:col-span-6 row-span-1 bg-surface-container-low border border-outline-variant p-6 flex items-center gap-4 group hover:border-primary-container transition-colors duration-300">
            <div className="w-16 h-16 shrink-0 bg-surface flex items-center justify-center border border-outline-variant group-hover:bg-primary-container/20 transition-colors">
              <Clapperboard className="text-electric-purple w-8 h-8 group-hover:animate-pulse" />
            </div>
            <div className="group-hover:-translate-y-1 transition-transform duration-500">
              <h3 className="font-headline-lg text-headline-lg text-on-surface text-[24px] uppercase">The Director</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1 group-hover:text-white transition-colors">For visual direction & creative projects.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
