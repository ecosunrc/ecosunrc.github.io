export interface SectionData {
  section: string;
  title: string;
  image: string;
  src: string;
  alt: string;
}

export const sectionsData: {sectionData: SectionData, lastFiveNotes: SectionData[]}[] = [
  {
    sectionData: {
      section: 'Estudiantil',
      title: 'NO VOY EN TREN, NI EN AVIÓN',
      image: '/ediciones/2/estudiantil-2.png',
      src: '/ediciones/2/estudiantil',
      alt: 'Descripción de la sección 1',
    },
    lastFiveNotes: [
      {
        section: 'Estudiantil',
        title: '¿Qué modelo de universidad queremos defender?',
        image: '/ediciones/1/estudiantil-1.jpg',
        src: '/ediciones/1/estudiantil',
        alt: 'Alt1',
      },
      {
        section: 'Estudiantil',
        title: 'Proximamente',
        image: '/ediciones/1/estudiantil-3.jpg',
        src: '/ediciones/1/estudiantil',
        alt: 'Alt2',
      },
      {
        section: 'Estudiantil',
        title: 'Proximamente',
        image: '/ediciones/1/estudiantil-4.jpg',
        src: '/ediciones/1/estudiantil',
        alt: 'Alt3',
      },
      {
        section: 'Estudiantil',
        title: 'Proximamente',
        image: '/ediciones/1/estudiantil-5.jpg',
        src: '/ediciones/1/estudiantil',
        alt: 'Alt4',
      },
      {
        section: 'Estudiantil',
        title: 'Proximamente',
        image: '/ediciones/1/menu-1.jpeg',
        src: '/ediciones/1/estudiantil',
        alt: 'Alt5',
      },
    ],
  },
  {
    sectionData: {
      section: 'Universidad',
      title: 'VIAJES UNIVERSITARIOS: FIE',
      image: '/ediciones/2/fie-2.jpg',
      src: '/ediciones/2/universidad',
      alt: 'Descripción de la sección 2',
    },
    lastFiveNotes: [
      {
        section: 'Universidad',
        title: 'LA CIENCIA ¿ARGENTINA?',
        image: '/ediciones/1/conicet-3.png',
        src: '/ediciones/1/universidad',
        alt: 'Alt1',
      },
      {
        section: 'Universidad',
        title: 'Proximamente',
        image: '/ediciones/1/conicet-2.jpg',
        src: '/ediciones/1/universidad',
        alt: 'Alt2',
      },
      {
        section: 'Universidad',
        title: 'Proximamente',
        image: '/ediciones/1/conicet-3.png',
        src: '/ediciones/1/universidad',
        alt: 'Alt3',
      },
      {
        section: 'Universidad',
        title: 'Proximamente',
        image: '/ediciones/1/conicet-2.jpg',
        src: '/ediciones/1/universidad',
        alt: 'Alt4',
      },
      {
        section: 'Universidad',
        title: 'Proximamente',
        image: '/ediciones/1/unrc-1.jpg',
        src: '/ediciones/1/universidad',
        alt: 'Alt5',
      },
    ],
  },
  {
    sectionData: {
      section: 'Nacional',
      title: 'EL MOVIMIENTO ESTUDIANTIL NO SE TOMA VACACIONES',
      image: '/ediciones/2/nacional-12.jpg',
      src: '/ediciones/2/nacional',
      alt: 'Descripción de la sección 3',
    },
    lastFiveNotes: [
      {
        section: 'Nacional',
        title: '¿Puede funcionar la universidad con el presupuesto actual?',
        image: '/ediciones/1/nacional-1.jpg',
        src: '/ediciones/1/nacional',
        alt: 'Alt1',
      },
      {
        section: 'Nacional',
        title: 'Proximamente',
        image: '/ediciones/1/nacional-1.jpg',
        src: '/ediciones/1/nacional',
        alt: 'Alt2',
      },
      {
        section: 'Nacional',
        title: 'Proximamente',
        image: '/ediciones/1/nacional-2.jpg',
        src: '/ediciones/1/nacional',
        alt: 'Alt3',
      },
      {
        section: 'Nacional',
        title: 'Proximamente',
        image: '/ediciones/1/nacional-1.jpg',
        src: '/ediciones/1/nacional',
        alt: 'Alt4',
      },
      {
        section: 'Nacional',
        title: 'Proximamente',
        image: '/ediciones/1/nacional-2.jpg',
        src: '/ediciones/1/nacional',
        alt: 'Alt5',
      },
    ],
  },
  {
    sectionData: {
      section: 'Suplemento',
      title: '¿Qué es ECOS?',
      image: '/imagenes/logo/logo-square.svg',
      src: '/ediciones/1/suplemento',
      alt: 'Descripción de la sección 4',
    },
    lastFiveNotes: [
      {
        section: 'Suplemento',
        title: 'Proximamente',
        image: '/imagenes/logo/logo-square.svg',
        src: '/ediciones/1/suplemento',
        alt: 'Alt1',
      },
      {
        section: 'Suplemento',
        title: 'Proximamente',
        image: '/imagenes/logo/logo-square.svg',
        src: '/ediciones/1/suplemento',
        alt: 'Alt2',
      },
      {
        section: 'Suplemento',
        title: 'Proximamente',
        image: '/imagenes/logo/logo-square.svg',
        src: '/ediciones/1/suplemento',
        alt: 'Alt3',
      },
      {
        section: 'Suplemento',
        title: 'Proximamente',
        image: '/imagenes/logo/logo-square.svg',
        src: '/ediciones/1/suplemento',
        alt: 'Alt4',
      },
      {
        section: 'Suplemento',
        title: 'Proximamente',
        image: '/imagenes/logo/logo-square.svg',
        src: '/ediciones/1/suplemento',
        alt: 'Alt5',
      },
    ],
  },
];