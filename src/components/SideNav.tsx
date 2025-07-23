'use client';
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";
import Link from "next/link";
import { TypeLink } from "./Links";


interface SideNavProps {
  linksNav: TypeLink[];
  linksDropdown: TypeLink[];
}

export default function SideNav({ linksNav, linksDropdown }: SideNavProps) {
  const pathname = usePathname().split("/")[1];
 
  return (
    <nav className="navigation flex-1 flex justify-end text-white items-center h-full">
      <Dropdown
        name="Ediciones"
        linksDropdown={linksDropdown} 
      />
      {linksNav.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`text-lg p-3 hover:bg-base2 transition-all duration-300 ${pathname === link.href.split("/")[1] ? 'text-base1 underline font-bold' : ''}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
