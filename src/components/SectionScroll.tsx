'use client';
import { Element } from 'react-scroll';
import React from 'react';

type ScrollSectionProps = {
  name: string;
  className?: string;
  children: React.ReactNode;
};

export default function ScrollSection({ name, className = '', children }: ScrollSectionProps) {
  return (
    <Element name={name}>
      <section className={`min-h-screen-1/2 sm:min-h-screen w-full flex flex-col items-center justify-center p-4 lg:p-0 ${className}`}>
        {children}
      </section>
    </Element>
  );
}
