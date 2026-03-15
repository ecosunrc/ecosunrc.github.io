'use client';
import { usePathname } from 'next/navigation';
import { data } from '../estudiantil/data';
import Loading from '@/components/Loading';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Nota() {
  const fullPath = usePathname();
  const pathEdition = fullPath.split('ediciones/')[1];
  const pathSection = pathEdition.split('/')[1];
  const [loading, setLoading] = useState(true);
  const [showSial, setShowSial] = useState(false);
  const [showSalud, setShowSalud] = useState(false);
  const [showComedor, setShowComedor] = useState(false);
  const [showBiblioteca, setShowBiblioteca] = useState(false);
  const [showTransporte, setShowTransporte] = useState(false);
  const [showBeca, setShowBeca] = useState(false);
  const [showDeporte, setShowDeporte] = useState(false);

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
      <h3 className='italic text-base1 max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-10 py-2 bg-white' style={{ textShadow: 'none' }}>
        Todo lo que tenés que saber sobre la uni
      </h3>
      <br />
      <h4 className='italic text-black max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-10' style={{ textShadow: 'none' }}>
        Esta guía para el ingresante pretende brindar la información necesaria para acceder a diversas herramientas y acompañar el inicio de la vida universitaria.
      </h4>
      <br />
      <div className='flex w-full flex-col lg:flex-row items-center gap-4'>
        <div className='relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] mt-6'>
          <Image
            src={data.images[1]}
            alt='Portada nota ingresantes'
            fill
          />
        </div>
        <div className='flex flex-col bg-base1 text-white w-fit h-fit p-2'>
          <p><strong>1. Pabellón 5</strong></p>
          <p><strong>2. Pabellón 4</strong></p>
          <p><strong>3. Facultad Agro-Vet</strong></p>
          <p><strong>4. Biblioteca</strong></p>
          <p><strong>5. Comedor</strong></p>
          <p><strong>6. Pabellón 3</strong></p>
          <p><strong>7. Pabellón 2</strong></p>
          <p><strong>8. Anfiteatro abierto</strong></p>
          <p><strong>9. Aula mayor</strong></p>
          <p><strong>10. Facultades: Cs. Económicas, Cs. Exactas, Ingeniería y Cs. Humanas</strong></p>
          <p><strong>11. Centro de Salud</strong></p>
          <p><strong>12. Secretaría de Bienestar</strong></p>
          <p><strong>13. Plaza de la Militancia</strong></p>
          <p><strong>14. Gimnasio mayor</strong></p>
          <p><strong>15. Gimnasio menor</strong></p>
        </div>
      </div>
      <main className='prose prose-lg prose-invert max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto p-8 text-black'>
        <h4 className='italic text-white w-fit p-2 bg-base1 cursor-pointer hover:scale-105 transition-transform' onClick={() => setShowSial(!showSial)}>
          Sistema Integral del Alumno (SIAL)
        </h4>
        <br />
        {showSial && (
          <div className='bg-white p-4 mb-4'>
            <p>
              Dentro del <a href="https://sisinfo2.unrc.edu.ar/" className='text-base1 hover:underline'>SISINFO</a>, vamos a encontrar el apartado “SIAL”, en el cual están todas las herramientas que necesitamos para organizar nuestro trayecto académico:
            </p>
            <br />
            <div className='flex flex-col gap-2'>
              <p><strong>Plan de estudios:</strong> Te permite acceder a las materias de cada año de tu carrera.</p>
              <p><strong>Calendario académico:</strong> Acá vas a consultar las fechas correspondientes de los cuatrimestres, como por ejemplo, los plazos para realizar las inscripciones.</p>
              <p><strong>Inscripciones:</strong> Vas a encontrar las materias que estás habilitado para cursar durante el cuatrimestre. Es necesario inscribirse para acceder al material y poder acreditar la materia. También encontramos las inscripciones para rendir. Se habilitan en las fechas correspondientes a los turnos de exámenes finales.</p>
            </div>
            <br />
          </div>
        )}
        <h4 className='italic text-white w-fit p-2 bg-base1 cursor-pointer hover:scale-105 transition-transform' onClick={() => setShowSalud(!showSalud)}>
          Salud
        </h4>
        <br />
        {showSalud && (
          <div className='bg-white p-4 mb-4'>
            <p className='italic bg-base2 p-2 text-white'>Es fundamental sacar turno para los exámenes generales bianuales a través del <a href="https://sisinfo2.unrc.edu.ar/" className='text-base1 hover:underline'>SISINFO</a> en el apartado “Salud” y prestar mucha atención a los elementos solicitados.</p>
            <div className='flex flex-col gap-2'>
              <p><strong>Atención médica y de Urgencias:</strong> 7:00 a 23:00 hs.</p>
              <p><strong>Atención administrativa:</strong> 8:00 a 12:30 hs y 13:00 a 17:00 hs.</p>
            </div>
          </div>
        )}
        <h4 className='italic text-white w-fit p-2 bg-base1 cursor-pointer hover:scale-105 transition-transform' onClick={() => setShowComedor(!showComedor)}>
          Comedor universitario
        </h4>
        <br />
        {showComedor && (
          <div className='bg-white p-4 mb-4'>
            <p>
              Generar una credencial en el apartado “Comedor” dentro del <a href="https://sisinfo2.unrc.edu.ar/" className='text-base1 hover:underline'>SISINFO</a> y cargar dinero para su compra (se recarga con efectivo/transferencia en el mismo comedor). Reservarlo el mismo día que se va a consumir y elegir el horario más cómodo en función de tu cursada.
            </p>
            <br />
            <div className='flex flex-col gap-2'>
              <p><strong>Horario del comedor:</strong> Lunes a viernes de 8:00 a 20:30 hs.</p>
              <p><strong>Horario de la reserva:</strong> Se habilita la venta del menú vía web desde el Domingo a las 15 hs. hasta el Viernes a las 14 hs.</p>
              <p><strong>Franjas horarias de retiro de menú:</strong> 11:30 a 12:20 hs, 12:20 a 13:10 hs y 13:10 a 14:00 hs.</p>
            </div>
          </div>
        )}
        <h4 className='italic text-white w-fit p-2 bg-base1 cursor-pointer hover:scale-105 transition-transform' onClick={() => setShowBiblioteca(!showBiblioteca)}>
          Biblioteca
        </h4>
        <br />
        {showBiblioteca && (
          <div className='bg-white p-4 mb-4'>
            <p>Para retirar libros y reservar la sala multiusos debemos suscribirnos a través del <a href="https://sisinfo2.unrc.edu.ar/" className='text-base1 hover:underline'>SISINFO</a> en el apartado Biblioteca.</p>
            <div className='flex flex-col gap-2'>
              <p><strong>Horario:</strong> Lunes a viernes de 08:00 a 20:00 hs.</p>
            </div>
          </div>
        )}
        <h4 className='italic text-white w-fit p-2 bg-base1 cursor-pointer hover:scale-105 transition-transform' onClick={() => setShowTransporte(!showTransporte)}>
          Transporte
        </h4>
        <br />
        {showTransporte && (
          <div className='bg-white p-4 mb-4'>
            <p>En nuestra provincia los estudiantes contamos con el Boleto Educativo Cordobés.</p>
            <br />
            <div className='flex flex-col gap-2'>
              <p><strong>2 Boletos urbanos diarios.</strong></p>
              <p><strong>2 Boletos interurbanos diarios</strong> (para quienes viven a menos de 50km de la UNRC).</p>
              <p><strong>1 Boleto ida y vuelta mensual</strong> (para los oriundos de localidades que superan los 50km de distancia).</p>
            </div>
            <br />
            <p className='italic text-base2 bg-base1 p-2'>A pesar de múltiples reclamos estudiantiles (de las 3 universidades nacionales al gobierno de la provincia de Córdoba) seguimos sin contar con el boleto para el mes de febrero. Los estudiantes lo somos todo el año, por eso mantenemos la consigna: <strong>BEC de febrero a diciembre.</strong></p>
          </div>
        )}
        <h4 className='italic text-white w-fit p-2 bg-base1 cursor-pointer hover:scale-105 transition-transform' onClick={() => setShowBeca(!showBeca)}>
          Beca
        </h4>
        <br />
        {showBeca && (
          <div className='bg-white p-4 mb-4'>
            <p>Las becas estudiantiles están destinadas a garantizar igualdad de oportunidades mediante una ayuda económica.</p>
            <br />
            <p className='text-base2 bg-base1 p-2 w-fit'>La preinscripción se realiza a través del <a href="https://sisinfo2.unrc.edu.ar/" className='text-white hover:underline'>SISINFO</a> en el apartado “Becas”.</p>
            <p className='italic'>(Se debe completar una solicitud correspondiente y adjuntar la documentación dentro de los plazos establecidos).</p>
            <br />
            <div className='flex flex-col gap-2'>
              <p><strong>Ayuda económica:</strong> $155.000*</p>
              <p><strong>Ayuda de económica para estudiantes en situación de discapacidad:</strong> $305.000*</p>
              <p><strong>Residencias:</strong> 104 departamentos y 4 estudiantes por departamento.</p>
            </div>
            <p className='italic'>*En conjunto con la beca, el estudiante accede a 20 menúes gratuitos.</p>
            <br />
            <p className='italic text-black bg-base2 p-2'>También existen programas nacionales como la Beca Progresar para cualquier estudiante que cumpla con los requisitos correspondientes y la Beca Manuel Belgrano, destinada a quienes se inscriben en un listado de carreras estratégicas que se actualiza todos los años.</p>
          </div>
        )}
        <h4 className='italic text-white w-fit p-2 bg-base1 cursor-pointer hover:scale-105 transition-transform' onClick={() => setShowDeporte(!showDeporte)}>
          Deportes, arte y cultura
        </h4>
        <br />
        {showDeporte && (
          <div className='bg-white p-4 mb-4'>
            <p>A lo largo del año, la universidad ofrece una amplia variedad de actividades deportivas, recreativas, artísticas y culturales.</p>
            <br />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 align-items-center justify-items-center'>
              <div className='flex flex-col gap-1 bg-base2 p-2 text-black text-center w-fit h-fit'>
                <p><strong>Disciplinas federadas:</strong></p>
                <p>Fútbol 11 Masculino</p>
                <p>Fútbol 11 Femenino</p>
                <p>Futsal Masculino</p>
                <p>Fútbol Infanto-Juvenil</p>
                <p>Hockey Femenino</p>
                <p>Voleibol Femenino</p>
                <p>Handball Masculino</p>
                <p>Handball Femenino</p>
                <p>Básquet Femenino</p>
                <p>Ajedrez</p>
                <p>Softball</p>
              </div>
              <div className='flex flex-col gap-1 bg-base2 p-2 text-black text-center w-fit h-fit'>
                <p><strong>Disciplinas recreativas:</strong></p>
                <p>Ajedrez</p>
                <p>Básquet Masculino</p>
                <p>Handball Juveniles</p>
                <p>Voleibol</p>
                <p>Escuela de Fútbol Infantil</p>
                <p>Escuela de Hockey Infantil</p>
                <p>Escuela de Voleibol Infantil</p>
                <p>Fútbol 7 Liga Universitaria</p>
                <p>Gimnasio Musculación</p>
                <p>Aerobic</p>
                <p>Caminata Saludable</p>
                <p>Circo</p>
                <p>Taller de yoga</p>
                <p>Taller de salsa y bachata</p>
                <p>Taller de Aikido</p>
              </div>
              <div className='flex flex-col gap-1 bg-base2 p-2 text-black text-center w-fit h-fit'>
                <p><strong>Olimpiadas especiales:</strong></p>
                <p>Fútbol Silencioso</p>
                <p>Básquet Adaptado</p>
                <p>Actividades artísticas</p>
                <p>Actividades Expresivas</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}