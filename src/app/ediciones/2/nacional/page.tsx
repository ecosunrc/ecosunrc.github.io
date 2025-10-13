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
      <header className='flex flex-col text-center border-y-2 border-black my-2 px-10'>
        <h1 className='text-center text-base1 py-4' style={{ textShadow: 'none' }}>{data.title}</h1>
        <p className='text-right text-gray-900 mt-2 italic mb-4'>{data.date}</p>
      </header>
      <h4 className='italic text-black max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-10' style={{ textShadow: 'none' }}>Se acaba septiembre y con él, la semana del estudiante. Hacemos un repaso de lo que fueron las conquistas estudiantiles argentinas a lo largo de la historia. </h4>
      <br />

      <div className='relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:h-[900px] mt-6'>
        <Image
          src={data.images[11]}
          alt='Portada nota nacional'
          fill
          className='object-cover shadow-lg'
        />
      </div>
      <main className='prose prose-lg prose-invert max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto p-8 text-black'>
        
        <p>
          <strong>El movimiento estudiantil argentino es protagonista de grandes cambios a través de luchas y conquistas que se consiguieron a lo largo del tiempo,</strong> atravesando distintos momentos que demuestran una gran determinación estudiantil.
        </p>
        <h3 className='text-base1 mt-8 mb-4 border-t-2 border-black pt-4'>1918: Reforma universitaria</h3>

        <div className='relative w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] my-6'>
          <Image
            src={data.images[1]}
            alt='Imagen1 de la nota nacional'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <p>
          En 1918 los estudiantes de la Universidad Nacional de Córdoba comenzaron una protesta para reclamar y exigir profundas reformas en la universidad, extendiendo esos reclamos a toda América Latina y pronto a todo el mundo. Sus reclamos: <strong>autonomía, cogobierno, libertad de cátedra y extensión universitaria.</strong> Transformaron para siempre la universidad, democratizando el acceso al conocimiento y <strong>convirtiéndose en bandera continental.</strong>
        </p>
        <h3 className='text-base1 mt-8 mb-4 border-t-2 border-black pt-4'>1949: Gratuidad universitaria</h3>
        <div className="relative w-full mt-6 mb-4 md:mb-50 lg:mb-80 xl:mb-100 2xl:mb-120">
          <div className="float-right w-1/3 ml-4 mb-4">
            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]">
              <Image
                src={data.images[0]}
                alt='Imagen2 de la nota nacional'
                fill
                className='object-cover rounded-lg shadow-lg'
              />
            </div>
            <div className="text-sm text-gray-600 mt-2 italic">
              {epigrafe()}
            </div>
          </div>
          <p>
            En 1949, durante el gobierno de Juan Domingo Perón, todas las <strong>universidades argentinas eran públicas y aranceladas.</strong> Siguiendo las ideas de los reformistas, se planteó dentro del Primer Plan Quinquenal Justicialista, la <strong>gratuidad</strong> de las mismas. De esta manera, <strong>Argentina se convirtió en el primer país de Latinoamérica en ofrecer una universidad pública, gratuita y de calidad a toda la población.</strong>
          </p>
          <br />
          <p>
            A partir de la sanción de la gratuidad, la matrícula de estudiantes de universidades públicas aumentó notablemente a <strong>más del doble</strong> en seis años. De este modo se terminaron de definir los pilares de las <strong>Universidad Nacionales Argentinas: públicas, gratuitas y al servicio de las mayorías populares.</strong>
          </p>
        </div>
        <h3 className='text-base1 mt-8 mb-4 border-t-2 border-black pt-4'>1966: Noche de los Bastones Largos</h3>
        <div className='relative w-full h-[300px] sm:h-[350px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] my-6'>
          <Image
            src={data.images[3]}
            alt='Imagen3 de la nota nacional'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <p>
          Un mes después del golpe de estado, encabezado por Juan Carlos Onganía, se decreta el fin de la autonomía universitaria, que se encontraba vigente desde la Reforma de 1918. Esta situación obliga a los rectores y decanos a asumir como interventores dependientes del Ministerio del Interior. En consecuencia, los rectores de Córdoba, el Litoral, Tucumán, La Plata y Buenos Aires decidieron renunciar a sus cargos. <strong>Como medida de lucha, diversas facultades fueron tomadas.</strong>
        </p>
        <br />
        <p>
          El 29 de julio de 1966 <strong>el gobierno de facto ordenó la intervención de las universidades nacionales</strong>. En la UBA fueron tomadas distintas facultades, en las cuales se encontraban <strong>estudiantes, docentes y no docentes.</strong> Estos <strong>fueron agredidos y desalojados violentamente por policías armados.</strong> Los <strong>bastones largos</strong> que utilizó la policía para golpear a las víctimas dio nombre a este hecho que quedó marcado en la historia de nuestro país.
        </p>

        <h3 className='text-base1 mt-8 mb-4 border-t-2 border-black pt-4'>1969: AZOS - Cordobazo, Rosariazo</h3>
        <div className='relative w-full h-[300px] sm:h-[350px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] my-6'>
          <Image
            src={data.images[4]}
            alt='Imagen4 de la nota nacional'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <p>
          En 1969, <strong>plena dictadura</strong> comandada por Juan Carlos Onganía, se dieron una serie de protestas y huelgas. Entre ellas las más significativas fueron el <strong>Cordobazo</strong>: donde <strong>obreros y estudiantes</strong> concretaron una <strong>insurrección masiva</strong> en Córdoba, se levantaron <strong>barricadas</strong>, se <strong>tomaron fábricas</strong> y <strong>el movimiento superó a la policía</strong>; y el <strong>segundo Rosariazo</strong>: a partir de la intervención de la Unión Ferroviaria por parte del gobierno militar y otras situaciones, <strong>creció el descontento del pueblo argentino que se organizó y unificó a una sociedad.</strong>
        </p>
        <div className='flex my-6'>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[5]}
              alt='Imagen5 de la nota nacional'
              fill
              className='object-cover rounded-lg shadow-lg'
            />
          </div>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[6]}
              alt='Imagen6 de la nota nacional'
              fill
              className='object-cover rounded-lg shadow-lg'
            />
          </div>
        </div>
        <p>
          El conflicto se extendió y el 16 de septiembre más de 250 mil manifestantes controlaron las calles, consiguiendo más adelante, el <strong>derrocamiento de Onganía e inspirando a las futuras generaciones.</strong> Se demostró así que, <strong>a través de la lucha y la organización</strong>, se puede cambiar la historia.
        </p>
        <div className='flex my-6'>
          <div className='relative w-1/4 h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[400px] 2xl:h-[450px]'>
            <Image
              src={data.images[7]}
              alt='Imagen7 de la nota nacional'
              fill
              className='object-cover rounded-lg shadow-lg'
            />
          </div>
        </div>

        <h3 className='text-base1 mt-8 mb-4 border-t-2 border-black pt-4'>1976: Noche de los Lápices</h3>

        <div className='relative w-full h-[300px] sm:h-[350px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] my-6'>
          <Image
            src={data.images[8]}
            alt='Imagen8 de la nota nacional'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>

        <p>
          El <strong>16 de septiembre de 1976</strong>, en la ciudad de La Plata, el <strong>gobierno de facto secuestró a diez estudiantes de entre 14 y 18 años</strong> en un operativo a cargo del Coronel Ramón Camps. Un año antes, los jóvenes, militantes de la <strong>UES (Unión de Estudiantes Secundarios)</strong> y de diferentes agrupaciones, encabezaron una manifestación <strong>exigiendo el boleto estudiantil.</strong>
        </p>
        <div className='relative w-full h-[300px] sm:h-[350px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] my-6'>
          <Image
            src={data.images[9]}
            alt='Imagen9 de la nota nacional'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <p>
          Tras el reclamo, <strong>lograron conseguir ese derecho</strong>; sin embargo, iniciada la dictadura fue revocado paulatinamente. <strong>Los militares identificaron a los estudiantes que participaron de la protesta como subversivos y terroristas.</strong>
        </p>
        <br />
        <p>
          <strong>Las desapariciones no fueron hechos aislados, sino que integraron un plan sistemático que se fue consolidando con las dictaduras anteriores.</strong>
        </p>

        <h3 className='text-base1 mt-8 mb-4 border-t-2 border-black pt-4'>1990: Comedor UNRC</h3>
        <p>
          El servicio del comedor lo controlaba una empresa privada: <strong>comida cara y de mala calidad.</strong> Universitarios reclamaban por un mejor servicio con <strong>choripaneadas</strong> frente al comedor.
        </p>
        <div className='relative w-full h-[300px] sm:h-[350px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] my-6'>
          <Image
            src={data.images[10]}
            alt='Imagen10 de la nota nacional'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <p>
          Tiempo después se le <strong>resigna</strong> el contrato a la empresa y el 14 de mayo de 1990, <strong>estudiantes organizados</strong> de distintas carreras <strong>tomaron la iniciativa de reabrir el comedor</strong>: lo autogestionaron y <strong>prestaron un servicio mínimo, pero fundamental.</strong> Un primer menú que consistía en <strong>mate cocido caliente, facturas, sándwich de mortadela y fruta</strong>, al que fueron anexándole otras cosas. Luego de arduo trabajo devino en la organización del <strong>comedor que hoy tenemos.</strong>
        </p>

        <h3 className='text-base1 mt-8 mb-4 border-t-2 border-black pt-4'>HOY: Marchas Federales por la Educación</h3>
        <p>
          Desde 2024 se llevaron a cabo <strong>tres marchas federales nacionales</strong> contra el <strong>ajuste</strong> y el <strong>desfinanciamiento</strong> al sistema universitario por parte del gobierno nacional, siendo la última la del 17 de septiembre del presente año.
        </p>
        <div className='relative w-full h-[300px] sm:h-[350px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] my-6'>
          <Image
            src={data.images[11]}
            alt='Imagen11 de la nota nacional'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <p>
          Gracias a la movilización de gran parte de la población en todo el país, se logró aprobar en diputados el <strong>rechazo al veto</strong> de la ley de presupuesto universitario que fue elaborada entre el CIN, la FUA y FATUN.
        </p>

        <h4 className='italic text-black max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl pt-8' style={{ textShadow: 'none' }}>El movimiento estudiantil es capaz de cambiar el rumbo del país en pos de garantizar nuestros derechos. Se demuestra que las y los estudiantes somos protagonistas de grandes transformaciones sociales, capaces de defender derechos conquistados y abrir camino a nuevas generaciones.</h4> 
        <h3 className='text-base1 mt-8 mb-4 pt-4'>Sin estudiantes organizados, no hay universidad pública posible.</h3>
      </main>
    </>
  );
}

function epigrafe() {
  return (
    <span className='flex justify-end font-truculenta text-lg text-gray-600'>Ilustración: Ana Machado</span>
  );
}