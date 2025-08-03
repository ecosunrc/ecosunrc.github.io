import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { sectionsData } from '@/data/sectionsData';
import Typewriter from 'typewriter-effect';

interface CarouselComponentProps {
  deviceType?: string;
}

export default function CarouselComponent({ deviceType = 'desktop' }: CarouselComponentProps) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {deviceType === 'mobile' && (
        <h1 className='flex text-center text-base1 px-4 py-12 min-h-64 items-center mt-8 max-h-1/2'>
          <Typewriter
            options={{
              strings: ['Bienvenido a la revista estudiantil de la UNRC: ECOS', 'Un espacio para la voz de los estudiantes', 'Sumá tu voz al eco estudiantil', 'Explorá nuestras ediciones y secciones'],
              autoStart: true,
              loop: true,
              deleteSpeed: 40,
              delay: 60
            }}
          />
        </h1>
      )}
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== 'mobile'}
        customTransition='all ease-in-out .9s'
        containerClass='carousel-container'
        removeArrowOnDeviceType={['tablet', 'mobile']}
        deviceType={deviceType}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px flex justify-center items-center'
        className='carousel-component w-full min-h-1/2'
      >
        {Object.values(sectionsData).map((item, index) => (
          <div key={index} className='relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]'>
            <Image
              src={item.lastImage}
              alt={item.alt}
              fill
              className={`object-cover w-full h-full ${item.className || ''}`}
              sizes='(max-width: 768px) 100vw, 100vw'
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black/50 p-4'>
              <h1 className='text-center text-white'>
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}