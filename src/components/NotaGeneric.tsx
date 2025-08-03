'use client';
import { useEffect, useState } from 'react';

type Props = {
  edition: number;
  section: string;
};

const NOTAS: Record<
  string,
  Record<string, () => Promise<{ default: React.ComponentType<any> }>>
> = {
  '1': {
    estudiantil: () => import('@/notas/1/estudiantil/nota'),
    universidad: () => import('@/notas/1/universidad/nota'),
    local: () => import('@/notas/1/local/nota'),
    suplemento: () => import('@/notas/1/suplemento/nota'),
  },
  // '2': { ... }
};

export default function NotaGeneric({ edition, section }: Props) {
  const [NotaComponent, setNotaComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const loadFn = NOTAS[String(edition)]?.[section];
        if (!loadFn) throw new Error('No se encontró la función de import');
        const mod = await loadFn();
        setNotaComponent(() => mod.default);
      } catch (e) {
        console.error(`No se pudo cargar la nota para edición ${edition}, sección ${section}:`, e);
        setError(true);
      }
    };
    load();
  }, [edition, section]);

  if (error) {
    return (
      <div className='flex justify-center text-center text-red-500 py-10 items-center mt-auto'>
        No se encontró la nota para la edición <strong>{edition}</strong> y sección <strong>{section}</strong>.
      </div>
    );
  }

  if (!NotaComponent) {
    return (
      <div className='flex justify-center text-center py-10 text-gray-500 items-center'>
        Cargando nota de la edición <strong>{edition}</strong>...
      </div>
    );
  }

  return (
    <article className='px-4 sm:px-6 md:px-8 py-8 text-white min-h-screen'>
      <div className='bg-white max-w-screen mx-auto'>
        <NotaComponent />
      </div>
    </article>
  );
}
