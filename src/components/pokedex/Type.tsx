import Link from "next/link";
import { useQuery } from "react-query";
import { capitalFirstLetter } from "helpers/formatString";
import { getTypeByUrl } from "service/ApiPokedex";
import Loading from "../Loading";

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
    <div
      className={`text-white rounded-lg p-2 m-2 w-32 text-center bg-${name} border-2 border-gray-400 shadow-md rounded-lg hover:bg-${name}-dark`}
    >
      <Link href={`/pokedex/types/${id}`}>
        <a>{capitalFirstLetter(name)}</a>
      </Link>
    </div>
  );
}
