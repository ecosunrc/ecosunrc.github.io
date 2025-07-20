'use client';
import React from "react";
import Image from "next/image";
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import CarouselComponent from "@/components/Carousel";

export default function Home() {

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
      <section className="home bg-base1 p-8 h-[95vh] flex flex-col items-center justify-center">
        <Image 
          src="/logo.svg"
          alt="Logo"
          width={2000}
          height={100}
          className="mx-auto"
        />
      </section>
      <Element name="section1">
        <section className="flex items-center justify-center text-4xl font-bold text-white bg-base2 h-screen">
          Bienvenido a la Revista
        </section>
      </Element>
      <Element name="section2">
        <section className="flex items-center justify-center bg-base1 h-screen">
          <h1 className="text-center text-2xl font-bold text-white mt-10">
            Explora nuestras secciones y descubre contenido interesante
          </h1>
        </section>
      </Element>
      <Element name="section3">
        <section className="flex items-center justify-center bg-base2 h-screen">
          <CarouselComponent deviceType="desktop"/>
        </section>
      </Element>
      <Element name="section4">
        <section className="flex items-center justify-center text-4xl font-bold text-white bg-base1 h-screen">
          ¿Quiénes somos?
        </section>
      </Element>
      <nav className="fixed left-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 opacity-70 rounded-r-lg shadow-lg">
        <ul className="flex flex-col gap-4">
          <li>
            <a onClick={scrollToTop} className="hover:underline hover:text-base1 cursor-pointer p-2">Inicio</a>
          </li>
          <li>
            <Link to="section1" smooth={true} duration={1500} className="hover:underline hover:text-base1 cursor-pointer p-2">Bienvenido</Link>
          </li>
          <li>
            <Link to="section2" smooth={true} duration={1500} className="hover:underline hover:text-base1 cursor-pointer p-2">Explora</Link>
          </li>
          <li>
            <Link to="section3" smooth={true} duration={1500} className="hover:underline hover:text-base1 cursor-pointer p-2">Revistas</Link>
          </li>
          <li>
            <Link to="section4" smooth={true} duration={1500} className="hover:underline hover:text-base1 cursor-pointer p-2">¿Quiénes somos?</Link>
          </li>
          <li>
            <a onClick={scrollToBottom} className="hover:underline hover:text-base1 cursor-pointer p-2">Bottom</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}