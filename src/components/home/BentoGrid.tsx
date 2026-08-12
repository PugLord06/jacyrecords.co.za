"use client";

import TransitionLink from "@/components/ui/TransitionLink";
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
        {/* Main Feature Box: The Stream */}
        <div
          ref={gridItemRef}
          className="bento-item col-span-1 md:col-span-8 bg-surface-container border border-outline-variant rounded-xl p-8 relative overflow-hidden group hover:border-electric-purple transition-colors duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/10 to-deep-void opacity-80 z-0 pointer-events-none"></div>
          
          {/* Animated Background Texture instead of a weird image */}
          <div 
            ref={parallaxImgRef}
            className="absolute inset-0 z-0 opacity-20 pointer-events-none"
            style={{
              backgroundSize: "30px 30px",
              backgroundImage:
                "linear-gradient(to right, rgba(123, 44, 191, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(123, 44, 191, 0.4) 1px, transparent 1px)",
            }}
          ></div>

          <div className="relative z-10 h-full flex flex-col justify-end pointer-events-none">
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-electric-purple"></span>
              </span>
              <h2 className="font-headline-xl text-headline-xl text-primary m-0">
                LIVE BROADCAST
              </h2>
            </div>
            
            <p className="font-body-md text-body-md text-on-surface max-w-lg mb-6">
              Catch the stream live. We broadcast everything from high-energy gaming sessions to late-night studio cooking. This is where the community connects in real-time.
            </p>
            <a
              href="https://twitch.tv/itsjacyanthony"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-bold text-label-bold text-white flex items-center gap-2 hover:text-electric-purple transition-colors w-fit pointer-events-auto bg-surface-container-high px-6 py-3 rounded border border-outline-variant hover:border-electric-purple"
            >
              WATCH ON TWITCH{" "}
              <span className="material-symbols-outlined text-sm">
                open_in_new
              </span>
            </a>
          </div>
        </div>
        
        {/* Secondary Boxes */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-gutter">
          {/* Discord Community Box */}
          <a 
            href="https://discord.gg/DjkyCQYcWj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bento-item bg-surface-container border border-outline-variant rounded-xl p-8 flex-1 flex flex-col justify-center items-center text-center hover:border-primary hover:bg-surface-container-high transition-all group"
          >
            <span
              className="material-symbols-outlined text-5xl text-electric-purple mb-4 group-hover:scale-110 transition-transform"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              forum
            </span>
            <h3 className="font-headline-lg text-headline-lg text-white mb-2 uppercase">
              The Syndicate
            </h3>
            <p className="font-label-bold text-label-bold text-muted-gray uppercase mb-4">
              Join The Discord
            </p>
            <span className="font-label-sm text-electric-purple bg-electric-purple/10 px-3 py-1 rounded-full flex items-center gap-2 border border-electric-purple/30">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              ACTIVE NOW
            </span>
          </a>
          
          {/* Socials / Content Hub */}
          <div className="bento-item bg-surface-container border border-outline-variant rounded-xl p-8 flex-1 flex flex-col justify-center">
            <h3 className="font-headline-lg text-headline-lg text-white mb-4 uppercase">
              CONTENT HUB
            </h3>
            <div className="flex flex-wrap gap-2">
              <a 
                href="https://www.youtube.com/channel/UCXqvTuRf-kD5WKEMfJl4cQQ"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white font-label-sm text-label-sm px-3 py-1 rounded bg-transparent hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                YOUTUBE
              </a>
              <a 
                href="https://tiktok.com/@itsjacyanthony"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white font-label-sm text-label-sm px-3 py-1 rounded bg-transparent hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                TIKTOK
              </a>
              <a 
                href="https://www.instagram.com/itsjacyanthony/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white font-label-sm text-label-sm px-3 py-1 rounded bg-transparent hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                INSTAGRAM
              </a>
              <a 
                href="https://twitch.tv/itsjacyanthony"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white font-label-sm text-label-sm px-3 py-1 rounded bg-transparent hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                TWITCH
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
