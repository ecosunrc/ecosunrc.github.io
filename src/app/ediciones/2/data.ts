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
    lastImage: '/ediciones/2/estudiantil-1.png',
    alt: 'Descripción de la sección 1',
    src: '/ediciones/2/estudiantil',
  },
  {
    section: 'Universidad',
    title: 'LA CIENCIA ¿ARGENTINA?',
    lastImage: '/ediciones/2/conicet-3.png',
    alt: 'Descripción de la sección 2',
    src: '/ediciones/2/universidad',
  },
  {
    section: 'Nacional',
    title: '¿Puede funcionar la universidad con el presupuesto actual?',
    lastImage: '/ediciones/2/nacional-1.jpg',
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