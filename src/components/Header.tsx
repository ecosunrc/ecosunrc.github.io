import Image from "next/image";
import SideNav from "./SideNav";
import SocialMediaIcon from "./SocialMediaIcon";
import Link from "next/link";
import { linksNav, linksDropdown, linksSocialMedia } from "./Links";

const Header: React.FC = () => {
  return (
    <header className="global-header w-full bg-base2">
      <div className="inside-header grid grid-cols-3 px-10 justify-between items h-full">
        <div className="flex items-center gap-40">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo de la revista"
              width={150}
              height={40}
              className="rounded-md hover:shadow-lg transition-all duration-200"
              priority
            />
          </Link>
          <div className="flex gap-4">
            {linksSocialMedia.map((link) => (
              <SocialMediaIcon
                key={link.type}
                src={link.src}
                type={link.type}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link href='/last-edition' className="flex w-fit h-full justify-center items-center text-lg text-white p-1 rounded-md hover:underline transition-all duration-300">
            Última edición
            <Image
              src="/logo.svg"
              alt="Icono de última edición"
              width={24}
              height={24}
              className="ml-2"
            />
          </Link>
        </div>
        <SideNav linksNav={linksNav} linksDropdown={linksDropdown} />
      </div>
    </header>
  );
}

export default Header;