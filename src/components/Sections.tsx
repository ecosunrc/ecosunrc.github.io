import React from 'react';
import { linksNav } from './Links';
import SectionsCard from './cards/SectionsCard';

export default function Sections() {
  return(
    <ul className='flex flex-wrap items-center justify-center gap-4 text-lg text-gray-800 px-4'>
      {linksNav.map((link) => (
        <li key={link.href} className='cursor-pointer opacity-80 hover:opacity-100 transition-all duration-300'>
          <a href={link.href}><SectionsCard title={link.name} description={link.description || ''} image={link.image || '/logo.svg'} /></a>
        </li>
      ))}
    </ul>
  );
}