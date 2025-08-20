import { SectionData } from 'app/seccion/[section]/data';
import {Card, CardHeader, CardFooter} from '@heroui/card';
import Image from 'next/image';
import Link from 'next/link';

interface GalleryCardProps {
  sectionsData: SectionData[];
}

export default function GalleryCard( { sectionsData }: GalleryCardProps) {
  return (
    <div className='w-full gap-6 grid grid-cols-12 grid-rows-2 px-8 items-center justify-center'>
      <Card isFooterBlurred className='col-span-12 lg:col-span-7 h-[220px] lg:h-[260px] md:h-[300px]'>
        <Link href={sectionsData[0].src}>
          <Image
            fill
            alt={sectionsData[0].alt}
            className='object-fit'
            src={sectionsData[0].image}
          />
          <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100'>
            <div className='flex flex-col grow gap-2 items-center'>
              <p className='text-white'>{sectionsData[0].title}</p>
            </div>
          </CardFooter>
        </Link>
      </Card>
      <Card isFooterBlurred className='col-span-12 lg:col-span-5 h-[220px] lg:h-[260px] md:h-[300px]'>
        <Link href={sectionsData[1].src}>
          <Image
            fill
            alt={sectionsData[1].alt}
            className='object-fit'
            src={sectionsData[1].image}
          />
          <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100'>
            <div className='flex flex-col grow gap-2 items-center'>
              <p className='text-white'>{sectionsData[1].title}</p>
            </div>
          </CardFooter>
        </Link>
      </Card>
      <Card className='hidden lg:flex col-span-4 lg:col-span-4 h-[220px] lg:h-[260px] md:h-[300px]'>
        <Link href={sectionsData[2].src}>
          <Image
            fill
            alt={sectionsData[2].alt}
            className='object-fit'
            src={sectionsData[2].image}
          />
        </Link>
        <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100'>
          <div className='flex flex-col grow gap-2 items-center'>
            <p className='text-white'>Próx.</p>
          </div>
        </CardFooter>
      </Card>
      <Card className='hidden lg:flex col-span-4 lg:col-span-4 h-[220px] lg:h-[260px] md:h-[300px]'>
        <Link href={sectionsData[3].src}>
          <Image
            fill
            alt={sectionsData[3].alt}
            className='object-fit'
            src={sectionsData[3].image}
          />
          <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100'>
            <div className='flex flex-col grow gap-2 items-center'>
              <p className='text-white'>{sectionsData[3].title}</p>
            </div>
          </CardFooter>
        </Link>
      </Card>
      <Card className='hidden lg:flex col-span-4 lg:col-span-4 h-[220px] lg:h-[260px] md:h-[300px]'>
        <Link href={sectionsData[4].src}>
          <Image
            fill
            alt={sectionsData[4].alt}
            className='object-fit'
            src={sectionsData[4].image}
          />
          <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100'>
            <div className='flex flex-col grow gap-2 items-center'>
              <p className='text-white'>{sectionsData[4].title}</p>
            </div>
          </CardFooter>
        </Link>
      </Card>
    </div>
  );
}
