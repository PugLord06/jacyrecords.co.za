"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FounderSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".founder-reveal", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-stack-lg bg-surface border-t border-outline-variant relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(123, 44, 191, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(123, 44, 191, 0.2) 1px, transparent 1px)",
        }}
      ></div>

      <div className="max-w-[1440px] mx-auto px-margin-edge md:px-[40px] px-[20px] relative z-10">
        <div className="flex flex-col md:flex-row gap-gutter items-center">
          
          {/* Image Side */}
          <div className="w-full md:w-5/12 founder-reveal">
            <div className="relative border-2 border-outline-variant shadow-[12px_12px_0px_#240046] overflow-hidden group">
              <div className="absolute inset-0 bg-electric-purple/20 mix-blend-overlay z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0"></div>
              <img 
                src="/jacy.png" 
                alt="Jacy Anthony - Founder" 
                className="w-full h-auto object-cover aspect-[4/5] grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-700 transform-gpu"
              />
              <div className="absolute bottom-0 left-0 bg-surface/90 backdrop-blur border-t border-r border-outline-variant px-4 py-2 z-20">
                <span className="font-label-bold text-label-bold text-electric-purple tracking-widest uppercase">
                  DIRECTOR_01
                </span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-7/12 flex flex-col justify-center founder-reveal mt-8 md:mt-0 md:pl-8">
            <span className="font-label-bold text-label-bold text-muted-gray uppercase tracking-widest mb-4 block">
              The Architect
            </span>
            <h2 className="font-display-lg text-display-lg text-on-surface uppercase leading-none tracking-tighter mb-2 text-[48px] md:text-[80px]" style={{ textShadow: "4px 4px 0px #240046" }}>
              JACY<br/>ANTHONY
            </h2>
            <div className="h-1 w-24 bg-electric-purple mb-8"></div>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-6">
              A streamer, visionary, and the driving force behind Jacy Records. What started as a solo endeavor has evolved into a full-scale infrastructure for radical audio and visual expression.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-8">
              "We don't just make music. We architect sonic experiences. We build the environment where creatives can thrive without compromise."
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://twitch.tv/itsjacyanthony" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-transparent border border-electric-purple text-electric-purple font-headline-lg px-6 py-3 uppercase tracking-wide hover:bg-electric-purple hover:text-deep-void transition-colors duration-300"
              >
                Watch Live
              </a>
              <a 
                href="https://www.instagram.com/itsjacyanthony/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-transparent border border-outline-variant text-on-surface font-headline-lg px-6 py-3 uppercase tracking-wide hover:border-on-surface transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
