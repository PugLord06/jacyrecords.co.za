import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-background/80 backdrop-blur-md dark:bg-background/80 docked w-full top-0 sticky z-50 border-b border-outline-variant shadow-[0px_4px_20px_rgba(157,78,221,0.15)] transition-all duration-300">
      <div className="flex justify-between items-center w-full px-margin-edge py-6 max-w-[1440px] mx-auto">
        <Link
          className="font-headline-xl text-headline-xl text-on-background tracking-tighter hover:text-primary transition-colors"
          href="/"
        >
          JACY RECORDS
        </Link>
        <div className="hidden md:flex gap-gutter items-center">
          <Link
            className="font-headline-lg text-headline-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors duration-300 hover:bg-surface-variant/20 px-4 py-2 rounded"
            href="/services"
          >
            SERVICES
          </Link>
          <Link
            className="font-headline-lg text-headline-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors duration-300 hover:bg-surface-variant/20 px-4 py-2 rounded"
            href="/portfolio"
          >
            PORTFOLIO
          </Link>
          <Link
            className="font-headline-lg text-headline-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors duration-300 hover:bg-surface-variant/20 px-4 py-2 rounded"
            href="/collective"
          >
            ARTISTS
          </Link>
          <Link
            className="font-headline-lg text-headline-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors duration-300 hover:bg-surface-variant/20 px-4 py-2 rounded"
            href="/contact"
          >
            CONTACT
          </Link>
        </div>
        <Link
          href="/contact"
          className="hidden md:inline-block bg-primary-container text-deep-void font-headline-lg text-headline-lg px-8 py-3 rounded btn-3d tracking-wider"
        >
          AUDITION NOW
        </Link>
        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-primary">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1", fontSize: "32px" }}
          >
            menu
          </span>
        </button>
      </div>
    </nav>
  );
}
