import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { sectionsData } from '@/data/sectionsData';

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
      className='carousel-component w-full h-screen'
    >
      {Object.values(sectionsData).map((item, index) => (
        <div key={index} className='relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]'>
          <Image
            src={item.lastImage}
            alt={item.alt}
            fill
            className={`object-fit w-full h-full ${item.className || ''}`}
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
  );
}