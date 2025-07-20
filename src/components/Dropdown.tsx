'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { TypeLink } from './Links';

interface DropdownProps {
  name: string;
  linksDropdown: TypeLink[];
};

const Dropdown: React.FC<DropdownProps> = ({name, linksDropdown}) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState<boolean>(true);
  const pathname = usePathname().split("/")[1];

  return (
    <div onMouseLeave={() => setIsSidebarCollapsed(true)} className="relative cursor-pointer items-center justify-center w-fit" >
      <div
        onMouseEnter={() => setIsSidebarCollapsed(false)}
        className={`text-lg p-3 ${isSidebarCollapsed? '' : 'bg-base1 shadow-md'} ${pathname === name ? 'text-base1 underline font-bold' : ''} transition-all duration-300`}
      >
        <Link href="/editions" >
          {name}
        </Link>
      </div>
      <div className="absolute grid bg-white shadow-lg z-10 text-black w-max" >
        {!isSidebarCollapsed && linksDropdown.map((link) => 
          (
            <Link
              key={link.name}
              href={link.href}
              className={`${pathname === link.href.split("/")[1] ? 'bg-base1' : 'hover:bg-base1 hover:text-white'} p-2`}
            >
              {link.name}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default Dropdown;