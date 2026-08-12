import Link from "next/link";
import DiscordOnlineCount from "@/components/ui/DiscordOnlineCount";

export default function Contact() {
  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-margin-edge md:px-[40px] px-[20px] py-stack-lg md:py-[120px] py-[80px] flex flex-col items-center justify-center relative min-h-[75vh]">
      <div
        className="absolute inset-0 opacity-50 z-0 pointer-events-none"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(123, 44, 191, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(123, 44, 191, 0.15) 1px, transparent 1px)",
        }}
      ></div>
      <div className="z-10 relative bg-[#0F0F0F]/80 border-2 border-[#240046] shadow-[12px_12px_0px_#240046] p-stack-md md:p-stack-lg flex flex-col items-center text-center max-w-4xl w-full backdrop-blur-sm">
        <div className="mb-6 flex justify-center">
          <span
            className="material-symbols-outlined text-6xl text-electric-purple"
            style={{ filter: "drop-shadow(0 0 15px rgba(123, 44, 191, 0.5))" }}
          >
            forum
          </span>
        </div>
        <span className="font-label-bold text-label-bold text-primary tracking-[0.2em] uppercase mb-4 block">
          Access Granted: Next Intake Cycle
        </span>
        <h1
          className="font-display-lg text-display-lg text-on-surface uppercase mb-6 leading-none tracking-tighter"
          style={{ textShadow: "6px 6px 0px #7B2CBF, -2px -2px 0px #240046" }}
        >
          JOIN THE SYNDICATE
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl text-xl">
          We don't accept standard resumes or transmission forms. Discord is our
          primary hub for auditions, raw networking, and the next artist intake
          cycle. Drop your stems, share your mixes, and connect directly with
          the roster. Show us what you can build in the dark.
        </p>
        <a
          className="bg-primary-container text-deep-void shadow-[8px_8px_0px_#240046] hover:shadow-[6px_6px_0px_#240046] hover:translate-x-[2px] hover:translate-y-[2px] hover:drop-shadow-[0_0_25px_rgba(123,44,191,0.8)] active:shadow-none active:translate-x-[8px] active:translate-y-[8px] transition-all duration-200 inline-flex items-center justify-center w-full md:w-auto px-12 py-6 font-headline-lg text-headline-lg text-3xl uppercase tracking-wider group"
          href="https://discord.gg/DjkyCQYcWj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined mr-4 text-4xl group-hover:animate-pulse">
            tag
          </span>
          JOIN THE SERVER
        </a>
        <div className="mt-8 flex items-center justify-center gap-3 bg-surface-container-low border border-outline-variant px-6 py-3">
          <DiscordOnlineCount inviteCode="DjkyCQYcWj" />
        </div>
      </div>
    </main>
  );
}

