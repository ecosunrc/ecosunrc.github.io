'use client';
import React, { useEffect, useState, useCallback } from "react";
import { Link, animateScroll as scroll, scroller } from 'react-scroll';
import CarouselComponent from "@/components/Carousel";
import ScrollSection from "@/components/SectionScroll";
import Sections from "@/components/Sections";

const sectionNames = ["home", "section1", "section2", "section3", "footer"];

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollOptions = { duration: 800, smooth: true };
  const [isIndexCollapsed, setIsIndexCollapsed] = useState<boolean>(true);

  const handleScroll = useCallback((event: WheelEvent) => {
  if (event.deltaY > 0) {
    if (currentSection < sectionNames.length - 2) {
      const nextSection = currentSection + 1;
      scroller.scrollTo(sectionNames[nextSection], scrollOptions);
      setCurrentSection(nextSection);
    } else {
      scrollToBottom();
    }
  } else if (event.deltaY < 0) {
    if (currentSection > 0) {
      const prevSection = currentSection - 1;
      scroller.scrollTo(sectionNames[prevSection], scrollOptions);
      setCurrentSection(prevSection);
    }
  }
}, [currentSection]);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [handleScroll]);

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
    <div className="nav">
      <ScrollSection name="home" className="bg-base1">
        <CarouselComponent deviceType="desktop"/>
      </ScrollSection>
      <ScrollSection name="section1" className="bg-base2 flex flex-col gap-16">
        <h1 className="text-center text-6xl font-bold text-black bg-white/80 p-16">
          Te damos la bienvenida a la revista estudiantil de la UNRC: ECOS
        </h1>
        <p className="text-center text-2xl text-black bg-white mx-auto w-full max-w-4xl p-4 resize-none rounded-lg shadow-lg">
          Acá vas a encontrar un espacio de discusión, reflexión y creatividad, donde estudiantes compartimos luchas, noticias y actividades relacionadas con la universidad.
          <br />
          ¡Sumá tu voz al eco estudiantil!
        </p>
      </ScrollSection>
      <ScrollSection name="section2" className="bg-base1 flex flex-col gap-16">
        <h1 className="text-center text-6xl font-bold text-white mt-10">
          Explorá nuestras secciones
        </h1>
        <Sections />
      </ScrollSection>
      <ScrollSection name="section3" className="bg-base2 flex flex-col justify-between">
        <h1 className="text-center text-8xl font-bold text-white w-full p-16 bg-base1">
          ¿QUÉ ES ECOS?
        </h1>
        <h3 className="text-justify text-3xl font-bold font-serif text-black mx-auto w-full max-w-6xl p-4 resize-none">
          Ecos, una revista estudiantil de la Universidad Nacional de Río Cuarto.
        </h3>
        <p className="text-justify text-xl font-semibold font-serif text-white mx-auto w-full max-w-6xl p-4 resize-none">
          Ecos busca dar voz a las luchas, noticias y actividades que nos involucran como comunidad universitaria.
          <br />
          <br />
          Somos un grupo de estudiantes de diferentes carreras que busca crear un espacio de comunicación y expresión para todos los estudiantes. A través de nuestra revista, queremos dar voz a las luchas, noticias y actividades que nos involucran como comunidad universitaria.
        </p>
      </ScrollSection>
      <div onMouseLeave={() => setIsIndexCollapsed(true)}>
        <nav className={`fixed right-0 top-3/4 -translate-y-1/2 text-white p-4 rounded-l-lg shadow-lg ${isIndexCollapsed? 'bg-black' : 'bg-black/80'}`} onMouseEnter={() => setIsIndexCollapsed(false)}>
          {!isIndexCollapsed ? (
            <ul className="flex flex-col gap-4">
              <li>
                <a onClick={scrollToTop} className="hover:underline hover:text-base1 cursor-pointer p-2">Inicio</a>
              </li>
              <li>
                <Link to="section1" smooth={true} duration={1500} className="hover:underline hover:text-base1 cursor-pointer p-2">Bienvenida</Link>
              </li>
              <li>
                <Link to="section2" smooth={true} duration={1500} className="hover:underline hover:text-base1 cursor-pointer p-2">Explora</Link>
              </li>
              <li>
                <a onClick={scrollToBottom} className="hover:underline hover:text-base1 cursor-pointer p-2">¿Qué es Ecos?</a>
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