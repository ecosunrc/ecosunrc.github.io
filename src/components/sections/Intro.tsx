'use client'

export default function Intro() {
  return (
    <>
      <h1 className='text-center text-6xl font-bold text-base1 bg-white/80 p-16'>
        Te damos la bienvenida a la revista estudiantil de la UNRC: ECOS
      </h1>
      <p className='text-center text-2xl text-black bg-white mx-auto w-full max-w-4xl p-4 resize-none rounded-lg shadow-lg'>
        Acá vas a encontrar un espacio de discusión, reflexión y creatividad, donde estudiantes compartimos luchas, noticias y actividades relacionadas con la universidad.
        <br />
        ¡Sumá tu voz al eco estudiantil!
      </p>
    </>
  );
}