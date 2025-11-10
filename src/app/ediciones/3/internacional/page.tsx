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
      <h4 className='italic text-black max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-10' style={{ textShadow: 'none' }}>Desde hace tiempo, el mundo se ve atravesado por diversas revueltas encabezadas por colectivos de la “generación Z”. Jóvenes desde quince hasta veintinueve años, que lideran protestas por causas políticas, sociales y económicas.</h4>
      <br />

      <div className='relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:h-[900px] mt-6'>
        <Image
          src={data.images[2]}
          alt='Portada nota interinternacional'
          fill
          className='object-cover shadow-lg'
        />
      </div>
      <main className='prose prose-lg prose-invert max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto p-8 text-black'>
        <p>
          Los levantamientos, iniciados hace unos años, se intensificaron en estos últimos meses en países tales como <strong>Paraguay, Perú, Nepal, Sri Lanka, Marruecos</strong>, entre otros. Las consecuencias escalaron hasta <strong>civiles muertos, destituciones de funcionarios y casas de gobierno incendiadas.</strong>
        </p>
        <br />
        <p>
          Las manifestaciones dirigidas por los jóvenes se caracterizan por el uso de símbolos de sus propias culturas. Por ejemplo, la bandera <a className='italic'>Jolly Roger</a> del anime <a className='italic'>One Piece</a> en representación de <strong>la lucha contra las altas esferas del poder.</strong> Las protestas se centran en combatir la corrupción,  la desigualdad económica y el nepotismo, que refiere a utilizar posiciones políticas para designar en otros cargos a familiares o amigos y concederles favores.
        </p>
        <h3 className='text-base1 mt-8 mb-4 border-t-2 border-black pt-4'>Paraguay</h3>
        <p>
          En Paraguay tuvo lugar una de las manifestaciones más recientes de la Generación Z, en donde cientos de personas <strong>corearon lemas contra la corrupción en el centro de la capital</strong> y mostraron reclamos por deficiencias en los servicios públicos y falta de oportunidades laborales. Dialogamos con <strong>Jazmín Estigarribia</strong>, quien es estudiante y participante del “Movimiento Estudiantil Creemos” de la Facultad de Filosofía de la Universidad Nacional de Asunción. Ella afirmó que el movimiento de jóvenes “está integrado por progresistas, libertarios de derecha , simpatizantes de izquierda, trumpistas, bukelistas, etc; el punto en común sería <strong>la lucha contra la corrupción y por los DDHH</strong>.”
        </p>
        <div className='flex my-6'>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[0]}
              alt='Imagen3 de la nota internacional'
              fill
              className='object-cover'
            />
          </div>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[3]}
              alt='Imagen4 de la nota internacional'
              fill
              className='object-cover'
            />
          </div>
        </div>
        <p>
          Con respecto a la movilización, hubo una fuerte presencia policial que reprimió y detuvo a varias personas, lo que generó un fuerte impacto mediático en el país y en los alrededores. “En total <strong>fueron detenidas treinta personas sin ningún tipo de explicación</strong> y posteriormente fueron liberadas cumplidas las 24 hs. El día lunes 29 de septiembre.”, nos comentó Estigarribia.
        </p>
        <br />
        <p>
          No es la primera vez que se dan grandes manifestaciones encabezadas por jóvenes en Paraguay. En 2015, estudiantes de la Universidad Nacional de Asunción expresaron su descontento acerca de irregularidades en la institución universitaria. “En Paraguay <strong>se culpa de todo a la corrupción.</strong> En su crítica hablan poco de desigualdad, eso es lo que principalmente empezó a mover a esos compañeros de Generación Z.”
        </p>
        <br />
        <h3 className='text-base1 mt-8 mb-4 border-t-2 border-black pt-4'>Perú</h3>
        <p>
          Por otro lado, en Perú, también se dieron una serie de movilizaciones que generaron grandes repercusiones. Para conocer con precisión lo que sucedió en ellas nos pusimos en contacto con el secretario general de la Federación de Estudiantes del Perú (FEP), <strong>Luis Dampier Escudero Ponte.</strong>
        </p>
        <br />
        <p>
          Escudero nos explicó que estas movilizaciones comenzaron en 2020, con la asunción del presidente Manuel Merino. Fueron encabezadas por jóvenes que rechazaban la idea de lo que consideraban un “<strong>golpe parlamentario</strong>”, y fue por ello que salieron a la calle. Durante el transcurso de las mismas “hubo fuertes enfrentamientos con la policía, que resultaron en <strong>varios muertos</strong> y <strong>cientos de heridos</strong>, lo que llevó a la rápida renuncia de Merino en menos de una semana.”, relataba Ponte.
        </p>
        <div className='flex my-6'>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[4]}
              alt='Imagen1 de la nota internacional'
              fill
              className='object-cover rounded-lg shadow-lg'
            />
          </div>
          <div className='relative w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
            <Image
              src={data.images[1]}
              alt='Imagen2 de la nota internacional'
              fill
              className='object-cover rounded-lg shadow-lg'
            />
          </div>
        </div>
        <p>
          Estos enfrentamientos crearían una crisis social y política, que se profundizó en 2022, por la destitución del entonces presidente Pedro Castillo y la consiguiente asunción de Dina Boluarte. Ante esto, <strong>estallaron nuevas protestas en todo el país</strong> que enfrentaron una represión aún mayor a las de 2020, dejando un saldo de decenas de muertos y cientos de heridos.
        </p>
        <br />
        <p>
          Llegamos a la actualidad, en dónde jóvenes peruanos salieron nuevamente a las calles <strong>en contra de la asunción como presidente de José Jerí, acusado de violencia sexual y corrupción.</strong> Luis nos cuenta que el motivo de este nuevo accionar de la generación Z tiene que ver con “un descontento persistente con las élites políticas y la demanda de cambios estructurales profundos en el país”, además se suma “la corrupción sistémica, la precariedad laboral y la falta de acceso a servicios públicos básicos”. <strong>Las protestas de la generación Z en Perú no son un fenómeno aislado, “representan una expresión local de una ola global de movilización”.</strong>
        </p>
        <br />
        <p>
          Encontramos dos factores en común en las manifestaciones que se están gestando alrededor del mundo: por un lado, están siendo <strong>enarboladas por los jóvenes de la generación Z</strong>, que no siguen estructuras organizativas sólidas, ni conducciones claras, sino que son parte de <strong>estallidos espontáneos</strong>. Por otro lado, se inician a través de las <strong>redes sociales</strong>. Su uso ha atravesado un exponencial crecimiento en la última década, y es por esto que comienzan a surgir nuevas formas de organización política, como lo fueron las llamadas por Discord en Nepal, o los grupos de Telegram en el resto de países. Las redes sociales brindan una <strong>forma nueva de estructurarse políticamente</strong>, y los jóvenes supieron aprovechar esto para expresar su descontento con la corrupción, la desigualdad social, la precariedad laboral, entre muchas otras situaciones que generan malestar a quienes enfrentan estas situaciones desde que tienen conciencia y se sienten excluidos en el sistema.
        </p>
        <br />
        <p>
          La generación Z se cansó de vivir en un sistema que <strong>constantemente los excluye</strong>, que viene desde hace varias generaciones y que, encima, quienes pertenecen a clases sociales acomodadas  lo muestran en sus redes sociales con total indiferencia. <strong>Es por esto que salen a las calles</strong>, para ser escuchados y para luchar contra la estructura social y económica que históricamente los ha dejado afuera.
        </p>
      </main>
    </>
  );
}