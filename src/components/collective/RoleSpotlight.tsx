export default function RoleSpotlight() {
  const roles = [
    {
      title: "ARTIST",
      desc: "For rappers, singers & recording artists.",
      icon: "mic_external_on",
      colSpan: "md:col-span-12",
      bg: "bg-surface-container-highest",
    },
    {
      title: "PRODUCER",
      desc: "For beatmakers & producers.",
      icon: "graphic_eq",
      colSpan: "md:col-span-6",
      bg: "bg-surface-container-low",
    },
    {
      title: "WRITER",
      desc: "For songwriters, lyricists & topliners.",
      icon: "edit_note",
      colSpan: "md:col-span-6",
      bg: "bg-surface-container-low",
    },
    {
      title: "CREATIVE",
      desc: "For designers, editors, photographers & other creatives.",
      icon: "palette",
      colSpan: "md:col-span-4",
      bg: "bg-surface-variant",
    },
    {
      title: "ENGINEER",
      desc: "For mixing, mastering & audio engineers.",
      icon: "tune",
      colSpan: "md:col-span-4",
      bg: "bg-surface-variant",
    },
    {
      title: "DIRECTOR",
      desc: "For people involved in videos, visual direction & creative projects.",
      icon: "movie",
      colSpan: "md:col-span-4",
      bg: "bg-surface-variant",
    },
    {
      title: "RECORDS MEMBER",
      desc: "The overall role everyone accepted into the collective gets.",
      icon: "stars",
      colSpan: "md:col-span-12",
      bg: "bg-electric-purple/20 border-electric-purple/50",
    },
  ];

  return (
    <section className="py-stack-lg bg-surface relative">
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
              className={`${role.colSpan} ${role.bg} border border-outline-variant p-6 flex flex-col justify-center relative group hover:border-primary-container transition-all duration-300 shadow-[4px_4px_0px_#240046] hover:shadow-[8px_8px_0px_#240046] hover:-translate-y-1`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-deep-void flex items-center justify-center rounded-sm">
                  <span
                    className="material-symbols-outlined text-2xl text-electric-purple"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {role.icon}
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase m-0">
                  {role.title}
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {role.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
