import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

interface CarouselComponentProps {
  deviceType?: string;
}

const CarouselItems = [
  {
    src: '/logo-square.svg',
    alt: 'logoloco',
    title: 'Nace nueva revista: Ecos',
    className: 'p-20',
  },
  {
    src: '/image1.jpg',
    alt: 'Image 1',
    title: 'Paisaje 1',
  },
  {
    src: '/image2.jpg',
    alt: 'Image 2', 
    title: 'Paisaje 2',
  },  
  {
    src: '/image3.jpg',
    alt: 'Image 3',
    title: 'BOOOOOOOOCAAAAAAA',
  },
  {
    src: '/image4.jpg',
    alt: 'Image 4',
    title: 'Boca se enfrenta a Atlético Tucumán en la Copa Argentina',
  },
  {
    src: '/image5.webp',
    alt: 'Image 5',
    title: 'Caputo y su bicicleta financiera',
  },
  {
    src: '/image6.jpg',
    alt: 'Image 6',
    title: 'La UNRC abre sus puertas luego del receso invernal',
  },
];

export default function CarouselComponent({ deviceType = 'desktop' }: CarouselComponentProps) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={deviceType !== 'mobile' ? true : false}
      customTransition='all ease-in-out .9'
      containerClass='carousel-container'
      removeArrowOnDeviceType={['tablet', 'mobile']}
      deviceType={deviceType}
      dotListClass='custom-dot-list-style'
      itemClass='carousel-item-padding-40-px flex justify-center items-center !p-0 !m-0'
      className='carousel-component w-full h-screen'
    >
      {CarouselItems.map((item, index) => (
        <>
          <div key={index} className='w-full h-screen'>
            <Image
              src={item.src}
              alt={item.alt}
              fill={true}
              className={`fill object-fit w-full h-full ${item.className}`} />
          </div>
          <div className='absolute bottom-0 left-0 right-0 bg-black/50 p-8 mb-8'>
            <h2 className='text-2xl font-bold text-center text-white/100'>{item.title}</h2>
          </div>
        </>
      ))}
    </Carousel>
  );
};