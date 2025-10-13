export interface TypeLink {
  name: string;
  href: string;
  style?: string;
  pdfSrc: string;
}

export interface SocialMediaLink {
  type: 'wsp' | 'ig' | 'twitter';
  src: string;
  color?: 'green' | 'black';
  size?: number;
}

export interface SectionCardLinks {
  name: string;
  href: string;
  description?: string;
  image?: string;
}

export const sections: string[] = [
  'Estudiantil',
  'Nacional',
  'Universidad',
  'Suplemento',
];

export const linksNav: SectionCardLinks[] = [
  { name: 'Estudiantil', href: '/seccion/estudiantil', description: 'Últimas noticias en el ámbito estudiantil', image: 'https://www.lv16.com.ar/archivos/img/o/179253_1692914351_834.jpg' },
  { name: 'Nacional', href: '/seccion/nacional', description: '¿Qué está pasando en nuestros alrededores?', image: 'https://cesarlerena.com.ar/wp-content/uploads/2023/10/Mapa-Bicontinetal-Espacios-Maritimos-scaled.jpg' },
  { name: 'Universidad', href: '/seccion/universidad', description: 'Últimas noticias en el ámbito universitario', image: 'https://dc.exa.unrc.edu.ar/images/slider7001400/militancy3.jpg' },
  { name: 'Suplemento', href: '/seccion/suplemento', description: 'Explora más de nuestro contenido', image: 'https://sudoku-puzzles.net/wp-content/puzzles/asterisk-sudoku/easy/1.png' },
];

export const linksDropdown: TypeLink[] = [
  { name: '1', href: '/ediciones/1', pdfSrc: '/ediciones/1/revista.pdf' },
  { name: '2', href: '/ediciones/2', pdfSrc: '/ediciones/2/revista.pdf' }
];

export const linksSocialMedia: SocialMediaLink[] = [
  // { type: 'wsp', src: 'https://wa.me/+5493584377720' },
  { type: 'ig', src: 'https://www.instagram.com/ecosunrc' },
  { type: 'twitter', src: 'https://x.com/ECOSUNRC' }
];
