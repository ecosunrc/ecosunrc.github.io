import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

interface CarouselComponentProps {
  deviceType?: string;
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ deviceType }) => {
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
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={deviceType !== "mobile" ? true : false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={0}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px flex justify-center items-center"
      className="carousel-component w-1/2 h-1/2"
      centerMode={false}
    >
      <div className="news1 h-full flex flex-col justify-end items-center">
        <Image
          src="logo.svg"
          alt="logoloco"
          width={600}
          height={400}
        />
        <h2 className="text-2xl font-bold text-center mt-4">Nace nueva revista: Ecos</h2>
      </div>
      <div className="news2 h-full flex flex-col justify-end items-center">
        <Image
          src="/image1.jpg"
          alt="Image 1"
          width={600}
          height={400}
        />
        <h2 className="text-2xl font-bold text-center mt-4">La bicicleta financiera no frena</h2>
      </div>
      <div className="news3 h-full flex flex-col justify-end items-center">
        <Image
          src="/image2.jpg"
          alt="Image 2"
          width={600}
          height={400}
        />
        <h2 className="text-2xl font-bold text-center mt-4">Se viene</h2>
      </div>
      <div className="news4 h-full flex flex-col justify-end items-center">
        <Image
          src="/image3.jpg"
          alt="Image 3"
          width={600}
          height={400}
        />
        <h2 className="text-2xl font-bold text-center mt-4">BOOOOOOOOCAAAAAAA</h2>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;