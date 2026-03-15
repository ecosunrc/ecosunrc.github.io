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
  }
];