export interface SectionData {
  section: string;
  title: string;
  image: string;
  src: string;
  alt: string;
}

export const sectionsData: { sectionData: SectionData, lastFiveNotes: SectionData[] }[] = [
  {
    sectionData: {
      section: 'Estudiantil',
      title: 'LA NUEVA UNIVERSIDAD ARGENTINA',
      image: '/ediciones/4/sacau-1.webp',
      src: '/ediciones/4/estudiantil',
      alt: 'Descripción de la sección 1',
    },
    lastFiveNotes: [
      {
        section: 'Estudiantil',
        title: 'NO VOY EN TREN, NI EN AVIÓN',
        image: '/ediciones/2/estudiantil-2.webp',
        src: '/ediciones/2/estudiantil',
        alt: 'Descripción de la sección 1',
      },
      {
        section: 'Estudiantil',
        title: '¿QUÉ MODELO DE UNIVERSIDAD QUEREMOS DEFENDER?',
        image: '/ediciones/1/estudiantil-1.webp',
        src: '/ediciones/1/estudiantil',
        alt: 'Alt1',
      },
      {
        section: 'Estudiantil',
        title: 'Próximamente',
        image: '/ediciones/1/estudiantil-3.webp',
        src: '/ediciones/1/estudiantil',
        alt: 'Alt2',
      },
      {
        section: 'Estudiantil',
        title: 'Próximamente',
        image: '/ediciones/1/estudiantil-4.webp',
        src: '/ediciones/1/estudiantil',
        alt: 'Alt3',
      },
      {
        section: 'Estudiantil',
        title: 'Próximamente',
        image: '/ediciones/1/estudiantil-5.webp',
        src: '/ediciones/1/estudiantil',
        alt: 'Alt4',
      }
    ],
  },
  {
    sectionData: {
      section: 'Universidad',
      title: 'LA NUEVA UNIVERSIDAD ARGENTINA',
      image: '/ediciones/4/sacau-1.webp',
      src: '/ediciones/4/estudiantil',
      alt: 'Descripción de la sección 1',
    },
    lastFiveNotes: [
      {
        section: 'Universidad',
        title: 'La Perla: La UNRC hace historia',
        image: '/ediciones/3/universidad-4.webp',
        src: '/ediciones/3/universidad',
        alt: 'Descripción de la sección 1',
      },
      {
        section: 'Universidad',
        title: 'VIAJES UNIVERSITARIOS: FIE',
        image: '/ediciones/2/fie-2.webp',
        src: '/ediciones/2/universidad',
        alt: 'Descripción de la sección 2',
      },
      {
        section: 'Universidad',
        title: 'LA CIENCIA ¿ARGENTINA?',
        image: '/ediciones/1/conicet-3.webp',
        src: '/ediciones/1/universidad',
        alt: 'Alt1',
      },
      {
        section: 'Universidad',
        title: 'Próximamente',
        image: '/ediciones/1/conicet-2.webp',
        src: '/ediciones/1/universidad',
        alt: 'Alt2',
      },
      {
        section: 'Universidad',
        title: 'Próximamente',
        image: '/ediciones/1/conicet-3.webp',
        src: '/ediciones/1/universidad',
        alt: 'Alt3',
      }
    ],
  },
  {
    sectionData: {
      section: 'Nacional',
      title: 'CIENCIA QUE ROMPE EL CASCARÓN',
      image: '/ediciones/4/paleo-1.webp',
      src: '/ediciones/4/nacional',
      alt: 'Descripción de la sección Nacional',
    },
    lastFiveNotes: [
      {
        section: 'Nacional',
        title: 'La Perla: La UNRC hace historia',
        image: '/ediciones/3/universidad-4.webp',
        src: '/ediciones/3/universidad',
        alt: 'Descripción de la sección 1',
      },
      {
        section: 'Nacional',
        title: 'EL MOVIMIENTO ESTUDIANTIL NO SE TOMA VACACIONES',
        image: '/ediciones/2/nacional-12.webp',
        src: '/ediciones/2/nacional',
        alt: 'Alt5',
      },
      {
        section: 'Nacional',
        title: '¿Puede funcionar la universidad con el presupuesto actual?',
        image: '/ediciones/1/nacional-1.webp',
        src: '/ediciones/1/nacional',
        alt: 'Alt1',
      },
      {
        section: 'Nacional',
        title: 'Próximamente',
        image: '/ediciones/1/nacional-1.webp',
        src: '/ediciones/1/nacional',
        alt: 'Alt2',
      },
      {
        section: 'Nacional',
        title: 'Próximamente',
        image: '/ediciones/1/nacional-2.webp',
        src: '/ediciones/1/nacional',
        alt: 'Alt3',
      }
    ],
  },
  {
    sectionData: {
      section: 'Suplemento',
      title: 'FERIA DEL LIBRO JUAN FILLOY',
      image: '/ediciones/4/feria-3.webp',
      src: '/ediciones/4/local',
      alt: 'Descripción de la sección 1',
    },
    lastFiveNotes: [
      {
        section: 'Suplemento',
        title: 'GENERACIÓN Z A LAS CALLES',
        image: '/ediciones/3/internacional-2.webp',
        src: '/ediciones/3/internacional',
        alt: 'Descripción de la sección 1',
      },
      {
        section: 'Suplemento',
        title: '¿Qué es ECOS?',
        image: '/imagenes/logo/logo-square.svg',
        src: '/ediciones/1/suplemento',
        alt: 'Alt1',
      },
      {
        section: 'Suplemento',
        title: 'Próximamente',
        image: '/imagenes/logo/logo-square.svg',
        src: '/ediciones/1/suplemento',
        alt: 'Alt2',
      },
      {
        section: 'Suplemento',
        title: 'Próximamente',
        image: '/imagenes/logo/logo-square.svg',
        src: '/ediciones/1/suplemento',
        alt: 'Alt3',
      },
      {
        section: 'Suplemento',
        title: 'Próximamente',
        image: '/imagenes/logo/logo-square.svg',
        src: '/ediciones/1/suplemento',
        alt: 'Alt4',
      },
    ],
  },
];