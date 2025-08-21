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
      <div className='relative border-y-2 border-black my-2 px-10'>
        <div className='flex justify-center lg:absolute xl:left-10 2xl:left-0 lg:top-1/2 lg:-translate-y-1/2'>
          <Image
            src={data.images[0]}
            alt='Imagen1 nota universidad'
            width={150}
            height={150}
          />
        </div>
        <header className='flex flex-col w-full'>
          <h1 className='text-center text-base1 py-4' style={{ textShadow: 'none' }}>
            {data.title}
          </h1>
          <p className='text-right text-gray-900 mt-2 italic mb-4'>{data.date}</p>
        </header>
      </div>
      <h4 className='italic text-black max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-10' style={{ textShadow: 'none' }}>Hallamos “estrellas culonas” en las profundidades, pero nuestra ciencia busca oxígeno en la superficie. <strong>¿Quién decide qué investigamos y para qué?</strong></h4>
      <br />
      <div className='relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:h-[900px] mt-6'>
        <Image
          src={data.images[2]}
          alt='Portada nota universidad'
          fill
          className='object-cover shadow-lg'
        />
      </div>
      <main className='prose prose-lg prose-invert max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto p-8 text-black'>
        
        <p>
          Recientemente se viralizó la expedición de la fundación Schmidt Ocean en el <strong>cañón submarino de Mar Del Plata</strong>, en la que <strong>científicos del Conicet</strong> exploran a casi 4 km de profundidad. Hallazgos como la <strong>“estrella culona” o “Batatita”</strong> fueron furor en el mundo y la bandera Argentina flameó con orgullo, pero <strong>¿qué hay detrás de toda esta tendencia?</strong>
        </p>
        <div className='relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px] my-6'>
          <Image
            src={data.images[1]}
            alt='Imagen2 de la nota universidad'
            fill
            className='object-contain'
          />
        </div>
        <p>
          La realidad es que <strong>el sistema científico argentino se encuentra en una profunda crisis</strong> desencadenada por la falta de inversión por parte del Estado. Esto se ve reflejado en la necesidad de buscar financiamiento de empresas privadas, mayormente extranjeras.
        </p>
        <br />

        <p>
          ¿Qué implica esto? Básicamente <strong>los proyectos deben adaptarse a los intereses de las empresas y no a fomentar el desarrollo del país, profundizando la concentración de información en manos de unos pocos.</strong>
        </p>

        <h3 className='text-base1 mt-8 mb-4 border-t-2 border-black pt-4'>En nuestra UNRC</h3>
        <p>
          Al igual que sucede a nivel nacional, <strong>nuestra universidad también se sostiene con aportes externos.</strong> Históricamente, ha habido <strong>convenios con Bayer o BIO4</strong>, proyectos financiados por la <strong>Agencia I+D+i</strong>, programas de emprendedurismo junto a la <strong>Agencia Córdoba Innovar y Emprender</strong> (que opera con un esquema público-privado), e incluso <strong>congresos o actividades universitarias</strong> (posibles gracias al apoyo de patrocinadores y redes externas). Estos son ejemplos que demuestran cómo <strong>nuestra ciencia depende de recursos que no siempre provienen del presupuesto del Estado.</strong>
        </p>
        <br />
        <p>
          Ante el creciente deterioro en el ámbito científico y educativo, que nos afecta directamente como sociedad, investigadores y docentes se ven en la necesidad de visibilizar la situación de precariedad en la que deben trabajar.
        </p>
        <br />
        <p>
          En nuestra universidad, <strong>profesores de Física</strong> recurren a iniciativas creativas como <strong>vender yerba</strong>, para llamar la atención sobre la crisis demostrando el claro desfinanciamiento en el ámbito. <strong>"Estamos formados para otra cosa"</strong>, expresó el docente Rodrigo Ponzio en una entrevista a Canal 10 Córdoba. Son muestras claras de que <strong>la comunidad universitaria no es indiferente: se organiza y busca sostener sus espacios frente al vaciamiento.</strong>
        </p>
        <div className='relative mx-auto w-full sm:w-1/2 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px] mt-6'>
          <Image
            src={data.images[3]}
            alt='Imagen3 de la nota universidad'
            fill
            className='object-contain'
          />
        </div>
        <br />

        <p>
          Con toda esta información nos surgen preguntas al respecto:
        </p>
        <h3 className='text-base1 text-center my-4'>¿QUÉ NECESITAMOS QUE LA CIENCIA LE BRINDE A LA SOCIEDAD?</h3>
        <h3 className='text-base1 text-center my-4'>¿DEBEMOS INVESTIGAR SOLO POR UN RÉDITO ECONÓMICO?</h3>
        <h3 className='text-base1 text-center my-4'>¿CUÁNTO VALE NUESTRO CONOCIMIENTO?</h3>

      </main>
    </>
  );
}