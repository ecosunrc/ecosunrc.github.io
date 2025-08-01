import {Card, CardHeader, CardFooter} from '@heroui/card';
import Image from 'next/image';

interface GalleryCardProps {
  section?: string;
}

export default function GalleryCard( { section }: GalleryCardProps) {
  return (
    <div className='w-full gap-6 grid grid-cols-12 grid-rows-2 px-8 items-center justify-center'>
      <Card isFooterBlurred className='col-span-12 lg:col-span-7 h-[220px] lg:h-[260px] md:h-[300px]'>
        <Image
          fill
          alt='Relaxing app background'
          className='object-fit'
          src='/imagenes/logo/logo-hor.svg'
        />
        <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100'>
          <div className='flex flex-col grow gap-2 items-center'>
            <p className='text-white'>Próximamente</p>
            <p className='text-white'>Más noticias de la UNRC</p>
          </div>
        </CardFooter>
      </Card>
      <Card isFooterBlurred className='col-span-12 lg:col-span-5 h-[220px] lg:h-[260px] md:h-[300px]'>
        <Image
          fill
          alt='Relaxing app background'
          className='object-fit'
          src='/imagenes/logo/logo-letter.svg'
        />
        <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100'>
          <div className='flex flex-col grow gap-2 items-center'>
            <p className='text-white'>Próximamente</p>
          </div>
        </CardFooter>
      </Card>
      <Card className='hidden lg:flex col-span-4 lg:col-span-4 h-[220px] lg:h-[260px] md:h-[300px]'>
        <Image
          fill
          alt='Relaxing app background'
          className='object-fit'
          src='/imagenes/logo/logo-mouth.svg'
        />
        <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100'>
          <div className='flex flex-col grow gap-2 items-center'>
            <p className='text-white'>Próx.</p>
          </div>
        </CardFooter>
      </Card>
      <Card className='hidden lg:flex col-span-4 lg:col-span-4 h-[220px] lg:h-[260px] md:h-[300px]'>
        <Image
          fill
          alt='Relaxing app background'
          className='object-fit'
          src='/imagenes/logo/logo-mouth.svg'
        />
        <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100'>
          <div className='flex flex-col grow gap-2 items-center'>
            <p className='text-white'>Próx.</p>
          </div>
        </CardFooter>
      </Card>
      <Card className='hidden lg:flex col-span-4 lg:col-span-4 h-[220px] lg:h-[260px] md:h-[300px]'>
        <Image
          fill
          alt='Relaxing app background'
          className='object-fit'
          src='/imagenes/logo/logo-mouth.svg'
        />
        <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100'>
          <div className='flex flex-col grow gap-2 items-center'>
            <p className='text-white'>Próx.</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
