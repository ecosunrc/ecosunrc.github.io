import Link from 'next/link';
import Image from 'next/image';
import GalleryCard from '@/components/cards/GalleryCard';
import { sectionsData } from './data';

interface PageProps {
  params: Promise<{ section: string }>;
}

export default async function SectionPage({ params }: PageProps) {
  const { section } = await params;

  const sectionData = sectionsData.find(
    (s) => s.sectionData.section.toLowerCase() === section.toLowerCase()
  );

  if (!sectionData) {
    return <div className='text-center text-red-500'>Sección no encontrada</div>;
  }

  return (
    <div className='flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-base2/50 to-base2/100 items-center justify-center mt-8 lg:mt-0 p-8 lg:!p'>
      <div className='w-full md:w-1/2 md:h-screen h-64 p-4 md:p-8 flex items-center justify-center'>
        <Link
          href={sectionData.sectionData.src}
          title={sectionData.sectionData.title}
          className='relative w-full h-full md:h-2/3'
        >
          <Image
            fill
            alt={sectionData.sectionData.alt}
            src={sectionData.sectionData.image}
            className='object-contain'
          />
          <div className='absolute bg-black/50 bottom-0 z-10 w-full p-2'>
            <h3 className='text-white'>{sectionData.sectionData.title}</h3>
            <p className='text-white'>{sectionData.sectionData.section}</p>
          </div>
        </Link>
      </div>
      <div className='w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center'>
        <GalleryCard sectionsData={sectionData.lastFiveNotes} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return sectionsData.map((s) => ({
    section: s.sectionData.section.toLowerCase(),
  }));
}
