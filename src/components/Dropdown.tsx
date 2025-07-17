'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface DropdownLink {
  name: string;
  href: string;
  style?: string;
};

interface DropDownProps {
  name: string;
  linksDropDown: DropdownLink[];
};

const DropDown: React.FC<DropDownProps> = ({name, linksDropDown}) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState<boolean>(false);
  
  const pathname = usePathname();
  return (
    <div onMouseLeave={() => setIsSidebarCollapsed(false)} className="relative cursor-pointer items-center justify-center" >
      <div
        onMouseEnter={() => setIsSidebarCollapsed(true)}
        className="text-lg p-1 rounded-md hover:bg-cyan-900 hover:text-white hover:shadow-md transition-all duration-300"
      >
        {name}
      </div>
      <div className="absolute grid bg-cyan-700 shadow-lg z-10 text-black rounded-md w-max border border-cyan-900" >
        {isSidebarCollapsed && linksDropDown.map((link) => 
          (
            <Link
              key={link.name}
              href={link.href}
              className={`${pathname === link.href ? 'bg-cyan-900' : ''} hover:bg-cyan-900 hover:text-white p-1 hover:rounded-md m-1`}
            >
              {link.name}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default DropDown;