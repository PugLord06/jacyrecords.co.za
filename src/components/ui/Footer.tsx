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
            href="#"
          >
            INSTAGRAM
          </Link>
          <Link
            className="font-label-bold text-label-bold text-muted-gray hover:text-electric-purple transition-colors uppercase"
            href="#"
          >
            TIKTOK
          </Link>
          <Link
            className="font-label-bold text-label-bold text-muted-gray hover:text-electric-purple transition-colors uppercase"
            href="#"
          >
            YOUTUBE
          </Link>
          <Link
            className="font-label-bold text-label-bold text-muted-gray hover:text-electric-purple transition-colors uppercase"
            href="#"
          >
            DISCORD
          </Link>
          <Link
            className="font-label-bold text-label-bold text-muted-gray hover:text-electric-purple transition-colors uppercase"
            href="#"
          >
            PRIVACY
          </Link>
          <Link
            className="font-label-bold text-label-bold text-muted-gray hover:text-electric-purple transition-colors uppercase"
            href="#"
          >
            TERMS
          </Link>
        </div>
        <div className="font-label-bold text-label-bold text-muted-gray text-center md:text-right">
          © {new Date().getFullYear()} JACY RECORDS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
