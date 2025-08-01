'use client';

import { redirect, useParams } from 'next/navigation';
import GalleryCard from '@/components/cards/GalleryCard';
import Image from 'next/image';
import Link from 'next/link';
import { sectionsData } from '@/data/sectionsData';
import { editionsData } from '@/data/editionsData';

export default function Section() {
  const { section } = useParams();
  const sectionData = sectionsData[section as keyof typeof sectionsData];
  const editionNumbers = Object.keys(editionsData).map(Number).sort((a, b) => a - b);
  const lastEdition = editionNumbers[editionNumbers.length - 1];

  if (!sectionData) {
    redirect('/');
  }

  return (
    <div className='flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-base2/50 to-base2/100 items-center justify-center mt-8 lg:mt-0 p-8 lg:!p'>
      <div className='w-full md:w-1/2 md:h-screen h-64 p-4 md:p-8 flex items-center justify-center'>
        <Link href={`/ediciones/${lastEdition}${sectionData.link}`} title={sectionData.title} className='relative w-full h-full md:h-2/3'>
          <Image
            fill
            alt={sectionData.alt}
            src={sectionData.lastImage}
            className='object-fit'
          />
          <div className='absolute bg-black/50 bottom-0 z-10 w-full p-2'>
            <h3 className='text-white'>{sectionData.title}</h3>
            <p className='text-white'>{sectionData.section}</p>
          </div>
        </Link>
      </div>
      <div className='w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center'>
        <GalleryCard section={sectionData.section} />
      </div>
    </div>
  );
}
