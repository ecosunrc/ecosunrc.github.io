'use client';
import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import CarouselComponent from '@/components/Carousel';
import ScrollSection from '@/components/SectionScroll';
import Intro from '@/components/sections/Intro';
import Explore from '@/components/sections/Explore';
import AboutUs from '@/components/sections/AboutUs';


export default function Home() {
  const [isIndexCollapsed, setIsIndexCollapsed] = useState<boolean>(true);
  const [deviceType, setDeviceType] = useState<string>('desktop');

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(window.innerWidth < 1280 ? 'mobile' : 'desktop');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const options = {
    duration: 1500,
    smooth: true,
  };

  const scrollToTop = () => {
    scroll.scrollToTop(options);
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom(options);
  };
  
  return (
    <div className='w-full h-full bg-gradient-to-b from-base2/50 to-base2/100'>
      <div className='px-4 lg:px-0 mx-auto '>
        <ScrollSection name='home'>
          <CarouselComponent deviceType={deviceType}/>
        </ScrollSection>
        <ScrollSection name='section1' className='flex flex-col gap-12 lg:gap-16'>
          <Intro />
        </ScrollSection>
        <ScrollSection name='section2' className='flex flex-col gap-12 lg:gap-16'>
          <Explore />
        </ScrollSection>
        <ScrollSection name='section3' className='flex flex-col gap-12 lg:gap-16'>
          <AboutUs />
        </ScrollSection>
        <div onMouseLeave={() => setIsIndexCollapsed(true)}>
          <nav className={`hidden lg:block fixed right-0 top-3/4 -translate-y-1/2 text-white p-4 rounded-l-lg shadow-lg font-button ${isIndexCollapsed? 'bg-black' : 'bg-black/80'}`} onMouseEnter={() => setIsIndexCollapsed(false)}>
            {!isIndexCollapsed ? (
              <ul className='flex flex-col gap-4'>
                <li>
                  <a onClick={scrollToTop} className='hover:underline hover:text-base1 cursor-pointer p-2'>Inicio</a>
                </li>
                <li>
                  <Link to='section1' smooth={true} duration={1500} className='hover:underline hover:text-base1 cursor-pointer p-2'>Bienvenida</Link>
                </li>
                <li>
                  <Link to='section2' smooth={true} duration={1500} className='hover:underline hover:text-base1 cursor-pointer p-2'>Explora</Link>
                </li>
                <li>
                  <a onClick={scrollToBottom} className='hover:underline hover:text-base1 cursor-pointer p-2'>¿Qué es Ecos?</a>
                </li>
              </ul>
            ): (
              <span>Menú</span>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}