interface SectionData {
  section: string;
  title: string;
  lastImage: string;
  alt: string;
  className?: string;
  src: string;
}

export const sections: string[] = [
  'Universidad',
  'Internacional',
];

export const data: any = {
  date: 'Lunes, 31 de octubre de 2025',
  pdfPath: '/ediciones/3/revista.pdf',
  sections: sections
};

export const sectionsData: SectionData[] = [
  {
    section: 'Internacional',
    title: 'GENERACIÓN Z A LAS CALLES',
    lastImage: '/ediciones/3/internacional-5.webp',
    alt: 'Descripción de la sección 2',
    src: '/ediciones/3/internacional',
  },
  {
    section: 'Universidad',
    title: 'La Perla: La UNRC hace historia',
    lastImage: '/ediciones/3/universidad-4.webp',
    alt: 'Descripción de la sección 1',   
    src: '/ediciones/3/universidad',
  },
  {
    section: 'Estudiantil',
    title: 'NO VOY EN TREN, NI EN AVIÓN',
    lastImage: '/ediciones/2/estudiantil-2.webp',
    alt: 'Descripción de la sección 1',
    src: '/ediciones/2/estudiantil',
  },
  {
    section: 'Nacional',
    title: 'EL MOVIMIENTO ESTUDIANTIL NO SE TOMA VACACIONES',
    lastImage: '/ediciones/2/nacional-12.webp',
    alt: 'Descripción de la sección 3',
    src: '/ediciones/2/nacional',
  },
  {
    section: 'Suplemento',
    title: '¿Qué es ECOS?',
    lastImage: '/imagenes/logo/logo-square.svg',
    alt: 'Descripción de la sección 3',
    className: 'object-contain object-center',
    src: '/ediciones/1/suplemento',
  },
];