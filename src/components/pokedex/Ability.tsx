import Link from "next/link";
import { useQuery } from "react-query";
import { capitalFirstLetter } from "helpers/formatString";
import { getAbilitiesByUrl } from "service/ApiPokedex";
import Loading from "../Loading";

interface IAbilityProps {
  children: string;
}

export default function Ability({ children: url }: IAbilityProps) {
  const { data: ability, isLoading } = useQuery(url, async () =>
    getAbilitiesByUrl(url)
  );
  if (isLoading || !ability) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col w-32 h-10 bg-gradient-to-tl text-white from-gray-600 to-gray-400 m-1 rounded-lg justify-center items-center">
      <Link className="text-center" href={`/pokedex/abilities/${ability.id}`}>
        {capitalFirstLetter(ability.name)}
      </Link>
    </div>
  );
}
