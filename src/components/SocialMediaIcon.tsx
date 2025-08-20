'use client';
import Image from 'next/image';
import { SocialMediaLink } from './Links';

export default function SocialMediaIcon({ src, type, color, size }: SocialMediaLink) {
  return (
    <a href={src} target='_blank' rel='noopener noreferrer'>
      <div className='hover:bg-white/100 transition-all duration-200 rounded-full scale-90 hover:scale-100'>
        <Image
          src={`/imagenes/social-media/${type}${color ? `-${color}` : ''}.svg`}
          alt={`${type} ico`}
          width={size || 36}
          height={size || 36}
        />
      </div>
    </a>
  );
};