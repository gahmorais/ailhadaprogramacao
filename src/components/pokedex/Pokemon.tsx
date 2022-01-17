import { useQuery } from "react-query";
import Image from "next/image";
import { getPokemonDataByUrl } from "service/ApiPokedex";
import Loading from "../Loading";
import { capitalFirstLetter } from "helpers/formatString";
import Link from "next/link";

interface IPokemonProps {
  children: string;
}

export default function Pokemon({ children: url }: IPokemonProps) {
  const { data, isLoading } = useQuery(url, async () =>
    getPokemonDataByUrl(url)
  );

  if (isLoading || !data) {
    return <Loading />;
  }
  const officialArtwork = data.sprites.other["official-artwork"].front_default;
  const alternativeArt = data.sprites.front_default;
  const image = officialArtwork ? officialArtwork : alternativeArt;
  return (
    <div className="flex flex-col m-2 shadow-lg p-4 rounded-lg">
      <Link href={`/pokedex/pokemon/${data.id}`}>
        <a>
          <Image src={image} width="120" height="120" alt={data.name} />
        </a>
      </Link>
      <span className="text-center font-semibold">
        {capitalFirstLetter(data.name)}
      </span>
    </div>
  );
}
