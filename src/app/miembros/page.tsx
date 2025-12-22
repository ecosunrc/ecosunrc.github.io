'use client';
import React from 'react';
import { redaccionMembers, edicionMembers, disenoMembers, revisionMembers } from './data';

export default function Members() {

  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-b from-base2/50 to-base2/100 items-center justify-start mt-16 lg:mt-0 p-8 lg:p-24'>
      <div className='max-w-4xl w-full mx-auto space-y-12'>

        <header className='text-center space-y-4'>
          <h1 className='text-base1'>Miembros del equipo</h1>
        </header>

        <section className='bg-white/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20'>
          <h3 className='text-base1 mb-6 border-b border-base1/20 pb-2'>Redacción</h3>
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 text-base1 font-medium'>
            {redaccionMembers.map((member, index) => (
              <li key={index} className='flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-base1/50'></span>
                {member}
              </li>
            ))}
          </ul>
        </section>

        <section className='bg-white/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20'>
          <h3 className='text-base1 mb-6 border-b border-base1/20 pb-2'>Revisión de Textos</h3>
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 text-base1 font-medium'>
            {revisionMembers.map((member, index) => (
              <li key={index} className='flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-base1/50'></span>
                {member}
              </li>
            ))}
          </ul>
        </section>

        <section className='bg-white/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20'>
          <h3 className='text-base1 mb-6 border-b border-base1/20 pb-2'>Edición y Diseño</h3>
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 text-base1 font-medium'>
            {edicionMembers.map((member, index) => (
              <li key={index} className='flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-base1/50'></span>
                {member}
              </li>
            ))}
          </ul>
        </section>

        <section className='bg-white/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20'>
          <h3 className='text-base1 mb-6 border-b border-base1/20 pb-2'>Diseño Web y Programación</h3>
          <div className='grid md:grid-cols-2 gap-8'>
            <ul className='space-y-3 text-base1 font-medium'>
              {disenoMembers.map((member, index) => (
                <li key={index} className='flex items-center gap-2'>
                  <span className='w-2 h-2 rounded-full bg-base1/50'></span>
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}