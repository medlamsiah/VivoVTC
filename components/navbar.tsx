"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={clsx(
        "rounded-xl px-3 py-2 text-sm font-medium transition",
        active ? "text-vivo" : "text-gray-700 hover:bg-gray-100"
      )}
    >
      {children}
    </Link>
  );
};

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-9 w-11">
            <Image
              src="/brand/logo.jpeg"
              alt="Logo VIVO"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">VIVO</div>
            <div className="text-xs text-gray-500">Devenir Chauffeur VTC</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          <NavLink href="/">Accueil</NavLink>
          <NavLink href="/simulateur">Simulateur</NavLink>
          <NavLink href="/candidature">Candidature</NavLink>
          <NavLink href="/admin">Dashboard</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/simulateur" className="btn hidden sm:inline-flex">
            Simuler mes revenus
          </Link>
          <Link href="/candidature" className="btn btn-primary">
            Candidater
          </Link>
        </div>
      </div>
    </header>
  );
}
