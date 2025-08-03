export interface SectionData {
  title: string;
  section: string;
  lastImage: string;
  images: string[];
  link: string;
  className: string;
  alt: string;
}

export const sectionsData = {
  estudiantil: {
    section: 'estudiantil',
    title: '¿Qué modelo de universidad queremos defender?',
    lastImage: '/ediciones/1/estudiantil-1.jpg',
    images: [],
    link: '/estudiantil',
    className: '',
    alt: 'img estudiantil',
  },
  universidad: {
    section: 'universidad',
    title: 'Comedor Comunitario “Lxs Pibxs del Puente”',
    lastImage: '/imagenes/portadas/universidad.jpg',
    images: [],
    link: '/universidad',
    className: '',
    alt: 'img universidad',
  },
  local: {
    section: 'local',
    title: '¿Puede funcionar la universidad con el presupuesto actual?',
    lastImage: '/imagenes/portadas/local.webp',
    images: [],
    link: '/local',
    className: '',
    alt: 'img local',
  },
  suplemento: {
    section: 'suplemento',
    title: 'Ecos: un espacio de comunicación y expresión',
    lastImage: '/imagenes/portadas/suplemento.avif',
    images: [],
    link: '/suplemento',
    className: '',
    alt: 'img suplemento',
  }
};
