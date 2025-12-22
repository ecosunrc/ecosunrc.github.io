'use client';
import Image from 'next/image';
import { data } from './data';
import Loading from '@/components/Loading';
import { useEffect, useState } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import InfoCard from '@/components/InfoCard';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ITEMS = [
  {
    id: 1,
    title: 'Reconfiguración de las modalidades de enseñanza y aprendizaje (educación híbrida, bimodal, virtual y remota);',
    content: ' que está dirigida a modalidades mixtas de presencialidad y virtualidad. De ser aprobada, una misma carrera puede ser dictada presencialmente o a distancia.',
  },
  {
    id: 2,
    title: 'Propuestas académicas: revisión de la distancia entre la duración teórica y la duración real de las carreras (horas máximas y créditos académicos);',
    content: ' sostiene que las horas de cursado, estudio y realización de tareas académicas superan las horas teóricas establecidas en los planes de estudio. De esta manera, se propone la flexibilización de los trayectos formativos acortando así la duración de los mismos. Para las carreras de grado se establece un mínimo de cuatro años y un máximo que no puede exceder el 25% de lo establecido. A partir de lo propuesto, las horas se deben contabilizar en créditos.',
  },
  {
    id: 3,
    title: 'Conformación de una carrera para investigadores universitarios;',
    content: ' es decir, institucionalizar la figura del investigador universitario a través de una carrera y una titulación propia.',
  },
  {
    id: 4,
    title: 'Titulaciones intermedias, certificaciones, trayectos formativos, reconocimiento de competencias;',
    content: ' plantea la creación de Titulaciones Intermedias, Certificaciones de Saberes y Certificaciones de Formación Profesional, que se otorgarían una vez acreditada parte de las unidades curriculares, pudiendo anexar un complemento de unidades exclusivas de otro tramo.',
  },
  {
    id: 5,
    title: 'Reconocimiento de la calidad de las carreras del artículo 42;',
    content: ' propone la creación de un mecanismo de evaluación de calidad para todas las carreras con certificación oficial, llevado a cabo por la CONEAU, organismo que actualmente regula los títulos.',
  },
  {
    id: 6,
    title: 'Reconsideración de la movilidad internacional;',
    content: ' la movilidad inclusiva, hace referencia a nivelar nuestros títulos académicos en función de los contenidos prioritarios que tienen a nivel internacional.',
  },
  {
    id: 7,
    title: 'Curricularización de la extensión;',
    content: ' se refiere a incorporar la extensión universitaria como instancia formativa obligatoria en la currícula.',
  },
];

