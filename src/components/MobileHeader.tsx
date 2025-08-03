'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { linksNav, linksDropdown, linksSocialMedia } from './Links';
import SocialMediaIcon from './SocialMediaIcon';
import Dropdown from './Dropdown';
import { usePathname } from 'next/navigation';

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname().split('/')[1];

  return (
    <header className='xl:hidden fixed top-0 left-0 w-full bg-white/90 z-50 shadow-md font-button text-white'>
      <div className='flex justify-between items-center px-4 py-3'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/imagenes/logo/logo-hor.svg'
            alt='Logo Ecos'
            width={130}
            height={40}
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='p-2 focus:outline-none bg-base1 rounded-md'
        >
          <Image
            src={isOpen ? '/imagenes/ico/close.svg' : '/imagenes/ico/menu.svg'}
            alt={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            width={24}
            height={24}
          />
        </button>
      </div>
      <div
        className={`fixed top-16 right-0 h-1/2 sm:h-3/4 w-fit bg-base1 z-40 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 shadow-lg p-4 flex flex-col justify-between gap-2`}
      >
        <nav className='flex flex-col gap-4 mt-4'>
          {linksNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg ${pathname === link.href.split('/')[1]
              ? 'underline'
              : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Dropdown
            name='Ediciones'
            linksDropdown={linksDropdown}
            isMobile={true}
          />
        </nav>
        <div className='flex gap-2'>
          {linksSocialMedia.map((link) => (
            <SocialMediaIcon key={link.type} src={link.src} type={link.type} />
          ))}
        </div>
      </div>
    </header>
  );
}
