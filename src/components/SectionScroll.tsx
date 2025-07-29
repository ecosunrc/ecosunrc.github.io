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
      <section className={`h-screen flex items-center justify-center ${className}`}>
        {children}
      </section>
    </Element>
  );
}
