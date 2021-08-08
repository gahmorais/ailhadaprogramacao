import Head from "next/head";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading";
import { getPokemonPagination } from "../../../service/Api";
import PaginationButton from "../../../components/PaginationButton";
import { useState } from "react";
import Pokemon from "../../../components/Pokemon";
import { useRouter } from "next/dist/client/router";
import Navbar from "../../../components/Navbar";

export default function Index() {
  const router = useRouter();
  const { offset, limit } = router.query;
  const render: boolean = router.isReady;
  const [pagination, setPagination] = useState<string>(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  const { data, isFetching } = useQuery(
    pagination,
    async () => getPokemonPagination(pagination),
    { enabled: render }
  );

  if (isFetching || !data) {
    return <Loading />;
  }

  function handleButtonClick(url: string) {
    if (url != null) {
      const urlSplited = url.split("?");
      router.push(`/pokedex/pokemon/?${urlSplited[1]}`);
      setPagination(url);
    }
  }

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/pokebola.ico" />
      </Head>

      <main>
        <h1 className="font-semibold text-2xl text-center">Pokedex</h1>
        <ul className="flex flex-wrap items-center mx-auto justify-center">
          {data.results.map((pokemon, index) => {
            return (
              <li>
                <Pokemon key={index}>{pokemon.url}</Pokemon>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center mt-5 space-x-4 pl-3">
          <PaginationButton
            onButtonClick={handleButtonClick}
            url={data.previous}
          >
            Previous
          </PaginationButton>
          <PaginationButton onButtonClick={handleButtonClick} url={data.next}>
            Next
          </PaginationButton>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
