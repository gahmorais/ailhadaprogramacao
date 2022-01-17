import { ReactElement } from "react";

interface IPokemonContainerProps {
  children: ReactElement[];
}

export default function PokemonContainer({ children }: IPokemonContainerProps) {
  return (
    <ul className="flex flex-wrap items-center mx-auto justify-center">
      {children}
    </ul>
  );
}
