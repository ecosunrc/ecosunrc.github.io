'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';
import CarouselComponent from '@/components/Carousel';
import ScrollSection from '@/components/SectionScroll';
import Intro from '@/components/sections/Intro';
import Explore from '@/components/sections/Explore';
import AboutUs from '@/components/sections/AboutUs';

// const sectionNames = ['home', 'section1'];

export default function Home() {
//   const [currentSection, setCurrentSection] = useState(0);
//   const scrollOptions = { duration: 800, smooth: true };
  const [isIndexCollapsed, setIsIndexCollapsed] = useState<boolean>(true);

//   const handleScroll = useCallback((event: WheelEvent) => {
//   if (event.deltaY > 0) {
//     if (currentSection < sectionNames.length - 2) {
//       const nextSection = currentSection + 1;
//       scroller.scrollTo(sectionNames[nextSection], scrollOptions);
//       setCurrentSection(nextSection);
//     } else {
//       scrollToBottom();
//     }
//   } else if (event.deltaY < 0) {
//     if (currentSection > 0) {
//       const prevSection = currentSection - 1;
//       scroller.scrollTo(sectionNames[prevSection], scrollOptions);
//       setCurrentSection(prevSection);
//     }
//   }
// }, [currentSection]);

//   useEffect(() => {
//     window.addEventListener('wheel', handleScroll, { passive: false });
//     return () => window.removeEventListener('wheel', handleScroll);
//   }, [handleScroll]);

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
    <div className='bg-gradient-to-b from-base2/50 to-base2/100'>
      <ScrollSection name='home'>
        <CarouselComponent deviceType='desktop'/>
      </ScrollSection>
      <ScrollSection name='section1' className=' flex flex-col gap-16'>
        <Intro />
      </ScrollSection>
      <ScrollSection name='section2' className=' flex flex-col gap-16'>
        <Explore />
      </ScrollSection>
      <ScrollSection name='section3' className=' flex flex-col justify-between'>
        <AboutUs />
      </ScrollSection>
      <div onMouseLeave={() => setIsIndexCollapsed(true)}>
        <nav className={`fixed right-0 top-3/4 -translate-y-1/2 text-white p-4 rounded-l-lg shadow-lg ${isIndexCollapsed? 'bg-black' : 'bg-black/80'}`} onMouseEnter={() => setIsIndexCollapsed(false)}>
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
  );
}