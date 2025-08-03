import InterviewCard from '../../../components/cards/InterviewCard';
import Image from 'next/image';

export default function Nota() {
  return (
    <>
      <header className='flex flex-col mt-14 text-center'>
        <p className='mb-4 mx-auto text-black font-mono text-center'>ESTUDIANTIL</p>
        <h1 className='border-t-2 border-black text-center text-base1 py-4 ' style={{ textShadow: 'none' }}>¿Qué modelo de universidad queremos defender?</h1>
        {/* <hr className='border-b-2 border-black' /> */}
        <p className='text-right text-gray-900 mt-2 italic mb-4'>11 de agosto de 2025</p>
      </header>
      <h4 className='italic text-black max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto' style={{ textShadow: 'none' }}>Peligra el funcionamiento de nuestra universidad, y con ello el bienestar estudiantil. Te detallamos sobre el deterioro de las becas y el menú universitario en nuestra UNRC.</h4>
      <br />
      <div className='relative w-full h-[300px] lg:h-[500px] my-6'>
          <Image
            src='https://media.puntal.com.ar/p/d75e327dfcd14d03e05475f4c6d3b31c/adjuntos/270/imagenes/001/584/0001584009/1200x0/smart/unrc-frente-ao-4jpg.jpg'
            alt='Portada de la nota estudiantil'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
      <main className='prose prose-lg prose-invert max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto py-8 text-black'>
        
        <p>
          La <a href='https://www.unrc.edu.ar/' target='_blank' rel='noreferrer'> <strong className='hover:underline'>Universidad Nacional de Río Cuarto (UNRC)</strong></a> cuenta con más de <strong>15.000 estudiantes</strong>, que representan aproximadamente al 10% de la población de la ciudad. Es la segunda universidad más grande de Córdoba, posicionándose como una de las más importantes de la provincia.
          <br />
          Una universidad nacional, pública y  gratuita, no es ajena a la realidad que atraviesa el país. En los últimos años una inflación desmedida provocó un aumento sostenido en el costo de vida. Actualmente, la canasta básica alimentaria por persona ronda los $160.000. Para los estudiantes, sin embargo, los gastos van mucho más allá de la alimentación: deben afrontar alquileres, materiales de estudio, vestimenta y demás necesidades para sostener una vida digna.
        </p>
        <h3 className='text-base1 mt-8 mb-4'>Aumento y actualización de becas</h3>
        <p>
          Según el reglamento general, <strong>debe destinarse, al menos, el 2% del presupuesto oficial de la universidad a becas</strong>. Actualmente, el monto de las becas de ayuda económica se encuentra en $105.000, y la dirigida para estudiantes en situación de discapacidad en $205.000. Los datos recopilados desde el Sistema de Información de la Universidad nos muestran que, aproximadamente, 450 estudiantes reciben la beca de ayuda económica, 300 la de alojamiento y 120 la de menú destinada a centros de estudiantes.
        </p>
        <div className='relative w-full h-[300px] lg:h-[650px] mt-6'>
          <Image
            src='https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/490289688_1273571977527097_6247454179966658742_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEEtZWtkqOs4XNSlyTO1K5qG5PO-bOWmCUbk875s5aYJeKZKfRjc8cyuRblQjH05t4&_nc_ohc=tjgT2ExdaSQQ7kNvwE7RJhV&_nc_oc=AdnxQlAlSrzAZXM26DPwMRmF_2gMlzOa-dYRpezQ1RITTwwshlHWB_xFtPGG1cNSA-U&_nc_zt=23&_nc_ht=scontent.fros2-2.fna&_nc_gid=KLovI-hLmtoUs86XJ2KpAg&oh=00_AfQtYC2OSV2FX8-ODHqPbgJLaMtzgZb5HxT-YWs_6hWxGw&oe=6894E911'
            alt='Imagen de la nota estudiantil'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <span className='font-truculenta text-lg text-gray-600 text-right'>Fotografía: Julia Quiroz</span>
        <p className='mt-4'>
          A raíz de esta situación, hace tiempo, los estudiantes reunidos en la Asamblea Estudiantil estamos llevando a cabo diversas acciones de visibilización y reclamo en la universidad, tales como pegatineadas de carteles, panfleteadas y pintadas de pasacalles, teniendo en cuenta las siguientes consignas: aumento en la cantidad y mejora en la calidad de los menúes, con una baja en su valor; incremento del presupuesto total destinado a becas y actualización de su monto, en principio, acorde al valor de la canasta básica alimentaria, cumplimiento de la ocupación total de las 416 unidades cama, incluyendo el reacondicionamiento de las residencias, la habilitación del SUM, la finalización de la obra de gas y el no cobro de los servicios a los residentes. 
        </p>

        <h3 className='text-base1 mt-8 mb-4'>El menú no es un lujo, es un derecho universal</h3>
        <p className='mb-8'>
          La Universidad Nacional de Río Cuarto afirma que, como institución educativa, tiene la responsabilidad indelegable de garantizar el acceso al conocimiento en condiciones de igualdad. Es así como nuestra universidad dispone de: un comedor que posee espacio para 400 personas, y un menú diario –almuerzo– que se reparte en tres turnos con capacidad para, al menos, 1.200 menúes.
          <br />
          A razón de esto, en junio realizamos una venta de choripanes al costo, junto con una panfleteada y pintada de pasacalles bajo el lema: "El menú no es un lujo, es un derecho universal”. Dicho accionar se realizó con el propósito de evidenciar la baja producción de menúes, con respecto a otros años, en la universidad, y visibilizar que la cantidad de estudiantes que circulan durante el mediodía, superan el número de menúes disponibles. A esto debemos agregarle que el costo del menú, en contraposición a la calidad, no para de actualizarse mes a mes.
        </p>

        <InterviewCard
          nombre='Celeste Escudero'
          fecha='Junio, 2025'
          cita='Cada vez se venden menos menúes, cada vez son menos los estudiantes que acceden y cada vez es más alto el costo y menor la calidad. El menú existe como una política histórica de bienestar que intenta que el estudiante se pueda sostener en la universidad.'
          imagen='/imagenes/entrevistados/celeste-escudero2.jpg'
        />

        <h3 className='text-base1 mt-8 mb-4'>Reflexión final</h3>
        <p>
          Las condiciones para estudiar en la UNRC se complejizan en presencia de un contexto incierto, y si bien existen políticas de bienestar, resultan insuficientes frente a la crisis económica actual. La alimentación, el alojamiento y el acceso a materiales básicos de estudio no deben quedar librados a la voluntad individual ni a la resistencia del estudiantado.
          <br />
          La universidad debe garantizar el ingreso, la permanencia y el egreso de quienes la habitan. Con organización, visibilización y participación activa, los estudiantes reafirmamos que el bienestar estudiantil no es un privilegio, es un derecho.
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
