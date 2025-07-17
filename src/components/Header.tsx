import Image from "next/image";
import DropDown from "./Dropdown";

const Header: React.FC = () => {
  return (
    <header className="row-start-1 flex items-center justify-between w-full p-4 bg-cyan-700 shadow-md">
      <div className="flex items-center gap-4">
        <Image
          src="/logo.svg"
          alt="Logo de la revista"
          width={40}
          height={40}
        />
        <h1 className="text-2xl font-bold">Revistita</h1>
      </div>
      <nav className="flex gap-6 text-black">
        <a href="#" className="text-lg p-1 rounded-md hover:bg-cyan-900 hover:text-white hover:shadow-md transition-all duration-300">Inicio</a>
        <DropDown 
          name="Ediciones" 
          linksDropDown={[
            { name: 'Agosto', href: '/link1' },
            { name: 'Septiembre', href: '/link2' },
          ]}
        />
        <a href="#" className="text-lg p-1 rounded-md hover:bg-cyan-900 hover:text-white hover:shadow-md transition-all duration-300">Contacto</a>
      </nav>
      <div className="flex items-center gap-4">
        <a href="https://www.instagram.com/dosaagu" target="_blank" rel="noopener noreferrer">
          <Image
            src="/ig.png"
            alt="instagram ico"
            width={24}
            height={24}
            className="hover:opacity-80 transition-opacity"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;