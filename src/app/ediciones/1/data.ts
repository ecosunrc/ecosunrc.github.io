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
  date: 'Lunes, 18 de agosto de 2025',
  pdfPath: '/ediciones/1/revista.pdf',
  sections: sections
};

export const sectionsData: SectionData[] = [
  {
    section: 'Estudiantil',
    title: '¿Qué modelo de universidad queremos defender?',
    lastImage: '/ediciones/1/estudiantil-1.jpg',
    alt: 'Descripción de la sección 1',
    src: '/ediciones/1/estudiantil',
  },
  {
    section: 'Universidad',
    title: 'LA CIENCIA ¿ARGENTINA?',
    lastImage: '/ediciones/1/conicet-3.png',
    alt: 'Descripción de la sección 2',
    src: '/ediciones/1/universidad',
  },
  {
    section: 'Nacional',
    title: '¿Puede funcionar la universidad con el presupuesto actual?',
    lastImage: '/ediciones/1/nacional-1.jpg',
    alt: 'Descripción de la sección 3',
    src: '/ediciones/1/nacional',
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