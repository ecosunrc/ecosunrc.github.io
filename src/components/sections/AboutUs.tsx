'use client'

export default function AboutUs() {
  return (
    <>
      <h1 className='text-center text-base1 w-full mt-auto'>
        ¿QUÉ ES ECOS?
      </h1>
      <div className='flex flex-col items-center gap-4 mt-6 mb-auto max-w-6xl'>
        <h3 className='text-justify text-white bg-base1 py-2 px-4'>
          Ecos, una revista estudiantil de la Universidad Nacional de Río Cuarto.
        </h3>
        <p className='text-justify text-black py-3 bg-white rounded-lg shadow-lg px-4'>
          Ecos busca dar voz a las luchas, noticias y actividades que nos involucran como comunidad universitaria.
          <br />
          <br />
          Somos un grupo de estudiantes de diferentes carreras que busca crear un espacio de comunicación y expresión para todos los estudiantes. A través de nuestra revista, queremos dar voz a las luchas, noticias y actividades que nos involucran como comunidad universitaria.
        </p>
      </div>
    </>
  );
}