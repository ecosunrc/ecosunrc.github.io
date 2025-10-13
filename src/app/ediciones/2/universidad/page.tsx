'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { data } from './data';
import Loading from '@/components/Loading';
import { useEffect, useState } from 'react';
import InterviewCard from '@/components/cards/InterviewCard';

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
        <header className='flex flex-col w-full'>
          <h1 className='text-center text-base1 py-4' style={{ textShadow: 'none' }}>
            {data.title}
          </h1>
          <p className='text-right text-gray-900 mt-2 italic mb-4'>{data.date}</p>
        </header>
      </div>
      <h4 className='italic text-black max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-10' style={{ textShadow: 'none' }}>En la última semana de agosto se realizó el Foro Internacional de Emprendedores 2025, en el cual veintidós estudiantes de la UNRC participaron gracias a una beca otorgada por el Banco Nación.</h4>
      <br />
      <div className='relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:h-[900px] mt-6'>
        <Image
          src={data.images[1]}
          alt='Portada nota universidad'
          fill
          className='object-cover shadow-lg'
        />
      </div>
      <main className='prose prose-lg prose-invert max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto p-8 text-black'>
        
        <p>
          <strong>El Foro Internacional de Emprendedores (FIE)</strong> es un evento organizado por Junior Achievement, una ONG que tiene por finalidad el aprendizaje activo en educación financiera, formación para el trabajo y emprendimiento. Este evento en particular <strong>convoca anualmente a jóvenes entre 16 y 21 años de más de diez países.</strong>
        </p>
        <div className='relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px] my-6'>
          <Image
            src={data.images[0]}
            alt='Imagen1 de la nota universidad'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <p>
          <strong>Lucas Mondino, estudiante de Ingeniería en Energías Renovables</strong>, nos comenta su experiencia tras haber concurrido al Foro. La convocatoria, impulsada por la universidad a través del proyecto Centro de Cultura Emprendedora, fue difundida por medio de grupos de WhatsApp y redes.
        </p>
        <br />
        <p>
          <strong>El FIE albergó aproximadamente a trescientos jóvenes de distintos países de latinoamérica</strong>, que participaron de diversas actividades como <strong>conferencias</strong> magistrales, <strong>talleres</strong> que promueven el trabajo grupal y <strong>eventos</strong> recreativos. Entre estas, él destaca la participación de delegaciones regionales en stands destinados a compartir información representativa de las características propias de cada zona. Su finalidad es <strong>fomentar el intercambio cultural</strong>, ampliando las perspectivas de los participantes.
        </p>
        <br />
        <div className='flex my-6'>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[2]}
              alt='Imagen2 de la nota universidad'
              fill
              className='object-cover rounded-lg shadow-lg'
            />
          </div>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[3]}
              alt='Imagen3 de la nota universidad'
              fill
              className='object-cover rounded-lg shadow-lg'
            />
          </div>
        </div>
        <br />

        <InterviewCard
          nombre='Lucas Mondino Masuco'
          fecha='Septiembre, 2025'
          cita='Sí, por supuesto, estamos todos muy agradecidos con la universidad por habernos provisto esta experiencia. Prácticamente no tuvimos gastos porque todo lo que fue el paquete del FIE fue subsidiado por el Banco de la Nación y lo que fue el viaje de ida y vuelta fue provisto por la universidad, el colectivo propio de la Uni. A más de uno nos posibilitó haber podido ir, ya que de otro modo probablemente muchos no hubiéramos podido.'
          imagen='/imagenes/entrevistados/lucas-mondino.jpg'
          color={1}
          pregunta='¿Te parece importante que la universidad contribuya a la realización de este tipo de actividades recreativas?'
        />
        <InterviewCard
          cita='Yo creo que fue una gran experiencia para abrir la mente y ver todo lo que uno puede hacer, más allá de emprender y generar un negocio rentable. (...) no tanto cerrarse en lo que uno ve de inmediato, sino ver todas las posibilidades de expansión a futuro que hay y cómo relacionarlas con otras áreas. Hay talleres de herramientas donde vienen otros profesionales a enseñarnos sobre algunos medios o sobre cómo emplear tal o cual herramienta.'
          color={1}
          pregunta='¿Hay algo que sientas que es importante destacar de esta experiencia?'
        />
        <InterviewCard
          cita='Sí. Nuestra experiencia fue muy linda y muy enriquecedora, poder compartir con chicos de otros lados, con chicos que uno no conoce. Ya después en lo que es todo el Foro de por sí, hay muchas actividades a lo largo del día. (...) Si bien es un foro de emprendedurismo, no está orientado exclusivamente a la parte de emprender como tal en lo financiero o empresarial, sino también en lo personal. Muchas actividades estaban encaradas en el sentido de hacer un poco de introspección, revisar uno mismo. Está bueno para muchos de los chicos que por ahí están terminando el secundario, para hacer un poco de autoevaluación.'
          color={1}
          pregunta='¿Sentís que le pudieron sacar provecho?'
        />
        <br />
        <div className='flex my-6'>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[4]}
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
        <br />
        <p>
          Además de la beca concedida por el Banco Nación, que cubrió el hospedaje, la comida y la participación del FIE, <strong>la Universidad Nacional de Río Cuarto (UNRC) puso a disposición los colectivos propios del establecimiento.</strong> La propuesta surgió directamente desde la institución, que se encargó tanto del viaje de ida como el de vuelta.
        </p>
        <br />
        <p>
          De esta manera, se observa cómo la universidad destina fondos a viajes necesarios para enriquecer nuestro trayecto académico. Sin embargo, <strong>frente a un contexto de desfinanciamiento a la educación, cada vez se reducen más las posibilidades de acceder a este tipo de experiencias.</strong> Como bien apreció el estudiante a lo largo de la entrevista, <strong>es fundamental que las universidades nacionales generen el espacio para promover el debate e intercambio de ideas a través de viajes.</strong>
        </p>
      </main>
    </>
  );
}