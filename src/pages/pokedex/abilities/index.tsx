import { useRouter } from "next/dist/client/router";
import Head from 'next/head'
import { useState } from "react";
import { useQuery } from "react-query";
import Ability from "components/pokedex/Ability";
import Loading from "components/Loading";
import Navbar from "components/Navbar";
import PaginationButton from "components/pokedex/PaginationButton";
import { getPagination } from "service/ApiPokedex";

export default function Index() {
  const router = useRouter();
  const { offset } = router.query;
  const render: boolean = router.isReady;
  const [pagination, setPagination] = useState<string>(
    `https://pokeapi.co/api/v2/ability/?offset=${offset}&limit=50`
  );
  const { data: abilities, isLoading } = useQuery(
    pagination,
    async () => getPagination(pagination),
    { enabled: render }
  );

  if (isLoading || !abilities) {
    return <Loading />;
  }

  function handleClick(url: string) {
    if (url !== null) {
      const urlSplited = url.split("?");
      router.push(`/pokedex/abilities/?${urlSplited[1]}`);
      setPagination(url);
    }
  }
  return (
    <>
      <Navbar />
      <Head>
        <title>Pokedex | Habilidades</title>
        <link rel="icon" href="/pokebola.ico" />
      </Head>
      <div className="container mx-auto mt-4">
        <h2 className="font-semibold text-2xl text-center m-4">Habilidades</h2>
        <ul className="flex flex-wrap items-center justify-center">
          {abilities.results.map((abilities, index) => (
            <li>
              <Ability key={index}>{abilities.url}</Ability>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-5 space-x-4 pl-3">
          <PaginationButton
            onButtonClick={handleClick}
            url={abilities.previous}
          >
            Previous
          </PaginationButton>
          <PaginationButton onButtonClick={handleClick} url={abilities.next}>
            Next
          </PaginationButton>
        </div>
      </div>
    </>
  );
}
