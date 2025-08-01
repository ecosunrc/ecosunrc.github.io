'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='row-start-3 flex flex-wrap items-center justify-between bg-base2 text-white py-3 px-16'>
      <div className='flex items-center gap-4'>
        <Image
          src='/imagenes/logounrc.svg'
          alt='Logo de la revista'
          width={30}
          height={30}
          priority
        />
        <Image
          src='/imagenes/logo/logo-mouth.svg'
          alt='Logo de la revista'
          width={45}
          height={45}
          priority
        />
      </div>
      <Image
        src='/imagenes/logo/logo-letter.svg'
        alt='Logo de la revista'
        width={100}
        height={40}
        priority
      />
    </footer>
  );
}