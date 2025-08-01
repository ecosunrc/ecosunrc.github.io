'use client';

import { sectionsData } from '@/data/sectionsData';
import { editionsData } from '@/data/editionsData';
import { redirect, useParams } from 'next/navigation';


export default function SectionByEdition() {
  const { section } = useParams();
  const { edition } = useParams();
  const editionNumber = Number(edition); 
  const editionData = editionsData[editionNumber];
  const sectionData = sectionsData[section as keyof typeof sectionsData];

  if (!editionData) {
    redirect('/ediciones/');
  }

  if (!sectionData) {
    redirect(`/ediciones/${edition}`);
  }

  return (
    <div className='flex bg-gradient-to-b from-base2/50 to-base2/100 px-4 py-8 min-h-screen text-white justify-center items-center'>
      <h4>Contenido de la {sectionData.section} de la edición {editionData.number}</h4>
    </div>
  );
}
