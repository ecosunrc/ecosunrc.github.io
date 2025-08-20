'use client'

export default function AboutUs() {
  return (
    <>
      <h1 className='text-center text-base1 w-full mt-auto'>
        ¿QUÉ ES ECOS?
      </h1>
      <div className='flex flex-col items-center gap-4 mt-6 mb-auto max-w-6xl'>
        <h3 className='text-justify text-white bg-base1 py-2 px-4'>
          <strong>ECOS</strong> está conformada por estudiantes de facultades y carreras diferentes entre sí con algo que nos une: <strong>todos somos parte de la UNRC y queremos generar un cambio.</strong>
        </h3>
        <p className='text-justify text-black py-3 bg-white rounded-lg shadow-lg px-4'>
          El propósito de esta revista es <strong>construir un espacio de comunicación y expresión abierto a todos los estudiantes</strong>, donde podamos organizarnos para visibilizar las problemáticas que nos afectan como comunidad y luchar por una mejor universidad.
          <br />
          <br />
          Te invitamos a ser parte:
        </p>
        <h3 className='text-center'>¡SUMA TU VOZ AL ECO ESTUDIANTIL!</h3>
      </div>
    </>
  );
}