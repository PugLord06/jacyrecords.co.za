import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deep-void dark:bg-deep-void w-full py-stack-md border-t border-outline-variant mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-edge max-w-[1440px] mx-auto gap-gutter">
        <div className="font-headline-lg text-headline-lg text-primary tracking-tighter">
          JACY RECORDS
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <Link
            className="font-label-bold text-label-bold text-muted-gray hover:text-electric-purple transition-colors uppercase"
            href="https://twitch.tv/itsjacyanthony"
            target="_blank"
          >
            TWITCH 🟣
          </Link>
          <Link
            className="font-label-bold text-label-bold text-muted-gray hover:text-electric-purple transition-colors uppercase"
            href="https://tiktok.com/@itsjacyanthony"
            target="_blank"
          >
            TIKTOK
          </Link>
          <Link
            className="font-label-bold text-label-bold text-muted-gray hover:text-electric-purple transition-colors uppercase"
            href="https://www.youtube.com/channel/UCXqvTuRf-kD5WKEMfJl4cQQ"
            target="_blank"
          >
            YOUTUBE
          </Link>
          <Link
            className="font-label-bold text-label-bold text-muted-gray hover:text-electric-purple transition-colors uppercase"
            href="https://discord.gg/DjkyCQYcWj"
            target="_blank"
          >
            DISCORD
          </Link>
          <Link
            className="font-label-bold text-label-bold text-muted-gray hover:text-electric-purple transition-colors uppercase"
            href="https://www.instagram.com/itsjacyanthony/"
            target="_blank"
          >
            INSTAGRAM
          </Link>
        </div>
        <div className="font-label-bold text-label-bold text-muted-gray text-center md:text-right">
          © {new Date().getFullYear()} JACY RECORDS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
