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
      <div className='relative mx-auto w-fit font-mono text-white text-center bg-black p-1 z-10'>{pathSection.toUpperCase()}</div>
      <header className='relative flex flex-col text-center border-y-2 border-black my-2 px-10 z-10'>
        <h1 className='text-center text-base1 py-4' style={{ textShadow: 'none' }}>{data.title}</h1>
        <p className='text-right text-gray-900 mt-2 italic mb-4'>{data.date}</p>
      </header>
      <h4 className='italic text-black max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-10' style={{ textShadow: 'none' }}>En diciembre de 2025 el Concejo Deliberante aprobó por unanimidad la modificación del sistema de transporte de la ciudad de Río Cuarto. La misma trajo consigo múltiples reclamos por parte de la población.</h4>
      <div className='relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[700px] 2xl:h-[800px] mt-6'>
        <Image
          src={data.images[4]}
          alt='Portada nota local'
          fill
          className='object-cover shadow-lg'
        />
      </div>
      <main className='prose prose-lg prose-invert max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto p-8 text-black'>
        <p>
          En un intento de cumplir una de sus promesas de campaña, el gobierno municipal presentó el proyecto junto con la Sociedad Anónima de Transporte de la Ciudad de Río Cuarto (SATCRC). Tras su aprobación, entró en vigencia el pasado primero de febrero.
        </p>
        <br />
        <p>
          En el año 2022 ya se había aprobado una reestructuración del transporte urbano que prometía incrementar la eficiencia del mismo y garantizar una mejor movilidad. Sin embargo, <strong>los resultados no fueron los esperados</strong> y la empresa recibió múltiples críticas debido a la reducción de las frecuencias, los recorridos y a los costos elevados del boleto.
        </p>
        <br />
        <p>
          Luego de tres años de reclamos por parte de la sociedad riocuartense a causa de la deficiencia del servicio, la iniciativa municipal <strong>se plantea como una presunta solución a los problemas.</strong>
        </p>
        <div className='flex my-6'>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[2]}
              alt='Imagen3 de la nota local'
              fill
              className='object-cover rotate-270'
            />
          </div>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[3]}
              alt='Imagen4 de la nota local'
              fill
              className='object-cover rotate-270'
            />
          </div>
        </div>
        <p>
          Según lo propuesto, el eje central de la reforma consistiría en la <strong>eliminación del transbordo obligatorio</strong> y la <strong>implementación de líneas más directas</strong> que conectan los distintos barrios de la ciudad; además de la incorporación de <strong>Google Maps</strong> y distintos <strong>medios de pago</strong> físicos y digitales.
        </p>
        <br />
        <p>
          En cuanto a las líneas, la división entre troncales y ramales desaparece. Las líneas <strong>A, B, C y D se mantienen</strong> sin cambios; mientras que las demás se enumeran del <strong>100 al 109</strong> unificando parte de los recorridos antes cubiertos por los ramales.
        </p>
        <br />
        <p>
          Uno de los sectores más afectados por estos cambios es, nuevamente, el universitario. Las nuevas líneas que se dirigen hacia la universidad –C, D, 100, 104, 106, 107– <strong>no cubren la totalidad de los barrios.</strong> Quienes asisten a la UNRC están obligados a utilizar <strong>“combinaciones”</strong>, el nuevo término que emplea la empresa para referirse al transbordo.
        </p>
        <br />
        <div className='relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[700px] 2xl:h-[800px]'>
          <Image
            src={data.images[1]}
            alt='Imagen2 de la nota local'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <br />
        <p>
          Entre las áreas que no poseen acceso directo a nuestra universidad se encuentran los barrios Fénix y Alberdi, los alrededores del Mercado de Abasto y toda la zona oeste incluyendo el Nuevo Hospital, el sector del Cementerio y Villa Dalcar. En consecuencia, <strong>gran parte de la comunidad universitaria debe seguir tomando cuatro colectivos diarios</strong>, que, en muchos casos, están descoordinados entre sí causando <strong>largos tiempos de espera.</strong>
        </p>
        <br />
        <p>
          Además de la <strong>desconexión</strong>, las <strong>pocas frecuencias</strong> y la persistente necesidad de realizar <strong>transbordo</strong>, el costo del pasaje sigue subiendo. Luego del último aumento, el precio con la tarjeta SATBUS quedó en <strong>$1595</strong> y con SUBE y medios digitales en <strong>$3340</strong>. La problemática se profundiza por la falta del Boleto Educativo Cordobés hasta <strong>mediados de marzo</strong>.
        </p>
        <br />
        <p>
          Una vez más, el gobierno municipal y la empresa de transporte toman decisiones guiadas por <strong>intereses propios.</strong> Sus acciones dificultan el acceso, permanencia y egreso a nuestra universidad, perjudicando así el derecho a la educación. En una ciudad en la cual <strong>el transporte es esencial</strong> para acceder a la universidad, se vuelve cada vez más difícil transportarse.
        </p>
      </main >
    </>
  );
}