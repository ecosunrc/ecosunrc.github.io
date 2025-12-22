'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { data } from './data';
import Loading from '@/components/Loading';
import { useEffect, useState } from 'react';

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
      <h4 className='italic text-black max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-10' style={{ textShadow: 'none' }}>Río Cuarto celebró 21 años de cultura y resistencia literaria, homenajeando a Juan Filloy con un espacio de encuentro gratuito para toda la comunidad.</h4>
      <br />
      <div className='relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[700px] 2xl:h-[800px] mt-6'>
        <Image
          src={data.images[2]}
          alt='Portada nota local'
          fill
          className='object-cover shadow-lg'
        />
      </div>
      <main className='prose prose-lg prose-invert max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto p-8 text-black'>
        <p>
          Este mes se llevó a cabo una nueva edición de la Feria del Libro Juan Filloy en la ciudad de Río Cuarto, que año a año se encarga de consolidar un espacio fundamental en la cultura local y regional. El evento se realiza de manera ininterrumpida desde hace <strong>veintiún años</strong>. A pesar de la crisis y los desafíos que la pandemia presentó, <strong>la cultura resistió y seguirá resistiendo.</strong>
        </p>
        <br />
        <p>
          Reconociendo el valor cultural y social de la palabra, en 2007 el Concejo Deliberante sancionó la ordenanza 1601/07, que establece la creación de la Comisión Permanente de Promoción del Libro, la Lectura y la Escritura. La misma tiene como objetivo generar espacios de debate y promover el acercamiento a los libros. En el art. 4 se enumeran las funciones de la Comisión, y entre ellas se destaca “Organizar anualmente la Feria del Libro ‘Juan Filloy’ de la Ciudad de Río Cuarto”
        </p>
        <br />
        <p>
          Lo que se destaca particularmente en esta edición, es la conmemoración de los <strong>veinticinco años del fallecimiento del escritor Juan Filloy</strong>, quien da nombre a la feria y que es, hasta hoy en día, un ícono de la cultura literaria en nuestra provincia. Además, este año se reeditó su obra “Karcino, Tratado de Palindromía”.
        </p>
        <br />
        <div className='relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[700px] 2xl:h-[800px]'>
          <Image
            src={data.images[1]}
            alt='Imagen2 de la nota local'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <br />
        <div className="relative w-full mt-6">
          <div className="float-left w-1/2 sm:w-1/3 mr-4 mb-4">
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px]">
              <Image
                src={data.images[0]}
                alt="Imagen1 de la nota estudiantil"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <p>
          La feria se realizó en el <strong>Ex Palacio de Justicia</strong> de la ciudad, luego de su restauración. Abriendo sus puertas desde el 17 al 24 de noviembre, con diversos stands de editoriales, sindicatos y librerías. La <strong>Biblioteca Personal Juan Filloy</strong> tuvo gran protagonismo como sede de la feria, con muestras, talleres y visitas guiadas. Los expositores provenían, no solo de la ciudad, sino también de otras, como Córdoba, Buenos Aires y Santa Fé.
        </p>
        <br />
        <p>
          Con el objetivo de que los participantes compartan sus puntos de vista, visitamos el lugar y dialogamos con ellos. Daniela de la Torre, miembro de la SADE (Sociedad Argentina de Escritores) y autora de libros infantiles, destaca la importancia del encuentro que se genera en espacios como la Feria, fomentando el diálogo, <strong>el acercamiento entre personas y la lectura en papel</strong>. Además, asegura “es un estímulo también para el escritor, que publica, que puede interactuar con el público, como yo. Es súper valioso. Hay que conservarlo, defenderlo como propio y mantenerlo entre todos.
        </p>
        <br />
        <p>
          No sólo esperar que una gestión política nos mantenga, sino también contribuir con la presencia”.
        </p>
        <br />
        <p>
          En este sentido, Luisa Luján Schewalie, escritora y miembro de SER (Sociedad de Escritores Riocuartenses), reafirma la idea de que <strong>la cultura no debe morir bajo ningún gobierno</strong>, “porque las personas con educación son las personas que tienen la posibilidad de elegir, de ser libres”. Sostiene que la Feria es un acontecimiento del cual no se puede prescindir ya que es una gran posibilidad de acercarse a los libros: “es un acontecimiento gratuito, puede venir todo el mundo, no se cobra entrada; la gente puede pasear, mirar los distintos stands, hablar. Se congrega un gran grupo de autores, de editoriales, de librerías de todo el país; que tienen la posibilidad de mostrar su producto de forma masiva. Es un punto de encuentro”.
        </p>
        <br />
        <p>
          La cultura se sostiene y se fortalece cuando la comunidad la abraza. En los espacios como la Feria del Libro Juan Filloy no sólo se difunde literatura, sino que también se fomenta el intercambio y se afirma <strong>la identidad cultural de la ciudad y del interior del país</strong>. Entendiendo que los espacios culturales que fomentan el arte y sus diversas formas de expresión <strong>son pilares sociales que nos pertenecen a todos</strong>, su defensa es y seguirá siendo crucial.
        </p>
      </main >
    </>
  );
}