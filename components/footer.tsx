import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold">VIVO</div>
            <div className="text-sm text-gray-500">Une interface simple pour candidater et simuler vos revenus VTC.</div>
          </div>
          <div className="flex gap-3 text-sm text-gray-600">
            <Link className="hover:text-black" href="/simulateur">Simulateur</Link>
            <Link className="hover:text-black" href="/candidature">Candidature</Link>
            <Link className="hover:text-black" href="/admin">Dashboard</Link>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} VIVO. Tous droits réservés.</div>
      </div>
    </footer>
  );
}
