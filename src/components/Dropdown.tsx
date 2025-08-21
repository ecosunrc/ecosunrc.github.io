'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { TypeLink } from './Links';

interface DropdownProps {
  name: string;
  linksDropdown: TypeLink[];
  isMobile?: boolean;
}

export default function Dropdown({ name, linksDropdown, isMobile = false }: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const pathname = usePathname().split('ediciones/');

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div
      className={`relative ${isMobile ? '' : 'cursor-pointer'} w-fit`}
      onMouseLeave={!isMobile ? closeDropdown : undefined}
    >
      <div
        onClick={isMobile ? toggleDropdown : undefined}
        onMouseEnter={!isMobile ? () => setIsOpen(true) : undefined}
        className={`hover:underline hover:scale-105 text-lg xl:p-3  ${
          pathname[0] === '/ediciones' ? 'underline' : ''
        } ${isOpen? 'xl:underline' : ''}
        `}
      >
        <Link href='/ediciones'>
          {name}
        </Link>
      </div>

      {isOpen && !isMobile && (
        <div
          className='absolute grid shadow-lg z-10 w-full bg-white text-black'
        >
          {linksDropdown.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`p-2 hover:bg-base1 hover:text-white ${
                pathname[1] === link.href.split('ediciones/')[1]
                  ? 'bg-base1 text-white'
                  : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
