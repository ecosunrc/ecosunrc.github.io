'use client';

export default function SectionByEditionClient({ editionData, sectionData }: { editionData: any, sectionData: any }) {
  return (
    <div className='flex bg-gradient-to-b from-base2/50 to-base2/100 px-4 py-8 min-h-screen text-white justify-center items-center'>
      <h4>Contenido de la {sectionData.section} de la edición {editionData.number}</h4>
    </div>
  );
}
