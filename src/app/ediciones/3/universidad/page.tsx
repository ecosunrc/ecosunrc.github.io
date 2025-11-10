'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { data } from './data';
import Loading from '@/components/Loading';
import { useEffect, useState } from 'react';

export default function Nota() {
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
      <p className='mx-auto w-fit font-mono text-white text-center bg-black p-1'>UNIVERSIDAD - NACIONAL</p>
      <div className='relative border-y-2 border-black my-2 px-10'>
        <header className='flex flex-col w-full'>
          <h1 className='text-center text-base1 py-4' style={{ textShadow: 'none' }}>
            {data.title}
          </h1>
          <p className='text-right text-gray-900 mt-2 italic mb-4'>{data.date}</p>
        </header>
      </div>
      <h4 className='italic text-black max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-10' style={{ textShadow: 'none' }}>El 26 de septiembre de 2025 en conferencia de prensa, el juez federal Hugo Vaca Narvaja, informó que se encontraron restos en el predio donde funcionó el campo de concentración de La Perla entre 1976 y finales de 1978.</h4>
      <br />
      <div className='relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:h-[900px] mt-6'>
        <Image
          src={data.images[3]}
          alt='Portada nota universidad'
          fill
          className='object-cover shadow-lg'
        />
      </div>
      <main className='prose prose-lg prose-invert max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto p-8 text-black'>
        <p>
          La Perla fue un Centro Clandestino de Detención, Tortura y Exterminio (CCDTyE), ubicado a la vera de la Ruta 20, en terrenos pertenecientes al Tercer Cuerpo de Ejército, comandado por Luciano Benjamín Menéndez. Desde el Archivo Provincial de la Memoria, se estima que por el campo de concentración pasaron entre <strong>2000 y 2500</strong> personas. Actualmente, <strong>la mayoría continúa desaparecida.</strong>
        </p>
        <br />
        <p>
          El Destacamento de Inteligencia 141 Gral. Iribarren tenía a su cargo cuatro secciones, referidas a: <strong>política</strong>, dedicada a la inteligencia; <strong>calle</strong>, encargada de los seguimientos, escuchas e infiltraciones; <strong>operaciones especiales (OP3)</strong>, que administraba el centro clandestino, y <strong>logística</strong>, la cual gestionaba el material que permitía el funcionamiento del accionar represivo. Todo esto sucede en el marco de un <strong>plan sistemático de persecución política</strong>, operado por la última dictadura cívico militar argentina. 
        </p>
        <br />
        <div className='float-right ml-2 w-1/2 sm:w-1/4 mr-4 mb-4'>
          <div className='relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px]'>
            <Image
              src={data.images[1]}
              alt='Imagen1 de la nota estudiantil'
              fill
              className='object-cover'
            />
          </div>
          <div className='text-sm p-2 text-white mt-2 italic bg-base1'>
            El georradar cuenta con antenas que ingresan un pulso electromagnético al subsuelo –una lo emite y otra lo recibe–. Con esa información se genera lo que se llama un radargrama, que es similar a una tomografía del subsuelo. En otras palabras, el georradar detecta cambios en los materiales del subsuelo.
          </div>
        </div>
        <p>
          El funcionamiento de La Perla se destacó porque el método de desaparición y tortura no era el mismo que en otros centros de detención. Mientras que la ESMA se distinguió por los vuelos de la muerte, los testimonios de los detenidos en La Perla, aseguran que se ejecutaban traslados que duraban aproximadamente treinta minutos, que concluían con el <strong>fusilamiento y entierro de las víctimas.</strong>
        </p>
        <br />
        <p>
          Desde la vuelta de la democracia, son múltiples los movimientos que exigen saber el paradero de los desaparecidos. En el año 2004, Guillermo Bruno Laborda, ex Teniente Coronel, en un reclamo administrativo afirmó que antes de la llegada de la Comisión Interamericana de Derechos Humanos (CIDH) en 1979, alrededor de doscientos militares <strong>habían removido los cadáveres enterrados en La Perla</strong> con máquinas retroexcavadoras. Por otro lado, en el mismo año se conformó el equipo de geología forense (EGF) con el fin de la <strong>búsqueda y recuperación de restos de personas desaparecidas</strong> durante la última dictadura.
        </p>
        <br />
        <p>
          El grupo está integrado por <strong>investigadores pertenecientes a la UNRC y a la UNSL.</strong> Desde sus inicios trabajan en conjunto con el Equipo Argentino de Antropología Forense, a pedido de diversos organismos de derechos humanos y de la Justicia Federal.
        </p>
        <br />
        <p>
          En las últimas dos décadas ambos trabajaron en diferentes investigaciones a lo largo del país. <strong>La adquisición de un Georradar en el año 2015</strong> fue clave para profundizar y perfeccionar el trabajo de los geólogos.
        </p>
        <br />
        <p>
          El día 16 de septiembre del presente año se inició una <strong>nueva exploración</strong> en los terrenos pertenecientes al ex Centro Clandestino de Detención. Luego de cinco días de trabajo hallaron <strong>restos óseos humanos que aún deben ser analizados</strong> para saber si se les puede extraer ADN. La metodología utilizada para llevar a cabo estas tareas consta de cuatro momentos: <strong>inventario</strong>, donde se recolectan testimonios y evidencia fotográfica del territorio con el fin de delimitar posibles zonas de fosas clandestinas; <strong>exploración del subsuelo</strong>, se inspeccionan las áreas delimitadas de manera superficial y subterránea; <strong>exhumación</strong>, se desentierran los restos óseos y otras evidencias, e <strong>identificación</strong>, se examinan las muestras extraídas. <strong>La intervención de los geólogos de la UNRC es fundamental</strong>, especialmente, para las dos primeras etapas del procedimiento, en las cuales se analizan fotografías, mapas, uso y tipo de suelo. Esto último tiene como objetivo precisar las zonas que, posteriormente, serán exploradas con métodos geofísicos y geomecánicos como el Georradar. 
        </p>
        <div className='flex my-6'>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[4]}
              alt='Imagen2 de la nota universidad'
              fill
              className='object-cover rounded-lg shadow-lg'
              />
          </div>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[0]}
              alt='Imagen3 de la nota universidad'
              fill
              className='object-cover rounded-lg shadow-lg'
              />
          </div>
        </div>
        <div className='flex my-6'>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[2]}
              alt='Imagen4 de la nota universidad'
              fill
              className='object-cover rounded-lg shadow-lg'
            />
          </div>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[5]}
              alt='Imagen5 de la nota universidad'
              fill
              className='object-cover rounded-lg shadow-lg'
            />
          </div>
        </div>
        <p>
          Finalmente, es de suma importancia destacar lo expresado por Guillermo Sagripanti, director del Equipo de Geología Forense, para la Dirección de Prensa y Difusión de la UNRC. Asegura que <strong>nuestra universidad es la primera del país y de América del Sur en tener un grupo de investigación y equipamiento abocado a la búsqueda de enterramientos clandestinos de personas por desaparición forzada.</strong> Es fundamental que los equipos pertenezcan al sector público y <strong>no respondan a intereses privados</strong> ni empresariales, sino que estén al servicio de la defensa del derecho a la memoria, la verdad y la justicia del pueblo argentino.
        </p>
        <br />
        <h3 className='text-base2 mt-8 text-center p-2 bg-base1'>
          Ayer, hoy y siempre
        </h3>
        <h3 className='text-base2 mt-4 text-center p-2 bg-base1'>
          Los seguiremos buscando.
        </h3>
      </main>
    </>
  );
}