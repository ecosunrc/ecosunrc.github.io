'use client';
import { linksDropdown as editions } from '@/components/Links';

export default function Ediciones() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] min-h-screen p-8 bg-gradient-to-b from-base2/50 to-base2/100'>
      <main className='flex flex-col gap-6 row-start-2 items-center text-white'>
        <h1 className='text-center text-base1 mt-3 p-4 rounded w-full max-w-lg'>
          Ediciones
        </h1>
        <ul className='list-disc pl-5 space-y-3'>
          {editions.map((edition) => (
            <li key={edition.name}>
              <a href={edition.href} className='text-xl lg:text-2xl text-base1 hover:underline'>
                {edition.name}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}