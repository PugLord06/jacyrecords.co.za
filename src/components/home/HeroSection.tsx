"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const container = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      // Simple stagger for the title letters
      if (headlineRef.current) {
        const letters = headlineRef.current.querySelectorAll("span");
        gsap.set(letters, { y: 100, opacity: 0 });
        tl.to(letters, {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
        });
      }

      // Fade up the paragraph and buttons
      tl.fromTo(
        ".hero-fade-up",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
        },
        "-=0.5"
      );

      // Pulse background elements
      gsap.to(".hero-bg-blob", {
        scale: 1.1,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    },
    { scope: container }
  );

  const title = "JACY RECORDS";

  return (
    <section
      ref={container}
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-margin-edge py-stack-lg overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="hero-bg-blob absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-primary-container rounded-full mix-blend-screen filter blur-[100px]"></div>
        <div className="hero-bg-blob absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-electric-purple rounded-full mix-blend-screen filter blur-[120px] opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-[1200px] mx-auto flex flex-col items-center">
        <h1
          ref={headlineRef}
          className="font-display-lg text-display-lg text-white mb-stack-sm uppercase text-3d transition-all duration-300 flex overflow-hidden"
        >
          {title.split("").map((char, index) => (
            <span key={index} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="hero-fade-up font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-stack-md mx-auto text-center">
          Where raw energy meets refined production. We build anthems for the
          digital age, crafting sonic landscapes that cut through the noise
          and demand attention.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="hero-fade-up bg-primary-container text-deep-void font-headline-lg text-headline-lg px-10 py-4 rounded btn-3d tracking-wider flex items-center gap-2 hover:scale-105 transition-transform duration-300">
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
            className="hero-fade-up bg-transparent border-2 border-white text-white font-headline-lg text-headline-lg px-10 py-4 rounded hover:bg-white hover:text-deep-void transition-colors btn-3d tracking-wider hover:scale-105 duration-300"
          >
            EXPLORE ROSTER
          </Link>
        </div>
      </div>
      
      {/* Floating Elements / Visual Interest */}
      <div className="hero-fade-up absolute bottom-10 w-full flex justify-center animate-bounce z-10">
        <span className="material-symbols-outlined text-primary text-4xl">
          keyboard_arrow_down
        </span>
      </div>
    </section>
  );
}
