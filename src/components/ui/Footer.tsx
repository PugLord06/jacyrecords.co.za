import Link from "next/link";
import TransitionLink from "./TransitionLink";

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
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
          <div className="flex gap-4">
            <TransitionLink
              href="/privacy"
              className="font-label-bold text-label-bold text-muted-gray hover:text-electric-purple transition-colors uppercase"
            >
              PRIVACY POLICY
            </TransitionLink>
            <TransitionLink
              href="/terms"
              className="font-label-bold text-label-bold text-muted-gray hover:text-electric-purple transition-colors uppercase"
            >
              TERMS & CONDITIONS
            </TransitionLink>
          </div>
          <div className="font-label-bold text-label-bold text-muted-gray md:border-l border-outline-variant md:pl-4">
            © {new Date().getFullYear()} JACY RECORDS. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
