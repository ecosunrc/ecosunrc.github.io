'use client';
import Image from 'next/image';
import SideNav from './SideNav';
import SocialMediaIcon from './SocialMediaIcon';
import Link from 'next/link';
import { linksNav, linksDropdown, linksSocialMedia } from './Links';
import MobileHeader from './MobileHeader';
// import { editionsData } from '@/data/editionsData';

export default function Header() {
  // const editionNumbers = Object.keys(editionsData).map(Number).sort((a, b) => a - b);
  // const lastEdition = editionNumbers[editionNumbers.length - 1];
  return (
    <>
      <header className='global-header hidden xl:flex fixed w-full top-0 z-50 font-button'>
        <div className='inside-header flex justify-between w-full sm:px-6 lg:px-10'>
          <div className='flex items-center mr-auto'>
            <Link href='/' className='p-2 hover:bg-base2 rounded-md scale-90 hover:scale-100 transition-all duration-500'>
              <Image
                src='/imagenes/logo/logo-hor.svg'
                alt='Logo de la revista'
                width={130}
                height={40}
                priority
              />
            </Link>
          </div>
          <div className='flex items-center justify-center bg-base1 rounded-b-md text-white mx-auto'>
            <SideNav linksNav={linksNav} linksDropdown={linksDropdown} />
          </div>
          <div className='flex items-center gap-2 ml-auto bg-base1 rounded-b-md text-white px-2'>
            <Link href={`/ediciones/3`} className='flex w-fit h-full justify-center items-center text-lg p-1 rounded-md hover:underline transition-all duration-300'>
              Última edición
              {/* <Image
                src='/imagenes/logo/logo-square.svg'
                alt='Icono de última edición'
                width={24}
                height={24}
                className='mx-2 p-1 bg-base2 rounded-md'
              /> */}
            </Link>
            {linksSocialMedia.map((link) => (
              <SocialMediaIcon
                key={link.type}
                src={link.src}
                type={link.type}
              />
            ))}
          </div>
        </div>
      </header>
      <div className='mobile-header'>
        <MobileHeader />
      </div>
    </>
  );
}