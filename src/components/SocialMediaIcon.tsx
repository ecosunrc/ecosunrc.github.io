'use client';
import Image from "next/image";
import { SocialMediaLink } from "./Links";

export default function SocialMediaIcon({ src, type }: SocialMediaLink) {
  return (
    <a href={src} target="_blank" rel="noopener noreferrer">
      <div className="bg-black hover:bg-white transition-all duration-200 rounded-full">
        <Image
          src={`/${type}.svg`}
          alt={`${type} ico`}
          width={36}
          height={36}
        />
      </div>
    </a>
  );
};