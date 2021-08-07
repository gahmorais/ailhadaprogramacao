import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading";
import Navbar from "../../../components/Navbar";
import PaginationButton from "../../../components/PaginationButton";
import Type from "../../../components/Type";
import { getTypesPagination } from "../../../service/Api";

export default function Types() {
  const router = useRouter();
  const { offset, limit } = router.query;
  const render: boolean = router.isReady;
  const [pagination, setPagination] = useState<string>(
    `https://pokeapi.co/api/v2/type?offset=${offset}&limit=${limit}`
  );
  const { data: types, isLoading } = useQuery(
    pagination,
    async () => getTypesPagination(pagination),
    { enabled: render }
  );

  if (!types || isLoading) {
    return <Loading />;
  }

  const { results } = types;

  return (
    <>
      <Navbar />
      <Head>
        <title>Pokedex | Types</title>
        <link rel="icon" href="/pokebola.ico" />
      </Head>
      <main className="container mx-auto flex flex-col items-center">
      <h2 className="font-semibold text-2xl text-center m-4">Habilidades</h2>
        <ul className="flex flex-wrap justify-center">
          {results.map((type, index) => {
            return (
              <li key={index} className="m-1">
                <Type>{type.url}</Type>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
