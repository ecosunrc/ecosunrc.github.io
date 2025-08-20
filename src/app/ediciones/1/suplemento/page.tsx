'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { data } from './data';
import SocialMediaIcon from '@/components/SocialMediaIcon';

export default function Nota() {
  const fullPath = usePathname();
  const pathEdition = fullPath.split('ediciones/')[1];
  const pathSection = pathEdition.split('/')[1];
  return (
    <>
      <div className='py-10'></div>
      <p className='mx-auto w-fit font-mono text-white text-center bg-black p-1'>{pathSection.toUpperCase()}</p>
      <header className='flex flex-col text-center border-y-2 border-black my-2 px-10'>
        <h1 className='text-center text-base1 py-4' style={{ textShadow: 'none' }}>{data.title}</h1>
        <p className='text-right text-gray-900 mt-2 italic mb-4'>{data.date}</p>
      </header>
      <br />
      
      <main className='prose prose-lg prose-invert max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto p-8 text-black'>
        <h2 className='text-center'>Les presentamos ECOS: <br />¡La revista estudiantil de la UNRC!</h2>
        <br />
        <br />

        <h4>
          <strong>ECOS</strong> está conformada por estudiantes de facultades y carreras diferentes entre sí con algo que nos une: <strong>todos somos parte de la UNRC y queremos generar un cambio.</strong>
        </h4>
        <div className='relative w-auto h-[100px] sm:h-[150px] md:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] mt-6'>
        <Image
          src={data.images[1]}
          alt='Portada suplemento'
          fill
          className='object-contain'
        />
      </div>
        <br />

        <h4>El propósito de esta revista es <strong>construir un espacio de comunicación y expresión abierto a todos los estudiantes</strong>, donde podamos organizarnos para visibilizar las problemáticas que nos afectan como comunidad y luchar por una mejor universidad.</h4>
        <br />
        <br />

        <h4>Te invitamos a ser parte:</h4>
        <br />
        
        <h2 className='text-center'>¡SUMA TU VOZ AL ECO ESTUDIANTIL!</h2>
        <br />
        <br />

        <div className='flex justify-center gap-6'>
          <SocialMediaIcon src='https://www.instagram.com/ecosunrc' type='ig' color='green' size={80}/>
          <SocialMediaIcon src='https://twitter.com/ecosunrc' type='twitter' color='green' size={80}/>
        </div>
      </main>
    </>
  );
}
