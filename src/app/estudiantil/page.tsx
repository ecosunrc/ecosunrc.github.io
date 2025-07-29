'use client';

import GalleryCard from '@/components/cards/GalleryCard';
import Image from 'next/image';
import Link from 'next/link';

export default function Estudiantil() {
  return (
    <div className='flex h-screen bg-gradient-to-b from-base2/50 to-base2/100 items-center justify-center'>
      <div className='flex flex-col items-center justify-center w-1/2 h-full p-8'>
        <Link href='/last-edition/estudiantil' className='relative items-center justify-end w-full h-1/2'>
          <Image
            fill
            alt='Background image'
            src='/ediciones/edicion1/estudiantil/comedor.webp'
            className='object-fit'
          />
          <div className='absolute bg-black/40 bottom-0 z-10 w-full p-2'>
            <h3 className='text-white'>Última edición</h3>
            <p className='text-white'>Noticia Estudiantil</p>
          </div>
        </Link>
      </div>
      <div className='w-1/2 p-8 flex items-center justify-center'>
        <GalleryCard />
      </div>
    </div>
  );
}