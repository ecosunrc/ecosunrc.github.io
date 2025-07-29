'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { TypeLink } from './Links';

interface DropdownProps {
  name: string;
  linksDropdown: TypeLink[];
};

export default function Dropdown({ name, linksDropdown }: DropdownProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState<boolean>(true);
  const pathname = usePathname().split('/')[1];

  return (
    <div onMouseLeave={() => setIsSidebarCollapsed(true)} className='relative cursor-pointer items-center justify-center w-fit' >
      <div
        onMouseEnter={() => setIsSidebarCollapsed(false)}
        className={`text-lg p-3 hover:text-white ${isSidebarCollapsed? '' : 'bg-base1 shadow-md'} ${pathname === 'editions' ? 'bg-base1 underline font-bold' : ''} transition-all duration-300`}
      >
        <Link href='/editions' >
          {name}
        </Link>
      </div>
      <div className='absolute grid bg-white shadow-lg z-10 text-black w-full' >
        {!isSidebarCollapsed && linksDropdown.map((link) => 
          (
            <Link
              key={link.name}
              href={link.href}
              className={`${pathname === link.href.split('/')[1] ? 'bg-base1 text-white' : 'hover:bg-base1 hover:text-white'} p-2`}
            >
              {link.name}
            </Link>
          )
        )}
      </div>
    </div>
  );
}