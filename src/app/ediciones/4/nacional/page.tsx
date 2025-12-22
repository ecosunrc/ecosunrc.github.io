'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { data } from './data';
import Loading from '@/components/Loading';
import { useEffect, useState } from 'react';

export default function Nota() {
  const fullPath = usePathname();
  const pathEdition = fullPath.split('ediciones/')[1];
  const pathSection = pathEdition.split('/')[1];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className='py-10'></div>
      <p className='mx-auto w-fit font-mono text-white text-center bg-black p-1'>{pathSection.toUpperCase()}</p>
      <header className='flex flex-col text-center border-y-2 border-black my-2 px-10'>
        <h1 className='text-center text-base1 py-4' style={{ textShadow: 'none' }}>{data.title}</h1>
        <p className='text-right text-gray-900 mt-2 italic mb-4'>{data.date}</p>
      </header>
      <h4 className='italic text-black max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-10' style={{ textShadow: 'none' }}>El CONICET y National Geographic presentan un hallazgo histórico en Río Negro: una nidada de dinosaurio carnívoro con un huevo en estado excepcional.</h4>
      <br />
      <div className='relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[700px] 2xl:h-[800px] mt-6'>
        <Image
          src={data.images[1]}
          alt='Portada nota nacional'
          fill
          className='object-cover shadow-lg'
        />
      </div>
      <main className='prose prose-lg prose-invert max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto p-8 text-black'>
        <p>
          El mes pasado, la ciencia argentina volvió a tomar protagonismo a nivel nacional e internacional con un nuevo streaming del CONICET: la expedición paleontológica en la provincia de Río Negro. La investigación formó parte del proyecto “El Fin de la Era de los Dinosaurios”, respaldado por la Secretaría de Cultura de Río Negro, la Fundación Félix de Azara y National Geographic Society.
        </p>
        <br />
        <p>
          La importancia del proyecto radica en que su objeto de estudio es nuestra <strong>Patagonia Argentina</strong>, en zonas donde previamente hubo descubrimientos científicos. La última transmisión del CONICET estuvo ubicada en los alrededores de un yacimiento llamado “Salitral Ojo de Agua”, a 70 km de la localidad de General Roca. Desde National Geographic se comenta que es una zona donde se encuentran <strong>múltiples fósiles</strong>: varios tipos de dinosaurios, pequeñas lagartijas, mamíferos, serpientes y demás especies que fueron contemporáneas a los enormes reptiles.
        </p>
        <br />
        <p>
          Los investigadores que formaron parte de la transmisión declararon haber tenido gran éxito. Entre sus hallazgos más destacados, además de restos de dinosaurios y mamíferos de hace unos <strong>setenta millones de años</strong>, se encuentra la nidada de un dinosaurio carnívoro con <strong>un huevo en estado de preservación excepcional.</strong>
        </p>
        <br />
        <div className='relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[700px] 2xl:h-[800px]'>
          <Image
            src={data.images[0]}
            alt='Imagen1 de la nota nacional'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <br />
        <p className='text-white bg-base1 p-2'>
          <strong>La importancia de este descubrimiento reside en la poca frecuencia con la que se dan estos hallazgos, especialmente en las condiciones en que se encuentra. Mediante un estudio tomográfico, que permite investigar su interior sin romper la cáscara, se determinará si el embrión dentro está conservado o degradado, y en base a eso se procederá con su investigación.</strong>
        </p>
        <br />
        <p>
          Una vez más, estos descubrimientos nos retratan la <strong>importancia de la ciencia y la investigación argentina</strong> para seguir conociendo la historia de nuestro territorio y la vida que hubo en él. Es crucial <strong>mantener viva la ciencia nacional</strong>, junto a sus descubrimientos, y enorgullecernos de los investigadores que forman parte de la misma, <strong>representándonos en el país y en el resto del mundo.</strong>
        </p>
      </main>
    </>
  );
}