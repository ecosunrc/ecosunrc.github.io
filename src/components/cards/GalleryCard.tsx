import {Card, CardHeader, CardFooter} from '@heroui/card';
import Image from 'next/image';

export default function GalleryCard() {
  return (
    <div className='w-full gap-6 grid grid-cols-12 grid-rows-2 px-8 items-center justify-center'>
      <Card isFooterBlurred className='w-full h-[300px] col-span-12 sm:col-span-7'>
        {/* <CardHeader className='absolute z-10 top-1 flex-col items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Your day your way</p>
          <h4 className='text-white/90 font-medium text-xl'>Your checklist for better sleep</h4>
        </CardHeader> */}
        <Image
          fill
          alt='Relaxing app background'
          className='object-fit'
          src='/logo-letter.svg'
        />
        <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100'>
          <div className='flex flex-col grow gap-2 items-center'>
            <p className='text-white'>Próximamente</p>
            <p className='text-white'>Más noticias de la UNRC</p>
          </div>
        </CardFooter>
      </Card>
      <Card isFooterBlurred className='w-full h-[300px] col-span-12 sm:col-span-5'>
        {/* <CardHeader className='absolute z-10 top-1 flex-col items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>New</p>
          <h4 className='text-black font-medium text-2xl'>Acme camera</h4>
        </CardHeader> */}
        <Image
          fill
          alt='Relaxing app background'
          className='object-fit'
          src='/logo-letter.svg'
        />
        <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100'>
          <div className='flex flex-col grow gap-2 items-center'>
            <p className='text-white'>Próximamente</p>
            <p className='text-white'>Más noticias de la UNRC</p>
          </div>
        </CardFooter>
      </Card>
      <Card className='col-span-12 sm:col-span-4 h-[300px]'>
        {/* <CardHeader className='absolute z-10 top-1 flex-col items-start!'>
          <p className='text-tiny text-white/60 uppercase font-bold'>What to watch</p>
          <h4 className='text-white font-medium text-large'>Stream the Acme event</h4>
        </CardHeader> */}
        <Image
          fill
          alt='Relaxing app background'
          className='object-fit'
          src='/logo-mouth.svg'
        />
        <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100'>
          <div className='flex flex-col grow gap-2 items-center'>
            <p className='text-white'>Próximamente</p>
            <p className='text-white'>Más noticias de la UNRC</p>
          </div>
        </CardFooter>
      </Card>
      <Card className='col-span-12 sm:col-span-4 h-[300px]'>
        {/* <CardHeader className='absolute z-10 top-1 flex-col items-start!'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Plant a tree</p>
          <h4 className='text-white font-medium text-large'>Contribute to the planet</h4>
        </CardHeader> */}
        <Image
          fill
          alt='Relaxing app background'
          className='object-fit'
          src='/logo-mouth.svg'
        />
        <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100'>
          <div className='flex flex-col grow gap-2 items-center'>
            <p className='text-white'>Próximamente</p>
            <p className='text-white'>Más noticias de la UNRC</p>
          </div>
        </CardFooter>
      </Card>
      <Card className='col-span-12 sm:col-span-4 h-[300px]'>
        {/* <CardHeader className='absolute z-10 top-1 flex-col items-start!'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Supercharged</p>
          <h4 className='text-white font-medium text-large'>Creates beauty like a beast</h4>
        </CardHeader> */}
        <Image
          fill
          alt='Relaxing app background'
          className='object-fit'
          src='/logo-mouth.svg'
        />
        <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100'>
          <div className='flex flex-col grow gap-2 items-center'>
            <p className='text-white'>Próximamente</p>
            <p className='text-white'>Más noticias de la UNRC</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
