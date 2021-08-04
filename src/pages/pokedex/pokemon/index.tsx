import Head from "next/head";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading";
import { getPokemonPagination } from "../../../service/Api";
import PaginationButton from "../../../components/PaginationButton";
import { useState } from "react";
import Pokemon from "../../../components/Pokemon";

export default function Index() {
  const [pagination, setPagination] = useState<string>(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
  );
  const { data, isFetching } = useQuery(pagination, async () =>
    getPokemonPagination(pagination)
  );

  if (isFetching || !data) {
    return <Loading />;
  }

  function handleButtonClick(url: string) {
    if (url != null) {
      setPagination(url);
    }
  }

  return (
    <div className="flex flex-col">
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/pokebola.ico" />
      </Head>

      <main>
        <h1 className="font-semibold text-2xl text-center">Pokedex</h1>
        <div className="flex flex-wrap items-center mx-auto justify-center">
          {data.results.map((pokemon, index) => {
            return <Pokemon key={index}>{pokemon.url}</Pokemon>;
          })}
        </div>
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
