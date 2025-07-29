import Image from 'next/image';
import SideNav from './SideNav';
import SocialMediaIcon from './SocialMediaIcon';
import Link from 'next/link';
import { linksNav, linksDropdown, linksSocialMedia } from './Links';

export default function Header() {
  return (
    <header className='global-header w-full bg-white/50 fixed w-full top-0 z-50'>
      <div className='inside-header grid grid-cols-3 px-5 mx-10 justify-between items h-full'>
        <div className='flex items-center'>
          <Link href='/' className='p-2 hover:bg-base2 rounded-md scale-90 hover:scale-100 transition-all duration-500'>
            <Image
              src='/logo-hor.svg'
              alt='Logo de la revista'
              width={130}
              height={40}
              priority
            />
          </Link>
        </div>
        <div className='flex items-center justify-center'>
          <SideNav linksNav={linksNav} linksDropdown={linksDropdown} />
        </div>
        <div className='flex justify-end items-center gap-4'>
          <Link href='/last-edition' className='flex w-fit h-full justify-center items-center text-lg text-black p-1 rounded-md hover:underline transition-all duration-300'>
            Última edición
            <Image
              src='/logo-square.svg'
              alt='Icono de última edición'
              width={24}
              height={24}
              className='ml-2 p-1 bg-base2 rounded-md hover:scale-140 transition-transform duration-300'
            />
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
  );
}