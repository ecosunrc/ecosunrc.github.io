'use client';
import { usePathname } from 'next/navigation';
import InterviewCard from '@/components/cards/InterviewCard';
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
      <p className='mx-auto w-fit font-mono text-white text-center bg-base3 p-1'>{pathSection.toUpperCase()}</p>
      <header className='flex flex-col text-center border-y-2 border-black my-2'>
        <h1 className='text-center text-base1 py-4' style={{ textShadow: 'none' }}>{data.title}</h1>
        <p className='text-right text-gray-900 mt-2 italic mb-4'>{data.date}</p>
      </header>
      <h4 className='italic text-black max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto' style={{ textShadow: 'none' }}>Peligra el funcionamiento de nuestra universidad, y con ello el bienestar estudiantil. Te detallamos sobre el deterioro de las becas y el menú universitario en nuestra UNRC.</h4>
      <br />
      <div className='relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[700px] 2xl:h-[800px] mt-6'>
        <Image
          src={data.images[0]}
          alt='Portada nota estudiantil'
          fill
          className='object-cover shadow-lg'
        />
      </div>
      {epigrafe()}
      <main className='prose prose-lg prose-invert max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto py-8 text-black'>
        
        <p>
          La <a href='https://www.unrc.edu.ar/' target='_blank' rel='noreferrer'> <strong className='hover:underline'>Universidad Nacional de Río Cuarto (UNRC)</strong></a> cuenta con más de <strong>15.000 estudiantes</strong>, que representan aproximadamente al 10% de la población de la ciudad. Es la segunda universidad más grande de Córdoba, posicionándose como una de las más importantes de la provincia.
        </p>
        <br />
        <p>
          Una universidad nacional, pública y  gratuita, no es ajena a la realidad que atraviesa el país. En los últimos años una inflación desmedida provocó un <strong>aumento sostenido en el costo de vida.</strong> Actualmente, la canasta básica alimentaria por persona ronda los <strong>$165.000</strong>. Para los estudiantes, sin embargo, los gastos van mucho más allá de la alimentación: deben afrontar alquileres, materiales de estudio, vestimenta y demás necesidades para sostener una <strong>vida digna.</strong>
        </p>

        <h3 className='text-base1 mt-8 mb-4 border-t-2 border-black pt-4'>Aumento y actualización de becas</h3>
        <div className='relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px] mt-6'>
          <Image
            src={data.images[4]}
            alt='Imagen1 de la nota estudiantil'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        {epigrafe()}
        <p>
          Según el reglamento general, <strong>debe destinarse, al menos, el 2% del presupuesto oficial de la universidad a becas</strong>. Actualmente, el monto de las becas de ayuda económica se encuentra en $105.000, y la dirigida para estudiantes en situación de discapacidad en $205.000. Los datos recopilados desde el Sistema de Información de la Universidad nos muestran que, aproximadamente, 450 estudiantes reciben la beca de ayuda económica, 300 la de alojamiento y 120 la de menú destinada a centros de estudiantes.
        </p>
        <div className='flex my-6'>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[2]}
              alt='Imagen2 de la nota estudiantil'
              fill
              className='object-cover rounded-lg shadow-lg'
            />
          </div>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[1]}
              alt='Imagen3 de la nota estudiantil'
              fill
              className='object-cover rounded-lg shadow-lg'
            />
          </div>
        </div>
        <p className='mt-4'>
          A raíz de esta situación, hace tiempo, los estudiantes reunidos en la <strong>Asamblea Estudiantil</strong> estamos llevando a cabo diversas acciones de visibilización y reclamo en la universidad, tales como pegatineadas de carteles, panfleteadas y pintadas de pasacalles, teniendo en cuenta las siguientes consignas: <strong>aumento en la cantidad y mejora en la calidad de los menúes, con una baja en su valor; incremento del presupuesto total destinado a becas y actualización de su monto, en principio, acorde al valor de la canasta básica alimentaria, cumplimiento de la ocupación total de las 416 unidades cama, incluyendo el reacondicionamiento de las residencias, la habilitación del SUM, la finalización de la obra de gas y el no cobro de los servicios a los residentes.</strong>
        </p>
        <div className='relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px] mt-6'>
          <Image
            src={data.images[3]}
            alt='Imagen4 de la nota estudiantil'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        {epigrafe()}

        <h3 className='text-base1 mt-8 mb-4 border-t-2 border-black pt-4'>El menú no es un lujo, es un derecho universal</h3>
        <div className='relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px] my-6'>
          <Image
            src={data.images[7]}
            alt='Imagen7 de la nota estudiantil'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <p>
          La Universidad Nacional de Río Cuarto afirma que, como institución educativa, <a href='https://www.unrc.edu.ar/unrc/bienestar/' className='hover:underline' target='_blank' rel='noreferrer'><strong>tiene la responsabilidad indelegable de garantizar el acceso al conocimiento en condiciones de igualdad.</strong></a> Es así como nuestra universidad dispone de: <strong>un comedor que posee espacio para 400 personas</strong>, y un menú diario –almuerzo– que se reparte en tres turnos con capacidad para, <strong>al menos, 1.200 menúes.</strong>
        </p>
        <br />
        
        <p>
          A razón de esto, en junio realizamos una <strong>venta de choripanes al costo</strong>, junto con una panfleteada y pintada de pasacalles bajo el lema: <strong>'El menú no es un lujo, es un derecho universal”.</strong> Dicho accionar se realizó con el propósito de evidenciar la baja producción de menúes, con respecto a otros años, en la universidad, y visibilizar que la cantidad de estudiantes que circulan durante el mediodía, superan el número de menúes disponibles. A esto debemos agregarle que <strong>el costo del menú, en contraposición a la calidad, no para de actualizarse mes a mes.</strong>
        </p>
        <div className='flex gap-4 my-6'>
          <div className='relative w-1/3 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[5]}
              alt='Imagen5 de la nota estudiantil'
              fill
              className='object-cover rounded-lg shadow-lg'
            />
          </div>
          <div className='relative w-1/3 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[6]}
              alt='Imagen6 de la nota estudiantil'
              fill
              className='object-cover rounded-lg shadow-lg'
            />
          </div>
          <div className='relative w-1/3 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[8]}
              alt='Imagen8 de la nota estudiantil'
              fill
              className='object-cover rounded-lg shadow-lg'
            />
          </div>
        </div>
        <br />

        <InterviewCard
          nombre='Celeste Escudero'
          fecha='Junio, 2025'
          cita='Cada vez se venden menos menúes, cada vez son menos los estudiantes que acceden y cada vez es más alto el costo y menor la calidad. El menú existe como una política histórica de bienestar que intenta que el estudiante se pueda sostener en la universidad.'
          imagen='/imagenes/entrevistados/celeste-escudero2.jpg'
          color={1}
        />
        <br />
        <br />

        <p>
          Las condiciones para estudiar en la UNRC se complejizan en presencia de un contexto incierto, y <strong>si bien existen políticas de bienestar, resultan insuficientes</strong> frente a la crisis económica actual. La alimentación, el alojamiento y el acceso a materiales básicos de estudio <strong>no deben quedar librados a la voluntad individual ni a la resistencia del estudiantado.</strong>
          <br />
          La universidad debe garantizar el ingreso, la permanencia y el egreso de quienes la habitan. Con organización, visibilización y participación activa, los estudiantes reafirmamos que <strong>el bienestar estudiantil no es un privilegio, es un derecho.</strong>
          <br />
          Por esta razón, desde la Asamblea Estudiantil impulsamos reclamos que abren un debate que atraviesa a toda la comunidad educativa:  
        </p>
        <h3 className='text-base1 mt-8 mb-4 text-center'>
          ¿Qué modelo de universidad queremos defender?
        </h3>

      </main>
    </>
  );
}

function epigrafe() {
  return (
    <span className='flex justify-end font-truculenta text-lg text-gray-600'>Fotografía: Julia Quiroz</span>
  );
}