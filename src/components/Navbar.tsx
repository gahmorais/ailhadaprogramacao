import Link from "next/link";
import Image from "next/image";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
  return (
    <nav className="flex item-center justify-between bg-red-400">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className=" flex text-sm lg:flex-grow items-center space-x-4 p-2">
          <div>
            <Link href="/">
              <a>
                <Image
                  src="/pokebola.png"
                  height="40"
                  width="40"
                  alt="icone-pokebola"
                />
              </a>
            </Link>
          </div>
          <NavbarLink path="/pokedex/pokemon">Pokemon</NavbarLink>
          <NavbarLink path="/pokedex/abilities">Habilidades</NavbarLink>
          <NavbarLink path="/pokedex/types">Tipos</NavbarLink>
        </div>
      </div>
    </nav>
  );
}
