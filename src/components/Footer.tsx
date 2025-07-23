'use client';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="row-start-3 flex flex-wrap items-center justify-between bg-black text-white py-3 px-16">
      <div className="flex items-center gap-4">
        <Image
          src="/logounrc.svg"
          alt="Logo de la revista"
          width={30}
          height={40}
          priority
        />
        <Image
          src="/logo.svg"
          alt="Logo de la revista"
          width={100}
          height={40}
          priority
        />
      </div>
      <span className="text-lg">© 2025 ECOS U.N.R.C</span>
    </footer>
  );
}