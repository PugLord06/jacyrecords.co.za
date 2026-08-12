import TransitionLink from "@/components/ui/TransitionLink";

type Socials = {
  spotify?: string;
  linktree?: string;
  youtube?: string;
};

type RosterMember = {
  name: string;
  title: string;
  image: string;
  description?: string;
  socials?: Socials;
  tba?: boolean;
};

type Category = {
  name: string;
  members: RosterMember[];
};

const ROSTER: Category[] = [
  {
    name: "Artists",
    members: [
      {
        name: "Toava",
        title: "Artist",
        image: "/images/roster/toava.jpg",
        description: "Toava is a South African singer, songwriter, and content creator known for his emotional vocals, original music, and engaging online presence. Blending heartfelt songwriting with modern sounds, Toava creates music that connects with listeners through raw emotion, relatable stories, and powerful performances across YouTube, Spotify, TikTok, and other platforms.",
        socials: {
          linktree: "https://linktr.ee/ToavaMusic",
          spotify: "https://open.spotify.com/artist/7vMZ1v67Siic15Ys5hXrkM?si=kE3dcXr_Rl-2tyuSC4TA8A&utm_source=copy-link",
        },
      },
    ],
  },
  {
    name: "In Development",
    members: [
      {
        name: "COMING SOON...",
        title: "TBA",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCBcBxf4QOhVAiWx369FrQGRtPLJ6BNr9cjTHBUrkrkkdPEQxVuUp-MvCyYR016taR7o4-2_elzMxCgAvDTTaX3J74EMxfdpnAtm-FLBP2vePh_MsB6Fn1XSE6QP8H13RL1jjoYTRA8m250fxrjvV6wc4ped91w6LbantkoLB5MdSH9JNi-rzaEL15nWdWfRhXt3Rwa7q33Hr-9Lo84HKzZZO5tuDMQPclI63AQQPT3Pwqq24W5m3t9",
        tba: true,
      },
      {
        name: "COMING SOON...",
        title: "TBA",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC9XUUXDP3c_i9PgkVs3jqT23sIY9UgkMRs0vDPAbzIuBD73uT3tsvROW7-NDTSsbtrQAb595o1mj6EyQbVUqPuBmNijhENU8O4ZBoPa1weT9qNjm8QdHLSwuPLFP06ZvoBpFb6YmtJx1WLUsuDpgXFYWvsG0sDnVQeh2Nmb2tMbti5eS0_YXJD7EU5lP3x_3OP1gPw648sHE9pibETGQAMFUXniOtvb4erdBElD_-iR94YO9iMJqay",
        tba: true,
      },
      {
        name: "COMING SOON...",
        title: "TBA",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBB01llp__yJD-6SiP0F5I5Jh5gu_QK81BHBluOeL0dSlTVtavh6lhZS9-c6RkkCW8tQDXRXsBpJgzZR6TKo6RqiI0CJgJXGVExcYqgxjZvvO8uso_1lxf6REiMxnklR6t40iicQEYxRInDeL72LbsclfLyijIXY1hgsLlQao2NZzJiHBl4OP-JqU2oXr0KuGBRNcJ4nPPwXkwyOM45nyljZ7-6Qj16Pyb1AzOT2dBenSipsPDrWMhm",
        tba: true,
      },
      {
        name: "COMING SOON...",
        title: "TBA",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBobp6PaM7b20ucfXuUhalOBpIsfTsUyPJNVDn_wRaA_Duot24WRYzlA26ikUGFNqylwKOCJxeBmuDmP5R_EBWWhlRfD7GHiU7kXS2k2rmceIxeuO22rKzvTKV-epBk7nMLOB160Gc-zNB-XHWYiUeimYMBHIxsIlseHZ64OaJXWpHPBrwMUZcQUtuutlox6kbvcHnb4AICL60h1THuU-KVM5z_8fmKsLJAgpPRpCEt3FNm9lsVfmy4",
        tba: true,
      },
    ],
  },
];

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.6 12.84c.361.181.54.84.361 1.2zM20.16 9.36C15.96 6.84 9.24 6.6 5.4 7.8c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.38-1.38 11.82-1.08 16.74 1.86.54.3 0 1.2-.3 1.8z" />
  </svg>
);

const LinktreeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M13.682 9.92h5.539L12 1.488 4.78 9.92h5.538l-7.391 8.65h5.539V22.5h3.068v-3.93h5.538l-7.391-8.65z" />
  </svg>
);

export default function RosterGrid() {
  return (
    <section className="py-stack-lg bg-deep-void border-t border-outline-variant">
      <div className="max-w-[1440px] mx-auto px-margin-edge md:px-[40px] px-[20px]">
        <div className="flex justify-between items-end mb-stack-lg">
          <div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase md:text-[64px] text-[48px]">
              Current Roster
            </h2>
            <div className="h-1 w-24 bg-electric-purple mt-2"></div>
          </div>
          <p className="font-label-bold text-label-bold text-muted-gray hidden md:block">
            02 / THE SYNDICATE
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {ROSTER.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="font-headline-lg text-headline-lg text-electric-purple mb-6 uppercase border-b border-outline-variant pb-2">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
                {category.members.map((member, index) => (
                  <div key={index} className="group flex flex-col h-full">
                    <div className="w-full aspect-square border border-outline-variant bg-surface mb-4 overflow-hidden relative shadow-[8px_8px_0px_#240046] group-hover:shadow-[12px_12px_0px_#240046] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                      <img
                        alt={member.name}
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          member.tba
                            ? "opacity-30 grayscale sepia hue-rotate-[250deg] saturate-[300%] brightness-80 contrast-150 group-hover:grayscale-0 group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100"
                            : "grayscale group-hover:grayscale-0"
                        }`}
                        src={member.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-void via-transparent to-transparent opacity-80 pointer-events-none"></div>
                      
                      <div className="absolute bottom-2 right-2 flex flex-col items-end gap-2">
                        {member.tba && (
                          <span className="font-label-sm text-label-sm bg-surface text-primary px-2 py-1 border border-primary">
                            TBA
                          </span>
                        )}
                        {!member.tba && member.socials && (
                          <div className="flex gap-2 bg-surface/80 backdrop-blur-sm p-2 rounded border border-outline-variant opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            {member.socials.spotify && (
                              <a href={member.socials.spotify} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1DB954] transition-colors" title="Spotify">
                                <SpotifyIcon />
                              </a>
                            )}
                            {member.socials.linktree && (
                              <a href={member.socials.linktree} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#43E660] transition-colors" title="Linktree">
                                <LinktreeIcon />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <h4 className={`font-headline-lg text-headline-lg text-[24px] uppercase transition-colors ${member.tba ? "text-muted-gray group-hover:text-electric-purple" : "text-white"}`}>
                      {member.name}
                    </h4>
                    {!member.tba && (
                      <>
                        <p className="font-label-bold text-label-bold text-primary mb-2">
                          {member.title}
                        </p>
                        {member.description && (
                          <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                            {member.description}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                ))}

                {/* Add "Open Slot" CTA only to the last category if it makes sense, or maybe just at the end of the roster */}
                {catIndex === ROSTER.length - 1 && (
                  <div className="group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                    <TransitionLink href="/contact">
                      <div className="w-full aspect-square border border-dashed border-outline-variant bg-surface-container-low mb-4 flex flex-col items-center justify-center relative hover:border-electric-purple transition-colors">
                        <span
                          className="material-symbols-outlined text-4xl text-outline mb-2 group-hover:text-electric-purple"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          add
                        </span>
                        <span className="font-label-bold text-label-bold text-outline group-hover:text-electric-purple">
                          NEXT INTAKE
                        </span>
                      </div>
                      <h4 className="font-headline-lg text-headline-lg text-[24px] text-outline uppercase">
                        YOU?
                      </h4>
                    </TransitionLink>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
