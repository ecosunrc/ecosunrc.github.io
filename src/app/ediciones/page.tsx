'use client';
import { linksDropdown as editions } from '@/components/Links';
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('@/components/PDFViewer'), {
  ssr: false,
});

export default function Ediciones() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] min-h-screen p-8 bg-gradient-to-b from-base2/50 to-base2/100'>
      <main className='flex flex-col gap-6 row-start-2 items-center text-white'>
        <h1 className='text-center text-base1 mt-3 p-4 rounded w-full max-w-lg'>
          Ediciones
        </h1>
        <ul className='space-y-3'>
          {editions.map((edition) => (
            <li key={edition.name}>
              <a href={edition.href} className=''>
                <PDFViewer file={edition.pdfSrc} onlyView/>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}