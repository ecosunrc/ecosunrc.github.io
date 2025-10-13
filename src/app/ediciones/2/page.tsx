'use client';

import Link from 'next/link';
import { sections } from '@/components/Links';
import dynamic from 'next/dynamic';
import {data as editionData} from './data';

const PDFViewer = dynamic(() => import('@/components/PDFViewer'), {
  ssr: false,
});

export default function Edicion() {
  return (
    <div className='px-4 py-8'>
      <div className='flex flex-col items-center gap-8 mt-8 lg:max-w-6xl mx-auto'>
        <div className='flex flex-col justify-center w-fit min-h-[80vh]'>
          <div className='flex justify-between mb-4 items-center'>
            {editionData.pdfPath && (
              <a
                href={editionData.pdfPath}
                download
                className='p-2 bg-base1 rounded text-center w-fit hover:scale-105 transition'
              >
                <span className='text-white font-button'>Descargar</span>
              </a>
            )}
          </div>
          <div className='flex w-full'>
            <PDFViewer
              file={editionData.pdfPath}
            />
          </div>
          <p className='text-gray-800 text-left '>
            {editionData.publishedAt}
          </p>
        </div>
        <div className='lg:max-w-6xl gap-4 flex grid grid-cols-2 sm:grid-cols-4'>
          {sections.map((section) => (
            <Link
              key={section}
              href={`/ediciones/2/${section.toLowerCase()}`}
              className='w-fit p-3 text-white hover:text-base1 hover:scale-105'
            >
              <h4>
                {section}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
