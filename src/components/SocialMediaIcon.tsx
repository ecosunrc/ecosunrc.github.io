'use client';
import Image from "next/image";
import { SocialMediaLink } from "./Links";

const SocialMediaIcon: React.FC<SocialMediaLink> = ({src, type}) => {
  return (
    <a href={src} target="_blank" rel="noopener noreferrer">
      <div className="bg-white hover:bg-black transition-all duration-200 rounded-full">
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

export default SocialMediaIcon;