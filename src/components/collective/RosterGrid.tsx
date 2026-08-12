import TransitionLink from "@/components/ui/TransitionLink";

type Socials = {
  spotify?: string;
  linktree?: string;
  youtube?: string;
  instagram?: string;
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
      {
        name: "JTR",
        title: "Artist",
        image: "/images/roster/jtr.png",
        description: "JTR is a South African artist blending pluggnb, melodic rap, and dreamy digital textures. His music is colorful, nostalgic, emotional, and unapologetically youthful, turning memories of love, and growing pains into something you can feel.\n\nListen loud. Feel everything :3",
        socials: {
          instagram: "https://www.instagram.com/judetylerraven?igsh=MTBldHJwdzdqc2dubQ==",
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
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const LinktreeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
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
                            {member.socials.instagram && (
                              <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E4405F] transition-colors pointer-events-auto" title="Instagram">
                                <InstagramIcon />
                              </a>
                            )}
                            {member.socials.spotify && (
                              <a href={member.socials.spotify} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1DB954] transition-colors pointer-events-auto" title="Spotify">
                                <SpotifyIcon />
                              </a>
                            )}
                            {member.socials.linktree && (
                              <a href={member.socials.linktree} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#43E660] transition-colors pointer-events-auto" title="Linktree">
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
                          <p className="font-body-md text-body-md text-on-surface-variant flex-grow whitespace-pre-line">
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
