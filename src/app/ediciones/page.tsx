'use client';

interface EditionLink {
  name: string;
  href: string;
}

const editions: EditionLink[] = [
  { name: '1', href: 'ediciones/1' },
  { name: '2', href: 'ediciones/2' },
];

export default function Ediciones() {
  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 bg-gradient-to-b from-base2/50 to-base2/100'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start text-white'>
        <h1 className='text-center text-3xl text-white bg-base1 font-bold mt-3 p-4'>Ediciones</h1>
        <ul className='list-disc pl-5'>
          {editions.map((edition) => (
            <li key={edition.name}>
              <a href={edition.href} className='text-3xl text-base1 hover:underline'>
                {edition.name}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}