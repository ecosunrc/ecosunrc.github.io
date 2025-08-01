'use client';
import { usePathname } from 'next/navigation';
import Dropdown from './Dropdown';
import Link from 'next/link';
import { TypeLink } from './Links';

interface SideNavProps {
  linksNav: TypeLink[];
  linksDropdown: TypeLink[];
}

export default function SideNav({ linksNav, linksDropdown }: SideNavProps) {
  const pathname = usePathname().split('seccion/')[1];

  return (
    <nav
      className='navigation flex flex-1 justify-end items-center h-full gap-4 px-2'
    >
      <Dropdown
        name='Ediciones'
        linksDropdown={linksDropdown}
      />
      {linksNav.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`hover:underline hover:scale-105 text-lg p-3 ${
            pathname === link.href.split('seccion/')[1]
              ? 'underline'
              : ''
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
