'use client';
import { usePathname } from 'next/navigation';
import InterviewCard from '@/components/cards/InterviewCard';
import Image from 'next/image';
import { data } from '../estudiantil/data';
import Loading from '@/components/Loading';
import { useEffect, useState } from 'react';
import InfoCard from '@/components/InfoCard';

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
      <h4 className='italic text-black max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-10' style={{ textShadow: 'none' }}>SIN BEG, NO HAY EDUCACIÓN: BOLETO GRATUITO PARA TODOS</h4>
      <br />
      <div className='relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[700px] 2xl:h-[800px] mt-6'>
        <Image
          src={data.images[1]}
          alt='Portada nota estudiantil'
          fill
          className='object-cover shadow-lg'
        />
      </div>
      <main className='prose prose-lg prose-invert max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto p-8 text-black'>
        
        <p>
          La ciudad de Río Cuarto cuenta con <strong>más de 60 barrios</strong> y una población aproximada de <strong>180.000 habitantes</strong>, lo que la convierte en la <strong>segunda localidad más grande</strong> de la provincia. La Universidad Nacional de Río Cuarto (UNRC) se encuentra ubicada en el extremo noreste de la ciudad, dentro de la jurisdicción del gobierno de Las Higueras.
        </p>
        <br />
        <p>
          Como en toda ciudad, <strong>el transporte público es esencial</strong>. En nuestro caso, es brindado por una única empresa, <strong>SATCRC</strong> (Sociedad Anónima de Transporte de la Ciudad de Río Cuarto). En el año 2022, la misma <strong>reformó</strong> el sistema de transporte <strong>reduciendo las frecuencias, la cantidad de líneas y los recorridos</strong>.
        </p>

        <div className="relative w-full mt-6">
          <div className="float-left w-1/3 mr-4 mb-4">
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px]">
              <Image
                src={data.images[2]}
                alt="Imagen1 de la nota estudiantil"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="text-sm text-gray-600 mt-2 italic">
              {epigrafe()}
            </div>
          </div>
        </div>
        <p>
          A lo largo de los años, la compañía atravesó diversas <strong>críticas</strong> a su servicio. Lejos de mejorarlo, la reforma <strong>profundizó las problemáticas</strong> que aquejaban a la población: <strong>mayor tiempo de espera</strong> por recortes de frecuencias horarias, un centro de <strong>transbordo poco eficiente</strong> debido a la falta de coordinación entre líneas, <strong>accesibilidad reducida</strong> para personas en situación de discapacidad y <strong>desvinculación territorial</strong> con los barrios periféricos. Además, un <strong>boleto que aumenta constantemente</strong> y no se ve reflejado en la calidad del servicio.
        </p>
        <br />
        <br />
        <p>
          Si bien, en la provincia de Córdoba contamos con el <strong>BEC</strong> (Boleto Educativo Cordobés), aún tenemos <strong>dificultades</strong> para acceder al transporte. El boleto educativo cubre los gastos de pasajes y <strong>tiene el objetivo</strong> de garantizar el <strong>ingreso y permanencia</strong> de los estudiantes. <strong>Sin embargo</strong>, para el sector universitario, <strong>no funciona en los meses de febrero, marzo y fines de diciembre.</strong> En consecuencia, quienes vamos a la universidad durante estos meses, <strong>nos vemos en la necesidad de abonar</strong> el respectivo precio del boleto urbano e interurbano.
        </p>
        <br />
        <br />
        <p>
          Ante esta situación crítica, <strong>¿qué estamos haciendo?</strong>
        </p>
        <br />
        <br />


        <h3 className='text-base1 mt-8 mb-4 border-t-2 border-black pt-4'>Lucha estudiantil</h3>
        
        <p className='mt-4'>
          En septiembre del año pasado, tras las <strong>continuas manifestaciones del movimiento estudiantil</strong>, las autoridades de la universidad solicitaron a la provincia, a través del CiDi, la <strong>extensión del boleto</strong>. Por otro lado, en el mes de noviembre los estudiantes nos movilizamos hacia el Centro Cívico de Río Cuarto y entregamos una nota exigiendo que <strong>se garantice el BEG de febrero a diciembre</strong>, con <strong>más de 1000 firmas</strong> que avalaron el reclamo. Luego de <strong>un año sin respuestas</strong> por parte del gobierno provincial, nos seguimos organizando. Para visibilizar la problemática, empapelamos la universidad con la consigna: <strong>“BEG de febrero a diciembre para todos los estudiantes”.</strong>
        </p>

        <div className='relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[700px] 2xl:h-[800px] mt-6'>
          <Image
            src={data.images[0]}
            alt='Imagen4 de la nota estudiantil'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <div className="relative w-full mt-6">
          <div className="float-right w-1/3 ml-4 mb-4">
            <InfoCard
              title="¿SABÍAS QUE...?"
              content={<p className="mt-4 text-sm text-black font-medium">Si vivís a una distancia de <strong>entre 50 y 100 km</strong> de Río Cuarto el total de gasto mensual por viajar los 20 días de cursada es de <strong>más de $400.000</strong></p>}
              bgColor="bg-base2 border-4 border-base1"
              accentColor="base2 border-4 border-base1 text-base1"
            />
          </div>
        <p>
          El pasado nueve de septiembre, los estudiantes <strong>universitarios</strong>, acompañados por la <strong>Unión de Estudiantes Secundarios (UES)</strong>, presentamos en el Consejo Superior una nota avalada por el claustro estudiantil. En la misma, solicitamos que las autoridades articulen con la UTI (Unidad de Tecnología de la Información) para <strong>enviar los datos</strong> de los “aspirantes” a la provincia y considerarlos como“alumnos efectivos”, habilitándolos así a acceder al BEC. Ante el reclamo, el Rectorado afirmó que <strong>el conflicto se profundiza</strong> debido a que <strong>el calendario académico no contempla a febrero, marzo y finales de diciembre como meses con actividades universitarias.</strong>
        </p>
        </div>
        <br />
         <div className='flex my-6'>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[3]}
              alt='Imagen2 de la nota estudiantil'
              fill
              className='object-cover rounded-lg shadow-lg'
            />
          </div>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[4]}
              alt='Imagen3 de la nota estudiantil'
              fill
              className='object-cover rounded-lg shadow-lg'
            />
          </div>
        </div>
        <p>
          Los <strong>intereses empresariales</strong> y las <strong>decisiones del gobierno vulneran el derecho a la educación pública, gratuita y de calidad.</strong> Mientras la empresa de transporte reforma su servicio, ignorando las necesidades y demandas estudiantiles, y el gobierno provincial no toma acciones contundentes, <strong>los estudiantes pagamos las consecuencias y se torna cada vez más complicado asistir a la universidad.</strong> La exclusión del BEC durante febrero, marzo y diciembre <strong>no es un error administrativo, sino una muestra clara de sus prioridades</strong>, que están totalmente alejadas de nuestras necesidades. Frente a esto, <strong>el movimiento estudiantil</strong> no se consolida solo como una reacción, sino como una fuerza colectiva para defender lo que es nuestro: <strong>el acceso real y sin barreras a la educación.</strong>
        </p>
      </main>
    </>
  );
}

function epigrafe() {
  return (
    <span className='flex justify-end font-truculenta text-lg text-gray-600'>Ilustración: Maxine Torres</span>
  );
}