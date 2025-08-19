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
      <h4 className='italic text-black max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-10' style={{ textShadow: 'none' }}>El presupuesto nacional destinado a la educación se mantiene congelado desde 2023, mientras que la inflación sigue en ascenso.</h4>
      <br />
      <div className='relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:h-[900px] mt-6'>
        <Image
          src={data.images[0]}
          alt='Portada nota nacional'
          fill
          className='object-cover shadow-lg'
        />
      </div>
      <main className='prose prose-lg prose-invert max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto p-8 text-black'>
        
        <p>
          Ante el congelamiento del presupuesto, la comunidad universitaria se ve en la posición de recortar insumos para mantener su funcionamiento básico, sin poder garantizar las condiciones para mantener la permanencia estudiantil, una infraestructura en condiciones habitables y salarios dignos.
        </p>
        <p>
          La Ley de Educación Nacional (LEN) establece que un 6% del Producto Bruto Interno (PBI), que representa el presupuesto que dispone el país para administrar los gastos públicos, debe destinarse a la educación y proyectos afines.
        </p>
        <div className='relative w-full h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[550px] my-6'>
          <Image
            src={data.images[1]}
            alt='Imagen1 de la nota nacional'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <p>
          Con el gobierno actual no disponemos de un presupuesto específico para el área universitaria dejando como resultado el congelamiento del asignado en el año 2023. En simples palabras, las universidades llevan dos años y medio con la misma financiación ante una inflación que aumenta todos los meses.
        </p>
        <br />

        <p>
          Luego del último veto por parte del presidente Javier Milei a la Ley de Financiamiento Universitario, propuesta en octubre del 2024, el CIN en conjunto con la FUA y FATUN construyeron un nuevo proyecto de ley. Según el artículo N° 1: “la presente ley tiene por objeto garantizar la protección y el sostenimiento del financiamiento de las instituciones universitarias públicas en todo el territorio de la República Argentina”. 
        </p>

        <p>
          El Consejo Interuniversitario Nacional (CIN), asegura que se requieren 7,2 billones de pesos para garantizar el funcionamiento básico del sistema universitario nacional. Sin embargo, el gobierno contempla destinar solo 3,8 billones, lo que representa poco más del 50% de lo necesario. Esta asignación equivale a aproximadamente el 0,51% del PBI, una cifra que se aleja cada vez más de lo establecido por la LEN.
        </p>
        <br />
        
        <p>
          Según un análisis realizado por el Centro de Economía Nacional (CIEN), en 2024 se consolidó una caída del presupuesto universitario del 25%.
        </p>
        <br />

        <p>
          Toda esta situación se evidencia en el día a día de la universidad: becas pausadas, programas suspendidos, recortes en créditos universitarios, y salarios insuficientes para garantizar una vida digna, afectando la permanencia de quienes quieren acceder y habitar la universidad.
        </p>
        <br />
        <p>
          En este contexto, entrevistamos a Cecilia Irusta, Profesora de Francés de la Universidad Nacional de  Río Cuarto (UNRC), desde hace 14 años.
        </p>
        <br />
        <InterviewCard
          nombre='Cecilia Irusta'
          fecha='Agosto, 2025'
          cita='Como nos pasó en 2001, nuestro poder adquisitivo se ve afectado, nuestros sueldos se han desvalorizado más rápidamente que en aquella ocasión. Lo veo en mi salario claramente: necesitaría  ganar $2.000.000 para acceder a una vida sin sobresaltos en cuanto a lo económico. Por otra parte, en mi tarea docente compruebo cómo desde el año pasado no hay suficiente presupuesto o directamente no hay en viáticos por ejemplo, si hay presupuesto para el primer cuatrimestre, para el segundo ya no.'
          imagen='/imagenes/entrevistados/cecilia-irusta.jpeg'
          color={1}
          pregunta='¿Cómo ves la situación presupuestaria de la universidad?, ¿Cómo sentís que te afecta como docente?'
        />
        <InterviewCard
          nombre='Cecilia Irusta'
          fecha='Agosto, 2025'
          cita='Hoy en día, a pesar de ser profesora adjunta exclusiva, mi salario no me alcanza para vivir, debo organizar minuciosamente mis gastos. Tengo 32 años de antigüedad, he tenido que trabajar ya sea en la escuela secundaria o de manera particular para poder contribuir al mantenimiento de mi familia. En general la mayoría de las y los docentes debemos tener dos trabajos para poder subsistir.'
          color={1}
          pregunta='¿Tu sueldo docente te alcanza bien para vivir y mantener a tu familia? ¿Tuviste que trabajar por fuera de la universidad para lograr vivir bien?'
        />
        <InterviewCard
          nombre='Cecilia Irusta'
          fecha='Agosto, 2025'
          cita='Siempre por una cuestión u otra, los docentes tenemos que poner dinero de nuestro bolsillo para ir a congresos, formaciones y perfeccionamiento.'
          color={1}
          pregunta='¿Alguna vez tuviste que poner plata de tu propio bolsillo para la docencia universitaria?'
        />
      </main>
    </>
  );
}