'use client';

interface EditionLink {
  name: string;
  href: string;
}

const editions: EditionLink[] = [
  { name: '1', href: '/1' },
  { name: '2', href: '/2' },
];

export default function Editions() {
  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 bg-base1'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start text-white'>
        <h1 className='text-center text-3xl text-black bg-base2 font-bold mt-3 p-4'>Ediciones</h1>
        <ul className='list-disc pl-5'>
          {editions.map((edition) => (
            <li key={edition.name}>
              <a href={edition.href} className='text-blue-500 hover:underline'>
                {edition.name}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}