import Link from "next/link";
import { useQuery } from "react-query";
import { capitalFirstLetter } from "../helpers/formatString";
import { getTypeByUrl } from "../service/Api";
import Loading from "./Loading";

interface ITypeProps {
  children: string;
}

export default function Type({ children: url }: ITypeProps) {
  const { data: type, isLoading } = useQuery(url, async () =>
    getTypeByUrl(url)
  );
  if (!type || isLoading) {
    return <Loading />;
  }

  const { name, id } = type;
  return (
    <div className={`w-36 h-10 shadow-lg rounded-lg bg-${name} flex flex-col items-center justify-center`}>
      <Link href={`/pokedex/types/${id}`}>
        <a>{capitalFirstLetter(name)}</a>
      </Link>
    </div>
  );
}
