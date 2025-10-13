import { sections } from "@/components/Links";

interface SectionData {
  section: string;
  title: string;
  lastImage: string;
  alt: string;
  className?: string;
  src: string;
}

export const data: any = {
  date: 'Lunes, 27 de septiembre de 2025',
  pdfPath: '/ediciones/2/revista.pdf',
  sections: sections
};

export const sectionsData: SectionData[] = [
  {
    section: 'Estudiantil',
    title: 'NO VOY EN TREN, NI EN AVIÓN',
    lastImage: '/ediciones/2/estudiantil-2.png',
    alt: 'Descripción de la sección 1',
    src: '/ediciones/2/estudiantil',
  },
  {
    section: 'Universidad',
    title: 'VIAJES UNIVERSITARIOS: FIE',
    lastImage: '/ediciones/2/fie-2.jpg',
    alt: 'Descripción de la sección 2',
    src: '/ediciones/2/universidad',
  },
  {
    section: 'Nacional',
    title: 'EL MOVIMIENTO ESTUDIANTIL NO SE TOMA VACACIONES',
    lastImage: '/ediciones/2/nacional-12.jpg',
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