export interface TypeLink {
  name: string;
  href: string;
  style?: string;
}

export interface SocialMediaLink {
  type: 'wsp' | 'ig' | 'twitter';
  src: string;
}

export const linksNav: TypeLink[] = [
  { name: 'Noticias', href: '/news' },
  { name: 'Contacto', href: '/contact' },
];

export const linksDropdown: TypeLink[] = [
  { name: '1', href: '/1' },
  { name: '2', href: '/2' },
];

export const linksSocialMedia: SocialMediaLink[] = [
  { type: 'wsp', src: 'https://w.app/g8jnqr' },
  { type: 'ig', src: 'https://www.instagram.com/ecosunrc' },
  { type: 'twitter', src: 'https://www.x.com/' }
];
