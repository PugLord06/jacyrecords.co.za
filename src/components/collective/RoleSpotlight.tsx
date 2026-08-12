export default function RoleSpotlight() {
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
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[200px]">
          {/* 1. Artist */}
          <div className="md:col-span-8 row-span-2 bg-surface-container-low border border-outline-variant p-6 flex flex-col justify-end relative overflow-hidden group hover:border-primary-container transition-colors duration-300 shadow-[8px_8px_0px_#240046] hover:shadow-[12px_12px_0px_#240046] hover:-translate-x-1 hover:-translate-y-1">
            <div className="absolute inset-0 z-0">
              <img
                alt="Artist Role"
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale sepia hue-rotate-[250deg] saturate-[300%] brightness-80 contrast-150 group-hover:grayscale-0 group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgCnsAM9G-TDvxhhIO618FiLUrxhccjtfxNHrP8R5Hr7DvQnW-c0_Wqg3sdF16GBEo4j6VFDvNDWVVoInRw8odBoY5C61n3jyjaIdq2bYhsLPMt4xaAfSFSIGAc2h1Rl0QnhJgoblCRL7Z-WB5qXNjUsLRt-7m4x5n1_fRq01Ls30JmEFt0zpcGndcyBrXJK2zyjhNPTAr9_SQLDBqt5BTaxJG59VBYqdwbkutKeQVP0jmthV9iPAf"
              />
            </div>
            <div className="absolute top-6 right-6 z-10 bg-surface/80 backdrop-blur px-3 py-1 border border-outline-variant">
              <span className="font-label-sm text-label-sm text-primary">01</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-2 flex items-center gap-2">
                <span>🎤</span> ARTIST
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                For rappers, singers & recording artists.
              </p>
            </div>
          </div>

          {/* 2. Producer */}
          <div className="md:col-span-4 row-span-2 bg-surface-container-highest border border-outline-variant p-6 flex flex-col relative group hover:bg-surface-variant transition-colors duration-300">
            <div className="absolute top-6 right-6 z-10 bg-surface/80 backdrop-blur px-3 py-1 border border-outline-variant">
              <span className="font-label-sm text-label-sm text-primary">02</span>
            </div>
            <div className="flex-grow flex flex-col justify-end pb-4">
              <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-2 flex items-center gap-2">
                <span>🎹</span> PRODUCER
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                For beatmakers & producers.
              </p>
            </div>
          </div>

          {/* 3. Writer */}
          <div className="md:col-span-4 row-span-1 bg-surface-container-low border border-outline-variant p-6 flex flex-col justify-center group hover:border-primary-container transition-colors duration-300 relative">
             <div className="absolute top-4 right-4 z-10">
              <span className="font-label-sm text-label-sm text-muted-gray">03</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface text-[24px] uppercase flex items-center gap-2">
              <span>✍️</span> WRITER
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
              For songwriters, lyricists & topliners.
            </p>
          </div>
          
          {/* 4. Creative */}
          <div className="md:col-span-4 row-span-1 bg-surface-container-low border border-outline-variant p-6 flex flex-col justify-center group hover:border-primary-container transition-colors duration-300 relative">
             <div className="absolute top-4 right-4 z-10">
              <span className="font-label-sm text-label-sm text-muted-gray">04</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface text-[24px] uppercase flex items-center gap-2">
              <span>🎨</span> CREATIVE
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
              For designers, editors, photographers & other creatives.
            </p>
          </div>

          {/* 5. Engineer */}
          <div className="md:col-span-4 row-span-1 bg-surface-container-low border border-outline-variant p-6 flex flex-col justify-center group hover:border-primary-container transition-colors duration-300 relative">
             <div className="absolute top-4 right-4 z-10">
              <span className="font-label-sm text-label-sm text-muted-gray">05</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface text-[24px] uppercase flex items-center gap-2">
              <span>🎧</span> ENGINEER
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
              For mixing, mastering & audio engineers.
            </p>
          </div>

          {/* 6. Director */}
          <div className="md:col-span-6 row-span-1 bg-surface-container-low border border-outline-variant p-6 flex flex-col justify-center group hover:border-primary-container transition-colors duration-300 relative">
             <div className="absolute top-4 right-4 z-10">
              <span className="font-label-sm text-label-sm text-muted-gray">06</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface text-[24px] uppercase flex items-center gap-2">
              <span>🎬</span> DIRECTOR
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
              For people involved in videos, visual direction & creative projects.
            </p>
          </div>

          {/* 7. Records Member */}
          <div className="md:col-span-6 row-span-1 bg-surface-container-low border border-outline-variant p-6 flex flex-col justify-center group hover:border-primary-container transition-colors duration-300 relative">
             <div className="absolute top-4 right-4 z-10">
              <span className="font-label-sm text-label-sm text-muted-gray">07</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface text-[24px] uppercase flex items-center gap-2">
              <span className="text-electric-purple drop-shadow-[0_0_8px_rgba(123,44,191,0.8)]">⭐</span> RECORDS MEMBER
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
              The overall role everyone accepted into the collective gets.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
