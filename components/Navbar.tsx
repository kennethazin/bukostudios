"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import PropTypes from "prop-types"; // ES6

export default function Navbar() {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold"
        prefetch={false}
      >
        <Logo className="h-20 w-20 flex p-5" />
        <span className="text-4xl tracking-[-0.12em]">witespace studios</span>
      </Link>
      <nav className="hidden items-center gap-10 md:flex font-extralight">
        <Link
          href="/info"
          className="text-s  transition-colors hover:text-primary"
          prefetch={false}
        >
          [info]
        </Link>
        <Link
          href="/work"
          className="text-s  transition-colors hover:text-primary"
          prefetch={false}
        >
          [work]
        </Link>
        <Link
          href="/inquiry"
          className="text-s  transition-colors hover:text-primary"
          prefetch={false}
        >
          [inquiry]
        </Link>
        <Link
          href="/about"
          className="text-s  transition-colors hover:text-primary"
          prefetch={false}
        >
          [about]
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden ">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="grid gap-4 p-4 font-extralight">
            <span className="text-2xl tracking-[-0.12em] font-medium">
              witespace studios
            </span>
            <Link
              href="/info"
              className="text-s  transition-colors hover:text-primary"
              prefetch={false}
            >
              [info]
            </Link>
            <Link
              href="/work"
              className="text-s  transition-colors hover:text-primary"
              prefetch={false}
            >
              [work]
            </Link>
            <Link
              href="/inquiry"
              className="text-s  transition-colors hover:text-primary"
              prefetch={false}
            >
              [inquiry]
            </Link>
            <Link
              href="/about"
              className="text-s  transition-colors hover:text-primary"
              prefetch={false}
            >
              [about]
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function Logo(props: any) {
  return (
    <svg
      {...props}
      width="150"
      height="150"
      viewBox="0 0 216 238"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M169.582 235.029C165.05 238.968 158.199 237.509 154.737 232.603C152.148 228.934 149.35 225.361 146.341 221.9C116.395 187.451 72.6079 172.103 30.2711 176.879C15.5777 178.536 0.830296 168.13 0.830301 153.343L0.830299 37.9245C0.830299 31.217 3.91368 24.7973 9.55906 21.175C64.5858 -14.1321 138.628 -4.6741 182.791 46.13C231.306 101.941 225.393 186.514 169.582 235.029Z"
        fill="#EBEBEB"
      />
    </svg>
  );
}