export default function Nota() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className='py-10'></div>
      <p className='mx-auto w-fit font-mono text-white text-center bg-black p-1'>ESTUDIANTIL - NACIONAL</p>
      <header className='flex flex-col text-center border-y-2 border-black my-2 px-10'>
        <h1 className='text-center text-base1 py-4' style={{ textShadow: 'none' }}>{data.title}</h1>
        <p className='text-right text-gray-900 mt-2 italic mb-4'>{data.date}</p>
      </header>
      <h4 className='italic text-black max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-10' style={{ textShadow: 'none' }}>El proyecto de la Nueva Universidad Argentina se presenta como una propuesta para transformar el sistema educativo superior. Conlleva una serie de modificaciones en la manera de contabilizar las horas de cursado y sus modalidades, apuntando a sistemas híbridos.</h4>
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
      <main className='prose prose-lg prose-invert max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto p-8 text-black'>

        <p>
          El 14 de diciembre del 2021, durante la gestión de Alberto Fernández, se reúne el Ministro de Educación, Jaime Perczyk; el secretario de Políticas Universitarias, Oscar Alpa, y las autoridades del CIN, Rodolfo Tecchi y Enrique Mammarella, con el objetivo de realizar un acta de declaración. En la misma, se sostiene que <strong>ante los desafíos que el escenario pos pandemia presenta se necesita redefinir el currículum académico</strong>, apuntando al supuesto desarrollo económico y social. De este modo, se establecen <strong>siete lineamientos centrales</strong> de políticas universitarias. El 20 de octubre de 2023, el CIN aprobó por unanimidad una serie de resoluciones avalando <strong>los siguientes puntos:</strong>
        </p>
        <br />
        <div className="w-full xl:w-1/2 mx-auto">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            containerClass="carousel-container"
            itemClass="px-2"
          >
            {ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-base1 text-white p-16 h-full rounded-lg shadow-lg flex flex-col items-center justify-center text-center"
              >
                <h3 className="text-xl font-bold text-center mb-4 border-b border-white/20 pb-2">
                  {item.id}
                </h3>
                <p>
                  <strong>{item.title}</strong>
                  {item.content}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
        <br />
        <div className="relative w-full xl:mb-16">
          <div className="float-right w-1/2 sm:w-1/3 ml-4 mb-4">
            <InfoCard
              title="¿SABÍAS QUE...?"
              content={<p className="mt-4 text-sm text-black font-medium">Un <strong>Crédito de Referencia del Estudiante</strong> es la unidad de tiempo total de trabajo académico que, estimativamente, dedican los estudiantes para alcanzar los objetivos formativos del plan de estudio. El valor asignado a cada uno es de entre <strong>25 y 30 horas de trabajo total</strong> del estudiante y los planes de estudio tendrán un valor promedio de <strong>60 créditos anuales</strong>.</p>}
              bgColor="bg-base2 border-4 border-base1"
              accentColor="base2 border-4 border-base1 text-base1"
            />
          </div>
          <p>
            Estos siete puntos componen cuatro sistemas que se implementan en etapas: <strong>SIED</strong> (Sistema Institucional de Educación a Distancia), <strong>SACAU</strong> (Sistema de Créditos Académicos universitarios), <strong>SIAC</strong> (Sistema Institucional de Aseguramiento de la Calidad) e <strong>Internacionalización de planes de estudio</strong>. En noviembre del 2023 el Ministerio de Educación aprueba la resolución implementando el SACAU. En 2025, ya en la gestión de Javier Milei, la misma se aprueba por resolución del Ministerio de Capital Humano que implementa algunas modificaciones a lo sancionado dos años antes. Esta reestructuración del sistema educativo superior <strong>no es inocente</strong>. Subyace una concepción individualista y mercantil de la educación. Afecta de manera directa la producción de conocimientos, dejando la formación académica y la calidad educativa a merced de los <strong>intereses empresariales</strong>.
          </p>
        </div>
        <br />
        <div className='relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[700px] 2xl:h-[800px]'>
          <Image
            src={data.images[2]}
            alt='Imagen3 de la nota estudiantil'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <br />
        <p>
          Este proyecto, se impone bajo los argumentos de la libertad educativa, la flexibilidad curricular y la movilidad estudiantil, prometiendo una mayor eficiencia y optimización. No obstante, <strong>acortar los planes de estudio</strong> bajo las condiciones del SACAU genera una <strong>reducción de los saberes</strong>. No en función de la excelencia académica, sino de la <strong>rentabilidad del mercado</strong>, el cual incidiría en las decisiones disciplinares. La <strong>internacionalización</strong> de los planes de estudio nivelaría nuestra formación de educación superior con la europea, que actualmente requiere especializaciones de posgrado para adquirir el nivel de los títulos de grado de la educación argentina. De esta manera, se promete una mejor salida laboral en el exterior, a pesar de que la misma <strong>ya existe teniendo un título de grado actual</strong>. Plantear titulaciones intermedias como “reconocimiento de los contenidos” solo es <strong>encubrir la deserción estudiantil rechazando políticas de bienestar reales</strong> que garantizan el ingreso, la permanencia y el egreso de los estudiantes. Esto se traduce en un <strong>gasto estatal</strong> para “fortalecer” un organismo, como la CONEAU, que ya se encarga de cerciorarse de la excelencia educativa y entregar certificaciones intermedias, que no tendrán valor académico real.
        </p>
        <br />
        <div className='relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[700px] 2xl:h-[800px]'>
          <Image
            src={data.images[1]}
            alt='Imagen2 de la nota estudiantil'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <br />
        <p>
          En conclusión, el proyecto de la <strong>Nueva Universidad Argentina</strong> se presenta como una modernización, con el objetivo de generar transformaciones en las modalidades de formación y la producción de saberes, pero en realidad busca reformular la educación superior bajo criterios de <strong>rentabilidad y competitividad</strong>. Detrás del discurso de la innovación y la internacionalización, opera una visión que <strong>concibe la universidad como un servicio y no como un derecho</strong>. Esta reforma amenaza con reducir los conocimientos y fragmentar las trayectorias académicas.
        </p>
        <p className='text-white bg-base1 px-2 py-1'>
          <strong>En un contexto de profundos retrocesos sociales, defender la universidad pública, gratuita y de calidad es también defender la soberanía educativa y el futuro colectivo.</strong>
        </p>
      </main>
    </>
  );


}

function epigrafe() {
  return (
    <div className='flex justify-between mx-8'>
      <span className='font-truculenta text-lg text-gray-600'>“Una nueva universidad argentina” actividad organizada por estudiantes de Pública y Gratuita.</span>
      <span className='font-truculenta text-lg text-gray-600'>Ph: Iñaki Carrera.</span>
    </div>
  );
}