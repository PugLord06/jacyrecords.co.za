import Link from "next/link";

const ROSTER_MEMBERS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCBcBxf4QOhVAiWx369FrQGRtPLJ6BNr9cjTHBUrkrkkdPEQxVuUp-MvCyYR016taR7o4-2_elzMxCgAvDTTaX3J74EMxfdpnAtm-FLBP2vePh_MsB6Fn1XSE6QP8H13RL1jjoYTRA8m250fxrjvV6wc4ped91w6LbantkoLB5MdSH9JNi-rzaEL15nWdWfRhXt3Rwa7q33Hr-9Lo84HKzZZO5tuDMQPclI63AQQPT3Pwqq24W5m3t9",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC9XUUXDP3c_i9PgkVs3jqT23sIY9UgkMRs0vDPAbzIuBD73uT3tsvROW7-NDTSsbtrQAb595o1mj6EyQbVUqPuBmNijhENU8O4ZBoPa1weT9qNjm8QdHLSwuPLFP06ZvoBpFb6YmtJx1WLUsuDpgXFYWvsG0sDnVQeh2Nmb2tMbti5eS0_YXJD7EU5lP3x_3OP1gPw648sHE9pibETGQAMFUXniOtvb4erdBElD_-iR94YO9iMJqay",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBB01llp__yJD-6SiP0F5I5Jh5gu_QK81BHBluOeL0dSlTVtavh6lhZS9-c6RkkCW8tQDXRXsBpJgzZR6TKo6RqiI0CJgJXGVExcYqgxjZvvO8uso_1lxf6REiMxnklR6t40iicQEYxRInDeL72LbsclfLyijIXY1hgsLlQao2NZzJiHBl4OP-JqU2oXr0KuGBRNcJ4nPPwXkwyOM45nyljZ7-6Qj16Pyb1AzOT2dBenSipsPDrWMhm",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBobp6PaM7b20ucfXuUhalOBpIsfTsUyPJNVDn_wRaA_Duot24WRYzlA26ikUGFNqylwKOCJxeBmuDmP5R_EBWWhlRfD7GHiU7kXS2k2rmceIxeuO22rKzvTKV-epBk7nMLOB160Gc-zNB-XHWYiUeimYMBHIxsIlseHZ64OaJXWpHPBrwMUZcQUtuutlox6kbvcHnb4AICL60h1THuU-KVM5z_8fmKsLJAgpPRpCEt3FNm9lsVfmy4"
];

export default function RosterGrid() {
  return (
    <section className="py-stack-lg bg-deep-void border-t border-outline-variant">
      <div className="max-w-[1440px] mx-auto px-margin-edge md:px-[40px] px-[20px]">
        <div className="flex justify-between items-end mb-stack-md">
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter">
          {ROSTER_MEMBERS.map((src, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="w-full aspect-square border border-outline-variant bg-surface mb-3 overflow-hidden relative shadow-[8px_8px_0px_#240046] group-hover:shadow-[12px_12px_0px_#240046] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <img
                  alt="Coming Soon"
                  className="w-full h-full object-cover opacity-30 grayscale sepia hue-rotate-[250deg] saturate-[300%] brightness-80 contrast-150 group-hover:grayscale-0 group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-300"
                  src={src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-void via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-2 right-2">
                  <span className="font-label-sm text-label-sm bg-surface text-primary px-2 py-1 border border-primary">
                    TBA
                  </span>
                </div>
              </div>
              <h4 className="font-headline-lg text-headline-lg text-[20px] text-on-surface uppercase group-hover:text-electric-purple transition-colors">
                COMING SOON...
              </h4>
            </div>
          ))}

          {/* Open Slot */}
          <div className="group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
            <Link href="/contact">
              <div className="w-full aspect-square border border-dashed border-outline-variant bg-surface-container-low mb-3 flex flex-col items-center justify-center relative hover:border-electric-purple transition-colors">
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
              <h4 className="font-headline-lg text-headline-lg text-[20px] text-outline uppercase">
                YOU?
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
