import React from 'react';

interface NotaProps {
  title: string;
  publishedAt: string;
  children: React.ReactNode;
}

export default function Nota({ title, publishedAt, children }: NotaProps) {
  return (
    <article className='bg-gradient-to-b from-base2/50 to-base2/100 px-4 sm:px-6 md:px-8 py-8 text-white min-h-screen'>
      <div className='max-w-4xl mx-auto space-y-6'>
        <header className='border-b border-white/20 pb-4 mb-6'>
          <h1>{title}</h1>
          <p className='text-right text-white/70 mt-2'>Publicado el {publishedAt}</p>
        </header>

        <div className='prose prose-invert prose-lg max-w-none'>
          {children}
        </div>
      </div>
    </article>
  );
}
